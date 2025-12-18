# 🏗️ Architecture Hotel Voice AI - Intégration PMS

## 🎯 Principe Fondamental

**Hotel Voice AI est un CANAL DE DISTRIBUTION, pas un PMS.**

Tous les hôtels ont déjà un PMS qui gère :
- ✅ Réservations
- ✅ Paiements
- ✅ Inventaire
- ✅ Tarification
- ✅ Guest profiles

**Notre rôle** : Fournir une interface conversationnelle Voice AI qui se connecte à leur PMS existant.

---

## 🔄 Workflow Intégration

```
┌──────────────┐
│   Guest      │ "Je veux réserver une chambre"
└──────┬───────┘
       │ Voice (microphone)
       ↓
┌──────────────────────────────────────┐
│   Hotel Voice AI (Brantas)           │
│   ┌────────────────────────────┐     │
│   │  OpenAI Realtime API       │     │
│   │  - Speech-to-Text          │     │
│   │  - Intent Recognition      │     │
│   │  - Context Management      │     │
│   └────────┬───────────────────┘     │
│            │                         │
│   ┌────────▼───────────────────┐     │
│   │  PMS Adapter Layer         │     │
│   │  - Multi-PMS support       │     │
│   │  - Data transformation     │     │
│   │  - Error handling          │     │
│   └────────┬───────────────────┘     │
└────────────┼────────────────────────┘
             │ HTTPS / REST API
             ↓
┌──────────────────────────────────────┐
│   Hotel PMS (Existant)               │
│   ┌────────────────────────────┐     │
│   │  Mews / OPERA / Cloudbeds  │     │
│   │                            │     │
│   │  • Check availability      │     │
│   │  • Create reservation      │     │
│   │  • Process payment         │     │
│   │  • Send confirmation       │     │
│   └────────────────────────────┘     │
└──────────────────────────────────────┘
```

---

## 🔌 PMS Adapter Pattern

### Abstraction Commune

```typescript
// server/pms-adapter/base-adapter.ts
export interface PMSAdapter {
  // Availability
  checkAvailability(params: AvailabilityRequest): Promise<AvailabilityResponse>

  // Reservations
  createReservation(params: ReservationRequest): Promise<Reservation>
  getReservation(id: string): Promise<Reservation>
  updateReservation(id: string, updates: Partial<Reservation>): Promise<Reservation>
  cancelReservation(id: string): Promise<void>

  // Room info
  getRoomTypes(): Promise<RoomType[]>

  // Hotel info
  getHotelInfo(): Promise<HotelInfo>
}
```

### Implémentations par PMS

```typescript
// server/pms-adapter/mews-adapter.ts
export class MewsAdapter implements PMSAdapter {
  private apiUrl = 'https://api.mews.com/api/connector/v1'
  private clientToken: string

  async checkAvailability(params: AvailabilityRequest) {
    const response = await fetch(`${this.apiUrl}/availability/get`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Token': this.clientToken
      },
      body: JSON.stringify({
        StartUtc: params.checkIn,
        EndUtc: params.checkOut,
        ResourceCategoryIds: [params.roomTypeId]
      })
    })

    return this.transformMewsAvailability(await response.json())
  }

  async createReservation(params: ReservationRequest) {
    // Mews-specific implementation
    const response = await fetch(`${this.apiUrl}/reservations/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Token': this.clientToken
      },
      body: JSON.stringify({
        Reservations: [{
          StartUtc: params.checkIn,
          EndUtc: params.checkOut,
          CustomerId: params.guestId,
          ResourceCategoryId: params.roomTypeId,
          // Paiement géré par Mews selon leur config
        }]
      })
    })

    return this.transformMewsReservation(await response.json())
  }
}
```

```typescript
// server/pms-adapter/opera-adapter.ts
export class OperaAdapter implements PMSAdapter {
  private apiUrl = 'https://opera-api.oracle.com/v1'
  private apiKey: string

  async checkAvailability(params: AvailabilityRequest) {
    const response = await fetch(`${this.apiUrl}/hotels/{hotelId}/availability`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-key': this.apiKey
      },
      body: JSON.stringify({
        stayDateRange: {
          start: params.checkIn,
          end: params.checkOut
        },
        roomType: params.roomTypeId
      })
    })

    return this.transformOperaAvailability(await response.json())
  }

  async createReservation(params: ReservationRequest) {
    // OPERA-specific implementation
    // ...
  }
}
```

```typescript
// server/pms-adapter/cloudbeds-adapter.ts
export class CloudbedsAdapter implements PMSAdapter {
  // Similar implementation for Cloudbeds
}
```

```typescript
// server/pms-adapter/rms-adapter.ts
export class RMSAdapter implements PMSAdapter {
  // Similar implementation for RMS Cloud
}
```

### Factory Pattern

```typescript
// server/pms-adapter/factory.ts
export class PMSAdapterFactory {
  static create(pmsType: string, config: PMSConfig): PMSAdapter {
    switch (pmsType.toLowerCase()) {
      case 'mews':
        return new MewsAdapter(config)
      case 'opera':
        return new OperaAdapter(config)
      case 'cloudbeds':
        return new CloudbedsAdapter(config)
      case 'rms':
        return new RMSAdapter(config)
      default:
        throw new Error(`Unsupported PMS: ${pmsType}`)
    }
  }
}
```

---

## 🔧 Configuration par Hôtel

```javascript
// .env (configuration hôtel)
PMS_TYPE=mews
PMS_API_URL=https://api.mews.com/api/connector/v1
PMS_CLIENT_TOKEN=xxx
PMS_HOTEL_ID=xxx

# Ou pour OPERA
# PMS_TYPE=opera
# PMS_API_KEY=xxx
# PMS_HOTEL_ID=xxx
```

```javascript
// server/index.js - Initialisation
import { PMSAdapterFactory } from './pms-adapter/factory.js'

const pmsAdapter = PMSAdapterFactory.create(
  process.env.PMS_TYPE,
  {
    apiUrl: process.env.PMS_API_URL,
    clientToken: process.env.PMS_CLIENT_TOKEN,
    hotelId: process.env.PMS_HOTEL_ID
  }
)

// Routes API utilisent l'adapter
app.post('/api/bookings', async (req, res) => {
  const reservation = await pmsAdapter.createReservation(req.body)
  res.json(reservation)
})
```

---

## 💳 Gestion des Paiements

### ✅ Recommandation : Laisser le PMS gérer

```javascript
async function createVoiceBooking(bookingData) {
  // 1. Voice AI collecte les infos
  const guestInfo = await voiceAgent.collectGuestInfo()

  // 2. Voice AI envoie au PMS (SANS info paiement)
  const reservation = await pmsAdapter.createReservation({
    ...guestInfo,
    ...bookingData,
    // PAS de paymentInfo ici
  })

  // 3. Le PMS envoie automatiquement un lien de paiement
  //    selon leur configuration (email/SMS)
  //    → Stripe, Adyen, whatever ils utilisent déjà

  // 4. Voice AI confirme la réservation
  return {
    confirmationNumber: reservation.id,
    message: "Réservation créée ! Vous allez recevoir un email pour le paiement."
  }
}
```

### Avantages

```
✅ Pas de conformité PCI DSS pour Brantas
✅ Hôtel garde son processeur de paiement actuel
✅ Pas de double-comptabilité
✅ Réconciliation automatique dans le PMS
✅ Reporting unifié
```

---

## 🚀 Déploiement Multi-Hôtel

```
Brantas Voice AI Platform
├── Hotel A (Novotel Auckland)
│   └── PMS: OPERA Cloud
│       └── Payment: Stripe via OPERA
│
├── Hotel B (Boutique Auckland)
│   └── PMS: Mews
│       └── Payment: Adyen via Mews
│
├── Hotel C (Resort Fiji)
│   └── PMS: Cloudbeds
│       └── Payment: eWAY via Cloudbeds
│
└── Hotel D (Lodge Queenstown)
    └── PMS: RMS Cloud
    └── Payment: Payment Express via RMS
```

**Chaque hôtel** :
- ✅ Garde son PMS existant
- ✅ Garde ses processus de paiement
- ✅ Ajoute juste Voice AI comme nouveau canal

---

## 📊 Données Synchronisées

### PMS → Voice AI (Lecture)

```
✅ Disponibilités en temps réel
✅ Tarifs dynamiques
✅ Types de chambres
✅ Informations hôtel
✅ Statut réservations
```

### Voice AI → PMS (Écriture)

```
✅ Nouvelles réservations
✅ Modifications réservations
✅ Annulations
✅ Demandes spéciales
```

### Webhooks PMS → Voice AI (Notifications)

```
✅ Confirmation paiement
✅ Check-in/Check-out
✅ Changements de statut
✅ Modifications inventaire
```

---

## 🔒 Sécurité

### API Authentication

```javascript
// Chaque hôtel a ses propres credentials
const pmsConfig = {
  mews: {
    clientToken: process.env.MEWS_CLIENT_TOKEN,
    accessToken: process.env.MEWS_ACCESS_TOKEN
  },
  opera: {
    apiKey: process.env.OPERA_API_KEY,
    hotelId: process.env.OPERA_HOTEL_ID
  }
}

// Rotation automatique des tokens
// Rate limiting par PMS
// Retry logic avec exponential backoff
```

---

## 📈 Avantages Business

### Pour Brantas

```
✅ Vente à TOUS les hôtels (PMS-agnostic)
✅ Pas de responsabilité sur les paiements
✅ Implémentation rapide (2-4 semaines)
✅ Scaling facile (multi-hôtels)
✅ Maintenance réduite
```

### Pour les Hôtels

```
✅ Aucun changement infrastructure
✅ Garde leur PMS actuel
✅ Nouveau canal marketing (Voice AI)
✅ Expérience guest différenciante
✅ Coût réduit (juste l'interface Voice)
```

---

## 🎯 Roadmap Intégration

### Phase 1 (4 semaines)
- ✅ Adapter Mews (priorité : Novotel test)
- ✅ Tests A/B avec clients

### Phase 2 (4 semaines)
- ✅ Adapter OPERA (priorité : Accor)
- ✅ Multi-property support

### Phase 3 (4 semaines)
- ✅ Adapter Cloudbeds (marché général)
- ✅ Adapter RMS Cloud (APAC focus)

### Phase 4 (ongoing)
- ✅ Autres PMS à la demande
- ✅ Webhooks avancés
- ✅ Analytics cross-PMS

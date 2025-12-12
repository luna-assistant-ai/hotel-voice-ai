export interface HotelInfo {
  name: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  checkInTime: string;
  checkOutTime: string;
  amenities: string[];
  description: string;
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  inventory: number;
  features: string[];
}

export function getHotelInfo(): HotelInfo {
  return {
    name: import.meta.env?.VITE_HOTEL_NAME || 'Novotel Auckland Ellerslie',
    location: 'Ellerslie, Auckland, New Zealand',
    address: import.meta.env?.VITE_HOTEL_ADDRESS || '72-112 Greenlane Road East, Ellerslie, Auckland 1051',
    phone: import.meta.env?.VITE_HOTEL_PHONE || '+64 9 529 9530',
    email: import.meta.env?.VITE_HOTEL_EMAIL || 'H6167@accor.com',
    checkInTime: '2:00 PM',
    checkOutTime: '11:00 AM',
    amenities: [
      'Free WiFi',
      'Outdoor Swimming Pool',
      'Fully-Equipped Fitness Center',
      'Restaurant & Stylish Bar',
      '24/7 Room Service',
      'Concierge Service',
      'Free Parking',
      'Business Center',
      'Conference Facilities',
      'Near Ellerslie Racecourse',
      'Voice AI Assistant by Brantas'
    ],
    description: 'A premium 4.5-star Accor hotel in Ellerslie, Auckland. Just 15 minutes from the city center, offering modern amenities, stylish accommodations, and advanced Voice AI technology powered by Brantas.'
  };
}

export function getRoomTypes(): RoomType[] {
  return [
    {
      id: 'standard',
      name: 'Standard Room',
      description: 'Comfortable room with city view, queen bed, and modern amenities',
      price: 180,
      capacity: 2,
      inventory: 20,
      features: [
        'Queen bed',
        'City view',
        'Free WiFi',
        'Flat-screen TV',
        'Mini bar',
        'Coffee maker',
        'Private bathroom'
      ]
    },
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      description: 'Spacious room with harbor view, king bed, and premium amenities',
      price: 280,
      capacity: 3,
      inventory: 15,
      features: [
        'King bed',
        'Harbor view',
        'Free WiFi',
        'Flat-screen TV',
        'Mini bar',
        'Coffee maker',
        'Private bathroom',
        'Work desk',
        'Sitting area'
      ]
    },
    {
      id: 'suite',
      name: 'Executive Suite',
      description: 'Luxurious suite with separate living area, panoramic views',
      price: 450,
      capacity: 4,
      inventory: 8,
      features: [
        'King bed',
        'Separate living room',
        'Panoramic views',
        'Free WiFi',
        'Two flat-screen TVs',
        'Premium mini bar',
        'Nespresso machine',
        'Luxury bathroom with spa bath',
        'Work desk',
        'Dining area'
      ]
    },
    {
      id: 'penthouse',
      name: 'Penthouse Suite',
      description: 'Ultimate luxury with 360-degree views, multiple rooms, and exclusive services',
      price: 850,
      capacity: 6,
      inventory: 2,
      features: [
        'Two king bedrooms',
        'Large living room',
        '360-degree city and harbor views',
        'Free WiFi',
        'Multiple flat-screen TVs',
        'Full kitchen',
        'Premium bar',
        'Nespresso machine',
        'Two luxury bathrooms',
        'Private terrace',
        'Butler service',
        'Dining area for 8'
      ]
    }
  ];
}

export function getRoomTypeById(roomTypeId: string): RoomType | undefined {
  const rooms = getRoomTypes();
  return rooms.find(room => room.id === roomTypeId);
}

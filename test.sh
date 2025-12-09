#!/bin/bash
# Test suite for Hotel Voice AI

set -o pipefail

echo "🧪 Hotel Voice AI - Test Suite"
echo "==============================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counter
TESTS_PASSED=0
TESTS_FAILED=0

# Helper functions
test_pass() {
    echo -e "${GREEN}✅ PASS${NC}: $1"
    TESTS_PASSED=$((TESTS_PASSED + 1))
}

test_fail() {
    echo -e "${RED}❌ FAIL${NC}: $1"
    TESTS_FAILED=$((TESTS_FAILED + 1))
}

test_skip() {
    echo -e "${YELLOW}⚠️  SKIP${NC}: $1"
}

# 1. Test bundle generation
echo "Test 1: Bundle Generation"
if [ -f "public/bundle.js" ] && [ -s "public/bundle.js" ]; then
    BUNDLE_SIZE=$(du -h public/bundle.js | cut -f1)
    test_pass "Bundle exists and has content ($BUNDLE_SIZE)"
else
    test_fail "Bundle missing or empty"
fi

echo ""
echo "Test 2: Bundle Syntax Validation"
if node -c public/bundle.js 2>/dev/null; then
    test_pass "Bundle has valid JavaScript syntax"
else
    test_fail "Bundle has syntax errors"
fi

echo ""
echo "Test 3: TypeScript Source Files"
REQUIRED_FILES=("src/main.ts" "src/agents.ts" "src/tools.ts" "src/booking-api.ts" "src/hotel-config.ts")
ALL_EXIST=true
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ✗ $file (missing)"
        ALL_EXIST=false
    fi
done

if [ "$ALL_EXIST" = true ]; then
    test_pass "All TypeScript source files present"
else
    test_fail "Some TypeScript source files missing"
fi

echo ""
echo "Test 4: Dependencies"
if npm list zod @openai/agents >/dev/null 2>&1; then
    test_pass "Required dependencies installed"
else
    test_fail "Missing dependencies"
fi

echo ""
echo "Test 5: Server Files"
SERVER_FILES=("server/index.js" "server/booking-manager.js" "server/hotel-config.js")
ALL_EXIST=true
for file in "${SERVER_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file"
    else
        echo "  ✗ $file (missing)"
        ALL_EXIST=false
    fi
done

if [ "$ALL_EXIST" = true ]; then
    test_pass "All server files present"
else
    test_fail "Some server files missing"
fi

echo ""
echo "=============================="
echo "Test Summary"
echo "=============================="
echo -e "${GREEN}Passed: $TESTS_PASSED${NC}"
if [ $TESTS_FAILED -gt 0 ]; then
    echo -e "${RED}Failed: $TESTS_FAILED${NC}"
    exit 1
else
    echo -e "${GREEN}All tests passed!${NC}"
    exit 0
fi

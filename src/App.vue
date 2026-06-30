<script setup>
import { computed, ref } from 'vue'

const activeTab = ref('points')
const storeSearch = ref('')

const user = {
  firstName: 'Maya',
  lastName: 'Ellison',
  initials: 'ME',
  city: 'Seattle',
  memberSince: 'Apr 2022',
  tier: 'Gold',
  nextTier: 'Platinum',
}

const pointsSummary = {
  balance: 4685,
  neededForNextTier: 1315,
  progressPct: 78,
  expiringSoon: 220,
  expiringDate: 'Jul 24',
}

const pointTransactions = [
  { id: 1, description: 'Evergreen Bellevue - Apparel purchase', date: 'Jun 28', amount: 180 },
  { id: 2, description: 'Redeemed for $10 member coupon', date: 'Jun 21', amount: -500 },
  { id: 3, description: '2x Points Weekend bonus', date: 'Jun 18', amount: 240 },
  { id: 4, description: 'Evergreen Online - Home goods order', date: 'Jun 12', amount: 130 },
  { id: 5, description: 'Evergreen U Village - Beauty purchase', date: 'Jun 5', amount: 95 },
]

const offers = [
  {
    id: 1,
    title: '20% Off Clean Beauty Favorites',
    description: 'Save on moisturizers, serums, and refillable skincare through Sunday.',
    category: 'Beauty',
    expiresOn: 'Jul 7',
    promoCode: 'GLOW20',
    isNew: true,
    visual: '💄',
    bannerColor: '#E6F4EC',
  },
  {
    id: 2,
    title: '$15 Off Sustainable Apparel',
    description: 'Apply to orders over $100 on organic cotton and recycled blends.',
    category: 'Apparel',
    expiresOn: 'Jul 11',
    promoCode: 'GREEN15',
    visual: '👗',
    bannerColor: '#EFF5E4',
  },
  {
    id: 3,
    title: 'Free Gift With Home Collection Purchase',
    description: 'Get a soy wax mini candle with any home order of $75 or more.',
    category: 'Home',
    expiresOn: 'Jul 9',
    visual: '🕯️',
    bannerColor: '#F6EEE4',
  },
  {
    id: 4,
    title: '3x Points on Accessories',
    description: 'Earn triple points on totes, belts, and jewelry this week.',
    category: 'Accessories',
    expiresOn: 'Jul 5',
    pointsMultiplier: '3x Points',
    isNew: true,
    visual: '👜',
    bannerColor: '#E7F1F6',
  },
  {
    id: 5,
    title: 'Birthday Reward: Free Deluxe Sample Set',
    description: 'Celebrate your birthday month with a curated beauty mini kit.',
    category: 'Member Perk',
    expiresOn: 'Jul 30',
    visual: '🎁',
    bannerColor: '#F4EAF3',
  },
]

const stores = [
  {
    id: 1,
    name: 'Evergreen University Village',
    address: '2696 NE University Village St, Seattle, WA 98105',
    phone: '(206) 555-0142',
    distance: '2.4 mi',
    hours: '10:00 AM - 8:00 PM',
    isOpen: true,
    services: ['Curbside Pickup', 'Returns', 'Gift Wrap'],
    preferred: true,
  },
  {
    id: 2,
    name: 'Evergreen Bellevue Square',
    address: '575 Bellevue Way NE, Bellevue, WA 98004',
    phone: '(425) 555-0110',
    distance: '8.1 mi',
    hours: '10:00 AM - 9:00 PM',
    isOpen: true,
    services: ['Alterations', 'Returns', 'Styling Help'],
  },
  {
    id: 3,
    name: 'Evergreen Northgate',
    address: '401 NE Northgate Way, Seattle, WA 98125',
    phone: '(206) 555-0186',
    distance: '5.3 mi',
    hours: '11:00 AM - 7:00 PM',
    isOpen: true,
    services: ['Curbside Pickup', 'Returns'],
  },
  {
    id: 4,
    name: 'Evergreen Southcenter',
    address: '2800 Southcenter Mall, Tukwila, WA 98188',
    phone: '(206) 555-0139',
    distance: '12.6 mi',
    hours: '10:00 AM - 9:00 PM',
    isOpen: false,
    services: ['Pickup Lockers', 'Returns', 'Personal Shopper'],
  },
  {
    id: 5,
    name: 'Evergreen Kirkland Urban',
    address: '425 Urban Plaza, Kirkland, WA 98033',
    phone: '(425) 555-0164',
    distance: '10.2 mi',
    hours: '10:00 AM - 8:00 PM',
    isOpen: true,
    services: ['Curbside Pickup', 'Alterations'],
  },
]

const purchases = [
  {
    id: 'EVG-84329',
    date: '2026-06-28',
    location: 'Evergreen Bellevue Square',
    channel: 'In-store',
    total: 124.5,
    pointsEarned: 180,
    status: 'Completed',
    items: [
      { name: 'Organic Linen Utility Jacket', price: 89.0 },
      { name: 'Recycled Gold Hoop Earrings', price: 35.5 },
    ],
  },
  {
    id: 'EVG-83912',
    date: '2026-06-21',
    location: 'Evergreen Online',
    channel: 'Online',
    total: 87.0,
    pointsEarned: 130,
    status: 'Delivered',
    items: [
      { name: 'Refillable Vitamin C Serum', price: 42.0 },
      { name: 'Bamboo Cotton Sleep Tee', price: 45.0 },
    ],
  },
  {
    id: 'EVG-83476',
    date: '2026-06-12',
    location: 'Evergreen University Village',
    channel: 'In-store',
    total: 64.25,
    pointsEarned: 95,
    status: 'Completed',
    items: [
      { name: 'Soy Blend Signature Candle', price: 28.5 },
      { name: 'Stoneware Storage Canister', price: 35.75 },
    ],
  },
  {
    id: 'EVG-82940',
    date: '2026-06-03',
    location: 'Evergreen Online',
    channel: 'Online',
    total: 112.99,
    pointsEarned: 168,
    status: 'Shipped',
    items: [
      { name: 'Plant-Based Night Cream', price: 54.99 },
      { name: 'Recycled Canvas Weekend Tote', price: 58.0 },
    ],
  },
  {
    id: 'EVG-82211',
    date: '2026-05-26',
    location: 'Evergreen Northgate',
    channel: 'In-store',
    total: 76.4,
    pointsEarned: 112,
    status: 'Completed',
    items: [
      { name: 'Aloe Calming Body Wash', price: 19.5 },
      { name: 'Organic Cotton Lounge Pants', price: 56.9 },
    ],
  },
]

const snackbar = ref({
  show: false,
  message: '',
  color: 'primary',
})

const filteredStores = computed(() => {
  const query = storeSearch.value.trim().toLowerCase()
  if (!query) {
    return stores
  }

  return stores.filter((store) => {
    return (
      store.name.toLowerCase().includes(query) || store.address.toLowerCase().includes(query)
    )
  })
})

const todayReference = new Date('2026-06-30')
const monthSpent = computed(() => {
  return purchases
    .filter((purchase) => {
      const orderDate = new Date(purchase.date)
      return (
        orderDate.getMonth() === todayReference.getMonth() &&
        orderDate.getFullYear() === todayReference.getFullYear()
      )
    })
    .reduce((sum, purchase) => sum + purchase.total, 0)
})

const monthPointsEarned = computed(() => {
  return purchases
    .filter((purchase) => {
      const orderDate = new Date(purchase.date)
      return (
        orderDate.getMonth() === todayReference.getMonth() &&
        orderDate.getFullYear() === todayReference.getFullYear()
      )
    })
    .reduce((sum, purchase) => sum + purchase.pointsEarned, 0)
})

const formatPoints = (value) => {
  return new Intl.NumberFormat('en-US').format(value)
}

const formatPrice = (value) => {
  return `$${value.toFixed(2)}`
}

const formatDate = (isoDate) => {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

const showSnackbar = (message, color = 'primary') => {
  snackbar.value.message = message
  snackbar.value.color = color
  snackbar.value.show = true
}

const copyCode = async (offer) => {
  if (!offer.promoCode) {
    showSnackbar(`${offer.title} activated`, 'success')
    return
  }

  try {
    await navigator.clipboard.writeText(offer.promoCode)
    showSnackbar(`Copied ${offer.promoCode} to clipboard`, 'success')
  } catch {
    showSnackbar('Could not copy code in this browser', 'warning')
  }
}

const activateOffer = (offer) => {
  showSnackbar(`${offer.title} activated`, 'success')
}

const handleStoreAction = (action, storeName) => {
  showSnackbar(`${action} selected for ${storeName}`, 'info')
}
</script>

<template>
  <v-app>
    <v-app-bar class="top-header" elevation="0">
      <v-app-bar-title class="brand-title">Evergreen Rewards</v-app-bar-title>
      <template #append>
        <v-avatar color="secondary" size="38" class="text-primary font-weight-bold">
          {{ user.initials }}
        </v-avatar>
      </template>
    </v-app-bar>

    <v-main>
      <div class="app-shell">
        <section v-if="activeTab === 'points'" class="page-stack">
          <v-card class="hero-card pa-5">
            <div class="d-flex justify-space-between align-start ga-3 mb-4">
              <div>
                <p class="hero-eyebrow">Hi {{ user.firstName }}, welcome back</p>
                <h2 class="hero-balance">{{ formatPoints(pointsSummary.balance) }} points</h2>
              </div>
              <v-chip color="secondary" class="text-primary font-weight-bold">{{ user.tier }} Tier</v-chip>
            </div>

            <p class="text-medium-emphasis mb-2">
              {{ formatPoints(pointsSummary.neededForNextTier) }} points to {{ user.nextTier }}
            </p>
            <v-progress-linear
              color="secondary"
              bg-color="rgba(255,255,255,0.25)"
              :model-value="pointsSummary.progressPct"
              rounded
              height="12"
            />
            <p class="mt-2 text-caption">{{ pointsSummary.progressPct }}% toward {{ user.nextTier }}</p>
            <p class="text-caption mt-1">{{ user.city }} member since {{ user.memberSince }}</p>
          </v-card>

          <v-alert type="warning" variant="tonal" rounded="xl">
            {{ formatPoints(pointsSummary.expiringSoon) }} points expire on {{ pointsSummary.expiringDate }}.
            Use them soon to keep your balance growing.
          </v-alert>

          <div>
            <h3 class="section-title">Recent Activity</h3>
            <v-card>
              <v-list lines="two">
                <v-list-item
                  v-for="transaction in pointTransactions"
                  :key="transaction.id"
                  :title="transaction.description"
                  :subtitle="transaction.date"
                >
                  <template #append>
                    <span
                      :class="[
                        'font-weight-bold',
                        transaction.amount >= 0 ? 'text-success' : 'text-error',
                      ]"
                    >
                      {{ transaction.amount >= 0 ? '+' : '' }}{{ formatPoints(transaction.amount) }}
                    </span>
                  </template>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </section>

        <section v-else-if="activeTab === 'offers'" class="page-stack">
          <div>
            <h2 class="page-title">Personalized Offers</h2>
            <p class="page-subtitle">Picked for your beauty, sustainable style, and home picks.</p>
          </div>

          <v-card v-for="offer in offers" :key="offer.id" class="offer-card">
            <div class="offer-banner" :style="{ backgroundColor: offer.bannerColor }">
              <span class="offer-emoji">{{ offer.visual }}</span>
            </div>
            <div class="pa-4">
              <div class="d-flex flex-wrap ga-2 mb-2">
                <v-chip size="small" color="primary" variant="outlined">{{ offer.category }}</v-chip>
                <v-chip v-if="offer.isNew" size="small" color="secondary" class="text-primary">New</v-chip>
                <v-chip v-if="offer.pointsMultiplier" size="small" color="info" variant="tonal">
                  {{ offer.pointsMultiplier }}
                </v-chip>
              </div>

              <h3 class="offer-title">{{ offer.title }}</h3>
              <p class="text-medium-emphasis mb-3">{{ offer.description }}</p>

              <div class="d-flex justify-space-between align-center ga-3 flex-wrap">
                <div>
                  <p class="text-caption text-medium-emphasis">Expires {{ offer.expiresOn }}</p>
                  <p v-if="offer.promoCode" class="promo-code">Code: {{ offer.promoCode }}</p>
                </div>

                <v-btn
                  color="primary"
                  variant="flat"
                  @click="offer.promoCode ? copyCode(offer) : activateOffer(offer)"
                >
                  {{ offer.promoCode ? 'Copy Code' : 'Activate' }}
                </v-btn>
              </div>
            </div>
          </v-card>
        </section>

        <section v-else-if="activeTab === 'stores'" class="page-stack">
          <v-text-field
            v-model="storeSearch"
            label="Search stores"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            clearable
            hide-details
          />

          <v-card v-for="store in filteredStores" :key="store.id" class="pa-4">
            <div class="d-flex justify-space-between ga-3 align-start flex-wrap mb-3">
              <div>
                <h3 class="store-title d-flex align-center ga-2">
                  {{ store.name }}
                  <v-chip
                    v-if="store.preferred"
                    color="secondary"
                    size="x-small"
                    class="text-primary font-weight-bold"
                  >
                    Home Store
                  </v-chip>
                </h3>
                <p class="text-medium-emphasis">{{ store.address }}</p>
                <p class="text-medium-emphasis">{{ store.distance }}</p>
                <p class="text-medium-emphasis">{{ store.phone }}</p>
              </div>

              <v-chip :color="store.isOpen ? 'success' : 'error'" variant="tonal" size="small">
                {{ store.isOpen ? 'Open' : 'Closed' }} · {{ store.hours }}
              </v-chip>
            </div>

            <div class="d-flex flex-wrap ga-2 mb-3">
              <v-chip
                v-for="service in store.services"
                :key="`${store.id}-${service}`"
                size="small"
                color="primary"
                variant="outlined"
              >
                {{ service }}
              </v-chip>
            </div>

            <div class="d-flex flex-wrap ga-2">
              <v-btn variant="tonal" color="primary" @click="handleStoreAction('Directions', store.name)">
                Directions
              </v-btn>
              <v-btn variant="tonal" color="primary" @click="handleStoreAction(`Call ${store.phone}`, store.name)">
                Call
              </v-btn>
              <v-btn variant="tonal" color="secondary" @click="handleStoreAction('Pickup details', store.name)">
                Pickup
              </v-btn>
            </div>
          </v-card>

          <v-alert v-if="!filteredStores.length" type="info" variant="tonal" rounded="xl">
            No stores match your search yet.
          </v-alert>
        </section>

        <section v-else-if="activeTab === 'history'" class="page-stack">
          <div>
            <h2 class="page-title">Purchase History</h2>
            <p class="page-subtitle">Recent in-store and online orders from the last 6 weeks.</p>
          </div>

          <v-row>
            <v-col cols="6">
              <v-card class="pa-4 summary-card">
                <p class="text-caption text-medium-emphasis">Spent This Month</p>
                <h3>{{ formatPrice(monthSpent) }}</h3>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card class="pa-4 summary-card">
                <p class="text-caption text-medium-emphasis">Points This Month</p>
                <h3>{{ formatPoints(monthPointsEarned) }}</h3>
              </v-card>
            </v-col>
          </v-row>

          <v-card v-for="order in purchases" :key="order.id" class="pa-4">
            <div class="d-flex justify-space-between align-start ga-3 flex-wrap mb-2">
              <div>
                <h3 class="store-title">{{ order.location }}</h3>
                <p class="text-medium-emphasis">{{ order.channel }} · {{ order.id }}</p>
              </div>
              <v-chip color="primary" variant="outlined" size="small">{{ order.status }}</v-chip>
            </div>

            <div class="d-flex justify-space-between mb-2 text-medium-emphasis">
              <span>{{ formatDate(order.date) }}</span>
              <span class="font-weight-bold text-high-emphasis">{{ formatPrice(order.total) }}</span>
            </div>

            <v-list density="compact" class="order-items mb-2">
              <v-list-item v-for="item in order.items" :key="`${order.id}-${item.name}`">
                <template #title>
                  <div class="d-flex justify-space-between ga-2">
                    <span>{{ item.name }}</span>
                    <span>{{ formatPrice(item.price) }}</span>
                  </div>
                </template>
              </v-list-item>
            </v-list>

            <p class="text-body-2">
              <span class="font-weight-medium text-success">+{{ formatPoints(order.pointsEarned) }} points</span>
              earned
            </p>
          </v-card>
        </section>
      </div>
    </v-main>

    <v-bottom-navigation v-model="activeTab" grow color="primary" class="bottom-nav" elevation="8">
      <v-btn value="points" prepend-icon="mdi-star-circle-outline">Points</v-btn>
      <v-btn value="offers" prepend-icon="mdi-tag-outline">Offers</v-btn>
      <v-btn value="stores" prepend-icon="mdi-map-marker-outline">Stores</v-btn>
      <v-btn value="history" prepend-icon="mdi-receipt-text-outline">History</v-btn>
    </v-bottom-navigation>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="2200" location="top">
      {{ snackbar.message }}
    </v-snackbar>
  </v-app>
</template>

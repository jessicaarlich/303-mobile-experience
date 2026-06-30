# Loyalty Member Mobile App - Instructions

## Overview

Build a mobile-first web app for a Gold-tier loyalty member at a retail store called **Evergreen**. The app has four pages: Points, Offers, Stores, and Purchase History.

---

## Tech Stack

- Vue 3 (Composition API)
- Vuetify 3 for UI components
- Single-page application
- No backend — all data is fake and hardcoded in the frontend

---

## User Persona

Create a fake loyalty member with the following characteristics:

- Female, early 30s, lives in Seattle
- Has been a member for about 4 years
- Gold tier (one tier below the top tier, Platinum)
- Shops a mix of in-store and online
- Buys beauty products, sustainable apparel, home goods, and accessories
- Visits 2-3 stores regularly
- Has about 5 recent purchases over the past 6 weeks
- Has around 4,000-5,000 points with some expiring soon
- Is close to reaching the next tier (about 75-80% of the way there)

---

## Fake Data to Generate

### User Profile

- First name, last name, initials for avatar
- Membership tier (Gold) and next tier (Platinum)
- Member since date (a few years ago)

### Loyalty Points

- Current point balance (in the thousands)
- Points needed to reach next tier
- A progress percentage toward next tier
- A small batch of points expiring within the next month
- 5 recent point transactions including a mix of: points earned from purchases, points redeemed for a coupon, and a bonus points event

### Personalized Offers

- 5 offers tailored to her shopping habits
- Mix of: percentage discounts, dollar-off deals, free gift with purchase, bonus points multipliers, and a birthday reward
- Each offer should have a title, short description, category, expiration date, and optionally a promo code
- Some should be marked as new

### Store Locations

- 5 stores in the Seattle metro area
- Each with name, address, phone number, distance from user, today's hours, open/closed status, and a list of available services (like curbside pickup, returns, alterations)
- One store marked as the user's preferred/home store

### Purchase History

- 5 orders from the past 6 weeks
- Mix of in-store and online purchases
- Each order has a date, store/channel, order total, list of items with prices, points earned, and a fulfillment status
- Items should reflect the persona's shopping habits (beauty, apparel, home, accessories)

---

## App Structure

### Layout

- Sticky header at the top with the brand name "Evergreen Rewards" and the user's avatar
- Bottom navigation bar with 4 clickable, interative tabs that take me to the follow sections: Points, Offers, Stores, History
- Use Vuetify's `v-bottom-navigation` component
- Content area scrolls between the header and bottom nav

### Page 1: Points (default/home tab)

- Hero card at the top with a green gradient background showing:
  - Greeting with the user's first name
  - Tier badge
  - Large point balance number
  - Progress bar toward next tier with label
- Warning alert below the hero about points expiring soon
- Section titled "Recent Activity" with a list of point transactions showing description, date, and point amount (color-coded positive/negative)

### Page 2: Offers

- Page title and subtitle
- Vertical list of offer cards, each showing:
  - A colored header area with an emoji or icon as a visual
  - Badges for "New" or points multiplier
  - Category, title, description
  - Expiration date
  - Action button: "Copy Code" if there's a promo code, "Activate" if not

### Page 3: Stores

- Search/filter input at the top
- List of store cards, each showing:
  - Store name (with a badge on the preferred store)
  - Address, distance, open status and hours
  - Service tags (chips)
  - Action buttons: Directions, Call, Pickup

### Page 4: History

- Two summary stat cards at the top (total spent this month, points earned this month)
- List of purchase cards, each showing:
  - Store name, channel, order ID
  - Date and total
  - Itemized list with prices
  - Points earned and fulfillment status

---

## Design Direction

- Brand colors: deep green primary, gold/amber accent for the loyalty tier, light gray page background, white cards
- Use Vuetify's theming to set the primary and accent colors
- Rounded cards and chips
- Keep it clean with generous spacing
- Use Vuetify components: `v-card`, `v-chip`, `v-progress-linear`, `v-list`, `v-btn`, `v-text-field`, `v-alert`, `v-bottom-navigation`, `v-app-bar`, `v-badge`

---

## Interactions

- Tapping a bottom nav tab switches the visible page
- Tapping "Copy Code" on an offer copies the code to the clipboard and shows a Vuetify snackbar confirmation
- Tapping "Activate" shows a snackbar saying the offer is activated
- Typing in the store search field filters the store list by name or address in real time
- Tapping store action buttons (Directions, Call, Pickup) shows a snackbar with a relevant message
- Use a single `v-snackbar` component managed by a reactive variable

---

## Formatting Rules

- Point balances displayed with comma separators
- Prices with dollar sign and two decimal places
- Dates displayed in short format (e.g., "Jun 28")

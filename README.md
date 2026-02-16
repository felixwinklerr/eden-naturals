# Eden B2C - Headless Shopify Store

Conversion-optimized premium protein store built with Next.js 15 and Shopify Storefront API.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Shopify store with Storefront API access
- Storefront API access token

### Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Configure environment variables:**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Shopify credentials:
```env
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
```

3. **Get your Storefront API token from Shopify Headless app:**
   - Go to Shopify Admin → Settings → Apps and sales channels
   - Find "Headless" in your sales channels (or install it from the Shopify App Store)
   - Click on "Headless" → "Manage storefronts" or "Create storefront"
   - Create a new storefront or select your existing one
   - In the storefront settings, go to "API access" or "Storefront API"
   - Copy the "Storefront API access token"
   - Paste it into `.env.local` as `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
   
   **Alternative (if using custom app):**
   - Go to Shopify Admin → Settings → Apps and sales channels
   - Click "Develop apps" → Create an app
   - Enable "Storefront API" scopes and copy the access token

4. **Run development server:**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
eden-b2c/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with global components
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   └── [legal-pages]/     # Impressum, Datenschutz, AGB, etc.
├── components/
│   ├── global/            # Navigation, Footer, AnnouncementBar
│   ├── homepage/          # Homepage sections
│   ├── product/           # Product detail components
│   └── cart/              # Cart drawer
├── lib/
│   ├── shopify/           # Shopify API client & queries
│   └── utils.ts           # Utility functions
└── CONTEXT.md             # Complete conversion architecture spec
```

## 🎨 Features

- ✅ Mobile-first responsive design
- ✅ Shopify Storefront API integration (fully connected)
- ✅ Shopping cart with add/remove functionality
- ✅ Cart drawer (slide-out) with real-time updates
- ✅ Product detail pages with enriched content
- ✅ Legal pages (Impressum, Datenschutz, AGB, Widerrufsrecht)
- ✅ Multi-language ready (DE/FR/LU)
- ✅ Conversion-optimized layout per CONTEXT.md

## 🔧 Shopify Integration

The store uses Shopify's Storefront API (via Headless app) for:
- Product fetching and display
- Cart creation and management
- Checkout redirect to Shopify checkout

### Using Shopify Headless App
- The Headless app provides a streamlined interface for managing headless storefronts
- Storefront API token is managed through the Headless app interface
- Preview URLs and webhook management available in Headless app
- All Storefront API features are available (products, cart, checkout)

### Cart Management
- Cart ID is stored in `localStorage` for persistence
- Cart state is managed via React Context (`CartContext`)
- Cart drawer opens automatically when items are added (optional)
- Checkout redirects to Shopify's hosted checkout page

### API Routes
- `/api/shopify` - Proxy route for client-side GraphQL requests (keeps tokens secure)

## 🚧 TODO / Next Steps

### Phase 0 (URGENT):
- [ ] Connect Shopify cart mutations
- [ ] Implement cookie consent banner (GDPR)
- [ ] Add multi-language support (Shopify Markets)
- [ ] Fill in legal page content with actual company info

### Phase 1:
- [ ] Connect real product data from Shopify
- [ ] Implement cart state management
- [ ] Add checkout flow
- [ ] Produce mixing video (core asset)
- [ ] Add product images

### Phase 2:
- [ ] Email capture (exit-intent popup)
- [ ] Post-purchase email sequence
- [ ] Review collection system
- [ ] Landing pages per ad campaign

## 📝 Notes

- All components follow the conversion architecture in `CONTEXT.md`
- Design uses colors from CONTEXT.md: muted green accent, charcoal text, white primary
- Mobile-first: Base styles are mobile, desktop uses `md:` breakpoint
- Placeholder images/videos need to be replaced with real assets

## 🔧 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Shopify:** Storefront API (GraphQL)
- **Hosting:** Vercel (recommended)

## 📚 Documentation

See `CONTEXT.md` for complete conversion architecture, messaging hierarchy, and implementation priorities.

## 🐛 Troubleshooting

**Products not loading?**
- Check your Storefront API token is correct
- Verify your Shopify store domain is correct
- Ensure products are published in Shopify admin

**Cart not working?**
- Cart mutations need to be implemented (see TODO)
- Check browser console for errors

**Styling issues?**
- Run `npm run dev` to ensure Tailwind is compiling
- Check `tailwind.config.ts` for custom colors

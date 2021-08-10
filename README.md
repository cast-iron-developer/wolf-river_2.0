# I made the change because Gatsby went from HERO to ZERO

The first iteration of this version of the site was started with Gatsby V2 sometime last year. Due to life catching up with me, I worked on this site sporadically throughout the last calendar year. I took a couple of months off back in May/April. When I picked it back up a couple weeks ago, I decided to migrate to Gatsby V3. Unfortunately the breaking changes would have necessitate redoing a lot of my CSS Modules and online research into the exact issues I was facing resulted in little help. Rather than waste time chasing a goose, I opted to instead migrate to NextJS. That was 8/9/2021. At the time of this writing it is 8/10/2021 and the site is around 85-90% migrated. Gatsby, you're the worst.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### TODO:
- Set up Routing to link all pages
- Migrate to using Funcitonal React Component instead of React.PureComponent on assets/components/Header.js
- Reach out about needed updated text content for diff pages, primarily Services
- Research how NextJS handles SEO content and how to set that up appropriately
# SSR with Next.js
Adapted from [this tutorial]([https://www.youtube.com/watch?v=IZGNcSuwBZs](https://www.bairesdev.com/blog/server-side-rendering-react/)), this is a simple example for Server-Side Rendering using Next.js (through the API `getServerSideProps` to render the quotes list on the server)

## About SSR
Based also on [this great article]([https://www.joshwcomeau.com/react/server-components/]), these are the main topics with SSR

### Performance
Problem: Client-Side Rendering (CSR) - which  is the default React behavior - means we need to download the JS, parse it, and then populate the DOM for the user to see something on the screen => large FCP time
![CSR](https://github.com/user-attachments/assets/af3ad8f4-6dbc-42fd-ad21-5f4dbd5447b4)

Solution => SSR
![SSR](https://github.com/user-attachments/assets/e527a5cb-c6fa-458e-b843-2405c73ece3b)
1. Server generates and sends populated HTML when requested by the client
2. In doing so, it populates the data by querying APIs and DB => optimization of avoiding roundtrips between client and server
3. SSR can reduce client-side processing, which would benefit slower devices
4. With caching strategies and proper infrastructure support, server-side rendering can greatly enhance the overall user experience

Use cases:
* Highest gain if your application has a large amount of content or data that needs to be loaded before rendering the page
* For complex sites with a lot of dynamic content, there is a performance hit with SSR
* SSR can be more difficult to implement and maintain than CSR, adding to development costs.
* In many cases, a hybrid approach between SSR (for some components) and CSR (for other components) can be adopted

### SEO
* Problem: CSR relies on JS, difficult to parse by search engines
* Solution: SSR delivers populated HTML which is parsed by search engines

### Implementation (Next.js)
* The `getServerSideProps` function is a special function that runs on the server before the page is rendered. It can be used to fetch data from an API or database, and return it as props to the page component.
* Instead of fetching data in `useEffect` with [], fetch it inside `getServerSideProps`

## Other Alternatives

## Staic Site Generation (SSG)
* Even better performance, server already has the HTML available from build time
* This HTML will then be reused on each request. It can be cached by a CDN.
* Next.js:
** Static Generation without data => Next.js generates a single HTML file per page during build time
** Static Generation with data (Your page content depends on external data): Use `getStaticProps`

## React Server Components
![React Server Component](https://github.com/user-attachments/assets/f34eb665-8137-4176-841d-2b796e6aeacc)
* Still in the Canary phase
* Components that run exclusively on the server (without using `getServerSideProps`)
* Server Components never re-render. As far as React is concerned, this output is immutable, and will never change => we can't use state
* Has the potential to improve the Page Interactive (TTI) metric by reducing the additional JS code

## App Functionality
Simple quote generator based on [https://api.quotable.io/random](https://api.quotable.io/random)
![App Screenshot](https://github.com/user-attachments/assets/6167e44d-a54c-401c-a21c-78adfe38c236)

## Steps
```
git clone https://github.com/3omdawy/next-ssr-quotes.git
cd next-ssr-quotes
npm install
npm run dev
Go to http://localhost:3000/quotes
```

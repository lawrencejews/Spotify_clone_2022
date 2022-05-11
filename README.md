## Spotify Clone 
Run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- Create a next app `create-next-app`
- UI library is charkra [https://chakra-ui.com](https://chakra-ui.com)
- Database set-up with Heroku `Created two free databases` to use with prisma.
- Install prisma `npx prisma init` in the root directory. Select one of the database then navigate `to settings - database credentials` to 
pick the `URI` for the `.env` file.
- The second database create a `shadow_database_url` to give permissions to a user for migrations since they cannot create a new database easily. 
- Prisma database migration for updated files command `npx prisma db push` to push state of database. migration is applied to the database with this command `npx prisma migrate dev`.
- Prisma seed run migration script must be added to the package.json [https://www.prisma.io/docs/guides/database/seed-database](https://www.prisma.io/docs/guides/database/seed-database)
 ```
 "prisma": {
   "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
} 
```
- The command for seeding `npx prisma db seed `
- Prisma studio can display your database in the browser with `npx prisma studio` command to view and edit data.
- Authentication with next.js importing prisma from a file accessed globally.
- Api folder contains the `sign-in and sign-up pages` for authentication. 
- Httpie is a tool to check if your POST requests are working through `Encryption, jwt and setting up a cookie` for the header.
[https://httpie.io](https://httpie.io)
- Handle data fetching `useSWRConfig ` from `swr` locally. This refreshes the cache and the list is called once.
[https://swr.vercel.app/](https://swr.vercel.app/)
- Middleware underscore prevent a new route formation for the file. This handles all edge requests coming in the require authentication.
- Using superjson for next has two steps: first install `npm install babel-plugin-superjson-next` then install `npm install superjson`.
- Set-Up a dynamic route for the links `[id].tsx` within nextJS.
- Creating a global state for the bar handler with the store file.
- Interface for Audio in Javascript that control sound in the browser `react-howler ` 
- Deployment on vercel build command `npx prisma generate && npx prisma migrate deploy && next build`.
- Add Environment variables `DATABASE_URL && SHADOW_DATABASE_URL`.
- Override typescript and ESlint when deploying
```
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
``` and 
```
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}  
```


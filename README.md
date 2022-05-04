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
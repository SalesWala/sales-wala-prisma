# Shared Prisma Client Example

You have to publish it to your private (or not?) npm registry and install it as dependency to each project that uses it.
Also, you need to install `@prisma/client` and `prisma` as dependencies since they are peer dependencies of this package.

Client generation executed on `postinstall` hook on each project that uses this package, not on publish.

Example:

`yarn add https://github.com/SalesWala/sales-wala-prisma`





In your code at some microservice:

```ts
import { PrismaClient } from '@saleswala/prisma'

const prismaClient = new PrismaClient()


```
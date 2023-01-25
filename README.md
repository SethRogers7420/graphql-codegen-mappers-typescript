# graphql-code-gen-mappers-typescript

**In Progress**

## Description

This project aims to improve the developer experience when working with the [GraphQL Code Generator typescript-resolvers plugin](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers).

In particular, this library improves the developer experience of working with custom types as described here:
https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-resolvers#use-your-model-types-mappers

To use your own backing types on your GraphQL server, typescript-resolvers requires a weakly typed setup that looks like this:

```ts
  mappers: {
    User: './models#UserModel',
    Profile: './models#UserProfile'
  }
```

This is a consequence of the GraphQL Code Generator setup originally requiring usage of the YAML format and now-a-days using Cosmic Config.

As GraphQL Code Generator now supports TypeScript, we can use the power of TypeScript to turn the above into this:

```ts
import { UserModel } from './models';
import { UserProfile } from './models';

export type GraphQLModels = {
  User: UserModel;
  Profile: UserProfile;
};
```

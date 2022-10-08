// In case `tsconfig.compilerOptions.types` option is used
// (like in the default `meteor create --typescript` template),
// the global type declarations (like for Meteor and packages)
// are not automatically included in the TS compilation.
// See https://www.typescriptlang.org/tsconfig#types
// Therefore either list them into `types` option
// (e.g. `"types": ["node", "mocha", "meteor-synced-cron"]`),
// or use a triple-slash directive like below
// (just once anywhere in your project is enough)
// See https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-

/// <reference types="meteor-synced-cron" />

console.log("SyncedCron main server");

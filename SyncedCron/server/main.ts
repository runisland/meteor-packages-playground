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

// SyncedCron configuration
// https://github.com/percolatestudio/meteor-synced-cron#configuration
SyncedCron.config({
  // Log job run details to console
  log: true,

  // Use a custom logger function (defaults to Meteor's logging package)
  logger: null,

  // Name of collection to use for synchronisation and logging
  collectionName: "cronHistory",

  // Default to using localTime
  utc: false,

  /*
    TTL in seconds for history records in collection to expire
    NOTE: Unset to remove expiry but ensure you remove the index from
    mongo by hand

    ALSO: SyncedCron can't use the `_ensureIndex` command to modify
    the TTL index. The best way to modify the default value of
    `collectionTTL` is to remove the index by hand (in the mongo shell
    run `db.cronHistory.dropIndex({startedAt: 1})`) and re-run your
    project. SyncedCron will recreate the index with the updated TTL.
  */
  collectionTTL: 172800,
});

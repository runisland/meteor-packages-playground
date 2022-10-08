// Type definitions for littledata:synced-cron 1.5
// Project: https://github.com/percolatestudio/meteor-synced-cron#readme
// Definitions by: ghybs <https://github.com/ghybs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='later' />

// tslint:disable-next-line no-single-declare-module
declare module 'meteor/littledata:synced-cron' {
    namespace SyncedCron {
        // Add types for development here

        function add(addOptions: {
            /**
             * *required* unique name of the job
             */
            name: string;
            /**
             * *required* when to run the job
             *
             * @param parser is a later.parse object
             */
            schedule: (parser: later.ParseStatic) => later.ScheduleData;
            /**
             * *required* the code to run
             */
            job: () => void;

            /**
             * Undocumented flag to enable synchronization and logging
             * for this job
             *
             * Default `true`
             *
             * https://github.com/percolatestudio/meteor-synced-cron/blob/687e9ea308a287fe6347f94e0fb3eac5e2e21c12/synced-cron-server.js#L120-L124
             */
            persist?: boolean;
        }): void;

        /**
         * You can configure SyncedCron with the `config` method.
         *
         * https://github.com/percolatestudio/meteor-synced-cron#configuration
         */
        function config(opts: {
            /**
             * Log job run details to console
             *
             * Default `true`
             */
            log?: boolean;

            /**
             * Use a custom logger function (defaults to Meteor's logging package)
             *
             * SyncedCron uses Meteor's `logging` package by default.
             * If you want to use your own logger (for sending to other consumers or similar)
             * you can do so by configuring the `logger` option.
             *
             * SyncedCron expects a function as `logger`,
             * and will pass arguments to it for you to take action on.
             *
             * The `opts` passed argument includes `level`, `message`, and `tag`.
             * - `level` will be one of `"info"`, `"warn"`, `"error"`, `"debug"`.
             * - `message` is something like `'Scheduled "Test Job" next run @Fri Mar 13 2015 10:15:00 GMT+0100 (CET)'`".
             * - `tag` will always be `"SyncedCron"` (handy for filtering).
             *
             * https://github.com/percolatestudio/meteor-synced-cron#logging
             */
            logger?:
                | ((opts: {
                      /**
                       * will be one of `"info"`, `"warn"`, `"error"`, `"debug"`.
                       */
                      level: 'info' | 'warn' | 'error' | 'debug';
                      /**
                       * something like `'Scheduled "Test Job" next run @Fri Mar 13 2015 10:15:00 GMT+0100 (CET)'`".
                       */
                      message: string;
                      /**
                       * will always be `"SyncedCron"` (handy for filtering).
                       */
                      tag: string;
                  }) => void)
                | null;

            /**
             * Name of collection to use for synchronisation and logging
             *
             * Default `"cronHistory"`
             */
            collectionName?: string;

            /**
             * Use UTC or localtime for evaluating schedules
             *
             * Default to using localTime
             *
             * Default `false`
             */
            utc?: boolean;

            /**
             * TTL in seconds for history records in collection to expire
             * NOTE: Unset to remove expiry but ensure you remove the index from
             * mongo by hand
             *
             * ALSO: SyncedCron can't use the `_ensureIndex` command to modify
             * the TTL index. The best way to modify the default value of
             * `collectionTTL` is to remove the index by hand (in the mongo shell
             * run `db.cronHistory.dropIndex({startedAt: 1})`) and re-run your
             * project. SyncedCron will recreate the index with the updated TTL.
             *
             * Default `172800` seconds (48 hours)
             */
            collectionTTL?: number;
        }): void;
    }
}

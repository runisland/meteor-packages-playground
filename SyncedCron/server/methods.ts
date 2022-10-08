import { SyncedCron } from "meteor/littledata:synced-cron";
import { Meteor } from "meteor/meteor";

// SyncedCron can only be used server-side,
// so the Methods implementation is also only on server
Meteor.methods({
  syncedCronAdd(jobName: string, scheduleText: string, persist: boolean) {
    console.log(
      `SyncedCron add job name "${jobName}" with schedule text expression"${scheduleText}"`
    );
    SyncedCron.add({
      name: jobName,
      schedule(parser) {
        return parser.text(scheduleText);
      },
      job,
      persist,
    });
  },
  syncedCronStart() {
    console.log(`SyncedCron start`);
    SyncedCron.start();
  },
  syncedCronNextScheduledAtDate(
    ...args: Parameters<typeof SyncedCron.nextScheduledAtDate>
  ) {
    console.log(`SyncedCron nextScheduledAtDate for job name "${args[0]}"`);
    return SyncedCron.nextScheduledAtDate(...args);
  },
  syncedCronRemove(...args: Parameters<typeof SyncedCron.remove>) {
    console.log(`SyncedCron remove job name "${args[0]}"`);
    SyncedCron.remove(...args);
  },
  syncedCronStop() {
    console.log(`SyncedCron stop`);
    SyncedCron.stop();
  },
  syncedCronPause() {
    console.log(`SyncedCron pause`);
    SyncedCron.pause();
  },
});

function job() {
  console.log("run scheduled job");
}

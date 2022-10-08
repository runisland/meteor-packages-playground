import { Field, Form, Formik } from "formik";
import { Meteor } from "meteor/meteor";
import React from "react";

export function SyncedCron() {
  return (
    <>
      <h1>SyncedCron</h1>
      <p>
        Playground for{" "}
        <a
          href="https://github.com/percolatestudio/meteor-synced-cron"
          target="_blank"
        >
          <code>littledata:synced-cron</code>
        </a>{" "}
        Meteor Atmosphere package.
      </p>

      <fieldset>
        <legend>Add a job (log in server console)</legend>
        <Formik
          initialValues={{ jobName: "", scheduleText: "", persist: true }}
          onSubmit={(values) =>
            Meteor.call(
              "syncedCronAdd",
              values.jobName,
              values.scheduleText,
              values.persist
            )
          }
        >
          <Form>
            <label>
              Job name
              <Field name="jobName" placeholder="Job name..." />
            </label>
            <label>
              Schedule text expression
              <Field
                name="scheduleText"
                placeholder="Schedule text expression..."
              />
            </label>
            <label>
              Persist (log & sync)
              <Field type="checkbox" name="persist" />
            </label>
            <button type="submit">Add</button>
          </Form>
        </Formik>
      </fieldset>

      <fieldset>
        <legend>Request next schedule time of a job</legend>
        <Formik
          initialValues={{ jobName: "" }}
          onSubmit={(values) =>
            Meteor.call(
              "syncedCronNextScheduledAtDate",
              values.jobName,
              (err: Meteor.Error, val: Date) => {
                if (err) {
                  console.error(err);
                  alert(err);
                } else {
                  console.log(val);
                  alert(val);
                }
              }
            )
          }
        >
          <Form>
            <label>
              Job name
              <Field name="jobName" placeholder="Job name..." />
            </label>
            <button type="submit">Request</button>
          </Form>
        </Formik>
      </fieldset>

      <fieldset>
        <legend>Remove a job</legend>
        <Formik
          initialValues={{ jobName: "" }}
          onSubmit={(values) => Meteor.call("syncedCronRemove", values.jobName)}
        >
          <Form>
            <label>
              Job name
              <Field name="jobName" placeholder="Job name..." />
            </label>
            <button type="submit">Remove</button>
          </Form>
        </Formik>
      </fieldset>

      <button type="button" onClick={() => Meteor.call("syncedCronStart")}>
        Start
      </button>
      <button type="button" onClick={() => Meteor.call("syncedCronStop")}>
        Stop
      </button>
      <button type="button" onClick={() => Meteor.call("syncedCronPause")}>
        Pause
      </button>
    </>
  );
}

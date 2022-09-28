import React from "react";
import { Hello } from "./Hello";
import { SyncedCron } from "/SyncedCron/imports/ui/SyncedCron";

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <SyncedCron />
  </div>
);

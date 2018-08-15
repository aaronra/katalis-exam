/*
 * V1: timer migration
 * */

const runMigrationsFromStart = () => {
  Migrations.migrateTo(1);
  Migrations.migrateTo('latest');
};
const runOnlyToLatest = () => {
  Migrations.migrateTo('latest');
};
Meteor.startup(function () {
  runOnlyToLatest();
});

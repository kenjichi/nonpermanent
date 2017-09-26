import { Session } from "meteor/session";

Session.set("DEFAULT_LAYOUT", "coreLayout");
Session.set("DEFAULT_WORKFLOW", "coreWorkflow");

Session.set("INDEX_OPTIONS", {
  template: "customHomePageTemplate",
  layoutHeader: "layoutHeader",
  layoutFooter: "layoutFooter",
  notFound: "notFound",
  dashboardControls: "dashboardControls",
  adminControlsFooter: "adminControlsFooter"
});

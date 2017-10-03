import { Reaction } from "/server/api";


Reaction.registerPackage({
  label: "My Theme",
  name: "mytheme",
  icon: "fa fa-vine",
  autoEnable: true
  layout: [{
    layout: "coreLayoutNonpermanent",
    workflow: "coreWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    structure: {
      template: "productsLanding",
      layoutHeader: "layoutHeader",
      layoutFooter: "layoutFooter",
      notFound: "productNotFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
  
});

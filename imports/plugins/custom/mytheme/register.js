import { Reaction } from "/server/api";


Reaction.registerPackage({
  label: "Nonpermanent",
  name: "nonpermanent",
  icon: "fa fa-vine",
  autoEnable: true,
  layout: [{
    layout: "coreLayoutNonpermanent",
    workflow: "coreProductGridWorkflow",
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

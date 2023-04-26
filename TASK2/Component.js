sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
 ], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("task2.Component", {
       metadata : {
             interfaces: ["sap.ui.core.IAsyncContentCreation"],
             manifest: "json"
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set data model
          this.getRouter().initialize();
       },
             getContentDensityClass : function () {
                if (!this._sContentDensityClass) {
                   if (!Device.support.touch) {
                      this._sContentDensityClass = "sapUiSizeCompact";
                   } else {
                      this._sContentDensityClass = "sapUiSizeCozy";
                   }
                }
                return this._sContentDensityClass;
             }
    });
 });
 
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType"
 ], function (Controller, Filter, FilterOperator, FilterType) {
    "use strict";
    return Controller.extend("task2.controller.App", {
       onInit : function () {
        var data = {
        "Employees": [
          {
            "Emp-id": 1,
            "FirstName": "sirisha",
            "LastName": "arangi",
            "Email": "siriarangi@gmail.com"
          },
          {
            "Emp-id": 2,
            "FirstName": "nikhil",
            "LastName": "ananvi",
            "Email": "nikhil@gmail.com"
            
          },
          {
            "Emp-id": 3,
            "FirstName": "madhu",
            "LastName": "gorle",
            "Email": "madhu@gmail.com"
          },
          {
            "Emp-id": 4,
            "FirstName": "pavani",
            "LastName": "tumma",
            "Email": "pavani@gmail.com"
          },
          {
            "Emp-id": 5,
            "FirstName": "keerthi",
            "LastName": "samlui",
            "Email": "keerthi@gmail.com"
          },
        ]
      };
      let oModel=new sap.ui.model.json.JSONModel(data);
      this.getView().setModel(oModel,"employee"); 
     },
      onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("employee").getPath().substr(1))
			});
      }
    });
 });
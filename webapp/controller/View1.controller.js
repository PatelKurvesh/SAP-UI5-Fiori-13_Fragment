sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-13_Fragment.controller.View1", {
		
		onInit : function(){
			
			var oData = new sap.ui.model.json.JSONModel();
			oData.loadData("model/fruits.json");
			this.getView().setModel(oData);
		},
		
		onOpenFrag : function(){
			this.frag = new sap.ui.xmlfragment("GithubSAP-UI5-Fiori-13_Fragment.fragments.fruits",this);
			this.getView().addDependent(this.frag);
			this.frag.open();
		},
		onDialogClose : function (){
			this.frag.close();
		}

	});
});
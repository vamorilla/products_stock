sap.ui.define([
	"com/bootcamp/sapui5/practice_project/utils/ProductService",
	"sap/ui/model/json/JSONModel"
], function (ProductService, JSONModel) {
    "use strict";

    return {
		init: function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;
		},

        getProducts: async function(aFilters) {
            return ProductService.getProducts(this._oNorthwindModel, aFilters);
        },
    };    
});    
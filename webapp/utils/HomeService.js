sap.ui.define([
], function () {
    "use strict";

    return {
        getProducts: async function (oModel, aFilter) {
            const aRequestsPromises = [
                new Promise(function (resolve, reject) {
                    oModel.read('/Products', {
                        filters: aFilter,
                        success: resolve,
                        error: reject,
                    })
                }.bind(this))
            ];

            return Promise.all(aRequestsPromises);
        },
    }
});
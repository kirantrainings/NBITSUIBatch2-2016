(function () {

    var generateBill;

    generateBill = function (productName) {
        var discount = 1;
        return {
            calculateDiscount: function (quantity) {
                if (quantity > 3) {
                    discount = 0.01;
                }
            },

                printBill: function (cost, quantity) {
                console.log("Product:" + productName);
                console.log(cost * quantity * discount);
            }
        };
    }

    var getBillForMobiles = generateBill("Mobile");

    var getBillForiPad = generateBill("iPad");
    getBillForMobiles.calculateDiscount(4);
    getBillForMobiles.printBill(10000, 4);
    getBillForiPad.calculateDiscount(5);
    getBillForiPad.printBill(50000, 4);



})();

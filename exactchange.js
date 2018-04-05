function exactChange() {

    function checkCashRegister(price, cash, cid) {
        /*originalPrice=price for freecodecamp terminal. 
        original value from the function (19.50) is ignored becasue the price comes from the html form
        */

        let originalPrice = document.getElementById("originalPrice").value;
        // Here is your change, ma'am.
        return originalPrice;
    }

    // Example cash-in-drawer array:
    // [["PENNY", 1.01],
    // ["NICKEL", 2.05],
    // ["DIME", 3.10],
    // ["QUARTER", 4.25],
    // ["ONE", 90.00],
    // ["FIVE", 55.00],
    // ["TEN", 20.00],
    // ["TWENTY", 60.00],
    // ["ONE HUNDRED", 100.00]]

    document.getElementById("result").innerHTML = checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

}
function exactChange() {

    function checkCashRegister(price, cash, cid) {
        /*originalPaid=cash for freecodecamp terminal. 
        original value from the function (20) is ignored becasue the price comes from the html form
        */

        let originalPrice = Math.round(parseFloat((price * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
        const originalPaid = Math.round(parseFloat((document.getElementById("originalPrice").value * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
        let originalChange = cid;
        console.log("original price", originalPrice);
        console.log("original paid", originalPaid);
        console.log("original change", originalChange);

        let totalChange = 0;
        let change = [["PENNY", undefined], ["NICKEL", undefined], ["DIME", undefined], ["QUARTER", undefined], ["ONE", undefined], ["FIVE", undefined], ["TEN", undefined], ["TWENTY", undefined], ["ONE HUNDRED", undefined]];
        let neededChange = Math.round(parseFloat(((originalPaid - originalPrice) * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
        console.log("neededChange", neededChange);


        let valuesOfChangeArray = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
        console.table("valuesOfChange", valuesOfChangeArray);
        // Here is your change, ma'am.

        for (let i = 0; i < 9; i++) {

            originalChange[i].push(Math.round(originalChange[i][1] / valuesOfChangeArray[i][1]));
            console.log(originalChange[i]);
            totalChange = totalChange + originalChange[i][1];
            console.log("total change", totalChange);
        };
        console.log("final change at start", change);

        if (neededChange > totalChange) {
            return "Insufficient Funds";
        }
        else if (neededChange === totalChange) {
            return "Closed";
        }
        else if (neededChange == 0) {
            return "no need for change";
        }
        else if (neededChange < 0) {
            return "not enough money";
        }
        else {
            let variableChangeNeeded = neededChange;
            for (let j = 8; j > -1; j--) {
                if (variableChangeNeeded < 0) {
                    return "no exact change";
                }
                else if (variableChangeNeeded == 0) {
                    break;
                }
                else {
                    if (variableChangeNeeded >= valuesOfChangeArray[j][1]) {

                        if (variableChangeNeeded <= originalChange[j][1]) {
                            change[j][1] = (Math.floor(variableChangeNeeded / valuesOfChangeArray[j][1]));
                            console.log("change0", change[j][1]);
                            //Math.round(parseFloat(((variableChangeNeeded - originalChange[j][1]) * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
                            variableChangeNeeded = Math.round(parseFloat(((variableChangeNeeded % (change[j][1] * valuesOfChangeArray[j][1])) * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
                            console.log("rest0", variableChangeNeeded);
                        }
                        else {
                            change[j][1] = originalChange[j][2];
                            variableChangeNeeded = Math.round(parseFloat(((variableChangeNeeded - originalChange[j][1]) * Math.pow(10, 2)).toFixed(2))) / Math.pow(10, 2);
                            console.log("change1", change[j][1]);
                            console.log("rest1", variableChangeNeeded);
                        }


                    };

                };

            };
            let result = [];
            let totalChangeToGive = 0;
            
            for (let x = 8; x > -1; x--) {
                console.log(x);
                console.log("number of coins", change[x][1]);
                if (change[x][1] !== undefined) {
                    change[x][1] = change[x][1] * valuesOfChangeArray[x][1];
                    console.log("value of coins", change[x][1]);
                    console.log("value of change", valuesOfChangeArray[x][1]);
                };
            };
            //maybe the if can also be inserted in the filter function, thus not needing the for loop.
            result = change.filter((x) => {
                if (x[1] !== undefined) {
                    totalChangeToGive = totalChangeToGive + x[1];
                    return x[1];
                };
                console.log("totalChangeTogive", totalChangeToGive);
            }).reverse();

            

            /* same thing with if instead of filter - seems shorter because I can use the counter inside
            also, some say that in the filter arrow function "Doing the counting in the filter callback is somewhat... not so stylish.
             I really like pure functions (functions that return the same values on same input all the time and have no side-effects)"

                            if (change[x][1] !== undefined) {
                                result.push(change[x]);
                                totalChangeToGive = totalChangeToGive + change[x][1];
                            };
                            */



            if (totalChangeToGive < neededChange) {
                return "Insufficient Funds";//means that there is no exact change - this is the wording in the requirement
            }
            else {
                return result;
            };
        };
    };




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



    document.getElementById("result").innerHTML = checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

};

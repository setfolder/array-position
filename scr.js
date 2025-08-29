/*
Syntax:
array.p(Number[, Replacement])

This method of Array returns the element with Number (counting from 1).
If Replacement is present: the method replaces the element with Number using Replacement.
Negative Numbers are counted from the end of the array (counting from -1).
Number 0 indicates the position before the first element (for insertion in the array).
Used as Number: null, false, undefined, "" are indicating the position after the last element (for insertion in the array).
If Number is greater than the position after the last element, then empty values ​​will be inserted into the array.
If Number is less than the position before the first element, then the position before the first element ​will be used.

Example 1:
let m = ["Arial", "blue", 12];
let t = m.p(1);
// returned: "Arial"

Example 2:
let m = ["Arial", "blue", 12];
let t = m.p(null, 100);
// returned: undefined
// m === ["Arial", "blue", 12, 100]
*/

Array.prototype.p = function (x, y) {
    if (x > 0) {
        if(y !== undefined){
            this[x-1] = y; return;
        }
        else {
            return this[x-1];
        }
    };
    if (x < 0) {
        if(y !== undefined){
            let i = this.length + x;
            if(i>=0){
                this[i] = y;
            } else {
                this.unshift(y);
            };
            return;
        }
        else {
            return this[this.length + x];
        }
    };
    if (x === 0) {
        if(y !== undefined){
            this.unshift(y); return;
        }
        else {
            return;
        }
    };
    if ( x === null || x === false || x === undefined || x === "") {
        if(y !== undefined){
            this.push(y); return;
        }
        else {
            return;
        }
    };
    return;
};

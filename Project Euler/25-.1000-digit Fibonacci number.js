var bigNumber = {};
 
/**
 * Adds two numbers in digit array format.
 *
 * @param digits1 The array of digits from least to most significant to add with digits2.
 * @param digits2 
 * @return The array of digits from least to most significant of the sum.
 */
bigNumber.digitArrayAdd = function(digits1, digits2) {
    var sumDigits = [];
    var length = digits1.length > digits2.length ? digits1.length : digits2.length;
    
    for(var i = 0; i < length; i++){
        sumDigits[i] = (digits1[i] || 0) + (digits2[i] || 0) + (sumDigits[i] || 0);
        bigNumber.rebalanceDigitArray(sumDigits, i);
    }
    
    return sumDigits;
}; //End of bigNumber.digitArrayAdd function
/**
 * Rebalances the digit array.  This will shift any numbers larger than 9 to higher digits.  This will only consider the provided index, and only rebalance higher indexes when there is an overflow.
 *
 * @param digits The digit array to balance
 * @param index The index to balance
 */
bigNumber.rebalanceDigitArray = function(digits, index) {
    var digit = digits[index];
    while (digit > 9) {
        //Update the current index
        digits[index] = digit % 10;
 
        //Update the next index
        index++;
        digits[index] = digit = (digits[index] || 0) + ((digit - digit % 10) / 10);
    }
}; //End of bigNumber.rebalanceDigitArray function
var getFirstFibTermNumberWithDigits = function(n) {
    if (n <= 1) {
        return 1;
    }
 
    var previous = [1];
    var current = [1];
    var counter = 2;
 
    while (current.length < n) {
        var temp = current;
        current = bigNumber.digitArrayAdd(previous, current);
        previous = temp;
        counter++;
    }
    console.log('Fib Number is: ' + current.reverse().toString().replace(/,/g, ''));
 
    return counter;
};
 
console.log(getFirstFibTermNumberWithDigits(3));
console.log(getFirstFibTermNumberWithDigits(1000));
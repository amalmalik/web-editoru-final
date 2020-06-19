var prime = {};
prime.isPrime = function(num) {
    num = (num > 0) ? num : num * -1;
    return factors.getFactors(num).length <= 2;
}; //Checks if the provided number is prime
var factors = {};
factors.getFactors = function(number) {
    var factors = [];
 
    var possibleFactor = 1;
    var sqrt = Math.sqrt(number);
    while (possibleFactor <= sqrt) {
        if (number % possibleFactor == 0) {
            factors[factors.length] = possibleFactor;
 
            var otherPossibleFactor = number / possibleFactor;
            if (otherPossibleFactor > possibleFactor) {
                factors[factors.length] = otherPossibleFactor;
            }
        }
        possibleFactor++;
    }
 
    return factors;
}; //End of factors.getFactors function
var bigNumber = {};
bigNumber.createFromNumber = function(number) {
    var bigNum = [number];
    bigNumber.rebalanceDigitArray(bigNum);
    return bigNum;
};
bigNumber.rebalanceDigitArray = function(digits, index) {
    index = index || 0;
    var digit = digits[index];
    while (digit > 9) {
        //Update the current index
        digits[index] = digit % 10;
 
        //Update the next index
        index++;
        digits[index] = digit = (digits[index] || 0) + ((digit - digit % 10) / 10);
    }
}; //End of bigNumber.rebalanceDigitArray function
//---------------------
/**
 * Gets the circular primes for numbers below/including the specified number of digits.
 */
var getCircularPrimes = function(numDigits) {
    var circularPrimes;
    if (numDigits < 1) {
        circularPrimes = {};
    } else if (numDigits == 1) {
        circularPrimes = {
            '2': true,
            '3': true,
            '5': true,
            '7': true
        };
    } else {
        var circularPrimes = getCircularPrimes(numDigits - 1);
 
        var digits = [];
        for (var i = 0; i < numDigits; i++) {
            digits[i] = 1;
        }
 
        var continueLoop = true;
        while (continueLoop) {
            var combination, combinations = getCombinations(digits);
            var circularPrime = true;
 
            for (var i = 0; i < combinations.length; i++) {
                if (!prime.isPrime(combinations[i])) {
                    circularPrime = false;
                }
            }
 
            if (circularPrime) {
                for (var i = 0, combination; combination = combinations[i]; i++) {
                    circularPrimes['' + combination] = true;
                }
            }
 
            //Increment the digits
            var digit = numDigits - 1;
            var digitLoop = true;
            while (digitLoop) {
                digitLoop = false;
 
                if (digits[digit] == 9) {
                    digits[digit] = 0;
                    digit--;
                    digitLoop = true;
                } else {
                    digits[digit]++
                }
            }
 
 
            digits[digit] = (digits[digit] + 1) % 10;
            while (digits[digit] == 0 && digit >= 0) {
                digits[digit]++;
                digit--;
            }
 
 
            var digit = 0;
            while ((digits[digit] == 9) && (digit < numDigits)) {
                if (digit == numDigits - 1) {
                    continueLoop = false;
                }
                digit++;
            }
        }
    }
 
    return circularPrimes;
};
 
var getCombinations = function(digits) {
    var combinations = [];
 
    var length = digits.length;
 
    for (var shift = 0; shift < length; shift++) {
 
        var num = 0;
        for (var i = 0; i < length; i++) {
            num += digits[i] * Math.pow(10, (length - 1 - i + shift) % length);
        }
        combinations.push(num);
    }
    return combinations;
};
 
var twoDigitCircularPrimes = getCircularPrimes(2);
console.log(twoDigitCircularPrimes);
 
        var size = 0;
for (var key in twoDigitCircularPrimes) {
    if (twoDigitCircularPrimes[key]){
        size++;
    }
}
console.log(size);
 
 
var n = 3        
var nDigitCircularPrimes = getCircularPrimes(6);
console.log(nDigitCircularPrimes );
 
        var sizeN = 0;
for (var key in nDigitCircularPrimes) {
    if (nDigitCircularPrimes[key]){
        sizeN++;
    }
}
 
 
console.log(sizeN);
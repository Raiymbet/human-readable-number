module.exports = function toReadable (number) {
    
    let str_number = number.toString(),
    result = [];

    var number_toString = function (number, result) {

        if (number_dictionary[number]) {
            result.push(number_dictionary[number]);
        } else {
            let zeros = '0'.repeat(number.length - 1),
            get_num = '';
            if ( number.length > 2) {
                get_num = '1'.concat(zeros);
                result.push(number_dictionary[number.charAt(0)]);
            } else {
                get_num = number.charAt(0).concat(zeros);
            }
            
            result.push(number_dictionary[get_num].replace('one ', ''));

            let sub_str = number.substring(1, number.length);
            sub_str = Number(sub_str).toString();
            if (sub_str != '0') {
                number_toString(sub_str, result);
            }
        }
    }


    number_toString(str_number, result);
    // for (let i = 0; i < str_number.length; i++) {
    //     if (str_number.charAt(i) != '0' || i == 0) {
    //         if (number_toString(str_number.substring(i, str_number.length), result)) {
    //             break;
    //         }
    //     }
    // }

    return result.join(" ");
}

var number_dictionary = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
    1000: "one thousand",
    1000000: "one million"
}
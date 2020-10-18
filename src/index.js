const map1 = {0 : 'zero', 1 : "one", 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 6 : 'six', 7 : 'seven',
             8 : 'eight', 9 : 'nine', 10 : 'ten', 11 : 'eleven', 12 : 'twelve', 13 : 'thirteen', 14: 'fourteen',
             15 : 'fifteen', 16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen', 20 : 'twenty',
             30 : 'thirty', 40 : 'forty', 50 : 'fifty',60 : 'sixty', 70 : 'seventy', 80 : 'eighty', 90 : 'ninety'}

const map2 = {2 : 'twenty', 3 : 'thirty', 4: 'forty', 5 : 'fifty',6 : 'sixty', 7 : 'seventy', 8 : 'eighty', 9 : 'ninety'}
let stop = false;

module.exports = function toReadable (num) {
  let arr = Array.from(num.toString());
    let OutputString = '';
        if(arr.length === 3) {
            OutputString += `${MoreThanHundred(num)} ${FromTenToHundred(num)}`;
            if (!stop) {
                OutputString = `${OutputString.trim()} ${toTen(num)}`
            }
        } else if (arr.length === 2) {
            OutputString += `${FromTenToHundred(num)}`
            if (!stop) {
                OutputString = `${OutputString} ${toTen(num)}`
            }
        } else if (arr.length === 1) {
            OutputString += `${toTen(num)}`
        }
        stop = false;
        return OutputString.trim();
}

function MoreThanHundred(num) {
    let value = Math.floor(num/100)
    return map1[value] + ' hundred'
}

function FromTenToHundred(num) {
    let value = num % 100;
    if (value >= 10 && value <= 19) {
        stop = true;
        return map1[value];
    } else if (value >= 20 && value <= 90){
        return map2[Math.floor(value/10)]
    }
    return '';
}

function toTen(num) {
    if (num < 10) {
        return map1[num];
    }
    let  value = (num%100)%10
    if (value !== 0) {
        return map1[value];
    }
    return '';
}

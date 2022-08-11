//Problem: 1
function radianToDegree(radian) {

    //validation of the Number
    if (typeof radian !== 'number') {
        console.log('Warning: INVALID INPUT!!!');
        return 'Please Type a valid Number.';
    }

    //radianToDegree calculation
    else {
        const degree = radian * (180 / Math.PI); // radian to Degree conversion formula

        //toFixed() method return STRING with 2 decimal points, that's why parseFloat is used to convert it in number.  
        const degree2DecimalPoint = parseFloat(degree.toFixed(2));
        return degree2DecimalPoint;
    }
}

const degree = radianToDegree(19); // provide true/false/any string as input to check validation.
console.log(degree);

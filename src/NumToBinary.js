import React from 'react';


function NumToBinary(num) {
    //array after conversion to binary
    let conversionArray = [];
    //final output of binary
    let binary = [];

    const convert = (num) => {
        //if num is not 0 and is greater than 0 add to conversion array and callback to convert
        if( num != 0 && num > 0){
            conversionArray.push({num: num, remainder: num % 2, quotient: Math.floor(num / 2)})
            return convert(Math.floor(num / 2))
        } else {
            //reverse the array to get the correct order
            let newArray = conversionArray.reverse();

            //loop through the array and push the remainder to the binary array
            newArray.forEach(item => {
                console.log(item);
                binary.push(item.remainder)
                
            })
        }
    }
        //call conversion to binary
        convert(num);
        //return the binary array joined to a string
        return binary.join('').match(/.{1,8}/g).join(' ');

}

export default NumToBinary;
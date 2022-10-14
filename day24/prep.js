var digits=[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

function plusOne(digits) {

    var newNum=[]
    var toNum=String(BigInt(digits.join(''))+BigInt(1)).split('').forEach((num)=>{
             console.log(num);
        newNum.push(parseInt(num));
    });

    console.log(newNum);
    

    // var toNum=(parseInt(digits.join(''))+1).toString().split('').forEach((num)=>{
    //     console.log(num);
    //     newNum.push(parseInt(num));
    // });

    // console.log(toNum);
    
   
    // return newNum;
    
};

plusOne(digits);


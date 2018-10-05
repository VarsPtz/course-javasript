'use strict';

let week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    lenOfWeek = week.length,
    arr = ['432414', '2321323', '123435432', '77987987', '3424453', '241412', '41324342'],
    lenOfArr = arr.length;
// console.log(lenOfWeek);

for (let i = 0; i < lenOfWeek; i++) {
    // console.log(i);
    if (i == 0 || i == 6) {
        // let myNewPara = document.createElement("STRONG");
        let myNewPara = document.createElement("p");
        let paraText = document.createTextNode(week[i]);
        // console.log(typeof(paraText));
        myNewPara.appendChild(paraText);
        // console.log(myNewPara);
        document.getElementById("week").appendChild(myNewPara).style.fontWeight="bold";
    } else {
        let myNewPara = document.createElement("p");
        let paraText = document.createTextNode(week[i]);
        myNewPara.appendChild(paraText);
        // console.log(myNewPara);
        document.getElementById("week").appendChild(myNewPara);
    }
};

for (let i =0; i < lenOfArr; i++ ) {
    let elemArr = arr[i];
    // console.log(elemArr.charAt(0));
    if (Number(elemArr.charAt(0)) == 3 || Number(elemArr.charAt(0)) == 7) {
        console.log(elemArr);
    }
};
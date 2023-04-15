// var array=[1,2,3,4,5,6,7,8,9];
// array.pop();  //pop delete  the last of element .
// array.pop();
// array.pop();
// array.pop();
// array.pop();
// consolse.log(array ,"array")


// var array=[1,2,3,4,5,6,7,8,9];
// array.pop();  //pop delete  the last of element .
// array.pop();
// array.pop();
// array.shift();
// array.shift();
// consolse.log(array ,"array")

// var array = [1,2,3,4,5,6,7,8,9];
// array.pop();  //pop delete  the last of element .
// array.pop();
// array.pop();
// array.pop();
// array.pop();
// consolse.log(array ,"array")
// console.log(array.length,"length of array")

// var array = [1,2,3,4,5,6,7,8,9,87,88,89,55];
// array.unshift("anu","singh")
// array.unshift("maan")
// console.log(array,"array")

// var array = [1,2,3,4,5,6,7,8,9,10,11,87,88,89,55];
// array.push("anu")   // add element at last
// array.pop();   //remove element from last


// array.shift(); //remove element from start
// array.unshift("anu","singh")  // add element at start 
// array.unshift("maan")
// console.log(array,"array");
// console.log(array.length,"- length of array");
// console.log(array.length,"array");

// using foor loop

// var studentlist =["anu","kunal","ponam","abhi","shnel","swaraj"];
// console.log(studentlist[2])

// console.log(studentlist.length)
// for(var i=0; i < studentlist.length; i++){
//     console.log(studentlist[i],i)
// }

// for(var i=0; i < studentlist.length; i++){

//     if(studentlist[i]="swaraj"){
//         console.log("kunal is in oue data")

//     }
// }


// var flagforswaraj =false;
// for(var i=0; i < studentlist.length; i++){

//     if(studentlist[i]="swaraj"){
//         flagforswaraj ="true"
//         console.log(" swaraj is in oue data")

//     }

// }
// if(flagforswaraj == false){
//     console.log(" swaraj is not in oue data")


// }





// for(var i=0; i < studentlist.length; i++){

//     if(studentlist[i]=="swaraj" || studentlist[i]=="kunal"){
//         console.log(" swaraj  or kunal is in oue data")

//     }
// }




// ques find maximum No in array
// function findmax(arr){
//     var max = arr [0];
//     if (arr[1]>max){
//         max = arr[1]
//     }
//     return max;
// }
// var arr = [12345 ,12345678];
// console.log(findmax(arr))



//  using for loop
// function findmax(arr){
//     var max = arr [0];
//     for(var i =1; i < arr.length; i++)
//     if (arr[i]>max){
//         max = arr[i]
//     }
//     return max;
// }
// var arr = [12345 ,12345678,1,2,3,456,789,1234,];
// console.log(findmax(arr))

//  find minimum Number


function findmin(arr){
    var min = arr [0];
    for(var i =1; i < arr.length; i++)
    if (arr[i]<min){
        min = arr[i]
    }
    return min;
}
var arr = [12345 ,12345678,1,2,3,456,789,1234,0,-1,];
console.log(findmin(arr))





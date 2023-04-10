// write a function to print number 1 to 10.

//  for(Start ; end ; steps ){
//     console.log()
//  }

// for(var a = 1; a <=100 ; a++){
//     console.log(a);
// }

// var start=10
// var end=20

// for( a=start ; a <=end; a++){
//     console.log(a);        
// }

// for( a=start ; a <=end; a--){
//     console.log(a);        
// }


// for( a=1 ; a <=10; a++){
//     console.log(a);        
// }

// 1 a=1 then check true (a<=10) true then pass code a++= 2 =end
//2  a=2 then check true (a<=10) true then pass code a++= 3 =end
//2 a=3 then check true (a<=10) true then pass code a++= 4 =end..
// its check upto a =10 then stop.

// for( a=1 ; a <=10; a++){
//     console.log("anu");       //if print string then return string ex anu (10 times) 
// }


// var rangestart = 10;
// var rangeEnd =20;                
// function printnumbers(start,end){      // using function
//     for( a=start ; a <=end; a++){      //a+=2 then result 10,12,14
//         console.log(a);        
//     }
// }
// printnumbers(rangestart,rangeEnd);
//write a

//    var rangestart = 1;
//    var rangeEnd =100;                
//    function printnumbers(start,end){      
//        for( a = start ; a <=end ;a ++){  

//         if(a %2 == 0){
//             console.log(a);
//         }
        
              
//        }
//    }
//    printnumbers(rangestart,rangeEnd);


// find even count

// var rangestart = 1;
//    var rangeEnd =10;  
//    function even(start,end){ 
//     var count=0;     
//      for( var i = start ; i <=end ;i ++){ 
//         if(i%2 == 0 ){
//                 //   console.log(a);
//                 count++;
//           }

//      }
//      return count;
//     }
//     var ans = even(1, 10);
//     console.log(ans);


function odd(start,end){ 
    var count=0;     
     for( var i = start ; i <=end ;i ++){ 
        if( i%2 !== 0 ){
                
                count++;
          }

     }
     return count;
    }
    var ans = odd(1, 3);
    console.log(ans);

















// let sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus nisi laboriosam iusto voluptatem quo.";
// let counter = 0;
// for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] == "m") {
//         console.log(`${counter}. Index of m : ${i}`);
//         counter++;
//     }
    
// }

// let sent = "Selam Baba Burası Nirvana"
// console.log(sent.split(" ").reverse().join(" "));


// function reversed(sentence) {
//     return sentence.includes(" ") ? sentence.split(" ").reverse().join(" ") : a
// }

// console.log(reversed("Hello World!"));

// This js code include text reversing without string methods
//type 1: input="abc def" output="fed cba"
//type 2: input="abc def" output="cba fed"
//type 3: input="abc def" output="def abc"
//type 1
// {
//     let s="abc def";
//     let max=s.length;
//     let sNew=""
//     for(max;max>=0;max--){
//         sNew=sNew+s.charAt(max);
//     }
//     console.log(sNew);
// }
// //type 2
// s="abc def ghi";
// {
    //  let max=s.length;
    //  let sNew=""
    //  let wstart=0;
    //  let wstop;
    //  for(i=0;i<=max;i++){
    //     if(s.charAt(i)==" " || i==max){
    //         for( wstop=i;wstop>=wstart;wstop--){
    //             console.log(wstop);
    //            sNew=sNew+s.charAt(wstop);
    //         }
    //         wstart=i;
    //         console.log("wstart",wstart);
    //     }
    // }
    // console.log(sNew);
// }
// //type 3
// s="890 567 1234";
// {
//      let max=s.length;
//      let sNew=""
//      let wstart;
//      let wstop=max;
//      console.log(sNew)
//      for(i=max;i>=0;i--){        
//         if(s.charAt(i)==" " || i==0){            
//             for( wstart=i;wstart<=wstop;wstart++){
//                sNew=sNew+s.charAt(wstart);              
//             }
//             wstop=i;
//         }
//     }
//     console.log(sNew);
// }

//type 2: input="abc def" output="cba fed"
// s="abc def ghi";
// let max=s.length;
//      let sNew=""
//      let wstart=0;
//      let wstop;
//      for (i = 0; i <= max; i++) {
//          if (s.charAt(i) == " " || i == max) {
//              for (wstop=i;wstop >= wstart;wstop--)
//              {
//                  sNew += s.charAt(wstop)               
//              }
//              wstart = i;
//          }
         
//      }
// console.log(sNew);

s="abc def ghi";
let max=s.length;
     let sNew=""
     let wstop=max;
     let wstart;
     for (i = max; i >= 0; i--) {
         if (s.charAt(i) == " " || i == 0) {
             for (wstart=i;wstart <= wstop;wstart++)
             {
                 sNew += s.charAt(wstart)               
             }
             wstop = i;
         }
         
     }
console.log(sNew);


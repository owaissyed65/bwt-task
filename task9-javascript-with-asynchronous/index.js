// const order = (production) => {
//   setTimeout(() => {
//     console.log('order has been placed');
//     production();
//   }, 2000)
  
// }
// order(productOrder)

// function productOrder (){
//   console.log('Production has been started')
//   setTimeout(()=>{
//     console.log('food has been cut')
//       setTimeout(()=>{
//         console.log('machine has been started')
//           setTimeout(()=>{
//             console.log('milk has been freez')
//               setTimeout(()=>{
//                 console.log('ice cream is served now')
//             },3000)
//           },2000)
//        },2000)
//   },2000)
// }
let shopIsOpen = true;
// const order = (work,time)=>{
//   return new Promise((res,rej)=>{
//     if(shopIsOpen){
//       setTimeout(()=>{
//         res(work())
//       },time)
//     }
//     else{
//       rej('Sorry icecream is finished please come tomorrow')
//     }
//   })
// }
// order(()=>{console.log('order has been placed')},2000)
//   .then(()=>{
//     return order(()=>{console.log('production has been started')},0000)
//   })
//   .then(()=>{
//     return order(()=>{console.log('food has cut')},3000)
//   })
//   .then(()=>{
//     return order(()=>{console.log('machine is on')},1000)
//   })
//   .then(()=>{
//     return order(()=>{console.log('Ice cream has been served')},2000)
//   })
//   .catch((error)=>{console.log(error)})
const order = (time)=>{
  return new Promise((res,rej)=>{
    if(shopIsOpen){
      setTimeout(()=>{
        res()
      },time)
    }
    else{
      rej('Sorry icecream is finished please come tomorrow')
    }
  })
}
const prodWork = async () =>{
  try {
  await order(2000);
    console.log('order has been placed');
  await order(0000);
    console.log('production has been started');
    await order(3000);
    console.log('milk has been added');
    await order(2000);
    console.log('machine has been started');
    await order(1000);
    console.log('ice cream has been served');
  }catch(error){
    console.log(error)
  }
  
}

prodWork()
console.log("d");
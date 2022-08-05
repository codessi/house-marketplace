// let p = () =>  {
  
//   return new Promise((resolve ,reject) => {
//   let x = 1+2
//   if(x ===2){
//     resolve("success")
//   } else {
//     reject("error")
//   }
// })};

//   p().then(r => console.log(r))
//   .catch(f => console.log(f))


// p().then(c => console.log(c)).catch(e=> console.log(e))

let q = new Promise((resolve ,reject) => {
  let x = 1+1
  if(x ===2){
    resolve("success")
  } else {
    reject("error")
  }
})


q.then( r=> console.log(r))
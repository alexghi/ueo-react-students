// const executeMeLater = (t) => {
//   console.log(`${t} + 1`);
// };

// function myFunction(executeMeLater) {
//   executeMeLater(12);
// }

let keepsHisWord;
keepsHisWord = true;

const getAPOD = new Promise( function(resolve, reject) {
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.getElementById('apod').innerHTML = `<img height="500px" src=${data.url}> <div>${data.title}</div>`
    console.log(data)
  })
})

// getAPOD()


// var myPromise = new Promise( function(resolve, reject) {
//     if( keepsHisWord ) {
//       resolve({
//         message: 'This man keeps his word',
//         code: 200
//       })
//     }
//     else {
//       reject({
//         message: "This man is a liar",
//         code: 404
//       })
//     }

// })

// myPromise
//   .then(
//     (m) => {
//       // console.log('1', m)
//       return {something: 'something'}
//     },
//   )
//   .then((a) => {
//     // console.log('2', a)
//     return {altceva: 'altceva'}
    
//   })
//   .then((a)=> {
//     // console.log('3', a)
//   })
//   .catch((err) => {
//     // console.log(err)
//   })

// console.log(myPromise)


// let promise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       message: "This man likes to keep his word",
//       code: 200,
//       color: "green",
//     });
//   }, 5000);
// })
//   .then((response) => {
//     console.log("hooray you've been accepted", response);
//   })
//   .then(() => {
//     console.log("you are the best");
//     // go to another server and ask for other info
//     return "123";
//   })
//   .then((response) => {
//     console.log("alright alright alright", response);
//     return Number(response * 2);
//   })
//   .then((r) => {
//     console.log("at last", r);
//   })
//   .catch(function (error) {
//     console.log("oups", error);
//   });

// let ticker = () => {
//   var initialSeconds = 0;
//   setInterval(function () {
//     initialSeconds++;
//     console.log(`${initialSeconds} sec`);
//   }, 1000);
// };

// var myFn = async () => {
//   // ticker();
//   var test = "1234 TEST";
//   console.log("first console log", test);

//   var promise2 = new Promise(function (resolve, reject) {
//     // aici este locul unde vom initia procesul de asincronicitate
//     setTimeout(function () {
//       // reject({
//       //   message: "Invalid user and password",
//       //   code: 208,
//       // });
//       resolve({
//         message: "The man likes to keep his word",
//         code: 200,
//       });
//     }, 5000);
//   });

//   var anotherPromise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("another promise");
//     }, 2000);
//   });

//   await anotherPromise;
//   console.log("second console log", anotherPromise);

//   await promise2;
//   console.log("third console log", promise2);
// };

// myFn();

// var onError = (response) => {
//   console.log(response.message);
// };

// var onSuccess = (response) => {
//   console.log(`success ${response.message}`);
// };

// promise2.then(onSuccess).catch(onError);

// keepsHisWord = false;
// var promise3 = new Promise(function (resolve, reject) {
//   if (keepsHisWord) {
//     resolve("this man keeps his word");
//   } else {
//     reject("this man doesn't keep his word");
//   }
// });

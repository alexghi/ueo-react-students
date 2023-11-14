// Funcția "one" primește un argument "x" și îl afișează în consolă.
function one(x) {
    console.log(x);
  }
  
// Exemple de utilizare:
one(5); // Afișează "5" în consolă.
one("Hello, World!"); // Afișează "Hello, World!" în consolă.

// Funcția "two" primește un argument "x" și o funcție de tip callback "cb".
// Afișează "x" în consolă și apelează funcția de callback după o întârziere de 1 secundă.
function two(x, cb) {
    setTimeout(function () {
      console.log(x);
      cb(x);
    }, 1000);
  }
  
  // Exemplu de utilizare:
  two(42, function (result) {
    console.log("Callback a fost apelată cu:", result);
  });
  
// Funcția "three" primește un argument "x" și returnează o promisiune.
// Promisiunea se rezolvă cu valoarea lui "x" după o întârziere de 1 secundă.
function three(x) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(x);
      }, 1000);
    });
  }
  
// Exemplu de utilizare:
  three(2)
    .then((resp) => {
      return resp + 2;
    })
    .then((m) => {
      return m * 2;
    })
    .then((something) => {
      console.log(something); // Afișează rezultatul calculat în consolă.
    });
  
// four(4)
//   .then((resp) => {
//     return resp * 3;
//   })
//   .then((m) => {
//     console.log(m);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

function five(x) {
    return Promise.resolve(x);
  }
  
  // five(5)
  //   .then((r) => {
  //     return r * 10;
  //   })
  //   .then((r) => {
  //     console.log(r);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });

  function six(x) {
    return Promise.reject(x);
  }
  
  // six(6)
  //   .then((r) => {
  //     console.log("here", r);
  //   })
  //   .catch((e) => {
  //     console.log("catch", e);
  //   })
  //   .finally(() => {
  //     console.log("finally");
  //   });

  // function seven(x) {
//   return five(x).then((a) => {
//     return a;
//   });
// }

// seven(7).then((r) => {
//   console.log(`${r} something`);
// });

// function eight(x) {
//   return six(x).then(
//     console.log,
//     (error) => console.log("error", error)
//     );
// }

// eight(8);

// function nine(x) {
//   return five(x).then(
//     () => {
//       throw new Error("error");
//     },
//     (error) => console.log("error", error)
//   );
// }

// nine(9);


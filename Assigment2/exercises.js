//   Afiseaza valoare lui x
// function one(x) {
//   console.log(x);
// }


// Afiseaza valoare lui x iar dupa o secunda apeleaza funcyia cb
// function two(x, cb) {
//   setTimeout(function () {
//     console.log(x);
//     cb(x);
//   }, 1000);
// }


// Afiseaza o promisiune cu valoarea lui x cu o intarziere de o secunda
// function three(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(x);
//     }, 1000);
//   });
// }


// Afiseaza o promisiune rezolvata sau respinsa cu valoarea x
function four(x) {
  return new Promise((resolve, reject) => {
      if (x > 5) {
          resolve(x);
      } else {
          reject(x);
      }
  });
}


// Returneaza o promisiune rezolvata cu valoarea lui x
function five(x) {
  return Promise.resolve(x);
}


// Returneaza o promisiune respinsa cu valoarea x
function six(x) {
  return Promise.reject(x);
}


// Returneaza o promisiune rezolvata cu valoarea x
function seven(x) {
  return five(x).then((a) => {
      return a;
  });
}


// eight(8);


// Returneaza o promisiune rezolvata apoi arunca o eroare in interiorul lui then
function nine(x) {
  return five(x).then(
      () => {
          throw new Error("error");
      },
      (error) => console.log("error", error)
  );
}
  
// nine(9);

// Returneaza o promisiune rezolvata si arunca i eroare care se gestioneaza cu catch
function ten(x) {
  return five(x)
      .then(() => {
          throw new Error("error");
      })
      .catch((error) => console.log("error", error));
}

try {
  ten(10);
} catch (e) {
  console.log(e);
}

// Returneaza o promisiune rezolvata si afiseaza valoarea rezolvata, apoi apeleaza then pentru a afisa acea valoare
// function eleven(x) {
//   console.log(x);
//   return new Promise((resolve, reject) => {
//     resolve(x);
//   });
// }

// eleven(11).then((r) => {
//   console.log(r);
// });


// Primeste un x si afiseaza x in consola, returneaza 
function twelve(x) {
  console.log(x);
  return new Promise((resolve, reject) => {
    if (x >= 2) {
      console.log("larger");
      resolve(x);
    } else {
      console.log("smaller");
      reject(x);
    }
  });
}

// twelve(12)
//   .then((a) => {
//     console.log("a", a);
//     return a;
//   })
//   .then((b) => {
//     console.log(b);
//     return b;
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log("either fullfilled, or rejected");
//   });


// Aceasta functie rezolva un array de promisiuni
// function thirteen(x) {
//   return Promise.all([twelve(1), twelve(2)]).then((r) => r);
// }

// thirteen().then((message) => {
//   console.log("message", message);
// });


//Aceasta functie apeleaza functia twelve(1) si twelve(3) si arata rezultatele
// function fourteen(x) {
//   twelve(1).then(console.log);
//   twelve(3).then(console.log);
// }

// fourteen();


// Creeaza o promisiune cu valoarea 1 si afiseaza rezultatul in consola. 
// function fifteen(x) {
//   return Promise.resolve(
//     Promise.resolve(
//         Promise.resolve(
//             Promise.resolve(1)
//         )
//     )
//   ).then(console.log);
// }

// fifteen(2);


// Funcția "sixteen" demonstrează utilizarea promisiunilor și gestionarea erorilor într-un mod secvenția
// function sixteen(x) {
//   Promise.resolve(1)
//     .then((x) => {
//       console.log("1st", x);
//       return x + 1;
//     })
//     .then((x) => {
//       console.log("2nd", x);
//       throw x + 1;
//     })
//     .catch((x) => {
//       console.log("catch", x);
//       return x + 1;
//     })
//     .then((x) => {
//       console.log("3rd", x);
//       return Promise.resolve(x + 1);
//     })
//     .then((x) => {
//       console.log("4th", x);
//       return Promise.reject(x + 1);
//     })
//     .catch((x) => {
//       console.log("last catch", x);
//     });
// }
// sixteen(1);


// Este o functie asincrona care returneaza o promisiune rezolvata cu valoarea 1
// async function seventeen(x) {
//   return await Promise.resolve(1);
// }


// Este o funcție asincronă care returnează o promisiune respinsă cu valoarea 1
// async function eighteen(x) {
//   return await Promise.reject(1);
// }


// Este o funcție asincronă care folosește un bloc "try...catch" 
// async function nineteen(x) {
//   try {
//     throw 1;
//   } catch (e) {
//     return 2;
//   }
// }


// este o funcție asincronă care aruncă o excepție cu valoarea 2
// async function twenty(x) {
//   try {
//     throw 1;
//   } catch (e) {
//     throw 2;
//   }
// }


// Este o funcție asincronă care utilizează "await"
// async function twentyone(x) {
//   try {
//     const response = await fetch("http://google.com");
//     const html = response.text();
//     return html;
//   } catch (e) {
//     return e;
//   }
// }


// Este o funcție asincronă care utilizează "await" pentru a aștepta rezolvarea promisiunii
// async function twentytwo(x) {
//   return await twentyone()
//     .then((x) => x.slice(0, 15))
//     .then(console.log);
// }


// Este o funcție care returnează o promisiune care rezolvă valoarea lui "b"
// function twentythree(x) {
//   let b = 0;
//   return new Promise((resolve, reject) => {
//     resolve(b++);
//   });
// }


// Creează o variabilă "x" care stochează rezultatul promisiunii si afiseaza rezultatul
// function twentyfour() {
//   const x = twentythree();
//   x.then(console.log);
//   x.then(console.log);
// }


//create a promise that resolves successfully after 1 minute
function delayOneMinute() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promisiunea a fost rezolvată după un minut.');
    }, 60000); // 60000 milisecunde = 1 minut
  });
}

// Utilizarea promisiunii create
delayOneMinute()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
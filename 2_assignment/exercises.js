const x = 4

// function one(x) {
//   // daca dati valori lui x (fie primitive, fie functii o sa puteti testa sa vedeti cum se comporta - valabil peste tot in exemple)
//       //aici nu prea imi dau seama ce ar trebui sa comentez :)), ii doar un console.log ca sa vad ca functia merge :))
//   console.log(x);
// }

// function two(x, cb) {
//   setTimeout(function () {
//     console.log(x);
//     cb(x);
//   }, 1000);
//       //nu-mi dau seama ce este "cb"....pare o functie, dar nu inteleg ce ar trebui sa returneze
// }

// function three(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(x);
//     }, 1000);
//   });
// }

// three(2)
//   .then((resp) => {
//     return resp + 2;
//   })
//   .then((m) => {
//     return m * 2;
//   })
//   .then((something) => {
//     console.log(something);
//   });

// function four(x) {
//     return new Promise((resolve, reject) => {
//         if (x > 5) {
//             resolve(x);
//             console.log('X is greater then 5')
//         } else {
//             reject(x);
//             console.log('X is less then 5')
//         }
//         // aici este un promise simplu care ii bazat pe if, da succes daca x este mai mic decat 5 si fail in ori ce alt caz
//     });
// }

// four(6)
//     .then((resp) => {
//         return resp * 3;
//         //daca da resolve atunci rezultatul este inmultit cu 3
//     })
//     .then((m) => {
//         console.log(m);
//         //se afiseaza rezultatul
//     })
//     .catch((error) => {
//         console.log("error", error);
//         //in caz de eroare este afisata
//     });

function five(x) {
    return Promise.resolve(x);
    //aici indiferent de valoarea lui X promisiunea este rezolvata
}

// five(5)
//   .then((r) => {
//     return r * 10;
//     //se inmulteste parametrul cu 10
//   })
//   .then((r) => {
//     console.log(r);
//     //se afiseaza noul rezultat
//   })
//   .catch((e) => {
//     console.log(e);
//     //se asteapta erori si se afiseaza daca sunt, nu ii cazul pentru ca la linia 64 face resolve 
//   });

function six(x) {
    return Promise.reject(x);
}

// six(6)
//   .then((r) => {
//     console.log("here", r);
//     //in then nu se intra pentru ca da reject, ar fi intrat daca era resolve
//   })
//   .catch((e) => {
//     console.log("catch", e);
//     //aici se intra pentru ca a dat fail prmisiunea
//   })
//   .finally(() => {
//     console.log("finally");
//     //in finally se intra indiferent de rezultatul promisiunii
//   });

// function seven(x) {
//   return five(x).then((a) => {
//     return a;
//   });
//   //se apeleaza functia five care da resolve si dupa se returneaza rezultatul
// }

// seven(7).then((r) => {
//   console.log(`${r} something`);
//   //aici se afiseaza rezultatul venit din functia seven care la randul ei apeleaza functia five
// });

// function eight(x) {
//   return six(x).then(
//     console.log,
//     (error) => console.log("error", error)
//     );
//     //aici se apeleaza functia six, care mereu da reject, si se afiseaza eroarea si valoarea data ca parametru
// }

// eight(8);

// function nine(x) {
//   return five(x).then(
//     () => {
//       throw new Error("error");
//     },
//     (error) => console.log("error", error)
//   );
//   //aici chiar daca five da resolve functia arunca o eroare
// }

// nine(9);

// function ten(x) {
//     return five(x)
//         .then(() => {
//             throw new Error("error");
//         })
//         .catch((error) => console.log("error", error));
//     //dupa ce apeleaza functia five arunca o eroare
// }

// try {
//     ten(10);
// } catch (e) {
//     console.log(e);
// }

// function eleven(x) {
//   console.log(x);
//   return new Promise((resolve, reject) => {
//     resolve(x);
//   });
//   //returneaza o promisiune care se rezolva si mai jos, in then se afiseaza rezultatul
// }

// eleven(11).then((r) => {
//   console.log(r);
// });

function twelve(x) {
    console.log(x);
    return new Promise((resolve, reject) => {
        if (x >= 2) {
            console.log("larger");
        } else {
            console.log("smaller");
        }
        resolve(x);
        //dupa ce verifica in if valoarea lui x da resolve
    });
}

// twelve(12)
//     .then((a) => {
//         console.log("a", a);
//         return a;
//         //afiseaza valoarea lui a, si ii da return valorii
//     })
//     .then((b) => {
//         console.log(b);
//         return b;
//         //aici rezultatul de mai sus e tot acelas dar se numeste b
//     })
//     .catch((e) => {
//         console.log(e);
//         //in caz de eroare ar fi fost adresata aici
//     })
//     .finally(() => {
//         console.log("either fullfilled, or rejected");
//         // in finally intra oricum
//     });

// function thirteen(x) {
//   return Promise.all([twelve(14), twelve(2)]).then((r) => r);
//   //se face un prmise pe un array de functii, si se pune un then care se aplica pe toate
// }

// thirteen().then((message) => {
//   console.log("message", message);
//   //aici doar se afiseaza mesajul fiecarei functii din array-ul pe care sa facut Promise
// });

// function fourteen(x) {
//   twelve(1).then(console.log);
//   twelve(3).then(console.log);
//   //se apeleaza functia twelve de 2 ori cu 2 valori diferite, dupa care in then se afiseaza
// }

// fourteen();

// function fifteen(x) {
//     return Promise.resolve(
//         Promise.resolve(
//             Promise.resolve(
//                 Promise.resolve(1)
//             )
//         )
//     ).then(console.log);
// // se face un Promise, care in resolve la el, se intra intr-un alt promise si tot asa, ultimul da resolve cu 1, si la final se afiseaza
// }

// fifteen(2);

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
//     //se tot merge din then in then si se tot creste valoarea lui X
// }

// sixteen(1);

// async function seventeen(x) {
//   return await Promise.resolve(1);
// }

// async function eighteen(x) {
//     return await Promise.reject(1);
// }

// async function nineteen(x) {
//   try {
//     throw 1;
//   } catch (e) {
//     return 2;
//   }
// }

// async function twenty(x) {
//   try {
//     throw 1;
//   } catch (e) {
//     throw 2;
//   }
// }

async function twentyone(x) {
  try {
    const response = await fetch("http://google.com");
    const html = response.text();
    return html;
  } catch (e) {
    return e;
  }
}
// twentyone(5)

// async function twentytwo(x) {
//   return await twentyone()
//     .then((x) => x.slice(0, 15))
//     .then(console.log);
// }

// function twentythree(x) {
//   let b = 0;
//   return new Promise((resolve, reject) => {
//     resolve(b++);
//   });
// }

// function twentyfour() {
//   const x = twentythree();
//   x.then(console.log);
//   x.then(console.log);
// }

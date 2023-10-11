function one(x) {
 // daca dati valori lui x (fie primitive, fie functii o sa puteti testa sa vedeti cum se comporta - valabil peste tot in exemple)
  console.log(x);
}

//callback function
function two(x, cb) {
  setTimeout(function () {
    console.log(x);
    cb(x);
    console.log(cb)
  }, 1000);
}

//Acesta este o functie care primește un parametru și returnează dupa 1000 milisecunda o promisiune
function three(x) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(x);
    }, 1000);
  });
}

//După ce promisiunea este rezolvată, se apeleaza urmatoarele than-uri in ordine
three(2)
  .then((resp) => {
    return resp + 2;
    //2+2=4
  })
  .then((m) => {
    return m * 2;
    //4*2=8
  })
  .then((something) => {
    console.log(something);
    //afișează în consolă 8
  });

//Acesta este o functie care primește un parametru și returnează dupa 1000 milisecunda o promisiunea resolve, 
//daca x-ul este mai mare decât 5, si dacă nu atunci nu respectă promisiunea
function four(x) {
    return new Promise((resolve, reject) => {
      if (x > 5) {
        resolve(x);
      } else {
        reject(x);
      }
    });
  }
  
  //dacă four(4) => 4<5, deci nu respectă promisiunea, va afișa în consolă: error 4 
  //dacă ar fi four(6) => 6>5, ar respecta promisiunea, și ar afișa 6*3= 18
  four(4)
    .then((resp) => {
      return resp * 3;
    })
    .then((m) => {
      console.log(m);
    })
    .catch((error) => {
      console.log("error", error);
    });
 
//Acesta este o functie care primește un parametru, și returnează o promisiune rezolvată imediat cu valoarea lui x 
  function five(x) {
    return Promise.resolve(x);
  }
  
  //îl face promisiunea, și prima dată îl returnează 5*10= 50, și în afisează în consolă
  //nu se apelează catch-ul, că nu a apărut nici o eroare
  five(5)
    .then((r) => {
      return r * 10;
    })
    .then((r) => {
      console.log(r);
    })
    .catch((e) => {
      console.log(e);
    });
  
//Acesta este o functie care primește un parametru, care returnează o promisiune nerespectată (Promise.reject(x)) 
  function six(x) {
    return Promise.reject(x);
  }
  
  six(6)
    .then((r) => {
      console.log("here", r);
    })
    .catch((e) => {
      console.log("catch", e);
    })
    //Este apelată întotdeauna, indiferent dacă promisiunea a fost rezolvată sau respinsă.
    .finally(() => {
      console.log("finally");
    });
  
//Returnează o promisiune generată prin apelul funcției five(x)
  function seven(x) {
    return five(x).then((a) => {
      return a;
    });
  }
  
  seven(7).then((r) => {
    console.log(`${r} something`);
  });
  

//Dacă apelul funcției six(x) nu a avut loc o eroare, console.log va fi apelat cu rezultatul.
//iar daca este respins funcția va fi apelată și va afișa un mesaj de eroare în consolă
  function eight(x) {
    return six(x).then(
      console.log,
      (error) => console.log("error", error)
      );
  }
  
  eight(8);
  

//Apelează funcția five(x), iar pe rezultatul promisiunii returnate de five(x), aplică then cu două funcți 
//După promisiunea rezolvată, aceată aruncă o excepție, iar rezultatul afișat în consolă va fi "error Error: error".
  function nine(x) {
    return five(x).then(
      () => {
        throw new Error("error");
      },
      (error) => console.log("error", error)
    );
  }
  
  nine(9);
  

//Funcția ten primește un argument, apelând five și adăugând o operație care aruncă o eroare. 
//În blocul try-catch, se încearcă apelul funcției ten. Dacă apare o eroare în interiorul lui ten, 
//aceasta este prinsă și afișată în consolă.
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
 

//prima dată îl afișează rezultatul, după  care urmează după apelul funcției eleven(11)
  function eleven(x) {
    console.log(x);
    return new Promise((resolve, reject) => {
      resolve(x);
    });
  }
  
  eleven(11).then((r) => {
    console.log(r);
  });


//Verifică dacă x este mai mare sau egal cu 2, afișează un mesaj în consolă larger dacă condiția este îndeplinită, altfel smaller.
//Rezolvă promisiunea cu valoarea lui x
//Metoda catch nu va fi apelată, deoarece promisiunea nu este respinsă, metoda finally va fi întotdeauna apelată
  function twelve(x) {
    console.log(x);
    return new Promise((resolve, reject) => {
      if (x >= 2) {
        console.log("larger");
      } else {
        console.log("smaller");
      }
      resolve(x);
    });
  }
  
  twelve(12)
    .then((a) => {
      console.log("a", a);
      return a;
    })
    .then((b) => {
      console.log(b);
      return b;
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      console.log("either fullfilled, or rejected");
    });
  

//Folosește Promise.all pentru a aștepta rezolvarea a două promisiuni returnate de funcția twelve,
//după se va executa .then care returnează un array cu cele două rezultate
  function thirteen(x) {
    return Promise.all([twelve(1), twelve(2)]).then((r) => r);
  }
  
  thirteen().then((message) => {
    console.log("message", message);
  });
 

//îl apelează prima dată, funcția twelve(x) și verifică promisiunea, după ce afișează atât rezultatul, cât și rezultatul promisinunii
  function fourteen(x) {
    twelve(1).then(console.log);
    twelve(3).then(console.log);
  }
  
  fourteen();
  

//Acest funcție returnează o promisiune care este rezolvată cu rezultatul unei lanțuri de promisiuni 
  function fifteen(x) {
    return Promise.resolve(
      Promise.resolve(
          Promise.resolve(
              Promise.resolve(1)
          )
      )
    ).then(console.log);
  }
  
  fifteen(2);
  

//această returnează și afisează pe rând toate .then-urile,și între ele catch și la final tot catch-ul
//numărul 1 întotdeauna crește, iar va afișa consola ori (x+1)st ori catch
  function sixteen(x) {
    Promise.resolve(1)
      .then((x) => {
        console.log("1st", x);
        return x + 1;
      })
      .then((x) => {
        console.log("2nd", x);
        throw x + 1;
      })
      .catch((x) => {
        console.log("catch", x);
        return x + 1;
      })
      .then((x) => {
        console.log("3rd", x);
        return Promise.resolve(x + 1);
      })
      .then((x) => {
        console.log("4th", x);
        return Promise.reject(x + 1);
      })
      .catch((x) => {
        console.log("last catch", x);
      });
  }
  
  sixteen(1);
 

//Funcția asincronă returnează o promisiune care este rezolvată imedia
  async function seventeen(x) {
    return await Promise.resolve(1);
  }
  

//această funcție va returna o promisiune respinsă
  async function eighteen(x) {
    return await Promise.reject(1);
  }
  

//În cazul în care apare o excepție, aceasta va fi prinsă în blocul catch,
//Indiferent de excepția aruncată în blocul try, funcția nineteen va returna întotdeauna 2
  async function nineteen(x) {
    try {
      throw 1;
    } catch (e) {
      return 2;
    }
  }
  

//această este asemănătoare cu funcția nineteen(x)
  async function twenty(x) {
    try {
      throw 1;
    } catch (e) {
      throw 2;
    }
  }
  

// această funcție asincronă încearcă să facă o cerere către "http://google.com", să extragă textul din răspuns 
//și să-l returneze. Dacă apare o eroare, aceasta va fi prinsă și returnată în schimb.
  async function twentyone(x) {
    try {
      const response = await fetch("http://google.com");
      const html = response.text();
      return html;
    } catch (e) {
      return e;
    }
  }
  
  //așteaptă rezolvarea promisiunii returnate de twentyone(x), apoi aplică o serie de operații asupra rezultatului 
  //și afișează primele 15 caractere ale șirului în consolă
  async function twentytwo(x) {
    return await twentyone()
      .then((x) => x.slice(0, 15))
      .then(console.log);
  }
  

  //valoarea rezolvată în promisiune rămâne 0, deoarece incrementarea are loc după rezolvarea promisiunii. 
  //Aceasta înseamnă că promisiunea întoarce întotdeauna 0
  function twentythree(x) {
    let b = 0;
    return new Promise((resolve, reject) => {
      resolve(b++);
    });
  }
  

  //ambele apeluri ale console.log vor afișa 0, pentru că valoarea rezolvată în promisiune twentythree(x) rămâne 0
  function twentyfour() {
    const x = twentythree();
    x.then(console.log);
    x.then(console.log);
  }
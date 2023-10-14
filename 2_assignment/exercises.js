/*Afiseaza  parametrul in consola */
function one(x) {
  // daca dati valori lui x (fie primitive, fie functii o sa puteti testa sa vedeti cum se comporta - valabil peste tot in exemple)
  console.log(x);
}

/*Afiseaza  parametrul x dupa o secunda si executa functia cb,
primita ca si parametru */
function two(x, cb) {
  setTimeout(function () {
    console.log(x);
    cb(x);
  }, 1000);
}

/*1. Functia returneaza o promisiune care, dupa o secunda se indeplineste
 si ofera ca rezultat parametrul oferit functiei
 2. Dupa implinirea promisiunii se returneaza parametrul functiei principale + 2,
 dupa, rezultatul anterior se dubleaza, iar dupa, se afiseaza rezultatul anterior */
function three(x) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(x);
    }, 1000);
  })
    .then((resp) => {
      return resp + 2;
    })
    .then((m) => {
      return m * 2;
    })
    .then((something) => {
      console.log(something);
    });
}

/*1. Functia returneaza o promisiune care verifica daca parametrul trimis 
functiei principale e mai mare decat 5. Daca da, confirma ca promisiunea
s-a indeplinit; daca nu, arunca in consola atentionarea ca promisiunea nu s-a indeplinit
2. Daca promisiunea se indeplineste, rasounsul se tripleaza si se afiseaza; daca nu se 
indeplinese, se afiseaza eroarea */
function four(x) {
  return new Promise((resolve, reject) => {
    if (x > 5) {
      resolve(x);
    } else {
      reject(x);
    }
  })
    .then((resp) => {
      return resp * 3;
    })
    .then((m) => {
      console.log(m);
    })
    .catch((error) => {
      console.log("error", error);
    });
}

/* Promisiunea returnata se indeplineste, iar mai apoi raspunsul acesteia se inmulteste
cu 10, apoi se afiseaza in consola rezultatul */
function five(x) {
  return Promise.resolve(x)
    .then((r) => {
      return r * 10;
    })
    .then((r) => {
      console.log(r);
    })
    .catch((e) => {
      console.log(e);
    });
}

/* Promisiunea nu se indeplineste, iar mai apoi se afiseaza mesajul "catch" si
parametrul trimis de promisiune, iar pe urma se afiseaza mesajul "finally" */
function six(x) {
  return Promise.reject(x)
    .then((r) => {
      console.log("here", r);
    })
    .catch((e) => {
      console.log("catch", e);
    })
    .finally(() => {
      console.log("finally");
    });
}

/* Se apeleaza functia "five", iar dupa executia acesteia se trimite un raspuns "null"
 catre o functie care trimite mai departe acest raspuns, iar pe urma se afiseaza in 
 consola raspusul trimis anterior + cuvantul "something" */
function seven(x) {
  return five(x)
    .then((a) => {
      return a;
    })
    .then((r) => {
      console.log(`${r} something`);
    });
}

/* Se apeleaza functia "six", pe urma se afiseaza in consola mesajul "error", in timp ce
 functia "six" isi termina executia */
function eight(x) {
  return six(x).then(console.log("error"), (error) =>
    console.log("error", error)
  );
}

/* Se apeleaza functia "five", se afiseaza in consola parametrul dat * 100 (primii 2 then),
iar mai pe urma se arunca o eroare care este interceptata de acelasi then, asadar
promisiunea nu se indeplineste, iar in final se afiseaza in consola eroarea */
function nine(x) {
  return five(x).then(
    () => {
      throw new Error("error");
    },
    (error) => console.log("error", error)
  );
}

/* 1. Se apeleaza functia "five", se afiseaza in consola parametrul dat * 100 (primii 2 then),
iar mai pe urma se arunca o eroare care este interceptata intr-un "catch" care afiseaza
eroarea, iar promisiunea se indeplineste
   2.  "try catch" nu schimba cu nimic codul deoarece returnarea raspunsului e inainte de "catch"*/
function ten(x) {
  try {
    return five(x)
      .then(() => {
        throw new Error("error");
      })
      .catch((error) => console.log("error", error));
  } catch (e) {
    console.log(e);
  }
}

/* 1. Se afiseaza in consola parametrul dat functiei, iar mai pe urma se returneaza raspunsul
unei promisiuni. Promisiunea de indeplineste si are carezultat paramtrul dat functiei
principale
   2.  Se afiseaza de doua ori in consola parametrul dat functiei iar mai pe urma se
returneaza raspunsul unei promisiuni. Promisiunea de indeplineste si are carezultat 
paramtrul dat functiei principale */
function eleven(x) {
  console.log(x);
  return new Promise((resolve, reject) => {
    resolve(x);
  }).then((r) => {
    console.log(r)});
}

/* 1. Se afiseaza in consola parametrul dat functiei, iar mai pe urma se verifica intr-o
promisiune daca acest parametru este mai mare sau egal cu doi si se afiseaza in consola
raspunsul.Promisiunea de indeplineste si are carezultat paramtrul dat functiei principale 
   2. Pe ruma se afiseasa mesaul "a" si valoarea parametrului, mai apoi valoarea parametrului
iar in final measajul "either fullfilled, or rejected" */
function twelve(x) {
  console.log(x);
  return new Promise((resolve, reject) => {
    if (x >= 2) {
      console.log("larger");
    } else {
      console.log("smaller");
    }
    resolve(x);
  })
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
}

/* 1. Functia returneaza o promisiune care apeleaza de doua ori functia "twelve" cu 
parametrii 1, respectiv 2. Din cauza ca din functia "twelve" se returneaza o promisiune
cu mai multe "then-uri", acestea se executa asicron (cate unul de la fiecare apel), 
iar in final se returneaza in consola un array care contine rezultatele celor doua apeluri
2. Ultimul then adaugat la funcite afiseaza in cosola mesajul: "message" + array-ul explicat mai sus*/
function thirteen(x) {
  return Promise.all([twelve(1), twelve(2)]).then((r) => r).then((message) => {
    console.log("message", message);
  });
}

/* Functia apeleaza de doua ori functia "twelve" cu parametrii 1, respectiv 3. Din cauza
ca din functia "twelve" se returneaza o promisiune cu mai multe "then-uri", acestea se
executa asicron (cate unul de la fiecare apel), iar in final se returneaza in consola
(tot asincron) raspunsul ultimului "then" din functia "twelve" */
function fourteen(x) {
  twelve(1).then(console.log);
  twelve(3).then(console.log);
}

/* Functia retineaza o promisiune care contine 3 promisiuni imbricate si un "then" care
va afisa in consola raspunsul acesteia. Asadar, se afiseaza in consola raspunsul promisiunii,
iar apoi raportul acesteia */
function fifteen(x) {
  return Promise.resolve(
    Promise.resolve(
        Promise.resolve(
            Promise.resolve(1)
        )
    )
  ).then(console.log);
}

/* Functia are la baza o promisiune a carui "then-uri" si "catch-uri" se executa cursiv.
"catch-urile" capteaza valorile oferite de "throw" sau de "reject-urile" de la promisiuni*/
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

/* Functia este asicrona si returneaza o promisiune care preceda expresia "await", asadar
 operatia acesteia devine sincrona. Promisiunea se indeplineste. */
async function seventeen(x) {
  return await Promise.resolve(1);
}

/* Functia este asicrona si returneaza o promisiune care preceda expresia "await", asadar
 operatia acesteia devine sincrona Promisiunea nu se indeplineste. */
async function eighteen(x) {
  return await Promise.reject(1);
}

/* Functia contine un bloc "try-catch". In blocul "try" este aruncata valoarea 1, 
care este interceptata de blocul "catch". Blocul catch returneaza valoarea 2  */
async function nineteen(x) {
  try {
    throw 1;
  } catch (e) {
    return 2;
  }
}

/* Functia contine un bloc "try-catch". In blocul "try" este aruncata valoarea 1, 
care este interceptata de blocul "catch". Blocul catch arunca valoarea 2  */
async function twenty(x) {
  try {
    throw 1;
  } catch (e) {
    throw 2;
  }
}

/* Functia contine un bloc "try-catch". In blocul "try" se face un apel API la adresa "http://google.com".
De obicei apelul unui API prin functia "fetch" este asincron, dar datorita expresiei await
apelul devine sincron. Raspunsul se salveaza intr-o variabila si se retuneaza.
In urma executiei, blocul "catch" va intercepta o eroare din cauza politicii CORS de pe serverul
API-ului */
async function twentyone(x) {
  try {
    const response = await fetch("http://google.com");
    const html = response.text();
    return html;
  } catch (e) {
    return e;
  }
}

/* Functia returneaza rezultatul functiei "twentyone" iar pe urma raspunsul se imparte
in cuvinte si se introduce intr-un array, iar pe urma se afiseaza */
async function twentytwo(x) {
  return await twentyone()
    .then((x) => x.slice(0, 15))
    .then(console.log);
}

/* Functia returneaza o promisiune care se indeplineste si trimite ca raspuns 0 */
function twentythree(x) {
  let b = 0;
  return new Promise((resolve, reject) => {
    resolve(b++);
  });
}

/* Se apeleaza functia twentythree care are la baza o promisiune. Promisinea trimte 
raspunsul 0 care este stocat in variabila x. Valoarea din variabila x este afiseaza
 de doua ori */
function twentyfour() {
  const x = twentythree();
  x.then(console.log);
  x.then(console.log);
}

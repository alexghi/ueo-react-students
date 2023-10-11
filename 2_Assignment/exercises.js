
//functia 1 doar afiseaza x 
// function one(x) {
//   // daca dati valori lui x (fie primitive, fie functii o sa puteti testa sa vedeti cum se comporta - valabil peste tot in exemple)
 
//   console.log(x);
// }

//o functie care primeste doi parametrii, si care afiseaza in consola x 
//set timeout se foloseste pt ca operatia sa aiba o intarziere de 1 minut
//si mai este si functia cb - de la call back..

// function two(x, cb) {
//   setTimeout(function () {
//     console.log(x);
//     cb(x);
//   }, 1000);
// }

// //in consola se afiseaza 2 dupa 1 sec
// two(2,3);


// //aiic functia primeste un parametru x si se face o promisiune in functie de rezultat...
// //avem doar resolve nu si reject adica indiferent de ce e x o sa se mearga functia three
// function three(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(x);
//     }, 1000);
//   });
// }
// //pt ca e resolve x se apeleaza cele 3 then uri
// // 2+2 este 4 si dupa 4*2 este 8 iar dupa in consola se afiseaza something care e 8
// //then ul de sus ia valoarea then ului de sus
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


// //in functia asta se da un parametru si se face un promise
// //de data asta avem un if..daca parametrul primit e mai mare de 5 atunci o sa se execute cele 2 then uri de mai jos
// //daca nu este o sa se faca catch
// function four(x) {
//     return new Promise((resolve, reject) => {
//       if (x > 5) {
//         resolve(x);
//       } else {
//         reject(x);
//       }
//     });
//   }
//   //pentru ca 4 e mai mic decat 5, se sare peste cele doua then uri 
//   //si se executa chatch ul. in consola avem mesajul error 4,
//   //ramane 4 ca si parametru dar este trecut prin then uri fara sa se execute returnul si consol ul
//   four(4)
//     .then((resp) => {
//       return resp * 3;
//     })
//     .then((m) => {
//       console.log(m);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
 

// //se realizeaza o operatie in care se returneaaza promise 
  function five(x) {
    return Promise.resolve(x);
  }
  
// //in functia de mai jos, five primeste parametrul 5 si  se executa doar cele 2 then uri
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
  
// //aici este identic cu cel de sus doar ca nu se mai executa then pentru ca e reject merge direct la carch si la finally
  function six(x) {
    return Promise.reject(x);
  }
  
//   //promisiunea este respinsa deci se apeleaza catch 
//   //finally se apeleaza indiferetn daca este respinsa sau rezolvata promisiunea deci dupa carch 6 se afiseaza si cuvantul
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

// //aici este o functie care returneaza functia five care primeste un parametru si returneaza aa
//   function seven(x) {
//     return five(x).then((a) => {
//       return a;
//     });
//   }

//   //pentru ca five are o promisiune care e rezolvata, seven o sa mearga tot in directia asta si o sa afiseze 7 something

//   seven(7).then((r) => {
//     console.log(`${r} something`);
//   });

//in functia asta primeste x ca si parametru si se returneaza functia six care la randul ei
//face ce am explicat la functia six
//returneaza o promisiune nerezolvata
  // function eight(x) {
  //   return six(x).then(
  //     console.log,
  //     (error) => console.log("error", error)
  //     );
  // }
  
  //eight(8);
  //imi da o eroare in consola
  //in functia five este o promisiune rezolvata...
  //teoretuc din functia 9 merge in functia 5 dar nu stiu de ce e eroarea
  function nine(x) {
    return five(x).then(
      () => {
        throw new Error("error");
      },
      (error) => console.log("error", error)
    );
  }
  
  // nine(9);
  
  //functia 10 apeleaza functia 5 care returneaza o promisiune rezolvata
  //dupa care se apeleaza then...
  //nu am inteles aici foarte bine! 
  // function ten(x) {
  //   return five(x)
  //     .then(() => {
  //       throw new Error("error");
  //     })
  //     .catch((error) => console.log("error", error));
  // }
  
  // try {
  //   ten(10);
  // } catch (e) {
  //   console.log(e);
  // }

  //funtia 11 scrie numarul primit ca parametru
  //dupa care returneaza o promisiune care este rezolvata
  //in momentul in care este rezolvata, se executa then ul de mai jos si se mai scrie inca o data 11
  //de aceea in consola apare de doua ori 11
  // function eleven(x) {
  //   console.log(x);
  //   return new Promise((resolve, reject) => {
  //     resolve(x);
  //   });
  // }
  
  // eleven(11).then((r) => {
  //   console.log(r);
  // });
  
//functia 12 primeste un parametru x dupa care adiseaza parametru x si dupa care returneaza o primisiune rezolvata
//se executa si if ul de aceea pt ca 12 este mai mare decat 2 se afiseaza pe ecran larger
//dupa care coboara la then si pt ca parametrul primit este 12 o sa afiseze a 12
//dupa coboara la al doilea then si afiseaza doar 12 primit ca si paramtetru de mai sus
//si nu se executa catch pt ca promisiunea este rezolvata
//se executa doar finally pt ca el se executa oricum
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
  
  //in functia 13 avem o returnare a unei primisiuni sub forma de vector?!
  //promisiunea este rezolvata si se face functie de 12 si de parametru respectiv
  //1 e mai mic decat 2 se afiseaza smaller
  //2 e mai mare sau egal cu 2 se afiseaza larger
  //dupa care se scrie un mesaj care cuprinde cele doua functii 12 cu parametrii 1 si 2
 
  //aici pur si simplu se apeleaza o functie in alta functie...
  //functia 12 e apelata si e aceeasi regula ca mai sus
  //1 e mai mic decat 2 deci se afiseaza 1 si smaller
  //3 e mai mare decat 2 deci se afiseaza 3 si larger
  //la sfarsit din cauza la consol log se afiseaza 1 si 3
  // function fourteen(x) {
  //   twelve(1).then(console.log);
  //   twelve(3).then(console.log);
  // }
  
  // fourteen();
  
  //functia 15 primeste un parametru si returneaza 1 indiferent de ce primeste ca si parametru
  //e primisiune in alta promisiune si toate sunt rezolvate...
  //nu inteleg exact ce se intampla
  function fifteen(x) {
    return Promise.resolve(
      Promise.resolve(
          Promise.resolve(
              Promise.resolve(1)
          )
      )
    ).then(console.log);
  }
  
  // fifteen(2);
  
  //functia 16 primeste ca si parametru x si returneaza o promisiune rezolvata 
  //se executa primul the si se scrie 1st si valoarea lui x care e 1 
  //dupa x devine 2 pt ca e x+2
  //se executa al doilea then si se secrie 2st si lavoarea lui x care e doi
  //aici nu inteleg de ce intra in catch daca e rezolvata dar intra si afiseaza cath 3 
  //dupa intra in al treilea catch si afiseaza srd si am ajuns la x 4
  //la fel la al doilea doar ca are promisiune respinsa si afiseaza cath 6
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
  
  //sixteen(1);
  
  //e o functie asuncron, primeste un parametru x , 
  //asteapta rezolvarea primisiunii pt ca mereu e 1
  async function seventeen(x) {
    return await Promise.resolve(1);
  }

  //la fel ca functia de mai sus
  //asteapta rezolvarea primisiunii 
  //si returneaza valoarea respinsa a promsiunii care e 1
  
  async function eighteen(x) {
    return await Promise.reject(1);
  }
//functie asincron, se primeste un parametru x
//se intra in blocul try su se arunca o exceptie de tip throw 
//se genereaza o eroare cu valoarea 1 si se trece la catch care retuneaza 2
  async function nineteen(x) {
    try {
      throw 1;
    } catch (e) {
      return 2;
    }
  }


  //nu vad diferenta de la functia de mai sus
  async function twenty(x) {
    try {
      throw 1;
    } catch (e) {
      throw 2;
    }
  }
  

  //pe astea ultimele sincer nu prea am inteles exact ce fac..
  //functia primeste un parametru x
  //intra in try si avem o constanta prin care vrea sa faca rost de link.ul de mai jus..??!!
  async function twentyone(x) {
    try {
      const response = await fetch("http://google.com");
      const html = response.text();
      return html;
    } catch (e) {
      return e;
    }
  }
  
  async function twentytwo(x) {
    return await twentyone()
      .then((x) => x.slice(0, 15))
      .then(console.log);
  }
  
  function twentythree(x) {
    let b = 0;
    return new Promise((resolve, reject) => {
      resolve(b++);
    });
  }
  
  function twentyfour() {
    const x = twentythree();
    x.then(console.log);
    x.then(console.log);
  }
  
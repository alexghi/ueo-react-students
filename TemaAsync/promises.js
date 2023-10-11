function three(x) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(x);
      }, 60000);
    });
  }

  //create 3 IRL promises like so:
  //1 that resolves in a week: cineva citește o carte în fiecare zi, timp de o săptămână.
  //1 that resolves in a month: slăbește 2 kilograme într-o lună
  //1 that resolves in a year: Aș dori să lucrez timp de un an
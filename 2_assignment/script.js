// 1 minute Promise
const oneMinutePromise = new Promise(function (resolve) {
  setTimeout(() => {
    resolve({
      message: "The Promise was resolved successfully after 1 minute",
    });
  }, 60 * 1000);
});

oneMinutePromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// 1 week Promise
function oneWeekPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("The Promise was resolved successfully after a week");
    }, 7 * 24 * 60 * 60 * 1000);
  });
}

oneWeekPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// 1 month Promise
function oneMonthPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("The Promise was resolved successfully after a month");
    }, 30 * 24 * 60 * 60 * 1000); 
  });
}

oneMonthPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

  // 1 year Promise
  function oneYearPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("The Promise was resolved successfully after a year");
      }, 365 * 24 * 60 * 60 * 1000); 
    });
  }
  
  oneYearPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
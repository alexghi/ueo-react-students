function myPromise() {

    promise = new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            resolve({
                message: "yaay",
                code: 200
            })
        }, 60000);
    })
    .then((message) => {
        console.log(message);
    });
    
    return promise;
}
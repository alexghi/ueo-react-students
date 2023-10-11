function oneMinute() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log('nu pot sa cred ca ai asteptat un minut sa vezi daca merge :)) RESPECT !')
            )
        }, 60000);
    })
}
oneMinute()
/** Promise executed when the function is called in the script */
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            console.log("[somethingWillHappen] true");
            resolve("[somethingWillHappen] Hey!, resolved");
        }
        else {
            console.log("[somethingWillHappen] false");
            reject('[somethingWillHappen] Ups, rejected')
        }
    });
};

somethingWillHappen()
    .then( (response)   => { console.log(response) })
    .catch( (err)       => { console.error(err) });


/** Promise executed when the script is loaded */
const myPromise = new Promise((resolve, reject) => {
    if (true) {
        console.log("[myPromise] true");
        resolve("[myPromise] Hey!, resolved")
    } 
    else {
        console.log("[myPromise] false");
        reject("[myPromise] Ups!, rejected")
    }
});

myPromise.then((msg) => {
    console.log(msg);
})
.catch((msg) => {
    console.error(msg);
})
const https = require("https");

const OK = 200;

const API_BASE = 'https://rickandmortyapi.com/api/';

function APIRequest(url, callback) {
    https.get(url, (res) => {
        res.setEncoding('utf8');
        if (res.statusCode === OK) {
            let body = '';
            res.on('data', (data) => {
                //console.log(`data = ${data}`);
                body += data;
            })
            res.on('end', () => {
                let result = JSON.parse(body);
                callback(null, result);
            })
        }
        else {
            const error = new Error(`REQUEST ERROR ON ${url}. Status ${res.statusCode}`)
            callback(error, null);
        }
    })
}

APIRequest(API_BASE + 'character/', (error, response) => {
    if (error) {
        return console.log(error.message);
    }
    APIRequest(API_BASE + 'character/' + response.results[0].id, (error2, response2) => {
        if (error2) {
            return console.log(error2.message);
        }
        APIRequest(response2.origin.url, (error3, response3)=>{
            if (error3) {
                return console.log(error3.message);
            }
            console.log(response.info.count);
            console.log(response2.name);
            console.log(response3.dimension);
        })
    })
    
})
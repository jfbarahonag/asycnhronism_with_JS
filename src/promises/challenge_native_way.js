const OK = 200;
const https = require('https');
const URL_BASE = 'https://rickandmortyapi.com/api/character/'

const APIRequest = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            response.setEncoding('utf-8');
            
            if(response.statusCode === OK) {
                let body = '';
                response.on('data', (data) => {
                    body += data
                });
                response.on('end', () => { resolve(JSON.parse(body)) });
            }
            else {
                reject(new Error(`Error in ${url}. Code: ${response.statusCode}`))
            }
        });
    });
}

APIRequest(URL_BASE)
    .then((response) => {
        console.log(response.info.count);
        return APIRequest(`${URL_BASE}${response.results[0].id}`);
    })
    .then((response) => {
        console.log(response.name);
        return APIRequest(`${response.origin.url}`);
    })
    .then((response) => {
        console.log(response.dimension);
    })
    .catch((err) => console.error(err));
const OK = 200;
const https = require('https');
const API = 'https://rickandmortyapi.com/api/character/'

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

const getData = async (url_api) => {

    try {
        const data = await APIRequest(url_api);
        const { count } = data.info;
        const { id } = data.results[0];
    
        const character = await APIRequest(`${url_api}${id}`);
        const { name } = character;
    
        const origin = await APIRequest(character.origin.url);
        const { dimension } = origin;

        console.log(count);
        console.log(name);
        console.log(dimension);
        
    } catch (error) {
        console.error(error);
    }
}

getData(API);
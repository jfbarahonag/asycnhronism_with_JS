/* https://www.tutorialspoint.com/what-is-the-syntax-to-define-enums-in-javascript#:~:text=Enums%20are%20not%20supported%20in,can%20be%20added%20to%20it. */
const State = {
    UNINITIALIZED : 0,
    CONNECTION_ESTABLISHED : 1,
    REQUEST_RECEIVED : 2,
    PROCESSING_REQUEST : 3,
    RESPONSE_READY : 4
};
/* https://www.w3schools.com/tags/ref_httpmessages.asp */
const Status = {
    Information : {
        CONTINUE : 100,
        SWITCHING_PROTOCOLS : 101,
        CHECKPOINT : 103,
    },
    Successful : {
        OK : 200,
        CREATED : 201,
        ACCEPTED : 202,
        NON_AUTHORITATIVE_INFO : 203,
        NO_CONTENT : 204,
        RESET_CONTENT : 205,
        PARTIAL_CONTENT : 206,
    },
    Redirection : {
        MULTIPLE_CHOICES : 300,
        MOVED_PERMANENTLY : 301,
        FOUND : 302,
        SEE_OTHER : 303,
        NOT_MODIFIED : 304,
        SWITCH_PROXY : 306,
        TEMPORARY_REDIRECT : 307,
        RESUME_INCOMPLETE : 308,
    },
    ClientError : {
        BAD_REQUEST : 400,
        UNAUTHORIZED : 401,
        PAYMENT_REQUIRED : 402,
        FORBIDDEN : 403,
        PAGE_NOT_FOUND : 404,
        METHOD_NOT_ALLOWED : 405,
        NOT_ACCEPTABLE : 406,
        PROXY_AUTH_REQUIRED : 407,
        REQUEST_TIMEOUT : 408,
        CONFLICT : 409,
        GONE : 410,
        LENGTH_REQUIRED : 411,
        PRECONDITION_FAILED : 412,
        REQUEST_ENTITY_TOO_LARGE : 413,
        REQUEST_URI_TOO_LONG : 414,
        UNSUPPORTED_MEDIA_TYPE : 415,
        REQUESTED_RANGE_NOT_SATISFIABLE : 416,
        EXPECTATION_FAILED : 417,
    },
    ServerError : {
        INTERNAL_ERROR : 500,
        NOT_IMPLEMENTED : 501,
        BAD_GATEWAY : 502,
        SERVICE_UNAVAILABLE : 503,
        GATEWAY_TIMEOUT : 504,
        HTTP_VERSION_NOT_SUPPORTED : 505,
        NETWORK_AUTH_REQUIRED : 511
    },
};
/* This API will be used */
const api = 'https://rickandmortyapi.com/api/character/'

/* Get instance */
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();

    // Request to the URL
    xhttp.open('GET', url_api, true /* activate async */);
    // Listen the connection
    xhttp.onreadystatechange = (evt) => {

        if (xhttp.readyState === State.RESPONSE_READY) {
            
            let error = null;
            let result = null;

            if (xhttp.status === Status.Successful.OK) {

                result = JSON.parse(xhttp.responseText);
                callback(error, result);

            } else {
                error = new Error(`Error in ${url_api}. Code: ${xhttp.status}`);
                return callback(error, result);

            }
        }
    }
    xhttp.send();
}

const FIRST_CHARACTER = 0;

fetchData(api, (error1, data1) => {
    if (error1) {
        return console.error(error1);
    }
    
    fetchData(api + data1.results[FIRST_CHARACTER].id, (error2, data2) => {
        if (error2) {
            return console.error(error2);
        }

        fetchData(data2.origin.url, (error3, data3) => {
            if (error3) {
                return console.error(error3);
            }

            console.log(`${data1.info.count}\n${data2.name}\n${data3.dimension}`);
        })
    })
})

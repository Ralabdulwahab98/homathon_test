let apiURL ;


const expressPort = 5000;
const apiUrls = {
    development:`http://localhost:${expressPort}/api`,
    production:`https://enjaz-0011.herokuapp.com/api`,
} 

if( window.location.hostname === 'localhost' ){
    apiURL = apiUrls.development;
} else{
    apiURL = apiUrls.production;
}

export default apiURL; 
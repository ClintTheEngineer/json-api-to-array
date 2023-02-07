'use strict';
require('./decs')
const url = require('json-api-to-array')

module.exports = function array(url){
    let arr;
    const request = new XMLHttpRequest();
    function onload(){
        const data = JSON.parse(this.response);
        sessionStorage.setItem('push', JSON.stringify(data));
        arr = JSON.parse(sessionStorage.getItem('push'))
    }
    request.open('GET', url, true);
    request.addEventListener('load', onload);
    request.send();

    
    return JSON.stringify(arr);

}




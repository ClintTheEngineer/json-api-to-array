'use strict';

module.exports = function array(url){
    const request = new XMLHttpRequest();
    function onload(){
        const data = JSON.parse(this.response);
        sessionStorage.setItem('push', JSON.stringify(data))
    }
    request.open('GET', url, true);
    request.addEventListener('load', onload);
    request.send();

    const arr = JSON.parse(sessionStorage.getItem('push'));
    return JSON.stringify(arr);

}




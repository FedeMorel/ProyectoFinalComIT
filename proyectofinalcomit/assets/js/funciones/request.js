const requestsToApi = (url) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                resolve(xhttp.responseText);
            } else if (xhttp.readyState == 4 && xhttp.status != 200) {
                reject(xhttp.responseText);
            }
        }
        xhttp.send();
    });
}

export default requestsToApi;
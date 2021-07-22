const request = (data, metodo, url) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open(metodo, url, true);
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.setRequestHeader("Content-type", " application/json");
        xhttp.send(data);
    });
}

export default request;
//Crear una variable de Bool para comprobar si se está usando Internet Explor var xmlhttp = false;
//Comprobar si se está usando IE.
try {
    //Si la versión de Internet Explorer es superior a la 5.0
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
    //Si no, utilizar el tradicional objeto ActiveX.
    try {
    //Si se esta usando Internet Explorer.
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
        xmlhttp=false;
    }
}

if(!xmlhttp && typeof XMLHttpRequest != 'undefined'){
    xmlhttp = new XMLHttpRequest();
}

function makerequest(id) {
    const URL = "https://63376ed25327df4c43d418e2.mockapi.io/api/example/cities/" + id;
    xmlhttp.open("GET", URL, true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState== 4 && xmlhttp.status == 200) { 
            const cityJson = JSON.parse(xmlhttp.responseText); 
            document.getElementById("cityImage").src = cityJson.image;
            document.getElementById("cityDescription").innerHTML = cityJson.description;
        }
    }
    xmlhttp.send(null);
}
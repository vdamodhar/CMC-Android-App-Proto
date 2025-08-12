onmessage = function(e) {
console.log('Message received from main script');
    var obj=e.data;
    var data = new FormData();
    data.append("file", "");

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          postMessage(this.responseText);
           console.log('Posting message back to main script');
        }
    });

    xhr.open("GET", obj.url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}


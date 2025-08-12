/*

onmessage = function(e) {
console.log('Message received from main script');
    var obj=e.data;
    var data = new FormData();
    data.append("file", "");

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

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
*/



onmessage = function (e) {
    console.log('Worker: Message received from main script');
    var obj = e.data;

    var xhr = new XMLHttpRequest();

    // Enable this if your WFS service requires login/session
    //xhr.withCredentials = true; //commented by PDMD6977 - as we aren't passing any login credentials.
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('Worker: Response received successfully');
                postMessage(xhr.responseText);
            } else {
                console.error('Worker: Failed to fetch WFS data. Status:', xhr.status);
                postMessage(""); // Signal to UI that nothing was fetched
            }
        }
    });

    xhr.addEventListener("error", function () {
        console.error("Worker: Network error occurred");
        postMessage(""); // Signal failure
    });

    xhr.addEventListener("abort", function () {
        console.warn("Worker: Request aborted");
        postMessage(""); // Signal abort
    });

    xhr.open("GET", obj.url, true);
    xhr.send();
};


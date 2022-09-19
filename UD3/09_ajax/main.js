window.onload = function() {
    console.log('document loaded');

    var xhttp = new XMLHttpRequest();   

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
        }
      };

    xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
    xhttp.send();
}
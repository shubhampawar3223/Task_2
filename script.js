//create a request variable
var request = new XMLHttpRequest();
//create a connectionconnection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send a  connection
request.send();
//register a event listner..once the data is ready.
request.onload = function() {
    var countryData = JSON.parse(this.response);
    console.log(countryData.length);
    for(i=0 ;i<countryData.length; i++){
        console.log(countryData[i].name);
    }
}

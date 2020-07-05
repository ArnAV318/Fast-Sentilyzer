
function fun() {
  result= urly.split("?")
  var r = result[0]+"?v="+code+"&t="+parseInt(this.getElementsByTagName('td')[0].innerHTML)+"s";
  console.log(r);
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, {url: r});
  });
}


var urly;
var code;
chrome.tabs.getSelected(null, function(tab) {
  d = document;
  urly=tab.url;
});

$(document).ready(function(){
  $("button").click(function(){
    var token = document.getElementById('searchTxt').value;
    $.ajax({type: "POST", crossDomain:true,data: {search: token,url: urly}, headers: {  'Access-Control-Allow-Origin': '*' }, url: "http://127.0.0.1:5000/api", success: function(result){
      console.log(result);
      code=result[1];
      result=result[0];
      var table = document.createElement("table");
      var tr = table.insertRow(-1);
      var col=["time","phrase"]
      for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
      }

      for (var i = 0; i < result.length; i++) {

        tr = table.insertRow(-1);
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = result[i][0];
        var cabCell = tr.insertCell(-1);
        cabCell.innerHTML = result[i][1];
        var x=result[i][0];
        tr.onclick= fun;

      }

      var divContainer = document.getElementById("new");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);  

    }});
  });
});
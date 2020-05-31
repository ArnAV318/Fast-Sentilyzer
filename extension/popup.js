/*document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        d = document;
  
        var tag = document.createElement("p");
        var text = document.createTextNode(tab.url);
        //chrome.tabs.update({url: 'https://www.tutorialspoint.com/how-to-add-a-new-element-to-html-dom-in-javascript'});
        tag.appendChild(text);
        var element = document.getElementById("new");
        element.appendChild(tag);
      });
    }, false);
  }, false);*/

var urly;
chrome.tabs.getSelected(null, function(tab) {
  d = document;

  var tag = document.createElement("p");
  var text = document.createTextNode(tab.url);
  urly=tab.url;
  //chrome.tabs.update({url: 'https://www.tutorialspoint.com/how-to-add-a-new-element-to-html-dom-in-javascript'});
  tag.appendChild(text);
  var element = document.getElementById("new");
  element.appendChild(tag);
});

$(document).ready(function(){
  $("button").click(function(){
    $.ajax({type: "POST", crossDomain:true,data: {search: 'full stack',url: urly}, headers: {  'Access-Control-Allow-Origin': '*' }, url: "http://127.0.0.1:5000/api", success: function(result){
      console.log(result);
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

      }

      var divContainer = document.getElementById("new");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);  

    }});
  });
});
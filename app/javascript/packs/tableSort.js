document.getElementById("fnameHeader").addEventListener("click", sortFname);
document.getElementById("lnameHeader").addEventListener("click", sortLname);
document.getElementById("emailHeader").addEventListener("click", sortEmail);
document.getElementById("thumbnailHeader").addEventListener("click", sortThumbnail);

var tbody = document.getElementsByTagName("tbody")[0];
var trs = tbody.getElementsByTagName("tr");
var tds = tbody.getElementsByTagName("td");
var tdValues = [];
for(i=0; i < tds.length - 1; i++){
  tdValues.push(tbody.getElementsByTagName("td")[i].innerHTML);
}

var trsCopy = [];
  for (i = 0; i < trs.length; i ++){
    trsCopy.push(trs[i]);
  }

function deleteRows(){  
  var numTrs = tbody.getElementsByTagName("tr").length;
  for(i = 0; i < numTrs; i++){
    var element = tbody.getElementsByTagName("tr")[0];
    element.parentNode.removeChild(element);
  }
}

function sortRows(a){
  var values = [];
  for (i=a; i < tds.length-1; i+=5){
    values.push(tdValues[i]);
  }
  
  var valueArray = [];
  for(i=0; i < values.length; i++){
    valueArray.push([values[i],i]);
  }
  valueArray.sort();
  deleteRows();
  
  rowOrder = [];
  for(i=0; i<valueArray.length; i++){
    rowOrder.push(valueArray[i][1]);
  }
  
  for(i=0; i< rowOrder.length; i++){
    tbody.appendChild(trsCopy[rowOrder[i]]);
  }
}

function sortFname(){
  sortRows(0);
}

function sortLname(){
  sortRows(1);
}

function sortEmail(){
  sortRows(2);  
}

function sortThumbnail(){
  sortRows(3);  
}



 // existing list
 var options3 = {
    valueNames: [ 'name', 'born' ]
};

//var userList = new List('usersE', options3);

///////////////// 
function addRow(){
var firstname = document.getElementById('firstname').value;
var userAge = document.getElementById('userAge').value;
var userEmail = document.getElementById('uEmail').value;
var userPhone = document.getElementById('uPhone').value;
var userCity = document.getElementById('uCity').value;

if(firstname == ""){
document.getElementById('invalidMsg').innerHTML = 'Please Fill in First Name';
document.getElementById('firstname').classList.add('border-danger');

return document.getElementById('firstname').classList.remove('border-danger');
}
else if (Number(userAge) == ""){
document.getElementById('invalidMsg').innerHTML = 'Please Fill in Last Name';
document.getElementById('userAge').classList.add('border-danger');
return;
}
else if (userEmail == ""){
document.getElementById('invalidMsg').innerHTML = 'Please Fill in Last Name';
document.getElementById('uEmail').classList.add('border-danger');
return;
}
else if (userPhone == ""){
document.getElementById('invalidMsg').innerHTML = 'Please Fill in Last Name';
document.getElementById('uPhone').classList.add('border-danger');
return;
}
else if (userCity == ""){
document.getElementById('invalidMsg').innerHTML = 'Please Fill in Last Name';
document.getElementById('uCity').classList.add('border-danger');
return;
}

else{
document.getElementById('invalidMsg').innerHTML = "";
let table = document.getElementById('mylist');
// Insert a row at the end of the table
let newRow = table.insertRow(-1);
var l = table.rows.length-1;
//Col 1 = Firstname
table.rows[l].insertCell(0);
table.rows[l].cells[0].innerHTML = firstname;
//Col 2 = Firstname
table.rows[l].insertCell(1);
table.rows[l].cells[1].innerHTML = Number(userAge);
//Col 3 = Email
table.rows[l].insertCell(2);
table.rows[l].cells[2].innerHTML = userEmail;
//Col 4 = Phone
table.rows[l].insertCell(3);
table.rows[l].cells[3].innerHTML = userPhone;
//Col 5 = Firstname
table.rows[l].insertCell(4);
table.rows[l].cells[4].innerHTML = userCity;
//Col 6 = Delete Button
table.rows[l].insertCell(5);
table.rows[l].cells[5].innerHTML = "<button type='button' class='btn btn-rgba-danger btn-sm btnDelete' onclick='delRow(this);' id='btnDelete' size='1' height='1'>Delete</button>";

//Clear input
document.getElementById('firstname').value = "";
document.getElementById('userAge').value ="";
document.getElementById('firstname').classList.remove('border-danger');
}

}

function delRow(btn){
var row = btn.parentNode.parentNode;
row.parentNode.removeChild(row);
};



  // simple handle
  new Sortable(document.getElementById('simple-list1'));

  // handle sortable
  new Sortable(document.getElementById('handle-list1'), { handle: '.handle',
  Animation: 150
  });

  // Grid demo
  new Sortable(gridSort, {
      animation: 150,
      ghostClass: 'blue-background-class'
  });
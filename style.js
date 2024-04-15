
const submitButton = document.querySelector(".btn");
submitButton.addEventListener("click", submitForm);
function submitForm(){
    event.preventDefault(); //this stops page from reloading after clicking the submit button.
const table = document.getElementById("inner");
const edit = document.getElementsByClassName("table");

const nameInput  = document.getElementById("Name").value;
const idInput = document.getElementById("ID").value;
const classInput = document.getElementById("class").value;
const rollInput = document.getElementById("Roll no").value;
const emailInput = document.getElementById("Email").value;
const contactInput = document.getElementById("contact").value;

if (nameInput == '' || idInput == '' || classInput == '' || rollInput == '' || emailInput == '' || contactInput == ''){
    alert("Please enter all details");
}

 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//this pattern check if user entered email address.
    
 // Check if the input value is a valid email address
 if (!emailPattern.test(emailInput)) {
     // If the email address is invalid, display an alert
     alert('Please enter a valid email address.');return;
 }
 const hasNumbers = /\d/;
    
 // check if the student name contains any numbers
 if (hasNumbers.test(nameInput)) {
     // If the student name contains numbers, display an alert
     alert('The student name cannot contain numbers.');
     return
 }
    if(isNaN(contactInput)) {
        alert("enter only numbers in contact field");
        return false;
       
    }
    if(isNaN(idInput)){
        alert("enter only numbers in studentID");
        return false;
       
    }
   
    const rows = table.rows;
    for(i=0; i < rows.length;i++) {
        const cells = rows[i].cells;
        if(cells[0].textContent ===nameInput &&
            cells[1].textContent===idInput  &&
            cells[2].textContent===classInput &&
            cells[3].textContent===rollInput &&
            cells[4].textContent===emailInput &&
            cells[5].textContent===contactInput){
                alert("data already exist");
                return;
            }
        }
   


 //inserting rows
 const newRow = table.insertRow();
const cell1 = newRow.insertCell(0);
const cell2 = newRow.insertCell(1);
const cell3 = newRow.insertCell(2);
const cell4 = newRow.insertCell(3);
const cell5 = newRow.insertCell(4);
const cell6 = newRow.insertCell(5);
const cell7 = newRow.insertCell(6);


cell1.textContent = nameInput;
cell2.textContent = idInput;
cell3.textContent = classInput;
cell4.textContent = rollInput;
cell5.textContent = emailInput;
cell6.textContent = contactInput;


const del = document.createElement("button");
const rename = document.createElement("button");
del.innerHTML = '<i class="fa-solid fa-trash fa-lg"></i>';
rename.innerHTML = '<i class="fa-solid fa-pen-to-square fa-lg"></i>';

cell7.appendChild(del);
cell7.appendChild(rename);
del.classList.add("button");
rename.classList.add("button");
cell7.appendChild(del);


//del data button
del.addEventListener("click", function(){
    const row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
});

//rename data button
rename.addEventListener("click", function(){
    if(rename.innerHTML === '<i class="fa-solid fa-pen-to-square fa-lg"></i>'){
  rename.textContent = 'save';

  for(let i = 0; i < 6;i++){
    const cell = newRow.cells[i];
    const cellContent = cell.textContent;
    const input = document.createElement("input");
    input.value = cellContent;
    input.classList.add("edit-button");
    cell.textContent = "";
    cell.appendChild(input);

  }
}
else{
    rename.innerHTML = '<i class="fa-solid fa-pen-to-square fa-lg"></i>'
    for(i = 0;i < 6; i++){
        const cell = newRow.cells[i];
        const input = cell.querySelector("input");
        if (input) {
            cell.textContent = input.value;
        }
    }
}

    

  event.preventDefault();
  
    
    

});

 // Whenver clicked on submit button it will reset the textfield.
// document.getElementById("Name").value = '';
//     document.getElementById("ID").value = '';
//     document.getElementById("class").value = '';
//     document.getElementById("Roll no").value = '';
//     document.getElementById("Email").value = '';
//     document.getElementById("contact").value = '';

};





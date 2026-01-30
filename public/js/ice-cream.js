alert("hello Ice cream!");
document.getElementById("ice-cream-form").onsubmit = () => {

clearerrors();

let isValid= true;




//validate  name
let firstName = document.getElementById("name").value.trim();
if (!firstName) {
    document.getElementById("name-error").style.display = "block";
    isValid = false;

}
//validate email

//validate cone type





form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const flavor = document.getElementById("flavor").value;
    

});





};

function clearerrors() {
    let errors = document.getElementsByClassName("error");
    for (let error of errors) {
        error.style.display = "none";
    };
}

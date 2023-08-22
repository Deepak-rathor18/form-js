document.addEventListener("click", myFunction);
function myFunction() {
    let fname = document.getElementById("name").value;
    let fage = document.getElementById("age").value;
    document.getElementById("block").innerHTML=("Hello "+fname+ ", You are "+fage+ " year old.")
    }
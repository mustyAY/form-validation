username = document.getElementById("name").value
myemail = document.getElementById("email").value
mypassword = document.getElementById("password").value
mypassword = document.getElementById("passwordC").value
mycheckbox = document.getElementById("checkbox")

function formValidation(){
    if (username =="" && myemail =="" && mypassword =="" && mypasswordC =="" && mycheckbox == false) {
        alert("empty field")
        return false
    }
}

// function formValidation() {
//     if (username =="" ) {
//         alert("empty field")
//         return false
//     }
//     if (myemail =="") {
//         alert("empty field")
//         return false
//     }
//     if (mypassword=="") {
//         alert("empty field")
//         return false
//     }
//     if (mypasswordC =="") {
//         alert("empty field")
//         return false
//     }
//     if (mycheckbox.checked == false) {
//         alert("empty field")
//         return false
//     }
//     return(true);    
// }
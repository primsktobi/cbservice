// function showSection(affiche) {
//     // On cache les deux sections
//     document.getElementById('main').style.display = 'none';
//     document.getElementById('footer').style.display = 'none';
//     document.getElementById('pro').style.display = 'none';
  
//     // Si on a cliqué sur "main" ou "footer", on l’affiche
//     if (affiche !== 'none') {
//       document.getElementById(affiche).style.display = 'block';
//     }
//   }
  
const digitals = document.getElementById("cbdigital")
const services =document.getElementById("cbservice")
const service =document.getElementById("cs")
const digital =document.getElementById("cd")
const force = document.getElementById("force")




digital.addEventListener("click", function(){
    services.style.display = 'none';
    digitals.style.display = 'block';
});

service.addEventListener("click", function(){
    services.style.display = 'block';
    digitals.style.display = 'none';
});

// ------------------------------------------------------

// function toogleDiv () {
//     let div = document.getElementById("madiv")
//     console.log("oui oui")
//  // if (div.style.display === "none"){
//     //     div.display = "block"
        
//     // }
//     // else {
//     //     div.display = "none"
//     // }
// }

//---------------------------------------------

const toogleDiv = document.getElementById("toogleDiv")
const div = document.getElementById("madiv")

toogleDiv.addEventListener("click", function(){
    if (div.style.display === "none") { div.style.display = "block";  div.style.transform = "translateY(0)"; div.style.transition = "0.5s";}
    else {div.style.display = "none";}

});
const enlaces = document.getElementsByClassName("enlaces_header")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false;
AOS.init();

const toggleMenu = () =>{
    enlaces.classList.toggle("menudos");
}

hamburguesa.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.menudos")){
        abierto = true;
    } else{
        abierto = false;
    }
});

window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(abierto == false){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto = true;
        }
    }
    
});



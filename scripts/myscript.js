

/*const botonEs = document.querySelector('#btnEspana');
const botonAm = document.querySelector('#btnAmerica');
const botonFr = document.querySelector('#btnFrancia');


//Array que contiene el nombre de las tiendas en España
const tiendasEsp = [
    { nombre: 'Zara'},
    { nombre: 'Inside'},
    { nombre: 'Stradivarius'},
    { nombre: 'Outlet'},
    { nombre: 'Carrefour'},
    { nombre: 'El Corte Inglés'},
    { nombre: 'Modas Paqui'},
    { nombre: 'Calzados América'},
    { nombre: 'La Boutique de la abuela Lola'},
    { nombre: 'Sprinter'},
    { nombre: 'Ropa Pilar Prieto'},
    { nombre: 'Mi Bandera de España'},
    { nombre: 'La Coste'},
    { nombre: 'Sfera'},
    { nombre: 'Silbon'},
    { nombre: 'Bershka'},
    { nombre: 'H&M'},
    { nombre: 'Primark'},
];

//Función que se ejecuta cuando el usuario pulsa sobre el botón de España
const mostrarEsp = () => {

    //Declaro una variable para almacenar el texo y la inicializo vacía
    let text = "";

    //Recorro con un for el array de tiendasEsp para sacar los nombres de las tiendas y añadirlo a la variable text
    for (let i = 0; i < tiendasEsp.length; i++) {
        text += tiendasEsp[i].nombre + "<br>";
    }

    document.getElementById("demo").innerHTML = text; //Envío al documento los nombres de las tiendas en España   
}


//Array que contiene el nombre de las tiendas en América
const tiendasAme = [
    { nombre: 'Victoria´s Secret'},
    { nombre: 'Old Navy'},
    { nombre: 'Macy´s'},
    { nombre: 'Forever 21'},
    { nombre: 'Nordstrom'},
    { nombre: 'Lululemon Athletica'},
    { nombre: 'Topshop'},
    { nombre: 'Neiman Marcus'},
    { nombre: 'Dillard´s'},
    { nombre: 'J.Crew'},
    { nombre: 'Zara'},
    { nombre: 'H&M'},
    { nombre: 'Banana Republic'},
    { nombre: 'Urban Outfitters'},
    { nombre: 'Prada'},
    { nombre: 'Gucci'},
    { nombre: 'Rossamour'},
    { nombre: 'Amazon'},
];

//Función que se ejecuta cuando el usuario pulsa sobre el botón de América
const mostrarAme = () => {

    //Declaro una variable para almacenar el texo y la inicializo vacía, de esta forma al pulsar otro botón se queda la página en blanco
    let text2 = "";

    //Recorro con un for el array de tiendasAme para sacar los nombres de las tiendas y añadirlo a la variable text
    for (let i = 0; i < tiendasAme.length; i++) {
        text2 += tiendasAme[i].nombre + "<br>";
    }

    document.getElementById("demo").innerHTML = text2; //Envío al documento los nombres de las tiendas en América   
}


//Array que contiene el nombre de las tiendas en Francia
const tiendasFran = [
    { nombre: 'La Vallée Village'},
    { nombre: 'One Nation Paris'},
    { nombre: 'Marques Avenue A6'},
    { nombre: 'La Piscine Paris'},
    { nombre: 'The Kooples'},
    { nombre: 'Sandro'},
    { nombre: 'Iro'},
    { nombre: 'A.P.C'},
    { nombre: 'Maje'},
    { nombre: 'Zadig & Voltaire'},
    { nombre: 'Isabel Marant'},
    { nombre: 'Ba&sh'},
    { nombre: 'Comptoir des Cotonniers'},
    { nombre: 'Sessùn'},
    { nombre: 'Prada'},
    { nombre: 'Gucci'},
    { nombre: 'Rossamour'},
    { nombre: 'eBay'},
];

//Función que se ejecuta cuando el usuario pulsa sobre el botón de América
const mostrarFran = () => {

    //Declaro una variable para almacenar el texo y la inicializo vacía, de esta forma al pulsar otro botón se queda la página en blanco
    let text3 = "";

    //Recorro con un for el array de tiendasAme para sacar los nombres de las tiendas y añadirlo a la variable text
    for (let i = 0; i < tiendasFran.length; i++) {
        text3 += tiendasFran[i].nombre + "<br>";
    }

    document.getElementById("demo").innerHTML = text3; //Envío al documento los nombres de las tiendas en América   
}

 
 

//Con esto miro lo que el usuario a puesto en la caja de búsqueda y lo mostramos.

document.addEventListener("keyup", e => {
    if(e.target.matches("#formulario")) {

        console.log(document.querySelectorAll("#btnEspana"));
        document.querySelectorAll("#demo").forEach( articulo => {
            articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        
        })
    }

});

const filtrar = () => {

    let formulario = document.getElementById("formulario");
    formulario.addEventListener("keyup", filtrar);
    const texto4 = formulario.ariaValueMax.toLowerCase();

    console.log(document.getElementById("demo"));

    switch (texto4) {

        case mostrarEsp():

        for(let tndEsp of tiendasEsp){
            let nombre = tndEsp.nombre.toLowerCase();
            if(nombre.indexOf(texto4) !== -1) {
                
                document.getElementById("demo").innerHTML = nombre;
            }

            else {
                document.getElementById("demo").innerHTML = "No ha habido resultados :(";
            }

        }
        break;

    }
}





filtrar();*/
  

//document.getElementById("espana").style.display = "none";


document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".tienda").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  });
  //div = document.getElementsByClassName('espana');
  //div.style.display = 'none';


const mostrarEsp = () => {

    let a = document.getElementById("america");
    a.style.display = "none";

    let f = document.getElementById("francia");
    f.style.display = "none";



    let x = document.getElementById("espana");
    if(x.style.display === "none") {
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
}

const mostrarAme = () => {

    let e = document.getElementById("espana");
    e.style.display = "none";

    let f = document.getElementById("francia");
    f.style.display = "none";



    let x = document.getElementById("america");
    if(x.style.display === "none") {
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
}

const mostrarFran = () => {

    let a = document.getElementById("america");
    a.style.display = "none";

    let e = document.getElementById("espana");
    e.style.display = "none";



    let x = document.getElementById("francia");
    if(x.style.display === "none") {
        x.style.display = "block";
    }else {
        x.style.display = "none";
    }
}
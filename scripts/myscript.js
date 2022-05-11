

//Esta función permite al usuario mostrar y ocultar las tiendas de ropa de España
const mostrarEsp = () => {

    //Si la tabla de las tiendas de américa está activa, se oculta para que salgan solo las tiendas de españa
    let a = document.getElementById("america");
    a.style.display = "none";

    //Si la tabla de las tiendas de francia está activa, se oculta para que salgan solo las tiendas de españa
    let f = document.getElementById("francia");
    f.style.display = "none";


    //Almaceno el id del elemento cuyo id es espana y dependiendo de si está activo o no, se muestra o se oculta
    let x = document.getElementById("espana");
    if(x.style.display === "none") { //Si está oculto
        x.style.display = "block"; //Entonces se activa
    }else {
        x.style.display = "none"; //Si el usuario pulsa el botón de España y la lista está activa, entonces se oculta
    }
}

//Esta función permite al usuario mostrar y ocultar las tiendas de ropa de América
const mostrarAme = () => {

    //Si la tabla de las tiendas de españa está activa, se oculta para que salgan solo las tiendas de america
    let e = document.getElementById("espana");
    e.style.display = "none";

    //Si la tabla de las tiendas de francia está activa, se oculta para que salgan solo las tiendas de america
    let f = document.getElementById("francia");
    f.style.display = "none";


    //Almaceno el id del elemento cuyo id es america y dependiendo de si está activo o no, se muestran o se ocultan sus elementos
    let x = document.getElementById("america");
    if(x.style.display === "none") { //Si está oculto
        x.style.display = "block";  //Entonces se muestra
    }else {
        x.style.display = "none"; //Si está activo pero el usuario pulsa otra vez el boton de América, entonces se oculta sus elementos
    }
}

//Esta función permite al usuario mostrar y ocultar las tiendas de ropa de Francia
const mostrarFran = () => {

    //Si la tabla de las tiendas de america está activa, se oculta para que salgan solo las tiendas de francia
    let a = document.getElementById("america");
    a.style.display = "none";

    //Si la tabla de las tiendas de españa está activa, se oculta para que salgan solo las tiendas de francia
    let e = document.getElementById("espana");
    e.style.display = "none";


    //Almaceno el id del elemento cuyo id es francia y dependiendo de si está activo o no, se muestran o se ocultan sus elementos
    let x = document.getElementById("francia");
    if(x.style.display === "none") { //Si está oculto
        x.style.display = "block"; //Entonces se muestra
    }else {
        x.style.display = "none"; //Si está activo pero el usuario pulsa otra vez el botón de Francia, se ocultan los elementos
    }
}


//Aquí creo una función flecha que a su vez tiene el addEventListener
//Este evento recoge cuando el usuario pulsa una tecla dentro de la barra de búsqueda y la pasa al parámetro e
document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){ //Si el parámetro coincide con lo que hay puesto en el buscado, entonces sigue ejecutandose el programa
     
        //Selecciono todas las etiquetas cuya clase es .tienda y están activas en ese momento
        document.querySelectorAll(".tienda").forEach(tienda =>{ //Con un bucle for each recorro todos los registros que haya en la lista actual de tiendas
  
            tienda.textContent.toLowerCase().includes(e.target.value.toLowerCase()) //Compruebo que los valores coinciden
              ?tienda.classList.remove("filtro") //Si coincide lo que el usuario mete con lo que hay en las tablas, quito la clase filtro
              :tienda.classList.add("filtro") //Si no coincide añado la clase filtro
        });
  
    }
    
});
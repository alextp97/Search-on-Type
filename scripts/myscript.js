
//Array que contiene el nombre de las tiendas en España
const shopSpain = [
    { name: 'Zara'},
    { name: 'Inside'},
    { name: 'Stradivarius'},
    { name: 'Outlet'},
    { name: 'Carrefour'},
    { name: 'El Corte Inglés'},
    { name: 'Modas Paqui'},
    { name: 'Calzados América'},
    { name: 'La Boutique de la abuela Lola'},
    { name: 'Sprinter'},
    { name: 'Ropa Pilar Prieto'},
    { name: 'Mi Bandera de España'},
    { name: 'La Coste'},
    { name: 'Sfera'},
    { name: 'Silbon'},
    { name: 'Bershka'},
    { name: 'H&M'},
    { name: 'Primark'},
];

//Función que se ejecuta cuando el usuario pulsa sobre el botón de España
//Muestra las tiendas en España
function showShopSpain() {
    let list = shopSpain.map( function ( shopE ){
        return "<li><span>" + shopE.name + "</span></li>";
    })
    .join("");
    document.getElementById("list").innerHTML = list;
}   


//Array que contiene el nombre de las tiendas en América
const shopsAme = [
    { name: 'Victoria´s Secret'},
    { name: 'Old Navy'},
    { name: 'Macy´s'},
    { name: 'Forever 21'},
    { name: 'Nordstrom'},
    { name: 'Lululemon Athletica'},
    { name: 'Topshop'},
    { name: 'Neiman Marcus'},
    { name: 'Dillard´s'},
    { name: 'J.Crew'},
    { name: 'Zara'},
    { name: 'H&M'},
    { name: 'Banana Republic'},
    { name: 'Urban Outfitters'},
    { name: 'Prada'},
    { name: 'Gucci'},
    { name: 'Rossamour'},
    { name: 'Amazon'},
];

//Función que se ejecuta cuando el usuario pulsa sobre el botón de América
//Muestra las tiendas que hay en América
function showShopAmerica() {
    let list = shopsAme
    .map( function ( shopA ){
        return "<li><span>" + shopA.name + "</span></li>";
    })
    .join("");
    document.getElementById("list").innerHTML = list;
}



//Array que contiene el nombre de las tiendas en Francia
const shopsFrance = [
    { name: 'La Vallée Village'},
    { name: 'One Nation Paris'},
    { name: 'Marques Avenue A6'},
    { name: 'La Piscine Paris'},
    { name: 'The Kooples'},
    { name: 'Sandro'},
    { name: 'Iro'},
    { name: 'A.P.C'},
    { name: 'Maje'},
    { name: 'Zadig & Voltaire'},
    { name: 'Isabel Marant'},
    { name: 'Ba&sh'},
    { name: 'Comptoir des Cotonniers'},
    { name: 'Sessùn'},
    { name: 'Prada'},
    { name: 'Gucci'},
    { name: 'Rossamour'},
    { name: 'eBay'},
];

//Función que se ejecuta cuando el usuario pulsa sobre el botón de Francia
//Muestra las tiendas en Francia
function showShopFrance() {
    let list = shopsFrance
    .map( function ( shopF ){
        return "<li><span>" + shopF.name + "</span></li>";
    })
    .join("");
    document.getElementById("list").innerHTML = list;
}

 

//Con esto miro lo que el usuario a puesto en la caja de búsqueda y lo mostramos.
function filterList() {
    
    let input = document.getElementById("searchShop").value.toLowerCase();
    let ul = document.getElementById("list");
    let li = ul.getElementsByTagName("li");


    for(i = 0; i < li.length; i++){
        let span = li[i].getElementsByTagName("span")[0];
        let txtValue = span.textContent;
        

        if(txtValue.toLowerCase().indexOf(input) > -1){
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }

    }
}

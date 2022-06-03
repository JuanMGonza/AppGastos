function capturar(){
    function Persona(nombre,plata){
        this.nombre=nombre;
        this.plata=plata;
    }
    let nombreCapturar = document.getElementById("nombreAmigo").value;
    let plataCapturar = parseFloat(document.getElementById("plataGastada").value);

    nuevoAmigo = new Persona(nombreCapturar, plataCapturar);
    
    agregar();
}

var listaAmigos = [];

function agregar(){
    listaAmigos.push(nuevoAmigo); 
    document.getElementById("tabla-datos").innerHTML += '<tr><td>' + nuevoAmigo.nombre + ' - ' + nuevoAmigo.plata + '</td></tr>';
    
    let suma = 0;
    let cantAmigos = listaAmigos.length;

    for(let amigo of listaAmigos){ 
        suma += amigo.plata;
        document.getElementById("total").innerHTML = suma;
        document.getElementById("reparto").innerHTML = suma/cantAmigos;
    }
}
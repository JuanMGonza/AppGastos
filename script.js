function capturar(){
    function Persona(nombre,plata){
        this.nombre=nombre;
        this.plata=plata;
    }
    let nombreCapturar = document.getElementById("nombreAmigo").value;
    let plataCapturar = document.getElementById("plataGastada").value;

    nuevoAmigo = new Persona(nombreCapturar, plataCapturar);
    
    agregar();
}

let baseAmigos = [];

function agregar(){
    baseAmigos.push(nuevoAmigo);
    document.getElementById("tabla-datos").innerHTML += '<tr><td>' + nuevoAmigo.nombre + ' - ' + nuevoAmigo.plata + '</td></tr>';

    let suma = '';

    for(let plataTotal of nuevoAmigo.plata){
        suma += plataTotal;
    }

    document.getElementById("total").innerHTML += suma;
}
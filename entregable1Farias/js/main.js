// Constantes y arrays
const drops = ["Remera", "Gorra", "Buzo"];
const preciosDrops = [15000, 10000, 30000];

// Variables
let nombreUsuario;
let telefonoUsuario;
let flagNombre = false;
let flagTelefono = false;
let menuDrops;
let opcionDrop;
let cantidadDrop;
let precioTotal;

// Mensajes
const mensajeDespedida = () => alert('Gracias por visitarnos');
const mensajeError = () => alert('ERROR:No se ingreso ningun dato');

// Bienvenida e ingreso de datos.
function ingresarDatosUsuario() {
    do {
        nombreUsuario = prompt("Esto es Niño Sur\n¿cómo te llamás?");
        if (nombreUsuario === null || nombreUsuario === '') {
            mensajeError();
            flagNombre = false;
            continue;
        } else { flagNombre = true }

        telefonoUsuario = prompt("Por favor, ingresá tu teléfono");
        if (telefonoUsuario === null || telefonoUsuario === '') {
            mensajeError();
            flagTelefono = false;
            continue;
        } else { flagTelefono = true }
    } while (!flagNombre || !flagTelefono);

    alert('Bienvenido ' + nombreUsuario)
    elegirDrop();
}

// Eligir drop
function elegirDrop() {
    menuDrops = "¿En qué estás interesado?\n";
    for (let i = 1; i <= drops.length; i++) {
        menuDrops += "\n" + i + ". " + drops[i-1] + " ($ " + preciosDrops[i-1] + ")";
    }

    precioTotal = 0;

    do {
        opcionDrop = prompt(menuDrops);

        cantidadDrop = Number(prompt('Ingresá las unidades de ' + drops[opcionDrop-1] + 's que quieras agregar:'));

        precioTotal += (preciosDrops[opcionDrop-1] * cantidadDrop);

        if (confirm('¿Desea agregar algo más?')) {
            continue;
        } else {
            break;
        }
    } while (true);

    alert('Tu total de compra es: $ ' + precioTotal);
    mensajeDespedida();
};


// Inicio del programa
ingresarDatosUsuario();
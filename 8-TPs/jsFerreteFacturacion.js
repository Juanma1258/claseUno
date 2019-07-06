/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var suma;

    primerPrecio = document.getElementById("PrecioUno").value;
    segundoPrecio = document.getElementById("PrecioDos").value;
    tercerPrecio = document.getElementById("PrecioTres").value;

    primerPrecio = parseInt(primerPrecio);
    segundoPrecio = parseInt(segundoPrecio);
    tercerPrecio = parseInt(tercerPrecio);

    suma = primerPrecio + segundoPrecio + tercerPrecio;
    alert(suma);
}
function Promedio () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var promedio;

    primerPrecio = document.getElementById("PrecioUno").value;
    segundoPrecio = document.getElementById("PrecioDos").value;
    tercerPrecio = document.getElementById("PrecioTres").value;

    primerPrecio = parseInt(primerPrecio);
    segundoPrecio = parseInt(segundoPrecio);
    tercerPrecio = parseInt(tercerPrecio);

    promedio = (primerPrecio + segundoPrecio + tercerPrecio) / 3;
    alert(promedio);
}
function PrecioFinal () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var precioFinal;
    var iva;

    primerPrecio = document.getElementById("PrecioUno").value;
    segundoPrecio = document.getElementById("PrecioDos").value;
    tercerPrecio = document.getElementById("PrecioTres").value;

    primerPrecio = parseInt(primerPrecio);
    segundoPrecio = parseInt(segundoPrecio);
    tercerPrecio = parseInt(tercerPrecio);

    precioFinal = primerPrecio + segundoPrecio + tercerPrecio;
    iva = precioFinal + (precioFinal *21/100)
    alert(iva);
}
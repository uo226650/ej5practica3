/**
 * Implementa las funciones básicas de una calculadora básica.
 * Los dígitos se capturan todos en un solo método. Se añaden al String de la pantalla.
 * 
 */
class Calculadora {

    constructor() { // Constructor que puede tener parámetros o no
        this.pantalla = ""; //Atributo String donde se acumulan las teclas pulsadas
        this.memoria = 0;
    }

    actualizarPantalla() {
        document.getElementById("pantalla").value = this.pantalla;
    }

    digito(digito) {
        this.pantalla = this.pantalla.concat(digito);
        this.actualizarPantalla();
    }

    punto() {
        this.pantalla = this.pantalla.concat(".");
        this.actualizarPantalla();
    }

    suma() {
        this.pantalla = this.pantalla.concat("+");
        this.actualizarPantalla();
    }

    resta() {
        this.pantalla = this.pantalla.concat("-");
        this.actualizarPantalla();
    }

    multiplicacion() {
        this.pantalla = this.pantalla.concat("*");
        this.actualizarPantalla();
    }

    division() {
        this.pantalla = this.pantalla.concat("/");
        this.actualizarPantalla();
    }

    /**
     * Guarda en memoria el valor de la pantalla
     */
    ms() {
        var input = document.getElementById("pantalla").value;
        if (isNaN(input))
            alert("Only numbers can be stored in memory") //Probando el objeto predefinido alert() cuyo uso está desaconsejado debido a que muchos usuarios pueden tenerlo deshabilitado en sus navegadores
        else
            this.memoria = Number(input);
        this.pantalla = "";//Se asume que guardando en memoria el usuario quiere realizar una operación distinta a continuación y por lo tanto se facilita limpiando el display
        this.actualizarPantalla();
    }

    /**
     * Borra lo que está en memoria
     */
    mc() {
        this.memoria = 0;
        document.getElementById("pantalla").value = "Memoria: 0";
        this.pantalla = ""; //Resetea también los valores previos almacenados en pantalla
    }

    /**
     * Recupera lo que está en memoria
     */
    mr() {
        this.pantalla = this.memoria.toString();
        this.actualizarPantalla();
    }

    /**
     * Resta el valor actual de pantalla al valor
     * almacenador en memoria
     */
    mMenos() {
        var numero = this.pantalla;
        if (isNaN(numero))
            alert("La pantalla solo debe contener un número para poder realizar la operación M-")
        else
            this.memoria = this.memoria - Number(numero);
        this.pantalla = this.memoria.toString();
        this.actualizarPantalla();
    }

    /**
     * Suma el valor actual de pantalla al valor
     * almacenador en memoria
     */
    mMas() {
        var numero = this.pantalla;
        if (isNaN(numero))
            alert("La pantalla solo debe contener un número para poder realizar la operación M-")
        else
            this.memoria = this.memoria + Number(numero);
        this.pantalla = this.memoria.toString();
        this.actualizarPantalla();
    }

    borrarPantalla() {
        this.pantalla = "";
        this.actualizarPantalla();
    }

    /**
     * Utiliza la función eval() para realizar los cálculos
     */
    igual() {
        var input;
        var resultado;
        input = this.pantalla;
        try {
            resultado = eval(input); //Evalúa cualquier expresión de Javascript, es un intérprete dentro del intérprete de JavaScript. Permite la metaprogramación, modificarnos a nosotros mismos, por lo tanto es muy peligroso por temas de seguridad
            document.getElementById("pantalla").value = resultado;
            this.pantalla = resultado.toString();
        }
        catch (err) { //Cualquier error. No me meto en qué tipo de error
            document.getElementById("pantalla").value = "Error = " + err;
        }
    }
}


/**
 * Tiene dos tipos de operaciones:
 *       Las que se evaluan con el eval() al igual que en la calculadora básica
 *       Las que se calculan con el objeto predefinido Math
 * 
 * Por claridad de código se dividen los métodos en dos secciones.
 * La primera contiene métodos que se ejecutan directamente al presionar el botón correspondiente a la operación
 * La segunda sección contiene los métodos que solo concatenan símbolos a la pantalla. No se computará la operación hasta que se presione la tecla "igual".
 */
class CalculadoraCientifica extends Calculadora {

    constructor() {
        super();
    }

    getNumeroPantalla() {
        var numero = this.pantalla;
        if (isNaN(numero))
            alert("La pantalla solo debe contener un número para poder realizar la operación solicitada");
        else
            return Number(numero);
    }


    /*Funciones instantáneas: se ejecuta el resulta al 
    presionar el botón de la operación sin necesidad de 
    darle al igual*/

    /**
     * Devuelve el seno de un ángulo dado en radianes
     */
    seno() {
        this.pantalla = Math.sin(this.getNumeroPantalla()).toString();
        //Math.sin(numero) - Returns a Number object
        this.actualizarPantalla();
    }

    /**
     * Devuelve el coseno de un ángulo dado en radianes
     */
    coseno() {
        this.pantalla = Math.cos(this.getNumeroPantalla()).toString();
        this.actualizarPantalla();
    }

    tangente() {
        this.pantalla = Math.tan(this.getNumeroPantalla()).toString();
        this.actualizarPantalla();
    }

    arcSeno() {
        this.pantalla = Math.asin(this.getNumeroPantalla()).toString();
        this.actualizarPantalla();
    }

    arcCoseno() {
        this.pantalla = Math.acos(this.getNumeroPantalla()).toString();
        this.actualizarPantalla();

    }

    arcTangente() {
        this.pantalla = Math.atan(this.getNumeroPantalla()).toString();
        this.actualizarPantalla();;
    }

    logaritmo() {
        this.pantalla = Math.log(this.getNumeroPantalla()).toString(); //Logaritmo natural (en base e) de un número
        this.actualizarPantalla();
    }

    logBase10() {
        this.pantalla = Math.log10(this.getNumeroPantalla()).toString();
        this.actualizarPantalla();
    }

    exponencial() {
        this.pantalla = Math.exp(this.getNumeroPantalla()).toString(); //e^x
        this.actualizarPantalla();
    }

    expBase10() {
        this.pantalla = Math.pow(10, this.getNumeroPantalla()).toString(); //10^x
        this.actualizarPantalla();
    }

    cuadrado() {
        this.pantalla = Math.pow(this.getNumeroPantalla(), 2).toString(); //x^2
        this.actualizarPantalla();
    }

    raiz(numero) {
        this.pantalla = Math.sqrt(this.getNumeroPantalla()).toString();
        this.actualizarPantalla();
    }

    signo(numero) { //Probar sin convertir a Number
        this.pantalla = -Number(this.getNumeroPantalla()).toString();
        this.actualizarPantalla();
    }

    //Condicion    
    pi() {
        var numero = this.pantalla;
        if (isNaN(numero)) {
            var ultimoCaracter = pantalla.value.substring(pantalla.value.length - 1, pantalla.value.length);
            if (!isNaN(ultimoCaracter)) {
                this.pantalla = Math.PI.toString();
                this.actualizarPantalla();
            } else {
                this.pantalla = this.pantalla.concat(Math.PI.toString());
                this.actualizarPantalla();
            }
        }
        else {
            this.pantalla = Math.PI.toString();
            this.actualizarPantalla();
        }

    }

    e() {
        var numero = this.pantalla;
        if (isNaN(numero)) {
            var ultimoCaracter = pantalla.value.substring(pantalla.value.length - 1, pantalla.value.length);
            if (!isNaN(ultimoCaracter)) {
                this.pantalla = Math.E.toString();
                this.actualizarPantalla();
            } else {
                this.pantalla = this.pantalla.concat(Math.E.toString());
                this.actualizarPantalla();
            }
        }
        else {
            this.pantalla = Math.E.toString();
            this.actualizarPantalla();
        }
    }

    factorialCalculo(n) {
        return n ? n * this.factorialCalculo(n - 1) : 1;
    }

    factorial() {
        if(this.getNumeroPantalla()<0)
            this.pantalla = "Introduzca un número positivo";
        else
            this.pantalla = Number(this.factorialCalculo(this.getNumeroPantalla())).toString();
        this.actualizarPantalla();
    }

    /**
     * Dado un ángulo introducido en grados
     * lo convierte a radianes
     */
    toRad(){
        this.pantalla = ( ( Math.PI * (this.getNumeroPantalla()) )/180 );//.toString();
        this.actualizarPantalla();
    }

    /**
     * Dado un ángulo introducido en radianes
     * lo convierte a grados
     */
    toDegrees(){
        this.pantalla = ( ( this.getNumeroPantalla() * 180 ) / Math.PI );//.toString();
        this.actualizarPantalla();
    }


    //Borra el último caracter introducido
    borrar() {
        this.pantalla = pantalla.value.substring(0, pantalla.value.length - 1); //Probar, alt pantalla.value
        this.actualizarPantalla();
    }

    /**************************************************************** */

    /* Funciones a evaluar: se concatena el operador
    al string de la pantalla. Posteriormente, para realizar
    la evaluación de la expresión de pantalla habrá que 
    presionar la tecla igual */
    modulo() {
        this.pantalla = this.pantalla.concat("%");
        this.actualizarPantalla();
    }

    potencia() {
        this.pantalla = this.pantalla.concat("**");
        this.actualizarPantalla()
    }


    abrirParentesis() {
        this.pantalla = this.pantalla.concat("(");
        this.actualizarPantalla();
    }

    cerrarParentesis() {
        this.pantalla = this.pantalla.concat(")");
        this.actualizarPantalla();
    }

}

var calculadora = new CalculadoraCientifica();

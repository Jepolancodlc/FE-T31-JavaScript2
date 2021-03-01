function Lanzamiento() {
    var resultado;
    var arrayVal = [0,0,0,0,0,0,0,0,0,0,0];
 
    for (var i = 0; i < 36000; i++) {
        resultado = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
        arrayVal[resultado - 2]++;
    }
    for (var i = 0; i < arrayVal.length; i++) {
        document.writeln('El resultado: ' + (i+2) + ' ha salido ' + arrayVal[i] + ' veces<br>');
    }   
}
Lanzamiento();
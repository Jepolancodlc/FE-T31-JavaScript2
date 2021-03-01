var fecha = "26/02/2021";
var correo = "Jepolanco@gmail.com";
var nombre = "John Polanco";
var expresion = "&<>\"";
var htmlprueba = "ho<script>asdasdasdas </script>la";

function validarFecha(fecha) {
    var formato = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if ((fecha.match(formato)) && (fecha!='')) {
          return true;
    } else {
          return false;
    }
}

function validarCorreo(correo) {
    var formato = /^([.-]|\w)+@([.-]|\w)+(\.\w{2,3})+$/;
    if ((correo.match(formato)) && (correo!='')) {
          return true;
    } else {
          return false;
    }
}

function invertirNombre(nombre){
    var formato = /(\w+)\s(\w+)/;
    var nuevoNom = nombre.replace(formato, "$2, $1");
    return nuevoNom;
}


function transformar(expresion){

    var character = {
        '<' : "&lt;",
        '>' : "&gt;",
        '&' : "&amp;",
        '"' : "&quot;"
    };

    expresion.replace(/[<>&"]/g,  function (c) {
    return character[c];
    });
    
    return expresion;
}

function eliminarEtiquetas(textoTags) {

    var tags = /<script>(\S)*<\/script>/;

    return textoTags.replace(tags, "");
}

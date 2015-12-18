(function( win, doc ){
    'use strict';
    var $cpf = doc.getElementById('cpf');
    $cpf.addEventListener( 'input', function(){mascara($cpf, cpfFormat)}, false );

    function mascara( objeto, funcao ){
        var obj = objeto.value;
        var func = funcao;
        setTimeout( function(){ obj = func( obj ) }, 1 );
    }

    function cpfFormat( num ){
        console.log("ok");
        num = num.replace(/[^0-9]/g,""); // tira os caracteres que não são números 
        num = num.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
        return num
    }

    function rgFormat( num ){
        num = num.replace(/[^0-9]/g,""); // tira os caracteres que não são números 
        num = num.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
        return num
    }
})( window, document );
(function( win, doc ){
    'use strict';
    var $cpf = doc.getElementsByName('cpf');
    $cpf.addEventListener( 'input', mascara );

    function mascara( objeto, funcao ){
        var obj = objeto.value;
        var func = funcao.value;
        return function(){
            obj = fun( obj );   
            setTimeout( this, 1 );
        }
    }

    function cpfFormat( num ){
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
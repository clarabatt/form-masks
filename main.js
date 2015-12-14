(function( win, doc ){
    'use strict';
    var $cpf = doc.getElementsByName('cpf');
    $cpf.addEventListener( 'keypress', mascara( this, cpfFormat ) );

    function mascara( objeto, funcao ){
        objeto.value = funcao( objeto.value );
        setTimeout( mascara(), 1 );
    }

    function cpfFormat( num ){
        num = num.replace(/\D/g,"");
        num = num.replace(/(\d\d\d)(\d\d\d)(\d\d\d)(\d\d)/g, '$1.$2.$3-$4');
        return num
    }
})( window, document );
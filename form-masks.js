(function( win, doc ){
    'use strict';

    function formMasks( objeto, funcao ){
        var obj = objeto.value;
        var func = funcao;
        function exec(){ 
            obj = func( obj );
            return obj;
        }
        objeto.value = exec();
    }

    function cpfFormat( num ){
        num = num.replace(/[^0-9]/g,""); // tira os caracteres que não são números 
        num = num.replace(/(\d{3})(\d)/,"$1.$2");
        num = num.replace(/(\d{3})(\d)/,"$1.$2");
        num = num.replace(/(\d{3})(\d{1,2})/,"$1-$2");
        return num
    }

    function rgFormat( num ){
        num = num.replace(/[^0-9]/g,""); // tira os caracteres que não são números 
        num = num.replace(/(\d{2})(\d)/,"$1.$2");
        num = num.replace(/(\d{3})(\d)/,"$1.$2");
        num = num.replace(/(\d{3})(\d{1,2})/,"$1-$2");
        return num
    }

    function telFormat( num ){
        num = num.replace(/[^0-9]/g,""); // tira os caracteres que não são números 
        num = num.replace(/(\d{3})(\d)/,"($1)$2");
        num = num.replace(/(\d{4})(\d)/,"$1-$2");
        return num
    }

    function celFormat( num ){
        num = num.replace(/[^0-9]/g,""); // tira os caracteres que não são números 
        num = num.replace(/(\d{3})(\d)/,"($1)$2");
        num = num.replace(/(\d{4,5})(\d{4})/,"$1-$2");
        return num
    }

    function cepFormat( num ){
        num = num.replace(/[^0-9]/g,""); // tira os caracteres que não são números 
        num = num.replace(/(\d{5})(\d)/,"$1-$2");
        return num
    }

    win.formMasks = formMasks;

})( window, document );
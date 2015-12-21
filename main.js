(function( win, doc ){
    'use strict';
    var $cpf = doc.getElementById('cpf');
    $cpf.addEventListener( 'input', function(){mascara($cpf, cpfFormat)}, false );    

    var $rg = doc.getElementById('rg');
    $rg.addEventListener( 'input', function(){mascara($rg, rgFormat)}, false );

    var $tel = doc.getElementById('tel');
    $tel.addEventListener( 'input', function(){mascara($tel, telFormat)}, false );

    var $cel = doc.getElementById('cel');
    $cel.addEventListener( 'input', function(){mascara($cel, celFormat)}, false );

    var $cep = doc.getElementById('cep');
    $cep.addEventListener( 'input', function(){mascara($cep, cepFormat)}, false );

    function mascara( objeto, funcao ){
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
})( window, document );
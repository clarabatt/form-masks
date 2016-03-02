(function(){
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

})();
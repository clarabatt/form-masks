(function( win, doc ){
	'use strict';

	var $cpf = doc.getElementById('cpf');
    $cpf.addEventListener( 'input', function(){formMasks($cpf, cpfFormat)}, false );    

    var $rg = doc.getElementById('rg');
    $rg.addEventListener( 'input', function(){formMasks($rg, rgFormat)}, false );

    var $tel = doc.getElementById('tel');
    $tel.addEventListener( 'input', function(){formMasks($tel, telFormat)}, false );

    var $cel = doc.getElementById('cel');
    $cel.addEventListener( 'input', function(){formMasks($cel, celFormat)}, false );

    var $cep = doc.getElementById('cep');
    $cep.addEventListener( 'input', function(){formMasks($cep, cepFormat)}, false );

})( window, document );
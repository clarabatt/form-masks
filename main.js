(function( window, document, formMasks ){
	'use strict';

	var $cpf = document.getElementById('cpf');
    $cpf.addEventListener( 'input', function(){ formMasks( $cpf, cpfFormat ) }, false );   

    var $rg = document.getElementById('rg');
    $rg.addEventListener( 'input', function(){ formMasks( $rg, rgFormat ) }, false );

    var $tel = document.getElementById('tel');
    $tel.addEventListener( 'input', function(){ formMasks( $tel, telFormat ) }, false );

    var $cel = document.getElementById('cel');
    $cel.addEventListener( 'input', function(){ formMasks( $cel, celFormat ) }, false );

    var $cep = document.getElementById('cep');
    $cep.addEventListener( 'input', function(){ formMasks( $cep, cepFormat ) }, false );

})( window, document, window.formMasks );
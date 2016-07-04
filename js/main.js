(function( window, document, formMasks ){
  'use strict';

  var $cpf = document.querySelector('[data-id="cpf"]');
  var $rg = document.querySelector('[data-id="rg"]');
  var $tel = document.querySelector('[data-id="tel"]');
  var $cel = document.querySelector('[data-id="cel"]');
  var $cep = document.querySelector('[data-id="cep"]');

  $cpf.addEventListener( 'input', function(){ formMasks( $cpf, cpfFormat ) }, false );
  $rg.addEventListener( 'input', function(){ formMasks( $rg, rgFormat ) }, false );
  $tel.addEventListener( 'input', function(){ formMasks( $tel, telFormat ) }, false );
  $cel.addEventListener( 'input', function(){ formMasks( $cel, celFormat ) }, false );
  $cep.addEventListener( 'input', function(){ formMasks( $cep, cepFormat ) }, false );
})( window, document, formMasks );

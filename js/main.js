(function( window, document, formMasks ){
  'use strict';

  var $cpf = document.querySelector('[data-id="cpf"]');
  var $rg = document.querySelector('[data-id="rg"]');
  var $tel = document.querySelector('[data-id="tel"]');
  var $cel = document.querySelector('[data-id="cel"]');
  var $cep = document.querySelector('[data-id="cep"]');
  var $date = document.querySelector('[data-id="date"]');
  var $hour = document.querySelector('[data-id="hour"]');

  $cpf.addEventListener( 'input', function(){ formMasks( $cpf, cpfFormat ) }, false );
  $rg.addEventListener( 'input', function(){ formMasks( $rg, rgFormat ) }, false );
  $tel.addEventListener( 'input', function(){ formMasks( $tel, telFormat ) }, false );
  $cel.addEventListener( 'input', function(){ formMasks( $cel, celFormat ) }, false );
  $cep.addEventListener( 'input', function(){ formMasks( $cep, cepFormat ) }, false );  
  $date.addEventListener( 'input', function(){ formMasks( $date, dateFormat ) }, false );
  $hour.addEventListener( 'input', function(){ formMasks( $hour, hourFormat ) }, false );
})( window, document, formMasks );

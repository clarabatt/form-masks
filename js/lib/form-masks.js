(function( window ){
  'use strict';

  function formMasks( objeto, funcao ){
    var obj = objeto.value;
    var func = funcao;
    objeto.value = exec( obj, func );
  }

  function exec( obj, func ){
    obj = func( obj );
    return obj;
  }

  function cpfFormat( num ){
    num = num.replace(/[^0-9]/g,"");
    num = num.replace(/(\d{3})(\d)/,"$1.$2");
    num = num.replace(/(\d{3})(\d)/,"$1.$2");
    num = num.replace(/(\d{3})(\d{1,2})/,"$1-$2");
    return num;
  }

  function rgFormat( num ){
    num = num.replace(/[^0-9]/g,"");
    num = num.replace(/(\d{2})(\d)/,"$1.$2");
    num = num.replace(/(\d{3})(\d)/,"$1.$2");
    num = num.replace(/(\d{3})(\d{1,2})/,"$1-$2");
    return num;
  }

  function telFormat( num ){
    num = num.replace(/[^0-9]/g,"");
    num = num.replace(/(\d{3})(\d)/,"($1)$2");
    num = num.replace(/(\d{4})(\d)/,"$1-$2");
    return num;
  }

  function celFormat( num ){
    num = num.replace(/[^0-9]/g,"");
    num = num.replace(/(\d{3})(\d)/,"($1)$2");
    num = num.replace(/(\d{4,5})(\d{4})/,"$1-$2");
    return num;
  }

  function cepFormat( num ){
    num = num.replace(/[^0-9]/g,"");
    num = num.replace(/(\d{5})(\d)/,"$1-$2");
    return num;
  }

  function dateFormat( num ){
    num = num.replace(/[^0-9]/g,"");
    num = num.replace(/(\d{2})(\d{2})/,"$1/$2");
    num = num.replace(/(\d{2})(\d{2,4})/,"$1/$2");
    return num;
  }

  function hourFormat( num ){
    num = num.replace(/[^0-9]/g,"");
    num = num.replace(/(\d{2})(\d{2})/,"$1:$2");
    return num;
  }

  window.formMasks = formMasks;
  window.cpfFormat = cpfFormat;
  window.rgFormat = rgFormat;
  window.telFormat = telFormat;
  window.celFormat = celFormat;
  window.cepFormat = cepFormat;
  window.dateFormat = dateFormat;
  window.hourFormat = hourFormat;
})( window );

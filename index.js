$(document).ready(function () {
  //kVA to kW
  $("#kva").bind("keypress keydown keyup change", function () {
    //kVA to kW
    var kVA = parseFloat($("#kva").val());

    var v = "";
    if (!isNaN(kVA)) {
      v = kVA / 0.8;
    }
    $("#kw").val(v.toString());
  });

  //kW to kVA
  $("#kw").bind("keypress keydown keyup change", function () {
    //kW to kVA
    var kW = parseFloat($("#kw").val());

    var v = "";
    if (!isNaN(kW)) {
      v = kW * 0.8;
    }
    $("#kva").val(v.toString());
  });

  //kW to HP
  $("#kwa").bind("keypress keydown keyup change", function () {
    //kW to kVA
    var kWA = parseFloat($("#kwa").val());

    var v = "";
    if (!isNaN(kWA)) {
      v = (kWA * 1000) / 746;
    }
    $("#hpa").val(v.toString());
  });

  //HP TO KW
  $("#hpa").bind("keypress keydown keyup change", function () {
    var hpa = parseFloat($("#hpa").val());

    var v = "";
    if (!isNaN(hpa)) {
      v = hpa * 0.746;
    }
    $("#kwa").val(v.toString());
  });

  //single phase kVA to amperes
  $("#eval").bind("click", function () {
    var phase = $("#phase").val();
    var kva = parseFloat($("#kkva").val());
    var volt = parseFloat($("#volts").val());

    var v = "";

    if (!isNaN(kva) && !isNaN(volt)) {
      if (phase === "1") {
        v = (kva * 1000) / volt;
      } else if (phase === "2") {
        v = (kva * 1000) / (2 * volt);
      } else if (phase === "3") {
        v = (kva * 1000) / (1.73 * volt);
      } else {
        alert("Please select Phase");
      }
    }

    $("#amps").val(v.toString());
  });

  //Power Requirement Calculator
  $("#eval1").bind("click", function () {
    var phase1 = $("#phase1").val();
    var voltage = parseFloat($("#V").val());
    var current = parseFloat($("#I").val());
    var powerFactor = parseFloat($("#PF").val());

    var v = "";
    if (!isNaN(voltage) && !isNaN(current)) {
      if (phase1 === "1") {
        v = (voltage * current * powerFactor) / 1000;
      } else if (phase1 === "3") {
        v = (1.73 * voltage * current * powerFactor) / 1000;
      } else {
        alert("Please select Phase");
      }
    }

    $("#KWn").val(v.toString());
  });

  $("#ghp").bind('keypress keydown keyup change',function(){

  
    var hp = parseFloat($("#ghp").val());
   
    var s = 1;
    var r = 1;
    var v = '';

    if(!isNaN(hp)){

      if (hp < 50) {
        r = 1.5;
        } else if (hp > 49 && hp < 100) {
            r = 1.4;
        } else if (hp > 99) {
            r = 1.3;
            s = 5;
        }
        if (hp < 30) {
            s = 7;
        } else if (hp> 29 && hp < 100) {
            s = 6
        }
  
    v = ((hp * r * s) / 2) / 1.39;
    }

    $("#gkva").val(v.toString());


  })



});


  
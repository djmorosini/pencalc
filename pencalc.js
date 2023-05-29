function updatePen(callback) {
  var pen = 0;
  if(callback) {
    updatePiercing(callback);
  }
  for (let i = 1; i < 19; i++) {
    var select = document.getElementById("select" + i).value;
    if(select == "Yes") {
      switch(i) {
        case 1:
        pen += 5948;
        break;
        case 2:
        pen += 2974;
        break;
        case 3:
        pen += 2108;
        break;
        case 5:
        pen += 2974;
        break;
        case 6:
        pen += 1500;
        break;
        case 7:
        pen += parseInt(document.getElementById("alkosh").value);
        break;
        case 8:
        pen += 3541;
        break;
        case 9:
        pen += 2395;
        break;
        case 10:
        pen += 957;
        break;
        case 11:
        pen += 1000;
        break;
        case 12:
        pen += 1320;
        break;
        case 14:
        pen += 3300;
        break;
        case 16:
        pen += 3276;
        break;
        default:
      }
    } else if (select == "No" || select == 0) {
      //do nothing
    } else {
      switch (i) {
        case 4:
        pen += parseInt(document.getElementById("piercing").value);
        break;
        case 13:
        pen += 1650;
        if(select == 2)
          pen += 1650;
        break;
        case 15:
        pen += 1638;
        if(select == 2)
          pen += 1638;
        break;
        case 17:
        if(select > 1) {
          pen += (939 * select);
        } else {
          pen += 939;
        }
        break;
        case 18:
        pen += 1487;
        if(select == 2)
          pen += 1487;
        break;
        default:
      }
    }
    document.getElementById("pen").innerHTML = pen;
    document.getElementById("underpen").innerHTML = 18200 - pen;
  }
}

function updatePiercing(callback) {
  var select = document.getElementById("select4").value;
  var piercing = document.getElementById("piercing").value;
  if (callback == 'select') {
    switch (select) {
      case '20':
        document.getElementById("piercing").value = '700';
        break;
      case '10':
        document.getElementById("piercing").value = '350';
        break;
      case '0':
        document.getElementById("piercing").value = '0';
        break;
    }
  }
  else if(callback == 'piercing') {
    switch (piercing) {
      case '700':
        document.getElementById("select4").value = '20';
        break;
      case '350':
        document.getElementById("select4").value = '10';
        break;
      case '0':
        document.getElementById("select4").value = '0';
        break;
    }
  }
}
/*function gerar() {
  var res = document.getElementById('res')
  var gitem = gitem(1, 100)
  var gmoney = gmoney(1, 100)

  function gitem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function gmoney(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  res.innerHTML += `<p>Os valores rolados foram ${gitem} e ${gmoney}</p>`
}*/

function gerar() {
  var res = document.getElementById('res')
  var itemg = gitem(1, 100)
  var moneyg = gmoney(1, 100)
  var gitemg = ''
  var gmoneyg = ''
  var nd = document.getElementById('nd')

  function gitem(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function gmoney(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if(nd.value == "ND 1/2") {
    if(moneyg <= 25) {
      gmoneyg = "Nada"
    } else if (moneyg >= 26 && moneyg <= 70) {
      gmoneyg = "2d6x10 TC"
    } else if (moneyg >= 71 && moneyg <= 95) {
      gmoneyg = "2d8x10 T$"
    } else {
      gmoneyg = "1d4x100 T$"
    }

    if(itemg <= 45) {
      gitemg = "Nada"
    } else if(itemg >= 46 && itemg <= 70) {
      gitemg = "Diverso"
    } else {
      gitemg = "Equipamento"
    }
    res.innerHTML = `Você rolou ${moneyg} para Dinheiro e ${itemg} para Item, resultando em ${gmoneyg} e ${gitemg} como loot.`
  }
}




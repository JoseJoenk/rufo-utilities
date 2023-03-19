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
  var itemr = ''
  var moneyr = ''
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
      itemr = "Nada"
    } else if(itemg >= 46 && itemg <= 70) {
      gitemg = "Diverso"
      itemr = diverso()
    } else {
      gitemg = "Equipamento"
      itemr = equipamento()
    }
    res.innerHTML = `Você rolou ${moneyg} para Dinheiro e ${itemg} para Item, resultando em ${gmoneyg} e ${gitemg} como loot. Seu dinheiro gerou ${moneyr} e seu diverso gerou ${itemr}`
  }
}

function equipamento() {
  let d6 = equip6(1, 6)

  function equip6(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if(d6 >= 1 && d6 <= 3) {
    itemroll = arma()
  } else if (d6 == 4 || d6 == 5) {
    itemroll = armadura()
  } else {
    itemroll = esoterico()
  }
}

function arma() {
  let d1100 = armas(1, 100)

  function armas(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}

function armadura() {
  let d2100 = armaduras(1, 100)

  function armaduras(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if(d2100 >= 1 && d3100 <= 5) {
    return "Couro"
  } else if (d2100 >= 6 && d3100 <= 10) {
    return "Brunea"
  } else if (d2100 >= 11 && d3100 <= 25) {
    return "Completa"
  } else if (d2100 >= 26 && d3100 <= 30) {
    return "Cota de malha"
  } else if (d2100 >= 31 && d3100 <= 45) {
    return "Couraça"
  } else if (d2100 >= 46 && d3100 <= 55) {
    return "Couro batido"
  } else if (d2100 >= 56 && d3100 <= 65) {
    return "Escudo leve"
  } else if (d2100 >= 66 && d3100 <= 80) {
    return "Escudo pesado"
  } else if (d2100 >= 81 && d3100 <= 85) {
    return "Gibão de epels"
  } else if (d2100 >= 86 && d2100 <= 90) {
    return "Loriga segmentada"
  } else {
    return "Meia armadura"
  }
}

function esoterico() {
  let d3100 = esotericos(1, 100)

  function esotericos(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if(d3100 >= 1 && d3100 <= 10) {
    return "Bolsa de pó"
  } else if (d3100 >= 11 && d3100 <= 25) {
    return "Cajado arcano"
  } else if (d3100 >= 26 && d3100 <= 35) {
    return "Cetro elemental*"
  } else if (d3100 >= 36 && d3100 <= 42) {
    return "Costela de lich"
  } else if (d3100 >= 43 && d3100 <= 50) {
    return "Dedo de ente"
  } else if (d3100 >= 51 && d3100 <= 55) {
    return "Luva de ferro"
  } else if (d3100 >= 56 && d3100 <= 65) {
    return "Medalhão de prata"
  } else if (d3100 >= 66 && d3100 <= 75) {
    return "Orbe cristalina"
  } else if (d3100 >= 76 && d3100 <= 85) {
    return "Tomo hermético*"
  } else {
    return "Varinha arcana"
  }
}

function diverso() {
  let d100 = res100(1, 100)

  function res100(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if(d100 == 1 || d100 == 2) {
    return "Ácido"
  } else if (d100 == 3 || d100 == 4) {
    return "Água Benta"
  } else if  (d100 == 5) {
    return "Alaúde élfico"
  } else if (d100 == 6) {
    return "Algemas"
  } else if (d100 == 7 || d100 == 8) {
    return "Baga-de-fogo"
  } else if (d100 >= 9 && d100 <= 23) {
    return "Bálsamo restaurador"
  } else if (d100 == 24) {
    return "Bandana"
  } else if (d100 == 25) {
    return "Bandoleira de poções"
  } else if (d100 >= 26 && d100 <= 30) {
    return "Bomba"
  } else if (d100 == 31) {
    return "Botas reforçadas"
  } else if (d100 == 32) {
    return "Camisa bufante"
  } else if (d100 == 33) {
    return "Capa esvoaçante"
  } else if (d100 == 34) {
    return "Capa pesada"
  } else if (d100 == 35) {
    return "Casaco longo"
  } else if (d100 == 36) {
    return "Chapéu arcano"
  } else if (d100 == 37 || d100 == 38) {
    return "Coleção de Livros"
  } else if (d100 == 39 || d100 == 40) {
    return "Cosmético"
  } else if (d100 == 41 || d100 == 42) {
    return "Dente-de-dragão"
  } else if (d100 == 43) {
    return "Enfeite de elmo"
  } else if (d100 == 44) {
    return "Elixir do amor"
  } else if (d100 == 45 || d100 == 46) {
    return "Equipamento de viagem"
  } else if (d100 >= 47 && d100 <= 56) {
    return "Essência de mana"
  } else if (d100 == 57) {
    return "Estojo de disfarces"
  } else if (d100 == 58) {
    return "Farrapos do ermitão"
  } else if (d100 == 59) {
    return "Flauta mística"
  } else if (d100 >= 60 && d100 <= 66) {
    return "Fogo alquímico"
  } else if (d100 == 67) {
    return "Gorro de ervas"
  } else if (d100 == 68 || d100 == 69) {
    return "Líquen lilás"
  } else if (d100 == 70) {
    return "Luneta"
  } else if (d100 == 71) {
    return "Luva de pelica"
  } else if (d100 == 72 || d100 == 73) {
    return "Maleta de medicamentos"
  } else if (d100 == 74) {
    return "Manopla"
  } else if (d100 == 75) {
    return "Manto eclesiástico"
  } else if (d100 >= 76 && d100 <= 78) {
    return "Mochila de aventureiro"
  } else if (d100 == 79 && d100 == 89) {
    return "Musgo púrpura"
  } else if (d100 == 81) {
    return "Organizador de pergaminhos"
  } else if (d100 == 82 || d100 == 83) {
    return "Ossos de monstro"
  } else if (d100 == 84 || d100 == 85) {
    return "Pó de cristal"
  } else if (d100 == 86 || d100 == 87) {
    return "Pó de giz"
  } else if (d100 == 88) {
    return "Pó do desaparecimento"
  } else if (d100 == 89) {
    return "Robe místico"
  } else if (d100 == 90 || d100 == 91) {
    return "Saco de sal"
  } else if (d100 == 92) {
    return "Sapatos de camurça"
  } else if (d100 == 93 || d100 == 94) {
    return "Seixo de âmbar"
  } else if (d100 == 95) {
    return "Sela"
  } else if (d100 == 96) {
    return "Tabardo"
  } else if (d100 == 97) {
    return "Traje da corte"
  } else if (d100 == 98 || d100 == 99) {
    return "Terra de cemitério"
  } else {
    return "Veste de seda"
  }
}




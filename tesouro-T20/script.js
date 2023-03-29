
/*Declaração de variaveis e onde os primeiros d100 são rolados*/
function gerar() {
  var res = document.getElementById('res')
  var itemg = gitem(1, 100)
  var moneyg = gmoney(1, 100)
  var gitemg = ''
  var gmoneyg = ''
  var itemr = ''
  var moneyr = ''
  var equip = ''
  var aprimoramento1 = ''
  var aprimoramento2 = ''
  var aprimoramento3 = ''
  var aprimoramento4 = ''
  var aprimoramento5 = ''
  var aprimoramento6 = ''
  var finalmsg = ''


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

/*Função que dispara a mensagem final*/
function fimmsg() {
  finalmsg = `Você rolou <strong>${moneyg}</strong> para Dinheiro e <strong>${itemg}</strong> para Item, resultando em <strong>${gmoneyg}</strong> e <strong>${gitemg}</strong> como loot. Seu dinheiro gerou <strong>${moneyr}</strong> e seu item gerou <strong>${itemr}</strong>`
  return finalmsg
}

/*Seleção de ND e começo do procedimento pra cada ND*/
  if(nd.value == "ND 1/4") { /*Dinheiro pra ND 1/4*/
    if(moneyg <= 30) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg >= 31 && moneyg <= 70) {
      gmoneyg = "1d6x10 TC"
      let d1 = rolldice(1, 6)
      let d2 = 0
      let dr = 10
      let ts = " TC"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 71 && moneyg <= 95) {
      gmoneyg = "1d4x100 TC"
      let d1 = rolldice(1, 4)
      let d2 = 0
      let dr = 100
      let ts = " TC"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d6x10 T$"
      let d1 = rolldice(1, 6)
      let d2 = 0
      let dr = 10
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 50) { /*Item ND 1/4*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg >= 51 && itemg <= 75) {
      gitemg = "Diverso"
      itemr = diverso()
    } else {
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      itemr = equipamento(roll)
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if(nd.value == "ND 1/2") { /*Dinheiro ND 1/2*/
    if(moneyg <= 25) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg >= 26 && moneyg <= 70) {
      gmoneyg = "2d6x10 TC"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let dr = 10
      let ts = " TC"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 71 && moneyg <= 95) {
      gmoneyg = "2d8x10 T$"
      let d1 = rolldice(1, 8)
      let d2 = rolldice(1, 8)
      let dr = 10
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d4x100 T$"
      let d1 = rolldice(1, 4)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 45) { /*Item ND 1/2*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg >= 46 && itemg <= 70) {
      gitemg = "Diverso"
      itemr = diverso()
    } else {
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      itemr = equipamento(roll)
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 1") {
    if(moneyg <= 20) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg >= 21 && moneyg <= 70) {
      gmoneyg = "3d8x10 T$"
      let d1 = rolldice(1, 8)
      let d2 = rolldice(1, 8)
      let d3 = rolldice(1, 8)
      let dr = 10
      let ts = " T$"
      let tsres = (d1 + d2 + d3) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 71 && moneyg <= 95) {
      gmoneyg = "4d12x10 T$"
      let d1 = rolldice(1, 12)
      let d2 = rolldice(1, 12)
      let d3 = rolldice(1, 12)
      let d4 = rolldice(1, 12)
      let dr = 10
      let ts = " T$"
      let tsres = (d1 + d2 + d3 + d4) * dr
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1 riqueza menor"
      let d1 = riquezamenor(0)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 40) { /*Item ND 1*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg >= 41 && itemg <= 65) {
      gitemg = "Diverso"
      itemr = diverso()
    } else if (itemg >= 66 && itemg <= 90){
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      itemr = equipamento(roll)
    } else {
      gitemg = "1 poção"
      itemr = potion(0)
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 2") {
    if(moneyg <= 15) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg >= 16 && moneyg <= 55) {
      gmoneyg = "3d10x10 T$"
      let d1 = rolldice(1, 10)
      let d2 = rolldice(1, 10)
      let d3 = rolldice(1, 10)
      let dr = 10
      let ts = " T$"
      let tsres = (d1 + d2 + d3) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 56 && moneyg <= 85) {
      gmoneyg = "2d4x100 T$"
      let d1 = rolldice(1, 4)
      let d2 = rolldice(1, 4)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 86 && moneyg <= 95) {
      gmoneyg = "2d6+1x100 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2 + 1) * dr
      moneyr = `${tsres} ${ts}`
     }else {
      gmoneyg = "1 riqueza menor"
      let d1 = riquezamenor(0)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
    } 

    if(itemg <= 30) { /*Item ND 2*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg >= 31 && itemg <= 40) {
      gitemg = "Diverso"
      itemr = diverso()
    } else if (itemg >= 41 && itemg <= 70){
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      itemr = equipamento(roll)
    } else if (itemg >= 71 && itemg <= 90) {
      gitemg = "1 poção"
      itemr = potion(0)
    } else {
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      equip = equipamento(roll)
      aprimoramento1 = superior(roll)
      itemr = `${equip} ${aprimoramento1}`
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 3") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg >= 11 && moneyg <= 20) {
      gmoneyg = "4d12x10 T$"
      let d1 = rolldice(1, 12)
      let d2 = rolldice(1, 12)
      let d3 = rolldice(1, 12)
      let d4 = rolldice(1, 12)
      let dr = 10
      let ts = " T$"
      let tsres = (d1 + d2 + d3 + d4) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 21 && moneyg <= 60) {
      gmoneyg = "1d4x100 T$"
      let d1 = rolldice(1, 4)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 61 && moneyg <= 90) {
      gmoneyg = "1d8x10 TO"
      let d1 = rolldice(1, 8)
      let d2 = 0
      let dr = 10
      let ts = " TO"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
     }else {
      gmoneyg = "1d3 riquezas menores"
      let riq3 = rolldice(1, 3)
      if(riq3 == 1) {
        let d1 = riquezamenor(0)
        let d2 = 0
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamenor(0)
        let d2 = riquezamenor(0)
        let ts = " T$"
        let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamenor(0)
        let d2 = riquezamenor(0)
        let d3 = riquezamenor(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
        moneyr = `${tsres} ${ts}`
      }
    } 

    if(itemg <= 25) { /*Item ND 3*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg >= 26 && itemg <= 35) {
      gitemg = "Diverso"
      itemr = diverso()
    } else if (itemg >= 36 && itemg <= 60){
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      itemr = equipamento(roll)
    } else if (itemg >= 61 && itemg <= 85) {
      gitemg = "1 poção"
      itemr = potion(0)
    } else {
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      equip = equipamento(roll)
      aprimoramento1 = superior(roll)
      itemr = `${equip} ${aprimoramento1}`
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 4") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg >= 11 && moneyg <= 50) {
      gmoneyg = "1d6x100 T$"
      let d1 = rolldice(1, 6)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 51 && moneyg <= 80) {
      gmoneyg = "1d12x100 T$"
      let d1 = rolldice(1, 12)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 81 && moneyg <= 90) {
      gmoneyg = "1 riqueza menor"
      let d1 = riquezamenor(20)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
     }else {
      gmoneyg = "1d3 riquezas menores"
      let riq3 = rolldice(1, 3)
      if(riq3 == 1) {
        let d1 = riquezamenor(20)
        let d2 = 0
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamenor(20)
        let d2 = riquezamenor(20)
        let ts = " T$"
        let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamenor(20)
        let d2 = riquezamenor(20)
        let d3 = riquezamenor(20)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
        moneyr = `${tsres} ${ts}`
      }
    } 

    if(itemg <= 20) { /*Item ND 4*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg >= 21 && itemg <= 30) {
      gitemg = "Diverso"
      itemr = diverso()
    } else if (itemg >= 31 && itemg <= 55){
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      itemr = equipamento(roll)
    } else if (itemg >= 56 && itemg <= 80) {
      gitemg = "1 poção"
      itemr = potion(20)
    } else {
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      equip = equipamento(roll)
      aprimoramento1 = superior(roll)
      itemr = `${equip} ${aprimoramento1}`
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 5") {
    if(moneyg <= 15) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg >= 15 && moneyg <= 65) {
      gmoneyg = "1d8x100 T$"
      let d1 = rolldice(1, 8)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 66 && moneyg <= 95) {
      gmoneyg = "3d4x10 TO"
      let d1 = rolldice(1, 4)
      let d2 = rolldice(1, 4)
      let d3 = rolldice(1, 4)
      let dr = 10
      let ts = " TO"
      let tsres = (d1 + d2 + d3) * dr
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1 riqueza média"
      let d1 = riquezamedia(0)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
     }

    if(itemg <= 20) { /*Item ND 5*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg >= 21 && itemg <= 70) {
      gitemg = "1 poção"
      itemr = potion(0)
    } else if (itemg >= 71 && itemg <= 90){
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      itemr = `${equip} ${aprimoramento1}`
    } else {
      gitemg = "Item superior (2 Melhorias)"
      roll = rolldice(1, 6)
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      aprimoramento2 = superior2(roll, equip, aprimoramento1)

      while (aprimoramento2 === aprimoramento1) {
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}`
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 6") {
    if(moneyg <= 15) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg >= 15 && moneyg <= 60) {
      gmoneyg = "2d6x100 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 61 && moneyg <= 90) {
      gmoneyg = "2d10x100 T$"
      let d1 = rolldice(1, 10)
      let d2 = rolldice(1, 10)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d3+1 riquezas menores"
      let riq3 = rolldice(1, 3)
      if(riq3 == 1) {
        let d1 = riquezamenor(0)
        let d2 = riquezamenor(0)
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamenor(0)
        let d2 = riquezamenor(0)
        let d3 = riquezamenor(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamenor(0)
        let d2 = riquezamenor(0)
        let d3 = riquezamenor(0)
        let d4 = riquezamenor(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4)
        moneyr = `${tsres} ${ts}`
      }
     }

    if(itemg <= 20) { /*Item ND 6*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg >= 21 && itemg <= 65) {
      gitemg = "1 poção"
      itemr = potion(20)
    } else if (itemg >= 66 && itemg <= 95){
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      itemr = `${equip} ${aprimoramento1}`
    } else {
      gitemg = "Item superior (2 Melhorias)"
      roll = rolldice(1, 6)
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      aprimoramento2 = superior2(roll, equip, aprimoramento1)

      while (aprimoramento2 === aprimoramento1) {
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}`
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 7") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg >= 11 && moneyg <= 60) {
      gmoneyg = "2d8x100 T$"
      let d1 = rolldice(1, 8)
      let d2 = rolldice(1, 8)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg >= 61 && moneyg <= 90) {
      gmoneyg = "2d12x10 TO"
      let d1 = rolldice(1, 12)
      let d2 = rolldice(1, 12)
      let dr = 10
      let ts = " TO"
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d4+1 riquezas menores"
      let riq3 = rolldice(1, 4)
      if(riq3 == 1) {
        let d1 = riquezamenor(0)
        let d2 = riquezamenor(0)
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamenor(0)
        let d2 = riquezamenor(0)
        let d3 = riquezamenor(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
      moneyr = `${tsres} ${ts}`
      } else if (riq3 == 3) {
        let d1 = riquezamenor(0)
        let d2 = riquezamenor(0)
        let d3 = riquezamenor(0)
        let d4 = riquezamenor(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4)
        moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamenor(0)
        let d2 = riquezamenor(0)
        let d3 = riquezamenor(0)
        let d4 = riquezamenor(0)
        let d5 = riquezamenor(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4 + d5)
        moneyr = `${tsres} ${ts}`
      }
     }

    if(itemg <= 20) { /*Item ND 7*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg >= 21 && itemg <= 60) {
      gitemg = "1d3 poções"
      let potr = rolldice(1, 3)
      if (potr == 1) {
        itemr = potion(0)
      } else if (potr == 2) {
        pot1 = potion(0)
        pot2 = potion(0)
        itemr = `${pot1} e ${pot2}`
      } else {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        itemr = `${pot1}, ${pot2} e ${pot3}`
      }
    } else if (itemg >= 61 && itemg <= 90){
      gitemg = "Item superior (2 Melhorias)"
      roll = rolldice(1, 6)
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      aprimoramento2 = superior2(roll, equip, aprimoramento1)

      while (aprimoramento2 === aprimoramento1) {
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}`
    } else {
      gitemg = "Item superior (3 Melhorias)"
      roll = rolldice(1, 6)
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)

      while (aprimoramento2 === aprimoramento1) {
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      }
      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2} e ${aprimoramento3}`
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  }
}

/*Função pra rolar dados aleatórios*/
function rolldice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*Função pra definir a categoria quando cair Equipamento*/
function equipamento(roll) {
  var d6 = roll

  if(d6 >= 1 && d6 <= 3) {
    itemroll = arma()
    return itemroll
  } else if (d6 == 4 || d6 == 5) {
    itemroll = armadura()
    return itemroll
  } else {
    itemroll = esoterico()
    return itemroll
  }
}
/*Função pra rolagem de armas*/
function arma() {
  let d1100 = rolldice(1, 100)

  if(d1100 >= 1 && d1100 <= 3) {
    return "Adaga"
  } else if (d1100 == 4 || d1100 == 5) {
    return "Alabarda"
  } else if (d1100 == 6 || d1100 == 7) {
    return "Alfange"
  } else if (d1100 >= 8 && d1100 <= 10) {
    return "Arco curto"
  } else if (d1100 >= 11 && d1100 <= 13) {
    return "Arco longo"
  } else if (d1100 == 14 || d1100 == 15) {
    return "Azagaia"
  } else if (d1100 == 16) {
    return "Balas (20)"
  } else if (d1100 == 17 || d1100 == 18) {
    return "Besta leve"
  } else if (d1100 == 19 || d1100 == 20) {
    return "Besta pesada"
  } else if (d1100 >= 21 && d1100 <= 23) {
    return "Bordão"
  } else if (d1100 == 24) {
    return "Chicote"
  } else if (d1100 >= 25 && d1100 <= 27) {
    return "Cimitarra"
  } else if (d1100 >= 28 && d1100 <= 30) {
    return "Clava"
  } else if (d1100 == 31) {
    return "Corrente de espinhos"
  } else if (d1100 == 32 || d1100 == 33) {
    return "Espada bastarda"
  } else if (d1100 >= 34 && d1100 <= 38) {
    return "Espada curta"
  } else if (d1100 >= 39 && d1100 <= 43) {
    return "Espada longa"
  } else if (d1100 >= 44 && d1100 <= 46) {
    return "Flechas (20)"
  } else if (d1100 >= 47 && d1100 <= 49) {
    return "Florete"
  } else if (d1100 == 50 || d1100 == 51) {
    return "Foice"
  } else if (d1100 == 52 || d1100 == 53) {
    return "Funda"
  } else if (d1100 == 54 || d1100 == 55) {
    return "Gadanho"
  } else if (d1100 == 56) {
    return "Katana"
  } else if (d1100 >= 57 && d1100 <= 59) {
    return "Lança"
  } else if (d1100 == 60) {
    return "Lança montada"
  } else if (d1100 >= 61 && d1100 <= 63) {
    return "Maça"
  } else if (d1100 >= 64 && d1100 <= 66) {
    return "Machadinha"
  } else if (d1100 == 67) {
    return "Machado anão"
  } else if (d1100 >= 68 && d1100 <= 70) {
    return "Machado de batalha"
  } else if (d1100 >= 71 && d1100 <= 73) {
    return "Machado de guerra"
  } else if (d1100 == 74) {
    return "Machado táurico"
  } else if (d1100 == 75 || d1100 <= 76) {
    return "Mangual"
  } else if (d1100 == 77) {
    return "Marreta"
  } else if (d1100 >= 78 && d1100 <= 80) {
    return "Martelo de guerra"
  } else if (d1100 >= 81 && d1100 <= 83) {
    return "Montante"
  } else if (d1100 == 84) {
    return "Mosquete"
  } else if (d1100 == 85) {
    return "Pedras (20)"
  } else if (d1100 >= 86 && d1100 <= 88) {
    return "Picareta"
  } else if (d1100 == 89 || d1100 == 90) {
    return "Pique"
  } else if (d1100 == 91 || d1100 == 92) {
    return "Pistola"
  } else if (d1100 == 93) {
    return "Rede"
  } else if (d1100 >= 94 && d1100 <= 96) {
    return "Tacape"
  } else if (d1100 == 97 || d1100 == 98) {
    return "Tridente"
  } else {
    return "Virotes (20)"
  } 
}
/*Função pra rolagem de armaduras ou escudos*/
function armadura() {
  let d2100 = rolldice(1, 100)

  if(d2100 >= 1 && d2100 <= 5) {
    return "Couro"
  } else if (d2100 >= 6 && d2100 <= 10) {
    return "Brunea"
  } else if (d2100 >= 11 && d2100 <= 25) {
    return "Armadura completa"
  } else if (d2100 >= 26 && d2100 <= 30) {
    return "Cota de malha"
  } else if (d2100 >= 31 && d2100 <= 45) {
    return "Couraça"
  } else if (d2100 >= 46 && d2100 <= 55) {
    return "Couro batido"
  } else if (d2100 >= 56 && d2100 <= 65) {
    return "Escudo leve"
  } else if (d2100 >= 66 && d2100 <= 80) {
    return "Escudo pesado"
  } else if (d2100 >= 81 && d2100 <= 85) {
    return "Gibão de peles"
  } else if (d2100 >= 86 && d2100 <= 90) {
    return "Loriga segmentada"
  } else {
    return "Meia armadura"
  }
}
/*Função pra rolagem de esotéricos*/
function esoterico() {
  let d3100 = rolldice(1, 100)

  if(d3100 >= 1 && d3100 <= 10) {
    return "Bolsa de pó"
  } else if (d3100 >= 11 && d3100 <= 25) {
    return "Cajado arcano"
  } else if (d3100 >= 26 && d3100 <= 35) {
    return cetro()
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
    return tomo()
  } else {
    return "Varinha arcana"
  }
}
/*Função pra descobrir o elemento do cetro*/
function cetro() {
  elemento = rolldice(1, 4)

  if(elemento == 1) {
    return "Cetro elemental de ácido"
  } else if (elemento == 2) {
    return "Cetro elemental de eletricidade"
  } else if (elemento == 3) {
    return "Cetro elemental de fogo"
  } else {
    return "Cetro elemental de frio"
  }
}

/*Função para descobrir a escola do tomo*/
function tomo() {
  escola = rolldice(1, 8)

  if(escola == 1) {
    return "Tomo hermético de abjuração"
  } else if (escola == 2) {
    return "Tomo hermético de adivinhação"
  } else if (escola == 3) {
    return "Tomo hermético de convocação"
  } else if (escola == 4) {
    return "Tomo hermético de encantamento"
  } else if (escola == 5) {
    return "Tomo hermético de evocação"
  } else if (escola == 6) {
    return "Tomo hermético de ilusão"
  } else if (escola == 7) {
    return "Tomo hermético de necromancia"
  } else {
    return "Tomo hermético de transmutação"
  }
}

/*Função pra rolagem de itens diversos*/
function diverso() {
  let d100 = rolldice(1, 100)

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

/*Função para definir poções*/
function potion(num) {
  n = num
  pot = rolldice(1+n, 100+n)

  if (pot == 1) {
    return "Óleo de Abençoar Alimentos"
  } else if (pot == 2 || pot == 3) {
    return "Granada de Área Escorregadia"
  } else if (pot >= 4 && pot <= 6) {
    return "Óleo de Arma Mágica"
  } else if (pot == 7) {
    return "Poção de Compreensão"
  } else if (pot >= 8 && pot <= 15) {
    return "Poção de Curar Ferimentos (2d8+2)"
  } else if (pot >= 16 && pot <= 18) {
    return "Poção de Disfarce Ilusório"
  } else if (pot == 19 || pot == 20) {
    return "Óleo de Escuridão"
  } else if (pot == 21 || pot == 22) {
    return "Óleo de Luz"
  } else if (pot == 23 || pot == 24) {
    return "Granada de Névoa"
  } else if (pot == 25 || pot == 26) {
    return "Poção de Primor Atlético"
  } else if (pot == 27 || pot == 28) {
    return "Poção de Proteção Divina"
  } else if (pot == 29 || pot == 30) {
    return "Poção de Resistência a Energia"
  } else if (pot == 31 || pot == 32) {
    return "Poção de Sono"
  } else if (pot == 33) {
    return "Poção de Suporte Ambiental"
  } else if (pot == 34) {
    return "Óleo de Tranca Arcana"
  } else if (pot == 35) {
    return "Poção de Visão Mística"
  } else if (pot == 36) {
    return "Poção de Vitalidade Fantasma"
  } else if (pot == 37 || pot == 38) {
    return "Poção de Escudo da Fé (Cena)"
  } else if (pot == 39 || pot == 40) {
    return "Poção de Alterar Tamanho"
  } else if (pot == 41 || pot == 42) {
    return "Poção de Aparência Perfeita"
  } else if (pot == 43) {
    return "Óleo de Armamento da Natureza"
  } else if (pot >= 44 && pot <= 49) {
    return "Granada de Bola de Fogo"
  } else if (pot == 50 || pot == 51) {
    return "Poção de Camuflagem Ilusória"
  } else if (pot == 52 || pot == 53) {
    return "Poção de Concentração de Combate (Cena)"
  } else if (pot >= 54 && pot <= 62) {
    return "Poção de Curar Ferimentos (4d8+4)"
  } else if (pot >= 63 && pot <= 66) {
    return "Poção de Físico Divino"
  } else if (pot == 67 || pot == 68) {
    return "Poção de Mente Divina"
  } else if (pot == 69 || pot == 70) {
    return "Poção de Metamorfose"
  } else if (pot >= 71 && pot <= 75) {
    return "Poção de Purificação"
  } else if (pot == 76 || pot == 77) {
    return "Poção de Velocidade"
  } else if (pot == 78 || pot == 79) {
    return "Óleo de Vestimenta da Fé"
  } else if (pot == 80) {
    return "Poção de Voz Divina"
  } else if (pot == 81 || pot == 82) {
    return "Óleo de Arma Mágica (bônus +3)"
  } else if (pot >= 83 && pot <= 88) {
    return "Poção de Curar Ferimentos (7d8+7)"
  } else if (pot == 89) {
    return "Poção de Físico Divino (três atributos)"
  } else if (pot >= 90 && pot <= 92) {
    return "Poção de Invisibilidade (Cena)"
  } else if (pot >= 93 && pot <= 96) {
    return "Granada de Bola de Fogo (10d6)"
  } else {
    return "Poção de Curar Ferimentos (11d8+11)"
  }
}

function riquezamenor(num) {
  let n = num
  let riqmen = rolldice(1+n, 100+n)

  if (riqmen >= 1 && riqmen <= 25) {
    return riqueza1()
  } else if (riqmen >= 26 && riqmen <= 40) {
    return riqueza2()
  } else if (riqmen >= 41 && riqmen <= 55) {
    return riqueza3()
  } else if (riqmen >= 56 && riqmen <= 70) {
    return riqueza4()
  } else if (riqmen >= 71 && riqmen <= 85) {
    return riqueza5()
  } else if (riqmen >= 86 && riqmen <= 95) {
    return riqueza6()
  } else if (riqmen >= 96 && riqmen <= 99) {
    return riqueza7()
  } else {
    return riqueza8()
  }
}

function riquezamedia(num) {
  let n = num
  let riqmed = rolldice(1+n, 100+n)

  if (riqmed >= 1 && riqmed <= 10) {
    return riqueza3()
  } else if (riqmed >= 11 && riqmed <= 30) {
    return riqueza4()
  } else if (riqmed >= 31 && riqmed <= 50) {
    return riqueza5()
  } else if (riqmed >= 51 && riqmed <= 65) {
    return riqueza6()
  } else if (riqmed >= 66 && riqmed <= 80) {
    return riqueza7()
  } else if (riqmed >= 81 && riqmed <= 90) {
    return riqueza8()
  } else if (riqmed >= 91 && riqmed <= 95) {
    return riqueza9()
  } else if (riqmed >= 96 && riqmed <= 99) {
    return riqueza10()
  } else {
    return riqueza11()
  }
}

function riquezamaior(num) {
  let n = num
  let riqmar = rolldice(1+n, 100+n)

  if (riqmar >= 1 && riqmar <= 5) {
    return riqueza5()
  } else if (riqmar >= 6 && riqmar <= 15) {
    return riqueza6()
  } else if (riqmar >= 16 && riqmar <= 25) {
    return riqueza7()
  } else if (riqmar >= 26 && riqmar <= 40) {
    return riqueza8()
  } else if (riqmar >= 41 && riqmar <= 60) {
    return riqueza9()
  } else if (riqmar >= 61 && riqmar <= 75) {
    return riqueza10()
  } else if (riqmar >= 76 && riqmar <= 85) {
    return riqueza11()
  } else if (riqmar >= 86 && riqmar <= 95) {
    return riqueza12()
  } else {
    return riqueza13()
  }
}

function riqueza1() {
  let r1 = rolldice(1, 4)
  let r2 = rolldice(1, 4)
  let r3 = rolldice(1, 4)
  let r4 = rolldice(1, 4)
  return (r1 + r2 + r3 + r4)
}

function riqueza2() {
  let r1 = rolldice(1, 4)
  return r1 * 10
}

function riqueza3() {
  let r1 = rolldice(1, 4)
  let r2 = rolldice(1, 4)
  return (r1 + r2) * 10
}

function riqueza4() {
  let r1 = rolldice(1, 6)
  let r2 = rolldice(1, 6)
  let r3 = rolldice(1, 6)
  let r4 = rolldice(1, 6)
  return (r1 + r2 + r3 + r4) * 10
}

function riqueza5() {
  let r1 = rolldice(1, 6)
  return r1 * 100
}

function riqueza6() {
  let r1 = rolldice(1, 6)
  let r2 = rolldice(1, 6)
  return (r1 + r2) * 100
}

function riqueza7() {
  let r1 = rolldice(1, 8)
  let r2 = rolldice(1, 8)
  return (r1 + r2) * 100
}

function riqueza8() {
  let r1 = rolldice(1, 10)
  let r2 = rolldice(1, 10)
  let r3 = rolldice(1, 10)
  let r4 = rolldice(1, 10)
  return (r1 + r2 + r3 + r4) * 100
}

function riqueza9() {
  let r1 = rolldice(1, 12)
  let r2 = rolldice(1, 12)
  let r3 = rolldice(1, 12)
  let r4 = rolldice(1, 12)
  let r5 = rolldice(1, 12)
  let r6 = rolldice(1, 12)
  return (r1 + r2 + r3 + r4 + r5 + r6) * 100
}

function riqueza10() {
  let r1 = rolldice(1, 10)
  let r2 = rolldice(1, 10)
  return (r1 + r2) * 1000
}

function riqueza11() {
  let r1 = rolldice(1, 8)
  let r2 = rolldice(1, 8)
  let r3 = rolldice(1, 8)
  let r4 = rolldice(1, 8)
  let r5 = rolldice(1, 8)
  let r6 = rolldice(1, 8)
  return (r1 + r2 + r3 + r4 + r5 + r6) * 1000
}

function riqueza12() {
  let r1 = rolldice(1, 10)
  return r1 * 10000
}

function riqueza13() {
  let r1 = rolldice(1, 12)
  let r2 = rolldice(1, 12)
  let r3 = rolldice(1, 12)
  let r4 = rolldice(1, 12)
  return (r1 + r2 + r3 + r4) * 10000
}

function superior(roll, e) {
  var d6 = roll
  var equiroll = e
  const madeiraTollon = ["Arco curto", "Arco longo", "Bordão", "Clava", "Lança", "Pique", "Tacape", "Escudo leve"]
  const armasMira = ["Arco curto", "Arco longo", "Besta leve", "Besta pesada", "Mosquete", "Pistola"]
  const armaduraPesada = ["Brunea", "Cota de malha", "Loriga segmentada", "Meia armadura", "Armadura completa"]
  if(d6 >= 1 && d6 <= 3) {
    suproll = aprarma()
    if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      superior(d6, equiroll)
    } else if (suproll == "Mira telescópica" && !armasMira.includes(equiroll)) {
      superior(d6, equiroll)
    } else if (suproll == "Atroz" || suproll == "Pungente" || suproll == "Harmonizada") {
      superior(d6, equiroll)
    }
    return suproll
  } else if (d6 == 4 || d6 == 5) {
    suproll = aprdura()
    if (suproll == "Sob medida") {
      superior(d6, equiroll)
    } else if (suproll == "Selada" && !armaduraPesada.includes(equiroll)) {
      superior(d6, equiroll)
    } else if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equip)) {
      superior(d6, equiroll)
    }
    return suproll
  } else {
    suproll = apreso()
    return suproll
  }
}

function superior2(roll, e, sup) {
  var d6 = roll
  var equiroll = e
  var melhor = sup
  const madeiraTollon = ["Arco curto", "Arco longo", "Bordão", "Clava", "Lança", "Pique", "Tacape", "Escudo leve"]
  const armasMira = ["Arco curto", "Arco longo", "Besta leve", "Besta pesada", "Mosquete", "Pistola"]
  const armaduraPesada = ["Brunea", "Cota de malha", "Loriga segmentada", "Meia armadura", "Armadura completa"]
  const materialEspecial = ["de Adamante", "de Aço-rubi", "de Gelo Eterno", "de Matéria Vermelha", "de Madeira Tollon", "de Mitral"]
  const incompativel = ["Precisa", "Maciça", "Reforçada", "Delicada"]
  if(d6 >= 1 && d6 <= 3) {
    suproll = aprarma()
    if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      superior2(d6, equiroll, melhor)
    } else if (suproll == "Mira telescópica" && !armasMira.includes(equiroll)) {
      superior2(d6, equiroll, melhor)
    } else if (suproll == "Atroz" && melhor != "Cruel") {
      superior2(d6, equiroll, melhor)
    } else if (suproll == "Pungente" && melhor != "Certeira") {
      superior2(d6, equiroll, melhor)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      superior2(d6, equiroll, melhor)
    } else if (melhor == "Precisa" && incompativel.includes(suproll)){
      superior2(d6, equiroll, melhor)
    } else if (melhor == "Maciça" && incompativel.includes(suproll)){
      superior2(d6, equiroll, melhor)
    }
    return suproll
  } else if (d6 == 4 || d6 == 5) {
    suproll = aprdura()
    if (suproll == "Sob medida" && melhor != "Ajustada") {
      superior2(d6, equiroll, melhor)
    } else if (suproll == "Selada" && !armaduraPesada.includes(equiroll)) {
      superior2(d6, equiroll, melhor)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      superior2(d6, equiroll, melhor)
    } else if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      superior2(d6, equiroll, melhor)
    } else if (melhor == "Delicada" && incompativel.includes(suproll)){
      superior2(d6, equiroll, melhor)
    } else if (melhor == "Reforçada" && incompativel.includes(suproll)){
      superior2(d6, equiroll, melhor)
    }
    return suproll
  } else {
    suproll = apreso()
    if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      superior2(d6, equiroll, melhor)
    }
    return suproll
  }
}

function superior3(roll, e, sup, sup2) {
  var d6 = roll
  var equiroll = e
  var melhor = sup
  var melhor2 = sup2
  const madeiraTollon = ["Arco curto", "Arco longo", "Bordão", "Clava", "Lança", "Pique", "Tacape", "Escudo leve"]
  const armasMira = ["Arco curto", "Arco longo", "Besta leve", "Besta pesada", "Mosquete", "Pistola"]
  const armaduraPesada = ["Brunea", "Cota de malha", "Loriga segmentada", "Meia armadura", "Armadura completa"]
  const materialEspecial = ["de Adamante", "de Aço-rubi", "de Gelo Eterno", "de Matéria Vermelha", "de Madeira Tollon", "de Mitral"]
  const incompativel = ["Precisa", "Maciça", "Reforçada", "Delicada"]
  if(d6 >= 1 && d6 <= 3) {
    suproll = aprarma()
    if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Mira telescópica" && !armasMira.includes(equiroll)) {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Atroz" && melhor != "Cruel") {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Pungente" && melhor != "Certeira") {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor == "Precisa" && incompativel.includes(suproll)){
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor == "Maciça" && incompativel.includes(suproll)){
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor2 == "Precisa" && incompativel.includes(suproll)){
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor2 == "Maciça" && incompativel.includes(suproll)){
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
      superior3(d6, equiroll, melhor, melhor2)
    }
    return suproll
  } else if (d6 == 4 || d6 == 5) {
    suproll = aprdura()
    if (suproll == "Sob medida" && melhor != "Ajustada") {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Selada" && !armaduraPesada.includes(equiroll)) {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor == "Delicada" && incompativel.includes(suproll)){
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor == "Reforçada" && incompativel.includes(suproll)){
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor2 == "Delicada" && incompativel.includes(suproll)){
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor2 == "Reforçada" && incompativel.includes(suproll)){
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
      superior3(d6, equiroll, melhor, melhor2)
    }
    return suproll
  } else {
    suproll = apreso()
    if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
      superior3(d6, equiroll, melhor, melhor2)
    }
    return suproll
  }
}

function aprarma() {
  var armaapr = rolldice(1, 100)

  if(armaapr >= 1 && armaapr <= 10) {
    return "Atroz"
  } else if (armaapr >= 11 && armaapr <= 13) {
    return "Banhada a ouro"
  } else if (armaapr >= 14 && armaapr <= 23) {
    return "Certeira"
  } else if (armaapr >= 24 && armaapr <= 26) {
    return "Cravejada de gemas"
  } else if (armaapr >= 27 && armaapr <= 36) {
    return "Cruel"
  } else if (armaapr >= 37 && armaapr <= 39) {
    return "Discreta"
  } else if (armaapr >= 40 && armaapr <= 44) {
    return "Equilibrada"
  } else if (armaapr >= 45 && armaapr <= 48) {
    return "Harmonizada"
  } else if (armaapr >= 49 && armaapr <= 53) {
    return "Injeção Alquímica"
  } else if (armaapr == 54 || armaapr == 55) {
    return "Macabra"
  } else if (armaapr >= 56 && armaapr <= 65) {
    return "Maciça"
  } else if (armaapr >= 66 && armaapr <= 75) {
    return materialespecial()
  } else if (armaapr >= 76 && armaapr <= 80) {
    return "Mira telescópica"
  } else if (armaapr >= 81 && armaapr <= 90) {
    return "Precisa"
  } else {
    return "Pungente"
  }
}

function aprdura() {
  var duraapr = rolldice(1, 100)

  if(duraapr >= 1 && duraapr <= 15) {
    return "Ajustada"
  } else if (duraapr >= 16 && duraapr <= 19) {
    return "Banhada a ouro"
  } else if (duraapr >= 20 && duraapr <= 23) {
    return "Cravejada de gemas"
  } else if (duraapr >= 24 && duraapr <= 28) {
    return "Delicada"
  } else if (duraapr >= 29 && duraapr <= 32) {
    return "Discreta"
  } else if (duraapr >= 33 && duraapr <= 37) {
    return "com Espinhos"
  } else if (duraapr >= 38 && duraapr <= 40) {
    return "Macabra"
  } else if (duraapr >= 41 && duraapr <= 50) {
    return materialespecial()
  } else if (duraapr >= 51 && duraapr <= 55) {
    return "Polida"
  } else if (duraapr >= 56 && duraapr <= 80) {
    return "Reforçada"
  } else if (duraapr >= 81 && duraapr <= 90) {
    return "Selada"
  } else {
    return "Sob medida"
  }
}

function apreso() {
  var esoapr = rolldice(1, 100)

  if(esoapr >= 1 && esoapr <= 4) {
    return "Banhada a ouro"
  } else if (esoapr >= 5 && esoapr <= 8) {
    return "Cravejado de gemas"
  } else if (esoapr >= 9 && esoapr <= 12) {
    return "Discreto"
  } else if (esoapr >= 13 && esoapr <= 27) {
    return "Energético"
  } else if (esoapr >= 28 && esoapr <= 42) {
    return "Harmonizado"
  } else if (esoapr >= 43 && esoapr <= 45) {
    return "Macabra"
  } else if (esoapr >= 46 && esoapr <= 54) {
    return materialespecial()
  } else if (esoapr >= 55 && esoapr <= 70) {
    return "Poderoso"
  } else if (esoapr >= 71 && esoapr <= 85) {
    return "Canalizador"
  } else {
    return "Vigilante"
  }
}

function materialespecial(){
  material = rolldice(1, 6)

  if(material == 1){
    return "de Aço-rubi"
  } else if(material == 2) {
    return "de Adamante"
  } else if(material == 3) {
    return "de Gelo Eterno"
  } else if(material == 4) {
    return "de Madeira Tollon"
  } else if(material == 5) {
    return "de Matéria Vermelha"
  } else {
    return "de Mitral"
  }
}


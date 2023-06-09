function aparece() {
  if (escondido.style.display == 'block') {
    escondido.style.display = 'none'
  } else {
    escondido.style.display = 'block'
  }
}

/*Declaração de variaveis e onde os primeiros d100 são rolados*/
function gerar() {
  var res = document.getElementById('res')
  var itemg = rolldice(1, 100)
  var moneyg = rolldice(1, 100)
  var nd = document.getElementById('nd')
  var secreto = document.getElementById('secreto')
  var hidden = document.getElementById('hidden')
  hidden.innerHTML = ''
  secreto.innerHTML = `Sua rolagem de Dinheiro foi ${moneyg} <br>Sua rolagem de Item foi ${itemg} <br>`

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
    } else if (moneyg <= 70) {
      gmoneyg = "1d6x10 TC"
      let d1 = rolldice(1, 6)
      let d2 = 0
      let dr = 10
      let ts = " TC"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 10 TC <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 95) {
      gmoneyg = "1d4x100 TC"
      let d1 = rolldice(1, 4)
      let d2 = 0
      let dr = 100
      let ts = " TC"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 100 TC <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d6x10 T$"
      let d1 = rolldice(1, 6)
      let d2 = 0
      let dr = 10
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 10 T$ <br>`
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 50) { /*Item ND 1/4*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 75) {
      gitemg = "Diverso"
      itemr = diverso()
    } else {
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      itemr = equipamento(roll)
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if(nd.value == "ND 1/2") { /*Dinheiro ND 1/2*/
    if(moneyg <= 25) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 70) {
      gmoneyg = "2d6x10 TC"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let dr = 10
      let ts = " TC"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 10 TC <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 95) {
      gmoneyg = "2d8x10 T$"
      let d1 = rolldice(1, 8)
      let d2 = rolldice(1, 8)
      let dr = 10
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 10 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d4x100 T$"
      let d1 = rolldice(1, 4)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 100 T$ <br>`
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 45) { /*Item ND 1/2*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 70) {
      gitemg = "Diverso"
      itemr = diverso()
    } else {
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      itemr = equipamento(roll)
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 1") {
    if(moneyg <= 20) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 70) {
      gmoneyg = "3d8x10 T$"
      let d1 = rolldice(1, 8)
      let d2 = rolldice(1, 8)
      let d3 = rolldice(1, 8)
      let dr = 10
      let ts = " T$"
      let tsres = (d1 + d2 + d3) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} x 10 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 95) {
      gmoneyg = "4d12x10 T$"
      let d1 = rolldice(1, 12)
      let d2 = rolldice(1, 12)
      let d3 = rolldice(1, 12)
      let d4 = rolldice(1, 12)
      let dr = 10
      let ts = " T$"
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 10 T$ <br>`
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
    } else if(itemg <= 65) {
      gitemg = "Diverso"
      itemr = diverso()
    } else if (itemg <= 90){
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
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
    } else if (moneyg <= 55) {
      gmoneyg = "3d10x10 T$"
      let d1 = rolldice(1, 10)
      let d2 = rolldice(1, 10)
      let d3 = rolldice(1, 10)
      let dr = 10
      let ts = " T$"
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} x 10 T$ <br>`
      let tsres = (d1 + d2 + d3) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 85) {
      gmoneyg = "2d4x100 T$"
      let d1 = rolldice(1, 4)
      let d2 = rolldice(1, 4)
      let dr = 100
      let ts = " T$"
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 100 T$ <br>`
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 95) {
      gmoneyg = "2d6+1x100 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let dr = 100
      let ts = " T$"
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + 1 x 10 T$ <br>`
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
    } else if(itemg <= 40) {
      gitemg = "Diverso"
      itemr = diverso()
    } else if (itemg <= 70){
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      itemr = equipamento(roll)
    } else if (itemg <= 90) {
      gitemg = "1 poção"
      itemr = potion(0)
    } else {
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll)
      itemr = `${equip} ${aprimoramento1}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 3") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 20) {
      gmoneyg = "4d12x10 T$"
      let d1 = rolldice(1, 12)
      let d2 = rolldice(1, 12)
      let d3 = rolldice(1, 12)
      let d4 = rolldice(1, 12)
      let dr = 10
      let ts = " T$"
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 10 T$ <br>`
      let tsres = (d1 + d2 + d3 + d4) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 60) {
      gmoneyg = "1d4x100 T$"
      let d1 = rolldice(1, 4)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 100 T$ <br>`
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 90) {
      gmoneyg = "1d8x10 TO"
      let d1 = rolldice(1, 8)
      let d2 = 0
      let dr = 10
      let ts = " TO"
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 10 TO <br>`
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
     }else {
      gmoneyg = "1d3 riquezas menores"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} riquezas menores <br>`
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
    } else if(itemg <= 35) {
      gitemg = "Diverso"
      itemr = diverso()
    } else if (itemg <= 60){
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      itemr = equipamento(roll)
    } else if (itemg <= 85) {
      gitemg = "1 poção"
      itemr = potion(0)
    } else {
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll)
      itemr = `${equip} ${aprimoramento1}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 4") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 50) {
      gmoneyg = "1d6x100 T$"
      let d1 = rolldice(1, 6)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 100 T$ <br>`
      let tsres = (d1 + d2) * dr
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 80) {
      gmoneyg = "1d12x100 T$"
      let d1 = rolldice(1, 12)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 100 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 90) {
      gmoneyg = "1 riqueza menor"
      let d1 = riquezamenor(20)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
     }else {
      gmoneyg = "1d3 riquezas menores"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} riquezas menores <br>`
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
    } else if(itemg <= 30) {
      gitemg = "Diverso"
      itemr = diverso()
    } else if (itemg <= 55){
      gitemg = "Equipamento"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      itemr = equipamento(roll)
    } else if (itemg <= 80) {
      gitemg = "1 poção"
      itemr = potion(20)
    } else {
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll)
      itemr = `${equip} ${aprimoramento1}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 5") {
    if(moneyg <= 15) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 65) {
      gmoneyg = "1d8x100 T$"
      let d1 = rolldice(1, 8)
      let d2 = 0
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 100 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 95) {
      gmoneyg = "3d4x10 TO"
      let d1 = rolldice(1, 4)
      let d2 = rolldice(1, 4)
      let d3 = rolldice(1, 4)
      let dr = 10
      let ts = " TO"
      let tsres = (d1 + d2 + d3) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} x 10 TO <br>`
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
    } else if(itemg <= 70) {
      gitemg = "1 poção"
      itemr = potion(0)
    } else if (itemg <= 90){
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      itemr = `${equip} ${aprimoramento1}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item superior (2 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)

      while (aprimoramento2 === aprimoramento1) {
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 6") {
    if(moneyg <= 15) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 60) {
      gmoneyg = "2d6x100 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 100 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 90) {
      gmoneyg = "2d10x100 T$"
      let d1 = rolldice(1, 10)
      let d2 = rolldice(1, 10)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 100 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d3+1 riquezas menores"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} + 1 riquezas menores <br>`
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
    } else if(itemg <= 65) {
      gitemg = "1 poção"
      itemr = potion(20)
    } else if (itemg <= 95){
      gitemg = "Item superior (1 Melhoria)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      itemr = `${equip} ${aprimoramento1}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item superior (2 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)

      while (aprimoramento2 === aprimoramento1) {
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 7") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 60) {
      gmoneyg = "2d8x100 T$"
      let d1 = rolldice(1, 8)
      let d2 = rolldice(1, 8)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 100 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 90) {
      gmoneyg = "2d12x10 TO"
      let d1 = rolldice(1, 12)
      let d2 = rolldice(1, 12)
      let dr = 10
      let ts = " TO"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 10 TO <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d4+1 riquezas menores"
      let riq3 = rolldice(1, 4)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} + 1 riquezas menores <br>`
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
    } else if(itemg <= 60) {
      gitemg = "1d3 poções"
      let potr = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${potr} poções <br>`
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
    } else if (itemg <= 90){
      gitemg = "Item superior (2 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)

      while (aprimoramento2 === aprimoramento1) {
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item superior (3 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)

      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2} e ${aprimoramento3}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 8") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 55) {
      gmoneyg = "2d10x100 T$"
      let d1 = rolldice(1, 10)
      let d2 = rolldice(1, 10)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 100 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 95) {
      gmoneyg = "1d4+1 riquezas menores"
      let riq3 = rolldice(1, 4)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} + 1 riquezas menores <br>`
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
    } else {
      gmoneyg = "1 riqueza média"
      let d1 = riquezamedia(20)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
      }

    if(itemg <= 20) { /*Item ND 8*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 75) {
      gitemg = "1d3 poções"
      let potr = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${potr} poções <br>`
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
    } else if (itemg <= 95){
      gitemg = "Item superior (2 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)

      while (aprimoramento2 === aprimoramento1) {
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item superior (3 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)

      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2} e ${aprimoramento3}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 9") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 35) {
      gmoneyg = "1 riqueza média"
      let d1 = riquezamedia(0)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 85) {
      gmoneyg = "4d6x100 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let d3 = rolldice(1, 6)
      let d4 = rolldice(1, 6)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2 + d3 + d4) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 100 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d3 riquezas médias"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} riquezas médias <br>`
      if(riq3 == 1) {
        let d1 = riquezamedia(0)
        let d2 = 0
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
        moneyr = `${tsres} ${ts}`
      }
    }
    if(itemg <= 20) { /*Item ND 9*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 70) {
      gitemg = "1 poção"
      itemr = potion(20)
    } else if (itemg <= 95){
      gitemg = "Item superior (3 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)

      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2} e ${aprimoramento3}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item Mágico (Menor)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Menor rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        if (!encantosA.includes(encantamento)) {
          hidden.innerHTML = ''
          itemf = encantamento
        } else {
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
          itemf = `${item} ${encantamento}`
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        if (!encantosE.includes(encantamento)) {
          hidden.innerHTML = ''
          itemf = encantamento
        } else {
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
          itemf = `${item} ${encantamento}`
        }
      } else {
        itemf = acessorioMenor()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 10") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 30) {
      gmoneyg = "4d6x100 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let d3 = rolldice(1, 6)
      let d4 = rolldice(1, 6)
      let dr = 100
      let ts = " T$"
      let tsres = (d1 + d2 + d3 + d4) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 100 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 85) {
      gmoneyg = "4d10x10 TO"
      let d1 = rolldice(1, 10)
      let d2 = rolldice(1, 10)
      let d3 = rolldice(1, 10)
      let d4 = rolldice(1, 10)
      let dr = 10
      let ts = " TO"
      let tsres = (d1 + d2 + d3 + d4) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 10 TO <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d3+1 riquezas médias"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} + 1 riquezas médias <br>`
      if(riq3 == 1) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let d4 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4)
        moneyr = `${tsres} ${ts}`
      }
    }
    if(itemg <= 50) { /*Item ND 10*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 75) {
      gitemg = "1d3+1 poções"
      let potr = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${potr} + 1 poções <br>`
      if (potr == 1) {
        pot1 = potion(0)
        pot2 = potion(0)
        itemr = `${pot1} e ${pot2}`
      } else if (potr == 2) {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        itemr = `${pot1}, ${pot2} e ${pot3}`
      } else {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        pot4 = potion(0)
        itemr = `${pot1}, ${pot2}, ${pot3} e ${pot4}`
      }
    } else if (itemg <= 90){
      gitemg = "Item superior (3 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)

      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2} e ${aprimoramento3}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item Mágico (Menor)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Menor rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        if (!encantosA.includes(encantamento)) {
          hidden.innerHTML = ''
          itemf = encantamento
        } else {
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
          itemf = `${item} ${encantamento}`
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        if (!encantosE.includes(encantamento)) {
          hidden.innerHTML = ''
          itemf = encantamento
        } else {
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
          itemf = `${item} ${encantamento}`
        }
      } else {
        itemf = acessorioMenor()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 11") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 45) {
      gmoneyg = "2d4x1000 T$"
      let d1 = rolldice(1, 4)
      let d2 = rolldice(1, 4)
      let dr = 1000
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 1000 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 85) {
      gmoneyg = "1d3 riquezas médias"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} riquezas médias <br>`
      if(riq3 == 1) {
        let d1 = riquezamedia(0)
        let d2 = 0
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
        moneyr = `${tsres} ${ts}`
      }
    } else {
      gmoneyg = "2d6x100 TO"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let dr = 100
      let ts = " TO"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 100 TO <br>`
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 45) { /*Item ND 11*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 70) {
      gitemg = "1d4+1 poções"
      let potr = rolldice(1, 4)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${potr} + 1 poções <br>`
      if (potr == 1) {
        pot1 = potion(0)
        pot2 = potion(0)
        itemr = `${pot1} e ${pot2}`
      } else if (potr == 2) {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        itemr = `${pot1}, ${pot2} e ${pot3}`
      } else if (potr == 3) {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        pot4 = potion(0)
        itemr = `${pot1}, ${pot2}, ${pot3} e ${pot4}`
      } else {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        pot4 = potion(0)
        pot5 = potion(0)
        itemr = `${pot1}, ${pot2}, ${pot3}, ${pot4} e ${pot5}`
      }
    } else if (itemg <= 90){
      gitemg = "Item superior (3 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)

      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2} e ${aprimoramento3}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item Mágico (Menor)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Menor rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        if (!encantosA.includes(encantamento)) {
          hidden.innerHTML = ''
          itemf = encantamento
        } else {
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
          itemf = `${item} ${encantamento}`
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        if (!encantosE.includes(encantamento)) {
          hidden.innerHTML = ''
          itemf = encantamento
        } else {
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
          itemf = `${item} ${encantamento}`
        }
      } else {
        itemf = acessorioMenor()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 12") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 45) {
      gmoneyg = "1 riqueza média"
      let d1 = riquezamedia(20)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 80) {
      gmoneyg = "2d6x1000 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let dr = 1000
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 1000 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d4+1 riquezas médias"
      let riq3 = rolldice(1, 4)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} + 1 riquezas médias <br>`
      if(riq3 == 1) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
      moneyr = `${tsres} ${ts}`
      } else if (riq3 == 3) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let d4 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4)
        moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let d4 = riquezamedia(0)
        let d5 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4 + d5)
        moneyr = `${tsres} ${ts}`
      }
    }

    if(itemg <= 45) { /*Item ND 12*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 70) {
      gitemg = "1d3+1 poções"
      let potr = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${potr} + 1 poções <br>`
      if (potr == 1) {
        pot1 = potion(20)
        pot2 = potion(20)
        itemr = `${pot1} e ${pot2}`
      } else if (potr == 2) {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        itemr = `${pot1}, ${pot2} e ${pot3}`
      } else {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        pot4 = potion(20)
        itemr = `${pot1}, ${pot2}, ${pot3} e ${pot4}`
      }
    } else if (itemg <= 85){
      gitemg = "Item superior (4 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)

      while (aprimoramento4 === aprimoramento1 || aprimoramento4 === aprimoramento2 || aprimoramento4 === aprimoramento3) {
        aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}, ${aprimoramento3} e ${aprimoramento4}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item Mágico (Menor)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Menor rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        if (!encantosA.includes(encantamento)) {
          hidden.innerHTML = ''
          itemf = encantamento
        } else {
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
          itemf = `${item} ${encantamento}`
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        if (!encantosE.includes(encantamento)) {
          hidden.innerHTML = ''
          itemf = encantamento
        } else {
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
          itemf = `${item} ${encantamento}`
        }
      } else {
        itemf = acessorioMenor()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 13") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 45) {
      gmoneyg = "4d4x1000 T$"
      let d1 = rolldice(1, 4)
      let d2 = rolldice(1, 4)
      let d3 = rolldice(1, 4)
      let d4 = rolldice(1, 4)
      let dr = 1000
      let ts = " T$"
      let tsres = (d1 + d2 + d3 + d4) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 1000 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 80) {
      gmoneyg = "1d3+1 riquezas médias"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} + 1 riquezas médias <br>`
      if(riq3 == 1) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let d4 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4)
        moneyr = `${tsres} ${ts}`
      }
    } else {
      gmoneyg = "4d6x100 TO"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let d3 = rolldice(1, 6)
      let d4 = rolldice(1, 6)
      let dr = 100
      let ts = " TO"
      let tsres = (d1 + d2 + d3 + d4) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 100 TO <br>`
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 40) { /*Item ND 13*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 65) {
      gitemg = "1d4+1 poções"
      let potr = rolldice(1, 4)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${potr} + 1 poções <br>`
      if (potr == 1) {
        pot1 = potion(20)
        pot2 = potion(20)
        itemr = `${pot1} e ${pot2}`
      } else if (potr == 2) {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        itemr = `${pot1}, ${pot2} e ${pot3}`
      } else if (potr == 3) {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        pot4 = potion(20)
        itemr = `${pot1}, ${pot2}, ${pot3} e ${pot4}`
      } else {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        pot4 = potion(20)
        pot5 = potion(20)
        itemr = `${pot1}, ${pot2}, ${pot3}, ${pot4} e ${pot5}`
      }
    } else if (itemg <= 95){
      gitemg = "Item superior (4 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)

      while (aprimoramento4 === aprimoramento1 || aprimoramento4 === aprimoramento2 || aprimoramento4 === aprimoramento3) {
        aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}, ${aprimoramento3} e ${aprimoramento4}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item Mágico (Médio)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Médio rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)
        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)

        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMedio()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 14") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 45) {
      gmoneyg = "1d3+1 riquezas médias"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} + 1 riquezas médias <br>`
      if(riq3 == 1) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamedia(0)
        let d2 = riquezamedia(0)
        let d3 = riquezamedia(0)
        let d4 = riquezamedia(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4)
        moneyr = `${tsres} ${ts}`
      }
    } else if (moneyg <= 80) {
      gmoneyg = "3d6x1000 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let d3 = rolldice(1, 6)
      let dr = 1000
      let ts = " T$"
      let tsres = (d1 + d2 + d3) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} x 1000 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1 riqueza maior"
      let d1 = riquezamaior(0)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 40) { /*Item ND 14*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 65) {
      gitemg = "1d4+1 poções"
      let potr = rolldice(1, 4)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${potr} + 1 poções <br>`
      if (potr == 1) {
        pot1 = potion(20)
        pot2 = potion(20)
        itemr = `${pot1} e ${pot2}`
      } else if (potr == 2) {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        itemr = `${pot1}, ${pot2} e ${pot3}`
      } else if (potr == 3) {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        pot4 = potion(20)
        itemr = `${pot1}, ${pot2}, ${pot3} e ${pot4}`
      } else {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        pot4 = potion(20)
        pot5 = potion(20)
        itemr = `${pot1}, ${pot2}, ${pot3}, ${pot4} e ${pot5}`
      }
    } else if (itemg <= 90){
      gitemg = "Item superior (4 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)

      while (aprimoramento4 === aprimoramento1 || aprimoramento4 === aprimoramento2 || aprimoramento4 === aprimoramento3) {
        aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}, ${aprimoramento3} e ${aprimoramento4}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item Mágico (Médio)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Médio rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)

        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)

        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMedio()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 15") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 45) {
      gmoneyg = "1 riqueza média"
      let d1 = riquezamedia(20)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 80) {
      gmoneyg = "2d10x1000 T$"
      let d1 = rolldice(1, 10)
      let d2 = rolldice(1, 10)
      let dr = 1000
      let ts = " T$"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 1000 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d4x1000 TO"
      let d1 = rolldice(1, 4)
      let d2 = 0
      let dr = 1000
      let ts = " TO"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 1000 TO <br>`
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 35) { /*Item ND 15*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 45) {
      gitemg = "1d6+1 poções"
      let potr = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${potr} + 1 poções <br>`
      if (potr == 1) {
        pot1 = potion(0)
        pot2 = potion(0)
        itemr = `${pot1} e ${pot2}`
      } else if (potr == 2) {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        itemr = `${pot1}, ${pot2} e ${pot3}`
      } else if (potr == 3) {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        pot4 = potion(0)
        itemr = `${pot1}, ${pot2}, ${pot3} e ${pot4}`
      } else if (potr == 4) {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        pot4 = potion(0)
        pot5 = potion(0)
        itemr = `${pot1}, ${pot2}, ${pot3}, ${pot4} e ${pot5}`
      } else if (potr == 5) {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        pot4 = potion(0)
        pot5 = potion(0)
        pot6 = potion(0)
        itemr = `${pot1}, ${pot2}, ${pot3}, ${pot4}, ${pot5} e ${pot6}`
      } else {
        pot1 = potion(0)
        pot2 = potion(0)
        pot3 = potion(0)
        pot4 = potion(0)
        pot5 = potion(0)
        pot6 = potion(0)
        pot7 = potion(0)
        itemr = `${pot1}, ${pot2}, ${pot3}, ${pot4}, ${pot5}, ${pot6} e ${pot7}`
      }
    } else if (itemg <= 85){
      gitemg = "Item superior (4 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)

      while (aprimoramento4 === aprimoramento1 || aprimoramento4 === aprimoramento2 || aprimoramento4 === aprimoramento3) {
        aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}, ${aprimoramento3} e ${aprimoramento4}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item Mágico (Médio)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Médio rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)

        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)

        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMedio()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 16") {
    if(moneyg <= 10) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 40) {
      gmoneyg = "3d6x1000 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let d3 = rolldice(1, 6)
      let dr = 1000
      let ts = " T$"
      let tsres = (d1 + d2 + d3) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} x 1000 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 75) {
      gmoneyg = "3d10x100 TO"
      let d1 = rolldice(1, 10)
      let d2 = rolldice(1, 10)
      let d3 = rolldice(1, 10)
      let dr = 100
      let ts = " TO"
      let tsres = (d1 + d2 + d3) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} x 100 TO <br>`
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d3 riquezas maiores"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} riquezas maiores <br>`
      if(riq3 == 1) {
        let d1 = riquezamaior(0)
        let d2 = 0
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamaior(0)
        let d2 = riquezamaior(0)
        let ts = " T$"
        let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamaior(0)
        let d2 = riquezamaior(0)
        let d3 = riquezamaior(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
        moneyr = `${tsres} ${ts}`
      }
    }

    if(itemg <= 35) { /*Item ND 16*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 45) {
      gitemg = "1d6+1 poções"
      let potr = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${roll} + 1 poções <br>`
      if (potr == 1) {
        pot1 = potion(20)
        pot2 = potion(20)
        itemr = `${pot1} e ${pot2}`
      } else if (potr == 2) {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        itemr = `${pot1}, ${pot2} e ${pot3}`
      } else if (potr == 3) {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        pot4 = potion(20)
        itemr = `${pot1}, ${pot2}, ${pot3} e ${pot4}`
      } else if (potr == 4) {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        pot4 = potion(20)
        pot5 = potion(20)
        itemr = `${pot1}, ${pot2}, ${pot3}, ${pot4} e ${pot5}`
      } else if (potr == 5) {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        pot4 = potion(20)
        pot5 = potion(20)
        pot6 = potion(20)
        itemr = `${pot1}, ${pot2}, ${pot3}, ${pot4}, ${pot5} e ${pot6}`
      } else {
        pot1 = potion(20)
        pot2 = potion(20)
        pot3 = potion(20)
        pot4 = potion(20)
        pot5 = potion(20)
        pot6 = potion(20)
        pot7 = potion(20)
        itemr = `${pot1}, ${pot2}, ${pot3}, ${pot4}, ${pot5}, ${pot6} e ${pot7}`
      }
    } else if (itemg <= 80){
      gitemg = "Item superior (4 Melhorias)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu equipamento rolou ${roll} <br>`
      equip = equipamento(roll)
      aprimoramento1 = superior(roll, equip)
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento2 = superior2(roll, equip, aprimoramento1)
      while (aprimoramento2 === aprimoramento1) {
        aprimoramento2 = superior2(roll, equip, aprimoramento1)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      while (aprimoramento3 === aprimoramento1 || aprimoramento3 === aprimoramento2) {
        aprimoramento3 = superior3(roll, equip, aprimoramento2, aprimoramento1)
      }
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
      aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)

      while (aprimoramento4 === aprimoramento1 || aprimoramento4 === aprimoramento2 || aprimoramento4 === aprimoramento3) {
        aprimoramento4 = superior4(roll, equip, aprimoramento3, aprimoramento2, aprimoramento1)
      }

      itemr = `${equip} ${aprimoramento1}, ${aprimoramento2}, ${aprimoramento3} e ${aprimoramento4}`
      secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
    } else {
      gitemg = "Item Mágico (Médio)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Médio rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)

        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)

        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMedio()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 17") {
    if(moneyg <= 5) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 40) {
      gmoneyg = "4d6x1000 T$"
      let d1 = rolldice(1, 6)
      let d2 = rolldice(1, 6)
      let d3 = rolldice(1, 6)
      let d4 = rolldice(1, 6)
      let dr = 1000
      let ts = " T$"
      let tsres = (d1 + d2 + d3 + d4) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 1000 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 75) {
      gmoneyg = "1d3 riquezas médias"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} riquezas médias <br>`
      if(riq3 == 1) {
        let d1 = riquezamedia(20)
        let d2 = 0
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamedia(20)
        let d2 = riquezamedia(20)
        let ts = " T$"
        let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamedia(20)
        let d2 = riquezamedia(20)
        let d3 = riquezamedia(20)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
        moneyr = `${tsres} ${ts}`
      }
    } else {
      gmoneyg = "2d4x1000 TO"
      let d1 = rolldice(1, 4)
      let d2 = rolldice(1, 4)
      let dr = 1000
      let ts = " TO"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 1000 TO <br>`
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 20) { /*Item ND 17*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if (itemg <= 40) {
      gitemg = "Item Mágico (Menor)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Menor rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMenor()
      }
      itemr = itemf
    } else if (itemg <= 80){
      gitemg = "Item Mágico (Médio)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Médio rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)

        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)

        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMedio()
      }
      itemr = itemf
    } else {
      gitemg = "Item Mágico (Maior)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Maior rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento3 = encanto3(1, item, encantamento, encantamento2)

        while (encantamento3 == encantamento || encantamento3 == encantamento2) {
          hidden.innerHTML = ''
          encantamento3 = encanto3(1, item, encantamento, encantamento2)
        }

        while (!encantosA.includes(encantamento3)){
          hidden.innerHTML = ''
          encantamento3 = encanto3(1, item, encantamento, encantamento2)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}, ${encantamento2} e ${encantamento3}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento3 = encanto3(2, item, encantamento, encantamento2)

        while (encantamento3 == encantamento || encantamento3 == encantamento2){
          encantamento3 = encanto3(2, item, encantamento, encantamento2)
        }

        while (!encantosE.includes(encantamento3)){
          encantamento3 = encanto3(2, item, encantamento, encantamento2)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}, ${encantamento2} e ${encantamento3}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMaior()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 18") {
    if(moneyg <= 5) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 40) {
      gmoneyg = "4d10x1000 T$"
      let d1 = rolldice(1, 10)
      let d2 = rolldice(1, 10)
      let d3 = rolldice(1, 10)
      let d4 = rolldice(1, 10)
      let dr = 1000
      let ts = " T$"
      let tsres = (d1 + d2 + d3 + d4) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 1000 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 75) {
      gmoneyg = "1 riqueza maior"
      let d1 = riquezamaior(0)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d3+1 riquezas maiores"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} + 1 riquezas maiores <br>`
      if(riq3 == 1) {
        let d1 = riquezamaior(0)
        let d2 = riquezamaior(0)
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamaior(0)
        let d2 = riquezamaior(0)
        let d3 = riquezamaior(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamaior(0)
        let d2 = riquezamaior(0)
        let d3 = riquezamaior(0)
        let d4 = riquezamaior(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4)
        moneyr = `${tsres} ${ts}`
      }
    }

    if(itemg <= 15) { /*Item ND 18*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 40) {
      gitemg = "Item Mágico (Menor)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Menor rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMenor()
      }
      itemr = itemf
    } else if (itemg <= 70){
      gitemg = "Item Mágico (Médio)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Médio rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)

        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)

        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMedio()
      }
      itemr = itemf
    } else {
      gitemg = "Item Mágico (Maior)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Maior rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento3 = encanto3(1, item, encantamento, encantamento2)

        while (encantamento3 == encantamento || encantamento3 == encantamento2) {
          hidden.innerHTML = ''
          encantamento3 = encanto3(1, item, encantamento, encantamento2)
        }

        while (!encantosA.includes(encantamento3)){
          hidden.innerHTML = ''
          encantamento3 = encanto3(1, item, encantamento, encantamento2)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}, ${encantamento2} e ${encantamento3}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento3 = encanto3(2, item, encantamento, encantamento2)

        while (encantamento3 == encantamento || encantamento3 == encantamento2){
          encantamento3 = encanto3(2, item, encantamento, encantamento2)
        }

        while (!encantosE.includes(encantamento3)){
          encantamento3 = encanto3(2, item, encantamento, encantamento2)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}, ${encantamento2} e ${encantamento3}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMaior()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 19") {
    if(moneyg <= 5) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 40) {
      gmoneyg = "4d12x1000 T$"
      let d1 = rolldice(1, 12)
      let d2 = rolldice(1, 12)
      let d3 = rolldice(1, 12)
      let d4 = rolldice(1, 12)
      let dr = 1000
      let ts = " T$"
      let tsres = (d1 + d2 + d3 + d4) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} + ${d3} + ${d4} x 1000 T$ <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 75) {
      gmoneyg = "1 riqueza maior"
      let d1 = riquezamaior(20)
      let d2 = 0
      let ts = " T$"
      let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
    } else {
      gmoneyg = "1d12x1000 TO"
      let d1 = rolldice(1, 12)
      let d2 = 0
      let dr = 1000
      let ts = " TO"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} x 1000 TO <br>`
      moneyr = `${tsres} ${ts}`
    }

    if(itemg <= 10) { /*Item ND 19*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 40) {
      gitemg = "Item Mágico (Menor)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Menor rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMenor()
      }
      itemr = itemf
    } else if (itemg <= 60){
      gitemg = "Item Mágico (Médio)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Médio rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)

        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)

        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMedio()
      }
      itemr = itemf
    } else {
      gitemg = "Item Mágico (Maior)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Maior rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento3 = encanto3(1, item, encantamento, encantamento2)

        while (encantamento3 == encantamento || encantamento3 == encantamento2) {
          hidden.innerHTML = ''
          encantamento3 = encanto3(1, item, encantamento, encantamento2)
        }

        while (!encantosA.includes(encantamento3)){
          hidden.innerHTML = ''
          encantamento3 = encanto3(1, item, encantamento, encantamento2)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}, ${encantamento2} e ${encantamento3}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento3 = encanto3(2, item, encantamento, encantamento2)

        while (encantamento3 == encantamento || encantamento3 == encantamento2){
          encantamento3 = encanto3(2, item, encantamento, encantamento2)
        }

        while (!encantosE.includes(encantamento3)){
          encantamento3 = encanto3(2, item, encantamento, encantamento2)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}, ${encantamento2} e ${encantamento3}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMaior()
      }
      itemr = itemf
    }
    /*Mensagem final depois que tudo é rolado*/
    res.innerHTML = fimmsg()
  } else if (nd.value == "ND 20") {
    if(moneyg <= 5) {
      gmoneyg = "Nada"
      moneyr = "Nada"
    } else if (moneyg <= 40) {
      gmoneyg = "2d4x1000 TO"
      let d1 = rolldice(1, 4)
      let d2 = rolldice(1, 4)
      let dr = 1000
      let ts = " TO"
      let tsres = (d1 + d2) * dr
      secreto.innerHTML = secreto.innerHTML + `O dinheiro rolado foi ${d1} + ${d2} x 1000 TO <br>`
      moneyr = `${tsres} ${ts}`
    } else if (moneyg <= 75) {
      gmoneyg = "1d3 riquezas maiores"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} riquezas maiores <br>`
      if(riq3 == 1) {
        let d1 = riquezamaior(0)
        let d2 = 0
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamaior(0)
        let d2 = riquezamaior(0)
        let ts = " T$"
        let tsres = (d1 + d2)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamaior(0)
        let d2 = riquezamaior(0)
        let d3 = riquezamaior(0)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
        moneyr = `${tsres} ${ts}`
      }
    } else {
      gmoneyg = "1d3+1 riquezas maiores"
      let riq3 = rolldice(1, 3)
      secreto.innerHTML = secreto.innerHTML + `Você rolou ${riq3} + 1 riquezas maiores <br>`
      if(riq3 == 1) {
        let d1 = riquezamaior(20)
        let d2 = riquezamaior(20)
        let ts = " T$"
        let tsres = (d1 + d2)
        moneyr = `${tsres} ${ts}`
      } else if (riq3 == 2) {
        let d1 = riquezamaior(20)
        let d2 = riquezamaior(20)
        let d3 = riquezamaior(20)
        let ts = " T$"
        let tsres = (d1 + d2 + d3)
      moneyr = `${tsres} ${ts}`
      } else {
        let d1 = riquezamaior(20)
        let d2 = riquezamaior(20)
        let d3 = riquezamaior(20)
        let d4 = riquezamaior(20)
        let ts = " T$"
        let tsres = (d1 + d2 + d3 + d4)
        moneyr = `${tsres} ${ts}`
      }
    }

    if(itemg <= 5) { /*Item ND 20*/
      gitemg = "Nada"
      itemr = "Nada"
    } else if(itemg <= 40) {
      gitemg = "Item Mágico (Menor)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Menor rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMenor()
      }
      itemr = itemf
    } else if (itemg <= 50){
      gitemg = "Item Mágico (Médio)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Médio rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)

        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)

        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento} e ${encantamento2}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMedio()
      }
      itemr = itemf
    } else {
      gitemg = "Item Mágico (Maior)"
      roll = rolldice(1, 6)
      secreto.innerHTML = secreto.innerHTML + `Seu Item Mágico Maior rolou ${roll} <br>`
      if (roll == 1 || roll == 2) {
        const encantosA = ["Ameaçadora", "Anticriatura (Animal)", "Anticriatura (Construto)", "Anticriatura (Espírito)", "Anticriatura (Monstro)", "Anticriatura (Morto-vivo)", "Anticriatura (Uma raça humanoide)", "Arremesso", "Assassina", "Caçadora", "Congelante", "Conjuradora", "Corrosiva", "Dançarina", "Defensora", "Destruidora", "Dilacerante", "Drenante", "Elétrica", "Energética", "Excruciante", "Flamejante", "Formidável", "Lancinante", "Magnífica", "Piedosa", "Profana", "Sagrada", "Sanguinária", "Trovejante", "Tumular", "Veloz", "Venenosa"]
        item = arma()
        encantamento = encanto(1, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(1, item, encantamento)
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        while (!encantosA.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(1, item, encantamento)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento3 = encanto3(1, item, encantamento, encantamento2)

        while (encantamento3 == encantamento || encantamento3 == encantamento2) {
          hidden.innerHTML = ''
          encantamento3 = encanto3(1, item, encantamento, encantamento2)
        }

        while (!encantosA.includes(encantamento3)){
          hidden.innerHTML = ''
          encantamento3 = encanto3(1, item, encantamento, encantamento2)
        }

        if (!encantosA.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}, ${encantamento2} e ${encantamento3}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else if (roll == 3) {
        const encantosE = ["Abascanto", "Abençoado", "Acrobático", "Alado", "Animado", "Assustador", "Cáustica", "Defensor", "Escorregadio", "Esmagador", "Fantasmagórico", "Fortificado", "Gélido", "Guardião", "Hipnótico", "Ilusório", "Incandescente", "Invulnerável", "Opaco", "Protetor", "Refletor", "Relampejante", "Reluzente", "Sombrio", "Zeloso"]
        item = armadura()
        encantamento = encanto(2, item)
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento2 = encanto2(2, item, encantamento)
        while (encantamento2 == encantamento) {
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        while (!encantosE.includes(encantamento2)){
          hidden.innerHTML = ''
          encantamento2 = encanto2(2, item, encantamento)
        }
        secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        encantamento3 = encanto3(2, item, encantamento, encantamento2)

        while (encantamento3 == encantamento || encantamento3 == encantamento2){
          encantamento3 = encanto3(2, item, encantamento, encantamento2)
        }

        while (!encantosE.includes(encantamento3)){
          encantamento3 = encanto3(2, item, encantamento, encantamento2)
        }
        
        if (!encantosE.includes(encantamento)) {
          itemf = encantamento
        } else {
          itemf = `${item} ${encantamento}, ${encantamento2} e ${encantamento3}`
          secreto.innerHTML = secreto.innerHTML + hidden.innerHTML
        }
      } else {
        itemf = acessorioMaior()
      }
      itemr = itemf
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

  if(d6 <= 3) {
    itemroll = arma()
    return itemroll
  } else if (d6 <= 5) {
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
  secreto.innerHTML = secreto.innerHTML + `Sua Arma rolou ${d1100} <br>`
  if(d1100 <= 3) {
    return "Adaga"
  } else if (d1100 <= 5) {
    return "Alabarda"
  } else if (d1100 <= 7) {
    return "Alfange"
  } else if (d1100 <= 10) {
    return "Arco curto"
  } else if (d1100 <= 13) {
    return "Arco longo"
  } else if (d1100 <= 15) {
    return "Azagaia"
  } else if (d1100 == 16) {
    return "Balas (20)"
  } else if (d1100 <= 18) {
    return "Besta leve"
  } else if (d1100 <= 20) {
    return "Besta pesada"
  } else if (d1100 <= 23) {
    return "Bordão"
  } else if (d1100 == 24) {
    return "Chicote"
  } else if (d1100 <= 27) {
    return "Cimitarra"
  } else if (d1100 <= 30) {
    return "Clava"
  } else if (d1100 == 31) {
    return "Corrente de espinhos"
  } else if (d1100 <= 33) {
    return "Espada bastarda"
  } else if (d1100 <= 38) {
    return "Espada curta"
  } else if (d1100 <= 43) {
    return "Espada longa"
  } else if (d1100 <= 46) {
    return "Flechas (20)"
  } else if (d1100 <= 49) {
    return "Florete"
  } else if (d1100 <= 51) {
    return "Foice"
  } else if (d1100 <= 53) {
    return "Funda"
  } else if (d1100 <= 55) {
    return "Gadanho"
  } else if (d1100 == 56) {
    return "Katana"
  } else if (d1100 <= 59) {
    return "Lança"
  } else if (d1100 == 60) {
    return "Lança montada"
  } else if (d1100 <= 63) {
    return "Maça"
  } else if (d1100 <= 66) {
    return "Machadinha"
  } else if (d1100 == 67) {
    return "Machado anão"
  } else if (d1100 <= 70) {
    return "Machado de batalha"
  } else if (d1100 <= 73) {
    return "Machado de guerra"
  } else if (d1100 == 74) {
    return "Machado táurico"
  } else if (d1100 <= 76) {
    return "Mangual"
  } else if (d1100 == 77) {
    return "Marreta"
  } else if (d1100 <= 80) {
    return "Martelo de guerra"
  } else if (d1100 <= 83) {
    return "Montante"
  } else if (d1100 == 84) {
    return "Mosquete"
  } else if (d1100 == 85) {
    return "Pedras (20)"
  } else if (d1100 <= 88) {
    return "Picareta"
  } else if (d1100 <= 90) {
    return "Pique"
  } else if (d1100 <= 92) {
    return "Pistola"
  } else if (d1100 == 93) {
    return "Rede"
  } else if (d1100 <= 96) {
    return "Tacape"
  } else if (d1100 <= 98) {
    return "Tridente"
  } else {
    return "Virotes (20)"
  } 
}
/*Função pra rolagem de armaduras ou escudos*/
function armadura() {
  let d2100 = rolldice(1, 100)
  secreto.innerHTML = secreto.innerHTML + `Sua Armadura rolou ${d2100} <br>`
  if(d2100 <= 5) {
    return "Couro"
  } else if (d2100 <= 10) {
    return "Brunea"
  } else if (d2100 <= 25) {
    return "Armadura completa"
  } else if (d2100 <= 30) {
    return "Cota de malha"
  } else if (d2100 <= 45) {
    return "Couraça"
  } else if (d2100 <= 55) {
    return "Couro batido"
  } else if (d2100 <= 65) {
    return "Escudo leve"
  } else if (d2100 <= 80) {
    return "Escudo pesado"
  } else if (d2100 <= 85) {
    return "Gibão de peles"
  } else if (d2100 <= 90) {
    return "Loriga segmentada"
  } else {
    return "Meia armadura"
  }
}
/*Função pra rolagem de esotéricos*/
function esoterico() {
  let d3100 = rolldice(1, 100)
  secreto.innerHTML = secreto.innerHTML + `Seu Esotérico rolou ${d3100} <br>`
  if(d3100 <= 10) {
    return "Bolsa de pó"
  } else if (d3100 <= 25) {
    return "Cajado arcano"
  } else if (d3100 <= 35) {
    return cetro()
  } else if (d3100 <= 42) {
    return "Costela de lich"
  } else if (d3100 <= 50) {
    return "Dedo de ente"
  } else if (d3100 <= 55) {
    return "Luva de ferro"
  } else if (d3100 <= 65) {
    return "Medalhão de prata"
  } else if (d3100 <= 75) {
    return "Orbe cristalina"
  } else if (d3100 <= 85) {
    return tomo()
  } else {
    return "Varinha arcana"
  }
}
/*Função pra descobrir o elemento do cetro*/
function cetro() {
  elemento = rolldice(1, 4)
  secreto.innerHTML = secreto.innerHTML + `Seu Cetro rolou ${elemento} <br>`
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
  secreto.innerHTML = secreto.innerHTML + `Seu Tomo rolou ${escola} <br>`
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
  secreto.innerHTML = secreto.innerHTML + `Seu Diverso rolou ${d100} <br>`
  if(d100 <= 2) {
    return "Ácido"
  } else if (d100 <= 4) {
    return "Água Benta"
  } else if  (d100 == 5) {
    return "Alaúde élfico"
  } else if (d100 == 6) {
    return "Algemas"
  } else if (d100 <= 8) {
    return "Baga-de-fogo"
  } else if (d100 <= 23) {
    return "Bálsamo restaurador"
  } else if (d100 == 24) {
    return "Bandana"
  } else if (d100 == 25) {
    return "Bandoleira de poções"
  } else if (d100 <= 30) {
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
  } else if (d100 <= 38) {
    return "Coleção de Livros"
  } else if (d100 <= 40) {
    return "Cosmético"
  } else if (d100 <= 42) {
    return "Dente-de-dragão"
  } else if (d100 == 43) {
    return "Enfeite de elmo"
  } else if (d100 == 44) {
    return "Elixir do amor"
  } else if (d100 <= 46) {
    return "Equipamento de viagem"
  } else if (d100 <= 56) {
    return "Essência de mana"
  } else if (d100 == 57) {
    return "Estojo de disfarces"
  } else if (d100 == 58) {
    return "Farrapos do ermitão"
  } else if (d100 == 59) {
    return "Flauta mística"
  } else if (d100 <= 66) {
    return "Fogo alquímico"
  } else if (d100 == 67) {
    return "Gorro de ervas"
  } else if (d100 <= 69) {
    return "Líquen lilás"
  } else if (d100 == 70) {
    return "Luneta"
  } else if (d100 == 71) {
    return "Luva de pelica"
  } else if (d100 <= 73) {
    return "Maleta de medicamentos"
  } else if (d100 == 74) {
    return "Manopla"
  } else if (d100 == 75) {
    return "Manto eclesiástico"
  } else if (d100 <= 78) {
    return "Mochila de aventureiro"
  } else if (d100 <= 89) {
    return "Musgo púrpura"
  } else if (d100 == 81) {
    return "Organizador de pergaminhos"
  } else if (d100 <= 83) {
    return "Ossos de monstro"
  } else if (d100 <= 85) {
    return "Pó de cristal"
  } else if (d100 <= 87) {
    return "Pó de giz"
  } else if (d100 == 88) {
    return "Pó do desaparecimento"
  } else if (d100 == 89) {
    return "Robe místico"
  } else if (d100 <= 91) {
    return "Saco de sal"
  } else if (d100 == 92) {
    return "Sapatos de camurça"
  } else if (d100 <= 94) {
    return "Seixo de âmbar"
  } else if (d100 == 95) {
    return "Sela"
  } else if (d100 == 96) {
    return "Tabardo"
  } else if (d100 == 97) {
    return "Traje da corte"
  } else if (d100 <= 99) {
    return "Terra de cemitério"
  } else {
    return "Veste de seda"
  }
}

/*Função para definir poções*/
function potion(num) {
  n = num
  potrol = rolldice(1, 100)
  pot = n + potrol
  if (n == 0) {
    secreto.innerHTML = secreto.innerHTML + `Uma poção rolou ${potrol} <br>`
  } else {
    secreto.innerHTML = secreto.innerHTML + `Uma poção rolou ${potrol} + 20 <br>`
  }
  if (pot == 1) {
    return "Óleo de Abençoar Alimentos"
  } else if (pot <= 3) {
    return "Granada de Área Escorregadia"
  } else if (pot <= 6) {
    return "Óleo de Arma Mágica"
  } else if (pot == 7) {
    return "Poção de Compreensão"
  } else if (pot <= 15) {
    return "Poção de Curar Ferimentos (2d8+2)"
  } else if (pot <= 18) {
    return "Poção de Disfarce Ilusório"
  } else if (pot <= 20) {
    return "Óleo de Escuridão"
  } else if (pot <= 22) {
    return "Óleo de Luz"
  } else if (pot <= 24) {
    return "Granada de Névoa"
  } else if (pot <= 26) {
    return "Poção de Primor Atlético"
  } else if (pot <= 28) {
    return "Poção de Proteção Divina"
  } else if (pot <= 30) {
    return "Poção de Resistência a Energia"
  } else if (pot <= 32) {
    return "Poção de Sono"
  } else if (pot == 33) {
    return "Poção de Suporte Ambiental"
  } else if (pot == 34) {
    return "Óleo de Tranca Arcana"
  } else if (pot == 35) {
    return "Poção de Visão Mística"
  } else if (pot == 36) {
    return "Poção de Vitalidade Fantasma"
  } else if (pot <= 38) {
    return "Poção de Escudo da Fé (Cena)"
  } else if (pot <= 40) {
    return "Poção de Alterar Tamanho"
  } else if (pot <= 42) {
    return "Poção de Aparência Perfeita"
  } else if (pot == 43) {
    return "Óleo de Armamento da Natureza"
  } else if (pot <= 49) {
    return "Granada de Bola de Fogo"
  } else if (pot <= 51) {
    return "Poção de Camuflagem Ilusória"
  } else if (pot <= 53) {
    return "Poção de Concentração de Combate (Cena)"
  } else if (pot <= 62) {
    return "Poção de Curar Ferimentos (4d8+4)"
  } else if (pot <= 66) {
    return "Poção de Físico Divino"
  } else if (pot <= 68) {
    return "Poção de Mente Divina"
  } else if (pot <= 70) {
    return "Poção de Metamorfose"
  } else if (pot <= 75) {
    return "Poção de Purificação"
  } else if (pot <= 77) {
    return "Poção de Velocidade"
  } else if (pot <= 79) {
    return "Óleo de Vestimenta da Fé"
  } else if (pot == 80) {
    return "Poção de Voz Divina"
  } else if (pot <= 82) {
    return "Óleo de Arma Mágica (bônus +3)"
  } else if (pot <= 88) {
    return "Poção de Curar Ferimentos (7d8+7)"
  } else if (pot == 89) {
    return "Poção de Físico Divino (três atributos)"
  } else if (pot <= 92) {
    return "Poção de Invisibilidade (Cena)"
  } else if (pot <= 96) {
    return "Granada de Bola de Fogo (10d6)"
  } else {
    return "Poção de Curar Ferimentos (11d8+11)"
  }
}

function riquezamenor(num) {
  let n = num
  let riqrol = rolldice(1+n, 100+n)
  riqmen = n + riqrol
  if (n == 0) {
    secreto.innerHTML = secreto.innerHTML + `Uma riqueza Menor rolou ${riqrol} <br>`
  } else {
    secreto.innerHTML = secreto.innerHTML + `Uma riqueza Menor rolou ${riqrol} + 20 <br>`
  }
  if (riqmen <= 25) {
    return riqueza1()
  } else if (riqmen <= 40) {
    return riqueza2()
  } else if (riqmen <= 55) {
    return riqueza3()
  } else if (riqmen <= 70) {
    return riqueza4()
  } else if (riqmen <= 85) {
    return riqueza5()
  } else if (riqmen <= 95) {
    return riqueza6()
  } else if (riqmen <= 99) {
    return riqueza7()
  } else {
    return riqueza8()
  }
}

function riquezamedia(num) {
  let n = num
  let riqrol = rolldice(1+n, 100+n)
  riqmed = n + riqrol
  if (n == 0) {
    secreto.innerHTML = secreto.innerHTML + `Uma riqueza Média rolou ${riqrol} <br>`
  } else {
    secreto.innerHTML = secreto.innerHTML + `Uma riqueza Média rolou ${riqrol} + 20 <br>`
  }
  if (riqmed <= 10) {
    return riqueza3()
  } else if (riqmed <= 30) {
    return riqueza4()
  } else if (riqmed <= 50) {
    return riqueza5()
  } else if (riqmed <= 65) {
    return riqueza6()
  } else if (riqmed <= 80) {
    return riqueza7()
  } else if (riqmed <= 90) {
    return riqueza8()
  } else if (riqmed <= 95) {
    return riqueza9()
  } else if (riqmed <= 99) {
    return riqueza10()
  } else {
    return riqueza11()
  }
}

function riquezamaior(num) {
  let n = num
  let riqrol = rolldice(1+n, 100+n)
  riqmar = n + riqrol
  if (n == 0) {
    secreto.innerHTML = secreto.innerHTML + `Uma riqueza Maior rolou ${riqmar} <br>`
  } else {
    secreto.innerHTML = secreto.innerHTML + `Uma riqueza Maior rolou ${riqmar} + 20 <br>`
  }
  if (riqmar <= 5) {
    return riqueza5()
  } else if (riqmar <= 15) {
    return riqueza6()
  } else if (riqmar <= 25) {
    return riqueza7()
  } else if (riqmar <= 40) {
    return riqueza8()
  } else if (riqmar <= 60) {
    return riqueza9()
  } else if (riqmar <= 75) {
    return riqueza10()
  } else if (riqmar <= 85) {
    return riqueza11()
  } else if (riqmar <= 95) {
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
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} + ${r3} + ${r4} <br>`
  return (r1 + r2 + r3 + r4)
}

function riqueza2() {
  let r1 = rolldice(1, 4)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} x 10 <br>`
  return r1 * 10
}

function riqueza3() {
  let r1 = rolldice(1, 4)
  let r2 = rolldice(1, 4)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} x 10 <br>`
  return (r1 + r2) * 10
}

function riqueza4() {
  let r1 = rolldice(1, 6)
  let r2 = rolldice(1, 6)
  let r3 = rolldice(1, 6)
  let r4 = rolldice(1, 6)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} + ${r3} + ${r4} x 10 <br>`
  return (r1 + r2 + r3 + r4) * 10
}

function riqueza5() {
  let r1 = rolldice(1, 6)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} x 100 <br>`
  return r1 * 100
}

function riqueza6() {
  let r1 = rolldice(1, 6)
  let r2 = rolldice(1, 6)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} x 100 <br>`
  return (r1 + r2) * 100
}

function riqueza7() {
  let r1 = rolldice(1, 8)
  let r2 = rolldice(1, 8)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} x 100 <br>`
  return (r1 + r2) * 100
}

function riqueza8() {
  let r1 = rolldice(1, 10)
  let r2 = rolldice(1, 10)
  let r3 = rolldice(1, 10)
  let r4 = rolldice(1, 10)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} + ${r3} + ${r4} x 100 <br>`
  return (r1 + r2 + r3 + r4) * 100
}

function riqueza9() {
  let r1 = rolldice(1, 12)
  let r2 = rolldice(1, 12)
  let r3 = rolldice(1, 12)
  let r4 = rolldice(1, 12)
  let r5 = rolldice(1, 12)
  let r6 = rolldice(1, 12)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} + ${r3} + ${r4} + ${r5} + ${r6} x 100 <br>`
  return (r1 + r2 + r3 + r4 + r5 + r6) * 100
}

function riqueza10() {
  let r1 = rolldice(1, 10)
  let r2 = rolldice(1, 10)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} x 1000 <br>`
  return (r1 + r2) * 1000
}

function riqueza11() {
  let r1 = rolldice(1, 8)
  let r2 = rolldice(1, 8)
  let r3 = rolldice(1, 8)
  let r4 = rolldice(1, 8)
  let r5 = rolldice(1, 8)
  let r6 = rolldice(1, 8)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} + ${r3} + ${r4} + ${r5} + ${r6} x 1000 <br>`
  return (r1 + r2 + r3 + r4 + r5 + r6) * 1000
}

function riqueza12() {
  let r1 = rolldice(1, 10)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} x 10000 <br>`
  return r1 * 10000
}

function riqueza13() {
  let r1 = rolldice(1, 12)
  let r2 = rolldice(1, 12)
  let r3 = rolldice(1, 12)
  let r4 = rolldice(1, 12)
  secreto.innerHTML = secreto.innerHTML + `Uma de suas riquezas rolou ${r1} + ${r2} + ${r3} + ${r4} x 10000 <br>`
  return (r1 + r2 + r3 + r4) * 10000
}

function superior(roll, e) {
  var d6 = roll
  var equiroll = e
  hidden.innerHTML = ''
  const madeiraTollon = ["Arco curto", "Arco longo", "Bordão", "Clava", "Lança", "Pique", "Tacape", "Escudo leve"]
  const armasMira = ["Arco curto", "Arco longo", "Besta leve", "Besta pesada", "Mosquete", "Pistola"]
  const armaduraPesada = ["Brunea", "Cota de malha", "Loriga segmentada", "Meia armadura", "Armadura completa"]
  if(d6 <= 3) {
    suproll = aprarma()
    if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      hidden.innerHTML = ''
      superior(d6, equiroll)
    } else if (suproll == "Mira telescópica" && !armasMira.includes(equiroll)) {
      hidden.innerHTML = ''
      superior(d6, equiroll)
    } else if (suproll == "Atroz" || suproll == "Pungente" || suproll == "Harmonizada") {
      hidden.innerHTML = ''
      superior(d6, equiroll)
    }
    return suproll
  } else if (d6 <= 5) {
    suproll = aprdura()
    if (suproll == "Sob medida") {
      hidden.innerHTML = ''
      superior(d6, equiroll)
    } else if (suproll == "Selada" && !armaduraPesada.includes(equiroll)) {
      hidden.innerHTML = ''
      superior(d6, equiroll)
    } else if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      hidden.innerHTML = ''
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
  if(d6 <= 3) {
    suproll = aprarma()
    if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (suproll == "Mira telescópica" && !armasMira.includes(equiroll)) {
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (suproll == "Atroz" && melhor != "Cruel") {
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (suproll == "Pungente" && melhor != "Certeira") {
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (melhor == "Precisa" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (melhor == "Maciça" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    }
    return suproll
  } else if (d6 <= 5) {
    suproll = aprdura()
    if (suproll == "Sob medida" && melhor != "Ajustada") {
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (suproll == "Selada" && !armaduraPesada.includes(equiroll)) {
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (melhor == "Delicada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    } else if (melhor == "Reforçada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior2(d6, equiroll, melhor)
    }
    return suproll
  } else {
    suproll = apreso()
    if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
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
  if(d6 <= 3) {
    suproll = aprarma()
    if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Mira telescópica" && !armasMira.includes(equiroll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Atroz" && melhor != "Cruel") {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Pungente" && melhor != "Certeira") {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    }else if (suproll == "Atroz" && melhor2 != "Cruel") {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Pungente" && melhor2 != "Certeira") {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor == "Precisa" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor == "Maciça" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor2 == "Precisa" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor2 == "Maciça" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    }
    return suproll
  } else if (d6 <= 5) {
    suproll = aprdura()
    if (suproll == "Sob medida" && melhor != "Ajustada") {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Sob medida" && melhor2 != "Ajustada") {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "Selada" && !armaduraPesada.includes(equiroll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor == "Delicada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor == "Reforçada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor2 == "Delicada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (melhor2 == "Reforçada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    }
    return suproll
  } else {
    suproll = apreso()
    if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior3(d6, equiroll, melhor, melhor2)
    }
    return suproll
  }
}

function superior4(roll, e, sup, sup2, sup3) {
  var d6 = roll
  var equiroll = e
  var melhor = sup
  var melhor2 = sup2
  var melhor3 = sup3
  const madeiraTollon = ["Arco curto", "Arco longo", "Bordão", "Clava", "Lança", "Pique", "Tacape", "Escudo leve"]
  const armasMira = ["Arco curto", "Arco longo", "Besta leve", "Besta pesada", "Mosquete", "Pistola"]
  const armaduraPesada = ["Brunea", "Cota de malha", "Loriga segmentada", "Meia armadura", "Armadura completa"]
  const materialEspecial = ["de Adamante", "de Aço-rubi", "de Gelo Eterno", "de Matéria Vermelha", "de Madeira Tollon", "de Mitral"]
  const incompativel = ["Precisa", "Maciça", "Reforçada", "Delicada"]
  if(d6 <= 3) {
    suproll = aprarma()
    if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Mira telescópica" && !armasMira.includes(equiroll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Atroz" && melhor != "Cruel") {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Pungente" && melhor != "Certeira") {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Atroz" && melhor2 != "Cruel") {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Pungente" && melhor2 != "Certeira") {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Atroz" && melhor3 != "Cruel") {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Pungente" && melhor3 != "Certeira") {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor == "Precisa" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor == "Maciça" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor2 == "Precisa" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor2 == "Maciça" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor3 == "Precisa" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor3 == "Maciça" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (materialEspecial.includes(melhor3) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    }
    return suproll
  } else if (d6 <= 5) {
    suproll = aprdura()
    if (suproll == "Sob medida" && melhor != "Ajustada") {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Sob medida" && melhor2 != "Ajustada") {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Sob medida" && melhor3 != "Ajustada") {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "Selada" && !armaduraPesada.includes(equiroll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (materialEspecial.includes(melhor3) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor == "Delicada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor == "Reforçada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor2 == "Delicada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor2 == "Reforçada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor3 == "Delicada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (melhor3 == "Reforçada" && incompativel.includes(suproll)){
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    }
    return suproll
  } else {
    suproll = apreso()
    if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    } else if (materialEspecial.includes(melhor3) && materialEspecial.includes(suproll)) {
      hidden.innerHTML = ''
      superior4(d6, equiroll, melhor, melhor2, melhor3)
    }
    return suproll
  }
}

function aprarma() {
  hidden.innerHTML = ''
  var armaapr = rolldice(1, 100)
  hidden.innerHTML = `O aprimoramento de arma rolou ${armaapr} <br>`
  if(armaapr <= 10) {
    return "Atroz"
  } else if (armaapr <= 13) {
    return "Banhada a ouro"
  } else if (armaapr <= 23) {
    return "Certeira"
  } else if (armaapr <= 26) {
    return "Cravejada de gemas"
  } else if (armaapr <= 36) {
    return "Cruel"
  } else if (armaapr <= 39) {
    return "Discreta"
  } else if (armaapr <= 44) {
    return "Equilibrada"
  } else if (armaapr <= 48) {
    return "Harmonizada"
  } else if (armaapr <= 53) {
    return "Injeção Alquímica"
  } else if (armaapr <= 55) {
    return "Macabra"
  } else if (armaapr <= 65) {
    return "Maciça"
  } else if (armaapr <= 75) {
    return materialespecial()
  } else if (armaapr <= 80) {
    return "Mira telescópica"
  } else if (armaapr <= 90) {
    return "Precisa"
  } else {
    return "Pungente"
  }
}

function aprdura() {
  hidden.innerHTML = ''
  var duraapr = rolldice(1, 100)
  hidden.innerHTML = `O aprimoramento de armadura rolou ${duraapr} <br>`
  if(duraapr <= 15) {
    return "Ajustada"
  } else if (duraapr <= 19) {
    return "Banhada a ouro"
  } else if (duraapr <= 23) {
    return "Cravejada de gemas"
  } else if (duraapr <= 28) {
    return "Delicada"
  } else if (duraapr <= 32) {
    return "Discreta"
  } else if (duraapr <= 37) {
    return "com Espinhos"
  } else if (duraapr <= 40) {
    return "Macabra"
  } else if (duraapr <= 50) {
    return materialespecial()
  } else if (duraapr <= 55) {
    return "Polida"
  } else if (duraapr <= 80) {
    return "Reforçada"
  } else if (duraapr <= 90) {
    return "Selada"
  } else {
    return "Sob medida"
  }
}

function apreso() {
  hidden.innerHTML = ''
  var esoapr = rolldice(1, 100)
  hidden.innerHTML = `O aprimoramento de esotérico rolou ${esoapr} <br>`
  if(esoapr <= 4) {
    return "Banhada a ouro"
  } else if (esoapr <= 8) {
    return "Cravejado de gemas"
  } else if (esoapr <= 12) {
    return "Discreto"
  } else if (esoapr <= 27) {
    return "Energético"
  } else if (esoapr <= 42) {
    return "Harmonizado"
  } else if (esoapr <= 45) {
    return "Macabra"
  } else if (esoapr <= 54) {
    return materialespecial()
  } else if (esoapr <= 70) {
    return "Poderoso"
  } else if (esoapr <= 85) {
    return "Canalizador"
  } else {
    return "Vigilante"
  }
}

function materialespecial(){
  material = rolldice(1, 6)
  hidden.innerHTML = hidden.innerHTML + `O material especial rolou ${material} <br>`
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

function encanto(n, equi) {
  hidden.innerHTML = ''
  typo = n
  rEqui = equi
  const naoPode = ["Energética", "Lancinante", "Magnífica", "Guardião"]
  const escudos = ["Escudo leve", "Escudo pesado"]
  if (typo == 1) {
    enc = encantoArma()
    if (naoPode.includes(enc)) {
      hidden.innerHTML = ''
      encanto(typo, rEqui)
    }
    return enc
  } else {
      enc = encantoArmadura()
      if (naoPode.includes(enc)) {
        hidden.innerHTML = ''
        encanto(typo, rEqui)
      } else if (enc == "Esmagador" && !escudos.includes(rEqui)) {
        hidden.innerHTML = ''
        encanto (typo, rEqui)
      } else if (enc == "Animado" && !escudos.includes(rEqui)) {
        hidden.innerHTML = ''
        encanto (typo, rEqui)
      }
      return enc
  }
}

function encanto2(n, equi, e1) {
  hidden.innerHTML = ''
  typo = n
  rEqui = equi
  enc1 = e1
  const escudos = ["Escudo leve", "Escudo pesado"]
  if (typo == 1) {
    enc = encantoArma()
    if (enc == "Energética" && enc1 != "Formidável") {
      hidden.innerHTML = ''
      encanto2(typo, rEqui, enc1)
    } else if (enc == "Magnífica" && enc1 != "Formidável") {
      hidden.innerHTML = ''
      encanto2(typo, rEqui, enc1)
    } else if (enc == "Lancinante" && enc1 != "Dilacerante") {
      hidden.innerHTML = ''
      encanto2(typo, rEqui, enc1)
    }
    return enc
  } else {
    enc = encantoArmadura()
    if (enc == "Guardião" && enc1 != "Defensor") {
      hidden.innerHTML = ''
      encanto2(typo, rEqui, enc1)
    } else if (enc == "Esmagador" && !escudos.includes(rEqui)) {
      hidden.innerHTML = ''
      encanto2(typo, rEqui, enc1)
    } else if (enc == "Animado" && !escudos.includes(rEqui)) {
      hidden.innerHTML = ''
      encanto2(typo, rEqui, enc1)
    }
    return enc
  }
}

function encanto3(n, equi, e1, e2) {
  hidden.innerHTML = ''
  typo = n
  rEqui = equi
  enc1 = e1
  enc2 = e2
  const escudos = ["Escudo leve", "Escudo pesado"]
  if (typo == 1) {
    enc = encantoArma()
    if (enc == "Magnífica" && enc2 != "Formidável") {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    } else if (enc == "Magnífica" && enc1 != "Formidável") {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    } else if (enc == "Energética" && enc2 != "Formidável") {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    } else if (enc == "Energética" && enc1 != "Formidável") {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    } else if (enc == "Lancinante" && enc2 != "Dilacerante") {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    } else if (enc == "Lancinante" && enc1 != "Dilacerante") {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    }
    return enc
  } else {
    enc = encantoArmadura()
    if (enc == "Guardião" && enc2 != "Defensor") {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    } else if (enc == "Guardião" && enc1 != "Defensor") {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    } else if (enc == "Esmagador" && !escudos.includes(rEqui)) {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    } else if (enc == "Animado" && !escudos.includes(rEqui)) {
      hidden.innerHTML = ''
      encanto3(typo, rEqui, enc1, enc2)
    }
    return enc
  }
}

function encantoArma() {
  hidden.innerHTML = ''
  var encantoroll = rolldice(1, 100)
  hidden.innerHTML = `Um encanto de arma rolou ${encantoroll} <br>`
  if (encantoroll <= 5) {
    return "Ameaçadora"
  } else if (encantoroll <= 10) {
    return anticriatura()
  } else if (encantoroll <= 12) {
    return "Arremesso"
  } else if (encantoroll <= 14) {
    return "Assassina"
  } else if (encantoroll <= 16) {
    return "Caçadora"
  } else if (encantoroll <= 21) {
    return "Congelante"
  } else if (encantoroll <= 23) {
    return "Conjuradora"
  } else if (encantoroll <= 28) {
    return "Corrosiva"
  } else if (encantoroll <= 30) {
    return "Dançarina"
  } else if (encantoroll <= 34) {
    return "Defensora"
  } else if (encantoroll <= 36) {
    return "Destruidora"
  } else if (encantoroll <= 38) {
    return "Dilacerante"
  } else if (encantoroll <= 40) {
    return "Drenante"
  } else if (encantoroll <= 45) {
    return "Elétrica"
  } else if (encantoroll == 46) {
    return "Energética"
  } else if (encantoroll <= 48) {
    return "Excruciante"
  } else if (encantoroll <= 53) {
    return "Flamejante"
  } else if (encantoroll <= 63) {
    return "Formidável"
  } else if (encantoroll == 64) {
    return "Lancinante"
  } else if (encantoroll <= 72) {
    return "Magnífica"
  } else if (encantoroll <= 74) {
    return "Piedosa"
  } else if (encantoroll <= 76) {
    return "Profana"
  } else if (encantoroll <= 78) {
    return "Sagrada"
  } else if (encantoroll <= 80) {
    return "Sanguinária"
  } else if (encantoroll <= 82) {
    return "Trovejante"
  } else if (encantoroll <= 84) {
    return "Tumular"
  } else if (encantoroll <= 88) {
    return "Veloz"
  } else if (encantoroll <= 90) {
    return "Venenosa"
  } else {
    return armaEsmecifica()
  }
}

function anticriatura(){
  criatura = rolldice(1, 6)
  hidden.innerHTML = hidden.innerHTML + `Um anticriatura rolou ${criatura} <br>`
  if (criatura == 1) {
    return "Anticriatura (Animal)"
  } else if (criatura == 2) {
    return "Anticriatura (Construto)"
  } else if (criatura == 3) {
    return "Anticriatura (Espírito)"
  } else if (criatura == 4) {
    return "Anticriatura (Monstro)"
  } else if (criatura == 5) {
    return "Anticriatura (Morto-vivo)"
  } else {
    return "Anticriatura (Uma raça humanoide)"
  }
}

function encantoArmadura() {
  hidden.innerHTML = ''
  var encantoroll = rolldice(1, 100)
  hidden.innerHTML = `Um encanto de armadura rolou ${encantoroll} <br>`
  if (encantoroll <= 6) {
    return "Abascanto"
  } else if (encantoroll <= 10) {
    return "Abençoado"
  } else if (encantoroll <= 12) {
    return "Acrobático"
  } else if (encantoroll <= 14) {
    return "Alado"
  } else if (encantoroll <= 16) {
    return "Animado"
  } else if (encantoroll <= 18) {
    return "Assustador"
  } else if (encantoroll <= 22) {
    return "Cáustica"
  } else if (encantoroll <= 32) {
    return "Defensor"
  } else if (encantoroll <= 34) {
    return "Escorregadio"
  } else if (encantoroll <= 36) {
    return "Esmagador"
  } else if (encantoroll <= 38) {
    return "Fantasmagórico"
  } else if (encantoroll <= 40) {
    return "Fortificado"
  } else if (encantoroll <= 44) {
    return "Gélido"
  } else if (encantoroll <= 54) {
    return "Guardião"
  } else if (encantoroll <= 56) {
    return "Hipnótico"
  } else if (encantoroll <= 58) {
    return "Ilusório"
  } else if (encantoroll <= 62) {
    return "Incandescente"
  } else if (encantoroll <= 68) {
    return "Invulnerável"
  } else if (encantoroll <= 72) {
    return "Opaco"
  } else if (encantoroll <= 78) {
    return "Protetor"
  } else if (encantoroll <= 80) {
    return "Refletor"
  } else if (encantoroll <= 84) {
    return "Relampejante"
  } else if (encantoroll <= 86) {
    return "Reluzente"
  } else if (encantoroll <= 88) {
    return "Sombrio"
  } else if (encantoroll <= 90) {
    return "Zeloso"
  } else {
    return armaduraEspecifica()
  }
}

function armaEsmecifica() {
  armaroll = rolldice(1, 100)
  secreto.innerHTML = secreto.innerHTML + hidden.innerHTML + `Sua arma específica rolou ${armaroll} <br>`
  if (armaroll <= 5) {
    return "Azagaia dos relâmpagos"
  } else if (armaroll <= 15) {
    return "Espada baronial"
  } else if (armaroll <= 25) {
    return "Lâmina da luz"
  } else if (armaroll <= 30) {
    return "Lança animalesca"
  } else if (armaroll <= 35) {
    return "Maça do terror"
  } else if (armaroll <= 40) {
    return "Florete fugaz"
  } else if (armaroll <= 45) {
    return "Cajado da destruição"
  } else if (armaroll <= 50) {
    return "Cajado da vida"
  } else if (armaroll <= 55) {
    return "Machado silvestre"
  } else if (armaroll <= 60) {
    return "Martelo de Doherimm"
  } else if (armaroll <= 67) {
    return "Arco do poder"
  } else if (armaroll <= 72) {
    return "Língua do deserto"
  } else if (armaroll <= 77) {
    return "Besta explosiva"
  } else if (armaroll <= 82) {
    return "Punhal sszzaazita"
  } else if (armaroll <= 87) {
    return "Espada sortuda"
  } else if (armaroll <= 92) {
    return "Avalanche"
  } else if (armaroll <= 95) {
    return "Cajado do poder"
  } else {
    return "Vingadora sagrada"
  }
}

function armaduraEspecifica() {
  armaduraroll = rolldice(1, 100)
  secreto.innerHTML = secreto.innerHTML + hidden.innerHTML + `Sua armadura específica rolou ${armaduraroll} <br>`
  if (armaduraroll <= 10) {
    return "Cota élfica"
  } else if (armaduraroll <= 20) {
    return "Couro de monstro"
  } else if (armaduraroll <= 25) {
    return "Escudo do conjurador"
  } else if (armaduraroll <= 32) {
    return "Loriga de centurião"
  } else if (armaduraroll <= 42) {
    return "Manto da noite"
  } else if (armaduraroll <= 49) {
    return "Couraça do comando"
  } else if (armaduraroll <= 59) {
    return "Baluarte anão"
  } else if (armaduraroll <= 66) {
    return "Escudo espinhoso"
  } else if (armaduraroll <= 76) {
    return "Escudo do leão"
  } else if (armaduraroll <= 83) {
    return "Carapaça demoníaca"
  } else if (armaduraroll <= 88) {
    return "Escudo do eclipse"
  } else if (armaduraroll <= 93) {
    return "Escudo de Azgher"
  } else {
    return "Armadura da luz"
  }
}

function acessorioMenor() {
  acess = rolldice(1, 100)
  secreto.innerHTML = secreto.innerHTML + `Seu Acessório Menor rolou ${acess} <br>`
  if (acess <= 2) {
    return "Anel do sustento"
  } else if (acess <= 7) {
    return "Bainha mágica"
  } else if (acess <= 12) {
    return "Corda da escalada"
  } else if (acess <= 14) {
    return "Ferraduras da velocidade"
  } else if (acess <= 19) {
    return "Garrafa da fumaça eterna"
  } else if (acess <= 24) {
    return "Gema da luminosidade"
  } else if (acess <= 29) {
    return "Manto élfico"
  } else if (acess <= 34) {
    return "Mochila de carga"
  } else if (acess <= 40) {
    return "Brincos da sagacidade"
  } else if (acess <= 46) {
    return "Luvas da delicadeza"
  } else if (acess <= 52) {
    return "Manoplas da força do ogro"
  } else if (acess <= 59) {
    return "Manto da resistência"
  } else if (acess <= 65) {
    return "Manto do fascínio"
  } else if (acess <= 71) {
    return "Pingente da sensatez"
  } else if (acess <= 77) {
    return "Torque do vigor"
  } else if (acess <= 82) {
    return "Chapéu do disfarce"
  } else if (acess <= 84) {
    return "Flauta fantasma"
  } else if (acess <= 89) {
    return "Lanterna da revelação"
  } else if (acess <= 96) {
    return "Anel da proteção"
  } else if (acess <= 98) {
    return "Anel do escudo mental"
  } else {
    return "Pingente da saúde"
  }
}

function acessorioMedio() {
  acess = rolldice(1, 100)
  secreto.innerHTML = secreto.innerHTML + `Seu Acessório Médio rolou ${acess} <br>`
  if (acess <= 4) {
    return "Anel de telecinesia"
  } else if (acess <= 8) {
    return "Bola de cristal"
  } else if (acess <= 10) {
    return "Caveira maldita"
  } else if (acess <= 14) {
    return "Botas aladas"
  } else if (acess <= 18) {
    return "Braceletes de bronze"
  } else if (acess <= 24) {
    return "Anel da energia"
  } else if (acess <= 30) {
    return "Anel da vitalidade"
  } else if (acess <= 34) {
    return "Anel da invisibilidade"
  } else if (acess <= 38) {
    return "Braçadeiras do arqueiro"
  } else if (acess <= 42) {
    return "Brincos de Marah"
  } else if (acess <= 46) {
    return "Faixas do pugilista"
  } else if (acess <= 50) {
    return "Manto da aranha"
  } else if (acess <= 54) {
    return "Vassoura voadora"
  } else if (acess <= 58) {
    return "Símbolo abençoado"
  } else if (acess <= 64) {
    return "Amuleto da robustez"
  } else if (acess <= 68) {
    return "Botas velozes"
  } else if (acess <= 74) {
    return "Cinto da força do gigante"
  } else if (acess <= 80) {
    return "Coroa majestosa"
  } else if (acess <= 86) {
    return "Estola da serenidade"
  } else if (acess <= 88) {
    return "Manto do morcego"
  } else if (acess <= 94) {
    return "Pulseiras da celeridade"
  } else {
    return "Tiara da sapiência"
  } 
}

function acessorioMaior() {
  acess = rolldice(1, 100)
  secreto.innerHTML = secreto.innerHTML + `Seu Acessório Maior rolou ${acess} <br>`
  if (acess <= 2) {
    return "Elmo do teletransporte"
  } else if (acess <= 4) {
    return "Gema da telepatia"
  } else if (acess <= 9) {
    return "Gema elemental"
  } else if (acess <= 15) {
    return "Manual da saúde corporal"
  } else if (acess <= 21) {
    return "Manual do bom exercício"
  } else if (acess <= 27) {
    return "Manual dos movimentos precisos"
  } else if (acess <= 34) {
    return "Medalhão de Lena"
  } else if (acess <= 40) {
    return "Tomo da compreensão"
  } else if (acess <= 46) {
    return "Tomo da liderança e influência"
  } else if (acess <= 52) {
    return "Tomo dos grandes pensamentos"
  } else if (acess <= 57) {
    return "Anel refletor"
  } else if (acess <= 60) {
    return "Cinto do campeão"
  } else if (acess <= 67) {
    return "Colar guardião"
  } else if (acess <= 72) {
    return "Estatueta animista"
  } else if (acess <= 77) {
    return "Anel da liberdade"
  } else if (acess <= 82) {
    return "Tapete voador"
  } else if (acess <= 87) {
    return "Braceletes de ouro"
  } else if (acess <= 89) {
    return "Espelho da oposição"
  } else if (acess <= 94) {
    return "Robe do arquimago"
  } else if (acess <= 96) {
    return "Orbe das tempestades"
  } else if (acess <= 98) {
    return "Anel da regeneração"
  } else {
    return "Espelho do aprisionamento"
  }
}
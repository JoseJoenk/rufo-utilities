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
      } else if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
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
      }else if (suproll == "Atroz" && melhor2 != "Cruel") {
        superior3(d6, equiroll, melhor, melhor2)
      } else if (suproll == "Pungente" && melhor2 != "Certeira") {
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
      } else if (suproll == "Sob medida" && melhor2 != "Ajustada") {
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
    if(d6 >= 1 && d6 <= 3) {
      suproll = aprarma()
      if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Mira telescópica" && !armasMira.includes(equiroll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Atroz" && melhor != "Cruel") {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Pungente" && melhor != "Certeira") {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Atroz" && melhor2 != "Cruel") {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Pungente" && melhor2 != "Certeira") {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Atroz" && melhor3 != "Cruel") {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Pungente" && melhor3 != "Certeira") {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor == "Precisa" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor == "Maciça" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor2 == "Precisa" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor2 == "Maciça" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor3 == "Precisa" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor3 == "Maciça" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (materialEspecial.includes(melhor3) && materialEspecial.includes(suproll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      }
      return suproll
    } else if (d6 == 4 || d6 == 5) {
      suproll = aprdura()
      if (suproll == "Sob medida" && melhor != "Ajustada") {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Sob medida" && melhor2 != "Ajustada") {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Sob medida" && melhor3 != "Ajustada") {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "Selada" && !armaduraPesada.includes(equiroll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (materialEspecial.includes(melhor3) && materialEspecial.includes(suproll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (suproll == "de Madeira Tollon" && !madeiraTollon.includes(equiroll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor == "Delicada" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor == "Reforçada" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor2 == "Delicada" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor2 == "Reforçada" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor3 == "Delicada" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (melhor3 == "Reforçada" && incompativel.includes(suproll)){
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      }
      return suproll
    } else {
      suproll = apreso()
      if (materialEspecial.includes(melhor) && materialEspecial.includes(suproll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (materialEspecial.includes(melhor2) && materialEspecial.includes(suproll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
      } else if (materialEspecial.includes(melhor3) && materialEspecial.includes(suproll)) {
        superior4(d6, equiroll, melhor, melhor2, melhor3)
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
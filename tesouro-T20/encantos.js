function encanto(n, equi) {
    typo = n
    rEqui = equi
    const naoPode = ["Energética", "Lancinante", "Magnífica", "Guardião"]
    const escudos = ["Escudo leve", "Escudo pesado"]
    if (typo == 1) {
      enc = encantoArma()
      if (naoPode.includes(enc)) {
        encanto(typo, rEqui)
      }
      return enc
    } else {
        enc = encantoArmadura()
        if (naoPode.includes(enc)) {
          encanto(typo, rEqui)
        } else if (enc == "Esmagador" && !escudos.includes(rEqui)) {
          encanto (typo, rEqui)
        } else if (enc == "Animado" && !escudos.includes(rEqui)) {
          encanto (typo, rEqui)
        }
        return enc
    }
  }
  
  function encanto2(n, equi, e1) {
    typo = n
    rEqui = equi
    enc1 = e1
    const escudos = ["Escudo leve", "Escudo pesado"]
    if (typo == 1) {
      enc = encantoArma()
      if (enc == "Energética" && enc1 != "Formidável") {
        encanto2(typo, rEqui, enc1)
      } else if (enc == "Magnífica" && enc1 != "Formidável") {
        encanto2(typo, rEqui, enc1)
      } else if (enc == "Lancinante" && enc1 != "Dilacerante") {
        encanto2(typo, rEqui, enc1)
      }
      return enc
    } else {
      enc = encantoArmadura()
      if (enc == "Guardião" && enc1 != "Defensor") {
        encanto2(typo, rEqui, enc1)
      } else if (enc == "Esmagador" && !escudos.includes(rEqui)) {
        encanto2(typo, rEqui, enc1)
      } else if (enc == "Animado" && !escudos.includes(rEqui)) {
        encanto2(typo, rEqui, enc1)
      }
      return enc
    }
  }
  
  function encanto3(n, equi, e1, e2) {
    typo = n
    rEqui = equi
    enc1 = e1
    enc2 = e2
    const escudos = ["Escudo leve", "Escudo pesado"]
    if (typo == 1) {
      enc = encantoArma()
      if (enc == "Magnífica" && enc2 != "Formidável") {
        encanto3(typo, rEqui, enc1, enc2)
      } else if (enc == "Magnífica" && enc1 != "Formidável") {
        encanto3(typo, rEqui, enc1, enc2)
      } else if (enc == "Energética" && enc2 != "Formidável") {
        encanto3(typo, rEqui, enc1, enc2)
      } else if (enc == "Energética" && enc1 != "Formidável") {
        encanto3(typo, rEqui, enc1, enc2)
      } else if (enc == "Lancinante" && enc2 != "Dilacerante") {
        encanto3(typo, rEqui, enc1, enc2)
      } else if (enc == "Lancinante" && enc1 != "Dilacerante") {
        encanto3(typo, rEqui, enc1, enc2)
      }
      return enc
    } else {
      enc = encantoArmadura()
      if (enc == "Guardião" && enc2 != "Defensor") {
        encanto3(typo, rEqui, enc1, enc2)
      } else if (enc == "Guardião" && enc1 != "Defensor") {
        encanto3(typo, rEqui, enc1, enc2)
      } else if (enc == "Esmagador" && !escudos.includes(rEqui)) {
        encanto3(typo, rEqui, enc1, enc2)
      } else if (enc == "Animado" && !escudos.includes(rEqui)) {
        encanto3(typo, rEqui, enc1, enc2)
      }
      return enc
    }
  }
  
  function encantoArma() {
    var encantoroll = rolldice(1, 100)
  
    if (encantoroll >= 1 && encantoroll <= 5) {
      return "Ameaçadora"
    } else if (encantoroll >= 6 && encantoroll <= 10) {
      return anticriatura()
    } else if (encantoroll == 11 || encantoroll == 12) {
      return "Arremesso"
    } else if (encantoroll == 13 || encantoroll == 14) {
      return "Assassina"
    } else if (encantoroll == 15 || encantoroll == 16) {
      return "Caçadora"
    } else if (encantoroll >= 17 && encantoroll <= 21) {
      return "Congelante"
    } else if (encantoroll == 22 || encantoroll == 23) {
      return "Conjuradora"
    } else if (encantoroll >= 24 && encantoroll <= 28) {
      return "Corrosiva"
    } else if (encantoroll == 29 || encantoroll == 30) {
      return "Dançarina"
    } else if (encantoroll >= 31 && encantoroll <= 34) {
      return "Defensora"
    } else if (encantoroll == 35 || encantoroll == 36) {
      return "Destruidora"
    } else if (encantoroll == 37 || encantoroll == 38) {
      return "Dilacerante"
    } else if (encantoroll == 39 || encantoroll == 40) {
      return "Drenante"
    } else if (encantoroll >= 41 && encantoroll <= 45) {
      return "Elétrica"
    } else if (encantoroll == 46) {
      return "Energética"
    } else if (encantoroll == 47 || encantoroll == 48) {
      return "Excruciante"
    } else if (encantoroll >= 49 && encantoroll <= 53) {
      return "Flamejante"
    } else if (encantoroll >= 54 && encantoroll <= 63) {
      return "Formidável"
    } else if (encantoroll == 64) {
      return "Lancinante"
    } else if (encantoroll >= 65 && encantoroll <= 72) {
      return "Magnífica"
    } else if (encantoroll == 73 || encantoroll == 74) {
      return "Piedosa"
    } else if (encantoroll == 75 || encantoroll == 76) {
      return "Profana"
    } else if (encantoroll == 77 || encantoroll == 78) {
      return "Sagrada"
    } else if (encantoroll == 79 || encantoroll == 80) {
      return "Sanguinária"
    } else if (encantoroll == 81 || encantoroll == 82) {
      return "Trovejante"
    } else if (encantoroll == 83 || encantoroll == 84) {
      return "Tumular"
    } else if (encantoroll >= 85 && encantoroll <= 88) {
      return "Veloz"
    } else if (encantoroll == 89 || encantoroll <= 90) {
      return "Venenosa"
    } else {
      return armaEsmecifica()
    }
  }
  
  function anticriatura(){
    criatura = rolldice(1, 6)
  
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
    var encantoroll = rolldice(1, 100)
  
    if (encantoroll >= 1 && encantoroll <= 6) {
      return "Abascanto"
    } else if (encantoroll >= 7 && encantoroll <= 10) {
      return "Abençoado"
    } else if (encantoroll == 11 || encantoroll == 12) {
      return "Acrobático"
    } else if (encantoroll == 13 || encantoroll == 14) {
      return "Alado"
    } else if (encantoroll == 15 || encantoroll == 16) {
      return "Animado"
    } else if (encantoroll == 17 || encantoroll == 18) {
      return "Assustador"
    } else if (encantoroll >= 19 && encantoroll <= 22) {
      return "Cáustica"
    } else if (encantoroll >= 23 && encantoroll <= 32) {
      return "Defensor"
    } else if (encantoroll == 33 || encantoroll == 34) {
      return "Escorregadio"
    } else if (encantoroll == 35 || encantoroll == 36) {
      return "Esmagador"
    } else if (encantoroll == 37 || encantoroll == 38) {
      return "Fantasmagórico"
    } else if (encantoroll == 39 || encantoroll == 40) {
      return "Fortificado"
    } else if (encantoroll >= 41 && encantoroll <= 44) {
      return "Gélido"
    } else if (encantoroll >= 45 && encantoroll <= 54) {
      return "Guardião"
    } else if (encantoroll == 55 && encantoroll == 56) {
      return "Hipnótico"
    } else if (encantoroll == 57 || encantoroll == 58) {
      return "Ilusório"
    } else if (encantoroll >= 59 && encantoroll <= 62) {
      return "Incandescente"
    } else if (encantoroll >= 63 && encantoroll <= 68) {
      return "Invulnerável"
    } else if (encantoroll >= 69 && encantoroll <= 72) {
      return "Opaco"
    } else if (encantoroll >= 73 && encantoroll <= 78) {
      return "Protetor"
    } else if (encantoroll == 79 || encantoroll == 80) {
      return "Refletor"
    } else if (encantoroll >= 81 && encantoroll <= 84) {
      return "Relampejante"
    } else if (encantoroll == 85 || encantoroll == 86) {
      return "Reluzente"
    } else if (encantoroll == 87 || encantoroll == 88) {
      return "Sombrio"
    } else if (encantoroll == 89 || encantoroll == 90) {
      return "Zeloso"
    } else {
      return armaduraEspecifica()
    }
  }
  
  function armaEsmecifica() {
    armaroll = rolldice(1, 100)
  
    if (armaroll >= 1 && armaroll <= 5) {
      return "Azagaia dos relâmpagos"
    } else if (armaroll >= 6 && armaroll <= 15) {
      return "Espada baronial"
    } else if (armaroll >= 16 && armaroll <= 25) {
      return "Lâmina da luz"
    } else if (armaroll >= 26 && armaroll <= 30) {
      return "Lança animalesca"
    } else if (armaroll >= 31 && armaroll <= 35) {
      return "Maça do terror"
    } else if (armaroll >= 36 && armaroll <= 40) {
      return "Florete fugaz"
    } else if (armaroll >= 41 && armaroll <= 45) {
      return "Cajado da destruição"
    } else if (armaroll >= 46 && armaroll <= 50) {
      return "Cajado da vida"
    } else if (armaroll >= 51 && armaroll <= 55) {
      return "Machado silvestre"
    } else if (armaroll >= 56 && armaroll <= 60) {
      return "Martelo de Doherimm"
    } else if (armaroll >= 61 && armaroll <= 67) {
      return "Arco do poder"
    } else if (armaroll >= 68 && armaroll <= 72) {
      return "Língua do deserto"
    } else if (armaroll >= 73 && armaroll <= 77) {
      return "Besta explosiva"
    } else if (armaroll >= 78 && armaroll <= 82) {
      return "Punhal sszzaazita"
    } else if (armaroll >= 83 && armaroll <= 87) {
      return "Espada sortuda"
    } else if (armaroll >= 88 && armaroll <= 92) {
      return "Avalanche"
    } else if (armaroll >= 93 && armaroll <= 95) {
      return "Cajado do poder"
    } else {
      return "Vingadora sagrada"
    }
  }
  
  function armaduraEspecifica() {
    armaduraroll = rolldice(1, 100)
  
    if (armaduraroll >= 1 && armaduraroll <= 10) {
      return "Cota élfica"
    } else if (armaduraroll >= 11 && armaduraroll <= 20) {
      return "Couro de monstro"
    } else if (armaduraroll >= 21 && armaduraroll <= 25) {
      return "Escudo do conjurador"
    } else if (armaduraroll >= 26 && armaduraroll <= 32) {
      return "Loriga de centurião"
    } else if (armaduraroll >= 33 && armaduraroll <= 42) {
      return "Manto da noite"
    } else if (armaduraroll >= 43 && armaduraroll <= 49) {
      return "Couraça do comando"
    } else if (armaduraroll >= 50 && armaduraroll <= 59) {
      return "Baluarte anão"
    } else if (armaduraroll >= 60 && armaduraroll <= 66) {
      return "Escudo espinhoso"
    } else if (armaduraroll >= 67 && armaduraroll <= 76) {
      return "Escudo do leão"
    } else if (armaduraroll >= 77 && armaduraroll <= 83) {
      return "Carapaça demoníaca"
    } else if (armaduraroll >= 84 && armaduraroll <= 88) {
      return "Escudo do eclipse"
    } else if (armaduraroll >= 89 && armaduraroll <= 93) {
      return "Escudo de Azgher"
    } else {
      return "Armadura da luz"
    }
  }
  
  function acessorioMenor() {
    acess = rolldice(1, 100)
  
    if (acess == 1 || acess == 2) {
      return "Anel do sustento"
    } else if (acess >= 3 && acess <= 7) {
      return "Bainha mágica"
    } else if (acess >= 8 && acess <= 12) {
      return "Corda da escalada"
    } else if (acess == 13 || acess == 14) {
      return "Ferraduras da velocidade"
    } else if (acess >= 15 && acess <= 19) {
      return "Garrafa da fumaça eterna"
    } else if (acess >= 20 && acess <= 24) {
      return "Gema da luminosidade"
    } else if (acess >= 25 && acess <= 29) {
      return "Manto élfico"
    } else if (acess >= 30 && acess <= 34) {
      return "Mochila de carga"
    } else if (acess >= 35 && acess <= 40) {
      return "Brincos da sagacidade"
    } else if (acess >= 41 && acess <= 46) {
      return "Luvas da delicadeza"
    } else if (acess >= 47 && acess <= 52) {
      return "Manoplas da força do ogro"
    } else if (acess >= 53 && acess <= 59) {
      return "Manto da resistência"
    } else if (acess >= 60 && acess <= 65) {
      return "Manto do fascínio"
    } else if (acess >= 66 && acess <= 71) {
      return "Pingente da sensatez"
    } else if (acess >= 72 && acess <= 77) {
      return "Torque do vigor"
    } else if (acess >= 78 && acess <= 82) {
      return "Chapéu do disfarce"
    } else if (acess == 83 || acess == 84) {
      return "Flauta fantasma"
    } else if (acess >= 85 && acess <= 89) {
      return "Lanterna da revelação"
    } else if (acess >= 90 && acess <= 96) {
      return "Anel da proteção"
    } else if (acess == 97 || acess == 98) {
      return "Anel do escudo mental"
    } else {
      return "Pingente da saúde"
    }
  }
  
  function acessorioMedio() {
    acess = rolldice(1, 100)
  
    if (acess >= 1 && acess <= 4) {
      return "Anel de telecinesia"
    } else if (acess >= 5 && acess <= 8) {
      return "Bola de cristal"
    } else if (acess == 9 || acess == 10) {
      return "Caveira maldita"
    } else if (acess >= 11 && acess <= 14) {
      return "Botas aladas"
    } else if (acess >= 15 && acess <= 18) {
      return "Braceletes de bronze"
    } else if (acess >= 19 && acess <= 24) {
      return "Anel da energia"
    } else if (acess >= 25 && acess <= 30) {
      return "Anel da vitalidade"
    } else if (acess >= 31 && acess <= 34) {
      return "Anel da invisibilidade"
    } else if (acess >= 35 && acess <= 38) {
      return "Braçadeiras do arqueiro"
    } else if (acess >= 39 && acess <= 42) {
      return "Brincos de Marah"
    } else if (acess >= 43 && acess <= 46) {
      return "Faixas do pugilista"
    } else if (acess >= 47 && acess <= 50) {
      return "Manto da aranha"
    } else if (acess >= 51 && acess <= 54) {
      return "Vassoura voadora"
    } else if (acess >= 55 && acess <= 58) {
      return "Símbolo abençoado"
    } else if (acess >= 59 && acess <= 64) {
      return "Amuleto da robustez"
    } else if (acess >= 65 && acess <= 68) {
      return "Botas velozes"
    } else if (acess >= 69 && acess <= 74) {
      return "Cinto da força do gigante"
    } else if (acess >= 75 && acess <= 80) {
      return "Coroa majestosa"
    } else if (acess >= 81 && acess <= 86) {
      return "Estola da serenidade"
    } else if (acess == 87 || acess == 88) {
      return "Manto do morcego"
    } else if (acess >= 89 && acess <= 94) {
      return "Pulseiras da celeridade"
    } else {
      return "Tiara da sapiência"
    } 
  }
  
  function acessorioMaior() {
    acess = rolldice(1, 100)
  
    if (acess == 1 || acess == 2) {
      return "Elmo do teletransporte"
    } else if (acess == 3 || acess == 4) {
      return "Gema da telepatia"
    } else if (acess >= 5 && acess <= 9) {
      return "Gema elemental"
    } else if (acess >= 10 && acess <= 15) {
      return "Manual da saúde corporal"
    } else if (acess >= 16 && acess <= 21) {
      return "Manual do bom exercício"
    } else if (acess >= 22 && acess <= 27) {
      return "Manual dos movimentos precisos"
    } else if (acess >= 28 && acess <= 34) {
      return "Medalhão de Lena"
    } else if (acess >= 35 && acess <= 40) {
      return "Tomo da compreensão"
    } else if (acess >= 41 && acess <= 46) {
      return "Tomo da liderança e influência"
    } else if (acess >= 47 && acess <= 52) {
      return "Tomo dos grandes pensamentos"
    } else if (acess >= 53 && acess <= 57) {
      return "Anel refletor"
    } else if (acess >= 58 && acess <= 60) {
      return "Cinto do campeão"
    } else if (acess >= 61 && acess <= 67) {
      return "Colar guardião"
    } else if (acess >= 68 && acess <= 72) {
      return "Estatueta animista"
    } else if (acess >= 73 && acess <= 77) {
      return "Anel da liberdade"
    } else if (acess >= 78 && acess <= 82) {
      return "Tapete voador"
    } else if (acess >= 83 && acess <= 87) {
      return "Braceletes de ouro"
    } else if (acess == 88 || acess == 89) {
      return "Espelho da oposição"
    } else if (acess >= 90 && acess <= 94) {
      return "Robe do arquimago"
    } else if (acess == 95 || acess == 96) {
      return "Orbe das tempestades"
    } else if (acess == 97 && acess == 98) {
      return "Anel da regeneração"
    } else {
      return "Espelho do aprisionamento"
    }
  }
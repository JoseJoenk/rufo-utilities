function rolldice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

/*Função pra definir a categoria quando cair Equipamento*/
export function equipamento(roll) {
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
  export function arma() {
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
  export function armadura() {
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
  export function esoterico() {
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
  export function cetro() {
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
  export function tomo() {
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
  export function diverso() {
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
  export function potion(num) {
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
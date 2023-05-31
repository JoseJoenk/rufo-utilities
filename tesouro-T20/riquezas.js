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
function calculaNota(ex, p1, p2) {
  let pesoNotaP1 = p1*2
  let pesoNotaP2 = p2*3
  
  let nota = ex + pesoNotaP1 + pesoNotaP2
  let notaTotal = nota / 6
  
  if (notaTotal>=9){
    return calculo = "A"
  }
  else if (notaTotal <9 && notaTotal>=7.5) {
    return calculo = "B"
  }
  
  else if (notaTotal<7.5 && notaTotal>=6){
    return calculo = "C"
  }
  else if (notaTotal<6){
    return calculo = "D"
  }  
return calculo
}
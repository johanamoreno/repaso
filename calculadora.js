function getValorSuma(){
    let value1 = parseInt(document.getElementById('numero1').value)
    let value2 = parseInt(document.getElementById('numero2').value)
  
    document.getElementById('suma').textContent = value1 + value2
  }
  
  function getValorResta(){
    let value1 = parseInt(document.getElementById('numero1').value)
    let value2 = parseInt(document.getElementById('numero2').value)
  
    document.getElementById('resta').textContent = value1 - value2
    
  }
  
  function getValorMulti(){
    let value1 = parseInt(document.getElementById('numero1').value)
    let value2 = parseInt(document.getElementById('numero2').value)
  
    document.getElementById('multi').textContent = value1 * value2
    
  }
  
  function getValorDivi(){
    let value1 = parseInt(document.getElementById('numero1').value)
    let value2 = parseInt(document.getElementById('numero2').value)
  
    document.getElementById('divi').textContent = value1 / value2
    
    
  }
  
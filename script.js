var val1 = 1
var val2 = 1
var val3 = 1
function compra(x){
    if(x == 1){
      if(val1 < 10){
        let mouse =  document.getElementById("mouse")
        mouse.innerHTML = val1++ 
      }else{
        alert("Você só pode comprar nove itens de cada por vez")
      }
    }
    if(x == 2){
      if(val2 < 10){
        let mouse =  document.getElementById("teclado")
        teclado.innerHTML = val2++      
      }else{
        alert("Você só pode comprar nove itens de cada por vez") 
      }
    }
    if(x == 3){
      if(val3 < 10){
        let headset =  document.getElementById("headset")
        headset.innerHTML = val3++  
      }else{
        alert("Você só pode comprar nove itens de cada por vez") 
      }
    }
}
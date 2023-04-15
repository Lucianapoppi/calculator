var display = document.getElementsByClassName("display");
var button = document.querySelectorAll("button");
var caracteres = ""
var botaoClicado = ""

button.forEach((button) => {
    button.addEventListener("click",()=>{
        botaoClicado = button.value;
        
        

        if(button.value=== "=") {
            display[0].value = eval(caracteres);
        }else if(button.value=== "c") {
            display[0].value = ""
            caracteres = ""
        }
        
        else {
            // adiciona o botão clicado aos caracteres e atualiza o display
            caracteres = caracteres + botaoClicado;
            display[0].value = caracteres;

            
        }
        
        
    })
  });
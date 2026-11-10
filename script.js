const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbz9PWT_HPVC-1tFpS72IYypIpR1FtnEPY1kVUT56F8LXYtdZ8h6SGT6VreSX90wTYbB/exec";

const form = document.getElementById("formulario")
const aviso = document.getElementById("aviso")

form.addEventListener("submit", function(evento){
    evento.preventDefault() // impede que a pagina atualize 

    aviso.textContent = "Enviando..."
     fetch(URL_PLANILHA,{
        method:"POST",
        mode: "no-cors",
        body: new FormData(form)
    })

    .then(function(){
        aviso.textContent = "Enviado com sucesso!";
        form.reset()
    })
    .catch(function(){
        aviso.textContent = "Erro ao enviar. Tente de novo";
    })

})

$(document).ready(function(){
    let r = confirm("Seja bem-vindo ao Game Mania! \nDeseja se inscrever na nossa Newsletter e aproveitar as melhores promoções?");
    if (r == true){
        prompt("Digite seu e-mail e fique por dentro das novidades!")
        return true;}
});

$(".card #compra").click(()=>{
    let x
    let cep = prompt("Digite seu cep para consultar o valor e tempo de entrega:")

    if(cep.length == 8){
        x = alert("Envio padrão: 5 - 8 dias úteis\nEntrega relâmpago: 2 dias úteis")
        return true
    }else{
        x = alert("CEP inválido")
        return false
    }
})

// não consegui refazer a função de slide utilzando jquery.
// por razões desconhecidas, a função slide não opera na section 'banner-toggle'.

function slide1(){
    document.getElementById('foto-banner').src="img/pexels-photo.jpeg";
    setTimeout("slide2()",2000)
}
function slide2(){
    document.getElementById('foto-banner').src="img/player-man.jpg";
    setTimeout("slide3()",2000)
}
function slide3(){
    document.getElementById('foto-banner').src="img/player-boy.jpeg";
    setTimeout("slide1()",2000)
}

$("#voltar-ao-topo").click(()=>{
    scrollTo(0,0)
})

$("#btn-menu").click(function () {
    $("#menu-toggle").addClass("menu-mobile");
});

$("#btn-menu").click(function () {
    $("#menu-toggle").addClass("menu-laptop");
});
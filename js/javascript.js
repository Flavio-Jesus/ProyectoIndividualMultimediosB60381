var listaimg = ["img/photo3.jpg","img/photo2.jpg","img/photo1.jpg"];
var img = 0;
function roterimages(){
    if (img > 2){
        img=0;
    }
    document.getElementById("Photo").src = listaimg[img];
    img++;
}

temporizador =setInterval("roterimages()", 4000);
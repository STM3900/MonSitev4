
//Pour les panels
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#flip4").click(function(){
        $("#panel4").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#flip5").click(function(){
        $("#panel5").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#flip6").click(function(){
        $("#panel6").slideToggle("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel2").slideUp("slow");
    });
});

//Le convertisseur
function convDecimal()
{
    decimal = document.getElementById("decimal");
    hexadecimal = document.getElementById("hexadecimal");
    binaire = document.getElementById("binaire");
    
    hexadecimal.value = (decimal.value-0).toString(16);
    binaire.value = (decimal.value-0).toString(2);
}

function convHexadecimal()
{
    decimal = document.getElementById("decimal");
    hexadecimal = document.getElementById("hexadecimal");
    binaire = document.getElementById("binaire");
    
    decimal.value = parseInt(hexadecimal.value,16);
    binaire.value = (parseInt(hexadecimal.value,16)).toString(2);
}

function convBinaire()
{
    decimal = document.getElementById("decimal");
    hexadecimal = document.getElementById("hexadecimal");
    binaire = document.getElementById("binaire");
    
    decimal.value = parseInt(binaire.value,2);
    hexadecimal.value = (parseInt(binaire.value,2)).toString(16);
}

//Pour le scroll
$(document).ready(function (){
    $("#hdpmenu").click(function (){
        $('html, body').animate({
            scrollTop: $("#hdp").offset().top
        }, 1000);
    });
    $("#parcoursmenu").click(function (){
        $('html, body').animate({
            scrollTop: $("#parcours").offset().top
        }, 1000);
    });
    $("#compmenu").click(function (){
        $('html, body').animate({
            scrollTop: $("#comp").offset().top
        }, 1000);
    });
    $("#projetmenu").click(function (){
        $('html, body').animate({
            scrollTop: $("#projets").offset().top
        }, 1000);
    });
    $("#contactmenu").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});

//Pour les flip
$(document).ready(function (){
    $("#temacomp").click(function (){
        $('html, body').animate({
            scrollTop: $("#flip").offset().top
        }, 1000);
        $("#panel").slideDown("slow");
        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#temacomp2").click(function (){
        $('html, body').animate({
            scrollTop: $("#flip").offset().top
        }, 1000);
        $("#panel").slideDown("slow");
        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#temacomp3").click(function (){
        $('html, body').animate({
            scrollTop: $("#flip").offset().top
        }, 1000);
        $("#panel").slideDown("slow");
        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#starlightcomp").click(function (){
        $('html, body').animate({
            scrollTop: $("#flip2").offset().top
        }, 1000);
        $("#panel2").slideDown("slow");
        $("#panel").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#lasrcomp").click(function (){
        $('html, body').animate({
            scrollTop: $("#flip3").offset().top
        }, 1000);
        $("#panel3").slideDown("slow");
        $("#panel").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#convcomp").click(function (){
        $('html, body').animate({
            scrollTop: $("#flip4").offset().top
        }, 1000);
        $("#panel4").slideDown("slow");
        $("#panel").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel5").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#jeucomp").click(function (){
        $('html, body').animate({
            scrollTop: $("#flip5").offset().top
        }, 1000);
        $("#panel5").slideDown("slow");
        $("#panel").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel6").slideUp("slow");
    });
    $("#sowcomp").click(function (){
        $('html, body').animate({
            scrollTop: $("#flip6").offset().top
        }, 1000);
        $("#panel6").slideDown("slow");
        $("#panel").slideUp("slow");
        $("#panel2").slideUp("slow");
        $("#panel3").slideUp("slow");
        $("#panel4").slideUp("slow");
        $("#panel5").slideUp("slow");
    });
});

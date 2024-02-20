
$("#enviarCorreo").on("click",function(){
    alert("El correo fue enviado correctamente :)")
})

$(function(){
    $('[data-bs-toggle="tooltip"]').tooltip()
})

// Modifico el atributo color
$("#ingredientes").on("dblclick",function () {
    $("#ingredientes").css("color", "red");
})

// Modifico el atributo color
$("#preparacion").on("dblclick",function () {
    $("#preparacion").css("color", "red");
})


// toggle
$(".tarjeta").on("click",function () {
    $(".card-text").slideToggle(function(){});
})

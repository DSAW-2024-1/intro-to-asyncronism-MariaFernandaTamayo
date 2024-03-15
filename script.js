
$(document).ready(function () {
    // Variable para almacenar la visibilidad del botón de retorno
    var isSearchResultVisible = false;

    // Función para manejar la búsqueda por nombre
    $("#search-btn").on("click", function () {
        var searchTerm = $("#search").val().toLowerCase();
        // Ocultar mensaje de "No encontrado"
        $("#not-found-message").hide();

        // Ocultar todos los contenedores de personajes
        $(".character-container").hide();

        // Mostrar solo los contenedores que coinciden con la búsqueda
        var foundCharacters = $(".character-container").filter(function () {
            var characterName = $(this).find(".character-name").text().toLowerCase();
            return characterName.startsWith(searchTerm);
        });

        // Mostrar los contenedores encontrados o el mensaje de "No encontrado"
        if (foundCharacters.length > 0) {
            foundCharacters.show();
            // Desplazar la página hasta el inicio del contenido
            $("html, body").animate({ scrollTop: foundCharacters.first().offset().top }, 500);
            // Mostrar el botón de retorno
            $("#return-btn").show();
            // Cambiar la visibilidad del botón de retorno
            isSearchResultVisible = true;
        } else {
            $("#not-found-message").show();
            // Ocultar el botón de retorno
            $("#return-btn").hide();
            // Cambiar la visibilidad del botón de retorno
            isSearchResultVisible = false;
        }
    });

    // Función para manejar el clic en el botón de retorno
    $("#return-btn").on("click", function () {
        // Ocultar mensaje de "No encontrado" al regresar a la página principal
        $("#not-found-message").hide();
        // Ocultar todos los contenedores de personajes
        $(".character-container").hide();
        // Mostrar todos los contenedores de personajes en la página principal
        $(".character-container").show();
        // Limpiar el cuadro de búsqueda
        $("#search").val("");
        // Ocultar el botón de retorno
        $(this).hide();
        // Desplazar la página al inicio
        $("html, body").animate({ scrollTop: 0 }, 500);
        // Cambiar la visibilidad del botón de retorno
        isSearchResultVisible = false;
    });

    // Función para manejar el cambio en el cuadro de búsqueda
    $("#search").on("input", function () {
        // Ocultar o mostrar el botón de retorno según si se realizó una búsqueda
        if ($(this).val().trim().length > 0) {
            $("#return-btn").toggle(isSearchResultVisible);
        } else {
            $("#return-btn").hide();
        }
    });


    // Función para mostrar la frase de Homero en una nueva ventana modal
    function mostrarFraseHomero() {
        // Frase predeterminada para Homero
        var fraseHomero = "A la grande le puse cuca";

        // Abrir una nueva ventana modal más grande con la frase y los estilos
        var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
        nuevaVentana.document.write(
            "<html><head><title>Frase de Homero</title>" +
            "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
            "<style>" +
            ".modal {" +
            "    font-family: 'Arial', sans-serif;" +
            "    text-align: center;" +
            "}" +
            ".modal-content {" +
            "    background-color: #fff;" +
            "    padding: 30px;" +
            "    border-radius: 12px;" +
            "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
            "}" +
            ".modal-image {" +
            "    max-width: 100%;" +
            "    border-radius: 12px;" +
            "    margin-bottom: 20px;" +
            "}" +
            ".modal-close {" +
            "    position: absolute;" +
            "    top: 20px;" +
            "    right: 20px;" +
            "    font-size: 28px;" +
            "    cursor: pointer;" +
            "    color: #555;" +
            "}" +
            ".modal p {" +
            "    font-size: 20px;" +
            "    color: #333;" +
            "}" +
            "</style>" +
            "</head><body>" +
            "<div class='modal'>" +
            "<span class='modal-close' onclick='window.close()'>&times;</span>" +
            "<div class='modal-content'>" +
            "<img src='img/Homero.jpg' alt='Homero' class='modal-image' />" +
            "<p>" + fraseHomero + "</p>" +
            "</div></div></body></html>"
        );
    }
    // Evento de clic para el botón de Homero
    $(".homero-btn").on("click", function () {
        // Llamar a la función para mostrar la frase de Homero en una nueva ventana modal
        mostrarFraseHomero();
    });
    // Función para mostrar la frase de Marge en una nueva ventana modal
    function mostrarFraseMarge() {
        // Frase para Marge
        var fraseMarge = "¡Bart, deja de molestar a Satanás!";

        // Abrir una nueva ventana modal con la frase y los estilos
        var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
        nuevaVentana.document.write(
            "<html><head><title>Frase de Marge</title>" +
            "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
            "<style>" +
            ".modal {" +
            "    font-family: 'Arial', sans-serif;" +
            "    text-align: center;" +
            "}" +
            ".modal-content {" +
            "    background-color: #fff;" +
            "    padding: 30px;" +
            "    border-radius: 12px;" +
            "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
            "}" +
            ".modal-image {" +
            "    max-width: 100%;" +
            "    border-radius: 12px;" +
            "    margin-bottom: 20px;" +
            "}" +
            ".modal-close {" +
            "    position: absolute;" +
            "    top: 20px;" +
            "    right: 20px;" +
            "    font-size: 28px;" +
            "    cursor: pointer;" +
            "    color: #555;" +
            "}" +
            ".modal p {" +
            "    font-size: 20px;" +
            "    color: #333;" +
            "}" +
            "</style>" +
            "</head><body>" +
            "<div class='modal'>" +
            "<span class='modal-close' onclick='window.close()'>&times;</span>" +
            "<div class='modal-content'>" +
            "<img src='img/marge.jpg' alt='Marge' class='modal-image' />" +
            "<p>" + fraseMarge + "</p>" +
            "</div></div></body></html>"
        );
    }

    // Evento de clic para el botón de Marge
    $(".marge-btn").on("click", function () {
        // Llamar a la función para mostrar la frase de Marge en una nueva ventana modal
        mostrarFraseMarge();
    });
// Función para mostrar la frase de Lisa en una nueva ventana modal
function mostrarFraseLisa() {
    // Frase predeterminada para Lisa
    var fraseLisa = "Cuando estoy triste abro un libro e ignoro al mundo.";

    // Abrir una nueva ventana modal más grande con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Lisa</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/lisa.png' alt='Lisa' class='modal-image' />" +
        "<p>" + fraseLisa + "</p>" +
        "</div></div></body></html>"
    );
}
    // Evento de clic para el botón de Lisa
    $(".lisa-btn").on("click", function () {
        // Llamar a la función para mostrar la frase de Lisa en una nueva ventana
        mostrarFraseLisa();
    });
    // Función para mostrar la frase de Bart en una nueva ventana modal
function mostrarFraseBart() {
    // Frase predeterminada para Bart
    var fraseBart = "Cómete mis pantalones.";

    // Abrir una nueva ventana modal más grande con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Bart</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/bart.png' alt='Bart' class='modal-image' />" +
        "<p>" + fraseBart + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Bart
$(".bart-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Bart en una nueva ventana modal
    mostrarFraseBart();
});
// Función para mostrar la frase de Bola de Nieve en una nueva ventana modal
function mostrarFraseBola() {
    // Frase predeterminada para Bola de Nieve
    var fraseBola = "Miauuuu" + "*Se atora*";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Bola de Nieve</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/BolaNieve.jpg' alt='Bola de Nieve' class='modal-image' />" +
        "<p>" + fraseBola + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Bola de Nieve
$(".bola-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Bola de Nieve en una nueva ventana
    mostrarFraseBola();
});
// Función para mostrar la frase de Ayudante de Santa en una nueva ventana modal
function mostrarFraseAyudante() {
    // Frase predeterminada para Ayudante de Santa
    var fraseAyudante = "Guau Guau";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Ayudante de Santa</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/AyudanteSanta.jpg' alt='Ayudante de Santa' class='modal-image' />" +
        "<p>" + fraseAyudante + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Ayudante de Santa
$(".ayudante-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Ayudante de Santa en una nueva ventana
    mostrarFraseAyudante();
});
// Función para mostrar la frase de Abraham en una nueva ventana modal
function mostrarFraseAbraham() {
    // Frase predeterminada para Abraham
    var fraseAbraham = "Cuando era joven, solía ser 'cool', pero ahora ya no sé qué significa eso.";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Abraham Simpson</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Abraham.png' alt='Abraham Simpson' class='modal-image' />" +
        "<p>" + fraseAbraham + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Abraham
$(".abraham-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Abraham en una nueva ventana
    mostrarFraseAbraham();
});
// Función para mostrar la frase de Maggie en una nueva ventana modal
function mostrarFraseMaggie() {
    // Frase predeterminada para Maggie
    var fraseMaggie = "Chuk Chuk (sonido de chupete)";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Maggie Simpson</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Maggie.jpg' alt='Maggie Simpson' class='modal-image' />" +
        "<p>" + fraseMaggie + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Maggie
$(".maggie-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Maggie en una nueva ventana
    mostrarFraseMaggie();
});
// Función para mostrar la frase de Ned Flanders en una nueva ventana modal
function mostrarFraseFlanders() {
    // Frase predeterminada para Ned Flanders
    var fraseFlanders = "¡Mi amiguillo, estoy de acuerdillo!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Ned Flanders</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/flanders.jpg' alt='Ned Flanders' class='modal-image' />" +
        "<p>" + fraseFlanders + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Ned Flanders
$(".flanders-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Ned Flanders en una nueva ventana
    mostrarFraseFlanders();
});
// Función para mostrar la frase de Rod Flanders en una nueva ventana modal
function mostrarFraseRod() {
    // Frase predeterminada para Rod Flanders
    var fraseRod = "¡La Biblia dice que debemos amar a nuestros prójimos, señor Simpson!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Rod Flanders</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Rod.jpg' alt='Rod Flanders' class='modal-image' />" +
        "<p>" + fraseRod + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Rod Flanders
$(".rod-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Rod Flanders en una nueva ventana
    mostrarFraseRod();
});
// Función para mostrar la frase de Todd Flanders en una nueva ventana modal
function mostrarFraseTodd() {
    // Frase predeterminada para Todd Flanders
    var fraseTodd = "¡Soy gay papi, soy gay!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Todd Flanders</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/todd.jpg' alt='Todd Flanders' class='modal-image' />" +
        "<p>" + fraseTodd + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Todd Flanders
$(".todd-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Todd Flanders en una nueva ventana
    mostrarFraseTodd();
});
// Función para mostrar la frase de Milhouse Van Houten en una nueva ventana modal
function mostrarFraseMilhouse() {
    // Frase predeterminada para Milhouse Van Houten
    var fraseMilhouse = "Aaaaay mis anteojos!﻿";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Milhouse Van Houten</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/milhouse.jpg' alt='Milhouse Van Houten' class='modal-image' />" +
        "<p>" + fraseMilhouse + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Milhouse Van Houten
$(".milhouse-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Milhouse Van Houten en una nueva ventana
    mostrarFraseMilhouse();
});
// Función para mostrar la frase de Martin Prince en una nueva ventana modal
function mostrarFraseMartin() {
    // Frase predeterminada para Martin Prince
    var fraseMartin = "Mi plan se está realizando y pronto yo seré la reina del verano";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Martin Prince</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/martin.jpg' alt='Martin Prince' class='modal-image' />" +
        "<p>" + fraseMartin + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Martin Prince
$(".martin-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Martin Prince en una nueva ventana
    mostrarFraseMartin();
});
// Función para mostrar la frase de Nelson en una nueva ventana modal
function mostrarFraseNelson() {
    // Frase predeterminada para Nelson
    var fraseNelson = "No puedo hablar; estoy quemando popó";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Nelson Muntz</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/nelson.jpg' alt='Nelson Muntz' class='modal-image' />" +
        "<p>" + fraseNelson + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Nelson
$(".nelson-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Nelson en una nueva ventana
    mostrarFraseNelson();
});
// Función para mostrar la frase de Rafa en una nueva ventana modal
function mostrarFraseRafa() {
    // Frase predeterminada para Rafa
    var fraseRafa = "Ahora me gustan los hombres";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Rafa Gorgory</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/rafa.jpg' alt='Rafa Gorgory' class='modal-image' />" +
        "<p>" + fraseRafa + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Rafa
$(".rafa-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Rafa en una nueva ventana
    mostrarFraseRafa();
});
// Función para mostrar la frase de Smithers en una nueva ventana modal
function mostrarFraseSmithers() {
    // Frase predeterminada para Smithers
    var fraseSmithers = "Ah, señor, lo reconocí por ese llamativo juguete";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Waylon Smithers</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Smithers.jpg' alt='Waylon Smithers' class='modal-image' />" +
        "<p>" + fraseSmithers + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Smithers
$(".smithers-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Smithers en una nueva ventana
    mostrarFraseSmithers();
});
// Función para mostrar la frase de Burns en una nueva ventana modal
function mostrarFraseBurns() {
    // Frase predeterminada para Burns
    var fraseBurns = "Smithers, ¿Quién es ese hombre? (cada vez que ve a Homer)";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Mr. Burns</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/burns.jpg' alt='Mr. Burns' class='modal-image' />" +
        "<p>" + fraseBurns + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Burns
$(".burns-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Burns en una nueva ventana
    mostrarFraseBurns();
});
// Función para mostrar la frase de Joe Quimby en una nueva ventana modal
function mostrarFraseQuimby() {
    // Frase predeterminada para Joe Quimby
    var fraseQuimby = "¡No soy analfabeto!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Alcalde Joe Quimby</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Alcalde.jpg' alt='Alcalde Joe Quimby' class='modal-image' />" +
        "<p>" + fraseQuimby + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Joe Quimby
$(".quimby-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Joe Quimby en una nueva ventana
    mostrarFraseQuimby();
});
// Función para mostrar la frase de Willie en una nueva ventana modal
function mostrarFraseWillie() {
    // Frase predeterminada para Willie
    var fraseWillie = "¡Hah, no hay animal vivo que pueda vencer a un escocés!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Willie</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/willy.jpg' alt='Willie' class='modal-image' />" +
        "<p>" + fraseWillie + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Willie
$(".willy-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Willie en una nueva ventana
    mostrarFraseWillie();
});
// Función para mostrar la frase de Skinner en una nueva ventana modal
function mostrarFraseSkinner() {
    // Frase predeterminada para Skinner
    var fraseSkinner = "Bart...ya sé que fuiste tú";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Skinner</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/skinner.jpg' alt='Skinner' class='modal-image' />" +
        "<p>" + fraseSkinner + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Skinner
$(".skinner-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Skinner en una nueva ventana
    mostrarFraseSkinner();
});
// Función para mostrar la frase de Edna en una nueva ventana modal
function mostrarFraseEdna() {
    // Frase predeterminada para Edna
    var fraseEdna = "Recuerden, niños: mientras peor salga el exámen, más fondos nos dan, así que no se esfuercen mucho.";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Edna</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Edna.jpg' alt='Edna' class='modal-image' />" +
        "<p>" + fraseEdna + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Edna
$(".edna-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Edna en una nueva ventana
    mostrarFraseEdna();
});
// Función para mostrar la frase de Timothy en una nueva ventana modal
function mostrarFraseTimothy() {
    // Frase predeterminada para Timothy
    var fraseTimothy = "Dios nos ha enviado una roca mortífera desde el cielo para mostrarnos su amor.";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Timothy</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/timothy.jpg' alt='Timothy' class='modal-image' />" +
        "<p>" + fraseTimothy + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Timothy
$(".timothy-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Timothy en una nueva ventana
    mostrarFraseTimothy();
});
// Función para mostrar la frase de Selma en una nueva ventana modal
function mostrarFraseSelma() {
    // Frase predeterminada para Selma
    var fraseSelma = "Quiero tener un bebé antes de que sea tarde.";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Selma</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Selma.png' alt='Selma' class='modal-image' />" +
        "<p>" + fraseSelma + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Selma
$(".selma-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Selma en una nueva ventana
    mostrarFraseSelma();
});
// Función para mostrar la frase de Patty en una nueva ventana modal
function mostrarFrasePatty() {
    // Frase predeterminada para Patty
    var frasePatty = "El amor es una mierda, cariño. Solo causa dolor y sufrimiento.";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Patty</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Patty.jpg' alt='Patty' class='modal-image' />" +
        "<p>" + frasePatty + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Patty
$(".patty-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Patty en una nueva ventana
    mostrarFrasePatty();
});
// Función para mostrar la frase de Mona en una nueva ventana modal
function mostrarFraseMona() {
    // Frase predeterminada para Mona
    var fraseMona = "¡Mira qué bien se lo está pasando el pequeño Homey!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Mona</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Mona.png' alt='Mona' class='modal-image' />" +
        "<p>" + fraseMona + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Mona
$(".mona-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Mona en una nueva ventana
    mostrarFraseMona();
});
// Función para mostrar la frase de Manjula en una nueva ventana modal
function mostrarFraseManjula() {
    // Frase predeterminada para Manjula
    var fraseManjula = "¡¡Esto no es una biblioteca!!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Manjula</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/manjula.jpg' alt='Manjula' class='modal-image' />" +
        "<p>" + fraseManjula + "</p>" +
        "</div></div></body></html>"
    );
}

// Evento de clic para el botón de Manjula
$(".manjula-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Manjula en una nueva ventana
    mostrarFraseManjula();
});
// Función para mostrar la frase de Apu en una nueva ventana modal
function mostrarFraseApu() {
    // Frase predeterminada para Apu
    var fraseApu = "Le juro por los numerosos brazos de Vishnu que eso es mentira";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Apu</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/apu.jpg' alt='Apu' class='modal-image' />" +
        "<p>" + fraseApu + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Apu
$(".apu-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Apu en una nueva ventana
    mostrarFraseApu();
});
// Función para mostrar la frase de Moe en una nueva ventana modal
function mostrarFraseMoe() {
    // Frase predeterminada para Moe
    var fraseMoe = "Nadie se le escapa a Moe";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Moe</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/moe.jpg' alt='Moe' class='modal-image' />" +
        "<p>" + fraseMoe + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Moe
$(".moe-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Moe en una nueva ventana
    mostrarFraseMoe();
});
// Función para mostrar la frase de Barney en una nueva ventana modal
function mostrarFraseBarney() {
    // Frase predeterminada para Barney
    var fraseBarney = "¡¡¡Necesito un trago!!!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Barney</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/barney.jpg' alt='Barney' class='modal-image' />" +
        "<p>" + fraseBarney + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Barney
$(".barney-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Barney en una nueva ventana
    mostrarFraseBarney();
});
// Función para mostrar la frase de Cletus en una nueva ventana modal
function mostrarFraseCletus() {
    // Frase predeterminada para Cletus
    var fraseCletus = "¿Es usted una especie de imbécil?";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Cletus</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/cletus.jpg' alt='Cletus' class='modal-image' />" +
        "<p>" + fraseCletus + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Cletus
$(".cletus-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Cletus en una nueva ventana
    mostrarFraseCletus();
});
// Función para mostrar la frase de Luann en una nueva ventana modal
function mostrarFraseLuann() {
    // Frase predeterminada para Luann
    var fraseLuann = "Milhouse, eres mi pequeño tesoro desafortunado";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Luann</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/LuannV.png' alt='Luann' class='modal-image' />" +
        "<p>" + fraseLuann + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Luann
$(".luann-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Luann en una nueva ventana
    mostrarFraseLuann();
});
// Función para mostrar la frase de Kirk en una nueva ventana modal
function mostrarFraseKirk() {
    // Frase predeterminada para Kirk
    var fraseKirk = "¡Ay, Milhouse, la paciencia es para los muertos! ¡Vamos a hacer algo ahora mismo!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Kirk</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/KirkV.jpg' alt='Kirk' class='modal-image' />" +
        "<p>" + fraseKirk + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Kirk
$(".kirk-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Kirk en una nueva ventana
    mostrarFraseKirk();
});
// Función para mostrar la frase de Jefe Gorgory en una nueva ventana modal
function mostrarFraseGorgory() {
    // Frase predeterminada para Jefe Gorgory
    var fraseGorgory = "¿Por qué siempre yo? ¿Por qué nadie más quiere hacer el trabajo sucio?";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Jefe Gorgory</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/Clancy.jpg' alt='Jefe Gorgory' class='modal-image' />" +
        "<p>" + fraseGorgory + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Jefe Gorgory
$(".gorgory-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Jefe Gorgory en una nueva ventana
    mostrarFraseGorgory();
});
// Función para mostrar la frase de Lenny en una nueva ventana modal
function mostrarFraseLenny() {
    // Frase predeterminada para Lenny
    var fraseLenny = "Oye Homero, ¿recuerdas cuando me apuñalaron en ese callejón? Pues, ese fue el día más doloroso de mi vida.";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Lenny</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/lenny.png' alt='Lenny' class='modal-image' />" +
        "<p>" + fraseLenny + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Lenny
$(".lenny-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Lenny en una nueva ventana
    mostrarFraseLenny();
});
// Función para mostrar la frase de Carl en una nueva ventana modal
function mostrarFraseCarl() {
    // Frase predeterminada para Carl
    var fraseCarl = "Homer, si no lo intentas, nunca fallarás.";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Carl</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/carl.jpg' alt='Carl' class='modal-image' />" +
        "<p>" + fraseCarl + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Carl
$(".carl-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Carl en una nueva ventana
    mostrarFraseCarl();
});
// Función para mostrar la frase de Bob Patiño en una nueva ventana modal
function mostrarFraseBob() {
    // Frase predeterminada para Bob Patiño
    var fraseBob = "¡Eres un tonto, Simpson! ¡Un tonto delicioso!";

    // Abrir una nueva ventana modal con la frase y los estilos
    var nuevaVentana = window.open("", "_blank", "width=800, height=500, top=100, left=100");
    nuevaVentana.document.write(
        "<html><head><title>Frase de Bob Patiño</title>" +
        "<link rel='stylesheet' type='text/css' href='styles-popup.css'>" +
        "<style>" +
        ".modal {" +
        "    font-family: 'Arial', sans-serif;" +
        "    text-align: center;" +
        "}" +
        ".modal-content {" +
        "    background-color: #fff;" +
        "    padding: 30px;" +
        "    border-radius: 12px;" +
        "    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);" +
        "}" +
        ".modal-image {" +
        "    max-width: 100%;" +
        "    border-radius: 12px;" +
        "    margin-bottom: 20px;" +
        "}" +
        ".modal-close {" +
        "    position: absolute;" +
        "    top: 20px;" +
        "    right: 20px;" +
        "    font-size: 28px;" +
        "    cursor: pointer;" +
        "    color: #555;" +
        "}" +
        ".modal p {" +
        "    font-size: 20px;" +
        "    color: #333;" +
        "}" +
        "</style>" +
        "</head><body>" +
        "<div class='modal'>" +
        "<span class='modal-close' onclick='window.close()'>&times;</span>" +
        "<div class='modal-content'>" +
        "<img src='img/bobPatiño.jpg' alt='Bob Patiño' class='modal-image' />" +
        "<p>" + fraseBob + "</p>" +
        "</div></div></body></html>"
    );
}
// Evento de clic para el botón de Bob Patiño
$(".bob-btn").on("click", function () {
    // Llamar a la función para mostrar la frase de Bob Patiño en una nueva ventana
    mostrarFraseBob();
});

    // Función para cargar las imágenes, botones y frases de forma diferida
    function lazyLoadElements() {
        $(".lazy-load").each(function () {
            if ($(this).offset().top < window.innerHeight + $(window).scrollTop()) {
                // Cargar imagen
                var imgSrc = $(this).find("img").attr("data-src");
                $(this).find("img").attr("src", imgSrc);

                // Cargar botón (ajustar según sea necesario)
                $(this).find(".get-quote-btn").removeClass("quote-hidden");

                // Cargar frase (ajustar según sea necesario)
                $(this).find(".quote-container").removeClass("quote-hidden");

                // Quitar la clase lazy-load
                $(this).removeClass("lazy-load");
            }
        });
    }

    // Llamar a la función de carga diferida al cargar la página
    lazyLoadElements();

    // Llamar a la función de carga diferida al hacer scroll
    $(window).scroll(function () {
        lazyLoadElements();
    });

    // Función para aplicar el efecto de opacidad al hacer scroll
    function applyOpacityEffect() {
        $(".character-container").each(function () {
            var containerTop = $(this).offset().top;
            var containerBottom = containerTop + $(this).height();
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + window.innerHeight;

            // Calcular la opacidad basada en la posición del contenedor en la pantalla
            var opacity = 1 - Math.min(1, Math.max(0, (containerTop - windowBottom) / (window.innerHeight / 2)));

            // Aplicar la opacidad al contenedor
            $(this).css("opacity", opacity);
        });
    }

    // Llamar a la función de opacidad al cargar la página
    applyOpacityEffect();

    // Llamar a la función de opacidad al hacer scroll
    $(window).scroll(function () {
        applyOpacityEffect();
        lazyLoadImages();
    });
});
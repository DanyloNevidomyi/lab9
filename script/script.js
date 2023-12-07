$(function(){
    $("#back").click(function() {
        window.location.href = "https://danylonevidomyi.github.io/individual/";
    })

    // ім'я юзера
    let username = prompt("Уведіть ваше ім'я", "User");
    $("#username").text(username);

    // створення карт та їх номіналу
    let six = 6;
    let seven = 7;
    let eight = 8;
    let nine = 9;
    let ten = 10;
    let jack = 2;
    let queen = 3;
    let king = 4;
    let ace = 11;

    let cards = [six, seven, eight, nine, ten, jack, queen, king, ace];

    let userCardScore = 0;
    let computerCardScore = 0;

    // функції кнопки гри
    $("#play-button").click(function(){
        Cards();
        images();
    })

    // випадкові карти юзера
    function Cards(){
        // випадкові карти юзера
        let userRandomCardIndex = Math.floor(Math.random() * cards.length);
        let userSelectedCard = cards[userRandomCardIndex];

        $("#user-card").html("<br>" + userSelectedCard);

        // випадкові карти комп'ютера
        let compRandomCardIndex = Math.floor(Math.random() * cards.length);
        let compSelectedCard = cards[compRandomCardIndex];

        $("#computer-card").html("<br>" + compSelectedCard);

        // порівняння карт
        if(userSelectedCard > compSelectedCard){
            userCardScore += 1;
        }
        else if(userSelectedCard < compSelectedCard){
            computerCardScore += 1;
        }
        else{
            userCardScore += 0;
            computerCardScore += 0;
        }

        $("#scores").text("Очки: " + userCardScore + " - " + computerCardScore);

        // до 3 перемог
        if (userCardScore == 3){
            $("#result-div").text("Вітаю, ви перемогли!");
            $("#play-button").prop('disabled', true);
            $("#play-button").css("background-color", '#babec1');
        }
        else if (computerCardScore == 3){
            $("#result-div").text("На жаль, ви програли");
            $("#play-button").prop('disabled', true);
            $("#play-button").css("background-color", '#babec1');
        }

    }

function images(){
    let userCard = $("#user-card").text();
    let computerCard = $("#computer-card").text();

    // юзер
    switch (userCard){
        case "6":
            $("#user-card").html('<img src="img/six.png" alt="six">');
            break;
        case "7":
            $("#user-card").html('<img src="img/seven.png" alt="seven">');
            break;
        case "8":
            $("#user-card").html('<img src="img/eight.png" alt="eight">');
            break;
        case "9":
            $("#user-card").html('<img src="img/nine.png" alt="nine">');
            break;
        case "10":
            $("#user-card").html('<img src="img/ten.png" alt="ten">');
            break;
        case "2":
            $("#user-card").html('<img src="img/jack.png" alt="jack">');
            break;
        case "3":
            $("#user-card").html('<img src="img/queen.png" alt="queen">');
            break;
        case "4":
            $("#user-card").html('<img src="img/king.png" alt="king">');
            break;
        case "11":
            $("#user-card").html('<img src="img/ace.png" alt="ace">');
            break;
    }

    // комп'ютер
    switch (computerCard){
        case "6":
            $("#computer-card").html('<img src="img/six.png" alt="six">');
            break;
        case "7":
            $("#computer-card").html('<img src="img/seven.png" alt="seven">');
            break;
        case "8":
            $("#computer-card").html('<img src="img/eight.png" alt="eight">');
            break;
        case "9":
            $("#computer-card").html('<img src="img/nine.png" alt="nine">');
            break;
        case "10":
            $("#computer-card").html('<img src="img/ten.png" alt="ten">');
            break;
        case "2":
            $("#computer-card").html('<img src="img/jack.png" alt="jack">');
            break;
        case "3":
            $("#computer-card").html('<img src="img/queen.png" alt="queen">');
            break;
        case "4":
            $("#computer-card").html('<img src="img/king.png" alt="king">');
            break;
        case "11":
            $("#computer-card").html('<img src="img/ace.png" alt="ace">');
            break;
    }
}

    // розпочати нову гру
    $("#new-game").click(function(){
        location.reload();
    })
});
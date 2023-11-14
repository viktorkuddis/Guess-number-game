console.log("hej")

/* Datorn genererar ett slumpmässigt nummer mellan 0 och 100(använd Math.random()).
 */
/* S
Datorn genererar ett slumpmässigt nummer mellan 0 och 100 (använd Math.random()).


pelaren matar in ett tal i en input - ruta, d.v.s det tal som gissas på.Om talet är samma som datorns, så får spelaren ett meddelande att man vunnit.Om talet är lägre än datorn och över 0 får spelaren ett meddelande om att talet är för lågt.Om talet är högre än datorn och mindre än 100 får spelaren ett meddelande om att talet är för högt.Spelaren har 5 chanser på sig att gissa rätt tal.

 */


//Generera random svar mellan 0-100
//Skapa en let variabel som håller antal gissningar
//hämta spelarens gissning och lagra i en variabel let
//vis gissning startar spelaren jämförelsefunktionen.

// om gissnigng  <=5 
//Lägg till värde på gissning och kör jämflrelsegrejen 

//Du har förlorat.


//Slumpa fram ett tal
const FacitTal = Math.floor(Math.random() * 101);
console.log(FacitTal);

//håller spelstats:
let correctAnswer = false;
let gameOver = false;
let remainingGuesses = 5;

const numberInputBox = document.getElementById("numberInput");
const numberInputBtn = document.getElementById("numberInputBtn");
const messageContainer = document.getElementById("messageContainer");
const messageContainerP1 = document.getElementById("messageContainer_p1");
const messageContainerP2 = document.getElementById("messageContainer_p2");
const remainingGuessesParagraph = document.getElementById("remaining-guesses_p");
const guessingHistory = document.getElementById("guessingHistory");




//variabler som håller olika meddelanden
let message;
let guessMessageResult;




numberInputBtn.addEventListener("click", GameON);

//renderar Antalet återstående gissningar initialt(upptaretas under spelets gång.)
remainingGuessesParagraph.textContent = remainingGuesses;

function GameON() {
    console.log("är i checinputfunktion");
    //Hämtar värdet, tar bort white space i början och slutet och gör det till ett nummer(om det går).
    const inputValue = parseInt(numberInputBox.value.trim());
    //rensa inputboxen
    numberInputBox.value = "";

    console.log(typeof inputValue);
    console.log(inputValue);

    //Om inmatat värde inte är ett nummer
    //om inmatat värde inte är mellan 1-100
    //ge felmeddelande
    // // Annars
    // // sriv message ut på sidan
    if (isNaN(inputValue) || inputValue < 0 || inputValue > 100) {
        alert("DU MÅSTE SKRIVA ETT NUMMER FRÅN 0-100");

    } else {
        //räknar ner antal gissningar som finns kvar
        remainingGuesses -= 1;
        console.log(`antal gissningar kvar: ${remainingGuesses}`)

        //info om gissade talet
        message = `Du gissade på ${inputValue} ... `;

        // historyitemClassName ska tilldelas ett värde som sedan används för att skriva korrect class-namn på HistoryItem som skapas längre ned i dokumentet.
        //historyIemetInfo fungerar likadant men håller info om gissningen
        let historyItemClassName;
        let historyIemetInfo;
        //info om hur de gissade talet förhåller sig till facit
        if (inputValue < FacitTal) {
            guessMessageResult = `Det är för lågt 😕`;
            historyItemClassName = "toLow";
            historyIemetInfo = "För lågt";
        } else if (inputValue > FacitTal) {
            guessMessageResult = `Det är för högt 😬`;
            historyItemClassName = "toHigh";
            historyIemetInfo = "För högt";
        } else {
            guessMessageResult = `DET ÄR RÄTT!!! 🥳`
            historyItemClassName = "correct";
            historyIemetInfo = "RÄTT SVAR";
            correctAnswer = true;
        }


        // Förts: Se till att messageContainer syns genom att ta bort display none från cssen
        messageContainer.style = "display: unset;"
        //Renderar ut ino om rundan i messageContainer
        messageContainerP1.textContent = message;
        messageContainerP2.textContent = guessMessageResult;
        if (correctAnswer) {
            messageContainerP2.style = 'color: green;';
        }

        //uppdatera antal gissningar som finns kvar
        remainingGuessesParagraph.textContent = remainingGuesses;

        //Avslutar spelet om de ej finns gissningar kvar eller om inkommet svar är rätt
        if (remainingGuesses <= 0 || correctAnswer) {
            gameOver = true;
            numberInputBox.setAttribute('disabled', '');
            numberInputBtn.setAttribute('disabled', '');
        }

        if (remainingGuesses <= 0) {
            messageContainer.appendChild(document.createElement('div')).textContent = "GAME OVER";
            messageContainer.lastChild.id = "game-over-stamp"
            messageContainer.appendChild(document.createElement('p')).textContent = `Rätt svar var : ${FacitTal} !`
        }
        //skapar en div som blir nytt historyItem
        const historyitem = document.createElement('div');
        // Ger det nya historyitemet en klass baserat på hur gissningen förhöll sig genom den variabeln som skapats tidigare.
        historyitem.classList.add(historyItemClassName, 'guessStat');
        historyitem.appendChild(document.createElement("div")).textContent = inputValue;
        historyitem.appendChild(document.createElement("div")).textContent = historyIemetInfo;

        //Skicka ut det nya historyIemet i domen
        guessingHistory.appendChild(historyitem);





        console.log(message);
        console.log(guessMessageResult);
        console.log(`gameOver = ${gameOver}`);
        console.log(`correcAnswer=  ${correctAnswer}`);


    }

}


//Ladda om sidan när "startaom"-knapp trycks
document.getElementById("restartBtn").addEventListener("click", function () {
    location.reload();
})





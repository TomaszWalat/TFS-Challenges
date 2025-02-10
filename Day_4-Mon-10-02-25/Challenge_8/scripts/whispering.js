const theVoid = document.querySelector('.the-void');
const inputElement = document.querySelector('.user-input');
const buttonElement = document.querySelector('.whisper-button');

async function whisperIntoTheVoid() {

    const newParagraph = document.createElement("p");
    //const newTextNode = document.createTextNode(inputElement.textContent);
    //const newTextNode = inputElement.value;
    console.log(inputElement.value);

    const result = await censorProfanity(inputElement.value);

    console.log("reults on the other side: ", result);

    //newParagraph.appendChild(newTextNode);
    //newParagraph.textContent = inputElement.value;
    newParagraph.textContent = result["result"];
    theVoid.appendChild(newParagraph);
}

buttonElement.addEventListener("click", whisperIntoTheVoid);
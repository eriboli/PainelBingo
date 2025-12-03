const buttonColor = "#fff";
const textColor = "lightgray";
const btColorSel = "yellow";
const txtColorSel = "#634221";
const lastNumber = [];

// Captura o id do elemento clicado (event delegation)
function handleClickGetId(event) {
    // event.target pode ser um filho; procura o elemento mais próximo que tenha id
    const elWithId = event.target.closest('[id]');
    const id = elWithId ? elWithId.id : null;

    if (id) {
        console.log('Elemento clicado id:', id);
            let button = document.querySelector("#" + id);
            if (button.style.backgroundColor === btColorSel) {
                  
                let i = lastNumber.length - 1;
                if (lastNumber[i] != (id.split('bt')[1])) {
                    
                    console.log("lastnumber[1]:" + lastNumber)
                    // Formata o botão como "não selecionado"
                    button.style.color = textColor;
                    button.style.backgroundColor = buttonColor;
                    button.style.fontWeight = "200";

                        const index = lastNumber.indexOf(id.split('bt')[1]);
                        if (index > -1) { // Verifica se o item foi encontrado
                            lastNumber.splice(index, 1); // Remove 1 item a partir do 'index'
                        }
                    // Exibe o último número sorteado no console
                    console.log(lastNumber);
                } else {
                    // Formata o botão como "não selecionado"
                    button.style.color = textColor;
                    button.style.backgroundColor = buttonColor;
                    button.style.fontWeight = "200";

                    // Exibe o último número sorteado no console
                    console.log(lastNumber);

                    // Remove o número do array lastNumber
                    lastNumber.pop(id.split('bt')[1]);
                    
                    // Exibe o último número sorteado no display
                    updateLastNumberDisplay();
                }
            } else {
                // Formata o botão como "selecionado"
                button.style.color = txtColorSel;
                button.style.backgroundColor = btColorSel;
                button.style.fontWeight = "900";
                    
                // Adiciona o número ao array lastNumber
                lastNumber.push(id.split('bt')[1]);

                // Exibe o último número sorteado no console
                console.log(lastNumber);

                // Exibe o último número sorteado no display
                updateLastNumberDisplay();
            }
    } else {
        console.log('Elemento clicado não possui id');
    }
}

function updateLastNumberDisplay() {
    // Exibe o último número sorteado no display
    let eleH2 = document.querySelector(".lastnumberdisplay");
    let i = lastNumber.length - 1;
        if (lastNumber[i] <= '15') {
            eleH2.textContent = "B" + lastNumber[i];
            } else if (lastNumber[i] <= '30') {
                eleH2.textContent = "I" + lastNumber[i];
            } else if (lastNumber[i] <= '45') {
                eleH2.textContent = "N" + lastNumber[i];
            } else if (lastNumber[i] <= '60') {
                eleH2.textContent = "G" + lastNumber[i];
            }  else if (lastNumber[i] <= '75') {
                eleH2.textContent = "O" + lastNumber[i];
            }else {
                eleH2.textContent = "00";
            }
}

// Adiciona o listener no documento (funciona para elementos existentes e futuros)
document.addEventListener('click', handleClickGetId);
const url = ('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')

async function getCard(){
    const r = await fetch(url)
    const dados = await r.json();
    console.log(dados);
    dados.forEach(e => {
       showCard(e);
    });

}

const showCard = e => {
    const cardElemento = `
            <div class="ed-item l-1-3 produtos-container">
                <div class="produtos-item">
                    <img src="${e.photo}">
                    <div class="produtos-descricao">
                        <h2> ${e.name}</h2>
                        <h2> Tipo: ${e.property_type}</h2>
                        <h2> Preço: R$ ${e.price},00</h2>
                    </div>    
                </div>    
            </div>  
        
    `
    document.querySelector("#elementos").insertAdjacentHTML("beforeEnd",cardElemento)
    
};

getCard();







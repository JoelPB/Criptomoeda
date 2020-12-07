
// My api key
var apiKey = {
    key: '2104052f-1fa6-485c-88d4-b93c9cb435cf'
}
// GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
.then((response) => {
    if(!response.ok) throw new Error('Erro ao executar a Requisição, status ' + response.status);
    return response.json();
})
.then((api) => {

    var texto = '';
    // Get 10 coins and symbols
    for (let i = 0; i < 10; i++){
        // Show API information
        texto = texto + `
        <div class="media">
            <img src="./image/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p> 
                    ${api.data[i].symbol} <br/> 
                    First historical data: 
                    ${api.data[i].first_historical_data} <br/>
                    Last historical data: 
                    ${api.data[i].last_historical_data} <br/>                    
                </p>
            </div>
        </div>

        `;

        document.getElementById("coins").innerHTML = texto;
    }
    //console.log(api);
})
.catch((err) => {
    console.error(error.message);
});
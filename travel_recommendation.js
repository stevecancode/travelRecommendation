const btnSearch = document.getElementById('btnSearch');

function searchCondition() {

    const input = document.getElementById('searchBox').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        
        .then(response => response.json())

        .then(data => {
                
            for (keyword in data){

                if (input === 'countries'){
                    const countriesLength = data.countries.length;
                    for (let i = 0; i < countriesLength; ++i) {
                        let citiesLength = data.countries[i].cities.length;
                        for (let y = 0; y < citiesLength; ++y) {
                            resultDiv.innerHTML += `<h2>${data.countries[i].cities[y].name}</h2>`;
                            resultDiv.innerHTML += `<img src="${data.countries[i].cities[y].imageUrl}" alt="hjh">`;
                            resultDiv.innerHTML += `<p><strong>Description:</strong> ${data.countries[i].cities[y].description}</p>`;
                        }
                    }
                } else if (input === 'temples') {
                    const templesLength = data.temples.length;
                    for (let i = 0; i < templesLength; ++i) {
                        resultDiv.innerHTML += `<h2>${data.temples[i].name}</h2>`;
                        resultDiv.innerHTML += `<img src="${data.temples[i].imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<p><strong>Description:</strong> ${data.temples[i].description}</p>`;
                    }    

                } else if (input === 'beaches') {
                    const beachesLength = data.beaches.length;
                    for (let i = 0; i < beachesLength; ++i) {
                        resultDiv.innerHTML += `<h2>${data.beaches[i].name}</h2>`;
                        resultDiv.innerHTML += `<img src="${data.beaches[i].imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<p><strong>Description:</strong> ${data.beaches[i].description}</p>`;
                    }

                } else {
                    resultDiv.innerHTML += `<h2>Destination or keyword not found.</h2>`;
                }
            }
        })
        .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.' + error;
        });

}

btnSearch.addEventListener('click', searchCondition);

function clearSearch() {
    document.getElementById('searchBox').value = '';
    document.getElementById('result').innerHTML = '';
}

btnClear.addEventListener('click', clearSearch);
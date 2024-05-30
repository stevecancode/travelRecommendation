const btnSearch = document.getElementById('btnSearch');

function searchCondition() {

    const input = document.getElementById('searchBox').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        
        .then(response => response.json())

        .then(data => {
            if ('countries'.includes(input)){
                const countriesLength = data.countries.length;
                for (let i = 0; i < countriesLength; ++i) {
                    let citiesLength = data.countries[i].cities.length;
                    for (let y = 0; y < citiesLength; ++y) {
                        resultDiv.innerHTML += `<img src="${data.countries[i].cities[y].imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<h2>${data.countries[i].cities[y].name}</h2>`;
                        resultDiv.innerHTML += `<p><strong>Description:</strong> ${data.countries[i].cities[y].description}</p>`;
                    }
                }
            } else if ('temples'.includes(input)) {
                const templesLength = data.temples.length;
                for (let i = 0; i < templesLength; ++i) {
                    resultDiv.innerHTML += `<img src="${data.temples[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<h2>${data.temples[i].name}</h2>`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${data.temples[i].description}</p>`;
                }    

            } else if ('beaches'.includes(input)) {
                const beachesLength = data.beaches.length;
                for (let i = 0; i < beachesLength; ++i) {
                    resultDiv.innerHTML += `<img src="${data.beaches[i].imageUrl}" alt="hjh">`;
                    resultDiv.innerHTML += `<h2>${data.beaches[i].name}</h2>`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${data.beaches[i].description}</p>`;
                }

            } else {
                resultDiv.innerHTML += `<h2>Destination or keyword not found.</h2>`;
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
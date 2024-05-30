const btnSearch = document.getElementById('btnSearch');

function searchCondition() {

    const input = document.getElementById('searchBox').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        
        .then(response => response.json())

        .then(data => {
            for (keyword in data) {
                if (keyword === input) {
                    for (country in keyword) {
                        resultDiv.innerHTML += `<h2>${data.keyword.country.cities}</h2>`;
                        /*resultDiv.innerHTML += `<img src="${country.cities.imageUrl}" alt="hjh">`;*/
                        resultDiv.innerHTML += `<p><strong>Description:</strong> ${data.keyword.country.cities.description}</p>`;
                    }
                } 
            }
            
            
            /*const countryObj = data.countries.find(item => item.countries.name.toLowerCase() === input);
            const beachObj = data.beaches.find(item => item.countriesname.toLowerCase() === input);
            const templeObj = data.temples.find(item => item.countries.name.toLowerCase() === input);
            
            if (country) {
            
                for (country in countryObj) {
                    resultDiv.innerHTML += `<h2>${country.cities}</h2>`;
                    resultDiv.innerHTML += `<img src="${country.cities.imagesrc}" alt="hjh">`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${contry.cities.description}</p>`;
                }
            } else {
            resultDiv.innerHTML = 'Destination or keyword not found.';
            }*/

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
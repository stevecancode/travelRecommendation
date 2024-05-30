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
                    for (country in data.countries) {
                        resultDiv.innerHTML += `<h2>${Object.entries(data.countries[0])}</h2>`;
                        /*resultDiv.innerHTML += `<img src="${country.cities.imagesrc}" alt="hjh">`;
                        resultDiv.innerHTML += `<p><strong>Description:</strong> ${contry.cities.description}</p>`;*/
                    }

                } else if (input === 'temples') {
                    const lenTemples = data.temples.length;
                    for (let i = 0; i < lenTemples; ++i) {
                        resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                        resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<p><strong>Description:</strong> ${temple.description}</p>`;
                    };
                } else if (input === 'beaches') {
                    const lenBeaches = data.temples.length;
                    for (let i = 0; i < lenBeaches; ++i) {
                        resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                        resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<p><strong>Description:</strong> ${beach.description}</p>`;
                    };
                } else {
                    resultDiv.innerHTML += `<h2>Destination or keyword not found.</h2>`;
                }


            }
            resultDiv.innerHTML += `<p><strong>Description:</strong> ${Object.entries(data.temples[0])}</p>`;
            
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
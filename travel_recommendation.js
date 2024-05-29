const btnSearch = document.getElementById('btnSearch');

function searchCondition() {

    const input = document.getElementById('searchBox').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        
        .then(response => response.json())

        .then(data => {
            const keyword = data.find(item => item.toLowerCase() === input);
            
            if (keyword) {
            
            
            resultDiv.innerHTML += `<h2>${country.name}</h2>`;
            resultDiv.innerHTML += `<img src="${country.imagesrc}" alt="hjh">`;
            resultDiv.innerHTML += `<p><strong>Cities:</strong> ${cities.name}</p>`;

            } else {
            resultDiv.innerHTML = 'Destination or keyword not found.';
            }
        })
        .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.' + error;
        resultDiv.innerHTML += input;
        });

}

btnSearch.addEventListener('click', searchCondition);

function clearSearch() {
    document.getElementById('searchBox').value = '';
    document.getElementById('result').innerHTML = '';
}

btnClear.addEventListener('click', clearSearch);
input = 'australia'


fetch('travel_recommendation_api.json')
        
        .then(response => response.json())

        .then(data => {
            console.log(data[0]);
        })
        .catch(error => {
        console.error('Error:', error);
        console.log('An error occurred while fetching data.' + error);
        });
//Chart JS configuration
const ctx = document.getElementById('myChart');
cht = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Temprature over time',
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


function getCurrentTemprature() {
    //Will request a random number from an API and return a promise
    return fetch("http://localhost:8080/currentTemprature").then((response) => response.json())
}

function addDataToChart() {
    getCurrentTemprature().then((num) => {
        console.log(num)
        cht.data.labels.push(""); //NEEDED FOR DATA TO SHOW
        cht.data.datasets[0].data.push(num); //Add new number to chart data
        cht.update(); //Display changes
        console.log(cht.data.datasets[0].data)

    })

}

//Will add new data every 2 seconds
setInterval(addDataToChart, 2000);

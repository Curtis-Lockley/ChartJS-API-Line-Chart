//Chart JS configuration
const ctx = document.getElementById('myChart');
cht = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
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


function getRandomNumber() {
    //Will request a random number from an API and return a promise
    return fetch("https://www.random.org/integers/?num=1&min=1&max=50&col=1&base=10&format=plain&rnd=new").then((response) => response.json())
}

function addDataToChart() {
    getRandomNumber().then((num) => {
        console.log(num)
        cht.data.labels.push("random"); //NEEDED FOR DATA TO SHOW
        cht.data.datasets[0].data.push(num); //Add new number to chart data
        cht.update(); //Display changes
        console.log(cht.data.datasets[0].data)

    })

}

//Will add new data every 2 seconds
setInterval(addDataToChart, 2000);
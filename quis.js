// Define the default legend configuration
const defaultLegendConfig = {
    display: true,
    position: 'top',
    labels: {
        fontColor: '#333',
        fontSize: 12
    }
};

// Complete chart configuration object
const chartConfig = {
    type: 'bar', // Type of the chart
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Sales',
            data: [10, 20, 30, 40],
            backgroundColor: ['red', 'blue', 'green', 'yellow']
        }]
    },
    options: {
        responsive: true,
        legend: defaultLegendConfig, // Applying the default legend configuration
        title: {
            display: true,
            text: 'Monthly Sales Data'
        }
    }
};

// Assuming you're using a library like Chart.js to create a chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, chartConfig);

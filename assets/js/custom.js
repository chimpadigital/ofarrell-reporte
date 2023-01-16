const data = {
    datasets: [{
        data: [97.02, 0.08, 2],
        backgroundColor: [
            'rgb(36, 65, 84)',
            'rgb(157, 201, 201)',
            'rgb(231, 165, 59)'
        ],
        weight: .1,
        borderWidth: 0
    }]
};
const config = {
    type: 'doughnut',
    data: data
};

const myChart = new Chart(
    document.getElementById('chartDic'),
    config
);
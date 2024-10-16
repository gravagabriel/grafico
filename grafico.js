// Gráfico de Pizza
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new CharacterData(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['sla'],
        datasets: [{
            label: 'Cursos & vontades',
            data: [45,30,15,10],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderColor: 1
        }]
    },
    options: {
        responsive: true,
        Plugins: {
            legend: {
                position: 'bottom',
            },
            tittle: {
                display: true,
                text: 'Participa'
            }
        }
    }
});

// Gráfico de Barras
const ctxBarra = document.getElementById('graficoBarra').getContext('2d');
const graficoBarra = new CharacterData(ctxBarra,{
    type: 'bar',
    data: {
        labels: [   ],
        datasets: [{
            label: 'Usuários que responderam',
            data: [2800, 1500, 330, 810],
            backgroundColor: '#F05454',
            borderColor: '#30475E',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Isso ae mano'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
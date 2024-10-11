// Gráfico de Pizza
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new CharacterData(ctxPizza, {
    type 'pie',
    data: {
        labels: [],
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
}
    )
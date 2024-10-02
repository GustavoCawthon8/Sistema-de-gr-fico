const ctx = document.getElementById('grafico1');

let valores = [0,0,0]

 let grafico =  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Disponibilidade', 'Qualidade', 'Performance'],
      datasets: [{
        label: 'Nuemoros de download',
        data: valores,
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
  
  const obterDados =()=>{
  
  const endpointer = "https://93fdb42e-a6e6-4c31-b0e2-84e5bcef7f73-00-29mgh6h1jbba0.picard.replit.dev/";
  fetch(endpointer)
  .then(res=>res.json())
  .then(res=>{
    valores[0]= res.disponibilidade
    valores[1]= res.qualidade
    valores[2]= res.performance
    grafico.update()
  })
  }
  const  intervalo = setInterval(obterDados, 3000)
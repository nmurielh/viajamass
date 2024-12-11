const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    console.log(`Buscar viajes a ${destino} en ${fecha}`);
    
});
var show = document.querySelector(".show")

addEventListener('load', () => {
    var session = JSON.parse(sessionStorage.getItem('logged'));
    var sells = JSON.parse(localStorage.getItem('sells'))
    var products = JSON.parse(localStorage.getItem('products'))
//     sells.forEach((value, index, array) => {
// console.log(value); 
//console.log(sells);
        var find = sells.find(x => x.user == session)
        let ids = find.prodcutos.map(x => x.id)
        for (let i = 0; i < ids.length; i++) {
            compra = products.filter(products => products.id === ids[i]);
            show.innerHTML += `
        <tr >
            <td><img src="${compra[0].image}" alt="${compra[0].name}"></td>
            <td>${compra[0].name} </td>
            <td>${find.date}</td>
            <td>${compra[0].price}</td>
        </tr>
        `
        }
        show.innerHTML += `
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>Total: ${find.total}</td>
    </tr>`
    // })

})
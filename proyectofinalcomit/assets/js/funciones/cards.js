export const renderizarCards = (node, { id, subcategoria, imagen_principal, nombre, precio }) => {
    node.innerHTML += `<a class="noStyles" href="/producto.html?data=${subcategoria}-${id}"><div class="card card__size" ">
    <img src="${imagen_principal}" class="card-img-top " alt="...">
    <div class="card-body">
        <h5 class="card-title">$ ${precio}</h5>
        <p class="card-text">${nombre}</p>
    </div>
</div><a>`
}

export const recorrerArray = ({ resultados }, nodo) => {
    nodo.innerHTML = " "
    resultados.forEach(elemento => renderizarCards(nodo, elemento));
}
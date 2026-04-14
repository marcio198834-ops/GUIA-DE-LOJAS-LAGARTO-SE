let lojas = [];

fetch("lojas.json")
  .then(res => res.json())
  .then(data => {
    lojas = data;
    render(lojas);
  });

const lista = document.getElementById("lista");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

search.addEventListener("input", filtrar);
filter.addEventListener("change", filtrar);

function filtrar() {
  let texto = search.value.toLowerCase();
  let categoria = filter.value;

  let filtrado = lojas.filter(loja => {
    return (
      loja.nome.toLowerCase().includes(texto) &&
      (categoria === "Todos" || loja.categoria === categoria)
    );
  });

  render(filtrado);
}

function render(data) {
  lista.innerHTML = "";

  data.forEach(loja => {
    lista.innerHTML += `
      <div class="card">
        <h3>${loja.nome}</h3>
        <p>📂 ${loja.categoria}</p>
        <p>📍 ${loja.endereco}</p>
        <p>⭐ ${loja.avaliacao}</p>
      </div>
    `;
  });
}

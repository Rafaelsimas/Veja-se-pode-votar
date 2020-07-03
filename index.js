
function ver() {
    var nome = window.document.querySelector('#nome').value;
    var sobrenome = window.document.querySelector('#sobrenome').value;
    var nascimento = window.document.querySelector('#data').value;
    var res = window.document.querySelector('#res')
    var resultado = Number(data.value)
    res.innerHTML = `<p>Senhor(a) <strong>${nome.toUpperCase()} ${sobrenome.toUpperCase()}</strong> sua idade é ${resultado} anos.</p>`
    if (resultado > 16) {
        res.innerHTML += `<p> Cidadão pode votar.</p>`
    } else if (resultado <= 14) {
        res.innerHTML += `<p>Cidadão <strong>não</strong> tem idade para votar.</p>`
    }
}
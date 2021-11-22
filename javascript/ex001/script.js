function cal() {
    let mod = document.getElementById("car").value
    let r = document.getElementById("res")
    let v = Number(document.getElementById("val").value)
    let par = Number(document.getElementById("par").value) 
    if (par <= 4) {
        let parcelas = v / par
        r.innerHTML = `O carro ${mod} custará ${v} e cada parcela será ${parcelas}`
    } if (par >=5) {
        let val = v + (25/100 * v)
        let parcelas = val / par
        r.innerHTML = `O carro ${mod} custará ${val} e cada parcela será ${parcelas}`
    } if (par >=13) {
        let val = v + (60/100 * v)
        let parcelas = val / par
        r.innerHTML = `O carro ${mod} custará ${val} e cada parcela será ${parcelas}`
    } if (par >=25) {
        let val = v + (80/100 * v)
        let parcelas = val / par
        r.innerHTML = `O carro ${mod} custará ${val} e cada parcela será ${parcelas}`
    }
    return false
}

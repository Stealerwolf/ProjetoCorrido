async function openAdc(req, res){
    res.render("usuario/add.ejs", { });
}
async function calc(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var operacao = req.body.operacao;
    var result;

    switch (operacao) {
        case "somar": result = parseInt(num1) + parseInt (num2)
        break;
        case "subtrair": result = parseInt(num1) - parseInt (num2)
        break;
        case "multiplicar": result = parseInt(num1) * parseInt (num2)
        break;
        case "dividir": result = parseInt(num1) / parseInt (num2)
        break;
        default:
        break;
        }

        res.render("usuario/resultado.ejs", { msg: "Resultado: " + result});
    }

module.exports = {
    openAdc,
    calc,
}
async function adc(req, res){
    res.render("usuario/add.ejs", req.body);
}

async function openAdc(req, res){
    res.render("usuario/add.ejs", {});
}

module.exports = {
    adc,
    openAdc
}
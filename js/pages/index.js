function calcularHipotenusa() {

    limparCampos();
    const ca = $("#ca").val();
    const co = $("#co").val();
    let camposValidados = true

    if (ca == "") {
        $("#alertaUm").show();
        camposValidados = false;
    }

    if (co == "") {
        $("#alertaDois").show();
        camposValidados = false;
    }

    if (camposValidados == true) {
        const potenciaCa = Math.pow(ca, 2);
        const potenciaCo = Math.pow(co, 2);

        const hipotenusa = Math.sqrt(potenciaCa + potenciaCo);
        console.log("O valor da hipotenusa é " + hipotenusa);
        $("#result").val(hipotenusa);

    }

}

function limparCampos(){
    $("#alertaUm").hide();
    $("#alertaDois").hide();
    $("#result").val("");
}

function aplicarMascaras() {
    $(".mask").inputmask('Regex', { regex: "^[0-9]*$" });
}
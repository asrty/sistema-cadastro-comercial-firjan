
  // =================================================================
  // 🛠️ FUNÇÕES PADRÃO (Utilitários Reutilizáveis)
  // =================================================================

function formatarParaMoedaBRL(valor) {
    let formatvalor = valor.value;
    if (typeof formatvalor === "string") {
        formatvalor = formatvalor.replace(/\D/g, "");
        formatvalor = (parseFloat(formatvalor) / 100).toFixed(2);
    }
    const numero = parseFloat(formatvalor);
    if (isNaN(numero)) return "";
    
    valor.value = numero.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}

function formatarNumero(valor) {
  let formatvalor = valor.value;
  formatvalor = formatvalor
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  valor.value = formatvalor;
}


function ajustarDecimal(input) {
    // Mantém apenas números, vírgula e ponto
    let valor = input.value.replace(/[^\d.,]/g, '');

    // Troca vírgula por ponto
    valor = valor.replace(',', '.');

    // Permite apenas um ponto decimal
    const partes = valor.split('.');
    if (partes.length > 2) {
        valor = partes.shift() + '.' + partes.join('');
    }
    //console.log(valor);
    input.value = valor;
}

function formatarCPF(valor) {
  let formatvalor = valor.value
    .substring(0, 14)
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{2})$/, "$1-$2");
  valor.value = formatvalor;
}

function formatarTelefone(input) {
    let telefone = input.value
        .substring(0, 15)
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d)(\d{4})$/, '$1-$2');

    input.value = telefone;
}

function formatarCEP(input) {
    let cep = input.value
        .substring(0, 9)
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2');

    input.value = cep;
}

function formatarEndereco(input) {
    const estado = document.getElementById('estado');
    const bairro = document.getElementById('bairro');
    const rua = document.getElementById('rua');
    const numeroRua = document.getElementById('numero_rua');
    const complemento = document.getElementById('complemento');
    const endereco = document.getElementById('endereco');
    endereco.value = `${estado.value} | ${bairro.value} | ${rua.value} | ${numeroRua.value} | ${complemento.value}`
    //console.log(endereco.value)
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('input', ({ target }) => {
        switch (target.id) {
            case 'cpf':
                formatarCPF(target);
                break;

            case 'comissao_visivel':
                formatarParaMoedaBRL(target);

                document.getElementById('comissao_banco').value = 
                target.value.replace(/[^\d.,]/g, '').replace(/\./g, '').replace(',', '.');
                break;

            case 'preco_visivel':
                formatarParaMoedaBRL(target);

                document.getElementById('preco_banco').value = 
                target.value.replace(/[^\d.,]/g, '').replace(/\./g, '').replace(',', '.');
                break;

            case 'telefone':
                formatarTelefone(target);
                break;

            case 'cep':
                formatarCEP(target);
                break;

            case 'estado':
                formatarEndereco(target);
                break;

            case 'bairro':
                formatarEndereco(target);
                break;

            case 'rua':
                formatarEndereco(target);
                break;

            case 'numero_rua':
                formatarEndereco(target);
                break;

            case 'complemento':
                formatarEndereco(target);
                break;

            default:
                break;
        }
    });
});
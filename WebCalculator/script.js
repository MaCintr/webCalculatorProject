var resultado = document.getElementById('resultado');

        function adicionar(num) {
            resultado.value += num;
        }

        function calcular() {
            try {
                resultado.value = eval(resultado.value);
            } catch {
                resultado.value = "Erro";
            }
        }

        function limpar() {
            resultado.value = "";
        }
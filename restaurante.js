//Essa é a classe da abstração

function Restaurante(nome, tipo, status) {
    let _nome = nome;
    let _tipo = tipo;
    let _status = status;

    this.setNome = function(name) {
        _nome = name;
    }

    this.setTipo = function(type) {
        _tipo = type;
    }

    this.setStatus = function(status) {
        _status = status;
    }

    this.getNome = function() {
        return _nome;
    }

    this.getTipo = function() {
        return _tipo;
    }

    this.getStatus = function() {
        return _status;
    }

    this.getData = function() {
        return `Restaurante: ${_nome}, Tipo: ${_tipo}, Status: ${_status}`;
    } 
}

//As funções "Oficina" e "Escritorio" abaixosão as classes herdeiras

function Oficina(nome, tipo, status, veiculos, servicos) {
    let _veiculos = veiculos;
    let _servicos = servicos;
    Restaurante.call(this, nome, tipo, status);

    this.setVeiculos = function(veiculos) {
        _veiculos = veiculos;
    }

    this.setServicos = function(servicos) {
        _servicos = servicos;
    }

    this.getData = function() {
        return `Oficina: ${this.getNome()}, Tipo: ${this.getTipo()}, Status: ${this.getStatus()}, Tipo de veiculos: ${_veiculos}, Serviços: ${_servicos}`;
    }  
}

function Escritorio(nome, tipo, status, funcionarios,) {
    let _funcionarios = funcionarios;

    Restaurante.call(this, nome, tipo, status);

    this.setFuncionarios = function(funcionarios) {
        _funcionarios = funcionarios;
    }

    this.getData = function() {
        return `Escritorio: ${this.getNome()}, Tipo: ${this.getTipo()}, Status: ${this.getStatus()}, Numero de funcionario: ${_funcionarios}`;
    }  
}

//Ao longo do exercicio, para manter certa coesão, acabei criando mais do que as Três instancias propostas

const restaurante1 = new Restaurante("Nome Inicial", "Tipo Inicial", "Status Inicial");
restaurante1.setNome("Point do zé");
restaurante1.setTipo("Nordestino");
restaurante1.setStatus("Em reforma");

const restaurante2 = new Restaurante("Nome Inicial", "Tipo Inicial", "Status Inicial");
restaurante2.setNome("Bistrô Le Cordon Bleu");
restaurante2.setTipo("Francês");
restaurante2.setStatus("Aberto");

const oficina1 = new Oficina("Nome Inicial", "Tipo Inicial", "Status Inicial");
oficina1.setNome("Tião Car");
oficina1.setTipo("Pequeno porte");
oficina1.setStatus("Funcionando");
oficina1.setVeiculos("Todos");
oficina1.setServicos("Troca de óleo");

const escritorio1 = new Escritorio("Nome Inicial", "Tipo Inicial", "Status Inicial", "numero inicial");
escritorio1.setNome("Ana contabilidade");
escritorio1.setTipo("Contabilidade");
escritorio1.setStatus("Em funcionamento");
escritorio1.setFuncionarios("5");

//Acabei utilizando os "console.log" abaixo para testar as funções

/*console.log(restaurante1.getData());*/ 
/*console.log(restaurante2.getData());*/ //Para Visualizar 2 objetos, e três instancias em cada objeto

/*console.log(oficina1.getData());*/

console.log(escritorio1.getData());



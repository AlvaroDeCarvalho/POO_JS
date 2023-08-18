function Funcionario(nome,cargo,salario){
    this.nome = nome
    this.cargo = cargo
    let _salario = salario

    this.getSalario = function(){
        return _salario
    }
    
    this.setSalario = function(valor){
        if(typeof valor === 'number'){
            _salario = valor 

        }
        
    }
    /* 
    forma simplifica para gerar o aumento desejavel, sem ter que chamar a função no objeto Estagiario/gerente

     this.aumento = function(valorDoAumento = 1.15){
        if(typeof valorDoAumento === 'number'){
            const novoSalario = _salario *  valorDoAumento 
            _salario = novoSalario
            return _salario
        
        }
    }
    
    */

    //metoduo que foi dado no curso ==>
    this.aumento = function(){
        const novoSalario = _salario * 1.15
        _salario = novoSalario
    }

}

function Estagiario(nome){
    Funcionario.call(this, nome , "estagiario" ,2000)
    // this.aumento(1.2)
    
    

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.1
        this.setSalario(novoSalario)
    } 


}

function Gerente(nome){
    Funcionario.call(this, nome , "gerente" ,10000)
    // this.aumento(1.2)
    
    

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.5
        this.setSalario(novoSalario)
    } 


}


    const funcionario = new Funcionario("João","funcionario", 5000)
    const estagiario = new Estagiario('Alvaro')
    const gerente = new Gerente("Osvaldo")
    
    gerente.aumento()
    console.log(gerente.getSalario())
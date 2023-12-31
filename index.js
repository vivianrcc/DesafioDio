//Definindo a classe do Heroi 
 class Heroi {
        constructor(nome, idade, tipo) {
            this.nome = nome;
            this.idade = idade;
            this.tipo = tipo;
        }
    
     atacar() {
            let ataque;
            switch (this.tipo) {
                case 'mago':
                    ataque = 'usou magia';
                    break;
                case 'guerreiro':
                    ataque = 'usou espada';
                    break;
                case 'monge':
                    ataque = 'usou artes marciais';
                    break;
                case 'ninja':
                    ataque = 'usou shuriken';
                    
            
            }
     console.log(`O ${this.tipo} atacou usando ${ataque}`);
        }
    }
    
    // Exemplo de uso da classe
    
    let heroi1 = new Heroi('magoheroi',70,  'mago');
    heroi1.atacar(); // Saída: O mago atacou usando magia
    
    let heroi2 = new Heroi('guerreiroheroi',80,  'guerreiro');
    heroi2.atacar(); // Saída: O guerreiro atacou usando espada
     
    let heroi3 = new Heroi('ninjaguerreiro',90,'ninja');
    heroi3.atacar(); // saida: o guerreiro atacou usando espada 
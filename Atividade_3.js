Atividade 3

1 - function Livro(titulo, autor, anoPublicacao){
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    
    this.exibirInfo = function() {
        return `${this.titulo} de ${this.autor}, publicado em ${this.anoPublicacao}`;
    };
}

let meuLivro = new Livro("1984", "George Orwell", 1949);
console.log(meuLivro.exibirInfo());

2- function Produto(nome, preco, desconto){
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
    
    this.precoFinal = function() {
        const precoComDesconto = this.preco - (this.preco * this.desconto/100) ;
        return `${this.nome} com preço final de R$${precoComDesconto}`;
    };
}

let meuProduto = new Produto("Smartphone", 1200, 15);
console.log(meuProduto.precoFinal());           

3- function Estudante(nome, notas){
    this.nome = nome;
    this.notas = notas;
  
    this.calcularMedia = function() {
      let soma = this.notas.reduce((acc, nota) => acc + nota, 0);
      let media = soma / this.notas.length;
      return Math.round(media*100) / 100
     
    };
}

let meuEstudante = new Estudante("Leticia",[7.5, 8.0, 9.0]);
console.log(meuEstudante.calcularMedia());                             

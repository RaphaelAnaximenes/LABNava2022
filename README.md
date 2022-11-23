# Tarefa de LABORATORIO DE BANCO DE DADOS 
 Alunos => ({Raphael Anaximenes} e {Rodrigo Ribeiro}){
Nota do autor:
<div style="aligned">
<img  style="width:40%; height:40%" src="https://raw.githubusercontent.com/RaphaelAnaximenes/LABNava2022/main/src/img/Exemplocartao2.jpg">
<img  style="width:40%; height:40%" src="https://raw.githubusercontent.com/RaphaelAnaximenes/LABNava2022/main/src/img/Exemplocartao3.jpg">
</div>

* Utilizando os conhecimentos adquiridos até aqui, trouxe este trabalho... espero que goste!
Aqui utilizei alguns recursos bem legais como:
* Nodemon e Express, que foram mostrado em aula.

* Consign, gerenciador de rotas, indicando para o server o que precisa ser carregado em uma única pipeline, onde devolve o objeto _app_ para o module.exports já abastecido de todas as dependencias necessárias:


 {
 
    consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

}

* Também utilizei o Ejs, na versão "^3.1.8", para renderizar algumas views na "areatesteshtml", onde programei um ambiente simples frontend que simula o cartão que apareceria.

Como banco de dados escolhi o MySql, onde apliquei os conceitos de ConnectionFactory através do módulo dbconnection. A dependencia "mysql" foi instalada na versão "^2.18.1".

## SOBRE A APLICAÇÃO ## 

*Para executar, no terminal insira um dos seguintes comandos:*
{
    
    npm start,
    nodemon app.js
}

<img  style="width:60%; height:70%" src="https://raw.githubusercontent.com/RaphaelAnaximenes/LABNava2022/main/src/img/starting.jpg">


A aplicação iniciará o Nodemon, em seguida o Express e Ejs.
Após isso, o módulo do Consign carregará as rotas que indicam todos os módulos para as views.
Feito todo o setup do servidor, o nodemon conseguirá renderizar as views em endpoints, através do EJS.
Como o foco não era nos endpoints e sim no modelo de gestão do dado, então não espere encontrar algo muito sofisticado em questões de frontend.

Os endpoints são:

<ul>
<li>http://127.0.0.1:3000/ => Home do localhost</li>
 <li>http://127.0.0.1:3000/areatesteshtml => Aqui está o retorno do BD</li>
 <ul>


A tabela mysql, para apontamento se chama [tecnologia]: 
(só criar a table no MySql, CREATE TABLE...)
p.s.: o id é Auto Incremental viu!


<p>Tudo que estiver no BD, retorna aqui como um "cartão". Vou deixar fotos para exemplificar:

<p>[Veja a pasta: ./src/img]
<p>Diversos exemplos com imagens.
<p>Simula o retorno de um banco de dados de notícias ou similar.



var vetorProjetosSelecionados=[];
var gerarCSV = document.getElementById("btGerar");
var criaProjeto = document.getElementById("btCriar");
var checkproj1 = document.getElementById("proj1");
var checkproj2 = document.getElementById("proj2");
var checkproj3 = document.getElementById("proj3");
var checkproj4 = document.getElementById("proj4");
var checkproj5 = document.getElementById("proj5");
var select = document.getElementById("select"); 

var listaAtividades=[];
var listaProjetos = [];

var dataAtual;
var mesAtual;
var diaAtual;
var horaAtual;
var dia=0;
var dias=0;

var dataDeInicio;
var diaDeInicio;
var mesDeInicio;

var hoje;

var bancoDeDescricoes={
  sensor: ['Reavaliar sensor hall', 'Testes funcionais da nova versao','Adaptar codigo para nova sensibilidade','atualizar o FW da precison V1 para o novo sensor','Desenvolver funcao para deteccao de equipo'],
  PIC32: ['Portar codigo do FG','Pesquisar sobre Bateria de Litio', 'Desenvolver Middleware do sistema de Energia','Migrar codigo de alarmes','implementar baixo nivel do DFPlayer','Merge entre versoes de software'],
  touch: ['Bug da perda de dados','otimizar loop principal do sensoriamento','Resolucao da lista de bugs'],
  Auxilio: ['Montar modulos', 'Montar monitores','Montar sensores de pressao'],
  recorte: ['Recortar novas telas do PIC32', 'Desenhar telas pro Medidor','Prototipar Telas de leitos'],
}

criaProjeto.addEventListener('click' , function()
{
	var x = document.createElement("INPUT");
	x.setAttribute("type", "checkbox")

	let novoCheck = document.createElement("INPUT");
	let novoLabel = document.createElement("label");
	let novoEspaco = document.createElement("br");
	
	novoCheck.setAttribute("type", "checkbox");
	novoCheck.setAttribute("value", novoProjeto.value);
	novoCheck.setAttribute("onclick", "pegaValorCheckBox()");
	novoLabel.setAttribute("id", novoProjeto.value);

	select.appendChild(novoCheck);
	select.appendChild(novoLabel);
	select.appendChild(novoEspaco);

	novoLabel.innerText = novoProjeto.value;
});

gerarCSV.addEventListener('click' , function()
{
	var csv = 'Projeto, Atividade, Data, Inicio, Fim, Duracao\n';
 
    listaProjetos.forEach(function(row) 
    {
        csv += row.projeto;
        csv += ','+ row.descricao;
        csv += ','+ row.data;
        csv += ','+ row.inicio;
        csv += ','+ row.fim;
        csv += '\n';
    });
  
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Diario de LeroLero.csv';
    hiddenElement.click();

});
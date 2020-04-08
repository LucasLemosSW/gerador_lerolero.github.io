
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
var listaDescricao= ['merda','cu','bunda'];

var bandoDeDescricoes={
  sensor: ['Bob', 'Smith'],
  PIC32: ['Bob', 'Smith'],
  touch: ['Bob', 'Smith'],
  Auxilio: ['Bob', 'Smith'],
  recorte: ['música', 'esquiar'],
}



function pegaValorCheckBox()
{
	var pacote = document.querySelectorAll('[name=proj]:checked');
	var novoProjeto = document.querySelectorAll('novoProjeto');
	var mesSelecionado = document.getElementById("mes").selectedIndex;

	while(listaProjetos.length) 
		    listaProjetos.shift();
        
	for (let i = 0; i < pacote.length; i++) // loop de projeto
	{
		for(let j=0; j<=(Math.random()*(5-1)+1); j++)	// loop de Descrições
		{
			let descricaoAtual=preencheDescricao(pacote[i].value);
			for(let a=0; a<=(Math.random()*(3-1)+1); a++)	// loop de Descrições
			{
				listaProjetos.push(new Atividade(pacote[i].value,descricaoAtual,0,0));		
			}
			
		}
	}
	console.log(listaProjetos);
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
        csv += '\n';
    });
  
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Diario de LeroLero.csv';
    hiddenElement.click();

});

function preencheDescricao(projetoAtual)
{
	switch (projetoAtual)
	{
		case 'Sensor de pressao':
			console.log(projetoAtual);
			return listaDescricao[(parseInt(Math.random()*(3-1)+1))];
		break;			
		case 'PIC32':
			return listaDescricao[(parseInt(Math.random()*(3-1)+1))];
		break;
		case 'BUG smart touch':
			return listaDescricao[(parseInt(Math.random()*(3-1)+1))];
		break;
		case 'Auxilio na producao':
			return listaDescricao[(parseInt(Math.random()*(3-1)+1))];
		break;
		case 'Recorte de telas para o PIC32':
			return listaDescricao[(parseInt(Math.random()*(3-1)+1))];
		break;
	}
}
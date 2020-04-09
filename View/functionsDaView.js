var pacote ;

function pegaValorCheckBox()
{
	pacote = document.querySelectorAll('[name=proj]:checked');
	// novoProjeto = document.querySelectorAll('novoProjeto');
}


gerarCSV.addEventListener('click' , function()
{
	let csv = 'Projeto, Atividade, Data, Inicio, Fim, Duracao\n';
	let listaProjetos = [];

	mesDeInicio = document.getElementById("mes").selectedIndex;
	diaDeInicio = document.getElementById("dia").selectedIndex;

	listaProjetos=insereAtividades(pacote,diaDeInicio,mesDeInicio)
 
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
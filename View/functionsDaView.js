

function pegaValorCheckBox(pacote)
{
	pacote = document.querySelectorAll('[name=proj]:checked');
	return pacote;
}


gerarCSV.addEventListener('click' , function()
{
	let csv = 'Projeto, Atividade, Data, Inicio, Fim, Duracao\n';
	let listaProjetos = [];
   	let diaDeInicio,mesDeInicio;
   	let pacote ;

	mesDeInicio = document.getElementById("mes").selectedIndex;
	diaDeInicio = document.getElementById("dia").selectedIndex;

	listaProjetos=insereAtividades(pegaValorCheckBox(pacote),diaDeInicio,mesDeInicio)
 
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
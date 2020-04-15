
/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
function pegaValorCheckBox(pacote)
{
	pacote = document.querySelectorAll('[name=proj]:checked');
	return pacote;
}

/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
function desabilitaSelects()
{
	if(document.getElementById("checkDesabilita").checked==true)
		document.getElementById("endDate").disabled = true;
	else
		document.getElementById("endDate").disabled = false;
}

/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
gerarCSV.addEventListener('click' , function()
{
	let csv = 'Projeto, Atividade, Data, Inicio, Fim, Duracao\n';
	let listaProjetos = [];
   	let pacote ;

   	var dataDeInicio = document.getElementById("startDate");
   	dataDeInicio = (dataDeInicio.value).split("-");

	listaProjetos=insereAtividades(pegaValorCheckBox(pacote),dataDeInicio[2],dataDeInicio[1],dataDeInicio[0]);
 
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
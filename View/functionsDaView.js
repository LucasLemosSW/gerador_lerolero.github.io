

function pegaValorCheckBox(pacote)
{
	pacote = document.querySelectorAll('[name=proj]:checked');
	return pacote;
}

function desabilitaSelects(){

	var diaFinal = document.getElementById("diaFinal");
	var mesFinal = document.getElementById("mesFinal");
	var anoFinal = document.getElementById("anoFinal");

	if(document.getElementById("checkDesabilita").checked==true)
	{
		document.getElementById("diaFinal").disabled = true;
		document.getElementById("mesFinal").disabled = true;
		document.getElementById("anoFinal").disabled = true;
	}
	else
	{
		document.getElementById("diaFinal").disabled = false;
		document.getElementById("mesFinal").disabled = false;
		document.getElementById("anoFinal").disabled = false;
	}
}


gerarCSV.addEventListener('click' , function()
{
	let csv = 'Projeto, Atividade, Data, Inicio, Fim, Duracao\n';
	let listaProjetos = [];
   	let diaDeInicio,mesDeInicio,anoDeInicio;
   	let pacote ;

	mesDeInicio = document.getElementById("mes").selectedIndex;
	diaDeInicio = document.getElementById("dia").selectedIndex;
	anoDeInicio = document.getElementById("ano").selectedIndex;

	listaProjetos=insereAtividades(pegaValorCheckBox(pacote),diaDeInicio,mesDeInicio,anoDeInicio)
 
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
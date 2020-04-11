//#######------------------ SELECÃO DA VIEW ------------------------#############//
var gerarCSV = document.getElementById("btGerar");
var novoProjeto = document.getElementById("novoProjeto");

//#######------------------ SELECÃO DA VIEW ------------------------#############//

var dia=0;
var dias=0;
var hoje;

/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
function preencheDescricao(projetoAtual)
{
	for(let i=0;i<vetorProjeto.length;i++)
	{
		if(vetorProjeto[i].nome==projetoAtual)
			return vetorProjeto[i].Descricao[(parseInt(Math.random()*(vetorProjeto[i].Descricao.length)))];
		// return vetorProjeto[i].Descricao[(parseInt(Math.random()*(vetorProjeto[i].Descricao.length-1)+1))];
	}
}

/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
function incrementaData()
{
	var dataVenc    = new Date(hoje.getTime() + (dias * 24 * 60 * 60 * 1000));
	if(dataVenc.getDay()==4)
		dias=dias+3;
	else
		dias++;
	// console.log(dataVenc.getDay());
	return(dataVenc.getDate() + "/" + (dataVenc.getMonth() + 1) + "/" + dataVenc.getFullYear());
}

/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
function insereAtividades(pacote,diaDeInicio,mesDeInicio,anoDeInicio)
{
	let listaProjetos=[]
	let dataAtual,horaAtual,horafinal,diaAtual,mesAtual;
    let dataDeInicio;

	dataDeInicio=dataDeInicio
	hoje=(mesDeInicio)+"/"+(diaDeInicio)+"/"+(anoDeInicio);
	hoje = new Date(hoje);
	dias=0;

	diaAtual=diaDeInicio;
	mesAtual=mesDeInicio;

	while(listaProjetos.length) 
	{
		    listaProjetos.pop();
	}	
        
	for (let i = 0; i < pacote.length; i++) // loop de projeto
	{
		for(let j=0; j<=(Math.random()*(15-1)+1); j++)	// loop de Descrições
		{
			let descricaoAtual=preencheDescricao(pacote[i].value);
			for(dia=1;dia<=(Math.random()*(10-5)+5);dia++)	// loop de Data
			{
				dataAtual=incrementaData();
				horaAtual=8;
				let loopDeHoraNoDia=parseInt(Math.random()*(3-1)+1)
				for(let a=0; a<=loopDeHoraNoDia; a++)	// loop de hora
				{
					horafinal=horaAtual+parseInt(Math.random()*(4-2)+2);
					if (horafinal>18 || (loopDeHoraNoDia)==a)
						horafinal=18;
					listaProjetos.push(new Atividade(pacote[i].value,descricaoAtual,dataAtual,horaAtual+':00:00',horafinal+':00:00'));		
					horaAtual=horafinal;
				}
			}
		}
	}
	// console.log(listaProjetos);
	return listaProjetos;
	
}
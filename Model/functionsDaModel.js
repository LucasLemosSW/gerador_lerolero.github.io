//#######------------------ SELECÃO DA VIEW ------------------------#############//
var gerarCSV = document.getElementById("btGerar");
var novoProjeto = document.getElementById("novoProjeto");
var noveHoras = document.getElementById("noveHoras");
var seisHoras = document.getElementById("seisHoras");
var seisHorasEstagio = document.getElementById("seisHorasEstagio");
var flex = document.getElementById("fexivel");

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
	let dataAtual,horaAtual,horafinal,minutoFinal,diaAtual,mesAtual,horarioAlmoco=false,Jornada,vetorHora;
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
		for(let j=0; j<=(Math.random()*(15-10)+10); j++)	// loop de Descrições
		{
			let descricaoAtual=preencheDescricao(pacote[i].value);
			for(dia=1;dia<=(Math.random()*(15-5)+5);dia++)	// loop de Data
			{
				dataAtual=incrementaData();
				let loopDeHoraNoDia=parseInt(Math.random()*(3-1)+1);
				vetorHora=SetaValoresIniciaisDeHoras();
				horarioAlmoco=false;
				
				for(let somadasNoDia=0; somadasNoDia<vetorHora[2];)	// loop de hora
				{
					let descriçãoDodiaia=descricaoAtual;
					horafinal=vetorHora[0]+parseInt(Math.random()*(4-3)+3);
					minutoFinal=parseInt(Math.random()*(9-1));

				
					if(!horarioAlmoco && vetorHora[0]>=11)
					{
						horafinal=vetorHora[0]+1;
						minutoFinal=parseInt(Math.random()*(9-1));;
						horarioAlmoco=true;
						descricaoAtual="Almoco";
					}

					somadasNoDia=somadasNoDia+(horafinal-vetorHora[0])*60+(minutoFinal-vetorHora[1]);

					// console.log(`hora Iniciar: ${vetorHora[0]}:${vetorHora[1]}`)
					// console.log(`hora final: ${horafinal}`)
					// console.log(`Somadas no dia: ${somadasNoDia}`);
					// console.log(vetorHora[2]);

					listaProjetos.push(new Atividade(pacote[i].value,descricaoAtual,dataAtual,`${vetorHora[0]}:0${vetorHora[1]}:00`,`${horafinal}:0${minutoFinal}:00`));
					descricaoAtual=descriçãoDodiaia;
					vetorHora[0]=horafinal;
					vetorHora[1]=minutoFinal;
				}
			}
		}
	}
	// console.log(listaProjetos);
	return listaProjetos;
}

function SetaValoresIniciaisDeHoras(){
	let vetorTempo=[]; // [horas,minutos,jornada]
	// console.log(flex.checked);
	if(flex.checked)
	{
		vetorTempo[0]=parseInt(Math.random()*(9-6)+6);
		vetorTempo[1]=parseInt(Math.random()*(9));
	}
	else
	{
		vetorTempo[0]=8;
		vetorTempo[1]=parseInt(Math.random()*(9));
	}

	if(noveHoras.checked)
		vetorTempo[2]=540;
	if(seisHoras.checked)
		vetorTempo[2]=360;
	// if(seisHorasEstagio.checked)
	// 	vetorTempo[2]=360;

	return vetorTempo;

}
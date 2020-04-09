function preencheDescricao(projetoAtual)
{
	// console.log(bancoDeDescricoes.sensor.length);
	switch (projetoAtual)
	{
		case 'Sensor de Pressao':
			return bancoDeDescricoes.sensor[(parseInt(Math.random()*(bancoDeDescricoes.sensor.length-1)+1))];
		break;			
		case 'Smart Touch V2':
			return bancoDeDescricoes.PIC32[(parseInt(Math.random()*(bancoDeDescricoes.PIC32.length-1)+1))];
		break;
		case 'Smart Touch 24':
			return bancoDeDescricoes.touch[(parseInt(Math.random()*(bancoDeDescricoes.touch.length-1)+1))];
		break;
		case 'Auxilio na producao':
			return bancoDeDescricoes.Auxilio[(parseInt(Math.random()*(bancoDeDescricoes.Auxilio.length-1)+1))];
		break;
		case 'Recorte de telas para o PIC32':
			return bancoDeDescricoes.recorte[(parseInt(Math.random()*(bancoDeDescricoes.recorte.length-1)+1))];
		break;
	}
}

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

function pegaValorCheckBox()
{
	var pacote = document.querySelectorAll('[name=proj]:checked');
	var novoProjeto = document.querySelectorAll('novoProjeto');
	
	mesDeInicio = document.getElementById("mes").selectedIndex;
	diaDeInicio = document.getElementById("dia").selectedIndex;

	dataDeInicio=dataDeInicio
	hoje=(mesDeInicio+1)+"/"+(diaDeInicio+1)+"/2020";
	hoje = new Date(hoje);
	dias=0;

	diaAtual=diaDeInicio+1;
	mesAtual=mesDeInicio+1;

	while(listaProjetos.length) 
	{
		    listaProjetos.pop();
		    // console.log(listaProjetos);
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
				for(let a=0; a<=(Math.random()*(3-1)+1); a++)	// loop de hora
				{
					let horafinal=horaAtual+parseInt(Math.random()*(5-3)+3);
					if (horafinal>18)
						horafinal=18;
					listaProjetos.push(new Atividade(pacote[i].value,descricaoAtual,dataAtual,horaAtual+':00:00',horafinal+':00:00'));		
					horaAtual=horafinal;
				}
			}
		}
	}
	console.log(listaProjetos);
}
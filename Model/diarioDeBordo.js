
//#######------------------ SELECÃO DA VIEW ------------------------#############//
var criaProjeto = document.getElementById("btCriar");
var salvarProjeto = document.getElementById("btSalvar");
var criaDescricao = document.getElementById("btAddDescricao");
var btCriarProjeto = document.getElementById("btCriar");
var campoDescricao = document.getElementById("campoDescricoes");
let select = document.getElementById("novoProjeto");
var adicionaInput=3;
//#######------------------ SELECÃO DA VIEW ------------------------#############//

var bancoDeDescricoes={
  sensor: ['Reavaliar sensor hall', 'Testes funcionais da nova versao','Adaptar codigo para nova sensibilidade','atualizar o FW da precison V1 para o novo sensor','Desenvolver funcao para deteccao de equipo'],
  PIC32: ['Portar codigo do FG','Pesquisar sobre Bateria de Litio', 'Desenvolver Middleware do sistema de Energia','Migrar codigo de alarmes','implementar baixo nivel do DFPlayer','Merge entre versoes de software'],
  touch: ['Bug da perda de dados','otimizar loop principal do sensoriamento','Resolucao da lista de bugs'],
  Auxilio: ['Montar modulos', 'Montar monitores','Montar sensores de pressao'],
  recorte: ['Recortar novas telas do PIC32', 'Desenhar telas pro Medidor','Prototipar Telas de leitos']
}

  	var projetoEstrutura={
  		nome:"",
  		Descricao:[],
  	}

  	let vetorProjeto=[];

  	var projetoEstrutura1= Object.create(projetoEstrutura);
	projetoEstrutura1.nome="Sensor de Pressao";
	projetoEstrutura1.Descricao=['Reavaliar sensor hall', 'Testes funcionais da nova versao','Adaptar codigo para nova sensibilidade','atualizar o FW da precison V1 para o novo sensor','Desenvolver funcao para deteccao de equipo'];
	vetorProjeto.push(projetoEstrutura1);

	var projetoEstrutura2= Object.create(projetoEstrutura);
	projetoEstrutura2.nome="Smart Touch V2";
	projetoEstrutura2.Descricao=['Portar codigo do FG','Pesquisar sobre Bateria de Litio', 'Desenvolver Middleware do sistema de Energia','Migrar codigo de alarmes','implementar baixo nivel do DFPlayer','Merge entre versoes de software'];
	vetorProjeto.push(projetoEstrutura2);

	var projetoEstrutura3= Object.create(projetoEstrutura);
	projetoEstrutura3.nome="Smart Touch 24";
	projetoEstrutura3.Descricao=['Bug da perda de dados','otimizar loop principal do sensoriamento','Resolucao da lista de bugs'];
	vetorProjeto.push(projetoEstrutura3);

	var projetoEstrutura4= Object.create(projetoEstrutura);
	projetoEstrutura4.nome="Auxilio na producao";
	projetoEstrutura4.Descricao=['Montar modulos', 'Montar monitores','Montar sensores de pressao'];
	vetorProjeto.push(projetoEstrutura4);

	var projetoEstrutura5= Object.create(projetoEstrutura);
	projetoEstrutura5.nome="recorte";
	projetoEstrutura5.Descricao=['Recortar novas telas do PIC32', 'Desenhar telas pro Medidor','Prototipar Telas de leitos'];
	vetorProjeto.push(projetoEstrutura5);

	// console.log(vetorProjeto);


/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
criaProjeto.addEventListener('click' , function()
{
  	if(novoProjeto.value=="")
  	{
  		alert("Preencha o campo para continuar");
  		return;
  	}

  	if(campoDescricao.style.display=="flex")
  	{
  		select.value="";
  		btCriarProjeto.innerHTML="Criar Projeto";
		campoDescricao.style.display="none";
  	}
	else 
	{
		btCriarProjeto.innerHTML="Cancela";
		campoDescricao.style.display="flex"
	}
});

/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
criaDescricao.addEventListener('click' , function()
{
	adicionaInput++;
	if(adicionaInput>10)
	{
		alert("Não é possível adicionar mais descrições");
		return;
	}

	let descriInput="descri"+adicionaInput;
	let addDercricao = document.getElementById("btAddDescricao");
	let html_2 = `<input type="text" name="descri" class="dercriProjeto" id="${descriInput}" placeholder="blá-blá-blá">`;
  	addDercricao.insertAdjacentHTML('beforebegin', html_2);
});

/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
salvarProjeto.addEventListener('click' , function()
{
	let projetoEstruturaNova= Object.create(projetoEstrutura);
	let vetorCampoDescricoes=[];
	var elems = document.querySelectorAll('input.dercriProjeto');
	var camposPreenchidos=0;
	var vetorDescrições=[];

	var values = [].map.call(elems, function(obj) {
		if(obj.value!="")
		{
			camposPreenchidos++
	  		vetorCampoDescricoes.push(obj.value);
		}
	});

	if(camposPreenchidos<3)
	{
		alert("Preencha no minimo 3 campos");
		return;
	}

	projetoEstruturaNova.nome=novoProjeto.value;
	projetoEstruturaNova.Descricao=vetorCampoDescricoes;
	vetorProjeto.push(projetoEstruturaNova);
	console.log(projetoEstruturaNova);

  	let html = `<label for="${novoProjeto.value}"><input type="checkbox" name="${"proj"}" value="${novoProjeto.value}" id="${novoProjeto.value}">${novoProjeto.value} </label>`;
  	select.insertAdjacentHTML('beforebegin', html);

  	campoDescricao.style.display="none";
  	btCriarProjeto.innerHTML="Criar Projeto";

  	var values = [].map.call(elems, function(obj) {
		if(obj.value!="")
		{
			obj.value="";
		}
	});
  	select.value="";
  	alert("Projeto incluído com sucesso");

});
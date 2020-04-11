
//#######------------------ SELECÃO DA VIEW ------------------------#############//
var criaProjeto = document.getElementById("btCriar");
var salvarProjeto = document.getElementById("btSalvar");
var criaDescricao = document.getElementById("btAddDescricao");
var adicionaInput=3;
//#######------------------ SELECÃO DA VIEW ------------------------#############//

var bancoDeDescricoes={
  sensor: ['Reavaliar sensor hall', 'Testes funcionais da nova versao','Adaptar codigo para nova sensibilidade','atualizar o FW da precison V1 para o novo sensor','Desenvolver funcao para deteccao de equipo'],
  PIC32: ['Portar codigo do FG','Pesquisar sobre Bateria de Litio', 'Desenvolver Middleware do sistema de Energia','Migrar codigo de alarmes','implementar baixo nivel do DFPlayer','Merge entre versoes de software'],
  touch: ['Bug da perda de dados','otimizar loop principal do sensoriamento','Resolucao da lista de bugs'],
  Auxilio: ['Montar modulos', 'Montar monitores','Montar sensores de pressao'],
  recorte: ['Recortar novas telas do PIC32', 'Desenhar telas pro Medidor','Prototipar Telas de leitos']
}

/*-------------------------------------------------------------
Nome:
Descrição:
Entrada(s):
Saida:
-------------------------------------------------------------*/
criaProjeto.addEventListener('click' , function()
{
  	var campoDescricao = document.getElementById("campoDescricoes");
  	var btCriarProjeto = document.getElementById("btCriar");

  	if(novoProjeto.value=="")
  	{
  		alert("Preencha o campo para continuar");
  		return;
  	}

  	if(campoDescricao.style.display=="flex")
  	{
  		btCriarProjeto.innerHTML="Cria Projeto";
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
	if(adicionaInput>=6)
	{
		alert("Não é possível adicionar mais descrições");
		return;
	}

	let descriInput="descri"+adicionaInput;
	let addDercricao = document.getElementById("btAddDescricao");
	let html_2 = "<input type="+"text"+" name="+"descri"+" id="+descriInput+" placeholder="+"blá-blá-blá"+">";
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
	let select = document.getElementById("teste123");
	let x = document.createElement("INPUT");
	let novoCheck = document.createElement("INPUT");
	let novoLabel = document.createElement("label");

	var elems = document.querySelectorAll('input.dercriProjeto');
	var camposPreenchidos=0;
	var vetorDescrições=[];
	var values = [].map.call(elems, function(obj) {
		if(obj.value!="")
		{
			camposPreenchidos++
	  		vetorDescrições.push(obj.value);
		}
	});

	if(camposPreenchidos<3)
	{
		alert("Preencha no minimo 3 campos");
		return;
	}

	console.log(vetorDescrições);

	x.setAttribute("type", "checkbox")

	novoCheck.setAttribute("type", "checkbox");
	novoCheck.setAttribute("value", novoProjeto.value);
	novoCheck.setAttribute("id", novoProjeto.value);
	novoLabel.setAttribute("for", novoProjeto.value);

  	let html = "<label for="+novoProjeto.value+"><input type="+"checkbox"+" name="+novoProjeto.value+" value="+novoProjeto.value+" id="+novoProjeto.value+" >"+novoProjeto.value+"</label>";
  	select.insertAdjacentHTML('afterbegin', html);
  	// console.log(bancoDeDescricoes);

});
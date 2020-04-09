
var criaProjeto = document.getElementById("btCriar");
var dia=0;
var dias=0;

var hoje;

var bancoDeDescricoes={
  sensor: ['Reavaliar sensor hall', 'Testes funcionais da nova versao','Adaptar codigo para nova sensibilidade','atualizar o FW da precison V1 para o novo sensor','Desenvolver funcao para deteccao de equipo'],
  PIC32: ['Portar codigo do FG','Pesquisar sobre Bateria de Litio', 'Desenvolver Middleware do sistema de Energia','Migrar codigo de alarmes','implementar baixo nivel do DFPlayer','Merge entre versoes de software'],
  touch: ['Bug da perda de dados','otimizar loop principal do sensoriamento','Resolucao da lista de bugs'],
  Auxilio: ['Montar modulos', 'Montar monitores','Montar sensores de pressao'],
  recorte: ['Recortar novas telas do PIC32', 'Desenhar telas pro Medidor','Prototipar Telas de leitos']
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
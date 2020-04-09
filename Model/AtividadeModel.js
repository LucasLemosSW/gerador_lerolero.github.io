class Atividade
{

	constructor(projeto,descricao,data,inicio,fim){

		this.projeto=projeto;
		this.descricao=descricao;
		this.data = data;
		this.inicio=inicio;
		this.fim=fim;
	}

	obtemProjeto(){
		return this.projeto;
	}


}
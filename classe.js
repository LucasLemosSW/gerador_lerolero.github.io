class Atividade
{

	constructor(projeto,descricao,data,inicio){

		this.projeto=projeto;
		this.descricao=descricao;
		this.data = new Date();;
		this.inicio=inicio;
	}

	obtemProjeto(){
		return this.projeto;
	}


}
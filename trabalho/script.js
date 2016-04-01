		function validaCampo(){
				
		if(document.cadastro.cpf.value=="")
		{
		alert("O Campo cpf é obrigatório!");
		document.cadastro.cpf.focus();
		return false;
		}
		else
		if(document.cadastro.nome.value=="")
		{
		alert("O Campo nome é obrigatório!");
		document.cadastro.nome.focus();
		return false;
		}
		else
		if(document.cadastro.endereco.value=="")
		{
		alert("O Campo endereco é obrigatório!");
		document.cadastro.endereco.focus();
		return false;
		}
		else
		if(document.cadastro.cidade.value=="")
		{
		alert("O Campo Cidade é obrigatório!");
		document.cadastro.cidade.focus();
		return false;
		}
		else
			
		if(document.cadastro.sexo.value=="Escolher Sexo")
		{
		alert("Escolha M ou F");
		document.cadastro.sexo.focus();
		return false;
		}
		else
		if(document.cadastro.email.value=="")
		{
		alert("O campo e-mail é obrigatório!");
		document.cadastro.email.focus();
		return false;
		}
		else
		if(document.cadastro.sim.checked == false && document.cadastro.nao.checked == false){
			alert("Escolha Sim ou Não");
			document.cadastro.newsSim.focus();		
				return false;
		}
		};

		function validarCPF( cpf ){
			var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
			
			if(!filtro.test(cpf))
			{
				window.alert("CPF inválido. Tente novamente.");
				document.cadastro.cpf.focus();
				return false;
			}
		   
			cpf = remove(cpf, ".");
			cpf = remove(cpf, "-");
			
			if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
				cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
				cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
				cpf == "88888888888" || cpf == "99999999999")
			{
				window.alert("CPF inválido. Tente novamente.");
				document.cadastro.cpf.focus();
				return false;
		   }

			soma = 0;
			for(i = 0; i < 9; i++)
			{
				soma += parseInt(cpf.charAt(i)) * (10 - i);
			}
			
			resto = 11 - (soma % 11);
			if(resto == 10 || resto == 11)
			{
				resto = 0;
			}
			if(resto != parseInt(cpf.charAt(9))){
				window.alert("CPF inválido. Tente novamente.");
				document.cadastro.cpf.focus();
				return false;
			}
			
			soma = 0;
			for(i = 0; i < 10; i ++)
			{
				soma += parseInt(cpf.charAt(i)) * (11 - i);
			}
			resto = 11 - (soma % 11);
			if(resto == 10 || resto == 11)
			{
				resto = 0;
			}
			
			if(resto != parseInt(cpf.charAt(10))){
				window.alert("CPF inválido. Tente novamente.");
				document.cadastro.cpf.focus();
				return false;
			}
			
			return true;
		 };
		 
		function remove(str, sub) {
			i = str.indexOf(sub);
			r = "";
			if (i == -1) return str;
			{
				r += str.substring(0,i) + remove(str.substring(i + sub.length), sub);
			}
			
			return r;
		};

		function mascara(o,f){
			v_obj=o
			v_fun=f
			setTimeout("execmascara()",1)
		}

		function execmascara(){
			v_obj.value=v_fun(v_obj.value)
		}

		function cpf_mask(v){
			v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
			v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o terceiro e o quarto dígitos
			v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o setimo e o oitava dígitos
			v=v.replace(/(\d{3})(\d)/,"$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo dígitos
			return v
		};

		//valida nome 
		function validaNome(e){
			
			 tecla = event.keyCode;
				
				if (tecla >= 33 && tecla <= 64 
					|| tecla >= 91 && tecla <= 93 
						|| tecla >= 123 && tecla <= 159 
							|| tecla >= 162 && tecla <= 191 ){ 
					return false;
					
				}else{
				   return true;
				}
		};

		//valida letras maiusculas
		function validaMaiuscula(z){
				v = z.value.toUpperCase();
				z.value = v;
			};

		//valida formato da mascara do telefone	
		function mascaraTelefone(mascara, documento){
		  var i = documento.value.length;
		  var saida = mascara.substring(0,1);
		  var texto = mascara.substring(i)
		  
		  if (texto.substring(0,1) != saida){
					documento.value += texto.substring(0,1);
		  }
		  
		  
		};
		
		function validaTelefone(){
				
			if (document.cadastro.telefone.value == ""){
		alert ("O campo deve ser preenchido!");
		document.cadastro.telefone.focus();
			return false;
		}
			else
				if (isNaN(document.cadastro.telefone.value)){
		alert ("O campo deve conter apenas numeros!");
		document.cadastro.telefone.focus();
		return false;
		}
			
			
		};

		//valida formato e-mail
		function validaEmail(){
		if( document.forms[0].email.value=="" 
		   || document.forms[0].email.value.indexOf('@')==-1 
			 || document.forms[0].email.value.indexOf('.')==-1 )
			{
				alert( "Por favor, informe um E-MAIL válido!" );
				document.cadastro.email.focus();
				return false;
			}
		};

		//valida senha 
		function validaSenha(){
			if(document.cadastro.senha.value=="" 
				|| document.cadastro.senha.value.length < 7
					|| document.cadastro.senha.value.indexOf(' ','0')!= -1)
					{
						alert("Digite uma senha válida!");
						document.cadastro.senha.focus();
					return false;
		}
			

		};


		//validação checkbox com a mensagem
		function validaMsg(){
				
			if(document.cadastro.newsSim.checked  && document.cadastro.newsNao.checked || 
				document.cadastro.newsSim.checked == false  && document.cadastro.newsNao.checked == false){
			alert("Campo Obrigatório - Escolha Sim ou Não");
					
			return false;
			}
			
			if(document.cadastro.newsSim.checked == true && document.cadastro.newsNao.checked == false){
				
			document.getElementById("msgpromocao").innerHTML = "A qualquer momento voce pode cancelar o recebimento dos e-mails de promoção\
			enviando um e-mail com o assunto STOP MAIL para o endereço contato@estacio.br";
			}
			else{
				document.getElementById("msgpromocao").innerHTML = "";
			}
			return false;

				
		};

		//Valida campo observacao
		function validaObservacao(){

		   var TextMsg =  cadastro.observacao.value;
		   if (TextMsg.length>200)
		   {
			   alert("Permitido 200 caracteres!!!!");
			   document.cadastro.observacao.focus();
		   return false;
			}
		   
		};


		//valida valores para exibir no alerta	
		function validaValores(){
			var vnome = document.cadastro.nome.value;
			var novoCpf = document.cadastro.cpf.value;
			var vendereco = document.cadastro.endereco.value;
			var vcidade = document.cadastro.cidade.value;
			var vsexo = document.cadastro.sexo.value;
			var vtelefone = document.cadastro.telefone.value;
			var vemail = document.cadastro.email.value;
			var vsenha = document.cadastro.senha.value;
			var vpromocao;
			if(document.cadastro.newsSim.checked == true){
				var vpromocao = "SIM";
			}else{
				var vpromocao = "Não";
			};
			
			
			var vobservacao = document.cadastro.observacao.value;
			
			alert("CPF: " + novoCpf + "\nNOME: " + vnome + "\nENDEREÇO: " + vendereco + "\nCIDADE: " + vcidade + "\nSEXO: " + vsexo 
					+ "\nTELEFONE: " + vtelefone +  "\nE-MAIL: " + vemail +"\nSENHA: " + vsenha 
						+  "\nPROMOÇÂO: " + vpromocao + "\nOBSERVAÇÂO: " + vobservacao);	
			
			
			
		};

		<!-- Fim do JavaScript que validará os campos obrigatórios! -->

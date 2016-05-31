//VALIDAR CPF
$(document).ready(function(){
	//AO SAIR DO CAMPO CPF ELE VEIFICA SE ESTA VAZIO
  $("#txt_cpf").blur(function(){
	var cpf =  $("#txt_cpf").val();
       if(cpf ==""){
		   alert("CAMPO CPF VAZIO");
           $("#txt_cpf").focus();
       }else{
	//SENÃO FOR VAZIO ENTÃO CHAMA A FUNÇÃO VALIDARCPF
       validarCPF(cpf);      
		}
	});
});

//FUNÇÃO VALIDAR CPF
	function validarCPF( cpf ){
		var filtro = /^\d{3}.\d{3}.\d{3}-\d{2}$/i;
			if(!filtro.test(cpf)){
					alert("CAMPO CPF VAZIO");
					 $("#txt_cpf").focus();
					return false;
				}
	//REMOVE OS CARACTERES DA MASCARA DO CAMPO CPF		   
				cpf = remove(cpf, ".");
				cpf = remove(cpf, "-");
	//VERIFICA SE POSSUI A QUANTIDADE DE NUMEROS E SEQUENCIAIS DE NUMEROS 
				if(cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" ||
					cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" ||
					cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" ||
					cpf == "88888888888" || cpf == "99999999999")
				{
	//SE FOR INVALIDO APRESENTA UMA MENSAGEM E DEPOIS SETA O FOCU NO CAMPO
					alert("CPF inválido. Tente novamente.");
					$("#txt_cpf").focus();
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
					alert("CPF inválido. Tente novamente.");
					 $("#txt_cpf").focus();
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
					alert("CPF inválido. Tente novamente.");
					 $("#txt_cpf").focus();
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


//Ao digitar apresentar campos com letras maisculas
$(document).ready(function() {
  $("#txt_nome").keyup(function(){					//AO DIGITAR 
    $(this).val($(this).val().toUpperCase());		//COLOCA TUDO EM CAIXA ALTA
  });
});

//Campo nome valida somente letras
$(document).ready(function() {
  $("#txt_nome").keyup(function() {  								//AO DIGITAR
    var valor = $("#txt_nome").val().replace(/[^\w]|\d/g , ' ');	//ATRIBUI A UMA VARIAVEL O VALOR DO CAMPO QUE PERMITE DIGITAR APENAS LETRAS E O ESPAÇO
    $("#txt_nome").val(valor); 										//ATRIBUI NO CAMPO A VARIAVEL
})
});

//Validar combobox ESTADO CIVIL 
$(document).ready(function(){
	$("#txt_estadoCivil").blur(function(){									//AO SAIR DO CAMPO
		if ($('#txt_estadoCivil').val() == "--Escolher Estado Civil--") {	//VERIFICA O VALOR DO CAMPO E COMPARA COM --Escolher Estado Civil--
			$("#txt_estadoCivil").focus();  								//SE IGUAL SETA O FOCO NO CAMPO 
				alert('Selecionar uma opção');        						//APRESENTA UM ALERTA
		} 
    })
});

//Validar combobox SEXO
$(document).ready(function(){
	$("#txt_sexo").blur(function(){								//AO SAIR DO CAMPO
		if ($('#txt_sexo').val() == "--Escolher Sexo--") {		//VERIFICA O VALOR DO CAMPO E COMPARA COM --Escolher Sexo--
			$("#txt_sexo").focus();  							//SE IGUAL SETA O FOCO NO CAMPO 
				alert('Selecionar uma opção');					//APRESENTA UM ALERTA
        } 
	})
});

//CEP verificando no servlet e preenchendo os campos subsquentes
$(document).ready(function(){       
	$('#txt_cep').blur(function(event){  
		var texto = $('#txt_cep').val();
			$.ajax({
					type: 'GET',
					url: 'ServletAjax',
                    data:{
						txt_cep : texto
                         },
                         beforeSend: function(){
						},
                         success: function(nome){
							$(nome).find('texto').each(function (){ //VERIFICANDO MENSAGEM DE RETORNO
                             var msg = $(this).text();				//SALVA O RETORNO NUMA VARIAVEL
                             alert(msg);							//APRESENTA O ERRO AO USUARIO
							$('#txt_cep').focus();					//SETA O FOCO NO CAMPO
							}); 
                           
                           $(nome).find('endereco').each(function (){ //VERIFICANDO MENSAGEM DE RETORNO
                            var endereco = $(this).text();			  //SALVA O RETORNO NUMA VARIAVEL
                            $('#txt_endereco').val(endereco);		  // GRAVA A VARIAVEL NO CAMPO REFERENTE
                           });
                           $(nome).find('bairro').each(function (){	//VERIFICANDO MENSAGEM DE RETORNO
                            var bairro = $(this).text();			//SALVA O RETORNO NUMA VARIAVEL
                            $('#txt_bairro').val(bairro);			// GRAVA A VARIAVEL NO CAMPO REFERENTE
                           });
                           $(nome).find('estado').each(function (){	//VERIFICANDO MENSAGEM DE RETORNO
                            var estado = $(this).text();			//SALVA O RETORNO NUMA VARIAVEL
                            $('#txt_estado').val(estado);			// GRAVA A VARIAVEL NO CAMPO REFERENTE
                           });
                           $(nome).find('cidade').each(function (){	//VERIFICANDO MENSAGEM DE RETORNO
                            var cidade = $(this).text();			//SALVA O RETORNO NUMA VARIAVEL
                            $('#txt_cidade').val(cidade);			// GRAVA A VARIAVEL NO CAMPO REFERENTE
                           });  
						},
                         error: function(request, status, error){
                             alert(request.responseText);
                            
                         },
                    });
                   
                });
               
            });

//VALIDAÇÃO EMAIL
$(document).ready(function(e){
	$('#txt_email').blur(function(){					
		var email = $('#txt_email').val();				
			if ($.trim(email).length == 0) {			
				alert('Entre com um EMAIL valido');
				return false;
			}
			if (validateCaseSensitiveEmail(email)) {
				return false;
			}
			else {
				alert('Email invalido');
				$('#txt_email').focus();
				return false;
			}
	});
	function validateCaseSensitiveEmail(email){ 
		var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
			if (reg.test(email)){
				return true;
			}
			else{
				return false;
			}
	} 
});

//VALIDA SENHA
$(document).ready(function () {											
	$("#txt_senha").blur(function () {  								//AO SAIR DO CAMPO
		if($("#txt_senha").val().length < 6 ) {  						//VERIFICA SE O VALOR DO CAMPO É INFERIOR A SEIS CARACTERES
			alert("Senha deve conter no minimo 6 caracteres");  		//SE FOR INFERIOR APRESENTA UMA MENSAGEM AO USUARIO
			$("#txt_senha").focus();									//SETA O FOCO NO CAMPO
			return false;  
			}else if($("#txt_senha").val().indexOf(' ','0') != -1 ){	//VERIFICA SE O VALOR DO CAMPO POSSUI ESPACO
				alert("Senha não pode conter espaços vazios");  		//SE CONTIVER ESPACO APRESENTA UMA MENSAGEM AO USUARIO
				$("#txt_senha").focus();								//SETA O FOCO NO CAMPO
				return false;  
			}
		return false;  
	});
});  

//Validar campo OBSERVAÇÂO não pode ser vazio nem maior que 200 caracteres
$(document).ready(function(){
	$("#txt_observacao").on("keyup",function(){							//AO DIGITAR
		$(this).val($(this).val().toUpperCase());						//COLOCA TUDO EM CAIXA ALTA
        var observacao = parseInt($(this).val().length);				//EFETUAR A CONVERSAO DO VALOR DO CAMPO PARA INT E SALVA NUMA VARIAVEL
        var limite = 200;												//CRIAÇÃO DE VARIAVEL PARA COMPARAR
        $("#count").html(observacao); 									//CRIAÇÃO DO CAMPO CONTADOR QUE RECEBE O O VALOR DA VARIAVEL QUE FOI CONVERTIDA
        });
});

//VALIDAR MENSAGEM PROMOÇÃO
$(document).ready(function () {
	$("#txt_newsSim").click(function () {  								//AO CLICAR NO BOTÃO
		if( $("#txt_newsSim").is(':checked') ){							//VERIFICA SE O CHECKBOX ESTA CLICADO
			var msg = "A qualquer momento voce pode cancelar"+ "\ "+ "o recebimento dos e-mails de promoção \
				enviando \n um e-mail com o assunto STOP MAIL para \n o endereço contato@estacio.br";  // VARIAVEL COM UMA MENSAGEM AO USUARIO
			$("#txt_msgpromocao").html(msg);							//CAMPO DA MENSAGEM RECEBE A MENSAGEM CRIADA COM A MENSAGEM
		} 
			else {
				var msg = "";											//SE NÃO CLICADO APAGA O VALOR DA MENSAGEM
				$("#txt_msgpromocao").html(msg);						//CAMPO DA MENSAGEM RECEBE A MENSAGEM CRIADA COM A MENSAGEM
			}
   });
});    

//Cancelar fomulario
$(document).ready(function() {
	$("#cancelar").click(function(){	//AO CLICAR NO CANCELAR
		location.reload ();				//LIMPA A TELA
	});
});

//Dados preenchidos salvando no LocalStorage
$(document).ready(function(){
	var operacao = "A";
    var indice_selecionado = -1;
    var tbDados = localStorage.getItem("tbDados");
    tbDados = JSON.parse(tbDados);
    if (tbDados == null){
        tbDados = [];
    }
    $("#formCadastro").on("submit", function(){
		if (operacao == "A"){
            adicionarElemento();
        }else
            editarElemento();
    });
        
	$("#tbCadastro").on("click", ".btnEditar", function(){
		operacao = "E";
		indice_selecionado = parseInt($(this).attr("alt"));
		var cli = JSON.parse(tbDados[indice_selecionado]);
		
		$("#txt_cpf").val(cli.cpf);
		$("#txt_nome").val(cli.nome);
		$("#txt_estadoCivil").val(cli.estadoCivil);
		$("#txt_sexo").val(cli.sexo);
		$("#txt_telefone").val(cli.telefone);
		$("#txt_cep").val(cli.cep);
        $("#txt_endereco").val(cli.endereco);
        $("#txt_bairro").val(cli.bairro);
        $("#txt_cidade").val(cli.cidade);
        $("#txt_estado").val(cli.estado);
        $("#txt_email").val(cli.email);
        $("#txt_senha").val(cli.senha);
        $("#txt_observacao").val(cli.observacao);
        $("#txt_newsSim").val(cli.newsSim);
  		$("#txt_cpf").focus(); 
  
		Listar();
      
	});

	$("#tbCadastro").on("click", ".btnExcluir",function(){
		indice_selecionado = parseInt($(this).attr("alt"));
		Excluir();
		Listar();
	});  
    
    function adicionarElemento(){
		var cliente = JSON.stringify({
			nome   :             $("#txt_nome").val(),
			cpf    :             $("#txt_cpf").val(),
			estadoCivil:         $("#txt_estadoCivil").val(),
			sexo       :         $("#txt_sexo").val(),
			telefone   :         $("#txt_telefone").val(),
			cep        :         $("#txt_cep").val(),
			endereco   :         $("#txt_endereco").val(),
			bairro     :         $("#txt_bairro").val(),
			cidade     :         $("#txt_cidade").val(),
			estado     :         $("#txt_estado").val(),
			email      :         $("#txt_email").val(),
			senha      :         $("#txt_senha").val(),
			observacao :         $("#txt_observacao").val(),
			newsSim    :         $("#txt_newsSim").val()
        });
			tbDados.push(cliente);
			localStorage.setItem("tbDados", JSON.stringify(tbDados));
			alert('GRAVADO COM SUCESSO !');
        return true;
        
    }; 
        
//listando dados salvos no banco de dados em uma tabela
	function Listar() {
        $("#tbCadastro").html("");
        $("#tbCadastro").html(
                "<thead>" +
                "   <tr>" +
                "       <th>CPF</th>" +
                "       <th>Nome</th>" +
                "       <th></th>" +
                "   </tr>" +
                "</thead>" +
                "<tbody>" +
                "</tbody>"
                );
		for (var i in tbDados) {
            var cli = JSON.parse(tbDados[i]);
            var novaLinha = $("<tr>");
            var cols = "";
            cols += "<td>" + cli.cpf + "</td>";
            cols += "<td>" + cli.nome + "</td>";
            cols += "<td>" +
                    " <img src='img/edit.png' alt='" +
                    i + "' class='btnEditar'/>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                    "<img src='img/delete.png' alt='" +
                    i + "' class='btnExcluir'/>" + "</td>";
            novaLinha.append(cols);
			$("#tbCadastro").append(novaLinha);
        }
    }    
		Listar();
    
    //Editando elemento apresentados na tabela    
	function editarElemento(){
		tbDados[indice_selecionado] = JSON.stringify({
			nome   :             $("#txt_nome").val(),
			cpf    :             $("#txt_cpf").val(),
			estadoCivil:         $("#txt_estadoCivil").val(),
			sexo       :         $("#txt_sexo").val(),
			telefone   :         $("#txt_telefone").val(),
			cep        :         $("#txt_cep").val(),
			endereco   :         $("#txt_endereco").val(),
			bairro     :         $("#txt_bairro").val(),
			cidade     :         $("#txt_cidade").val(),
			estado     :         $("#txt_estado").val(),
			email      :         $("#txt_email").val(),
			senha      :         $("#txt_senha").val(),
			observacao :         $("#txt_observacao").val(),
			newsSim    :         $("#txt_newsSim").val()    
        });
        Listar();
	//Altera o item selecionado na tabela
       localStorage.setItem("tbDados", JSON.stringify(tbDados));
        alert('EDITADO COM SUCESSO !');
		operacao = "A";
	//Volta ao padrão
			return true;
	}

	//Excluindo elemento apresentado na tabela    
	function Excluir(){
		alertify.confirm("DESEJA REALMENTE EXCLUIR?", function(e){
        if(e){
			tbDados.splice(indice_selecionado, 1);
            localStorage.setItem("tbDados", JSON.stringify(tbDados));
            Listar();
            }
			else{
				location.reload ();
                }
        });
	} 
});

//Destacar linhas da tabela ao passar o mouse 
$(document).ready(function(){
	//AO PASSAR O MOUSE SOBRE A LINHA
	$("#tbCadastro tbody tr").hover(
		function(){
	//ADCIONA A CLASSE NE DESTILO NO CSS		
			$(this).addClass('destaque');
		},
		function(){
    //REMOVE A CLASSE NE DESTILO NO CSS
			$(this).removeClass('destaque');
		}
    );
});

  


<%-- 
    Document   : index.jsp
    Created on : 10/05/2016, 21:47:21
    Author     : Marcos
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="js/jquery-1.12.3.min.js"></script>
        <script type="text/javascript" src="bootstrap/js/maskedinput-1.3.js"></script>
        <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
        <script type="text/javascript" src="js/formata.js"></script>
          <script type="text/javascript" src="js/alertify.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/estilo.css"/>
            <link rel="stylesheet" type="text/css" href="css/alertify.core.css"/>
        <link rel="stylesheet" type="text/css" href="css/alertify.default.css"/>
    
        
       <title>TRABALHO AV2</title>
    </head>
    <body>
  
     <form id="formCadastro" method="post">
          <div class="panel-heading">
            <div class="row content">
            <div class="col-sm-12">
            
                <div id="centro"  ><h4>Cadastro de Clientes</h4></div>
            


            <div class="row">
                <div class="col-sm-3">
                    <div class="well">
                         <input class="form-control" placeholder="CPF" type="text" id="txt_cpf" onkeypress="mascara(this, cpf_mask)"  maxlength="14" required="required"/> 
                    </div>
                 </div>
                
                <div class="col-sm-9">
                    <div class="well">
                        <input class="form-control"	placeholder="NOME" type="text" id="txt_nome" maxlength="50" required="required"/> 
                    </div>
                </div>
                

            </div>
                
                
                         <div class="row">
                              <div class="col-sm-4">
                    <div class="well">
                        <select class="form-control" name="estadoCivil" id="txt_estadoCivil" required="required">
                            <option class="form-control">--Escolher Estado Civil--</option>
                            <option>Solterio</option> 
                            <option>Casado</option>
			</select>
                    </div>
                </div>            
                             
                             
                <div class="col-sm-4">
                    <div class="well">
                        <select class="form-control" name="sexo" id="txt_sexo" required="required">
                            <option class="form-control">--Escolher Sexo--</option>
                            <option>M</option> <option>F</option>
			</select>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="well">
                        <input class="form-control" placeholder="TELEFONE" type="text" id="txt_telefone" size="20" maxlength="12" required="required"/>
                    </div>
                </div>
            </div>
   
                
                
            <div class="row">
                                <div class="col-sm-3">
                    <div class="well">
                        <input  class="form-control" placeholder="CEP" type="text" id="txt_cep" maxlength="50" required="required"/>
 
                    </div>
                </div>
                <div class="col-sm-9">
                    <div class="well">
                     
                         <input class="form-control" type="text" id="txt_endereco" placeholder="ENDEREÇO" required="required" />
                    </div>
                </div>

            </div>                
                    
                <div class="row">
                                    <div class="col-sm-4">
                    <div class="well">
                        <input  class="form-control" placeholder="BAIRRO" type="text" id="txt_bairro" maxlength="50" required="required" />
                    </div>
                </div>
                                    <div class="col-sm-4">
                    <div class="well">
                        <input  class="form-control" placeholder="CIDADE" type="text" id="txt_cidade" maxlength="50" required="required" />
                    </div>
                </div>
                    
                <div class="col-sm-4">
                    <div class="well">
                        <input class="form-control" placeholder="ESTADO" type="text" id="txt_estado" maxlength="50" required="required"/>
                    </div>
                </div>

            </div>
                
	  
            <div class="row">
                <div class="col-sm-6">
                    <div class="well">
                        <input class="form-control" placeholder="EMAIL" type="text" id="txt_email" maxlength="40" required="required"/>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="well">
                        <input class="form-control" placeholder="SENHA" type="password" name ="senha" id="txt_senha" size="15" maxlength="15" required="required"/>
                        
                        
                    </div>
                </div>
            </div>
	 
	    <div class="row">

                <div class="col-sm-12">
                    <div class="well" id="centro">
                        <textarea class="form-control" placeholder="OBSERVAÇÃO" maxlength='200' rows="3" id="txt_observacao" required="required"></textarea>
                        <span id="count"></span> Caracteres digitados <br>
                    </div>
                </div>
                
                
            </div>


	 
	    <div class="row">
                <div class="col-sm-12">
                    <div class="well">
                        <div class="checkbox">
                            <div align="left" class="container-fluid"><h5>Receber Promoções:</h5></div>
                                <label class="checkbox-inline"><input type="checkbox" id="txt_newsSim" VALUE="newsSim" >SIM </label>

                      
                                <span class="style1" id="txt_msgpromocao">  </span>
                    </div>
                </div>
            </div>
            <div class="form-group" id="centro">
                <input class="btn btn-success"  type="submit" id="enviar" value="Salvar"/> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<input class="btn btn-danger" type="button" id="cancelar" value="Cancelar"/>
                
            </div>
                
        </div>
  </div>
</div>    
   </form>
    
            <h1>DADOS CADASTRADOS</h1>
        <table id="tbCadastro" border="2"  class="table table-bordered" >
                
        </table>
         <div class="progress progress-striped active">
   <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
    </div>
</div>
 <div class="row tasks">

    <div class="col-md-2">
      
    </div>
  </div>
    
    </body>
</html>

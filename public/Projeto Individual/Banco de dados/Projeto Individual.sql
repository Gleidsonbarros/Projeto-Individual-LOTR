create database Projeto;
use Projeto;

CREATE table Usuario (
idusuario int primary key auto_increment,
nome varchar(45) not null,
senha varchar(45),
email varchar(45) unique,
data_de_nascimento date,
codigo_ativacao varchar(45),
fkReino int,
constraint fkUsuarioReino
foreign key (fkReino)
references Reino (idReino)

);

CREATE TABLE Reino (
  idReino INT Primary key auto_increment,
  nome_dos_reinos VARCHAR(45) not null,
  Descricao varchar(1000),
  Regiao VARCHAR(30)
  );
  
  Insert into Usuario (nome,senha,email,data_de_nascimento,codigo_ativacao) values
  ('Gleidson','Sptech123@','gleidson.barros@sptech.school','1997-06-07','ER6879');
  
  
  
  
  Insert into Reino (nome_dos_reinos,descricao,regiao) values
  ('Erebor','Reino onde esta a pedra arken(pedra do rei','norte proximo ao rio celduin');
  
  select * from Usuario;

  CREATE TABLE resultados(
    idresultado int primary key auto_increment,
    guerreiro int,
    mago int,
    sabio int,
    artesao int,
    arqueiro int,
    lanceiro int,
    fkUsuario int,
     constraint fkUsuarioresultados
     foreign key (fkUsuario)
     references Usuario (idusuario)

     
  )
  

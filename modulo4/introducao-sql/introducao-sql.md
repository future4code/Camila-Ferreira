### EXERCICIO 1 

~~~sql
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
~~~

### a) CREATE TABLE cria uma tabela. 
### VARCHAR é uma string com (n) numeros de caracteres definidos, no caso, máximo de 255.
### PRIMARY KEY é um identificador que não pode ser repetido, deve ser único, geralmente é uma "id". Ele facilita as buscas e garante que uma informação não se repita dentro da tabela.
### NOT NULL garante que um valor seja dado a uma coluna, ou seja, o valor não pode ser nulo
### DATE representa uma data

### b) SHOW DATABASES mostra uma lista de bancos de dado e SHOW TABLES mostra uma lista de tabelas criaas

### c) DESCRIBE nome_tabela mostra o esqueleto da tabela, as informações/comandos de cada coluna que a tabela possui

### EXERCICIO 2

~~~sql

INSERT INTO Actor (id, name, salary, birth_date, gender) 
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Camila Pitanga", 
"500000",
"1977-06-12",
"female"
);

~~~

### b) Em "Camila Pitanga" acusa erro pois o id 002 é uma PRIMARY KEY 002 e já foi usado, ele deve ser unico pois é o que identifica os atores

### c) 
### INSERT INTO Actor (id, name, salary)
### VALUES(
###  "003", 
###  "Fernanda Montenegro",
###  300000,
###  "1929-10-19", 
###  "female"
### );
### "Error Code: 1136. Column count doesn't match value count at row 1" 
### => O numero de colunas não equivale ao numero que colocamos na primeira linha, nela colocamos apenas id, nome e salario = 3 e as informações inseridas foram 5

### Corrigindo:
~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
~~~

### d) Acusa o erro "Error Code: 1364. Field 'name' doesn't have a default value" pois definimos que a propriedade nome não pode ser nula. Corrigindo:

~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Reynaldo Gianecchini",
   400000,
  "1949-04-18", 
  "male"
);
~~~

### e) Acusa o erro "Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1" pois o formato de data estava sem as aspas. Corrigindo:

~~~sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);
~~~



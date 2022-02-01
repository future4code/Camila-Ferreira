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

### EXERCICIO 3

### a)

~~~sql
SELECT id, name from Actor WHERE gender = "female";
~~~

### b)

~~~sql 
SELECT salary from Actor WHERE name = "Tony Ramos";
~~~

### c)

### Retorna "0 row(s) returned" pois não há nenhuma linha de gender com esse valor

### d)

~~~sql
SELECT id, name, salary from Actor WHERE salary < 500000;
~~~

### e) Retorna o erro "Error Code: 1054. Unknown column 'nome' in 'field list'" 
### O erro diz que a coluna "nome" é desconhecida, pois aqui utilizamos "name". Corrigida:

~~~sql
SELECT id, name from Actor WHERE id = "002"
~~~

### EXERCICIO 4

### a) A query SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
### Seleciona da tabela Actor os atores em que o começo de strings quaisquer, no caso as da coluna nome, sejam igual a "A" ou "J" E que o salario seja acima de 300000

### b)

~~~sql
SELECT * from Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
~~~

### c) 

~~~sql
SELECT * from Actor WHERE name LIKE "%g%" OR "%G%";
~~~

### d) 

~~~sql
SELECT * from Actor WHERE (name LIKE "%a%" OR "%A%" OR "%g%" OR "%G%") AND SALARY BETWEEN 350000 AND 900000;
~~~

### EXERCICIO 5 

~~~sql
CREATE TABLE Films (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
release_date DATE NOT NULL,
rating INT NOT NULL
); 
~~~

### a) A query cria uma tabela com id, sendo ela a PRIMARY KEY, o name, uma sinopse com tipo text (que permite limite maior de tamanho), uma data de lançamento tipo date e avaliação que é um numero inteiro de 1 - 10, todos eles não permitem valor nulo.

### b) 

~~~sql
INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
~~~

### c)

~~~sql
INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
~~~

### d)

~~~sql
INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
~~~

### e)

~~~sql
INSERT INTO Films (id, name, synopsis, release_date, rating)
VALUES(
"004",
"O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
"2000-09-10",
9
);
~~~

### EXERCICIO 6

### a)

~~~sql
SELECT id, name, rating FROM Films  WHERE id = "002";
~~~

### b) 

~~~sql
SELECT id, name, rating FROM Films  WHERE id = "002";
~~~

### c)

~~~sql 
SELECT id, name, synopsis FROM Films WHERE rating > 7;
~~~

### EXERCICIO 7

### a)

~~~sql
SELECT * FROM Films WHERE name LIKE "%vida%";
~~~

### b)

~~~sql
SELECT * FROM Films WHERE name LIKE "%cangaceiro%" OR synopsis LIKE "%cangaceiro%";
~~~

### c)

~~~sql
SELECT * FROM Films WHERE release_date < "2022-01-30";
~~~

### d)

~~~sql
SELECT * FROM Films WHERE release_date < "2022-01-30" AND (name LIKE "%cangaceiro%" OR synopsis LIKE "%cangaceiro%") AND rating > 7;
~~~ 
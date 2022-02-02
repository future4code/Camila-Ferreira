### EXERCICIO 1

### a) A query altera a tabela Actor removendo a coluna salary dela
### b) A query altera a tabela Actor mudando a coluna de nome gender para "sex" e limitando ela a 6 caracteres
### c)  A query altera a tabela Actor mudando a coluna de nome gender e limitando ela a 255 caracteres
### d)
~~~sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

### EXERCICIO 2

### a)
~~~sql
UPDATE Actor
SET name = "Regina Casé",
birth_date = "1954-02-25"
WHERE id = "003";
~~~

### b)
~~~sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
~~~

### c)
~~~sql
UPDATE Actor 
SET name = "Adriana Esteves",
salary = 600000,
birth_date = "1969-12-15",
gender = "female"
WHERE id = "005";
~~~

### d) Usei o seguinte comando e a resposta foi "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0", ou seja, ele não alterou nada pois não havia id correspondente a "007"

~~~sql
UPDATE Actor
SET name = "Fábio Assunção"
WHERE id = "007";
~~~

### EXERCICIO 3

### a) (Deletei Regina Casé pois Fernanda Montenegro não estava mais na minha lista)
~~~sql
DELETE FROM Actor WHERE name = "Regina Casé";
~~~

### b) 
~~~sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
~~~

### EXERCICIO 4

### a) 
~~~sql
SELECT MAX(salary) FROM Actor;
~~~

### b) 
~~~sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
~~~

### c)
~~~sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
~~~

### d) 
~~~sql
SELECT SUM(salary) FROM Actor;
~~~

### EXERCICIOS 5

### a) A query retorna a quantidade de atores por gênero e também agrupa o resultado de acordo com o gênero.

### b)
~~~sql
SELECT id, name
FROM Actor
ORDER BY name DESC;
~~~

### c)
~~~sql
SELECT * 
FROM Actor
ORDER BY salary ASC;
~~~

### d)
~~~sql
SELECT * 
FROM Actor
ORDER BY salary DESC
LIMIT 3; 
~~~

### e)
~~~sql
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
~~~

### EXERCICIO 6

### a) 
~~~sql
ALTER TABLE Films ADD playing_limit_date VARCHAR(255);
~~~

### b)
~~~sql
ALTER TABLE Films CHANGE rating rating FLOAT NOT NULL;
~~~

### c)
~~~sql
UPDATE Films
SET playing_limit_date = "2022-03-03"
WHERE id = "002";

UPDATE Films
SET playing_limit_date = "2021-04-05"
WHERE id = "001";
~~~

### d) A query retorna "0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0" ou seja, nenhuma coluna foi afetada pois não haviam dados correspondentes ao id 
~~~sql
DELETE FROM Films WHERE id = "003";

DELETE FROM Films WHERE id = "004";

UPDATE Films
SET rating = 10
WHERE id = "004";
~~~


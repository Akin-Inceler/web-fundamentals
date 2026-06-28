SELECT * FROM cars;

SELECT brand, model, color, year, price FROM cars 
WHERE color = 'red';

SELECT * FROM cars 
WHERE price < 1250;


SELECT * FROM cars 
WHERE year != 1999;


SELECT * FROM cars 
WHERE color != 'red';


SELECT * FROM cars 
WHERE color LIKE '%red%';


SELECT * FROM cars 
WHERE color NOT LIKE '%red%';


SELECT * FROM cars 
WHERE model LIKE 's_';


SELECT * FROM cars 
WHERE color NOT LIKE '%black%'
AND model LIKE 's_';
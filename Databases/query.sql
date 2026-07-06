SELECT * FROM cars;

SELECT brand, model, color, year, value FROM cars 
WHERE color = 'red';

SELECT * FROM cars 
WHERE value < 1250;


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


SELECT brand, model, color FROM cars 
WHERE color NOT IN ('red', 'blue')
AND brand NOT IN ('Toyota', 'Honda', 'volco');


SELECT * FROM cars 
WHERE ((brand = 'bmw' AND color = 'red') 
OR (brand IN ('Honda', 'volvo') AND year BETWEEN 2000 AND 2010));


SELECT brand, model, year FROM cars
 ORDER BY brand;
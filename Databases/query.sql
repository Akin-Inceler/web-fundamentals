SELECT * FROM cars;


SELECT brand, model, color, year, value FROM cars 
WHERE color = 'red';


SELECT * FROM cars 
WHERE value < 11250;


SELECT * FROM cars 
WHERE year != 2020;


SELECT * FROM cars 
WHERE color != 'red';


SELECT * FROM cars 
WHERE color LIKE '%red%';


SELECT * FROM cars 
WHERE color NOT LIKE '%red%';


SELECT * FROM cars 
WHERE model LIKE 'X_';


SELECT * FROM cars 
WHERE color NOT LIKE '%gray%'
AND model LIKE 'X_';


SELECT brand, model, color FROM cars 
WHERE color NOT IN ('black', 'red', 'blue')
AND brand NOT IN ('Toyota', 'Honda', 'volvo');


SELECT * FROM cars 
WHERE ((brand = 'bmw' AND color = 'red') 
OR (brand IN ('Honda', 'Volvo') AND year BETWEEN 2020 AND 2025))
AND SOLD IS NOT TRUE;


SELECT brand, model, year FROM cars
 ORDER BY brand;


SELECT brand, model, year FROM cars
ORDER BY brand DESC, year ASC;


SELECT brand, model, year, sold FROM cars
WHERE SOLD IS FALSE
ORDER BY brand DESC, year ASC;


SELECT brand, model, year, value FROM cars
 ORDER BY value DESC
 LIMIT 1;


SELECT brand, model, year, color, value FROM cars
WHERE color LIKE '%red%'
AND sold IS FALSE
ORDER BY value DESC
LIMIT 5;


SELECT COUNT(*) FROM cars
WHERE sold IS TRUE;


SELECT SUM(value) AS total_earnings FROM cars
WHERE sold IS TRUE;


SELECT MAX(value) AS most_expensive_car FROM cars
WHERE sold IS TRUE;


SELECT AVG(value) AS average_value_of_bmw_cars FROM cars
WHERE brand = 'BMW'; 



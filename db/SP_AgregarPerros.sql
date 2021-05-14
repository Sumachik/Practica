DELIMITER $$
CREATE PROCEDURE SP_AgregarPerros(
	IN _nombre VARCHAR(45),
    IN _collar VARCHAR(45),
    IN _dueño VARCHAR(45)
)
BEGIN

	DECLARE id INT;
    SET id =(SELECT count(*) FROM perros);
    
	INSERT INTO perros
    VALUES (id+1, _nombre, _collar, _dueño);
END
$$
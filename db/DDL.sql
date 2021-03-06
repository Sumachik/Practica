-- MySQL Script generated by MySQL Workbench
-- Thu May 13 21:38:49 2021
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema perros
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema perros
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `perros` DEFAULT CHARACTER SET utf8 ;
USE `perros` ;

-- -----------------------------------------------------
-- Table `mydb`.`Perros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `perros`.`Perros` (
  `idPerros` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `collar` VARCHAR(45) NULL,
  `dueño` VARCHAR(45) NULL,
  PRIMARY KEY (`idPerros`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

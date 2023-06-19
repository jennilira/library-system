CREATE DATABASE  IF NOT EXISTS `biblioteca1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `biblioteca1`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: biblioteca1
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adm_bib`
--

DROP TABLE IF EXISTS `adm_bib`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adm_bib` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_bib`
--

LOCK TABLES `adm_bib` WRITE;
/*!40000 ALTER TABLE `adm_bib` DISABLE KEYS */;
INSERT INTO `adm_bib` VALUES (10,'jenni@gmail.com','123'),(11,NULL,NULL),(12,'jenniffernascimento2005@gmail.com',NULL),(13,'jenniffernascimento2005@gmail.com',NULL),(14,'jenniffernascimento2005@gmail.com',NULL),(15,'jenniffernascimento2005@gmail.com',NULL),(16,'jenni@gmail.com','123'),(17,'jenniffernascimento2005@gmail.com',NULL),(18,'jenniffernascimento2005@gmail.com',NULL),(19,'jenniffernascimento2005@gmail.com',NULL),(20,'jenniffernascimento2005@gmail.com',NULL),(21,'jenniffernascimento2005@gmail.com',NULL),(22,'jenniffernascimento2005@gmail.com',NULL),(23,'jenniffernascimento2005@gmail.com',NULL),(24,'jenniffernascimento2005@gmail.com',NULL),(25,'jenni@gmail.com','123'),(26,'jenni@gmail.com','123'),(27,'jenni@gmail.com','123'),(28,'jenni@gmail.com','123'),(29,'adam@phpzag.com','123'),(30,'jenni@gmail.com','123'),(31,'jenniffernascimento2005@gmail.com',NULL),(32,'jenniffernascimento2005@gmail.com',NULL),(33,'jenniffernascimento2005@gmail.com',NULL),(34,'jenniffernascimento2005@gmail.com',NULL),(35,'jenniffernascimento2005@gmail.com',NULL),(36,'jenniffernascimento2005@gmail.com',NULL),(37,'jenniffernascimento2005@gmail.com',NULL),(38,'jenniffernascimento2005@gmail.com',NULL),(39,'jenniffernascimento2005@gmail.com',NULL),(40,'jenniffernascimento2005@gmail.com',NULL),(41,'jenni@gmail.com','123'),(42,'jenniffernascimento2005@gmail.com',NULL),(43,'adam@phpzag.com','123'),(44,'jenniffernascimento2005@gmail.com',NULL),(45,'jenniffernascimento2005@gmail.com',NULL),(46,'jenniffernascimento2005@gmail.com',NULL),(47,'jenni@gmail.com','123'),(48,'jenniffernascimento2005@gmail.com',NULL),(49,'jenniffernascimento2005@gmail.com',NULL),(50,'jenni@gmail.com','123'),(51,'adam@phpzag.com','123'),(52,'jenni@gmail.com','123'),(53,'jenniffernascimento2005@gmail.com','123'),(54,NULL,NULL),(55,NULL,NULL),(56,NULL,NULL),(57,'jenni@gmail.com','123'),(58,'jenni@gmail.com','123'),(59,'jenni8888@gmail.com','123'),(60,'adam@phpzag.com','123'),(61,'jenni@gmail.com','123'),(62,'jenni@gmail.com','123');
/*!40000 ALTER TABLE `adm_bib` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alugarlivro`
--

DROP TABLE IF EXISTS `alugarlivro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alugarlivro` (
  `idalugarlivro` int NOT NULL AUTO_INCREMENT,
  `data_alugou` date NOT NULL,
  `id_usuario` int NOT NULL,
  `id_colecao` int NOT NULL,
  `data_devolucao` date NOT NULL,
  PRIMARY KEY (`idalugarlivro`),
  KEY `id_usuario_idx` (`id_usuario`),
  KEY `id_colecao_idx` (`id_colecao`),
  CONSTRAINT `id_colecao` FOREIGN KEY (`id_colecao`) REFERENCES `livrocolecao` (`id_colecao`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alugarlivro`
--

LOCK TABLES `alugarlivro` WRITE;
/*!40000 ALTER TABLE `alugarlivro` DISABLE KEYS */;
/*!40000 ALTER TABLE `alugarlivro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(15) DEFAULT NULL,
  `cdd` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (14,'uuuuuuuuuuuu','765'),(21,'jennilira','222');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livro`
--

DROP TABLE IF EXISTS `livro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `ano_de_lancamento` date DEFAULT NULL,
  `editora` varchar(45) DEFAULT NULL,
  `id_categoria` int NOT NULL,
  `autor` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categoria_idx` (`id_categoria`),
  CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livro`
--

LOCK TABLES `livro` WRITE;
/*!40000 ALTER TABLE `livro` DISABLE KEYS */;
INSERT INTO `livro` VALUES (21,'jennilira','2023-06-08','sdfdsf',14,'efdsf'),(22,'jennilira','2023-06-02','bvbv555',14,'efdsf'),(24,'jennilira','2023-06-06','bvbv555',14,'vnmvbnvn'),(25,'Ismael Lira Nascimento','2023-06-14','sadsd',14,'dsffds');
/*!40000 ALTER TABLE `livro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livrocolecao`
--

DROP TABLE IF EXISTS `livrocolecao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livrocolecao` (
  `id_colecao` int NOT NULL AUTO_INCREMENT,
  `livro_id` int NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `qtde_colecao` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_colecao`),
  KEY `id_livro_idx` (`livro_id`),
  CONSTRAINT `id_livro` FOREIGN KEY (`livro_id`) REFERENCES `livro` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livrocolecao`
--

LOCK TABLES `livrocolecao` WRITE;
/*!40000 ALTER TABLE `livrocolecao` DISABLE KEYS */;
/*!40000 ALTER TABLE `livrocolecao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_jmf_curso`
--

DROP TABLE IF EXISTS `tb_jmf_curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_jmf_curso` (
  `curso_id` int NOT NULL AUTO_INCREMENT,
  `curso_nome` varchar(45) NOT NULL,
  PRIMARY KEY (`curso_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_jmf_curso`
--

LOCK TABLES `tb_jmf_curso` WRITE;
/*!40000 ALTER TABLE `tb_jmf_curso` DISABLE KEYS */;
INSERT INTO `tb_jmf_curso` VALUES (1,'contabilidade'),(2,'informatica');
/*!40000 ALTER TABLE `tb_jmf_curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_jmf_discente`
--

DROP TABLE IF EXISTS `tb_jmf_discente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_jmf_discente` (
  `discente_nome` varchar(10) DEFAULT NULL,
  `discente_matricula` varchar(45) DEFAULT NULL,
  `discente_idTurma` int DEFAULT NULL,
  KEY `id_turma_idx` (`discente_idTurma`),
  CONSTRAINT `id_turma` FOREIGN KEY (`discente_idTurma`) REFERENCES `tb_jmf_turma` (`turma_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_jmf_discente`
--

LOCK TABLES `tb_jmf_discente` WRITE;
/*!40000 ALTER TABLE `tb_jmf_discente` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_jmf_discente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_jmf_turma`
--

DROP TABLE IF EXISTS `tb_jmf_turma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_jmf_turma` (
  `turma_id` int NOT NULL AUTO_INCREMENT,
  `turma_serie` varchar(45) DEFAULT NULL,
  `turma_nome` varchar(45) NOT NULL,
  `turma_idCurso` int DEFAULT NULL,
  PRIMARY KEY (`turma_id`),
  CONSTRAINT `id_curso` FOREIGN KEY (`turma_id`) REFERENCES `tb_jmf_curso` (`curso_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_jmf_turma`
--

LOCK TABLES `tb_jmf_turma` WRITE;
/*!40000 ALTER TABLE `tb_jmf_turma` DISABLE KEYS */;
INSERT INTO `tb_jmf_turma` VALUES (1,'1ano','A',1),(2,'1ano','E',2);
/*!40000 ALTER TABLE `tb_jmf_turma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `fone` varchar(45) DEFAULT NULL,
  `data_nascimento` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'jenn','jenni@gmail.com','222','22-09-09'),(69,'JOSE JEROVANE DA COSTA NASCIMENTO','jenniffernascimento2005@gmail.com','85992872012','2023-05-17'),(70,'JOSE JEROVANE DA COSTA NASCIMENTO','jenniffernascimento2005@gmail.com','85992872012','2023-05-02'),(71,'JOSE JEROVANE DA COSTA NASCIMENTO','jenniffernascimento2005@gmail.com','85992872012','2023-05-10'),(72,'JOSE JEROVANE DA COSTA NASCIMENTO','jenniffernascimento2005@gmail.com','85992872012','2023-05-17'),(73,'carina','jenniffernascimento2005@gmail.com','85992872012','2023-05-08'),(74,'J','jenniffernascimento2005@gmail.com','85992872012','2023-05-17'),(75,'J','jenniffernascimento2005@gmail.com','85992872012','2023-05-17'),(76,'JOSE JEROVANE DA COSTA NASCIMENTO','jenniffernascimento2005@gmail.com','85992872012','2023-05-17');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-19  5:36:59

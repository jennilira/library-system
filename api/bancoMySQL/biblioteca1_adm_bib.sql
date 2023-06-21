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
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adm_bib`
--

LOCK TABLES `adm_bib` WRITE;
/*!40000 ALTER TABLE `adm_bib` DISABLE KEYS */;
INSERT INTO `adm_bib` VALUES (10,'jenni@gmail.com','123'),(11,NULL,NULL),(12,'jenniffernascimento2005@gmail.com',NULL),(13,'jenniffernascimento2005@gmail.com',NULL),(14,'jenniffernascimento2005@gmail.com',NULL),(15,'jenniffernascimento2005@gmail.com',NULL),(16,'jenni@gmail.com','123'),(17,'jenniffernascimento2005@gmail.com',NULL),(18,'jenniffernascimento2005@gmail.com',NULL),(19,'jenniffernascimento2005@gmail.com',NULL),(20,'jenniffernascimento2005@gmail.com',NULL),(21,'jenniffernascimento2005@gmail.com',NULL),(22,'jenniffernascimento2005@gmail.com',NULL),(23,'jenniffernascimento2005@gmail.com',NULL),(24,'jenniffernascimento2005@gmail.com',NULL),(25,'jenni@gmail.com','123'),(26,'jenni@gmail.com','123'),(27,'jenni@gmail.com','123'),(28,'jenni@gmail.com','123'),(29,'adam@phpzag.com','123'),(30,'jenni@gmail.com','123'),(31,'jenniffernascimento2005@gmail.com',NULL),(32,'jenniffernascimento2005@gmail.com',NULL),(33,'jenniffernascimento2005@gmail.com',NULL),(34,'jenniffernascimento2005@gmail.com',NULL),(35,'jenniffernascimento2005@gmail.com',NULL),(36,'jenniffernascimento2005@gmail.com',NULL),(37,'jenniffernascimento2005@gmail.com',NULL),(38,'jenniffernascimento2005@gmail.com',NULL),(39,'jenniffernascimento2005@gmail.com',NULL),(40,'jenniffernascimento2005@gmail.com',NULL),(41,'jenni@gmail.com','123'),(42,'jenniffernascimento2005@gmail.com',NULL),(43,'adam@phpzag.com','123'),(44,'jenniffernascimento2005@gmail.com',NULL),(45,'jenniffernascimento2005@gmail.com',NULL),(46,'jenniffernascimento2005@gmail.com',NULL),(47,'jenni@gmail.com','123'),(48,'jenniffernascimento2005@gmail.com',NULL),(49,'jenniffernascimento2005@gmail.com',NULL),(50,'jenni@gmail.com','123'),(51,'adam@phpzag.com','123'),(52,'jenni@gmail.com','123'),(53,'jenniffernascimento2005@gmail.com','123'),(54,NULL,NULL),(55,NULL,NULL),(56,NULL,NULL),(57,'jenni@gmail.com','123'),(58,'jenni@gmail.com','123'),(59,'jenni8888@gmail.com','123'),(60,'adam@phpzag.com','123'),(61,'jenni@gmail.com','123'),(62,'jenni@gmail.com','123'),(63,'jenni@gmail.com','123');
/*!40000 ALTER TABLE `adm_bib` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-21  6:24:38

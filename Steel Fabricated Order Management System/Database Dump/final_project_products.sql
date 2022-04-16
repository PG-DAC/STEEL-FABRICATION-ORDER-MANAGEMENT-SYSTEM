-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: final_project
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `p_id` int NOT NULL,
  `cat_id` int DEFAULT NULL,
  `created_timestamp` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `qty` int NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (4,0,NULL,'l shaped stainless steel imported product from us','Sofa set',120000,0,'7e35381994fe49e2a3290c223db5e0cc'),(6,5,NULL,'steel fabricated powder coated bed','bed',30000,1,'297ffe2762c94916b22acda6ded4e3c2'),(8,5,NULL,'pure metal fabricated','bed',24000,2,'0011a2ec2409458c97fb349f285e3d8f'),(11,10,NULL,'pure metal fabricated','chairs and table',20000,2,'29f4bf744050451e986e3ef808ca77a2'),(19,9,NULL,'imported from uk ','gold plated chair',22000,11,'0290e4f90a384f988e74777a7c30b5c3'),(20,9,NULL,'smooth finished product','chair cum sofa',80000,2,'6f4571fc89c94d46b2b827fe55e9a7a0'),(21,9,NULL,'stainless steel, hardened product , smooth finished','relax chair',10000,3,'ca5c2d53765a480dbc67b6485d94206a'),(22,9,NULL,'this is in one product you can get all set of table and chairs','chair and table set ',300000,1,'ab8af8a27f16424aacc51d448bff4ce9'),(23,10,NULL,'this is austenite hardened pure metal chair imported product','austenite hardened pure metal chair',20000,3,'79e514d1b004437dbd234df601555eb3');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16 15:38:41

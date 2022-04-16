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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `o_id` int NOT NULL,
  `c_id` int DEFAULT NULL,
  `d_date` date DEFAULT NULL,
  `o_date` date DEFAULT NULL,
  `paymentmode` varchar(255) DEFAULT NULL,
  `p_qty` int DEFAULT NULL,
  `staff_id` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `p_id` int DEFAULT NULL,
  PRIMARY KEY (`o_id`),
  KEY `FKjvhi15wga0mdm89xm7kgcjbhq` (`p_id`),
  CONSTRAINT `FKjvhi15wga0mdm89xm7kgcjbhq` FOREIGN KEY (`p_id`) REFERENCES `products` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (0,1,'2022-04-11','2022-04-11','Cash on Dilevery',1,0,'yet to be delivered',4),(14,1,'2022-04-16','2022-04-16','Cash on Dilevery',1,4,'packed',11),(25,4,'2022-04-18','2022-04-18','Cash on Dilevery',1,8,'yet to be delivered',23),(26,3,'2022-04-18','2022-04-18','Cash on Dilevery',1,9,'yet to be delivered',22),(31,2,'2022-04-20','2022-04-20','Cash on Dilevery',1,8,'yet to be delivered',19);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16 15:38:39

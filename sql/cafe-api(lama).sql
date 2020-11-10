-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2020 at 06:14 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cafe-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `name_category` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `name_category`) VALUES
(1, 'Drink'),
(2, 'Food');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id_history` int(11) NOT NULL,
  `invoice` varchar(255) NOT NULL,
  `product_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id_history`, `invoice`, `product_id`, `qty`, `total_price`) VALUES
(4, '111', 1, 1, 10000),
(5, '111', 2, 1, 28000),
(32, '2147483647', 1, 3, 30000),
(33, '2147483647', 11, 2, 30000),
(34, '2147483647', 2, 1, 28000),
(35, '2147483647', 16, 1, 5000),
(36, '2147483647', 1, 2, 20000),
(37, '2147483647', 15, 1, 60000),
(38, '1597851880867', 1, 2, 20000),
(39, '1597851880867', 11, 2, 30000),
(40, '1597852114374', 2, 1, 28000);

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id_invoice` int(11) NOT NULL,
  `no_invoice` varchar(255) NOT NULL,
  `cashir` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id_invoice`, `no_invoice`, `cashir`, `amount`, `create_at`) VALUES
(1, '111', 1, 38000, '2020-08-02 05:36:36'),
(18, '2147483647', 1, 60000, '2020-08-09 07:46:59'),
(19, '2147483647', 1, 33000, '2020-08-10 06:57:49'),
(20, '2147483647', 1, 80000, '2020-08-19 15:39:27'),
(21, '1597851880867', 1, 50000, '2020-08-19 15:44:56'),
(22, '1597852114374', 1, 28000, '2020-08-19 15:48:38');

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id-level` int(11) NOT NULL,
  `level` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`id-level`, `level`) VALUES
(1, 'cashier'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id_product` int(11) NOT NULL,
  `name_product` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `price_product` int(11) NOT NULL,
  `img_product` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `name_product`, `category_id`, `price_product`, `img_product`) VALUES
(1, 'Espresso', 1, 10000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/jeremy-ricketts-6ZnhM-xBpos-unsplash.png'),
(2, 'Choco Rhum', 2, 28000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/chocorum.png'),
(3, 'Wiener Schnitzel', 2, 69000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/wiener.png'),
(11, 'Cofee Latte', 1, 15000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/bear.png'),
(14, 'Red Velvet Latte', 1, 33000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/redvelvet.png'),
(15, 'Salmon Truffle Teriyaki', 2, 60000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/salmon.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `username`, `password`, `level_id`) VALUES
(5, 'admin', '$2b$10$L5Jwy5VLReOewYa4wU85sOQTgU6zCCehWoItTnzY7lscB5gtzKt.a', 2),
(12, 'yusup', '$2b$10$C.mIsfVq5NRrNww8.evZwusbO6GDT7zx8Lc7JpbfTBCyZrYeqThSa', 1),
(13, 'empik', '$2b$10$JYxyYvVOXYIik2wdWVGlYumGFTzv4QcjHXBe/WV7CPidAXMf/MIqO', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id_history`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id_invoice`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id-level`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id_history` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id_invoice` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id-level` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

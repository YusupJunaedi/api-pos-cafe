-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2020 at 10:07 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

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
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id_product`, `name_product`, `category_id`, `price_product`, `image`) VALUES
(1, 'Espresso', 1, 10000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/jeremy-ricketts-6ZnhM-xBpos-unsplash.png'),
(2, 'Choco Rhum', 2, 28000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/chocorum.png'),
(3, 'Wiener Schnitzel', 2, 69000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/wiener.png'),
(11, 'Cofee Latte', 1, 15000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/bear.png'),
(14, 'Red Velvet Latte', 1, 33000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/redvelvet.png'),
(15, 'Salmon Truffle Teriyaki', 2, 60000, 'https://pos-cafe-yusupjunaedi.netlify.app/assets/img/salmon.png'),
(39, 'Jus Alpukat', 1, 15000, 'https://cdn.idntimes.com/content-images/post/20200513/80804982-1633679013439729-4856995162210626944-n-e76c8100d5dd1d2e835cbc2edf086597.jpg'),
(40, 'Milkshake', 1, 19000, 'https://images-gmi-pmc.edge-generalmills.com/2a612714-ee3e-4198-89fd-3f80215c0ef6.jpg'),
(41, 'spaghetti', 2, 45000, 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg'),
(42, 'Mie Ayam', 2, 8000, 'https://www.resepistimewa.com/wp-content/uploads/mie-ayam.jpg'),
(43, 'Mie Goreng', 2, 12000, 'https://selerasa.com/wp-content/uploads/2015/09/images_mancanegara_Bakmi_bakmi-goreng3.jpg'),
(45, 'Ramen', 0, 18000, 'https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg'),
(47, 'Jus Mangga', 1, 10000, 'https://miro.medium.com/max/1116/1*HC1xu3AP9c7_w8BomyPK-A.jpeg'),
(48, 'Cheese Cake', 2, 27000, 'https://www.onceuponachef.com/images/2017/12/NY-Cheesecake-1200x906.jpg'),
(49, 'Lontong Sayur', 2, 15000, 'https://www.tagar.id/Asset/uploads2019/1587791828773-lontong-sayur.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `email`, `username`, `password`, `level_id`, `image`) VALUES
(5, 'admin@gmail.com', 'Yusup Junaedi', '$2b$10$L5Jwy5VLReOewYa4wU85sOQTgU6zCCehWoItTnzY7lscB5gtzKt.a', 2, 'http://54.166.172.106:8000/images/1600578453445-image.jpg'),
(12, 'yusup@gmail.com', 'yusup Junaedi Edit', '$2b$10$C.mIsfVq5NRrNww8.evZwusbO6GDT7zx8Lc7JpbfTBCyZrYeqThSa', 1, 'http://54.166.172.106:8000/images/1600660462706-image.jpg'),
(23, 'nendy@gmail.com', 'nendy', '$2b$10$msRqxkdxxNMe0M3lO41u5uFni01fzpfLbrIiH04HE0w8cwuKPTLjO', 3, ''),
(24, 'faiz@gmail', 'Faiz Sulistiawan', '$2b$10$GK.JFrccPEpmXpO3Kr6AU.xzsqnbaMa3j7AaNu8owqynZa2/rvd02', 3, ''),
(25, 'jamal@gmail.com', 'Jamal', '$2b$10$RPs5wm8BkCZKTL14L9xe0.pR9/OGd/FPlbmIwEfkpqqAwdr/R.co6', 3, ''),
(27, 'empik@gmail.com', 'empik', '$2b$10$IubkXGgxD0AuGlsIIMX/Yu31wbtuKc1F.zEwtSVXpGHchwaUWW656', 3, ''),
(28, 'rini@gmail.com', 'Rini', '$2b$10$i9RkUSF0df991STpEq3EpOmfQns7/qabCJo3UbLViIOobR8hCuKmO', 3, 'http://54.166.172.106:8000/images/1604907773719-image.PNG');

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
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

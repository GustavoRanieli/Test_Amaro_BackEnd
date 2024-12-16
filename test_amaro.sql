-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16/12/2024 às 09:39
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `test_amaro`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `fk_function_users`
--

CREATE TABLE `fk_function_users` (
  `_id` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `function` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `fk_function_users`
--

INSERT INTO `fk_function_users` (`_id`, `value`, `function`) VALUES
(1, 1, 'Admin'),
(2, 2, 'User');

-- --------------------------------------------------------

--
-- Estrutura para tabela `fk_produtos_categoria`
--

CREATE TABLE `fk_produtos_categoria` (
  `_id` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `fk_produtos_categoria`
--

INSERT INTO `fk_produtos_categoria` (`_id`, `value`, `categoria`) VALUES
(1, 1, 'Comum'),
(2, 2, 'Raro');

-- --------------------------------------------------------

--
-- Estrutura para tabela `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `notice` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `url_img` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `_id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) CHARACTER SET utf16 COLLATE utf16_general_ci NOT NULL,
  `password` varchar(250) NOT NULL,
  `fk_function` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `fk_function_users`
--
ALTER TABLE `fk_function_users`
  ADD PRIMARY KEY (`_id`);

--
-- Índices de tabela `fk_produtos_categoria`
--
ALTER TABLE `fk_produtos_categoria`
  ADD PRIMARY KEY (`_id`);

--
-- Índices de tabela `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_PRODUTO_CATEGORIA` (`category`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`_id`),
  ADD KEY `FK_USER_FUNCTION` (`fk_function`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `fk_function_users`
--
ALTER TABLE `fk_function_users`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `fk_produtos_categoria`
--
ALTER TABLE `fk_produtos_categoria`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_PRODUTO_CATEGORIA` FOREIGN KEY (`category`) REFERENCES `fk_produtos_categoria` (`_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_USER_FUNCTION` FOREIGN KEY (`fk_function`) REFERENCES `fk_function_users` (`_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

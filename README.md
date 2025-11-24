# dacnenawia-tienda
## Preparar Backend
1. Alojar la api de PHP que se encuentra en el directorio BACKEND en un webserver
2. Cargar el archivo sql en phpmyadmin o similar

## Instalar proyecto
```
npm install
```

## Iniciar proyecto
```
npm run dev
```


# Archivo SQL
En caso de necesitar los productos cargados y no tener el archivo .sql:


```
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-11-2025 a las 21:28:06
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dacnenawia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `images` varchar(200) NOT NULL,
  `stock` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `discount`, `description`, `images`, `stock`) VALUES
(1, 'Silla SANDSBERG', 'Sillas', 17000, '', 'Una cómoda y resistente silla con estructura de metal, un asiento blando y un respaldo con forma curvada. Se caracteriza por un diseño sencillo y atemporal con un toque moderno que ocupa poco espacio a un precio increíble.', 'https://www.ikea.com/es/es/images/products/sandsberg-silla-marron-rojizo-remmarn-marron-rojizo__1479094_pe999920_s5.jpg', ''),
(2, 'Mesa LISABO', 'Mesas', 25000, '', 'Combina el aspecto cálido y natural de la madera con un diseño bonito y sencillo. Esta innovadora estructura es muy resistente y solo tendrás que encajar las piezas para montarla y usarla.', 'https://www.ikea.com/es/es/images/products/lisabo-mesa-chapa-fresno__0737105_pe740883_s5.jpg', ''),
(3, 'Cama SLATTUM', 'Camas', 99000, '', 'La estructura de cama SLATTUM cuenta con un suave tapizado y un cabecero acolchado que le confiere un estilo elegante a la par que sencillo.', 'https://www.ikea.com/es/es/images/products/slattum-estructura-cama-tapizada-vissle-gris-oscuro__1259335_pe926650_s5.jpg', ''),
(4, 'Armario VILHATTEN', 'Armarios', 160000, '', 'Ya no tienes que elegir entre doblar o colgar la ropa. En el armario compacto VILHATTEN puedes tener ambas cosas. Además, ocupa poco espacio, por lo que es perfecto para el recibidor o el dormitorio.', 'https://www.ikea.com/es/es/images/products/vilhatten-armario-2-puertas-2-cajones-efecto-roble__1163155_pe890133_s5.jpg', ''),
(5, 'Sillón DYVLINGE', 'Sillas', 190000, '', 'El sillón giratorio MILA apareció en nuestro catálogo de 1967 como el \"sillón antiestrés\". Lo diseñó Gillis Lundgren y fue todo un éxito que ahora hemos recuperado para la colección Nytillverkad con el nombre de DYVLINGE.', 'https://www.ikea.com/es/es/images/products/dyvlinge-silla-giratoria-kelinge-naranja__1322501_pe942192_s5.jpg', ''),
(6, 'Estantería HEMNES', 'Estanterías', 190000, '', 'Esta librería, hecha de madera maciza, es perfecta para guardar tus libros y darle un toque cálido a tu hogar. Si te gusta el estilo, puedes combinarla con otros muebles de la serie HEMNES.', 'https://www.ikea.com/es/es/images/products/hemnes-libreria-tinte-blanco-marron-claro__0980092_pe814822_s5.jpg', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-sca
    le=1.0">
    <title>Mercado Liebre</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./public/css/styles-home.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
rel="stylesheet" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header-main">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-5 col-md-2">
                        <img src="./public/img/logo-mercado-liebre.svg" class="logo-principal">
                    </a>
                </div>
                <div class="col-7 col-md-6">
                    <form action="#" method="GET" class="search-form">
                        <input type="text" name="keywords" placeholder="Buscar productos, marcas y más" class="search-form_input">
                        <button type="submit" class="search-form_button"><i class="fas fa-search"></i></button>
                    </form>
                </div>
    
                <div class="col-12 col-md-4">
                    <a href="#" class="main-header_credit-link">
                        <i class="fas fa-hand-holding-usd"></i>
                        Comprá en cuotas y sin tarjeta de crédito
                    </a>
                </div>
            </div>
            <!--Botón hamburguesa  -->
            <div class="burger-menu">
                <i class="fas fa-bars"></i>
                </div>                
            <!-- Fin botón hamburguesa  -->
            <nav class="main-navbar">
                <ul class="left-navbar">
                    <li><a href="#">Todos los productos</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Tiendas Oficiales</a></li>
                    <li><a href="#">Vender</a></li>
                    <li><a href="#">Ayuda</a></li>
                </ul>
    
                <ul class="right-navbar">
                    <li><a href="#">Creá tu cuenta <i class="far fa-address-card"></i></a></li>
                    <li><a href="#">Ingresá <i class="fas fa-sign-in-alt"></i></a></li>
                    <li><a href="#">Mis compras <i class="fas fa-shopping-basket"></i></a></li>
                </ul>
            </nav>
        </div>
    </header>
    <!--  Fin de Header -->
       <!-- Banner -->
		<div class="banner">
            <img class="img-banner" src="./public/img/img-home-banner.jpg"> 
        </div>
		<!-- /fin del banner -->
       <!-- ultima visita -->
		<div class="container products-wrapper">
			<div class="row">
				<div class="col-12">
					<h2 class="products-title">Basado en tu última visita</h2>
				</div>
				
				
				<div class="col-12 col-sm-6 col-lg-3">
					<section class="product-box">
						<a href="https://mercadolibre.com">
							<figure class="product-box_image">
								<img class="productoimg" src="./public/img/img-cafetera-moulinex.jpg" alt="imagen de producto">
							</figure>
							<article class="product-box_data">
								<h2>$6.770</h2>
								<span>40 % OFF</span>
								<p>Cafetera Moulinex</p>
								<i class="fas fa-truck"></i>
							</article>
						</a>
					</section>
				</div>
				
				<div class="col-12 col-sm-6 col-lg-3">
					<section class="product-box">
						<a href="#">
							<figure class="product-box_image">
								<img src="./public/img/img-macbook-pro-2019.jpg" alt="imagen de producto">
							</figure>
							<article class="product-box_data">
								<h2>$230.000</h2>
								<span>20 % OFF</span>
								<p>MacBook Pro 2019</p>
								<i class="fas fa-truck"></i>
							</article>
						</a>
					</section>
				</div>				
			
            <div class="col-12 col-sm-6 col-lg-3">
                <section class="product-box">
                    <a href="#">
                        <figure class="product-box_image">
                            <img src="./public/img/img-tv-samsung-smart.jpg" alt="imagen de producto">
                        </figure>
                        <article class="product-box_data">
                            <h2>$23.200</h2>
                            <span>5 % OFF</span>
                            <p>Smart TV Samsung 43¨</p>
                            <i class="fas fa-truck"></i>
                        </article>
                    </a>
                </section>
            </div>				
        </div>
            </div>
		</div>
		<!-- /ultima visita -->

		<!-- Ofertas -->
		<div class="container products-wrapper">
			<div class="row">
				<div class="col-12">
					<h2 class="products-title">Ofertas</h2>
				</div>
				
				
				<div class="col-12 col-sm-6 col-lg-3">
					<section class="product-box">
						<a href="#">
							<figure class="product-box_image">
								<img src="./public/img/img-cafetera-moulinex.jpg" alt="imagen de producto">
							</figure>
							<article class="product-box_data">
								<h2>$6.770</h2>
								<span>40 % OFF</span>
								<p>Cafetera Moulinex</p>
								<i class="fas fa-truck"></i>
							</article>
						</a>
					</section>
				</div>
				
				<div class="col-12 col-sm-6 col-lg-3">
					<section class="product-box">
						<a href="#">
							<figure class="product-box_image">
								<img src="./public/img/img-macbook-pro-2019.jpg" alt="imagen de producto">
							</figure>
							<article class="product-box_data">
								<h2>$230.000</h2>
								<span>20 % OFF</span>
								<p>MacBook Pro 2019</p>
								<i class="fas fa-truck"></i>
							</article>
						</a>
					</section>
				</div>
				<div class="col-12 col-sm-6 col-lg-3">
					<section class="product-box">
						<a href="#">
							<figure class="product-box_image">
								<img src="./public/img/img-samsung-galaxy-s10.jpg" alt="imagen de producto">
							</figure>
							<article class="product-box_data">
								<h2>$70.500</h2>
								<span>10 % OFF</span>
								<p>Samsung Galaxy S10</p>
								<i class="fas fa-truck"></i>
							</article>
						</a>
					</section>
				</div>
                <div class="col-12 col-sm-6 col-lg-3">
					<section class="product-box">
						<a href="#">
							<figure class="product-box_image">
								<img src="./public/img/img-tv-samsung-smart.jpg" alt="imagen de producto">
							</figure>
							<article class="product-box_data">
								<h2>$23.200</h2>
								<span>5 % OFF</span>
								<p>SmartTv Samsung 43"</p>
								<i class="fas fa-truck"></i>
							</article>
						</a>
					</section>
				</div>
			</div>
		</div>
		<!-- /Ofertas -->

           
<!-- footer -->
    <footer class="main-footer">
<div class="container-footer">
    <div class="row">
        <div class="col-12 col-lg-4">
            <article class="footer-article">
                <i class="fas fa-credit-card"></i>
                <h2>Pagá con tarjeta o en efectivo</h2>
                <p>Con Mercado Liebre Cash, tenés cuotas sin interés con tarjeta o efectivo en puntos de pago. ¡Y siempre
                    es seguro!</p>
            </article>
        </div>
        <div class="col-12 col-lg-4">
            <article class="footer-article">
                <i class="fas fa-gift"></i>
                <h2>Envío gratis desde $ 1.999</h2>
                <p>Solo por estar registrado en Mercado Liebre tenés envíos gratis en miles de productos. Es un beneficio
                    de Mercado Puntos.</p>
            </article>
        </div>
        <div class="col-12 col-lg-4">
            <article class="footer-article">
                <i class="fas fa-user-shield"></i>
                <h2>Seguridad, de principio a fin</h2>
                <p>¿No te gusta? ¡Devolvelo! En Mercado Liebre, no hay nada que no puedas hacer, porque estás siempre
                    protegido.</p>
            </article>
        </div>
    </div>
</div>
<div class="copy-footer">
<div class="container-copy">
    <p>Copyright © 1999-2019 MercadoLiebre S.R.L.</p>
</div>
</div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" ></script>  
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-sca
    le=1.0">
    <title>Mercado Liebre</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./public/css/registro.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <!--Include Header-->
    <%- include('../partials/header') %>

    <main>
        <div class="color_especial header">
            <!--falta indicador pagina-->
            <h2>Iniciar sesión</h2> 
            <h3>¡Bienvenido! Completa los datos</h3> 
        </div>
        
        <!-- form + captcha + botón + parrafo --> 
        <form action="login" method="POST" id="formulario1" class="container1"> 
            <div >   
                <div>
                    <!--Grupo Email-->
                    <div class="celda" id="campos_email">             
                        <label for="email">Email<span class="asterisco">*</span></label>
                        <div class="input-group flex-nowrap">
                        </div>
                        <input type="email" name="email" class="form-control input" placeholder="Ejemplo@mail.com" id="email" >
                        <span></span>
                    
                    </div>

                    <!--Grupo Contraseña-->
                    <div class="celda" id="campos_contraseña">       <!-- FALTA AGREGAR OPCION VER CONTRASEÑA -->
                        <label for="contraseña">Contraseña<span class="asterisco">*</span></label>
                        <div>
                            <input type="password" id="contraseña" class="form-control input" name="password" placeholder="Ej: Contraseña123" >
                            <span></span>
                        </div>
                    </div>
                    <div class="celda" id="remember">
						<label for="remember_user">Recordarme:</label>
						<input type="checkbox" id="remember_user" name="remember_user" >

					</div>
                </div>
            
                <div>
                    <button type="submit" value="login" class="boton color_especial" id="enviar">Iniciar sesión</button>
                    <p>¿No tenes una cuenta? <a href="/user/registro" class="color_especial redireccion">Registrate</span></p> 
                    <p id="rc"><a href="/user/rec_contra" class="color_especial redireccion">¿Olvidaste tu contraseña?</a></p>
                </div>
            </div>
        </form>
    </main>
    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>  
</body>
</html>
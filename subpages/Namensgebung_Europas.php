<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Namensgebung Europas</title>

  <!-- Bootstrap core CSS -->
  <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="../css/blog-post.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet">
</head>

<body>
<style lang="css">
    .navbar{
        background-color: #00309a !important;
    }    
</style>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="../index.html" style="font-family: 'Viga', sans-serif;">EU-Informationsseite</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
						<a class="nav-link" href="../index.html">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="$('#fh5co-wahl').goTo();return false;">Punkt 1</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="$('#fh5co-info').goTo();return false;">Punkt 2</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#"  onclick="$('#fh5co-partei').goTo();return false;">Punkt 3</a>
					</li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Content -->
  <div class="container">

    <div class="row">

      <!-- Post Content Column -->
        <div id = "content" class="col-lg-8">
            <?php
                include 'Namensgebung_Europas/Content.php';
            ?>
      </div>

      <!-- Sidebar Widgets Column -->
        <div class="col-md-4">

        <!-- Search Widget -->
        <div id="sidecontent" class="card my-4">
            <?php
                include 'Namensgebung_Europas/SideContent.php';
            ?>
      </div>
    </div>
  </div>
    </div>

  <!-- Footer -->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
    </div>
    <!-- /.container -->
  </footer>
    


  <!-- Bootstrap core JavaScript -->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>

</html>

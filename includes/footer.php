<hr>

<footer>
  <p class="text-center">&copy; <?php echo date("Y"); ?></p>
</footer>
<!-- /. -->
<!-- Bootstrap core JavaScript
    ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="/assets/js/ie10-viewport-bug-workaround.js"></script>
    <!-- Nav toggle animation script -->
    <script>
    $(document).ready(function() {
      var nav = 1;
      $(".cover").click(function() {
        $('.slide').slideToggle();
        if(nav % 2 === 0) {
        $(".line").removeClass('animate');
        $(".line").toggleClass('reverse');
        } else {
        $(".line").removeClass('reverse');
        $('.line').toggleClass('animate');
        }
        nav = nav + 1;
      });
    });
    </script>
</body>
</html>
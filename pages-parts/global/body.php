
<!-- Тело страницы -->
<body>
    <!-- Обёртка страницы _________________________________ -->
    <div class="wrapper">
        <?php
            require 'pages-parts/global/header.php';
            require 'pages-parts/'.$page.'/main.php';
            require 'pages-parts/global/popup.php';
            require 'pages-parts/global/footer.php';
            require 'pages-parts/global/burger-menu.php';
        ?>
    </div>
    <?php
        require 'pages-parts/global/script.php';
        require 'pages-parts/'.$page.'/script.php';
    ?>
</body>
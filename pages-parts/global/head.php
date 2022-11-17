
<!-- Голова сайта -->
<head>
    <!-- Кодировка страницы -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Описание страницы -->
    <meta name="description" content="<?=$descrip;?>">
    <!-- Ключевые слова и словосочетания страницы -->
    <meta name="keywords" content="<?=$key_words;?>">
    <!-- Автор -->
    <meta name="author" content="Platonova Sofya">
    <!-- Владелец авторских прав -->
    <meta name="copyright" content="Borytko Team">
    <!-- Адрес офиса владельца -->
    <meta name="address" content="Москва, Ленинский проспект, 53с5">
    <!-- Управление доступом поисковых роботов к странице -->
    <meta name="robots" content="noindex">
    <!-- Заголовок страницы -->
    <title><?=$title;?></title>
    <?php
        require 'pages-parts/global/sources.php';
        require 'pages-parts/'.$page.'/sources.php';
    ?>
    <!-- Адаптивность -->
    <link rel="stylesheet" href="css/adaptability.css">
</head>
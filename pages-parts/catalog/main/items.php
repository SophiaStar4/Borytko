
            <!-- Товары _________________________________ -->
            <section class="items">
                <!-- Ограничивающий контейнер _________________________________ -->
                <div class="_container">
                    <!-- Контент секции товаров _________________________________ -->
                    <div class="items_inner">
                        <?php
                            for ($i = 0; $i < 9; $i++) {
                                require 'pages-parts/global/item-card.php';
                            }
                        ?>
                    </div>
                </div>
            </section>
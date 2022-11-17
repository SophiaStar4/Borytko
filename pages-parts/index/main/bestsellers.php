
            <!-- Бестселлеры _________________________________ -->
            <section class="bestsellers">
                <!-- Декор секции бестселлеров _________________________________ -->
                <div class="decor">
                    <svg width="1440" height="141" viewBox="0 0 1440 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1440" height="9" fill="#3DBAB7"/>
                        <rect y="12" width="1350" height="9" fill="#3DBAB7"/>
                        <rect y="24" width="1057" height="9" fill="#3DBAB7"/>
                        <rect y="36" width="877" height="9" fill="#3DBAB7"/>
                        <rect y="48" width="943" height="9" fill="#3DBAB7"/>
                        <rect y="60" width="608" height="9" fill="#3DBAB7"/>
                        <rect y="72" width="354" height="9" fill="#3DBAB7"/>
                        <rect y="84" width="641" height="9" fill="#3DBAB7"/>
                        <rect y="96" width="249" height="9" fill="#3DBAB7"/>
                        <rect y="108" width="176" height="9" fill="#3DBAB7"/>
                        <rect y="120" width="183" height="9" fill="#3DBAB7"/>
                        <rect y="132" width="135" height="9" fill="#3DBAB7"/>
                    </svg>
                </div>
                <!-- Ограничивающий контейнер _________________________________ -->
                <div class="_container">
                    <!-- Контент секции бестселлеров _________________________________ -->
                    <div class="bestsellers_inner">
                        <!-- Заголовок секции _________________________________ -->
                        <h2>Хиты продаж</h2>
                        <!-- Контейнер товаров _________________________________ -->
                        <div class="items_container">
                            <?php 
                                for ($i = 0; $i < 4; $i++) {
                                    require 'pages-parts/global/item-card.php';
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </section>
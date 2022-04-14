<!-- TOP BAR -->
<div class="topbar">

    <div class = "row full-menu">

  <div id="scrolling-down">
    <img src="/dist/assets/scroll.svg" />
  </div>



        <div class = "col-sm-10 col-sm-offset-1">
            <div class = "row">
                <i id="close-menu-btn" class="btn-close-full-menu"></i>
                <?php
                    foreach ($pages as $key => $value) {
                        echo "<div class = 'col-sm-6 col-md-3'>
                    <h3>" . $value . "</h3>
                    <ul>";

                        foreach ($subpages[$key] as $subkey => $subvalue) {

                            echo "<li><i class='arrow right'></i><a href='/" . $language . '/info/' . $key . '/' . $subkey . "'>" . $subvalue . "</a></li>";

                        }
                        echo "</ul>
                </div>";
                    }
                ?>
            </div>
            <br>

            <div class = "row">
            <h3>Lista de ciudades/regiones francesas</h3>
            </div>

            <div class = "row col-order-4">

                <?php
                    $len = sizeof($frenchcities);
                    $numpercol = (int) ($len / 4) +1 ;


                    for($i = 0; $i < 4; $i++){
                        echo "<div class = 'col-sm-6 col-md-3'><section>";
                            echo "<ul class=\"cityList\">";
                            for($j = 0; $j < $numpercol; $j++){
                                $theCity = !empty(array_values($frenchcities)[$numpercol*$i+$j]) ? array_values($frenchcities)[$numpercol*$i+$j] : '';
                                $frenchcitiesSlugs = array_keys($frenchcities);
                                if(!empty($theCity))
                                    echo "<li><i class='arrow right'></i><a href='/" . $language . '/geoviz/' . $frenchcitiesSlugs[$numpercol*$i+$j] . "'>" . array_values($frenchcities)[$numpercol*$i+$j] . "</a></li>  ";
                            }
                            echo "</ul><br>";
                        echo "</section></div>";
                    }
                ?>
            </div>

            <div class = "row">
                <h3>Lista de ciudades/regiones canadienses</h3>
            </div>

            <div class = "row col-order-3">

                <?php
                    $len = sizeof($cancities);
                    $numpercol = (int) ($len / 4) +1 ;


                    for($i = 0; $i < 4; $i++){
                        echo "<div class = 'col-sm-6 col-md-3'><section>";
                            echo "<ul class=\"cityList\">";
                            for($j = 0; $j < $numpercol; $j++){
                                $theCity = !empty(array_values($cancities)[$numpercol*$i+$j]) ? array_values($cancities)[$numpercol*$i+$j] : '';
                                $cancitiesSlugs = array_keys($cancities);
                                if(!empty($theCity))
                                    echo "<li><i class='arrow right'></i><a href='/" . $language . '/geoviz/' . $cancitiesSlugs[$numpercol*$i+$j] . "'>" . array_values($cancities)[$numpercol*$i+$j] . "</a></li>  ";
                            }
                            echo "</ul><br>";
                        echo "</section></div>";
                    }
                ?>
            </div>

            <div class = "row">
                <h3>Lista de ciudades/regiones de América Latina</h3>
            </div>

            <div class = "row col-order-3">

                <?php
                    $len = sizeof($ascities);
                    $numpercol = (int) ($len / 4) +1 ;


                    for($i = 0; $i < 4; $i++){
                        echo "<div class = 'col-sm-6 col-md-3'><section>";
                            echo "<ul class=\"cityList\">";
                            for($j = 0; $j < $numpercol; $j++){
                                $theCity = !empty(array_values($ascities)[$numpercol*$i+$j]) ? array_values($ascities)[$numpercol*$i+$j] : '';
                                $ascitiesSlugs = array_keys($ascities);
                                if(!empty($theCity))
                                    echo "<li><i class='arrow right'></i><a href='/" . $language . '/geoviz/' . $ascitiesSlugs[$numpercol*$i+$j] . "'>" . array_values($ascities)[$numpercol*$i+$j] . "</a></li>  ";
                            }
                            echo "</ul><br>";
                        echo "</section></div>";
                    }
                ?>
            </div>
        </div>
        <div id="scrolling-up">
          <img src="/dist/assets/scroll.svg" />
        </div>

    </div>
    <!-- endfull menu-->

    <div class="topbar-container">

        <div class="left-part">
            <div style="height:100%">
              <a data-tooltip="down 1000" aria-label="Inicio" class="main-title" href="/<?php echo $language; ?>">
                  <img class = "logo-title lg" src="/dist/assets/logo-title.svg"/>
                  <img class = "logo-title sm" src="/dist/assets/logo-mobile.svg"/>
                </a>
            </div>
        </div>


        <div class=" right-part">
            <span>

                <input placeholder="Buscar el nombre de una ciudad o un municipio..." id="topbar-search"  class = "typeahead" type="search" name="search" autocomplete="off">
                <div class="search-input-btn"></div>
            </span>

            <div class="dropLang">
                 <div id="myDropdown" class="dropdown-content">
                    <a class="langchoice" href="/en<?php echo $curPage['pagePathNoLang'];?>"></a>
                    <a class="langchoice2" href="/fr<?php echo $curPage['pagePathNoLang'];?>"></a>
                 </div>
            </div>


            <div class="toggle-nav menu">
                <img src="/dist/assets/menu-icon.svg" />
            </div>

            <div class="toggle-nav menu-mobile">
                <div class="container-menu-bars">
                    <div class="menu-bars"></div>
                    <div class="menu-bars"></div>
                    <div class="menu-bars"></div>
                </div>
            </div>

        </div>

    </div>

    <div>
      <input placeholder="Buscar el nombre de una ciudad o un municipio..." id="topbar-search-mobile"  class = "typeahead" type="search" name="search">
    </div>
</div>
<!-- End topbar -->



<!-- Breadcrumbs -->
<?php
    if(!empty($page) && !empty($curPage['pageCrumbs'])) { ?>
    <div class = "row breadcrumb">
        <div class="col-sm-11">
            <div class = "breadcrumb-container">

            </div>
        </div>
        <div class="col-sm-1">
            <div class="full-screen">
                <?php if($section=='geoviz') echo "<i class='fas fa-external-link-alt'></i>"; ?>
            </div>
        </div>
    </div>
<?php } ?>


<!-- MODAL BOXES  -->

<!-- SHARE modal boxes  -->
<input type="checkbox" id="share-modal-control" class="modal">
<div>
    <div class="card share-card">

    <label for="share-modal-control" id="label-modal">
        <img class="modal-close"  src="/dist/assets/close-white.png" />
    </label>

    <h3 class="section">Comparte esta vista</h3>
    <div class="share-card-container">

        <label class="share-container" for="share-mail" id="share-mail">
            <img class="ask" src="/dist/assets/mail.svg" /><span>Compartir por email</span>
        </label>

        <label class="share-container" for="share-tw" id="share-tw">
            <img class="ask" src="/dist/assets/twitter.svg" /><span>Compartir en twitter</span>
        </label>

        <label class="share-container" for="share-fb" id="share-fb">
            <img class="ask" src="/dist/assets/facebook.svg" /><span>Compartir en Facebook</span>
        </label>
    <!--
        <label class="share-container" for="share-lk" id="share-lk" >
            <img class="ask" src="/dist/assets/lk.svg" /><span>Compartir en LinkedIn</span>
        </label>
    -->
        <label class="share-container" for="share-link" id="share-link" >
            <img class="ask" src="/dist/assets/link.svg" /><span>Copiar URL de la página</span>
        </label>

    </div>

    <div class="close-share">
        <label for="share-modal-control" class="" ><i class="fas fa-times"></i><b>&nbsp;Cerca</b></label>
    </div>
    </div>
</div>

<!-- HELP modal boxes  -->
<input type="checkbox" id="help-modal-control" class="modal">

<div>
  <div class="card help-card">

    <label for="help-modal-control" id="label-modal">
      <img class="modal-close"  src="/dist/assets/close-white.png" />
    </label>

    <h3 class="section">Ayuda para el uso de la interfaz</h3>

    <div class="help-card-container">

	   <h5><b>1) Detalles </b></h5>

    	<p class="section">
        	Los datos utilizados en Mobiliscope proceden de encuestas públicas sobre los desplazamientos cotidianos. Los datos más antiguos son de 2009 y los más recientes de 2019. Con el fin de localizar a la población presente en cada sector de las ciudades <b>para cada hora "en punto" (4:00, 5:00, etc.) del día</b>, hemos transformado los datos de desplazamientos en datos de presencias por hora. Sólo se tienen en cuenta los viajes que tuvieron lugar en un <b>día laborable</b> (de lunes a viernes) para representar un día laborable "ficticio".<br/><br/>

        	Las proporciones/número de personas por sector y por hora que aparecen en el Mobiliscope son estimaciones. Por lo tanto, están sujetos a un <b>margen de error estadístico</b>.<br/><br/>

            La versión actual de Mobiliscope (v4.1) incluye 58 ciudades y sus alrededores. 
            Para elegir la ciudad a observar, puede utilizar el menú desplegable <img src="/dist/assets/menu-icon.svg" width="50px" height= "50px"/> o buscar por el nombre del municipio utilizando la herramienta de la lupa <img src="/dist/assets/search-black.svg" width="20px" height= "20px"/>.
        </p>

       <h5><b>2) Seleccione un indicador que se mostrará en el mapa central y en los gráficos</b></h5>

        <p class="section">
            En el menú de la izquierda, elija un indicador y seleccione una visualización porcentual<button class ="part">%</button>, en stock<button class ="nb">nb</button> o de flujo<button class="flow2" style = "font-size : 1em ;" >✴</button>.<br/>
    		Para conocer los detalles de los indicadores <span class = "helpAcc2"></span> , haga clic en el botón de ayuda situado junto al nombre del indicador.<br/><br/>
              <img src="/dist/assets/accordeonmenu-es.png" alt="accordeonmenu" width="300"/><br/><br/>

    		Modo de flujo <button class="flow2" style = "font-size : 1em ;" >✴</button> permite conocer el número de personas presentes en un sector que residen en otro sector (incluido en el perímetro de la encuesta). En el mapa, los enlaces que aparecen al pasar el ratón por la zona de presencia están vinculados a las principales zonas de residencia. Este modo no está disponible en las pantallas táctiles.<br/><br/>
    		<img src="/dist/assets/oursins-es.png" alt="oursins" width="600"/>

        </p>

        <h5><b>3) Observar la evolución del mapa a lo largo del día</b></h5>

        <p class="section">
            Pulse el botón de reproducción situado a la izquierda de la "línea del tiempo" para animar el mapa según las 24 horas del día.<br/><br/>
              <img src="/dist/assets/timeline-fr.png" alt="timeline" />
        </p>

         <h5><b>4) Observar un sector determinado</b></h5>

        <p class="section">
            Seleccione un sector haciendo clic en el mapa.<br/><br/>
            <img src="/dist/assets/select-secteur-es.png" alt="select-secteur" width="600"/><br/><br/>

            Observe el gráfico "<b>en el sector sececcionado</b>": permite ver a lo largo de las 24 horas del día la evolución de la población presente en ese sector (y para cada uno de los grupos que componen el indicador seleccionado en el menú). La leyenda de los gráficos sigue el mismo código de colores que el menú. En este gráfico, el transporte público aparece en azul, los vehículos privados motorizados en rosa y los modos suaves en verde. <br/><br/>
            <img src="/dist/assets/graph-empile-es.png" alt="graph-empile" width="500"/><br/><br/>

            Haciendo clic en la pestaña "simple", se puede ver la evolución de un grupo de población determinado.<br/><br/>
            <img src="/dist/assets/graph-simple-es.png" alt="graph-simple" width="500"/><br/><br/>
        </p>

         <h5><b>5) Estudiar la segregación espacial</b></h5>

        <p class="section">
        El bloque de gráficos titulado "<b>En toda la región</b>" presenta dos índices estadísticos calculados en todos los sectores de la región para cada hora del día. <br/><br/>

        El <b>índice de Duncan</b> (también llamado Dissimilarity index') mide la intensidad de la segregación de cada grupo en un indicador:<br/><br/>
        <img src="/dist/assets/duncan-es.png" alt="duncan" width="500"/><br/><br/>

        El ejemplo anterior muestra, hora por hora, el índice de Duncan (París y su región - 2010) según el indicador "barrios prioritarios", que distingue entre dos subgrupos de población: las personas que viven en barrios prioritarios según la política urbana y las que viven fuera de estos barrios prioritarios. El índice de Duncan, entre 0 y 1, mide la desviación de una distribución equitativa. Si el índice es 0, significa que todos los sectores de la región acogen a ambos subgrupos de población en la misma proporción que los del conjunto de la región; por el contrario, si el índice es 1, significa que cada sector de la región acoge sólo a uno de los dos grupos. En nuestro caso, el valor más alto se sitúa entre las 20:00 y las 7:00 horas, lo que indica una mayor segregación nocturna (más alejada de la distribución equitativa): corresponde a la hora en que la mayoría de los individuos de ambos grupos están en casa o en su sector de residencia. En cambio, durante el día, el valor del índice disminuye. Esto significa que, debido a su movilidad, las personas que viven en los barrios prioritarios y las que viven fuera de ellos están "mezcladas" en todos los sectores de la región (una situación más cercana a la distribución equitativa).<br/><br/>

        Al hacer clic en el botón "Moran" aparece un segundo gráfico que muestra el <b>índice de Moran</b> que mide la similitud de los perfiles de población presentes en cada sector con los de sus sectores vecinos&nbsp;:<br/><br/>
        <img src="/dist/assets/moran-es.png" alt="moran" width="500"/><br/><br/>

         El índice de Moran varía de -1 a +1: cuanto más se acerque su valor a 1, más parecidos (similares en términos del indicador elegido) son los sectores espacialmente cercanos; cuanto más se acerque su valor a -1, más disímiles (diferentes en términos del indicador elegido) son los sectores espacialmente cercanos. Cuando el índice de Moran es 0, no aparece ninguna estructura de similitud/disimilitud entre sectores vecinos en toda la región. En nuestro ejemplo, el índice es positivo y aumenta durante el día. Esto significa que durante el día se forman bloques de zonas similares (según el número de habitantes de los barrios prioritarios presentes en ellos). Este resultado no contradice el índice de Duncan, sino que lo complementa: durante el día, los habitantes de los barrios prioritarios frecuentan otros sectores distintos de su sector de residencia (su distribución espacial dentro de los sectores de la región es más homogénea), pero tienden a estar presentes en sectores próximos entre sí. <br/><br/>

        Obsérvese que cuando un indicador se compone de dos grupos (hombres/mujeres, viven dentro/fuera barrios prioritarios), los valores del índice son los mismos para uno u otro grupo y, por tanto, las curvas se superponen. Para obtener más información sobre los dos índices utilizados, haga clic en el botón de ayuda <span class = "helpAcc2" style = "font-size : 1em ;"></span> situado junto al nombre del índice.
        </p>

         <h5><b>6) Cambiar el fondo del mapa</b></h5>

        <p class="section">
            Haciendo clic en el botón <img src="/dist/assets/layers2.png" width="20px" height= "20px"/>, hay varios fondos de mapa disponibles para ayudarle a orientarse en el mapa interactivo: un fondo de mapa simple (mostrado por defecto), un fondo de mapa más detallado (OpenStreetMap) y un fondo compuesto por fotografías aéreas.<br/><br/>
            <img src="/dist/assets/osm-simple-es.png" alt="osm-simple" width="360" margin-right="5"/>
            <img src="/dist/assets/osm-detail-es.png" alt="osm-details" width="360" margin-right="5"/>
            <img src="/dist/assets/satellite-es.png" alt="satellite" width="360"/><br/><br/>

            Este menú contiene otras capas de información específicas para ciertas ciudades. Por ejemplo, puede visualizar el perímetro de los barrios prioritarios de las ciudades francesas o los anillos centro/periferia de las ciudades latinoamericanas.<br/><br/>
            <img src="/dist/assets/qpv-es.png" alt="osm-simple" width="400"/>
            <img src="/dist/assets/couronne-es.png" alt="couronne" width="400"/>
        </p>


         <h5><b>7) Descargar datos</b></h5>

        <p class="section">
                Los datos agregados que se muestran en la herramienta están bajo la <b>licencia de código abierto ODbL</b> y son libremente reutilizables siempre que permanezcan bajo una licencia de código abierto y se mencionen las fuentes. <br/><br/> 

                Al hacer clic en el botón <img src="/dist/assets/download.svg" width="20px" height= "20px"/> encima del mapa central, puede descargar los datos de presencia por sector y hora. 

                Al hacer clic en el botón <img src="/dist/assets/download.svg" width="20px" height= "20px"/></span> junto al gráfico inferior, puede descargar datos sobre el grado de segregación (índice de Duncan o Moran) hora a hora en la región.
        </p>


        <h5><b>8) Compartir URL correspondiente a la geovisualización mostrada</b></h5>

        <p class="section">
            Haciendo clic en el botón <img src="/dist/assets/share.svg" width="25px" height= "25px"/>, puedes copiar la URL de tu mapa o compartirlo directamente por correo electrónico o en las redes sociales. La URL registra su elección de indicador, así como la zona y la hora seleccionadas.
        </p>


         <h5><b>Para ir más allá</b></h5>
        <p class="section">
            Al visitar el <a href="/es/info/methods/data">Datos</a>, <a href="/es/info/methods/indicators">Indicadores</a> ou <a href="/es/info/methods/geovizualisation">Geovisualización</a> obtendrá más información sobre los métodos utilizados en Mobiliscope.
        </p>
        <p class="section">
            ¡Disfrute de su visita!
        </p>

        <div class="close-help">
            <label for="help-modal-control" class="" > <i class="fas fa-times"></i><b>&nbsp;Cerrar la ventana de ayuda</b></label>
        </div>
   </div>
  </div>
</div>

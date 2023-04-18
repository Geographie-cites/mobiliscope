<div class = "corps">

	<section>
		<h2>Geovisualización</h2>
	</section>

	<section>
		<h3>Ciudad por ciudad</h3>

		<p>
			Cada página de geovisualización corresponde al perímetro geográfico de una de las encuestas origen-destino utilizadas en Mobiliscope y lleva el nombre de la ciudad "centro". Los perímetros, que varían en tamaño de una encuesta a otra -pueden ser aglomeraciones urbanas, departamentos o regiones-, se dividen en sectores correspondientes a barrios, municipios o agrupaciones de municipios.
		</p>

		<p>
			Para cada ciudad y su "región", la interfaz se compone de la misma manera:
		</p>

		<h2>
			<figure class="inline">
				<img src="/dist/assets/interface-es.png" alt="Captura de pantalla de la interfaz de París y su región" width = "1000"/>
			</figure>
		</h2>

		<p>
			1) En el <b>menú de los indicadores</b> (a la izquierda), el usuario puede elegir visualizar el conjunto de la población presente (indicador «Global») o bien verla según su perfil demográfico (Sexo, Grupo de edad y Composición del hogar ), su perfil social (Nivel educativo, Categoría socioprofesional, Ingresos del hogar y Ocupación profesional), o incluso según la situación del lugar de residencia en la ciudad. También es posible observar los tipos de actividades realizadas por la población presente en cada uno de los sectores a una hora seleccionada, así como el modo de transporte utilizado para llegar al destino.</br>
		</p>

		<p>
			2) En el centro de la pantalla, aparece un <b>mapa</b> según el indicador elegido en el menú de la izquierda. El mapa es dinámico: puede hacer zoom, desplazarse sobre él, deslizar el ratón para que aparezcan los nombres de los sectores. Para ubicarse con más facilidad, puede visualizar capas Open Street Map más o menos detalladas.
		</p>

		<p>
			3) En la parte derecha de la pantalla, un <b>primer gráfico</b> (arriba) permite visualizar información detallada para el sector seleccionado en el mapa y seguir la evolución a lo largo del día de la distribución de la población presente en ese sector (en stock o en porcentaje). Un <b>segundo gráfico</b> (abajo) da información sobre la intensidad de la segregación en el conjunto de la región considerada a las diferentes horas del día.</br>
		</p>

		<p>
			4) El <b>eje de las horas </b> situado arriba del mapa permite animar los datos hora por hora. 
		</p>

		<p>
			Para la información (carto)gráfica relativa a un indicador determinado, se ha elegido un mismo código de color. Los gradientes de color se han construido gracias a la aplicación <a target="_blank"  href = "http://www.geotests.net/couleurs/gradients_inflex_en.html">color gradients explorer</a>.
		</p>

	</section>

	<section>
		<h3>Mapa</h3>

		<p>
			Se proponen <b>tres modos de representación cartográfica</b>: mapas de coropletas, de círculos proporcionales y de flujo.</br>
		
			Los <b>datos</b> utilizados para los mapas están disponibles bajo bajo <b>licencia abierta</b> y pueden <b>descargarse</b> pulsando el botón <img src="/dist/assets/download.svg" width="20px" height= "20px"/></span> situado junto al título del mapa. Más información <a href="/es/info/open/license">aquí</a>.
		</p>

		<section>
			<h4>Mapas de coropletas</h4>

			<figure >
				<img src="/dist/assets/choro.png" alt="extracto del mapa coropleto" />
			</figure>

			<p>
				Los <b>mapas de coropletas</b> muestran los porcentajes (%) estimados de personas de un grupo determinado por sector. En el caso del indicador "Población total", también hay un modo de representación que permite mostrar la densidad de población presente (n° personas / km²) por sector.</br> 

				La leyenda siempre está construida con 5 clases (8 clases para la densidad de población) cuyos límites siguen siendo los mismos a lo largo del día en una región determinada. Se utilizan diferentes <b>métodos de discretización</b> para definir los límites de estas cinco clases: 


				<ul>
					<li>
						Para la mayoría de los indicadores (<i>Grupo de edad</i>, <i>Composición del hogar</i>,<i>Nivel educativo</i>, <i>Categoría socio-ocupacional</i>, <i>Informalidad laboral</i>, <i>Ocupación principal</i>, <i>Estrato socioeconómico</i>, <i>Tenencia de la vivienda</i> y <i>modo de transporte</i>), se utiliza una discretización en <b>cuantiles</b>: cada clase agrupa un 20% de los sectores de la región considerada en las 24h del día. Al ser la distribución diferente de una ciudad a otra, los límites de clases varían igualmente entre ciudades. 
					</li>

					<li>
						Una discretización en <b>igual amplitud </b> se ha aplicado para cuatro indicadores: <i>Residente en/fuera del sector</i>, <i>Sexo</i>, <i>Barrios Prioritarios en Políticas Urbanas</i> y <i>Ingresos del hogar</i>. Para el indicador <i>Residente en/fuera del sector</i>, la leyenda es idéntica para todas las regiones de Mobiliscope y para las dos modalidades, puesto que las distribuciones oscilan siempre entre el 0% y el 100% (de residentes o de no-residentes por sector). Para los otros tres indicadores, los límites de clases difieren de una ciudad a otra en razón de distribuciones estadísticas muy variables para cada ciudad. 
					</li>

					<li>
						Se utiliza una discretización en <b>umbrales naturales</b> (<b>Jenks</b>) para los indicadores <i>Anillo de residencia</i>, <i>Departamento de residencia</i>  (Paris y su región) y <i>Actividad</i> a partir de la distribución de los datos de cada región. Así pues, los límites de clase varían en función de la región observada.
					</li>

					<li>
						Para el indicador <i>Población total</i>, las densidades de población se discretizan en ocho clases según el método de <b>medias anidadas</b>. Las clases obtenidas son por tanto propias a cada región, pero siguen siendo idénticas a lo largo del día en una región determinada.
					</li>
				</ul>

			</br>Las discretizaciones se calculan al cargar los mapas con la biblioteca <a href = "https://github.com/simogeo/geostats" target="_blank" >geostats.js</a>, excepto el cálculo de las medias anidadas, que fue codificado por el equipo de Mobiliscope.
			</p>
		</section>

		<section>
			<h4>Mapas de círculos proporcionales</h4>

			<figure >
				<img src="/dist/assets/prop.png" alt="extracto mapa en círculos proporcionales" />
			</figure>

			<p>
				En los <b>mapas de círculos proporcionales </b> (que representan el <b>número</b> estimado de personas de un grupo determinado a escala de los sectores), el tamaño de los círculos es proporcional al stock de personas presentes en los sectores. La proporcionalidad es rigurosamente similar para todos los mapas de una misma región y a cualquier hora (puede variar según la región observada).
			</p>
		</section>

		<section>
			<h4>Mapas de círculos proporcionales y de flujo</h4>

			<figure >
				<img src="/dist/assets/flow.png" alt="extracto mapa en círculos proporcionales y de flujo" />
			</figure>

			<p>
				En los mapas de círculos proporcionales y <b>de flujo</b> (que representan el <b>número</b> estimado de personas <b>no residentes</b> de un grupo determinado a escala de los sectores), el tamaño de los círculos es proporcional al stock de personas presentes no residentes. La proporcionalidad es rigurosamente similar para todos los mapas de una misma región y a cualquier hora (puede variar según la región observada). Para evitar cualquier redundancia, este modo de representación no está disponible para la modalidad "a casa" del indicador "actividad", ni para el indicador relativo a la población residente/no residente.<br/> 
			</p>

			<p>
				Para este modo de representación, las relaciones (que se muestran al deslizar el ratón) corresponden a los <b>principales</b> sectores de residencia de las personas presentes en el sector seleccionado. Por razones de confidencialidad y de poder estadístico, hemos aplicado un umbral de 6 personas (en dato bruto no ponderado) por debajo del cual no representamos las relaciones entre el sector de residencia y el sector de presencia. La leyenda de las relaciones es similar para todos los mapas de una misma región y a cualquier hora (pero puede variar en función de la región observada).
			</p>

			</p>
		</section>
	</section>

	<section>
	<h3>Gráficos</h3>

		<section>
			<figure >
				<img src="/dist/assets/t1-es.png" alt="imagen del título del gráfico superior" />
			</figure>

			<p>
				El gráfico de arriba muestra hora por hora la evolución de la población presente (en número o en porcentaje) en el sector seleccionado (haciendo clic en el mapa central). Este gráfico se declina en dos modos: visualización de una única modalidad ("simple") o visualización del conjunto de las modalidades de un indicador ("apilada").
			</p>
		</section>

		<section>
			<figure >
				<img src="/dist/assets/t2-es.png" alt="imagen del título del gráfico inferior" />
			</figure>

			<p>
				El gráfico de abajo propone dos medidas de la segregación a escala de la región observada. Estas medidas de la segregación se calculan para cada una de las horas del día.

				<ul>
					<li>
						Índice de disimilitud de <b>Duncan</b> mide el grado de segregación de un grupo de individuos en el espacio. Varía de 0 (segregación mínima) a 1 (segregación máxima). Expresa la proporción de individuos de este grupo que tendrían que cambiar de sector si la proporción de individuos de este grupo fuera la misma en todos los sectores de la región. Cuando este índice se utiliza para medir la segregación de una población dividida únicamente en dos grupos (por ejemplo, hombres y mujeres), los valores de este índice son los mismos para cada uno de los dos grupos.
					</li>
					<li>
						El índice de <b>Moran</b> mide la intensidad de la relación entre la proximidad de los lugares y su grado de similitud (autocorrelación espacial). Varía de -1 (los lugares próximos tienen tendencia a ser más diferentes que los lugares alejados - autocorrelación negativa) a 1 (los lugares próximos tienen tendencia a parecerse más que los lugares alejados - autocorrelación positiva), un valor cercano a cero indica ausencia de estructura espacial.
					</li>
				</ul>
				
			<p>
				En los gráficos de Duncan y de Moran, los valores mínimo y máximo son los mismos para todas las modalidades de un mismo indicador para que pueda efectuarse la comparación. Asimismo, los intervalos entre el mínimo y el máximo no pueden ser inferiores a 0,4 para no dar demasiada importancia a eventuales variaciones menores en la estructura espacial (cf. por ejemplo el indicador "sexo").
			</p>

			<p>
				Los índices de Duncan y Moran se calculan respectivamente con las <a href="https://mran.microsoft.com/snapshot/2018-04-05/web/packages/OasisR/index.html" target="_blank">OasisR</a> y <a href="https://cran.r-project.org/web/packages/spdep/index.html" target="_blank">spdep</a> packages del software R. 
			</p>

			<p>
				Los datos sobre los índices Duncan y Moran mostrados en Mobiliscope están disponibles bajo <b>licencia abierta</b> y pueden <b>descargarse</b> pulsando el botón <img src="/dist/assets/download.svg" width="20px" height= "20px"/></span> situado junto al gráfico de abajo. Más información <a href="/es/info/open/license">aquí</a>.
			</p>
		</section>

	</section>

</div>

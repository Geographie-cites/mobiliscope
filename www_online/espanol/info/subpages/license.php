<div class = "corps">
    <section>
	<h2>Open-data y open-source</h2>
	</section>

	<section>
	<h3>Ciencia abierta</h3>

	<p>
		El desarrollo de Mobiliscope se inscribe en un enfoque de ciencia abierta: hacemos lo máximo para que los datos construidos por el equipo y visualizados en la herramienta respeten los principios FAIR: «<b>F</b>áciles de encontrar, <b>A</b>ccesibles, <b>I</b>nteroperables y <b>R</b>eutilizables».</br>
	</p>


	</section>

		<section>
		<h4>Código</h4>

			<p>
				Mobiliscope se desarrolla en HTML, CSS (framework <a href = "https://minicss.org/" target = "_blank"> mini.css</a>), javascript y PHP. La geovisualización se ha codificado en javascript y se basa, para la interactividad de los mapas y gráficos, en las librerías <a  href = "https://d3js.org/" target="_blank" >D3.js</a> - desarrolladas por Mike Bostock - y <a href="http://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a>. Para la superposición de las capas OSM y los mapas diseñados con D3.js se utiliza el plugin <a href="https://github.com/teralytics/Leaflet.D3SvgOverlay" target="_blank">Leaflet.D3SvgOverlay</a> bajo licencia MIT.
			</p>

			<p>
				Los datos agregados y ponderados (que no permiten la identificación de las personas encuestadas) se almacenan localmente en forma de archivos geojson para los datos espaciales y csv para los datos de atributo sin geometría. Estos datos han sido generados automáticamente con antelación gracias a dos scripts R: el primero transforma los datos de desplazamiento procedentes de las encuestas en datos de presencias; el segundo produce el conjunto de archivos necesarios para la representación (carto)gráfica para cada uno de los indicadores.
			</p>

			<p>
				El <b>código de Mobiliscope</b> (que incluye los códigos del programa y los programas de tratamiento de datos) es <b>accesible en <a href = "https://github.com/Geographie-cites/mobiliscope" target="_blank">github</a> y en <a href = "https://doi.org/10.5281/zenodo.7822701" target="_blank">Zenodo</a></b>. Este código está disponible bajo <b>licencia libre <a href = "https://spdx.org/licenses/AGPL-3.0-or-later.html" target="_blank">AGPL</a></b>. La licencia AGPL permite cualquier redistribución o modificación del código siempre y cuando permanezca bajo la licencia AGPL y se identifique la fuente del código, por ejemplo con la mención: <i>«Código bajo licencia AGPL procedente de Mobiliscope»</i>.
			</p>

				<a href = "https://spdx.org/licenses/AGPL-3.0-or-later.html" target="_blank">
					<figure class="inline">
				  <img src="/dist/assets/agpl.png" alt="AGPL" width="150"/>
				</figure>
				</a>

	 	</section>

	 	<section>
		<h4>Datos</h4>

		<p>
			Los <b>datos</b> (formato .csv y .geojson) se pueden <b>descargar</b> en la plataforma Mobiliscope (así como en el diccionario de datos). Con estos archivos, también hemos adjuntado un documento pdf que resume los términos de la licencia ODbL y las fuentes a indicar. 
		</p>

		<p>
			Para descargar los datos, haga <b>clic en el botón</b> <img src="/dist/assets/download.svg" width="20px" height= "20px"/>
			<ul>
				<li> o bien arriba del mapa central para obtener los valores agregados por sector según el indicador y el modo de representación seleccionado.</li>
				<li> o bien junto al gráfico de abajo para obtener los valores de los índices de segregación para el conjunto de la región según el indicador seleccionado y el índice de segregación elegido.</li>
			</ul>
		</p>

		<p>
			Una carpeta que contiene <b>todos los datos</b> descargables en la herramienta también es <b>accesible en <a href="https://doi.org/10.5281/zenodo.7822016" target="_blank">Zenodo</a></b>.
		</p>

		<p>
			Estos datos están disponibles bajo <b>licencia libre <a href = "https://spdx.org/licenses/ODbL-1.0.html" target="_blank">ODbL</a></b>. De este modo, pueden reutilizarse y modificarse libremente siempre y cuando sigan bajo licencia ODbL y que se identifiquen las fuentes, por ejemplo con la mención: «Datos bajo licencia ODbL procedentes de Mobiliscope, a partir de los datos iniciales de <i>[completar según las fuentes indicadas en el mapa de la ciudad correspondiente o en los términos de licencia de reutilización]»</i>.
		</p>

			<a href = "https://spdx.org/licenses/ODbL-1.0.html" target="_blank">
			<figure class="inline">
			  	<img src="/dist/assets/odbl.png" alt="OBL" width="150"/>
			</figure>
			</a>

		</section>

		<section>
		<h4>Visuales</h4>

		<p>
			Los visuales (mapas y gráficos) visualizados en Mobiliscope están disponibles bajo <b>licencia libre <a href = "https://creativecommons.org/licenses/by-sa/4.0/legalcode.fr" target="_blank">creative commons CC-BY-SA</a></b>.
		</p>

		<p>
			Los visuales pueden así reutilizarse siempre y cuando los autores y las fuentes sean citados, por ejemplo con la mención: «Visuales procedentes de Mobiliscope».
		</p>

			<a href = "https://creativecommons.org/licenses/by-sa/4.0/legalcode.fr" target="_blank">
			<figure class="inline">
			  <img src="/dist/assets/cc-by-sa.png" alt="CC-BY-SA" width="150"/>
			</figure>
			</a>

		</section>

	
	<section>
	<h3>¿Cómo cotizar el Mobiliscope?</h3> 

	<p>
		Para citar la <b>versión actual</b> del Mobiliscope</b>
			<ul>Vallée J, Douet A, Le Roux G, Commenges H, Lecomte C, Villard E (2023). Mobiliscope, a geovisualization platform to explore cities around the clock (v4.2). Zenodo.  doi: <a href="https://doi.org/10.5281/zenodo.7822701" target="_blank">10.5281/zenodo.7822701</a></ul>
	</p>

	<p>
		Si reutiliza los <b>datos abiertos</b> disponibles a través de la herramienta o a través del repositorio de Zenodo&nbsp;:</b>
			<ul>Vallée J, Douet A, Le Roux G, Commenges H, Lecomte C, Villard E (2023). Mobiliscope, a geovisualization platform to explore cities around the clock (v4.2). [Data set]. Zenodo. doi: <a href="https://doi.org/10.5281/zenodo.7822016" target="_blank">10.5281/zenodo.7822016</a></ul>
	</p>


	<p>
		<figure class="inline">
			  <img src="/dist/assets/prix.jpg" alt="prix" width="400"/>
			  <figcaption style="text-align: left">Trofeo <b>Open Science of Research Data Award</b>.</br><i>Otorgado en 2022 por el Ministerio de Educación Superior e Investigación de Francia</i></figcaption>
		</figure>
	</p>

	</section>
	</br>
	</br>

</div>

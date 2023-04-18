<div class = "corps">
    <section>
	<h2>Open-data and open-source</h2>
	</section>


	<section>
	<h3>Science ouverte</h3>

	<p>
		The Mobiliscope is developed in the spirit of open science and <b>FAIR principles</b>. We do our utmost to ensure that our programs and data are easy to <b>F</b>ind, <b>A</b>ccessible, <b>I</b>nteroperable and <b>R</b>eusable.</br>
	</p>


	</section>


		<section>
		<h4>Open-source programs</h4>

			<p>
				The Mobiliscope has been developed using HTML, CSS (framework <a href = "https://minicss.org/" target = "_blank"> mini.css</a>), javascript and PHP. The geovisualization has been coded in javascript and relies on <a  href = "https://d3js.org/" target="_blank" >D3.js</a> - developed by Mike Bostock - and <a href="http://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a> library. OpenStreetMap layers and maps drawn with D3.js are displayed with <a href="https://github.com/teralytics/Leaflet.D3SvgOverlay" target="_blank">Leaflet.D3SvgOverlay</a>, a plugin under MIT license.

			</p>

			<p>
				Hourly data are locally stored as geojson files for spatial data and csv files for data without geometry. They are automatically generated from two R scripts: the first one transforms 'trips' data into 'hourly location' data; the second one produces all the files necessary for (carto)graphical representation.
			</p>

			<p>
				<b>Programs</b> (including geovizualization and data processing programs) are <b>available</b> in <b><a href="https://github.com/Geographie-cites/mobiliscope" target="_blank">github</a></b> and in a<b><a href = "https://doi.org/10.5281/zenodo.7822701" target="_blank">Zenodo record</a></b>. Programs are under copyleft <b><a href="https://spdx.org/licenses/AGPL-3.0-or-later.html" target="_blank">AGPL licence</a></b>
				With AGPL license, users can use and modify programs as long as they redistribute the modified programs under AGPL license and indicated sources, for example as follow: <i>«&nbsp;Programs under AGPL license issued from Mobiliscope&nbsp;»</i>.
			</p>

				<a href = "https://spdx.org/licenses/AGPL-3.0-or-later.html" target="_blank">
					<figure class="inline">
				  <img src="/dist/assets/agpl.png" alt="AGPL" width="150"/>
				</figure>
				</a>


	 	</section>

	 	<section>
		<h4>Open-data</h4>

		<p>
			District hourly <b>data</b> (format .csv and .geojson) can be <b>downloaded</b> from the Mobiliscope platform (as well as the data dictionary). With these files, we have also attached a pdf document summarizing the terms of the ODbL license and the sources to be indicated. 
		</p>

		<p>
			To download the data, <b>click the button</b> <img src="/dist/assets/download.svg" width="20px" height= "20px"/>
			<ul>
				<li> either above the central map to get hourly location data for every district of the selected city region (and according to the selected indicator and the representation mode)</li>
				<li> or to the side of the lower chart to get hourly values of segregation index (Duncan or Moran) for the whole region and according to the selected indicator.</li>
			</ul>
		</p>

		<p>
			A folder containing <b>all the data</b> offered for download is also available in a </b> <a href="https://doi.org/10.5281/zenodo.7822016" target="_blank">Zenodo record</a>.
		</p>

		<p>
			These open-data are under <b><a href="https://spdx.org/licenses/ODbL-1.0.html" target="_blank">ODbL license</a></b>. Users are free to re-use and adapt these data as long as they redistribute a version of their adapted database under the ODbL licence and that they attribute the original sources, for example as follows: <i>« Data under ODbL license issued from Mobiliscope, from initial data [to be completed according data sources indicated in the map or in the OdBL license attached with the data] »</i>.
		</p>


			<a href = "https://spdx.org/licenses/ODbL-1.0.html" target="_blank">
			<figure class="inline">
			  	<img src="/dist/assets/odbl.png" alt="OBL" width="150"/>
			</figure>
			</a>

		</section>

		<section>
		<h4>Visuals (maps and charts)</h4>

		<p>
			Visuals (maps and charts) displayed in the Mobiliscope are made available under <b><a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode.fr" target="_blank">creative commons CC-BY-SA</a></b> license. Visuals are freely reusable as long as sources are quoted, for exemple as follows: <i>« Visuals issued from Mobiliscope ».</i>
		</p>

			<a href = "https://creativecommons.org/licenses/by-sa/4.0/legalcode.fr" target="_blank">
			<figure class="inline">
			  <img src="/dist/assets/cc-by-sa.png" alt="CC-BY-SA" width="150"/>
			</figure>
			</a>

		</section>

	
    <section>
    <h3>How to cite Mobiliscope?</h3> 

    <p>
      To cite <b>actual version</b>:</b>
        <ul>Vallée J, Douet A, Le Roux G, Commenges H, Lecomte C, Villard E (2023). Mobiliscope, a geovisualization platform to explore cities around the clock (v4.2). Zenodo.  doi: <a href="https://doi.org/10.5281/zenodo.7822701" target="_blank">10.5281/zenodo.7822701</a></ul>
    </p>

    <p>
      If you re-use <b>open-data</b> downloaded from the Mobiliscope or issued from Zenodo record::</b>
        <ul>Vallée J, Douet A, Le Roux G, Commenges H, Lecomte C, Villard E (2023). Mobiliscope, a geovisualization platform to explore cities around the clock (v4.2). [Data set]. Zenodo. doi: <a href="https://doi.org/10.5281/zenodo.7822016" target="_blank">10.5281/zenodo.7822016</a></ul>
    </p>

	<p>
		<figure class="inline">
			  <img src="/dist/assets/prix.jpg" alt="prix" width="400"/>
			  <figcaption style="text-align: left">Trophy of the <b>Open Science of Research Data prize</b>.</br><i>Awarded in 2022 by the French Ministry of Higher Education and Research</i></figcaption>
		</figure>
	</p>

		

	</section>
	</br>
	</br>

</div>

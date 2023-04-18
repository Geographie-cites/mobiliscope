<div class = "corps">
    <section>
	<h2>Open-data et open-source</h2>
	</section>

	</br>

	<section>
	<h3>Science ouverte</h3>

	<p>
		Le développement du Mobiliscope s’inscrit dans une démarche de science ouverte. Nous faisons notre maximum pour que les codes et données de l'outil respectent les <b>principes FAIR</b>&nbsp;: « <b>F</b>aciles à trouver, <b>A</b>ccessibles, <b>I</b>nteropérables et <b>R</b>éutilisables ».</br>
	</p>

	</section>


		<section>
		<h4>Codes sources</h4>

			<p>
				Le Mobiliscope est développé en HTML, CSS (framework <a href = "https://minicss.org/" target = "_blank"> mini.css</a>), javascript et PHP. La géovisualisation a été codée en javascript et s’appuie, pour l'interactivité des cartes et graphiques, sur les libraires <a  href = "https://d3js.org/" target="_blank" >D3.js</a> - développé par Mike Bostock - et <a href="http://leafletjs.com" title="A JS library for interactive maps" target="_blank">Leaflet</a>. La superposition des tuiles OSM et des cartes dessinées avec D3.js a été rendue possible par l'utilisation du plugin <a href="https://github.com/teralytics/Leaflet.D3SvgOverlay" target="_blank">Leaflet.D3SvgOverlay</a>.
			</p>

			<p>
				Les données  agrégées et pondérées (qui ne permettent pas la réidentification des personnnes enquêtées) sont stockées localement sous forme de fichiers geojson pour les données spatiales et csv pour les données attributaires sans géométrie. Ces données ont été automatiquement générées en amont grâce à deux scripts R&nbsp;: le premier transforme les données de déplacements issues des enquêtes en données de présences horaires&nbsp;; le second produit l’ensemble des fichiers nécessaires à la représentation (carto)graphique pour chaque indicateur.
			</p>

			<p>
				Le code du Mobiliscope (comprenant les codes du logiciel et les codes R de traitements de données) est accessible sur <a href = "https://github.com/Geographie-cites/mobiliscope" target="_blank">github</a> et sur <a href = "https://doi.org/10.5281/zenodo.7822701" target="_blank">Zenodo</a>. Ce code est mis à disposition sous <b>licence libre <a href = "https://spdx.org/licenses/AGPL-3.0-or-later.html" target="_blank">AGPL</a></b>. Cette licence AGPL autorise toute redistribution ou modification du code sous réserve  qu’il demeure sous licence AGPL et que la source du code soit identifiée, par exemple avec la mention&nbsp;: <i>«&nbsp;Code sous licence AGPL issu du Mobiliscope&nbsp;»</i>.<br>
			</p>

				<a href = "https://spdx.org/licenses/AGPL-3.0-or-later.html" target="_blank">
					<figure class="inline">
				  <img src="/dist/assets/agpl.png" alt="AGPL" width="150"/>
				</figure>
				</a>

		</section>

		<section>
		<h4>Données</h4>

		<p>
			Les données de présence horaire (et les indices de ségrégation associés) sont proposées au <b>téléchargement</b> (format .csv) sur le site du Mobiliscope, accompagnées d'un dictionnaire, d'un fichier géographique (format .geojson) et d'un fichier résumant les termes de la licence ODbL. 
		</p>

		<p>
			Pour télécharger les données, cliquez sur le bouton <img src="/dist/assets/download.svg" width="20px" height= "20px"/>
			<ul>
				<li> soit au dessus de la carte centrale pour obtenir les valeurs agrégées par secteur selon l'indicateur et le mode de représentation sélectionné</li>
				<li> soit à côté du graphique du bas pour obtenir les valeurs des indices de ségrégation pour l'ensemble de la région selon l'indicateur sélectionné et l'indice de ségrégation choisi.</li>
			</ul>
		</p>

		<p>
			Un dossier regroupant <b>toutes les données</b> proposées au téléchargement est également accessible ici&nbsp;:</b> <a href="https://doi.org/10.5281/zenodo.7822016" target="_blank">Dépot Zenodo</a>.
		</p>

		<p>
			Ces données sont mises à disposition sous <b>licence libre <a href = "https://spdx.org/licenses/ODbL-1.0.html" target="_blank">ODbL</a></b>. Elles sont donc librement réutilisables et modifiables sous réserve qu’elles demeurent sous licence ODbL et que les sources soient identifiées, par exemple avec la mention&nbsp;: <i>«&nbsp;Données sous licence ODbL issues du Mobiliscope, à partir des données initiales de [à compléter selon les sources indiquées sur la carte de la ville correspondante ou dans les termes de licence de réutilisation]&nbsp;»</i>.
		</p>


			<a href = "https://spdx.org/licenses/ODbL-1.0.html" target="_blank">
			<figure class="inline">
			  	<img src="/dist/assets/odbl.png" alt="OBL" width="150"/>
			</figure>
			</a>

		</section>

		<section>
		<h4>Visuels</h4>

		<p>
			Les visuels (cartes et graphiques) affichés dans le Mobiliscope sont mis à disposition sous <b>licence libre <a href = "https://creativecommons.org/licenses/by-sa/4.0/legalcode.fr" target="_blank">creative commons CC-BY-SA</a></b>. Les visuels sont donc librement réutilisables sous réserve que la source soit citée, par exemple avec la mention: <i>«&nbsp;Visuels issus du Mobiliscope&nbsp;»</i>.

		</p>
		<h3>
			<a href = "https://creativecommons.org/licenses/by-sa/4.0/legalcode.fr" target="_blank">
			<figure class="inline">
			  <img src="/dist/assets/cc-by-sa.png" alt="CC-BY-SA" width="150"/>
			</figure>
			</a>
		</h3>

		</section>


	<section>
	<h3>Comment citer le Mobiliscope&nbsp;?</h3> 

		<p>
			Pour citer la <b>version actuelle</b> du Mobiliscope&nbsp;:</b>
				<ul>Vallée J, Douet A, Le Roux G, Commenges H, Lecomte C, Villard E (2023). Mobiliscope, a geovisualization platform to explore cities around the clock (v4.2). Zenodo.  doi: <a href="https://doi.org/10.5281/zenodo.7822701" target="_blank">10.5281/zenodo.7822701</a></ul>
		</p>

		<p>
			Si vous utilisez les <b>données en open-data</b> disponibles via l'outil ou via le dépôt Zenodo&nbsp;:</b>
				<ul>Vallée J, Douet A, Le Roux G, Commenges H, Lecomte C, Villard E (2023). Mobiliscope, a geovisualization platform to explore cities around the clock (v4.2). [Data set]. Zenodo. doi: <a href="https://doi.org/10.5281/zenodo.7822016" target="_blank">10.5281/zenodo.7822016</a></ul>
		</p>


		<p>
			<figure class="inline">
			  	<img src="/dist/assets/prix.jpg" alt="prix" width="400"/>
			  	<figcaption style="text-align: left">Trophée du prix <b><a href="https://www.enseignementsup-recherche.gouv.fr/fr/prix-science-ouverte-des-donnees-de-la-recherche-86179" target="_blank">Science ouverte des données de la recherche</a></b>.</br><i>Attribué en 2022 par le ministère de l’Enseignement Supérieur et de la Recherche</i></figcaption>
			</figure>
		</p>

	</section>
	</br>
	</br>

</div>

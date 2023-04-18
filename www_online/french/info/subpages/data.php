<div class = "corps">
  <section>
<h2>Données</h2>
</section>

<section>
	<p>
		<b>58 villes/régions</b> situées en France, au Québec (Canada) et en Amérique latine sont accessibles dans la version actuelle du Mobiliscope.
	</p>
</section>

<section>
<h3>Les enquêtes</h3>
	
	<p>
	Les données proviennent de grandes enquêtes publiques qui portent sur l'ensemble des déplacements des individus interrogés la veille de l'enquête. Ces données de déplacements sont utilisées pour <b>quantifier</b> et de <b>qualifier</b> les populations présentes aux différentes heures de la journée.
	<ul>
		<li>En <b>France</b> ces enquêtes sont commandées par les collectivités locales, tous les 10 ans environ, et réalisées selon une méthodologie standardisée du <a href = "https://www.cerema.fr/fr/actualites/emc2-enquete-mobilite-certifiee-cerema-emc2-anciennement" target="_blank">Cerema</a>, sauf pour l’Île-de-France et son <a href = "http://www.omnil.fr/spip.php?article81" target="_blank">Enquête Globale Transport</a> (DRIEA-STIF-OMNIL).</br>
		La majorité de ces enquêtes sont disponibles à des fins de recherche via <a href = "http://www.progedo-adisp.fr/" target="_blank">Progedo</a>. Les données des autres enquêtes proviennent de la base de donnée dite unifiée du Cerema&nbsp;: cette base regroupe l’ensemble des enquêtes réalisées depuis 2009.	Quelques unes de ces enquêtes sont aussi disponibles en open data (<a href = "https://www.data.gouv.fr/fr/datasets/enquete-deplacements-en-loire-atlantique-2/" target="_blank">Nantes</a>, <a href = "https://data.montpellier3m.fr/dataset/enquete-menages-deplacements-archive" target="_blank">Montpellier</a> et <a href = "https://opendata.lillemetropole.fr/explore/dataset/enquete-deplacement-2016/information/" target="_blank">Lille</a>).
		</li>

		<li>Au <b>Québec</b>, il s'agit des enquêtes Origine-Destination mises à disposition par le <a href = "http://www.transports.gouv.qc.ca" target="_blank">Ministère des transports du Québec</a>.
		</li>

		<li>En <b>Amérique latine</b>, il s'agit d'enquêtes Origine-Destination mises à disposition par&nbsp;: pour Bogotá, le <a href = "https://www.simur.gov.co/encuestas-de-movilidad" target="_blank"><i>Sistema Integrado de información sobre Movilidad Urbana Regional</i> (SIMUR)</a>&nbsp;; pour Santiago, le <a href = "http://www.sectra.gob.cl/biblioteca/detalle1.asp?mfn=3253" target="_blank"><i>Ministerio de Transportes y Telecomunicaciones, Programa de Vialidad y Transporte Urbano: SECTRA</i></a>&nbsp;; pour São Paulo, la <a href = "http://www.metro.sp.gov.br/pesquisa-od/" target="_blank"><i>Companhia do Metrô de São Paulo</i></a>.
		</li>

	</ul>
	</p>

		<p>
     Ces enquêtes ont été menées auprès d'un échantillon de ménages représentatif de la population du territoire. Au cours d’entretiens en face à face ou téléphoniques, les personnes ont été invitées à décrire tous leurs déplacements de leur journée de la veille en précisant les points de départ et d’arrivée de chacun de leur déplacement, l'heure précise du début et de la fin du déplacement, le motif du déplacement et le moyen de transport utilisé. Dans les enquêtes québécoises, l’heure d’arrivée n’a pas été systématiquement demandée aux participant·e·s interrogé·e·s. Ces données manquantes ont été imputées soit en utilisant des déplacements comparables, soit en calculant la durée de déplacement à partir d'un Système d'Information Géographique. 
    </p>

    <p>
		Les rythmes quotidiens des territoires peuvent également être quantifiées à partir des traces numériques laissées par les téléphones portables. Par rapport à ces traces numériques, les grandes enquêtes publiques utilisées par l'équipe du Mobiliscope ont cependant l'avantage de permettre que la population présente soit qualifiée selon un grand nombre d'<a href="/fr/info/methods/indicators">indicateurs</a> relatifs au profil socio-démographique des individus (sans passer par exemple par des approximations à partir de l'antenne de résidence des détenteurs de téléphones mobiles), au type d'activités effectuées (travail, études, loisirs etc.) et au mode de transport utilisé pour se rendre à destination. Toutefois, un inconvénient des enquêtes tient au fait que les personnes qui résident <i>en dehors de la zone d'étude</i> ne sont pas interrogées&nbsp;: elles ne sont donc pas prises en compte dans les estimations de la population présente. Un autre inconvénient tient aussi à la date parfois un peu ancienne des enquêtes et au nombre de personnes enquêtées (dont il faut tenir compte quand il s'agit de choisir les unités spatiales dans lesquelles les présences horaires sont calculées). 
		</p>

	</section>

<section>
<h3>Une présence heure par heure</h3>
  
  <p>
		Afin de localiser la population présente dans chaque secteur des villes <b>à chaque heure de la journée</b>, nous avons transformé ces données de <b>déplacements</b> en données de <b>présences</b> &nbsp;:
		
			<ul>
	      <li>L'idée est d'obtenir 24 photographies de la population présente dans les villes <b>à chaque heure "pile"</b> (4h00, 5h00 etc.). Les courtes présences entre deux heures piles ne sont donc pas prises en compte.</li>
				<li> Seuls les déplacements réalisés un <b>jour de semaine</b> (lundi-vendredi) ont été considérés et ont permis de raisonner selon une journée type de semaine.</li>
				<li>Les <b>périodes de déplacement</b> ont été exclues de l'analyse, à l'exception des déplacements réalisés avec un mode de transport doux (marche à pied, vélo etc.). Pour ces déplacements faits à pied ou en vélo, on considère la première moitié du temps de déplacement comme une présence dans le secteur de départ et la seconde moitié comme une présence dans le secteur d'arrivée. Dans les (rares) cas où le déplacement "doux" se produit symétriquement à cheval sur une heure pile, la présence à cette heure précise est localisée dans le secteur où l'enquêté est resté le moins longtemps (car la présence plus longue dans l'autre secteur a une forte probabilité d'être pris en compte à une autre heure).</li>
			</ul>
	</p>

  <p>
		Seules les personnes enquêtées <b>âgées de 16 ans et plus</b> (ou de 15 ans et plus au Québec) sont inclues.
	</p>

	<p>
        Chacune des mesures agrégées par heure et par secteur publiées dans le Mobiliscope est issue d'un redressement pondéré afin de garantir une distribution de la population similaire à celle observée dans le recensement de la population. Des <b>coefficients de pondération</b> ont alors été utilisés.
		
			<ul>
				<li>Dans les villes françaises, cette pondération prend en compte la taille et le type de logement des ménages ainsi que l'âge et le sexe des individus (pour l’Île-de-France, l'occupation et la catégorie socioprofessionnelle des individus sont également considérés).</li>
				<li>Pour les villes québécoises, cette pondération prend uniquement en compte l'âge et le sexe des individus.</li>
				<li>En Amérique latine, les pondérations ne suivent pas toute la même logique. A Bogotá, la pondération a été ajustée sur le nombre de ménages dénombrés par le recensement. A Santiago, la pondération prend en compte la taille et l'équipement en véhicules du ménage ainsi que l'âge et le sexe des individus. A São Paulo, nous n'avons pas d'information sur les données prises en compte dans le coefficient de pondération fourni par les producteurs de l'enquête. </li>
			</ul>

	</p>

	<p>
		Ce sont ces données agrégées et pondérées (qui ne permettent pas la réidentification des personnes enquêtées) qui sont affichées dans le Mobiliscope et qui sont mises à disposition sous <a href="/fr/info/open/license">licence libre</a> (possibilité de les télécharger en cliquant sur le bouton <img src="/dist/assets/download.svg" width="20px" height= "20px"/> au-dessus de la carte centrale).
	</p>
</section>

<section>
 <h3>Secteurs</h3>
	
	<p>
		La superficie des secteurs varie selon la densité de population&nbsp;: ils sont plus petits au cœur des villes et plus étendus en périphérie.
		<ul>
			<li>Pour les villes françaises, les secteurs correspondent à l'unité spatiale minimale pour la diffusion des résultats des enquêtes ménage déplacement. Dans les villes centres, les secteurs correspondent à de <b>grands quartiers</b> (ou des arrondissements pour Paris, Lyon et Marseille). En dehors, les secteurs correspondent à une <b>commune</b> ou à un <b>groupe de communes</b> (si plus de trois communes dans un secteur, le Mobiliscope n'affiche au survol de la souris que le nom des trois communes les plus peuplées).</li>
			<li>Pour les villes québécoises, les secteurs correspondent aux <b>secteurs municipaux</b>.</li>
			<li>Pour l'Amérique latine, les secteurs ont été définis de façon différente&nbsp;:</br>
				<ul style='margin-top: 0px'>
					<li>À Bogotá, les secteurs correspondent à l'unité spatiale minimale pour la diffusion des résultats de l'enquête Origine-Destination (les UTAM). Néanmoins, les fonds cartographiques utilisés dans le Mobiliscope sont ceux retravaillés par Florent Demoraes dans le cadre du projet <a target="_blank" href = "https://modural.hypotheses.org/le-projet">ANR MODURAL</a>, permettant de réajuster les grands secteurs très peu denses aux contours des zones effectivement habitées et enquêtées.</li>
					<li>À Santiago, les secteurs ont été définis par l'équipe du Mobiliscope par regroupement des <i>zonas</i> définies par l'enquête Origine-Destination, selon un objectif en termes de nombre de résident·e·s enquêté·e·s de 16 ans et plus minimal (au moins 100) et en conservant au mieux la cohérence des découpages administratifs et de leur composition sociale. </li>
					<li>À São Paulo, les secteurs ont aussi été définis par l'équipe du Mobiliscope et correspondent aux <b><i>Distritos</i></b> au sein du <i>municipio</i> de São Paulo et, en dehors, aux <b><i>zonas</i></b> définies par l'enquête Origine-Destination.</li>
				</ul>
			</li>
		</ul>
	</p>
	
</section>

<section>
	<p>
		Vous trouverez plus d'information concernant la méthodologie dans l'article <a href = "/pdf/2017_SegregationAroundTheClock.pdf" target="_blank">Social segregation around the clock in the Paris region (France)</a>.
	</p>
</section>

<p>
<button class="style-button mb50"><a href="/fr/info/methods/indicators">Découvrez les indicateurs disponibles</a></button>
</p>



	<h3>Description de chaque enquête</h3>
	<h4>Enquêtés de 15 ans et plus pour le Canada ou de 16 ans et plus pour les autres pays</h4>

	<?php include('data_table.html'); ?>

</div>

<script type="text/javascript">
  $(document).ready(function(){
    $("thead").sticky({topSpacing:62});
  });
</script>

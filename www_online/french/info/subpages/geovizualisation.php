<div class = "corps">

	<section>
    	<h2>Géovisualisation</h2>
	</section>

	<section>
		<h3>Une géovisualisation heure par heure</h3>

		<p>
			Chaque page de géovisualisation correspond au périmètre géographique d'une des enquêtes origine-destination exploitées dans le Mobiliscope et porte le nom de la ville "centre". Les périmètres, dont la taille varie d'une enquête à l'autre - il peut s'agir d'une agglomération urbaine, d'un département ou d'une région -, sont découpés en secteurs qui correspondent soit à des quartiers, soit à des communes, soit à des groupements de communes.
		</p>

		<p>
			Pour chaque ville et leur « région », l'interface est composée de la même façon&nbsp;:
		</p>
	
		<h2>
			<figure class="inline">
				<img src="/dist/assets/interface-fr.png" alt="capture d'écran de l'interface de Paris et sa région" width = "1000"/>
			</figure>
		</h2>

		<p>
			1) Dans le <b>menu des indicateurs</b> (à gauche), l’utilisateur peut choisir d’afficher l'ensemble de la population présente (Global) ou bien de distinguer la population présente selon son profil démographique (Sexe, Groupe d'âge, Composition du ménage), son profil social (Niveau d'éducation, Catégorie socioprofessionnelle, Revenu du ménage et Occupation principale), ou encore selon les caractéristiques de son lieu de résidence (Profil résidentiel). Il est aussi possible d'observer les types d’activités réalisées par la population présente dans chacun des secteurs à une heure choisie, ainsi que le mode de transport utilisé pour se rendre à destination.
		</p>

		<p>
			2) Au centre de l’écran, une <b>carte</b> s’affiche selon l’indicateur choisi dans le menu. La carte est dynamique&nbsp;: on peut la zoomer, s’y déplacer, afficher le nom des secteurs au survol de la souris. Pour se repérer plus facilement, des couches Open Street Map plus ou moins détaillées ou des photographies aériennes peuvent être affichées.
		</p>

		<p>
			3) Dans la partie droite de l’écran, un <b>premier graphique</b> (en haut) permet d’afficher des informations détaillées pour le <b>secteur sélectionné sur la carte</b> et de suivre l’évolution au cours de la journée de la distribution de la population présente dans ce secteur (en nombre ou en proportion). Un <b>second graphique</b> (en bas) renseigne sur l'intensité de la <b>ségrégation dans l'ensemble de la région</b> aux différentes heures de la journée.</br>
		</p>

		<p>
			4) Enfin, l'<b>axe des heures</b> positionné au dessus de la carte permet d’animer l'ensemble heure par heure. 
		</p>

		<p>
			Pour les informations (carto)graphiques relatives à un indicateur donné, un même code couleur a été choisi. Les nuanciers ont été construits grâce à l'application <a target="_blank"  href = "http://www.geotests.net/couleurs/gradients_inflex_en.html">color gradients explorer</a>.
		</p>
	</section>

	<section>
		<h3>Carte centrale</h3>

		<p>
		Trois <b>modes de représentation cartographique</b> sont proposés pour la carte centrale.</br>
		
		Les données utilisées pour les cartes sont mises à disposition sous licence libre et peuvent être <b>téléchargées</b> en cliquant sur le bouton <img src="/dist/assets/download.svg" width="20px" height= "20px"/></span> à côté du titre de la carte. Plus d'infos <a href="/fr/info/open/license">ici</a>.
		</p>

		<section>
			<h4>Carte choroplèthe</h4>
			
			<figure >
				<img src="/dist/assets/choro.png" alt="extrait carte choroplèthe" />
			</figure>

	    	<p>
	    		Ce type de carte permet de représenter en applat de couleurs la <b>proportion (%)</b> estimée de personnes (pour un groupe donné) présentes par secteur et à une heure donnée. Pour la <i>population totale</i>, la carte affiche la <b>densité</b>, exprimée en nombre de personnes par km². </br>

	    		La légende est construite en cinq classes (huit classes pour la densité de population) dont les <b>bornes restent fixes au cours de la journée dans une région donnée</b> . Différentes <b>méthodes de discrétisation</b> sont utilisées pour définir ces classes&nbsp;: 

				<ul>
					<li>
						Pour la majorité des indicateurs (<i>Groupe d'âge</i>, <i>Composition du ménage</i>, <i>Niveau d'éducation</i>, <i>Catégorie socioprofessionnelle</i>, <i>Informalité professionnelle</i>, <i>Occupation principale</i>, <i>Strate socio-économique</i>, <i>Statut d'occupation du logement</i> et <i>Mode de transport</i>), une discrétisation en <b>quintiles</b> est utilisée&nbsp;: chaque classe regroupe 20% des secteurs de la région considérée sur les 24h de la journée. La distribution étant différente d'une région à l'autre, les bornes de classes varient également d'une région à l'autre.
					</li>

					<li>
						Une discrétisation en <b>amplitude égale</b> est choisie pour quatre indicateurs&nbsp;: <i>Résidant dans/hors du secteur</i>, <i>Sexe</i>, <i>Quartiers Prioritaires en Politique de la ville - QPV</i>, et <i>Revenu du ménage</i>. Pour l'indicateur <i>Résidant dans/hors du secteur</i>, la légende est identique pour toutes les régions du Mobiliscope et pour les deux modalités car les distributions s'étendent toujours entre 0% et 100% (de résident·e·s ou de non-résident·e·s). Pour les trois autres indicateurs, les bornes de classes diffèrent d'une région à l'autre en raison des distributions statistiques très variables d'une région à l'autre. 
					</li>

					<li>
						Une discrétisation en <b>seuils naturels</b> (Jenks) est utilisée pour les indicateurs <i>Zone/Couronne de résidence</i>, <i>Département de résidence</i> (Île-de-France) et <i>Activité</i> à partir de la distribution des données de chaque région. Les bornes de classes varient donc selon la région observée.
					</li>

					<li>
						Pour l'indicateur <i>Population totale</i>, une discrétisation en huit classes selon la méthode des <b>moyennes emboîtées</b> a été choisie pour représenter les densités de population au sein d'une région donnée. Là encore, les bornes de classe sont propres à chaque région.
					</li>
				</ul>

				</br>Les discrétisations sont calculées au chargement des cartes avec la librairie <a href = "https://github.com/simogeo/geostats" target="_blank" >geostats.js</a>, à l'exception du calcul des moyennes emboîtées qui a été codé par l'équipe du Mobiliscope. 
			</p>
		</section>

		<section>
			<h4>Carte en cercles proportionnels</h4>

			<figure >
				<img src="/dist/assets/prop.png" alt="extrait carte en cercles proportionnels" />
			</figure>

			<p>
				Ce type de carte permet de représenter le <b>nombre</b> estimé de personnes (d'un groupe donné) présentes par secteur. La taille des cercles est proportionnelle au stock de personnes présentes dans les secteurs. La proportionnalité des cercles est rigoureusement similaire pour toutes les cartes d'une même région et à toute heure mais elle peut varier selon la région observée.
			</p>

		</section>

		<section>
			<h4>Carte en cercles proportionnels et en oursins</h4>

			<figure >
				<img src="/dist/assets/flow.png" alt="extrait carte en oursins" />
			</figure>

			<p>
				Ce type de carte permet de représenter le <b>nombre</b> estimé de personnes présentes <b>qui résident en dehors du secteur</b>. La taille des cercles est proportionnelle au stock de personnes présentes "non résidentes". La proportionnalité des cercles est rigoureusement similaire pour toutes les cartes d'une même région et à toute heure (elle peut varier selon la région observée). Pour éviter toute redondance, ce mode de représentation n'est pas disponible pour l'indicateur <i>Résidant dans/hors du secteur</i>, ni pour la modalité "à la maison" de l'indicateur <i>Activité</i>.
			</p>
			<p>
				Pour ce mode de représentation, les liens qui s'affichent au survol de la souris, correspondent aux <b>principaux</b> secteurs de résidence des personnes présentes dans le secteur selectionné. Pour des raisons de confidentialité et de puissance statistique, nous avons appliqué un seuil de 6 personnes (en donnée brute non pondérée) en deçà duquel nous ne représentons pas les liens entre le secteur de résidence et le secteur de présence. L'épaisseur des liens est similaire pour toutes les cartes d'une même région et à toute heure (mais peut varier en fonction de la région observée). 
			</p>
		</section>
	</section>

	<section>
	<h3>Graphiques</h3>
	
		<section>
			<figure >
				<img src="/dist/assets/t1-fr.png" alt="image du titre du graphique du haut" />
			</figure>

			<p>
				Le graphique du haut montre heure par heure l'évolution de la population présente (en nombre ou en pourcentage) dans le secteur sélectionné (par un clic sur la carte centrale). Ce graphique se décline en deux modes&nbsp;: affichage d'une seule modalité ("simple") ou affichage de l'ensemble des modalités d'un indicateur ("empilé").
			</p>
		</section>

		<section>
			<figure >
				<img src="/dist/assets/t2-fr.png" alt="image du titre du graphique du bas" />
			</figure>

			<p>
				Le graphique du bas propose deux mesures de la ségrégation pour l'ensemble des secteurs de la région. Ces mesures de la ségrégation sont calculées pour chacune des heures de la journée.
				<ul>
					<li>
						L'indice de dissimilarité de <b>Duncan</b> mesure l'ampleur de la ségrégation d'un groupe d'individus dans l'espace. Il varie entre 0 (ségrégation minimale) et 1 (ségrégation maximale). Il exprime la proportion d'individus de ce groupe qui devraient changer de secteur si on voulait que la proportion des individus de ce groupe soit la même dans tous les secteurs de la région. Lorsque cet indice est utilisé pour mesurer la ségrégation d'une population divisée en deux groupes uniquement (par exemple hommes et femmes), les valeurs de cet indice sont les mêmes pour chacun des deux groupes.
					</li>
					<li>
						L'indice de <b>Moran</b> mesure la corrélation entre les valeurs des secteurs spatialement proches (<i>i.e.</i> autocorrelation spatiale). Il permet de voir si les secteurs proches les uns des autres ont tendance à avoir une composition sociale semblable (autocorrélation positive) ou au contraire une composition sociale différente (autocorrélation negative). L'indice de varie de -1 (autocorrélation négative) à 1 (autocorrélation positive), une valeur autour de zéro indiquant une absence de structure spatiale. 
					</li>
				</ul>
			<p>
				Dans les graphiques de Duncan et de Moran, les valeurs minimum et maximum sont les mêmes pour toutes les modalités d'un même indicateur afin de permettre la comparaison. De plus, l'amplitude entre le minimum et le maximum ne peut pas être en deçà de 0,4 pour ne pas donner trop d'importance à d'éventuelles variations mineures dans la structure spatiale.
			</p>

			<p>
				Les indices de Duncan et de Moran sont respectivement calculés avec les librairies <a href="https://mran.microsoft.com/snapshot/2018-04-05/web/packages/OasisR/index.html" target="_blank">OasisR</a> et <a href="https://cran.r-project.org/web/packages/spdep/index.html" target="_blank">spdep</a> du logiciel R. 
			</p>
				
			<p>
				Les données de ségrégation affichées dans le Mobiliscope sont mises à disposition sous licence libre et peuvent être <b>téléchargées en cliquant sur le bouton <img src="/dist/assets/download.svg" width="20px" height= "20px"/></span> à côté de leur graphique. Plus d'infos <a href="/fr/info/open/license">ici</a>.
			</p>
		</section>
		
	</section>

</div>

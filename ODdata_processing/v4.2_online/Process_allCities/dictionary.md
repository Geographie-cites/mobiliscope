# General information
	v4.2 
		Numéro de version|Version number|Número de versión
	
	12/04/2023
		Date de la dernière mise à jour|Date of last update|Fecha de última actualización
	
	Pour plus de détails - www.mobiliscope.cnrs.fr/fr/info/methods/indicators
	More information - www.mobiliscope.cnrs.fr/en/info/methods/indicators
	Para más información - www.mobiliscope.cnrs.fr/es/info/methods/indicators

# Files (.geojson & .csv)
	'city region'_secteurs.geojson
		Couche géographique (WGS84) des secteurs de la région considérée (avec ID secteur)
		District geographic layer (WGS84) for the city region under consideration (with District ID)
		Capa geográfica (WGS84) de los sectores de una región (con ID sector)

	'city region'_'variable'_Duncan.csv
		Pour toute la région et par heure: indice de dissimilarité de Duncan pour chaque groupe
		For the whole region and per hour: Duncan Index of dissimilarity for each group
		Para toda la región y por hora: índice de disimilitud de Duncan para cada grupo

	'city region'_'variable'_Moran.csv
		Pour toute la région et par heure: indice d’autocorrélation spatiale de Moran pour chaque groupe
		For the whole region and per hour: spatial autocorrelation Moran's Index for each group
		Para toda la región y por hora: índice de autocorrelación espacial de Moran para cada grupo

	'city region'_'variable'_prop_stacked.csv	
		Par secteur et par heure: nombre pondéré de personnes de chaque groupe
		Per district and per hour: weighted number of people in each group
		Por sector y por hora: número ponderado de personas en cada grupo

	'city region'_'variable'_flow_stacked.csv
		Par secteur et par heure: nombre pondéré de personnes (résidant hors du secteur) de chaque groupe
		Per district and per hour: weighted number of people (residing outside the district) in each group
		Por sector y por hora: número ponderado de personas (residente fuera del sector) en cada grupo
	
	'city region'_'variable'_choro_stacked.csv
		Par secteur et par heure: proportion pondérée (%) de personnes de chaque groupe, par rapport à la population totale
		Per district and per hour: weighted proportion (%) of people in each group, compared to the whole population
		Por sector y por hora: proporción ponderada (%) de personas en cada grupo, en comparación con la población total

	'city region'_pop_choro_stacked.csv
		Par secteur et par heure: nombre pondéré de personnes par km² (seulement pour la population totale)
		Per district and per hour: weighted number of people per km² (only for the whole population)
		Por sector y por hora: número ponderado de personas por km² (sólo para la población total)


# Variables (& groups)
	hour	Heure (4am; 5am…., 3am)|Hour (4am; 5am…., 3am)|Hora (4am; 5am…., 3am)|

	district	ID secteur|District ID|ID sector|

	pop 	Population totale|Whole population|Población total|
		pop0 	population totale|Whole population|Población total|

	res 	Résidant dans/hors du secteur|Residing in/out the district |Residente en/fuera del sector|
		res1 	hors du secteur|outside the district|fuera del sector|
		res2 	dans le secteur|in the district|en el sector|

	age 	Groupe d’âge (pour la France et l'Amérique latine)|Age group (for France and Latin America)|Grupo de edad (para Francia y América Latina)|
		age1 	entre 16 et 24 ans|between 16 and 24 years old (between 15 and 24 years old for Canada)|16 y 24 años (16 y 24 años sólo para Canadá)|
		age2 	entre 25 et 34 ans|between 25 and 34 years old|25-34 años|
		age3 	entre 35 et 64 ans|between 35 and 64 years old|35 a 64 años|
		age4 	65 ans et plus|65 years old and more|65 años o más|

	ageqc 	Groupe d’âge (pour le Canada)|Age group (for Canada)|Grupo de edad (para Canadá)|
		ageqc1 	entre 15 et 24 ans|between 15 and 24 years old|15 y 24 años|
		ageqc2 	entre 25 et 34 ans|between 25 and 34 years old|25-34 años|
		ageqc3 	entre 35 et 64 ans|between 35 and 64 years old|35 a 64 años|
		ageqc4 	65 ans et plus|65 years old and more|65 años o más|

	sex 	Sexe|Sex|Sexo|
		sex1 	hommes|male|hombres|
		sex2 	femmes|female|mujeres|

	strmfr Composition du ménage (pour la France)|Household composition (for France)|Composición del hogar (para Francia)|
		strmfr1 	ménage d'une personne|single-person household|persona sola|
		strmfr2 	couple sans enfant|couple without children|pareja sin niño|
		strmfr3 	ménage (hors couple) sans enfant|household (excluding couple) without children|hogar (excepto pareja) sin niño|
		strmfr4 	ménage avec enfant|household with children|hogar con niño |

	strmqc Composition du ménage (pour le Canada)|Household composition (for Canada)|Composición del hogar (para Canadá)|
		strmqc1 	ménage d'une personne|single-person household|persona sola|
		strmqc2 	ménage sans enfant|household without children|hogar sin niño|
		strmqc3 	ménage avec enfant|household with children|hogar con niño |

	strm 	Composition du ménage (pour l'Amérique latine)|Household composition (for Latin America)|Composición del hogar (para América Latina)|
		strm1 	ménage d'une personne|single-person household|persona sola|
		strm2 	famille sans enfant|family without children|familia sin niño|
		strm3 	ménage complexe sans enfant|complex household without children|hogar compuesto sin niño|
		strm4 	famille avec enfant|family with children|familia con niño|
		strm5 	ménage complexe avec enfant|complex household with children|hogar compuesto con niño|

	cleduc 	Niveau d’éducation de l’individu (pour la France et l'Amérique latine)|Individual educational level (for Fance and Latin America)|Nivel educativo del individuo (para Francia y América Latina)|
		cleduc1 	faible|low|bajo|
		cleduc2 	intermédiaire|middle|medio|
		cleduc3 	élevé|high|alto|
		cleduc4 	très élevé|very high|muy alto|

	educmen 	Niveau d’éducation du ménage (pour la France et l'Amérique latine)|Household educational level (for France and Latin America)|Nivel educativo del hogar (para Francia y América Latina)|
		educmen1 	faible|low|bajo|
		educmen2 	intermédiaire|middle|medio|
		educmen3 	élevé|high|alto|
		educmen4 	très élevé|very high|muy alto|

	rev 	Revenu du ménage (pour Paris et sa région)|Household income (Paris region)|Ingresos de los hogares (sólo para París y su región)|
		rev1 	faible|low|bajo|
		rev2 	intermédiaire - tranche inférieure|middle-low|medio-bajo|
		rev3 	intermédiaire - tranche supérieure|middle-high|medio-alto|
		rev4 	élevé|high|alto|

	revqc 	Revenu du ménage (pour le Canada )|Household income (for Canada)|Ingresos de los hogares (sólo para Canadá)|
		revqc1 	faible|low|bajo|
		revqc2 	intermédiaire - tranche inférieure|middle-low|medio-bajo|
		revqc3 	intermédiaire - tranche supérieure|middle-high|medio-alto|
		revqc4 	élevé|high|alto|
		revqc5 	inconnu|missing|no informa|

	reval 	Revenu du ménage (pour l'Amérique latine)|Household income (for Latin America)|Ingresos de los hogares (sólo para América Latina)|
		reval1 	très faible|very low|muy bajo|
		reval2 	faible|low|bajo|
		reval3 	intermédiaire|intermediate|medio|
		reval4 	élevé|high|alto|
		reval5 	très élevé|very high|muy alto|

	cs 	Catégorie socioprofessionnelle de l’individu (pour la France)|Individual socioprofessional status (for France)|Categoría socioprofesional del individuo (para Francia)|
		cs1 	personnes inactives|inactive|inactivo·a·s|
		cs2 	ouvriers et ouvrières|workers|obrero·a·s|
		cs3 	employé·e·s|employees|empleado·a·s|
		cs4 	catégories intermédiares|intermediate occupations |categorías intermedias |
		cs5 	cadres et professions intellectuelles supérieures|managers and higher intellectual professionals|directivo·a·s y profesionales|

	cspmen 	Catégorie socioprofessionnelle du ménage (pour la France)|Household socioprofessional status (for France)|Categoría socioprofesional del hogar (para Francia)|
		cspmen1 	personnes inactives|inactive|inactivo·a·s|
		cspmen2 	ouvriers et ouvrières|workers|obrero·a·s|
		cspmen3 	employé·e·s|employees|empleado·a·s|
		cspmen4 	catégories intermédiares|intermediate occupations |categorías intermedias |
		cspmen5 	cadres et professions intellectuelles supérieures|managers and higher intellectual professionals.|directivo·a·s y profesionales|

	cso 	Catégorie socioprofessionnelle des personnes actives (pour l'Amérique latine)|Socioprofessional status of active population (for Latin America)|Categoría socio-ocupacional del activo·a (para América Latina)|
		cso1 	avec un travail non qualifié|unskilled workers|trabajadores no cualificados|
		cso2 	avec un travail qualifié|skilled workers|trabajadores cualificados|
		cso3 	indépendant·e·s|self-employed|independientes|
		cso4 	cadres et professions intellectuelles|executives and professionals|directivo·a·s y profesionales|

	inf 	Informalité professionnelle des personnes actives (pour Bogotá et São Paulo)|Professional informality of active population (for Bogotá and São Paulo)|Informalidad laboral del activo·a (sólo para Bogotá y São Paulo)|
		inf1 	avec emploi formel|formal workers|con empleo formal|
		inf2 	avec emploi informel|informal workers| con empleo informal|

	occ 	Occupation principale|Occupational status|Principal ocupación|
		occ1 	personnes actives|active|activo·a·s|
		occ2 	étudiant·e·s|student|estudiantes|
		occ3 	sans emploi|unemployed|desempleado·a·s|
		occ4 	retraité·e·s|retired|jubilado·a·s|
		occ5 	personnes inactives|inactive|inactivo·a·s|

	resarea 	Résidence selon le zonage en aires urbaines. Cf. ZAU, 2010 (pour la France)|Residential location in urban/peripheral rings (for France)|Residencia según la Zonificación en Areas Urbanas (ZAU, 2010) - para Francia|
		resarea1 	zone périphérique|suburban/peripheral area|zona periférica|
		resarea2 	zone urbaine|urban area|zona urbana|
		resarea3 	ville centre de l’enquête|central city of the survey|ciudad central de la encuesta|

	zona 	Couronne de résidence (pour l'Amérique latine)|Residential location in the urban/peripheral rings (for Latin America)|Anillo de residencia (para América Latina)|
		zona1 	périphérie lointaine|distant periphery|periferia lejana|
		zona2 	périphérie proche|close periphery|periferia cercana|
		zona3 	péricentre|pericenter|pericentro|
		zona4	centre|center|centro|

	qpv 	Résidence dans/hors QPV - Quartiers Prioritaires en Politique de la Ville (pour la France – sauf Annecy et sa région)|Residential location in/outside ‘Poverty Areas’ (For France only – except Annecy region)|Residencia dentro/fuera de QPV (Quartiers Prioritaires en Politique de la Ville). Para Francia - excepto Annecy y su región|
		qpv1 	hors QPV|outside QPV|fuera QPV|
		qpv2 	dans QPV|inside QPV|dentro QPV|

	dep 	Département de résidence (pour Paris et sa région)|Departement of residence (for Paris region)|Departamento de residencia (para París y su región)|
		dep1 	Paris|Paris|París|
		dep2 	Seine-St-Denis|Seine-St-Denis|Seine-St-Denis|
		dep3 	Val-de-Marne|Val-de-Marne|Val-de-Marne|
		dep4 	Hauts-de-Seine|Hauts-de-Seine|Hauts-de-Seine|
		dep5 	grande couronne|greater Paris|Gran París|

	sse 	Strate socio-économique de résidence (pour Bogotá).|Socio-economic stratum of residence (for Bogotá only)|Estrato socioeconómico de residencia (sólo para Bogotá)|
		sse1 	strate 1 ou non stratifié|stratum 1 or not stratified|estrato 1 o sin estrato|
		sse2 	strate 2|stratum 2|estrato 2|
		sse3 	strate 3|stratum 3|estrato 3|
		sse4 	strate 4, 5 et 6|stratum 4, 5 or 6|estrato 4, 5 y 6|

	log 	Statut d'occupation du logement (pour l'Amérique latine)|Housing tenure (for Latin America)|Situación de la tenencia de la vivienda (para América Latina)|
		log1 	personnes hébergées|rent-free tenants|personas albergadas|
		log2 	locataires|tenants|arrendatario·a·s|
		log3 	propriétaires|owners|propietario·a·s|

	act 	Lieux d'activité|Activity places|Lugares de actividades|
		act1 	à domicile|at home|en casa|
		act2 	travail|working|trabajo|
		act3 	études|studying|estudios|
		act4 	achats|shopping|compras|
		act5 	loisirs|leisure|recreo|
		act6 	démarches administratives/personnelles (pour l'Amérique latine)|admin./personal tasks (for Latin America)|tramite administrativo/personal (sólo para América Latina)|

	mode 	Dernier mode (principal) de transport utilisé|Last mode of transport which has been used to reach destination|Último medio de transporte utilizado|
		mode1 	transports collectifs|collective transportation|transporte colectivo|
		mode2 	véhicule motorisé individuel|individual motor vehicle|vehículo motorizado individual|
		mode3 	mode doux (marche à pied, vélo etc.)|soft mobility (walking, cycling ...)|modo suave (caminar, bicicleta, etc.)|
		mode4 	TransMilenio (pour Bogotá)|TransMilenio (for Bogotá only)|TransMilenio (sólo en Bogotá)|

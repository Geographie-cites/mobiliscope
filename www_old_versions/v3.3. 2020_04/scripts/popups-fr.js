// Indicators

// Whole population
function popup_pop0(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Population présente</h3><p>Nous avons utilisé les données relatives aux <strong>enquêtés</strong> âgés de 16 ans et plus.</p><p>Seuls les <strong>déplacements en semaine</strong> (du lundi au vendredi) ont été pris en considération.</p>" );	
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// DEMO PROFILE - Age groups
function popup_age(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Groupes d'âge</h3><p>Quatre groupes d'âge ont été considérés: 16-24 ans; 25-34 ans; 35-64 ans; 65 ans et plus.</p></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// DEMO PROFILE - sex
function popup_sex(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Sexe</h3><p>Femmes et hommes.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// SOCIAL PROFILE - individual educational level
function popup_cleduc(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Niveau individuel d'éducation</h3><p>À partir du dernier diplôme obtenu déclaré par les enquêtés, nous avons distingué quatre groupes:<ul><li>Faible (collège ou moins);</li><li>Intermédiaire (secondaire, BEP ou CAP sans Bac);</li><li>Élevé (Bac à Bac + 2);</li><li>Très élevé (Bac + 3 et plus).</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household educational level
function popup_educmen(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Niveau d'éducation du ménage</h3><p>À partir du dernier diplôme obtenu déclaré par les enquêtés, nous avons attribué le niveau d'éducation le plus bas du ménage à l'ensemble des adultes qui le compose.</p><p>Nous avons distingué quatre groupes : <ul><li>Faible (collège ou moins);</li><li>Intermédiaire (secondaire, BEP ou CAP sans Bac);</li><li>Élevé (Bac à Bac + 2);</li><li>Très élevé (Bac + 3 et plus).</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// SOCIAL PROFILE - Household income 
// Ce pop-up est seulement pour Paris et les villes canadiennes
function popup_rev_fr(){
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Revenu du ménage</h3><p>Les revenus mensuels des membres du ménage ont été divisés par le nombre d'adultes et d'enfants du ménage pour obtenir les revenus du ménage par unité de consommation (UC). </p><p>Quatre groupes de revenus ont été distingués:<ul><li>Très faibles (< 1084€/UC);</li><li>Faibles (1084-1806€/UC);</li><li>Elevés (1806-2890€/UC);</li><li>Très élevés (>2890€/UC).</li></ul></p><p>Les intervalles ont été définis selon le revenu médian en Île-de-France (égal à 1806€/UC en 2010). Le premier seuil (1084€/UC) ou \"seuil de pauvreté\" correspond à 60 % du revenu médian; le second (1806€/UC) correspond au revenu médian; le troisième (2890€/UC) correspond à 160 % du revenu médian.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

function popup_rev_can(){
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Revenu du ménage</h3></p><p>Les revenus annuels du ménage ont été divisés par le nombre d'adultes et d'enfants vivant dans le ménage. Cinq groupes de revenus ont été distingués:<ul><li>Faibles (< 19669$/an);</li><li>Intermédiaires (19669-39337$/an);</li><li>Élevés (39337-68840$/an);</li><li>Très élevés (>68840$/an);</li>;<li>Inconnus (non renseignés par les participants);</li></ul></p><p>Ces intervalles ont été définis selon le revenu médian au Québec pour un ménage d'une personne (égal à 39337$/an en 2015). Le premier seuil (19669$/an) ou \"Mesure de Faible Revenu\" (MFR) correspond à 50 % du revenu médian ; le second (39337$/an) correspond au revenu médian ; le troisième (68840$/an) correspond à 175 % du revenu médian.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
 }

// SOCIAL PROFILE - individual socioprofessional status 
function popup_cs(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Catégorie socioprofessionnelle (CSP) individuelle</h3><p>La population a été divisée en cinq groupes :<ul><li>Inactifs (chômeurs de longue durée, femmes au foyer) ;</li><li>Ouvriers ;</li><li>Employés ;</li><li>Intermédiaire (professions intermédiaires ; artisans, commerçants et employeurs de plus de dix employés ; agriculteurs exploitants) ;</li><li>Cadres et professions intellectuelles.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// SOCIAL PROFILE - household socioprofessional status 
function popup_cspmen(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Catégorie socioprofessionnelle (CSP) du ménage</h3> Nous avons attribué la CSP la plus basse du ménage à l'ensemble des adultes qui le compose.</p><p>Nous avons distingué cinq groupes : <ul><li>Inactifs (chômeurs de longue durée, femmes au foyer) ;</li><li>Ouvriers ;</li><li>Employés ;</li><li>Intermédiaire (professions intermédiaires ; artisans, commerçants et employeurs de plus de dix employés ; agriculteurs exploitants) ;</li><li>Cadres et professions intellectuelles.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// SOCIAL PROFILE - Occupational status
function popup_occ(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Occupation principale</h3><p>Cinq groupes: Inactifs; Retraités; Sans emploi; Étudiant; Actifs. </p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// RESIDENTIAL AREA - residential area 
function popup_resarea(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Typolologie urbaine</h3><p>Les secteurs de résidence ont été divisés en 3 groupes :<ul><li>Le premier correspond à la ville centre (administrative) en charge de l'enquête origine-destination.</ul></li><ul><li>\"Zone urbaine\" correspond aux secteurs appartenant à un grand, moyen ou petit pôle urbain tel que défini par le Zonage en Aire Urbaine - ZAU (2010) de l'INSEE.</ul></li><ul><li>La \"zone périphérique\" regroupe les secteurs restants.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// RESIDENTIAL AREA - departement of residence
// ce pop-up est seulement pour Paris
function popup_dep(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Département de résidence</h3><p>En Île-de-France, cinq groupes:<ul><li>Grande couronne (Essonne + Seine-et-Marne + Yvelines + Val-d'Oise);</li><li>Hauts-de-Seine;</li><li>Val-de-Marne;</li><li>Seine-Saint-Denis;</li><li>Paris.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// ACTIVITY/TRAVEL BEHAVIOUR - Activity type
function popup_act(){

	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Activité réalisée</h3><p>Ces informations sont issues des motifs de déplacements.</p><p>Cing groupes d'activités ont été considérés, en agrégeant les catégories d'origine : À la maison; Au travail; Études; Achats; Loisirs (activités récréatives, culturelles ou sportives, visites à des proches).</p><p>Nous avons exclu les \"activités non spécifiées\" et les \"activités d'accompagnement\" trop peu fréquentes pour être analysées à part, et trop spécifiques pour être regroupées avec les autres types d'activités.</p>" ) ;
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// ACTIVITY/TRAVEL BEHAVIOUR - travel mode
function popup_mode(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Dernier mode de transport utilisé</h3><p>Nous avons distingué trois modes de transport : <ul><li>Mobilité douce (marche à pied, vélo ...);</li><li> Véhicule motorisé privé (deux roues motorisés, véhicule d'entreprise, taxi etc.);</li><li> Transports publics.</li></ul></p><p>Il s'agit du mode de tranport principal utilisé pour se rendre à destination. Dans les enquêtes francaises et québecoises, si plusieurs modes de transport ont été utilisés au cours d'un même déplacement, le mode principal est établi en donnant la priorité aux modes motorisés par rapport aux modes doux (marche à pied, vélo). Ainsi, un trajet au cours duquel l’individu aurait par exemple utilisé la voiture et la marche à pied sera classé comme un déplacement fait principalement en voiture.</p><p>Il s'agit du mode princiapl de transport utilisé lors du dernier déplacement. Ce déplacement peut avoir eu lieu plus ou moins récemment. Prenons l’exemple d’un individu qui a utilisé les transports publics à 19h pour se rendre à son domicile où il reste toute la nuit. A minuit dans le secteur de son domicile, cet individu fait partie de la population présente qui a utilisé les transports publics comme dernier mode de déplacement.. </p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}


// Other popups

function popup_mapTitle1(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Population estimée (nombre et pourcentage)</h3><p>Les proportions/nombres de personnes par secteur et par heure sont des estimations. Elles sont donc soumises à une <strong>marge d’erreur statistique</strong>.</p><p>Les valeurs publiées dans le Mobiliscope ont été estimées en prenant en compte les coefficients de pondération des personnes enquêtées.<ul><li>Pour <b>l'Île-de-France</b> (EGT, 2010): <p> Les pondérations ont été calculées au niveau des individus et des ménages afin de garantir pour chaque secteur une distribution des ménages (taille et type de logement) et des individus (âge, sexe, occupation et catégorie socioprofessionnelle) similaire à celle observée dans le recensement de population de 2008.</p></li><li>Pour les autres <b>villes françaises</b> (EMD):<p> Les pondérations ont été calculées afin de garantir pour chaque secteur une distribution des ménages (taille) et des individus (âge) similaire à celle observée dans les recensements de population.</p></li><li>Pour les <b>villes québécoises</b> (EOD):<p> Les coefficients de pondération ont été calculés par rapport à la population totale des individus par cohorte d’âge et de sexe, à partir des données de recensement 2011.</p></li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_mapTitle2(){
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Secteurs</h3><p>La superficie des secteurs varie selon la densité de population : ils sont plus petits au coeur des villes et plus étendus en périphérie.<ul><li>Pour les <b>villes françaises</b>, les secteurs correspondent à l'unité spatiale minimale pour la diffusion des résultats des enquêtes ménage-déplacement. Dans les villes centres, les secteurs correspondent à de grands quartiers (ou des arrondissements pour Paris, Lyon et Marseille). En dehors, les secteurs correspondent à une commune ou à un groupe de communes (si plus de trois communes dans un secteur, le Mobiliscope n'affiche au survol de la souris que le nom des trois communes les plus peuplées).</li></br><li>Pour les villes <b>canadiennes</b>, les secteurs correspondent aux secteurs municipaux.</li></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_segreg(){
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Mesures de distribution spatiale dans l'ensemble de la zone enquêtée</h3><p>Les calculs ont été effectués pour chaque heure (de 4h du matin à 3h du matin) en prenant en compte les coefficients de pondération.</p><p>Deux indices ont été mobilisés :<ul><li><strong>L'indice de dissimilarité de Duncan</strong> informe sur la dispersion de chaque groupe de population à travers les unités spatiales. Il est communément utilisé pour mesurer la ségrégation entre deux groupes (par exemple population noire et population blanche) mais peut aussi être utilisé pour un indicateur divisé en plus de deux groupes. Dans ce cas, l'indice de Duncan exprime la proportion d'individus d'un groupe donné qu'il faudrait déplacer pour avoir une égale répartition du groupe par rapport à la population totale.</li><li><strong>L'indice de Moran</strong> est une mesure d'autocorrélation spatiale. Il varie de -1 (dispersion parfaite du groupe dans l'espace observé) à 1 (concentration parfaite du groupe dans l'espace observé) ; 0 indique une absence de structure spatiale.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_source_fr(){
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>Le Mobiliscope utilise les données issues des Enquêtes Ménages Déplacements - EMD (CEREMA), dont la grande majorité est disponible via l'ADISP (Archives de Données Issues de la Statistique Publique).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_source_can(){
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>Le Mobiliscope québecois utilise les données des Enquêtes Origine-Destination fournies par le Ministère des Transports du Québec.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}
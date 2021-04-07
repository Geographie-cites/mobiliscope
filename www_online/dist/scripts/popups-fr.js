// Indicators

$(document).mouseup(function (e)
{

var container = $("#popup");

if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
{
    container.css("display", "none") ;
		$(".popup-container").css("display", "none") ;
}
});

// Whole population
function popup_pop0(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Population présente</h3><p>La <span style='color:" + gammePop[0] + "'><strong>population totale</strong></span> concerne tous les enquêtés <b>âgés de 16 ans et plus</b>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// Resident population
function popup_respop(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Population résidente</h3><p>La population présente dans chaque secteur a été divisée en deux groupes selon leur secteur de résidence : <ul><li>personnes <span style='color:" + gammeRespop[1] + "'><strong>résidentes</strong></span> du secteur ;</li><li>personnes <span style='color:" + gammeRespop[0] + "'><strong>non-résidentes</strong></span> du secteur.</li>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// DEMO PROFILE - Age groups
function popup_age(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Groupes d'âge</h3><p>Quatre groupes d'âge ont été considérés : <span style='color:" + gammeAge[0] + "'><strong>16-24 ans</strong></span> ; <span style='color:" + gammeAge[1] + "'><strong>25-34 ans</strong></span> ; <span style='color:" + gammeAge[2] + "'><strong>35-64 ans</strong></span> et <span style='color:" + gammeAge[3] + "'><strong>65 ans et plus</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// DEMO PROFILE - sex
function popup_sex(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Sexe</h3><p><span style='color:" + gammeSex[1] + "'><strong>Femmes</strong></span> et <span style='color:" + gammeSex[0] + "'><strong>hommes</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - individual educational level
function popup_cleduc(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Niveau individuel d'éducation</h3><p>À partir du dernier diplôme obtenu déclaré par les enquêtés, nous avons distingué quatre <strong>niveaux d'éducation</strong> :<ul><li><span style='color:" + gammeSP[0] + "'><strong>Faible</strong></span> (collège ou moins) ;</li><li><span style='color:" + gammeSP[1] + "'><strong>Intermédiaire</strong></span> (secondaire, BEP ou CAP sans Bac) ;</li><li><span style='color:" + gammeSP[2] + "'><strong>Élevé</strong></span> (Bac à Bac + 2) ;</li><li><span style='color:" + gammeSP[3] + "'><strong>Très élevé</strong></span> (Bac + 3 et plus).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household educational level
function popup_educmen(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Niveau d'éducation du ménage</h3><p>À partir du dernier diplôme obtenu déclaré par les enquêtés, nous avons attribué le <strong>niveau d'éducation le plus bas du ménage</strong> à l'ensemble des adultes qui le compose.</br>Nous avons distingué quatre groupes : <ul><li><span style='color:" + gammeSP[0] + "'><strong>Faible</strong></span> (collège ou moins) ;</li><li><span style='color:" + gammeSP[1] + "'><strong>Intermédiaire</strong></span> (secondaire, BEP ou CAP sans Bac) ;</li><li><span style='color:" + gammeSP[2] + "'><strong>Élevé</strong></span> (Bac à Bac + 2) ;</li><li><span style='color:" + gammeSP[3] + "'><strong>Très élevé</strong></span> (Bac + 3 et plus).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - Household income
// Ce pop-up est seulement pour Paris et les villes canadiennes
function popup_rev_idf(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Revenu du ménage</h3><p>Les <strong>revenus</strong> mensuels des membres du ménage ont été divisés par le nombre d'adultes et d'enfants du ménage pour obtenir les revenus du ménage par unité de consommation (UC).</br>Quatre classes de revenu ont été créées:<ul><li><span style='color:" + gammeRev_fr[0] + "'><strong>Faible</strong></span> (<1084€/UC);</li><li><span style='color:" + gammeRev_fr[1] + "'><strong>Intermédiaire, tranche inférieure</strong></span> (1084-1806€/UC);</li><li><span style='color:" + gammeRev_fr[2] + "'><strong>Intermédiaire, tranche supérieure</strong></span> (1806-2890€/UC);</li><li><span style='color:" + gammeRev_fr[3] + "'><strong>Élevé</strong></span> (>2890€/UC).</li></ul><p>Les intervalles ont été définies selon le revenu médian en Île-de-France, qui équivaut à 1806€/UC en 2010 : le premier seuil (1084€/UC) ou \"seuil de pauvreté\" correspond à 60% du revenu médian ; le second (1806€/UC) correspond au revenu médian ; le troisième (2890€/UC) correspond à 160% du revenu médian.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

function popup_rev_can(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Revenu du ménage</h3><p>Les <strong>revenus</strong> annuels du ménage ont été divisés par le nombre d'adultes et d'enfants vivant dans le ménage. Cinq classes de revenu ont été créées :<ul><li><span style='color:" + gammeRev_can[1] + "'><strong>Faible</strong></span> (<19669$/an) ;</li><li><span style='color:" + gammeRev_can[2] + "'><strong>Intermédiaire, tranche inférieure</strong></span> (19669-39337$/an) ;</li><li><span style='color:" + gammeRev_can[3] + "'><strong>Intermédiaire, tranche supérieure</strong></span> (39337-68840$/an) ;</li><li><span style='color:" + gammeRev_can[4] + "'><strong>Élevé</strong></span> (>68840$/an) ;</li><li><span style='color:" + gammeRev_can[0] + "'><strong>Inconnu</strong></span> (non renseigné par les participants);</li></ul><p>Ces intervalles ont été définies selon le revenu médian au Québec pour un ménage d'une personne qui équivaut à 39337$/an en 2015 : le premier seuil (19669$/an) ou \"Mesure de Faible Revenu\" (MFR) correspond à 50% du revenu médian ; le second (39337$/an) correspond au revenu médian ; le troisième (68840$/an) correspond à 175% du revenu médian.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
 }

// SOCIAL PROFILE - individual socioprofessional status
function popup_cs(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Catégorie socioprofessionnelle (CSP) individuelle</h3><p>La population a été divisée en cinq groupes selon leur <strong>CSP</strong>:<ul><li><span style='color:" + gammeCs[0] + "'><strong>Inactifs</strong></span> (chômeurs de longue durée, femmes au foyer) ;</li><li><span style='color:" + gammeCs[1] + "'><strong>Ouvriers</strong></span> ;</li><li><span style='color:" + gammeCs[2] + "'><strong>Employés</strong></span> ;</li><li><span style='color:" + gammeCs[3] + "'><strong>Intermédiaire</strong></span> (professions intermédiaires, artisans, commerçants et employeurs de plus de dix employés, agriculteurs exploitants) ;</li><li><span style='color:" + gammeCs[4] + "'><strong>Cadres</strong></span> (cadres et professions intellectuelles).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household socioprofessional status
function popup_cspmen(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Catégorie socioprofessionnelle (CSP) du ménage</h3><p>Nous avons attribué la <strong>CSP la plus basse du ménage</strong> à l'ensemble des adultes qui le compose puis distingué cinq groupes :</p><ul><li><span style='color:" + gammeCs[0] + "'><strong>Inactifs</strong></span> (chômeurs de longue durée, femmes au foyer) ;</li><li><span style='color:" + gammeCs[1] + "'><strong>Ouvriers</strong></span> ;</li><li><span style='color:" + gammeCs[2] + "'><strong>Employés</strong></span> ;</li><li><span style='color:" + gammeCs[3] + "'><strong>Intermédiaire</strong></span> (professions intermédiaires, artisans, commerçants et employeurs de plus de dix employés, agriculteurs exploitants) ;</li><li><span style='color:" + gammeCs[4] + "'><strong>Cadres</strong></span> (cadres et professions intellectuelles).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - Occupational status
function popup_occ(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Occupation principale</h3><p>La population a été divisée en cinq groupes : <span style='color:" + gammeOcc[4] + "'><strong>Inactifs</strong></span> ; <span style='color:" + gammeOcc[3] + "'><strong>Retraités</strong></span> ; <span style='color:" + gammeOcc[2] + "'><strong>Sans emploi</strong></span> ; <span style='color:" + gammeOcc[1] + "'><strong>Étudiants</strong></span> et <span style='color:" + gammeOcc[0] + "'><strong>Actifs</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL AREA - residential area
function popup_resarea(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Zonage en Aires Urbaines</h3><p>Les secteurs de résidence ont été divisés en trois groupes à partir du Zonage en Aires Urbaines - ZAU (2010) de l'Insee:</p><ul><li>La <span style='color:" + gammeRes[2] + "'><strong>ville centre</strong></span> correspond à la commune centrale en charge de l'enquête origine-destination.</li><li>La <span style='color:" + gammeRes[1] + "'><strong>zone urbaine</strong></span> correspond aux secteurs appartenant à un pôle urbain (grand, moyen ou petit). Les régions de Carcassonne et Besançon ne possèdent pas de secteur de cette catégorie.</li><li>La <span style='color:" + gammeRes[0] + "'><strong>zone périphérique</strong></span> regroupe les secteurs restants qu'ils soient situés dans la couronne des pôles ou composés de communes multipolarisées ou isolées.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// RESIDENTIAL AREA - residential area (QPV)
function popup_qpv(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Quartier prioritaire en Politique de la Ville (QPV)</h3><p>Les enquêtés ont été divisés en deux groupes selon leur zone fine (ZF) de résidence et la géographie prioritaire de la Politique de la Ville : <span style='color:" + gammeQpv[1] + "'><strong>Habitant dans un quartier prioritaire (QPV)</strong></span> et <span style='color:" + gammeQpv[0] + "'><strong>Habitant en dehors d'un quartier prioritaire (QPV)</strong></span>.</br></br>L'information relative à la résidence - ou à la non-résidence - en QPV n'existant pas dans les enquêtes, elle a été reconstruite <i>a posteriori</i> par l'équipe du Mobiliscope à partir des zones fines de résidence (le maillage le plus fin à notre disposition). Nous avons fait le choix de définir comme résidents d'un QPV les participants dont la « Zone Fine » de résidence contenait une majorité (> 56%) d’habitants en QPV d’après des données du recensement de 2013.</br> Des QPV sont présents dans toutes les villes françaises intégrées dans le Mobiliscope, sauf Annecy et sa région.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// RESIDENTIAL AREA - departement of residence
// ce pop-up est seulement pour Paris
function popup_dep(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Département de résidence</h3><p>En Île-de-France, on distingue :<ul><li><span style='color:" + gammeDep[0] + "'><strong>Paris</strong></span> ;</li><li>La <span style='color:" + gammeDep[1] + "'><strong>Seine-Saint-Denis</strong></span> ;</li><li>Le <span style='color:" + gammeDep[2] + "'><strong>Val-de-Marne</strong></span> ;</li><li>Les <span style='color:" + gammeDep[3] + "'><strong>Hauts-de-Seine</strong></span> ;</li><li>La <span style='color:" + gammeDep[4] + "'><strong>Grande couronne</strong></span> (Essonne, Seine-et-Marne, Yvelines et Val-d'Oise).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// ACTIVITY/TRAVEL BEHAVIOUR - Activity type
function popup_act(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Activité réalisée</h3><p>Ces informations sont issues des motifs de déplacements. Cinq groupes d'activités ont été considérés en agrégeant les catégories d'origine :</p><ul><li><span style='color:" + gammeAct[0] + "'><strong>À la maison</strong></span></li><li><span style='color:" + gammeAct[1] + "'><strong>Au travail</strong></span></li><li><span style='color:" + gammeAct[2] + "'><strong>Études</strong></span></li><li><span style='color:" + gammeAct[3] + "'><strong>Achats</strong></span></li><li><span style='color:" + gammeAct[4] + "'><strong>Loisirs</strong></span> (activités récréatives, culturelles ou sportives, visites à des proches).</li></ul><p>Nous avons exclu les \"activités non spécifiées\" et les \"activités d'accompagnement\" trop peu fréquentes pour être analysées à part, et trop spécifiques pour être regroupées avec les autres types d'activités.</p>" ) ;
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// ACTIVITY/TRAVEL BEHAVIOUR - travel mode
function popup_mode(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Dernier mode de transport utilisé</h3><p>Nous avons distingué trois modes de transport : <span style='color:" + gammeMode[2] + "'><strong>Mobilité douce</strong></span> (marche à pied, vélo, etc.); <span style='color:" + gammeMode[1] + "'><strong>Véhicule motorisé privé</strong></span> (deux roues motorisés, véhicule d'entreprise, taxi etc.) et <span style='color:" + gammeMode[0] + "'><strong>Transports publics</strong></span>.</br></br>Il s'agit du mode de tranport principal utilisé pour se rendre à destination. Dans les enquêtes francaises et québecoises, si plusieurs modes de transport ont été utilisés au cours d'un même déplacement, le mode principal est établi en donnant la priorité aux modes motorisés par rapport aux modes doux. Ainsi, un trajet au cours duquel l’individu aurait par exemple utilisé la voiture et la marche à pied sera classé comme un déplacement fait principalement en voiture.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}


// Other popups

function popup_mapTitle1(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Des estimations de la population présente par heure et par secteur</h3><p>Les valeurs affichées correspondent à un jour \'fictif\' de <strong>semaine</strong> (lundi au vendredi) pour la population <b>âgée de 16 ans de plus</b>.</br></br>La superficie des <strong>secteurs</strong> varie selon la densité de population : ils sont plus petits au coeur des villes et plus étendus en périphérie. En <b>France</b>, les secteurs correspondent à l'unité spatiale minimale pour la diffusion des résultats des enquêtes ménage-déplacement. Dans les villes centres, les secteurs correspondent à de grands quartiers (ou des arrondissements pour Paris, Lyon et Marseille). En dehors, les secteurs correspondent à une commune ou à un groupe de communes (si plus de trois communes dans un secteur, le Mobiliscope n'affiche au survol de la souris que le nom des trois communes les plus peuplées). Au <b>Canada</b>, les secteurs correspondent aux secteurs municipaux.</br></br>Les valeurs affichées dans le Mobiliscope sont des estimations soumises à une <strong>marge d’erreur statistique</strong>. Ces valeurs ont été estimées en prenant en compte les coefficients de pondération des personnes enquêtées.<ul><li>Pour <b>l'Île-de-France</b> (EGT, 2010) : les pondérations ont été calculées au niveau des individus et des ménages afin de garantir pour chaque secteur une distribution des ménages (taille et type de logement) et des individus (âge, sexe, occupation et catégorie socioprofessionnelle) similaire à celle observée dans le recensement de population de 2008.</li><li>Pour les autres <b>villes françaises</b> (Cerema) : les pondérations ont été calculées afin de garantir pour chaque secteur une distribution des ménages (taille) et des individus (âge) similaire à celle observée dans les recensements de population.</li><li>Pour les <b>villes québécoises</b> : les coefficients de pondération ont été calculés par rapport à la population totale des individus par cohorte d’âge et de sexe, à partir des données de recensement 2011.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_duncan(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Mesures de distribution spatiale dans l'ensemble de la zone enquêtée</h3><p>Les calculs ont été effectués pour chaque heure (de 4h du matin à 3h du matin) en prenant en compte les coefficients de pondération.</br><strong>L'indice de dissimilarité de Duncan</strong> informe sur la dispersion de chaque groupe de population à travers les unités spatiales. Il est communément utilisé pour mesurer la ségrégation entre deux groupes (par exemple population noire et population blanche) mais peut aussi être utilisé pour un indicateur divisé en plus de deux groupes. Dans ce cas, l'indice de Duncan exprime la proportion d'individus d'un groupe donné qu'il faudrait déplacer pour avoir une égale répartition du groupe par rapport à la population totale.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_moran(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Mesures de distribution spatiale dans l'ensemble de la zone enquêtée</h3><p>Les calculs ont été effectués pour chaque heure (de 4h du matin à 3h du matin) en prenant en compte les coefficients de pondération.</br><strong>L'indice de Moran</strong> mesure l'intensité de la relation entre la proximité des lieux et leur degré de ressemblance (autocorrélation spatiale). Il varie de -1 (les lieux proches ont tendance à être plus différents que les lieux éloignés - autocorrélation négative) à 1 (les lieux proches ont tendance à se ressembler davantage que les lieux éloignés - autocorrélation positive). L'autocorrélation est nulle quand aucune relation n'existe entre proximité et ressemblance.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_source_fr(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>Le Mobiliscope utilise les données issues des Enquêtes Ménages Déplacements du Cerema (et de l'Enquête Globale Transport DRIEA-STIF-OMNIL pour l'Ile-de-France). La  majorité de ces enquêtes est disponible via l'ADISP (Archives de Données Issues de la Statistique Publique).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_can(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>Le Mobiliscope québecois utilise les données des Enquêtes Origine-Destination fournies par le Ministère des Transports du Québec.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

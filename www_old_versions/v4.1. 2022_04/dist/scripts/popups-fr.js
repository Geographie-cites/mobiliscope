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
	$("#text").html("<h3>Population totale</h3><p>La <span style='color:" + gammePop[0] + "'><strong>population totale</strong></span> concerne toutes les personnes <b>âgées de 16 ans et plus</b>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// Resident population
function popup_respop(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Résidents/non-résidents</h3><p>La population présente dans chaque secteur a été divisée en deux groupes selon leur secteur de résidence&nbsp: <ul><li>personnes <span style='color:" + gammeRespop[1] + "'><strong>résidentes</strong></span> du secteur&nbsp;;</li><li>personnes <span style='color:" + gammeRespop[0] + "'><strong>non-résidentes</strong></span> du secteur.</li>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// DEMO PROFILE - Age groups
function popup_age(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Groupes d'âge</h3><p>Quatre groupes d'âge ont été considérés&nbsp;: <span style='color:" + gammeAge[0] + "'><strong>16-24 ans</strong></span>&nbsp;; <span style='color:" + gammeAge[1] + "'><strong>25-34 ans</strong></span>&nbsp;; <span style='color:" + gammeAge[2] + "'><strong>35-64&nbsp;ans</strong></span> et <span style='color:" + gammeAge[3] + "'><strong>65 ans et plus</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// Canada 15-24
function popup_age_ca(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Groupes d'âge</h3><p>Quatre groupes d'âge ont été considérés&nbsp: <span style='color:" + gammeAge[0] + "'><strong>15-24 ans</strong></span>&nbsp;; <span style='color:" + gammeAge[1] + "'><strong>25-34 ans</strong></span>&nbsp;; <span style='color:" + gammeAge[2] + "'><strong>35-64&nbsp;ans</strong></span> et <span style='color:" + gammeAge[3] + "'><strong>65 ans et plus</strong></span>.</p>" );
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

// DEMO PROFILE - Composition du ménage - Amérique latine
function popup_strm(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Composition du ménage</h3><p>Nous avons défini 5 types de ménage selon la structure familiale et la présence ou non d'enfant. On considère ici comme '<b>enfant</b>' une personne de moins de 16 ans et comme '<b>adulte</b>' une personne de 16 ans et plus&nbsp:<ul><li><span style='color:" +
		gammeStrm[4] +
		"'><strong>Ménage complexe avec enfant</strong></span>&nbsp: ménage composé d'un ou plusieurs adultes avec enfant(s) dont au moins un membre est en dehors de la famille nucléaire&nbsp;;</li><li><span style='color:" +
		gammeStrm[3] +
		"'><strong>Famille avec enfant</strong></span>&nbsp: ménage composé d'un ou deux parents avec au moins un enfant&nbsp;;</li><li><span style='color:" +
		gammeStrm[2] +
		"'><strong>Ménage complexe sans enfant</strong></span>&nbsp: ménage composé uniquement d'adultes dont au moins un membre est en dehors de la famille nucléaire&nbsp;;</li><li><span style='color:" +
		gammeStrm[1] +
		"'><strong>Famille sans enfant</strong></span>&nbsp: ménage composé uniquement d'adultes d'une même famille nucléaire (couple sans enfant, couple/parent seul avec enfant(s) âgé(s) de 16 ans et plus)&nbsp;;</li><li><span style='color:" +
		gammeStrm[0] +
		"'><strong>Ménage d'une personne</strong></span>.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// DEMO PROFILE - Composition du ménage - France
function popup_strmfr(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Composition du ménage</h3><p>Nous avons défini 4 types de ménage selon la structure familiale et la présence ou non d'enfant. On considère ici comme '<b>enfant</b>' une personne de moins de 16 ans et comme '<b>adulte</b>' une personne de 16 ans et plus&nbsp:<ul><li><span style='color:" +
		gammeStrmfr[3] +
		"'><strong>Ménage avec enfant</strong></span>&nbsp: ménage composé d'un ou plusieurs adultes avec enfant(s). Les membres du ménage n'ont pas nécessairement de lien de parenté&nbsp;;</li><li><span style='color:" +
		gammeStrmfr[2] +
		"'><strong>Ménage (hors couple) sans enfant</strong></span>&nbsp: ménage composé uniquement d'adultes. Cette catégorie regroupe les familles nucléaires (un ou deux parents avec enfant(s) âgé(s) de 16 ans ou plus), les familles élargies dont tous les membres sont adultes, les colocations...&nbsp;;</li><li><span style='color:" +
		gammeStrmfr[1] +
		"'><strong>Couple sans enfant</strong></span>&nbsp: ménage de deux adultes vivant en couple&nbsp;;</li><li><span style='color:" +
		gammeStrmfr[0] +
		"'><strong>Ménage d'une personne</strong></span>.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// DEMO PROFILE - Composition du ménage - Québec
function popup_strmqc(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Composition du ménage</h3><p>Nous avons défini 3 types de ménage selon la présence ou non d'enfant. On considère ici comme '<b>enfant</b>' une personne de moins de 15 ans et comme '<b>adulte</b>' une personne de 15 ans et plus&nbsp:<ul><li><span style='color:" +
		gammeStrmqc[2] +
		"'><strong>Ménage avec enfant</strong></span>&nbsp: ménage composé d'un ou plusieurs adultes avec enfant(s). Les membres du ménage n'ont pas nécessairement de lien de parenté&nbsp;;</li><li><span style='color:" +
		gammeStrmqc[1] +
		"'><strong>Ménage sans enfant</strong></span>&nbsp: ménage composé uniquement d'adultes. Cette catégorie regroupe les familles nucléaires (couple, un ou deux parents avec enfant âgé de 15 ans ou plus), les familles élargies dont tous les membres sont adultes, les colocations...&nbsp;;</li><li><span style='color:" +
		gammeStrmqc[0] +
		"'><strong>Ménage d'une personne</strong></span>.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - individual educational level
function popup_cleduc(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Niveau d'éducation</h3><p>À partir du dernier diplôme obtenu déclaré par les enquêtés, nous avons distingué quatre <strong>niveaux d'éducation</strong>&nbsp:<ul><li><span style='color:" + gammeSP[0] + "'><strong>Faible</strong></span> (collège ou moins)&nbsp;;</li><li><span style='color:" + gammeSP[1] + "'><strong>Intermédiaire</strong></span> (secondaire, BEP ou CAP sans Bac)&nbsp;;</li><li><span style='color:" + gammeSP[2] + "'><strong>Élevé</strong></span> (Bac à Bac + 2)&nbsp;;</li><li><span style='color:" + gammeSP[3] + "'><strong>Très élevé</strong></span> (Bac + 3 et plus).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

function popup_cleduc_as(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Niveau d'éducation</h3><p>À partir du niveau d'éducation maximum atteint déclaré par les enquêtés, nous avons distingué quatre <strong>niveaux d'éducation</strong>&nbsp:<ul><li><span style='color:" + gammeSP[0] + "'><strong>Faible</strong></span>&nbsp: moins de 9 ans d'études (sans scolarité à primaire complet)&nbsp;;</li><li><span style='color:" + gammeSP[1] + "'><strong>Intermédiaire</strong></span>&nbsp: entre 9 et 11 ans d'études (études secondaires complètes ou incomplètes)&nbsp;;</li><li><span style='color:" + gammeSP[2] + "'><strong>Élevé</strong></span>&nbsp: entre 12 et 15 ans d'études (études superieures techniques/technologiques complètes ou incomplètes, études universitaires incomplètes)&nbsp;;</li><li><span style='color:" + gammeSP[3] + "'><strong>Très élevé</strong></span>&nbsp: au moins 16 ans d'études (études universitaires complètes, études supérieures de troisième cycle).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household educational level
function popup_educmen(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Niveau d'éducation du ménage</h3><p>À partir du dernier diplôme obtenu déclaré par les enquêtés, nous avons attribué le <strong>niveau d'éducation le plus bas du ménage</strong> à l'ensemble des adultes qui le compose.</br>Nous avons distingué quatre groupes&nbsp: <ul><li><span style='color:" + gammeSP[0] + "'><strong>Faible</strong></span> (collège ou moins)&nbsp;;</li><li><span style='color:" + gammeSP[1] + "'><strong>Intermédiaire</strong></span> (secondaire, BEP ou CAP sans Bac)&nbsp;;</li><li><span style='color:" + gammeSP[2] + "'><strong>Élevé</strong></span> (Bac à Bac + 2)&nbsp;;</li><li><span style='color:" + gammeSP[3] + "'><strong>Très élevé</strong></span> (Bac + 3 et plus).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

function popup_educmen_as(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Niveau d'éducation (ménage)</h3><p>À partir du niveau d'éducation maximum atteint déclaré par les enquêtés, nous avons attribué le <strong>niveau d'éducation le plus haut du ménage</strong> à l'ensemble des adultes qui le compose.</br>Nous avons distingué quatre groupes&nbsp:<ul><li><span style='color:" + gammeSP[0] + "'><strong>Faible</strong></span>&nbsp: moins de 9 ans d'études (sans scolarité à primaire complet)&nbsp;;</li><li><span style='color:" + gammeSP[1] + "'><strong>Intermédiaire</strong></span>&nbsp: entre 9 et 11 ans d'études (études secondaires complètes ou incomplètes)&nbsp;;</li><li><span style='color:" + gammeSP[2] + "'><strong>Élevé</strong></span>&nbsp: entre 12 et 15 ans d'études (études supérieures techniques/technologiques complètes ou incomplètes, études universitaires incomplètes)&nbsp;;</li><li><span style='color:" + gammeSP[3] + "'><strong>Très élevé</strong></span>&nbsp: au moins 16 ans d'études (études universitaires complètes, études supérieures de troisième cycle).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - Household income
function popup_rev_idf(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Revenu du ménage</h3><p>Les <strong>revenus</strong> mensuels des membres du ménage ont été divisés par le nombre d'adultes et d'enfants du ménage pour obtenir les revenus du ménage par unité de consommation (UC).</br>Quatre classes de revenu ont été créées&nbsp;:<ul><li><span style='color:" + gammeRev_fr[0] + "'><strong>Faible</strong></span> (<1084€/UC)&nbsp;;</li><li><span style='color:" + gammeRev_fr[1] + "'><strong>Intermédiaire, tranche inférieure</strong></span> (1084-1806€/UC)&nbsp;;</li><li><span style='color:" + gammeRev_fr[2] + "'><strong>Intermédiaire, tranche supérieure</strong></span> (1806-2890€/UC)&nbsp;;</li><li><span style='color:" + gammeRev_fr[3] + "'><strong>Élevé</strong></span> (>2890€/UC).</li></ul><p>Les intervalles ont été définies selon le revenu médian en Île-de-France, qui équivaut à 1806€/UC en 2010&nbsp: le premier seuil (1084€/UC) ou \"seuil de pauvreté\" correspond à 60% du revenu médian&nbsp;; le second (1806€/UC) correspond au revenu médian&nbsp;; le troisième (2890€/UC) correspond à 160% du revenu médian.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_rev_can(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Revenu du ménage</h3><p>Les <strong>revenus</strong> annuels du ménage ont été divisés par le nombre d'adultes et d'enfants vivant dans le ménage. Cinq classes de revenu ont été créées&nbsp:<ul><li><span style='color:" + gammeRev_can[1] + "'><strong>Faible</strong></span> (<19669$/an)&nbsp;;</li><li><span style='color:" + gammeRev_can[2] + "'><strong>Intermédiaire, tranche inférieure</strong></span> (19669-39337$/an)&nbsp;;</li><li><span style='color:" + gammeRev_can[3] + "'><strong>Intermédiaire, tranche supérieure</strong></span> (39337-68840$/an)&nbsp;;</li><li><span style='color:" + gammeRev_can[4] + "'><strong>Élevé</strong></span> (>68840$/an)&nbsp;;</li><li><span style='color:" + gammeRev_can[0] + "'><strong>Inconnu</strong></span> (non renseigné par les participants).</li></ul><p>Ces intervalles ont été définies selon le revenu médian au Québec pour un ménage d'une personne qui équivaut à 39337$/an en 2015&nbsp: le premier seuil (19669$/an) ou \"Mesure de Faible Revenu\" (MFR) correspond à 50% du revenu médian&nbsp;; le second (39337$/an) correspond au revenu médian&nbsp;; le troisième (68840$/an) correspond à 175% du revenu médian.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
 }

 function popup_rev_bo(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Revenu du ménage</h3><p>Les <strong>revenus</strong> mensuels de l'ensemble du ménage ont été divisés par le nombre d'adultes et d'enfants du ménage pour obtenir les revenus du ménage par unité de consommation (UC).</br>Cinq classes de revenu ont été créées&nbsp;:<ul><li><span style='color:" + gammeRev_as[0] + "'><strong>Très faible</strong></span> (< $414 000/UC)</li><li><span style='color:" + gammeRev_as[1] + "'><strong>Faible</strong></span> ($414 000-$827 999/UC)</li><li><span style='color:" + gammeRev_as[2] + "'><strong>Intermédiaire</strong></span> ($828 000-$1 655 999/UC)</li><li><span style='color:" + gammeRev_as[3] + "'><strong>Élevé</strong></span> ($1 656 000-3 311 999/UC)</li><li><span style='color:" + gammeRev_as[4] + "'><strong>Très élevé</strong></span> (>= $3 312 000/UC)</li></ul><p>Les intervalles ont été définies selon le salaire minimum national (SMN) en Colombie qui équivaut à 828 000 pesos en 2019 (soit 220€)&nbsp: le premier seuil ($414000) correspond à 0,5 SMN&nbsp;; le deuxième seuil ($828000) correspond au salaire minimum&nbsp;; le troisième seuil ($1656000) correspond à 2 SMN&nbsp;; le quatrième seuil ($3312000) correspond à 4 SMN.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_rev_sa(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Revenu du ménage</h3><p>Les <strong>revenus</strong> mensuels de l'ensemble du ménage ont été divisés par le nombre d'adultes et d'enfants du ménage pour obtenir les revenus du ménage par unité de consommation (UC).</br>Cinq classes de revenu ont été créées&nbsp;:<ul><li><span style='color:" + gammeRev_as[0] + "'><strong>Très faible</strong></span> (< $187 500/UC)</li><li><span style='color:" + gammeRev_as[1] + "'><strong>Faible</strong></span> ($187 500-$281 249/UC)</li><li><span style='color:" + gammeRev_as[2] + "'><strong>Intermédiaire</strong></span> ($281 250-$374 999/UC)</li><li><span style='color:" + gammeRev_as[3] + "'><strong>Élevé</strong></span> ($375 000-$562 499/UC)</li><li><span style='color:" + gammeRev_as[4] + "'><strong>Très élevé</strong></span> (>= $562 500/UC)</li></ul><p>Les intervalles ont été définies selon le salaire minimum national (SMN) du Chili qui équivaut à 187 500 pesos en 2012 (soit 278€)&nbsp: le premier seuil ($187500) correspond donc au SMN&nbsp;; le deuxième seuil ($281250) correspond à 1,5 SMN&nbsp;; le troisième seuil ($375000) correspond à 2 SMN&nbsp;; le quatrième seuil ($562500) correspond à 3 SMN.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_rev_sp(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Revenu du ménage</h3><p>Les <strong>revenus</strong> mensuels de l'ensemble du ménage ont été divisés par le nombre d'adultes et d'enfants du ménage pour obtenir les revenus du ménage par unité de consommation (UC).</br>Cinq classes de revenu ont été créées&nbsp;:<ul><li><span style='color:" + gammeRev_as[0] + "'><strong>Très faible</strong></span> (< 937R$/UC)</li><li><span style='color:" + gammeRev_as[1] + "'><strong>Faible</strong></span> (937R$-1 873R$/UC)</li><li><span style='color:" + gammeRev_as[2] + "'><strong>Intermédiaire</strong></span> (1 874R$-2 810R$/UC)</li><li><span style='color:" + gammeRev_as[3] + "'><strong>Élevé</strong></span> (2 811R$-4 684R$/UC)</li><li><span style='color:" + gammeRev_as[4] + "'><strong>Très élevé</strong></span> (>= 4 685R$/UC)</li></ul><p>Les intervalles ont été définies selon le salaire minimum national (SMN) du Brésil qui équivaut à 937 reais en 2017 (soit 273€)&nbsp: le premier seuil (937R$) correspond donc au SMN&nbsp;; le deuxième seuil (1874R$) correspond à 2 SMN&nbsp;; le troisième seuil (2811R$) correspond à 3 SMN&nbsp;; le quatrième seuil (4685R$) correspond à 5 SMN.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// SOCIAL PROFILE - individual socioprofessional status
function popup_cs(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Catégorie socioprofessionnelle (CSP) individuelle</h3><p>La population a été divisée en cinq groupes selon leur <strong>CSP</strong>&nbsp:<ul><li><span style='color:" +
		gammeCs[0] + "'><strong>Inactifs</strong></span> (chômeurs de longue durée, femmes au foyer)&nbsp;;</li><li><span style='color:" +
		gammeCs[1] + "'><strong>Ouvriers</strong></span>&nbsp;;</li><li><span style='color:" +
		gammeCs[2] + "'><strong>Employés</strong></span>&nbsp;;</li><li><span style='color:" +
		gammeCs[3] + "'><strong>Intermédiaire</strong></span> (professions intermédiaires, artisans, commerçants et employeurs de plus de dix employés, agriculteurs exploitants)&nbsp;;</li><li><span style='color:" +
		gammeCs[4] + "'><strong>Cadres et professions intellectuelles</strong></span> supérieures.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - CSO
function popup_cso(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Catégorie socioprofessionnelle des actifs</h3><p>La population active ayant un emploi a été divisée en quatre groupes selon la catégorie d'emploi occupé&nbsp:<ul><li><span style='color:" + gammeCso[0] + "'><strong>Travailleurs non qualifiés</strong></span></li><li><span style='color:" + gammeCso[1] + "'><strong>Travailleurs qualifiés</strong></span></li><li><span style='color:" + gammeCso[2] + "'><strong>Indépendants</strong></span></li><li><span style='color:" + gammeCso[3] + "'><strong>Cadres et professions intellectuelles supérieures</strong></span></li></ul><p>Lorsque le type d'emploi déclaré ne permettait pas de déterminer précisément le groupe socio-professionnel d'appartenance (notamment la séparation entre travailleurs qualifiés et travailleurs non qualifiés), le secteur économique de l'entreprise employeuse et le niveau d'éducation des enquêtés ont été mobilisés.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household socioprofessional status
function popup_cspmen(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Catégorie socioprofessionnelle (CSP) du ménage</h3><p>Nous avons attribué la <strong>CSP la plus basse du ménage</strong> à l'ensemble des adultes qui le compose puis distingué cinq groupes&nbsp:</p><ul><li><span style='color:" +
		gammeCs[0] + "'><strong>Inactifs</strong></span> (chômeurs de longue durée, femmes au foyer)&nbsp;;</li><li><span style='color:" +
		gammeCs[1] + "'><strong>Ouvriers</strong></span>&nbsp;;</li><li><span style='color:" +
		gammeCs[2] + "'><strong>Employés</strong></span>&nbsp;;</li><li><span style='color:" +
		gammeCs[3] + "'><strong>Intermédiaire</strong></span> (professions intermédiaires, artisans, commerçants et employeurs de plus de dix employés, agriculteurs exploitants)&nbsp;;</li><li><span style='color:" +
		gammeCs[4] + "'><strong>Cadres et professions intellectuelles</strong></span> supérieures.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// SOCIAL PROFILE - informalité
function popup_inf(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Informalité professionnelle des actifs</h3><p>Le travail informel a été estimé en combinant la catégorie d'emploi occupé et le secteur économique de l'entreprise employeuse en s'inspirant des méthodes proposées par l'Organisation Internationale du Travail (OIT). Les enquêtés ont été divisés en deux groupes&nbsp: </p><ul><li><span style='color:" +
		gammeInf[0] +
		"'><strong>Actifs ayant un emploi informel</strong></span></li><li><span style='color:" +
		gammeInf[1] +
		"'><strong>Actifs ayant un emploi formel</strong></span></li></ul><p>Lorsque l'information était insuffisante pour suivre les règles de décision préconisée par l'OIT, le niveau d'éducation et de revenu des actifs enquêtés ont aussi été mobilisés.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// SOCIAL PROFILE - Occupational status
function popup_occ(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Occupation principale</h3><p>La population a été divisée en cinq groupes&nbsp: <span style='color:" + gammeOcc[4] + "'><strong>Inactifs</strong></span>&nbsp;; <span style='color:" + gammeOcc[3] + "'><strong>Retraités</strong></span>&nbsp;; <span style='color:" + gammeOcc[2] + "'><strong>Sans&nbsp;emploi</strong></span>&nbsp;; <span style='color:" + gammeOcc[1] + "'><strong>Étudiants</strong></span> et <span style='color:" + gammeOcc[0] + "'><strong>Actifs</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - residential area
function popup_resarea(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Zonage en Aires Urbaines</h3><p>Les secteurs de résidence ont été divisés en trois groupes à partir du Zonage en Aires Urbaines - ZAU (2010) de l'Insee:</p><ul><li>La <span style='color:" + gammeRes[2] + "'><strong>ville centre</strong></span> correspond à la commune centrale en charge de l'enquête origine-destination.</li><li>La <span style='color:" + gammeRes[1] + "'><strong>zone urbaine</strong></span> correspond aux secteurs appartenant à un pôle urbain (grand, moyen ou petit). Les régions de Carcassonne et Besançon ne possèdent pas de secteur de cette catégorie.</li><li>La <span style='color:" + gammeRes[0] + "'><strong>zone périphérique</strong></span> regroupe les secteurs restants qu'ils soient situés dans la couronne des pôles ou composés de communes multipolarisées ou isolées.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// RESIDENTIAL PROFILE - residential area (QPV)
function popup_qpv(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Quartier prioritaire en Politique de la Ville (QPV)</h3><p>Les enquêtés ont été divisés en deux groupes selon leur zone fine (ZF) de résidence et la géographie prioritaire de la Politique de la Ville&nbsp: <span style='color:" + gammeQpv[1] + "'><strong>Habitant dans un quartier prioritaire (QPV)</strong></span> et <span style='color:" + gammeQpv[0] + "'><strong>Habitant en dehors d'un quartier prioritaire (QPV)</strong></span>.</br></br>L'information relative à la résidence - ou à la non-résidence - en QPV n'existant pas dans les enquêtes, elle a été reconstruite <i>a posteriori</i> par l'équipe du Mobiliscope à partir des zones fines de résidence (le maillage le plus fin à notre disposition). Nous avons fait le choix de définir comme résidents d'un QPV les participants dont la « Zone Fine » de résidence contenait une majorité (> 51%) d’habitants en QPV d’après des données du recensement de 2013.</br> Des QPV sont présents dans toutes les villes françaises intégrées dans le Mobiliscope, sauf Annecy et sa région.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - departement of residence
// ce pop-up est seulement pour Paris
function popup_dep(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Département de résidence</h3><p>En Île-de-France, on distingue&nbsp:<ul><li><span style='color:" + gammeDep[0] + "'><strong>Paris</strong></span>&nbsp;;</li><li>La <span style='color:" + gammeDep[1] + "'><strong>Seine-Saint-Denis</strong></span>&nbsp;;</li><li>Le <span style='color:" + gammeDep[2] + "'><strong>Val-de-Marne</strong></span>&nbsp;;</li><li>Les <span style='color:" + gammeDep[3] + "'><strong>Hauts-de-Seine</strong></span>&nbsp;;</li><li>La <span style='color:" + gammeDep[4] + "'><strong>Grande couronne</strong></span> (Essonne, Seine-et-Marne, Yvelines et Val-d'Oise).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - zonage METAL de résidence
// Amérique latine
function popup_zona(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Couronne de résidence</h3><p>Les secteurs de résidence ont été divisés en 4 groupes&nbsp: <ul><li><span style='color:" + gammeZona[3] + "'><strong>Centre</strong></span></li><li><span style='color:" + gammeZona[2] + "'><strong>Péricentre</strong></span></li><li><span style='color:" + gammeZona[1] + "'><strong>Périphérie proche</strong></span></li><li><span style='color:" + gammeZona[0] + "'><strong>Périphérie lointaine</strong></span></li></ul><p>Ce découpage s'inspire du découpage proposé dans l'ouvrage <em> Mobilités et changement urbain. Bogotá, Santiago et São Paulo</em> dirigé par F.Dureau, T.Lulle, S.Souchaud et Y.Contreras (2014).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - strate socio-économique
// ce pop-up est seulement pour Bogota
function popup_sse(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Strate socio-économique</h3><p>La stratification socio-économique est une <a href='https://datosabiertos.bogota.gov.co/dataset/manzana-estratificacion-bogota-d-c' target='_blank'>typologie</a> de l'action publique colombienne qui vise à établir les tarifs des services publics appliqués aux ménages selon leur lieu de résidence à partir d'un classement des habitations selon les caractéristiques des logements et de leur environnement proche (qualité du bâti, de la voirie, présence d'équipements, etc). Nous avons classé les enquêtés en quatre groupes selon la strate d'appartenance de leur logement&nbsp: <ul><li><span style='color:" + gammeRev_fr[3] + "'><strong>Strate 4, 5 ou 6</strong></span>&nbsp: niveau moyen-haut ou élevé</li><li><span style='color:" + gammeRev_fr[2] + "'><strong>Strate 3</strong></span>&nbsp: niveau moyen-bas</li><li><span style='color:" + gammeRev_fr[1] + "'><strong>Strate 2</strong></span>&nbsp: niveau bas</li><li><span style='color:" + gammeRev_fr[0] + "'><strong>Strate 1 ou non stratifié</strong></span>&nbsp: niveau très bas</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - statut d'occupation dans le logement
// Amérique latine
function popup_log(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Statut d'occupation du logement</h3><p>Le statut d'occupation du logement est attribué en croisant le statut du logement des ménages (propriété, location, usufruit, etc.) et la place de la personne enquêtée dans le ménage. Trois statuts d'occupation sont définis&nbsp:<ul><li><span style='color:" +
		gammeLog[2] +
		"'><strong>Propriétaires</strong></span>&nbsp: référents du ménage ou conjoints propriétaires&nbsp;;</li><li><span style='color:" +
		gammeLog[1] +
		"'><strong>Locataires</strong></span>&nbsp: référents du ménage ou conjoints locataires&nbsp;;</li><li><span style='color:" +
		gammeLog[0] +
		"'><strong>Personnes hébergées</strong></span>&nbsp: personnes vivant dans un logement sans qu'elles, ni leur conjoint, n'en soit propriétaires ou locataires. Les usufruitiers, les personnes logées gratuitement ou dans un logement occupé par son propriétaire ou son locataire font partie de cette catégorie.</li></ul>" +
		"<p>Pour les enquêtés de moins de 25 ans vivant avec leurs parents, on considère le statut d'occupation de leurs parents. </p>");
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// ACTIVITY/TRAVEL BEHAVIOUR - Activity type
function popup_act(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Activité réalisée</h3><p>Ces informations sont issues des motifs de déplacements. Cinq groupes d'activités ont été considérés en agrégeant les catégories d'origine&nbsp:</p><ul><li><span style='color:" + gammeAct[0] + "'><strong>À la maison</strong></span></li><li><span style='color:" + gammeAct[1] + "'><strong>Au travail</strong></span></li><li><span style='color:" + gammeAct[2] + "'><strong>Études</strong></span></li><li><span style='color:" + gammeAct[3] + "'><strong>Achats</strong></span></li><li><span style='color:" + gammeAct[4] + "'><strong>Loisirs</strong></span> (activités récréatives, culturelles ou sportives, visites à des proches).</li></ul><p>Nous avons exclu les \"activités non spécifiées\" et les \"activités d'accompagnement\" trop peu fréquentes pour être analysées à part, et trop spécifiques pour être regroupées avec les autres types d'activités.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_act_as(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Activité réalisée</h3><p>Ces informations sont issues des motifs de déplacements. Six groupes d'activités ont été considérés en agrégeant les catégories d'origine&nbsp:</p><ul><li><span style='color:" + gammeAct[0] + "'><strong>À la maison</strong></span></li><li><span style='color:" + gammeAct[1] + "'><strong>Au travail</strong></span></li><li><span style='color:" + gammeAct[2] + "'><strong>Études</strong></span></li><li><span style='color:" + gammeAct[3] + "'><strong>Achats</strong></span></li><li><span style='color:" + gammeAct[4] + "'><strong>Loisirs</strong></span> (activités récréatives, culturelles ou sportives, visites à des proches)</li><li><span style='color:" + gammeAct[5] + "'><strong>Démarches administratives ou personnelles</strong></span></li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// ACTIVITY/TRAVEL BEHAVIOUR - travel mode
function popup_mode(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Dernier mode de transport utilisé</h3><p>Trois modes principaux de transport sont distingués&nbsp:<ul><li><span style='color:" +
		gammeMode[2] +
		"'><strong>Mode doux</strong></span> (marche à pied, vélo, etc.) ;</li><li><span style='color:" +
		gammeMode[1] +
		"'><strong>Véhicule motorisé individuel</strong></span> (voiture ou moto personnelle, taxi)&nbsp;;</li><li><span style='color:" +
		gammeMode[0] + "'><strong>Transports collectifs</strong></span>.</li></ul>" +
		"<p>Il s'agit du mode de transport <b>principal</b> utilisé. Si plusieurs modes de transport sont utilisés au cours d'un même déplacement, le mode <b>principal</b> de transport est défini en suivant cet <b>ordre de priorité</b>&nbsp: 1) Transports collectifs&nbsp;; 2) Véhicule motorisé individuel et 3) Mode doux. Ainsi, un déplacement au cours duquel l’individu aurait utilisé les transports collectifs et sa propre voiture sera classé comme un déplacement fait principalement en transports collectifs.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// Bogota
function popup_mode_bo(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Dernier mode de transport utilisé</h3><p>Quatre modes principaux de transport sont distingués à Bogotá&nbsp:<ul><li><span style='color:" +
		gammeMode_b[3] +
		"'><strong>Mode doux</strong></span> (marche à pied, vélo, etc.)</li><li><span style='color:" +
		gammeMode_b[2] +
		"'><strong>Véhicule motorisé individuel</strong></span> (voiture ou moto personnelle, taxi)</li><li><span style='color:" +
		gammeMode_b[1] +
		"'><strong>Transports collectifs</strong></span></li><li><span style='color:" +
		gammeMode_b[0] + "'><strong>TransMilenio</strong></span> (y compris le réseau secondaire des lignes de rabattement)</li></ul>" +
		"<p>Il s'agit du mode de tranport <b>principal</b> utilisé. Si plusieurs modes de transport ont été utilisés au cours d'un même déplacement, le mode <b>principal</b> de transport est défini en suivant cet <b>ordre de priorité</b>&nbsp: 1) TransMilenio&nbsp;; 2) Transports collectifs&nbsp;; 3) Véhicule motorisé individuel et 4) Mode doux. Ainsi, un déplacement au cours duquel l’individu aurait utilisé le TransMilenio et sa propre voiture sera classé comme un déplacement fait principalement en TransMilenio.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}




// Other popups
function popup_mapTitle1(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Des estimations de la population présente par heure et par secteur</h3><p>Les valeurs affichées correspondent à un jour \'fictif\' de <strong>semaine</strong> (lundi au vendredi) pour la population <b>âgée de 16 ans de plus</b>.</br></br>La superficie des <strong>secteurs</strong> varie selon la densité de population&nbsp: ils sont plus petits au coeur des villes et plus étendus en périphérie. En <b>France</b>, les secteurs correspondent à l'unité spatiale minimale pour la diffusion des résultats des enquêtes ménage-déplacement. Dans les villes centres, les secteurs correspondent à de grands quartiers (ou des arrondissements pour Paris, Lyon et Marseille). En dehors, les secteurs correspondent à une commune ou à un groupe de communes (si plus de trois communes dans un secteur, le Mobiliscope n'affiche au survol de la souris que le nom des trois communes les plus peuplées). Au <b>Canada</b>, les secteurs correspondent aux secteurs municipaux.</br></br>Les valeurs affichées dans le Mobiliscope sont des estimations soumises à une <strong>marge d’erreur statistique</strong>. Ces valeurs ont été estimées en prenant en compte les coefficients de pondération des personnes enquêtées.<ul><li>Pour <b>l'Île-de-France</b> (EGT, 2010)&nbsp: les pondérations ont été calculées au niveau des individus et des ménages afin de garantir pour chaque secteur une distribution des ménages (taille et type de logement) et des individus (âge, sexe, occupation et catégorie socioprofessionnelle) similaire à celle observée dans le recensement de population de 2008.</li><li>Pour les autres <b>villes françaises</b> (Cerema)&nbsp: les pondérations ont été calculées afin de garantir pour chaque secteur une distribution des ménages (taille) et des individus (âge) similaire à celle observée dans les recensements de population.</li><li>Pour les <b>villes québécoises</b>&nbsp: les coefficients de pondération ont été calculés par rapport à la population totale des individus par cohorte d’âge et de sexe, à partir des données de recensement 2011.</li></ul>" );
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

function popup_source_sa(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>Le Mobiliscope Santiago utilise les données de l'enquête <i>Encuesta Origen-Destino de Viajes (EOD) 2012</i> fournies par le <i>Ministerio de Transportes y Telecomunicaciones, Programa de Vialidad y Transporte Urbano: SECTRA</i>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_bo(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>Le Mobiliscope Bogotá utilise les données de l'enquête <i>Encuesta Origen-Destino de Hogares (EODH) 2019</i> fournies par le <i>Sistema Integrado de información sobre Movilidad Urbana Regional</i> (SIMUR).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_sp(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>Le Mobiliscope São Paulo utilise les données de l'enquête <i>Pesquisa Origem e Destino (OD) 2017</i> fournies par la <i>Companhia do Metrô de São Paulo</i>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

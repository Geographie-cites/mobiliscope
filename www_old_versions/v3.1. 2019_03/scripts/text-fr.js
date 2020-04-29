//Déclaration des variables appelées dans loads.js

//Nom des modalités
var modalite = ["personnes", "âgées de 16 à 24 ans", "âgées de 25 à 34 ans", "âgées  de 35 à 64 ans", "âgées de 65 et plus",
				"hommes", "femmes",
				"faible niveau d'éducation", "niveau intermédiaire d'éducation", "niveau élevé d'éducation", "niveau très élevé d'éducation",
				"faible niveau d'éducation (ménage)", "niveau intermédiaire d'éducation (ménage)", "niveau élevé d'éducation (ménage)","niveau très élevé d'éducation (ménage)",
				"inactifs", "ouvriers", "employés", "catégorie socioprofessionnelle intermédiaire", "cadres et professions intellectuelles",
				"inactifs (ménage)", "ouvriers (ménage)", "employés (ménage)", "catégorie socioprofessionnelle intermédiaire (ménage)", "cadres et professions intellectuelles (ménage)",
				"actifs", "étudiants", "sans emploi", "retraités", "inactifs",
				"résidant à ", "résidant en zone urbaine", "résidant en zone périphérique",
				"à la maison", "sur leur lieu de travail", "sur leur lieu d'étude", "faisant des achats", "occupées à un loisir",
				"mobilité douce", "véhicule motorisé privé", "transports publics",
				"très faible revenu", "faible revenu", "revenu élevé", "revenu très élevé",
				"résidant en Seine-Saint-Denis", "résidant dans le Val-de-Marne", "résidant dans les Hauts-de-Seine", "résidant en grande couronne",
				"non-résidents"];

//Nom des indicateurs
var indicator = ["groupe d'âge", "sexe", "niveau d'éducation", "niveau d'éducation du ménage", "catégorie socioprofessionnelle",
				"catégorie socioprofessionnelle du ménage", "occupation principale", "zone de résidence", "activité réalisée", "mode de transport utilisé", "revenu du ménage", "département de résidence"];

// Textes des titres des cartes
var titleMap = ["Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de ",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de non-résidents",				
				"par secteur <span class = 'help' onclick = 'popup_mapTitle2()'>Q</span>",
				"par secteur <span class = 'help' onclick = 'popup_mapTitle2()'>Q</span> <span style = 'font-size : .8em'>(et leur secteur de résidence au survol de la souris)</span>",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de non-résidents",	
				"Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de ",
				"Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes avec un",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes avec un",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de non-résidents avec un",
				"",
				"Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes qui ont utilisé",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes qui ont utilisé",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de non-résidents qui ont utilisé",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de",
				"Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> d'",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> d'",
				"Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> d'",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> d'",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de non-résidents",
				"Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes d'une",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes d'une",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de non-résidents d'une",
				"Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de ",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de ",
				"Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> d'",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> d'",
				"Proportion estimée <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes ",
				"Nombre estimé <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> de personnes ",
				" une", " un", " les"];


// Textes des titres des graphiques "simples"				
var titleUnique = ["Nombre estimé de", "Nombre estimé de non-résidents", "Proportion estimée (%) de personnes",
					"Nombre estimé de personnes", "Nombre estimé de non-résidents", "Proportion estimée (%) de",
					"Nombre estimé de personnes avec un", "Nombre estimé de non-résidents avec un", "Proportion estimée (%) de personnes qui ont utilisé",
					"Nombre estimé de non-résidents qui ont utilisé", "pour arriver à destination", "Proportion estimée (%) de personnes avec un",
					"", "Nombre estimé de personnes qui ont utilisé", "Proportion estimée (%) d'", 
					"Nombre estimé d'", "Proportion estimée (%) d'", "Nombre estimé d'", 
					"Nombre estimé de non-résidents ", "Proportion estimée (%) de personnes d'une", "Nombre estimé de personnes d'une",
					"Nombre estimé de non-résidents d'une", "Proportion estimée (%) de", "Nombre estimé de", 
					"Nombre estimé de non-résidents", "Proportion estimée (%) d'", "Nombre estimé d'",
					"Proportion estimée (%) de personnes ", "Nombre estimé de personnes ", " une", 
					" un", " les"];

// Titres de Duncan et de Moran
var titleSegreg = ["Degré de ségrégation de la population par", " (Duncan) <span class = 'help' onclick = 'popup_segreg()'>Q</span>", 
                   " (Moran) <span class = 'help' onclick = 'popup_segreg()'>Q</span>", "Degré de proximité spatiale de la population par"];






// Déclaration des variables appelées dans load.js

// Sous-titre du bandeau entête
var subTitle = "La ville à toute heure";

// Checkbox
var layersName = ["Routes ", "Cours d'eau ", "Villes principales"]
// Copyright
var copy = "&#9400; Mobiliscope, Géographie-cités, 2019";

// Main title des graphiques
var titleGraph1 = "DANS L'ENSEMBLE DE LA RÉGION";
var titleGraph2 = "DANS LE SECTEUR SÉLECTIONNÉ";

// Messages des graphiques
var graph1Message = "Sélectionnez un indicateur en nb. ou %</br>pour obtenir des valeurs";
var graph2Message = "Sélectionnez un secteur sur la carte</br>pour obtenir des valeurs";

//Nom des onglets des graphiques
var titleAltGr1 = ["Duncan", "Moran"];
var titleAltGr2 = ["Simple", "Empilé"];

// Textes des légendes
var textLegChoro = "Pour chaque modalité, les intervalles de classes restent identiques sur les 24h pour une même region.";
var textLegProp = "La proportionnalité des cercles est la même pour toutes les cartes d'une même région.";
var textLegFlow = ["La proportionnalité des cercles est la même pour toutes les cartes d'une même région.",
				   "L'épaisseur des liens correspond au nombre de personnes présentes dans le secteur selectionné et résidant dans le secteur lié."];
var textLeg = ["Moy. :",
			   " ou moins",
			   "% à ",
			   " ou plus"];

// Titres du graphique empilé
var titleStacked =["Proportion estimée (%) de personnes par <strong>catégorie socioprofessionnelle</strong>",
				   "Nombre estimé de personnes par <strong>catégorie socioprofessionnelle</strong>",
				   "Nombre estimé de non-résidents par <strong>catégorie socioprofessionnelle</strong>",
				   "Proportion estimée (%) de personnes par <strong>catégorie socioprofessionnelle du ménage</strong>",
				   "Nombre estimé de personnes par <strong>catégorie socioprofessionnelle du ménage</strong>",
				   "Nombre estimé de non-résidents par <strong>catégorie socioprofessionnelle du ménage</strong>",
				   "Nombre estimé de personnes par <strong>niveau d'éducation</strong>",
				   "Proportion estimée (%) de personnes par <strong>niveau d'éducation</strong>",
				   "Nombre estimé de non-résidents par <strong>niveau d'éducation</strong>",
				   "Nombre estimé de personnes par <strong>niveau d'éducation du ménage</strong>",
				   "Proportion estimée (%) de personnes par <strong>niveau d'éducation du ménage</strong>",
				   "Nombre estimé de non-résidents par <strong>niveau d'éducation du ménage</strong>",
				   "Nombre estimé de personnes par <strong>activité réalisée</strong>",
				   "Proportion estimée (%) de personnes par <strong>activité réalisée</strong>",
				   "Nombre estimé de non-résidents par <strong>activité réalisée</strong>",
				   "Nombre estimé de personnes par <strong>zone de résidence</strong>",
				   "Proportion estimée (%) de personnes par <strong>zone de résidence</strong>",
				   "Nombre estimé de non-résidents par <strong>zone de résidence</strong>",
				   "Nombre estimé de personnes par <strong>groupe d'âge</strong>",
				   "Proportion estimée (%) de personnes par <strong>groupe d'âge</strong>",
				   "Nombre estimé de non-résidents par <strong>groupe d'âge</strong>",
				   "Nombre estimé de personnes par <strong>occupation principale</strong>",
				   "Proportion estimée (%) de personnes par <strong>occupation principale</strong>",
				   "Nombre estimé de non-résidents par <strong>occupation principale</strong>",
				   "Nombre estimé de personnes par <strong>sexe</strong>",
				   "Proportion estimée (%) de personnes par <strong>sexe</strong>",
				   "Nombre estimé de non-résidents par <strong>sexe</strong>",
				   "Nombre estimé de personnes par <strong>mode de transport utilisé</strong>",
				   "Proportion estimée (%) de personnes par <strong>mode de transport utilisé</strong>",
				   "Nombre estimé de non-résidents par <strong>mode de transport utilisé</strong>",
				   "Nombre estimé de personnes par <strong>revenu du ménage</strong>",
				   "Proportion estimée (%) de personnes par <strong>revenu du ménage</strong>",
				   "Nombre estimé de non-résidents par <strong>revenu du ménage</strong>",
				   "Nombre estimé de personnes par <strong>département de résidence</strong>",
				   "Proportion estimée (%) de personnes par <strong>département de résidence</strong>",
				   "Nombre estimé de non-résidents par <strong>département de résidence</strong>"];

var Xgraph = ["4am", "6am", "8am", "10am", "12am", "2pm", "4pm", "6pm", "8pm", "10pm", "12pm", "2am"];			   

var sliderValue = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

// var Xgraph = ["4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h", "0h", "2h"];			   

// var sliderValue = ["4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "0h", "1h", "2h", "3h"];

// var sliderValueDomX = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];
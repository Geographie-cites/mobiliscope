//Déclaration des variables appelées dans loads.js

//Nom des modalités
var modalite = ["people", "aged 16 to 24", "aged 25 to 34", "aged 35 to 64", "aged 65 and more",
				"men", "women",
				"low educational level", "middle-low educational level", "middle-high educational level", "high educational level",
				"low educational h. level", "middle-low educational h. level", "middle-high educational h. level","high educational h. level",
				"inactiveADISP", "low socioprofessional status", "middle-low socioprofessional status", "middle-high socioprofessional status", "high socioprofessional status",
				"inactive (h.)", "low socioprofessional h. status", "middle-low socioprofessional h. status", "middle-high socioprofessional h. status", "high socioprofessional h. status",
				"active", "students", "unemployed", "retired", "inactive",
				"living in ", "living in urban areas", "living in suburban/peripheral areas",
				"at home", "at work", "studying", "shopping", "on leisure",
				"soft mobility", "private motor vehicule", "public transportation",
				"low household income", "middle-low household income", "middle-high household income", "high household income",
				"living in Seine-Saint-Denis", "living in Val-de-Marne", "living in Hauts-de-Seine", "living in greater Paris",
				"people",
				"missing income"];

//Nom des indicateurs
var indicator = ["age groups", "sex", "educational level", "educational h. level", "socioprofessional status",
				"socioprofessional h. status", "occupational status", "residential area", "current activity", "last mode of transport", "household income", "departement of residence"];

// Textes des titres des cartes
var titleMap = ["Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident",
				"at district level <span class = 'help' onclick = 'popup_mapTitle2()'>Q</span>",
				"at district level <span class = 'help' onclick = 'popup_mapTitle2()'>Q</span> <span style = 'font-size : .8em'>(& their districts of residence on mouseover)</span>",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people",
				"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
				"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people with",
				"people ",
				"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people who used",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people who used",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people who used",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident",
				"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
				"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with ",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with ",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people with",
				"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people with",
				"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
				"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
				"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
				"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
				"", "", ""];

// Textes des titres des graphiques "simples"
var titleUnique = ["Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people with",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people who used",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people who used", "to reach their destination",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with","people",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people who used",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with ",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with ",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people with",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people with",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people with",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of ",
					"Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of",
					"Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of", "","", ""];

// Titres de Duncan et de Moran
var titleSegreg = ["Segregation related to", ": Duncan index <span class = 'help' onclick = 'popup_segreg()'>Q</span>",
                   ": Moran index <span class = 'help' onclick = 'popup_segreg()'>Q</span>", "Spatial proximity of population with same"];






// Déclaration des variables appelées dans load.js

// Sous-titre du bandeau entête
var subTitle = "Cities around the clock";

// Checkbox
var layersName = ["Main roads", "Main rivers", "Main cities"]

// Copyright
var d = new Date();
var copy = "Mobiliscope - " + d.getFullYear() + " <a href='/en/info/about/evolution'>(v3.3)</a>";

// Main title des graphiques
var titleGraph1 = "IN THE WHOLE REGION";
var titleGraph2 = "IN THE SELECTED DISTRICT";

// Messages des graphiques
var graph1Message = "Select an indicator in nb. or %</br>to get spatial distribution indices";
var graph2Message = "Click a district in the map</br>to get local information";

//Nom des onglets des graphiques
var titleAltGr1 = ["Duncan", "Moran"];
var titleAltGr2 = ["Unique", "Stacked"];

// Textes des légendes
var textLegChoro = "For each group, same class intervals apply over the 24h period in the same region.";
var textLegProp = "Circles are proportionally sized according to the number of people and are similar for all maps of the same region.";
var textLegFlow = ["Circles are proportionally sized according to the number of people and are similar for all maps of the same region.",
				   "Link thickness represents people flow between districts where they are located and their districts of residence."];
var textLeg = ["Mean:",
			   " or less",
			   "% to ",
			   " or more"];

// Titres du graphique empilé
var titleStacked =["Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>socioprofessional status</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>socioprofessional status</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>socioprofessional status</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>socioprofessional h. status</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>socioprofessional h. status</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>socioprofessional h. status</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>educational level</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>educational level</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>educational level</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>educational h. level</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>educational h. level</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>educational h. level</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>current activity</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>current activity</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>current activity</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>residential area</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>residential area</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>residential area</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>age groups</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>age groups</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>age groups</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>occupational status</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>occupational status</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>occupational status</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>sex</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>sex</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>sex</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>last mode of transport</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>last mode of transport</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>last mode of transport</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>household income</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>household income</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>household income</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>departement of residence</strong>",
				   "Estimated proportion <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of people by <strong>departement of residence</strong>",
				   "Estimated number <span class = 'help' onclick = 'popup_mapTitle1()'>Q</span> of non resident people by <strong>departement of residence</strong>"];

var Xgraph = ["4am", "6am", "8am", "10am", "12am", "2pm", "4pm", "6pm", "8pm", "10pm", "12pm", "2am"];

var sliderValue = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

// var Xgraph = ["4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h", "0h", "2h"];

// var sliderValue = ["4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "0h", "1h", "2h", "3h"];

// var sliderValueDomX = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

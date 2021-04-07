//Stockage des titres 

//Nom des modalités
/*var modalite = ["personnes", "âgées de 16 à 24 ans", "âgées de 25 à 34 ans", "âgées  de 35 à 64 ans", "âgées de 65 et plus",
				"hommes", "femmes",
				"faible niveau d'éducation", "niveau intermédiaire d'éducation", "niveau élevé d'éducation", "niveau très élevé d'éducation",
				"faible niveau d'éducation (ménage)", "niveau intermédiaire d'éducation (ménage)", "niveau élevé d'éducation (ménage)","niveau très élevé d'éducation (ménage)",
				"inactifs", "ouvriers", "employés", "catégorie socioprofessionnelle intermédiaire", "cadres et professions intellectuelles",
				"inactifs (ménage)", "ouvriers (ménage)", "employés (ménage)", "catégorie socioprofessionnelle intermédiaire (ménage)", "cadres et professions intellectuelles (ménage)",
				"actifs", "étudiants", "sans emploi", "retraités", "inactifs", //29
				"résidant à ", "résidant en zone urbaine", "résidant en zone périphérique",
				"à la maison", "sur leur lieu de travail", "sur leur lieu d'étude", "faisant des achats", "occupées à un loisir",
				"mobilité douce", "véhicule motorisé privé", "transports publics",
				"faible revenu", "revenu intermédiaire", "revenu élevé", "revenu très élevé", //44
				"résidant en Seine-Saint-Denis", "résidant dans le Val-de-Marne", "résidant dans les Hauts-de-Seine", "résidant en grande couronne",
				"non-résidents",
				"revenu non renseigné", "résidant en quartier prioritaire", "résidant hors quartier prioritaire"];*/


// Titres des cartes
var tMap = [
			//Pop totale
			"Densité de <strong>personnes</strong> présentes (nb. pers/km²) par secteur",
			"Nombre estimé de <strong>personnes</strong> par secteur",
			"Nombre estimé de <strong>non-résidents</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Pop résidante
			"Proportion estimée de <strong>résidents</strong> par secteur",
			"Nombre estimé de <strong>résidents</strong> par secteur",
			"Proportion estimée de <strong>non-résidents</strong> par secteur",
			"Nombre estimé de <strong>non-résidents</strong> par secteur",
			//Groupe d'âge
			"Proportion estimée de personnes <strong>âgées de 65 et plus</strong> par secteur",
			"Nombre estimé de personnes <strong>âgées de 65 et plus</strong> par secteur",
			"Nombre estimé de non-résidents <strong>âgés de 65 et plus</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>âgées de 35 à 64 ans</strong> par secteur", //10
			"Nombre estimé de personnes <strong>âgées de 35 à 64 ans</strong> par secteur",
			"Nombre estimé de non-résidents <strong>âgés de 35 à 64 ans</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>âgées de 25 à 34 ans</strong> par secteur",
			"Nombre estimé de personnes <strong>âgées de 25 à 34 ans</strong> par secteur",
			"Nombre estimé de non-résidents <strong>âgés de 25 à 34 ans</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>âgées de 16 à 24 ans</strong> par secteur",
			"Nombre estimé de personnes <strong>âgées de 16 à 24 ans</strong> par secteur",
			"Nombre estimé de non-résidents <strong>âgés de 16 à 24 ans</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Sexe
			"Proportion estimée de <strong>femmes</strong> par secteur",
			"Nombre estimé de <strong>femmes</strong> par secteur", //20
			"Nombre estimé de <strong>femmes</strong> non-résidentes par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>hommes</strong> par secteur",
			"Nombre estimé d'<strong>hommes</strong> par secteur",
			"Nombre estimé d'<strong>hommes</strong> non-résidents par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Niveau d'éducation (ind)
			"Proportion estimée de personnes avec un <strong>niveau très élevé d'éducation</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>niveau très élevé d'éducation</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>niveau très élevé d'éducation</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>niveau élevé d'éducation</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>niveau élevé d'éducation</strong> par secteur", 
			"Nombre estimé de non-résidents avec un <strong>niveau élevé d'éducation</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>niveau intermédiaire d'éducation</strong> par secteur", //31
			"Nombre estimé de personnes avec un <strong>niveau intermédiaire d'éducation</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>niveau intermédiaire d'éducation</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>faible niveau d'éducation</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>faible niveau d'éducation</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>faible niveau d'éducation</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Niveau d'éducation (men)
			"Proportion estimée de personnes avec un <strong>niveau très élevé d'éducation (ménage)</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>niveau très élevé d'éducation (ménage)</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>niveau très élevé d'éducation (ménage)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>niveau élevé d'éducation (ménage)</strong> par secteur", //40
			"Nombre estimé de personnes avec un <strong>niveau élevé d'éducation (ménage)</strong> par secteur", 
			"Nombre estimé de non-résidents avec un <strong>niveau élevé d'éducation (ménage)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>niveau intermédiaire d'éducation (ménage)</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>niveau intermédiaire d'éducation (ménage)</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>niveau intermédiaire d'éducation (ménage)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>faible niveau d'éducation (ménage)</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>faible niveau d'éducation (ménage)</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>faible niveau d'éducation (ménage)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Revenu du ménage
			"Proportion estimée de personnes avec un <strong>revenu élevé</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>revenu élevé</strong> par secteur", //50
			"Nombre estimé de non-résidents avec un <strong>revenu élevé</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>revenu intermédiaire (sup.)</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>revenu intermédiaire (sup.)</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>revenu intermédiaire (sup.)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>revenu intermédiaire (inf.)</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>revenu intermédiaire (inf.)</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>revenu intermédiaire (inf.)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>faible revenu</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>faible revenu</strong> par secteur", 
			"Nombre estimé de non-résidents avec un <strong>faible revenu</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>revenu non renseigné</strong> par secteur", //61
			"Nombre estimé de personnes avec un <strong>revenu non renseigné</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>revenu non renseigné</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//CSP (ind)
			"Proportion estimée de <strong>cadres et professions intellectuelles</strong> par secteur",
			"Nombre estimé de <strong>cadres et professions intellectuelles</strong> par secteur",
			"Nombre estimé de non-résidents <strong>cadres et professions intellectuelles</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes d'une <strong>catégorie socioprofessionnelle intermédiaire</strong> par secteur",
			"Nombre estimé de personnes d'une <strong>catégorie socioprofessionnelle intermédiaire</strong> par secteur",
			"Nombre estimé de non-résidents d'une <strong>catégorie socioprofessionnelle intermédiaire</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>employés</strong> par secteur", //70
			"Nombre estimé d'<strong>employés</strong> par secteur",
			"Nombre estimé de non-résidents <strong>employés</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>ouvriers</strong> par secteur",
			"Nombre estimé d'<strong>ouvriers</strong> par secteur",
			"Nombre estimé de non-résidents <strong>ouvriers</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>inactifs</strong> par secteur",
			"Nombre estimé d'<strong>inactifs</strong> par secteur",
			"Nombre estimé de non-résidents <strong>inactifs</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//CSP (men)
			"Proportion estimée de <strong>cadres et professions intellectuelles (ménage)</strong> par secteur",
			"Nombre estimé de <strong>cadres et professions intellectuelles (ménage)</strong> par secteur", //80
			"Nombre estimé de non-résidents <strong>cadres et professions intellectuelles (ménage)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes d'une <strong>catégorie socioprofessionnelle intermédiaire (ménage)</strong> par secteur",
			"Nombre estimé de personnes d'une <strong>catégorie socioprofessionnelle intermédiaire (ménage)</strong> par secteur",
			"Nombre estimé de non-résidents d'une <strong>catégorie socioprofessionnelle intermédiaire (ménage)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>employés (ménage)</strong> par secteur", 
			"Nombre estimé d'<strong>employés (ménage)</strong> par secteur",
			"Nombre estimé de non-résidents <strong>employés (ménage)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>ouvriers (ménage)</strong> par secteur",
			"Nombre estimé d'<strong>ouvriers (ménage)</strong> par secteur", 
			"Nombre estimé de non-résidents <strong>ouvriers (ménage)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>inactifs (ménage)</strong> par secteur", //91
			"Nombre estimé d'<strong>inactifs (ménage)</strong> par secteur",
			"Nombre estimé de non-résidents <strong>inactifs (ménage)</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Statut d'occupation
			"Proportion estimée d'<strong>inactifs</strong> par secteur",
			"Nombre estimé d'<strong>inactifs</strong> par secteur",
			"Nombre estimé de non-résidents <strong>inactifs</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de <strong>retraités</strong> par secteur",
			"Nombre estimé de <strong>retraités</strong> par secteur",
			"Nombre estimé de non-résidents <strong>retraités</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>sans emploi</strong> par secteur", //100
			"Nombre estimé de personnes <strong>sans emploi</strong> par secteur",
			"Nombre estimé de non-résidents <strong>sans emploi</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>étudiants</strong> par secteur",
			"Nombre estimé d'<strong>étudiants</strong> par secteur",
			"Nombre estimé de non-résidents <strong>étudiants</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>actifs</strong> par secteur",
			"Nombre estimé d'<strong>actifs</strong> par secteur",
			"Nombre estimé de non-résidents <strong>actifs</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			// Département de résidance
			"Proportion estimée de personnes <strong>résidant en grande couronne</strong> par secteur",
			"Nombre estimé de personnes <strong>résidant en grande couronne</strong> par secteur", //110
			"Nombre estimé de non-résidents <strong>résidant en grande couronne</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant dans les Hauts-de-Seine</strong> par secteur",
			"Nombre estimé de personnes <strong>résidant dans les Hauts-de-Seine</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant dans les Hauts-de-Seine</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant dans le Val-de-Marne</strong> par secteur",
			"Nombre estimé de personnes <strong>résidant dans le Val-de-Marne</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant dans le Val-de-Marne</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant en Seine-Saint-Denis</strong> par secteur",
			"Nombre estimé de personnes <strong>résidant en Seine-Saint-Denis</strong> par secteur", 
			"Nombre estimé de non-résidents <strong>résidant en Seine-Saint-Denis</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant à Paris</strong> par secteur", //121
			"Nombre estimé de personnes <strong>résidant à Paris</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant à Paris</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Zonage en aire urbaine
			"Proportion estimée de personnes <strong>résidant à</strong> ", " par secteur",
			"Nombre estimé de personnes <strong>résidant à</strong> ", " par secteur",
			"Nombre estimé de non-résidents <strong>résidant à</strong> ", " par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant en zone urbaine</strong> par secteur", //130
			"Nombre estimé de personnes <strong>résidant en zone urbaine</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant en zone urbaine</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant en zone périphérique</strong> par secteur", 
			"Nombre estimé de personnes <strong>résidant en zone périphérique</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant en zone périphérique</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//QPV
			"Proportion estimée de personnes <strong>résidant en QPV</strong> par secteur",
			"Nombre estimé de personnes <strong>résidant en QPV</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant en QPV</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant hors QPV</strong> par secteur",
			"Nombre estimé de personnes <strong>résidant hors QPV</strong> par secteur", //140
			"Nombre estimé de non-résidents <strong>résidant hors QPV</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Activités
			"Proportion estimée de personnes <strong>occupées à un loisir</strong> par secteur",
			"Nombre estimé de personnes <strong>occupées à un loisir</strong> par secteur",
			"Nombre estimé de non-résidents <strong>occupées à un loisir</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>faisant des achats</strong> par secteur",
			"Nombre estimé de personnes <strong>faisant des achats</strong> par secteur",
			"Nombre estimé de non-résidents <strong>faisant des achats</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>sur leur lieu d'étude</strong> par secteur",
			"Nombre estimé de personnes <strong>sur leur lieu d'étude</strong> par secteur",
			"Nombre estimé de non-résidents <strong>sur leur lieu d'étude</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>sur leur lieu de travail</strong> par secteur", //151
			"Nombre estimé de personnes <strong>sur leur lieu de travail</strong> par secteur",
			"Nombre estimé de non-résidents <strong>sur leur lieu de travail</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>à la maison</strong> par secteur",
			"Nombre estimé de personnes <strong>à la maison</strong> par secteur",
			//Mode de transport
			"Proportion estimée de personnes qui ont utilisé une <strong>mobilité douce</strong> par secteur",
			"Nombre estimé de personnes qui ont utilisé une <strong>mobilité douce</strong> par secteur",
			"Nombre estimé de non-résidents qui ont utilisé une <strong>mobilité douce</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes qui ont utilisé un <strong>véhicule motorisé privé</strong> par secteur",
			"Nombre estimé de personnes qui ont utilisé un <strong>véhicule motorisé privé</strong> par secteur", //160
			"Nombre estimé de non-résidents qui ont utilisé un <strong>véhicule motorisé privé</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes qui ont utilisé les <strong>transports publics</strong> par secteur",
			"Nombre estimé de personnes qui ont utilisé les <strong>transports publics</strong> par secteur",
			"Nombre estimé de non-résidents qui ont utilisé les <strong>transports publics</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>"
			];


// Titres des graphiques "simples"
var tUnique = [
			   //Pop totale
			   "Densité de <strong>personnes</strong> présentes (nb. pers/km²)",
			   "Nombre estimé de <strong>personnes</strong>",
			   "Nombre estimé de <strong>personnes</strong> non-résidentes",
			   //Pop résidente
			   "Proportion (%) estimée de <strong>résidents</strong>",
			   "Nombre estimé de <strong>résidents</strong>",
			   "Proportion (%) estimée de <strong>non résidents</strong>",
			   "Nombre estimé de <strong>non résidents</strong>",
			   //Groupe d'âge
			   "Proportion (%) estimée de personnes <strong>âgées de 65 et plus</strong>",
			   "Nombre estimé de personnes <strong>âgées de 65 et plus</strong>",
			   "Nombre estimé de non-résidents <strong>âgés de 65 et plus</strong>",
			   "Proportion (%) estimée de personnes <strong>âgées de 35 à 64 ans</strong>", //10
			   "Nombre estimé de personnes <strong>âgées de 35 à 64 ans</strong>",
			   "Nombre estimé de non-résidents <strong>âgés de 35 à 64 ans</strong>",
			   "Proportion (%) estimée de personnes <strong>âgées de 25 à 34 ans</strong>",
			   "Nombre estimé de personnes <strong>âgées de 25 à 34 ans</strong>",
			   "Nombre estimé de non-résidents <strong>âgés de 25 à 34 ans</strong>",
			   "Proportion (%) estimée de personnes <strong>âgées de 16 à 24 ans</strong>",
			   "Nombre estimé de personnes <strong>âgées de 16 à 24 ans</strong>",
			   "Nombre estimé de non-résidents <strong>âgés de 16 à 24 ans</strong>",
			   //sexe
			   "Proportion (%) estimée de <strong>femmes</strong>",
			   "Nombre estimé de <strong>femmes</strong>", //20
			   "Nombre estimé de non-résidents <strong>femmes</strong>",
			   "Proportion (%) estimée d'<strong>hommes</strong>",
			   "Nombre estimé d'<strong>hommes</strong>",
			   "Nombre estimé de non-résidents <strong>hommes</strong>",
			   // Niveau d'éducation (ind)
			   "Proportion (%) estimée de personnes avec un <strong>niveau très élevé d'éducation</strong>",
			   "Nombre estimé de personnes avec un <strong>niveau très élevé d'éducation</strong>",
			   "Nombre estimé de non-résidents avec un <strong>niveau très élevé d'éducation</strong>",
			   "Proportion (%) estimée de personnes avec un <strong>niveau élevé d'éducation</strong>",
			   "Nombre estimé de personnes avec un <strong>niveau élevé d'éducation</strong>",
			   "Nombre estimé de non-résidents avec un <strong>niveau élevé d'éducation</strong>", //30
			   "Proportion (%) estimée de personnes avec un <strong>niveau intermédiaire d'éducation</strong>",
			   "Nombre estimé de personnes avec un <strong>niveau intermédiaire d'éducation</strong>",
			   "Nombre estimé de non-résidents avec un <strong>niveau intermédiaire d'éducation</strong>",
			   "Proportion (%) estimée de personnes avec un <strong>faible niveau d'éducation</strong>",
			   "Nombre estimé de personnes avec un <strong>faible niveau d'éducation</strong>",
			   "Nombre estimé de non-résidents avec un <strong>faible niveau d'éducation</strong>",
			   // Niveau d'éducation (men)
			   "Proportion (%) estimée de personnes avec un <strong>niveau très élevé d'éducation (ménage)</strong>",
			   "Nombre estimé de personnes avec un <strong>niveau très élevé d'éducation (ménage)</strong>",
			   "Nombre estimé de non-résidents avec un <strong>niveau très élevé d'éducation (ménage)</strong>",
			   "Proportion (%) estimée de personnes avec un <strong>niveau élevé d'éducation (ménage)</strong>", //40
			   "Nombre estimé de personnes avec un <strong>niveau élevé d'éducation (ménage)</strong>",
			   "Nombre estimé de non-résidents avec un <strong>niveau élevé d'éducation (ménage)</strong>",
			   "Proportion (%) estimée de personnes avec un <strong>niveau intermédiaire d'éducation (ménage)</strong>",
			   "Nombre estimé de personnes avec un <strong>niveau intermédiaire d'éducation (ménage)</strong>",
			   "Nombre estimé de non-résidents avec un <strong>niveau intermédiaire d'éducation (ménage)</strong>",
			   "Proportion (%) estimée de personnes avec un <strong>faible niveau d'éducation (ménage)</strong>",
			   "Nombre estimé de personnes avec un <strong>faible niveau d'éducation (ménage)</strong>",
			   "Nombre estimé de non-résidents avec un <strong>faible niveau d'éducation (ménage)</strong>",
			   //Revenu du ménage
			   "Proportion (%) estimée de personnes avec un <strong>revenu élevé</strong>",
			   "Nombre estimé de personnes avec un <strong>revenu élevé</strong>", //50
			   "Nombre estimé de non-résidents avec un <strong>revenu élevé</strong>",
			   "Proportion (%) estimée de personnes avec un <strong>revenu intermédiaire (sup.)</strong>",
			   "Nombre estimé de personnes avec un <strong>revenu intermédiaire (sup.)</strong>",
			   "Nombre estimé de non-résidents avec un <strong>revenu intermédiaire (sup.)</strong>",
			   "Proportion (%) estimée de personnes avec un <strong>revenu intermédiaire (inf.)</strong>",
			   "Nombre estimé de personnes avec un <strong>revenu intermédiaire (inf.)</strong>",
			   "Nombre estimé de non-résidents avec un <strong>revenu intermédiaire (inf.)</strong>",
			   "Proportion (%) estimée de personnes avec un <strong>faible revenu</strong>",
			   "Nombre estimé de personnes avec un <strong>faible revenu</strong>",
			   "Nombre estimé de non-résidents avec un <strong>faible revenu</strong>", //60
			   "Proportion (%) estimée de personnes avec un <strong>revenu non renseigné</strong>",
			   "Nombre estimé de personnes avec un <strong>revenu non renseigné</strong>",
			   "Nombre estimé de non-résidents avec un <strong>revenu non renseigné</strong>",
			   //CSP
			   "Proportion (%) estimée de <strong>cadres et professions intellectuelles</strong>",
			   "Nombre estimé de <strong>cadres et professions intellectuelles</strong>",
			   "Nombre estimé de non-résidents <strong>cadres et professions intellectuelles</strong>",
			   "Proportion (%) estimée de personnes d'une <strong>catégorie socioprofessionnelle intermédiaire</strong>",
			   "Nombre estimé de personnes d'une <strong>catégorie socioprofessionnelle intermédiaire</strong>",
			   "Nombre estimé de non-résidents d'une <strong>catégorie socioprofessionnelle intermédiaire</strong>",
			   "Proportion (%) estimée d'<strong>employés</strong>", //70
			   "Nombre estimé d'employés</strong>",
			   "Nombre estimé de non-résidents <strong>employés</strong>",
			   "Proportion (%) estimée d'<strong>ouvriers</strong>",
			   "Nombre estimé d'<strong>ouvriers</strong>",
			   "Nombre estimé de non-résidents <strong>ouvriers</strong>",
			   "Proportion (%) estimée d'<strong>inactifs</strong>",
			   "Nombre estimé d'<strong>inactifs</strong>",
			   "Nombre estimé de non-résidents <strong>inactifs</strong>",
			   //CSP (ménage)
			   "Proportion (%) estimée de <strong>cadres et professions intellectuelles (ménage)</strong>",
			   "Nombre estimé de <strong>cadres et professions intellectuelles (ménage)</strong>", //80
			   "Nombre estimé de non-résidents <strong>cadres et professions intellectuelles (ménage)</strong>",
			   "Proportion (%) estimée de personnes d'une <strong>catégorie socioprofessionnelle intermédiaire (ménage)</strong>",
			   "Nombre estimé de personnes d'une <strong>catégorie socioprofessionnelle intermédiaire (ménage)</strong>",
			   "Nombre estimé de non-résidents d'une <strong>catégorie socioprofessionnelle intermédiaire (ménage)</strong>",
			   "Proportion (%) estimée d'<strong>employés (ménage)</strong>",
			   "Nombre estimé d'employés (ménage)</strong>",
			   "Nombre estimé de non-résidents <strong>employés (ménage)</strong>",
			   "Proportion (%) estimée d'<strong>ouvriers (ménage)</strong>",
			   "Nombre estimé d'<strong>ouvriers (ménage)</strong>",
			   "Nombre estimé de non-résidents <strong>ouvriers (ménage)</strong>", //90
			   "Proportion (%) estimée d'<strong>inactifs (ménage)</strong>",
			   "Nombre estimé d'<strong>inactifs (ménage)</strong>",
			   "Nombre estimé de non-résidents <strong>inactifs (ménage)</strong>",
			   //Occupation principale
			   "Proportion (%) estimée d'<strong>inactifs</strong>",
			   "Nombre estimé d'<strong>inactifs</strong>",
			   "Nombre estimé de non-résidents <strong>inactifs</strong>",
			   "Proportion estimée de <strong>retraités</strong>",
			   "Nombre estimé de <strong>retraités</strong>",
			   "Nombre estimé de non-résidents <strong>retraités</strong>",
			   "Proportion estimée (%) de personnes <strong>sans emploi</strong>", //100
			   "Nombre estimé de personnes <strong>sans emploi</strong>",
			   "Nombre estimé de non-résidents <strong>sans emploi</strong>",
			   "Proportion (%) estimée d'<strong>étudiants</strong>",
			   "Nombre estimé d'<strong>étudiants</strong>",
			   "Nombre estimé de non-résidents <strong>étudiants</strong>",
			   "Proportion (%) estimée d'<strong>actifs</strong>",
			   "Nombre estimé d'<strong>actifs</strong>",
			   "Nombre estimé de non-résidents <strong>actifs</strong>",
			   //Département de résidence
			   "Proportion (%) estimée de personnes <strong>résidant en grande couronne</strong>",
			   "Nombre estimé de personnes <strong>résidant en grande couronne</strong>", //110
			   "Nombre estimé de non-résidents <strong>résidant en grande couronne</strong>",
			   "Proportion (%) estimée de personnes <strong>résidant dans les Hauts-de-Seine</strong>",
			   "Nombre estimé de personnes <strong>résidant dans les Hauts-de-Seine</strong>",
			   "Nombre estimé de non-résidents <strong>résidant dans les Hauts-de-Seine</strong>",
			   "Proportion (%) estimée de personnes <strong>résidant dans le Val-de-Marne</strong>",
			   "Nombre estimé de personnes <strong>résidant dans le Val-de-Marne</strong>",
			   "Nombre estimé de non-résidents <strong>résidant dans le Val-de-Marne</strong>",
			   "Proportion (%) estimée de personnes <strong>résidant en Seine-Saint-Denis</strong>",
			   "Nombre estimé de personnes <strong>résidant en Seine-Saint-Denis</strong>",
			   "Nombre estimé de non-résidents <strong>résidant en Seine-Saint-Denis</strong>", //120
			   "Proportion (%) estimée de personnes <strong>résidant à Paris</strong>",
			   "Nombre estimé de personnes <strong>résidant à Paris</strong>",
			   "Nombre estimé de non-résidents <strong>résidant à Paris</strong>",
			   //Zonage en aire urbaine
			   "Proportion (%) estimée de personnes <strong>résidant à</strong> ",
			   "Nombre estimé de personnes <strong>résidant à</strong> ",
			   "Nombre estimé de non-résidents <strong>résidant à</strong> ",
			   "Proportion (%) estimée de personnes <strong>résidant en zone urbaine</strong>",
			   "Nombre estimé de personnes <strong>résidant en zone urbaine</strong>",
			   "Nombre estimé de non-résidents <strong>résidant en zone urbaine</strong>",
			   "Proportion (%) estimée de personnes <strong>résidant en zone périphérique</strong>", //130
			   "Nombre estimé de personnes <strong>résidant en zone périphérique</strong>",
			   "Nombre estimé de non-résidents <strong>résidant en zone périphérique</strong>",
			   //QPV
			   "Proportion (%) estimée de personnes <strong>résidant en QPV</strong> ",
			   "Nombre estimé de personnes <strong>résidant en QPV</strong> ",
			   "Nombre estimé de non-résidents <strong>résidant en QPV</strong> ",
			   "Proportion (%) estimée de personnes <strong>résidant hors QPV</strong>",
			   "Nombre estimé de personnes <strong>résidant hors QPV</strong> ", 
			   "Nombre estimé de non-résidents <strong>résidant hors QPV</strong>",
			   //Activités
				"Proportion (%) estimée de personnes <strong>occupées à un loisir</strong> ",
				"Nombre estimé de personnes <strong>occupées à un loisir</strong> ", //140
				"Nombre estimé de non-résidents <strong>occupées à un loisir</strong>",
				"Proportion (%) estimée de personnes <strong>faisant des achats</strong> ",
				"Nombre estimé de personnes <strong>faisant des achats</strong> ",
				"Nombre estimé de non-résidents <strong>faisant des achats</strong>",
				"Proportion (%) estimée de personnes <strong>sur leur lieu d'étude</strong> ",
				"Nombre estimé de personnes <strong>sur leur lieu d'étude</strong> ",
				"Nombre estimé de non-résidents <strong>sur leur lieu d'étude</strong>",
				"Proportion (%) estimée de personnes <strong>sur leur lieu de travail</strong> ", 
				"Nombre estimé de personnes <strong>sur leur lieu de travail</strong> ",
				"Nombre estimé de non-résidents <strong>sur leur lieu de travail</strong>", //150
				"Proportion (%) estimée de personnes <strong>à la maison</strong> ",
				"Nombre estimé de personnes <strong>à la maison</strong> ",
				//Mode de transport
				"Proportion (%) estimée de personnes qui ont utilisé une <strong>mobilité douce</strong> ",
				"Nombre estimé de personnes qui ont utilisé une <strong>mobilité douce</strong> ",
				"Nombre estimé de non-résidents qui ont utilisé une <strong>mobilité douce</strong>",
				"Proportion (%) estimée de personnes qui ont utilisé un <strong>véhicule motorisé privé</strong> ",
				"Nombre estimé de personnes qui ont utilisé un <strong>véhicule motorisé privé</strong> ", 
				"Nombre estimé de non-résidents qui ont utilisé un <strong>véhicule motorisé privé</strong>",
				"Proportion (%) estimée de personnes qui ont utilisé les <strong>transports publics</strong> ",
				"Nombre estimé de personnes qui ont utilisé les <strong>transports publics</strong> ", //160
				"Nombre estimé de non-résidents qui ont utilisé les <strong>transports publics</strong>"
				];

// Titres des graphique empilés
var titleStacked =["Proportion (%) estimée de personnes par <strong>catégorie socioprofessionnelle</strong>",
				   "Nombre estimé de personnes par <strong>catégorie socioprofessionnelle</strong>",
				   "Nombre estimé de non-résidents par <strong>catégorie socioprofessionnelle</strong>",
				   "Proportion (%) estimée de personnes par <strong>catégorie socioprofessionnelle du ménage</strong>",
				   "Nombre estimé de personnes par <strong>catégorie socioprofessionnelle du ménage</strong>",
				   "Nombre estimé de non-résidents par <strong>catégorie socioprofessionnelle du ménage</strong>",
				   "Nombre estimé de personnes par <strong>niveau d'éducation</strong>",
				   "Proportion (%) estimée de personnes par <strong>niveau d'éducation</strong>",
				   "Nombre estimé de non-résidents par <strong>niveau d'éducation</strong>",
				   "Nombre estimé de personnes par <strong>niveau d'éducation du ménage</strong>",
				   "Proportion (%) estimée de personnes par <strong>niveau d'éducation du ménage</strong>",
				   "Nombre estimé de non-résidents par <strong>niveau d'éducation du ménage</strong>",
				   "Nombre estimé de personnes par <strong>activité réalisée</strong>",
				   "Proportion (%) estimée de personnes par <strong>activité réalisée</strong>",
				   "Nombre estimé de non-résidents par <strong>activité réalisée</strong>",
				   "Nombre estimé de personnes par <strong>zone de résidence</strong>",
				   "Proportion (%) estimée de personnes par <strong>zone de résidence</strong>",
				   "Nombre estimé de non-résidents par <strong>zone de résidence</strong>",
				   "Nombre estimé de personnes par <strong>groupe d'âge</strong>",
				   "Proportion (%) estimée de personnes par <strong>groupe d'âge</strong>",
				   "Nombre estimé de non-résidents par <strong>groupe d'âge</strong>",
				   "Nombre estimé de personnes par <strong>occupation principale</strong>",
				   "Proportion (%) estimée de personnes par <strong>occupation principale</strong>",
				   "Nombre estimé de non-résidents par <strong>occupation principale</strong>",
				   "Nombre estimé de personnes par <strong>sexe</strong>",
				   "Proportion (%) estimée de personnes par <strong>sexe</strong>",
				   "Nombre estimé de non-résidents par <strong>sexe</strong>",
				   "Nombre estimé de personnes selon le <strong>dernier mode de transport utilisé</strong>",
				   "Proportion (%) estimée de personnes selon le <strong>dernier mode de transport utilisé</strong>",
				   "Nombre estimé de non-résidents selon le <strong>dernier mode de transport utilisé</strong>",
				   "Nombre estimé de personnes par <strong>revenu du ménage</strong>",
				   "Proportion (%) estimée de personnes par <strong>revenu du ménage</strong>",
				   "Nombre estimé de non-résidents par <strong>revenu du ménage</strong>",
				   "Nombre estimé de personnes par <strong>département de résidence</strong>",
				   "Proportion (%) estimée de personnes par <strong>département de résidence</strong>",
				   "Nombre estimé de non-résidents par <strong>département de résidence</strong>",
				   "Proportion (%) estimée de personnes selon leur <strong>résidence dans/hors QPV</strong>",
				   "Nombre estimé de personnes selon la <strong>résidence dans/hors QPV</strong>",
				   "Nombre estimé de non-résidents selon la <strong>résidence dans/hors QPV)</strong>",
				   "Proportion (%) estimée de personnes selon leur <strong>secteur de résidence</strong>",
				   "Nombre estimé de personnes selon leur <strong>secteur de résidence</strong>"];


var spanPopup = ["<span class = 'help' onclick = 'popup_mapTitle1()'></span>"];

//Nom des indicateurs
var indicator = ["le groupe d'âge", "le sexe", "le niveau d'éducation", "le niveau d'éducation du ménage", 
				"la catégorie socioprofessionnelle", "la catégorie socioprofessionnelle du ménage", 
				"l'occupation principale", "la zone de résidence", "l'activité réalisée", "le mode de transport utilisé", 
				"le revenu du ménage", "le département de résidence", "la résidence dans/hors QPV"];

// Titres de Duncan et de Moran
var titleSegreg = ["Intensité de la ségrégation selon", 
				   " (Duncan) <span class = 'help' onclick = 'popup_duncan()'></span>",
                   " (Moran) <span class = 'help' onclick = 'popup_moran()'></span>", 
                   "Degré de proximité spatiale selon"];



// Déclaration des variables appelées dans load.js
//Nom des couches OSM
var overlayName = ['Fond de carte simple', 'Fond de carte détaillé', 'Quartiers prioritaires (QPV)'];
var lcHover = ['Calques'];

// Sous-titre du bandeau entête
var subTitle = "La ville à toute heure";

// Checkbox
var layersName = ["Routes ", "Cours d'eau ", "Villes principales"]

// Copyright
var d = new Date();
//var copy = " Mobiliscope - " + d.getFullYear() + " (" + "<a href='/fr/info/about/evolution'>v4.0</a>" + ")";
var copy = "Mobiliscope (" + "<a href='/fr/info/open/evolution' target='_blank'>v4.0</a>" + ")";

// Main title des graphiques
var titleGraph1 = "DANS L'ENSEMBLE DE LA RÉGION";
var titleGraph2 = "DANS LE SECTEUR SÉLECTIONNÉ";

// Messages des graphiques
var graph1Message = "Les indicateurs de ségrégation ne sont pas disponibles pour cet indicateur ou ce mode de représentation";
var graph2Message = "Sélectionnez un secteur sur la carte</br>pour obtenir des valeurs";

//Nom des onglets des graphiques
var titleAltGr1 = ["Duncan", "Moran"];
var titleAltGr2 = ["Simple", "Empilé"];

// Textes des légendes
var discretMethod = ['</br>Discrétisation en quintiles. ', 
					 'Discrétisation manuelle. ', 
					 'Discrétisation en amplitude égale. ',
					 'Discrétisation selon les seuils naturels. '];
var textLegChoro = ["Pour chaque modalité, les intervalles de classes restent identiques sur les 24h pour une même région.",
					"Discrétisation par moyennes emboîtées. Les classes restent identiques sur les 24h pour une même region.",
					"Pour cette modalité, les intervalles de classes restent identiques sur les 24h et pour toutes les régions françaises et canadiennes.",
					"Les intervalles de classe restent identiques sur les 24h pour toutes les modalités de l'indicateur et pour toutes les régions françaises.",
					"Les intervalles de classe restent identiques sur les 24h pour toutes les modalités de l'indicateur."];
var textLegProp = "La proportionnalité des cercles est la même pour toutes les cartes d'une même région.";
var textLegFlow = ["La proportionnalité des cercles est la même pour toutes les cartes d'une même région.",
				   "L'épaisseur des liens principaux correspond au nombre de personnes présentes dans le secteur selectionné et résidant dans le secteur lié."];
var textLeg = ["Moy. :",
			   " ou moins",
			   "% à ",
			   " ou plus"];

var Xgraph = ["4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h", "0h", "2h"];

var sliderValue = ["4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "0h", "1h", "2h", "3h"];

var sliderValueDomX = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

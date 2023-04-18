//Stockage des titres

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
			// Département de résidence
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
			"Proportion estimée de personnes qui ont utilisé un <strong>mode doux</strong> par secteur",
			"Nombre estimé de personnes qui ont utilisé un <strong>mode doux</strong> par secteur",
			"Nombre estimé de non-résidents qui ont utilisé un <strong>mode doux</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes qui ont utilisé un <strong>véhicule motorisé individuel</strong> par secteur",
			"Nombre estimé de personnes qui ont utilisé un <strong>véhicule motorisé individuel</strong> par secteur", //160
			"Nombre estimé de non-résidents qui ont utilisé un <strong>véhicule motorisé individuel</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes qui ont utilisé les <strong>transports collectifs</strong> par secteur",
			"Nombre estimé de personnes qui ont utilisé les <strong>transports collectifs</strong> par secteur",
			"Nombre estimé de non-résidents qui ont utilisé les <strong>transports collectifs</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Groupe d'âge bis (Amérique du Sud) ABANDON
			"Proportion estimée de personnes <strong>âgées de 61 et plus</strong> par secteur", //165
			"Nombre estimé de personnes <strong>âgées de 61 et plus</strong> par secteur",
			"Nombre estimé de non-résidents <strong>âgés de 61 et plus</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>âgées de 41 à 60 ans</strong> par secteur",
			"Nombre estimé de personnes <strong>âgées de 41 à 60 ans</strong> par secteur",
			"Nombre estimé de non-résidents <strong>âgés de 41 à 60 ans</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>âgées de 26 à 40 ans</strong> par secteur",
			"Nombre estimé de personnes <strong>âgées de 26 à 40 ans</strong> par secteur",
			"Nombre estimé de non-résidents <strong>âgés de 26 à 40 ans</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>âgées de 16 à 25 ans</strong> par secteur",
			"Nombre estimé de personnes <strong>âgées de 16 à 25 ans</strong> par secteur", //175
			"Nombre estimé de non-résidents <strong>âgés de 16 à 25 ans</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Revenu du ménage (Amérique du Sud)
			"Proportion estimée de personnes avec un <strong>revenu très élevé</strong> par secteur", //177
			"Nombre estimé de personnes avec un <strong>revenu très élevé</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>revenu très élevé</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>revenu élevé</strong> par secteur", //180
			"Nombre estimé de personnes avec un <strong>revenu élevé</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>revenu élevé</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>revenu intermédiaire</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>revenu intermédiaire</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>revenu intermédiaire</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>faible revenu</strong> par secteur", //186
			"Nombre estimé de personnes avec un <strong>faible revenu</strong> par secteur",
			"Nombre estimé de non-résidents avec un <strong>faible revenu</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes avec un <strong>revenu très faible</strong> par secteur",
			"Nombre estimé de personnes avec un <strong>revenu très faible</strong> par secteur", //190
			"Nombre estimé de non-résidents avec un <strong>revenu très faible</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//CSO (Amérique du Sud)
			"Proportion estimée de <strong>cadres et professions intellectuelles</strong> par secteur", //192
			"Nombre estimé de <strong>cadres et professions intellectuelles</strong> par secteur",
			"Nombre estimé de non-résidents <strong>cadres et professions intellectuelles</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>indépendants</strong> par secteur", //195
			"Nombre estimé d'<strong>indépendants</strong> par secteur",
			"Nombre estimé de non-résidents <strong>indépendants</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de <strong>travailleurs qualifiés</strong> par secteur",
			"Nombre estimé de <strong>travailleurs qualifiés</strong> par secteur",
			"Nombre estimé de non-résidents <strong>travailleurs qualifiés</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de <strong>travailleurs non qualifiés</strong> par secteur", //201
			"Nombre estimé de <strong>travailleurs non qualifiés</strong> par secteur",
			"Nombre estimé de non-résidents <strong>travailleurs non qualifiés</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Informalité (Bogota et Sao Paulo)
			"Proportion estimée d'<strong>actifs ayant un emploi informel</strong> par secteur", //204
			"Nombre estimé d'<strong>actifs ayant un emploi informel</strong> par secteur",
			"Nombre estimé d'<strong>actifs ayant un emploi informel</strong> non-résidents par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée d'<strong>actifs ayant un emploi formel</strong> par secteur",
			"Nombre estimé d'<strong>actifs ayant un emploi formel</strong> par secteur", //208
			"Nombre estimé d'<strong>actifs ayant un emploi formel</strong> non-résidents par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Zonage METAL (Bogota)
			"Proportion estimée de personnes <strong>résidant dans le centre</strong> par secteur", //210
			"Nombre estimé de personnes <strong>résidant dans le centre</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant dans le centre</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant dans le péricentre</strong> par secteur",
			"Nombre estimé de personnes <strong>résidant dans le péricentre</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant dans le péricentre</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant dans la périphérie proche</strong> par secteur", //216
			"Nombre estimé de personnes <strong>résidant dans la périphérie proche</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant dans la périphérie proche</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant dans la périphérie lointaine</strong> par secteur",
			"Nombre estimé de personnes <strong>résidant dans la périphérie lointaine</strong> par secteur", //220
			"Nombre estimé de non-résidents <strong>résidant dans la périphérie lointaine</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Strate socio-éco (Bogota)
			"Proportion estimée de personnes <strong>résidant dans une strate 4, 5 ou 6</strong> par secteur", //222
			"Nombre estimé de personnes <strong>résidant dans une strate 4, 5 ou 6</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant dans une strate 4, 5 ou 6</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant dans une strate 3</strong> par secteur", //225
			"Nombre estimé d e personnes <strong>résidant dans une strate 3</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant dans une strate 3</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant dans une strate 2</strong> par secteur",
			"Nombre estimé de personnes <strong>résidant dans une strate 2</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant dans une strate 2</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>résidant dans une strate 1 ou un îlot non stratifié</strong> par secteur", //231
			"Nombre estimé de personnes <strong>résidant dans une strate 1 ou un îlot non stratifié</strong> par secteur",
			"Nombre estimé de non-résidents <strong>résidant dans une strate 1 ou un îlot non stratifié</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Activité 6 : démarches admin./perso (Amérique du Sud)
			"Proportion estimée de personnes <strong>occupées par des démarches administratives ou personnelles</strong> par secteur", //234
			"Nombre estimé de personnes <strong>occupées par des démarches administratives ou personnelles</strong> par secteur",
			"Nombre estimé de non-résidents <strong>occupées par des démarches administratives ou personnelles</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Mode 4 : TransMilenio (Bogota)
			"Proportion estimée de personnes qui ont utilisé le <strong>TransMilenio</strong> par secteur", //237
			"Nombre estimé de personnes qui ont utilisé le <strong>TransMilenio</strong> par secteur",
			"Nombre estimé de non-résidents qui ont utilisé le <strong>TransMilenio</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Composition du ménage (Amérique du Sud)
			"Proportion estimée de personnes vivant dans un <strong>ménage complexe avec enfant</strong> par secteur", //240
			"Nombre estimé de personnes vivant dans un <strong>ménage complexe avec enfant</strong> par secteur",
			"Nombre estimé de non-résidents vivant dans un <strong>ménage complexe avec enfant</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes vivant dans une <strong>famille avec enfant</strong> par secteur", //243
			"Nombre estimé de personnes vivant dans une <strong>famille avec enfant</strong> par secteur",
			"Nombre estimé de non-résidents vivant dans une <strong>famille avec enfant</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes vivant dans un <strong>ménage complexe sans enfant</strong> par secteur", //246
			"Nombre estimé de personnes vivant dans un <strong>ménage complexe sans enfant</strong> par secteur",
			"Nombre estimé de non-résidents vivant dans un <strong>ménage complexe sans enfant</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes vivant dans une <strong>famille sans enfant</strong> par secteur", //249
			"Nombre estimé de personnes vivant dans une <strong>famille sans enfant</strong> par secteur",
			"Nombre estimé de non-résidents vivant dans une <strong>famille sans enfant</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes <strong>vivant seules</strong> par secteur", //252
			"Nombre estimé de personnes <strong>vivant seules</strong> par secteur",
			"Nombre estimé de non-résidents <strong>vivant seuls</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Statut d'occupation du logement (Amérique du Sud)
			"Proportion estimée de <strong>propriétaires</strong> présents par secteur", //255
			"Nombre estimé de <strong>propriétaires</strong> présents par secteur",
			"Nombre estimé de <strong>propriétaires</strong> non-résidents par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de <strong>locataires</strong> présents par secteur", //258
			"Nombre estimé de <strong>locataires</strong> présents par secteur",
			"Nombre estimé de <strong>locataires</strong> non-résidents par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de <strong>personnes hébergées</strong> présentes par secteur", //261
			"Nombre estimé de <strong>personnes hébergées</strong> présentes par secteur",
			"Nombre estimé de <strong>personnes hébergées</strong> non-résidentes par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			// age 15-24 Canada
			"Proportion estimée de personnes<strong> âgées de 15 à 24 ans</strong> par secteur", //264
			"Nombre estimé de personnes <strong>âgées de 15 à 24 ans</strong> par secteur",
			"Nombre estimé de non-résidents <strong>âgés de 15 à 24 ans</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			//Composition du ménage (France)
			"Proportion estimée de personnes vivant dans un <strong>ménage avec enfant</strong> par secteur", //267
			"Nombre estimé de personnes vivant dans un <strong>ménage avec enfant</strong> par secteur",
			"Nombre estimé de non-résidents vivant dans un <strong>ménage avec enfant</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes vivant dans un <strong>ménage (hors couple) sans enfant</strong> par secteur", //270
			"Nombre estimé de personnes vivant dans un <strong>ménage (hors couple) sans enfant</strong> par secteur",
			"Nombre estimé de non-résidents vivant dans un <strong>ménage (hors couple) sans enfant</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			"Proportion estimée de personnes vivant en <strong>couple sans enfant</strong> par secteur", //273
			"Nombre estimé de personnes vivant en <strong>couple sans enfant</strong> par secteur",
			"Nombre estimé de non-résidents vivant en <strong>couple sans enfant</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>",
			// composition du ménage (Québec)
			"Proportion estimée de personnes vivant dans un <strong>ménage sans enfant</strong> par secteur", //276
			"Nombre estimé de personnes vivant dans un <strong>ménage sans enfant</strong> par secteur",
			"Nombre estimé de non-résidents vivant dans un <strong>ménage sans enfant</strong> par secteur <span style = 'font-size : .7em'>(et les principaux secteurs de résidence au survol de la souris)</span>"
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
				"Proportion (%) estimée de personnes qui ont utilisé un <strong>mode doux</strong> ",
				"Nombre estimé de personnes qui ont utilisé un <strong>mode doux</strong> ",
				"Nombre estimé de non-résidents qui ont utilisé un <strong>mode doux</strong>",
				"Proportion (%) estimée de personnes qui ont utilisé un <strong>véhicule motorisé individuel</strong> ",
				"Nombre estimé de personnes qui ont utilisé un <strong>véhicule motorisé individuel</strong> ",
				"Nombre estimé de non-résidents qui ont utilisé un <strong>véhicule motorisé individuel</strong>",
				"Proportion (%) estimée de personnes qui ont utilisé les <strong>transports collectifs</strong> ",
				"Nombre estimé de personnes qui ont utilisé les <strong>transports collectifs</strong> ", //160
				"Nombre estimé de non-résidents qui ont utilisé les <strong>transports collectifs</strong>",
				//Groupe d'âge bis (Amérique du Sud) ABANDON
			    "Proportion (%) estimée de personnes <strong>âgées de 61 et plus</strong>",
			    "Nombre estimé de personnes <strong>âgées de 61 et plus</strong>",
			    "Nombre estimé de non-résidents <strong>âgés de 61 et plus</strong>",
			    "Proportion (%) estimée de personnes <strong>âgées de 41 à 60 ans</strong>", //165
			    "Nombre estimé de personnes <strong>âgées de 41 à 60 ans</strong>",
			    "Nombre estimé de non-résidents <strong>âgés de 41 à 60 ans</strong>",
			    "Proportion (%) estimée de personnes <strong>âgées de 26 à 40 ans</strong>",
			    "Nombre estimé de personnes <strong>âgées de 26 à 40 ans</strong>",
			    "Nombre estimé de non-résidents <strong>âgés de 26 à 40 ans</strong>", //170
			    "Proportion (%) estimée de personnes <strong>âgées de 16 à 25 ans</strong>",
			    "Nombre estimé de personnes <strong>âgées de 16 à 25 ans</strong>",
			    "Nombre estimé de non-résidents <strong>âgés de 16 à 25 ans</strong>",
			    //Revenu du ménage (Amérique du Sud)
			    "Proportion (%) estimée de personnes avec un <strong>revenu très élevé</strong>",
			    "Nombre estimé de personnes avec un <strong>revenu très élevé</strong>", // 175
			    "Nombre estimé de non-résidents avec un <strong>revenu très élevé</strong>",
			    "Proportion (%) estimée de personnes avec un <strong>revenu élevé</strong>",
			    "Nombre estimé de personnes avec un <strong>revenu élevé</strong>",
			    "Nombre estimé de non-résidents avec un <strong>revenu élevé</strong>",
			    "Proportion (%) estimée de personnes avec un <strong>revenu intermédiaire</strong>", //180
			    "Nombre estimé de personnes avec un <strong>revenu intermédiaire</strong>",
			    "Nombre estimé de non-résidents avec un <strong>revenu intermédiaire</strong>",
			    "Proportion (%) estimée de personnes avec un <strong>faible revenu</strong>",
			    "Nombre estimé de personnes avec un <strong>faible revenu</strong>",
			    "Nombre estimé de non-résidents avec un <strong>faible revenu</strong>", // 185
			    "Proportion (%) estimée de personnes avec un <strong>très faible revenu</strong>",
			    "Nombre estimé de personnes avec un <strong>très faible revenu</strong>",
			    "Nombre estimé de non-résidents avec un <strong>très faible revenu</strong>",
			    //CSO (Amérique du Sud)
			    "Proportion (%) estimée de <strong>cadres et professions intellectuelles</strong>", //189
			    "Nombre estimé de <strong>cadres et professions intellectuelles</strong>",
			    "Nombre estimé de non-résidents <strong>cadres et professions intellectuelles</strong>",
			    "Proportion (%) estimée d'<strong>indépendants</strong>",
			    "Nombre estimé d'<strong>indépendants</strong>",
			    "Nombre estimé de non-résidents <strong>indépendants</strong>",
			    "Proportion (%) estimée de <strong>travailleurs qualifiés</strong>", //195
			    "Nombre estimé de <strong>travailleurs qualifiés</strong>",
			    "Nombre estimé de non-résidents <strong>travailleurs qualifiés</strong>",
			    "Proportion (%) estimée de <strong>travailleurs non qualifiés</strong>",
			    "Nombre estimé de <strong>travailleurs non qualifiés</strong>",
			    "Nombre estimé de non-résidents <strong>travailleurs non qualifiés</strong>", //200
			    // informalité (Bogota et Sao Paulo)
			    "Proportion (%) estimée d'<strong>actifs ayant un emploi informel</strong>", //201
			    "Nombre estimé d'<strong>actifs ayant un emploi informel</strong>",
			    "Nombre estimé de strong>d'actifs ayant un emploi informel</strong> non-résidents",
			    "Proportion (%) estimée d'<strong>actifs ayant un emploi formel</strong>",
			    "Nombre estimé d'<strong>actifs ayant un emploi formel</strong>", //205
			    "Nombre estimé d'<strong>actifs ayant un emploi formel</strong> non-résidents",
			    //Zona METAL
			    "Proportion (%) estimée de personnes <strong>résidant dans le centre</strong>", //207
			    "Nombre estimé de personnes <strong>résidant dans le centre</strong>",
			    "Nombre estimé de non-résidents <strong>résidant dans le centre</strong>",
			    "Proportion (%) estimée de personnes <strong>résidant dans le péricentre</strong>", //210
			    "Nombre estimé de personnes <strong>résidant dans le péricentre</strong>",
			    "Nombre estimé de non-résidents <strong>résidant dans le péricentre</strong>",
			    "Proportion (%) estimée de personnes <strong>résidant dans la périphérie proche</strong>",
			    "Nombre estimé de personnes <strong>résidant dans la périphérie proche</strong>",
			    "Nombre estimé de non-résidents <strong>résidant dans la périphérie proche</strong>", //215
			    "Proportion (%) estimée de personnes <strong>résidant dans la périphérie lointaine</strong>",
			    "Nombre estimé de personnes <strong>résidant dans la périphérie lointaine</strong>",
			    "Nombre estimé de non-résidents <strong>résidant dans la périphérie lointaine</strong>",
			    //Strate socio-éco (Bogota)
			    "Proportion (%) estimée de personnes <strong>résidant dans une strate 4, 5 ou 6</strong>", //219
			    "Nombre estimé de personnes <strong>résidant dans une strate 4, 5 ou 6</strong>",
			    "Nombre estimé de non-résidents <strong>résidant dans une strate 4, 5 ou 6</strong>",
			    "Proportion (%) estimée de personnes <strong>résidant dans une strate 3</strong>",
			    "Nombre estimé de personnes <strong>résidant dans une strate 3</strong>",
			    "Nombre estimé de non-résidents <strong>résidant dans une strate 3</strong>",
			    "Proportion (%) estimée de personnes <strong>résidant dans une strate 2</strong>", //225
			    "Nombre estimé de personnes <strong>résidant dans une strate 2</strong>",
			    "Nombre estimé de non-résidents <strong>résidant dans une strate 2</strong>",
			    "Proportion (%) estimée de personnes <strong>résidant dans une strate 1 ou dans un îlot non stratifié</strong>",
			    "Nombre estimé de personnes <strong>résidant dans une strate 1 ou dans un îlot non stratifié</strong>",
			    "Nombre estimé de non-résidents <strong>résidant dans une strate 1 ou dans un îlot non stratifié</strong>", //230
			    //Activité 6 : démarches admin./perso (Amérique du Sud)
			    "Proportion (%) estimée de personnes <strong>occupées par des démarches administratives ou personnelles</strong> ",
				"Nombre estimé de personnes <strong>occupées par des démarches administratives ou personnelles</strong> ",
				"Nombre estimé de non-résidents <strong>occupées par des démarches administratives ou personnelles</strong>",
				//Mode 4 : TransMilenio (Bogota)
				"Proportion (%) estimée de personnes qui ont utilisé le <strong>TransMilenio</strong> ", //234
				"Nombre estimé de personnes qui ont utilisé le <strong>TransMilenio</strong> ",
				"Nombre estimé de non-résidents qui ont utilisé le <strong>TransMilenio</strong>",
				//composition du ménage (Amérique latine)
				"Proportion (%) estimée de personnes vivant dans un <strong>ménage complexe avec enfant</strong>", //237
			   "Nombre estimé de personnes vivant dans un <strong>ménage complexe avec enfant</strong>",
			   "Nombre estimé de non-résidents vivant dans un <strong>ménage complexe avec enfant</strong>",
			   "Proportion (%) estimée de personnes vivant dans une <strong>famille avec enfant</strong>", //240
			   "Nombre estimé de personnes vivant dans une <strong>famille avec enfant</strong>",
			   "Nombre estimé de non-résidents vivant dans une <strong>famille avec enfant</strong>",
			   "Proportion (%) estimée de personnes vivant dans un <strong>ménage complexe sans enfant</strong>", //243
			   "Nombre estimé de personnes vivant dans un <strong>ménage complexe sans enfant</strong>",
			   "Nombre estimé de non-résidents vivant dans un <strong>ménage complexe sans enfant</strong>",
			   "Proportion (%) estimée de personnes vivant dans une <strong>famille sans enfant</strong>", //246
			   "Nombre estimé de personnes vivant dans une <strong>famille sans enfant</strong>",
			   "Nombre estimé de non-résidents vivant dans une <strong>famille sans enfant</strong>",
			   "Proportion (%) estimée de personnes <strong>vivant seules</strong>", //249
			   "Nombre estimé de personnes <strong>vivant seules</strong>",
			   "Nombre estimé de non-résidents <strong>vivant seuls</strong>",
			   //statut d'occupation dans le logement
			   "Proportion (%) estimée de <strong>propriétaires</strong> présents", //252
				"Nombre estimé de <strong>propriétaires</strong> présents",
				"Nombre estimé de <strong>propriétaires</strong> non-résidents",
				"Proportion (%) estimée de <strong>locataires</strong> présents", //255
				"Nombre estimé de <strong>locataires</strong> présents",
				"Nombre estimé de <strong>locataires</strong> non-résidents",
				"Proportion (%) estimée de <strong>personnes hébergées</strong> présentes", //258
				"Nombre estimé de <strong>personnes hébergées</strong> présentes",
				"Nombre estimé de <strong>personnes hébergés</strong> non-résidentes",
				// âge 15-24 canada
				"Proportion (%) estimée de personnes <strong>âgées de 15 à 24 ans</strong>", //261
			    "Nombre estimé de personnes <strong>âgées de 15 à 24 ans</strong>",
			    "Nombre estimé de non-résidents <strong>âgés de 15 à 24 ans</strong>",
			    //composition du ménage (France)
				"Proportion (%) estimée de personnes vivant dans un <strong>ménage avec enfant</strong>", //264
			   "Nombre estimé de personnes vivant dans un <strong>ménage avec enfant</strong>",
			   "Nombre estimé de non-résidents vivant dans un <strong>ménage avec enfant</strong>",
			   "Proportion (%) estimée de personnes vivant dans un <strong>ménage (hors couple) sans enfant</strong>", //267
			   "Nombre estimé de personnes vivant dans un <strong>ménage (hors couple) sans enfant</strong>",
			   "Nombre estimé de non-résidents vivant dans un <strong>ménage (hors couple) sans enfant</strong>",
			   "Proportion (%) estimée de personnes vivant en <strong>couple sans enfant</strong>", //270
			   "Nombre estimé de personnes vivant en <strong>couple sans enfant</strong>",
			   "Nombre estimé de non-résidents vivant en <strong>couple sans enfant</strong>",
			   //composition du ménage (Québec)
			   "Proportion (%) estimée de personnes vivant dans un <strong>ménage sans enfant</strong>", //273
			   "Nombre estimé de personnes vivant dans un <strong>ménage sans enfant</strong>",
			   "Nombre estimé de non-résidents vivant dans un <strong>ménage sans enfant</strong>"
				];

// Titres des graphique empilés
var titleStacked =["Proportion (%) estimée de personnes par <strong>catégorie socioprofessionnelle</strong>",
				   "Nombre estimé de personnes par <strong>catégorie socioprofessionnelle</strong>",
				   "Nombre estimé de non-résidents par <strong>catégorie socioprofessionnelle</strong>",

				   "Proportion (%) estimée de personnes par <strong>catégorie socioprofessionnelle du ménage</strong>",
				   "Nombre estimé de personnes par <strong>catégorie socioprofessionnelle du ménage</strong>",
				   "Nombre estimé de non-résidents par <strong>catégorie socioprofessionnelle du ménage</strong>", //5

				   "Nombre estimé de personnes par <strong>niveau d'éducation</strong>",
				   "Proportion (%) estimée de personnes par <strong>niveau d'éducation</strong>",
				   "Nombre estimé de non-résidents par <strong>niveau d'éducation</strong>",

				   "Nombre estimé de personnes par <strong>niveau d'éducation du ménage</strong>",
				   "Proportion (%) estimée de personnes par <strong>niveau d'éducation du ménage</strong>", //10
				   "Nombre estimé de non-résidents par <strong>niveau d'éducation du ménage</strong>",

				   "Nombre estimé de personnes par <strong>activité réalisée</strong>",
				   "Proportion (%) estimée de personnes par <strong>activité réalisée</strong>",
				   "Nombre estimé de non-résidents par <strong>activité réalisée</strong>",

				   "Nombre estimé de personnes par <strong>zone de résidence</strong>", //15
				   "Proportion (%) estimée de personnes par <strong>zone de résidence</strong>",
				   "Nombre estimé de non-résidents par <strong>zone de résidence</strong>",

				   "Nombre estimé de personnes par <strong>groupe d'âge</strong>",
				   "Proportion (%) estimée de personnes par <strong>groupe d'âge</strong>",
				   "Nombre estimé de non-résidents par <strong>groupe d'âge</strong>", //20

				   "Nombre estimé de personnes par <strong>occupation principale</strong>",
				   "Proportion (%) estimée de personnes par <strong>occupation principale</strong>",
				   "Nombre estimé de non-résidents par <strong>occupation principale</strong>",

				   "Nombre estimé de personnes par <strong>sexe</strong>",
				   "Proportion (%) estimée de personnes par <strong>sexe</strong>", //25
				   "Nombre estimé de non-résidents par <strong>sexe</strong>",

				   "Nombre estimé de personnes selon le <strong>dernier mode de transport utilisé</strong>",
				   "Proportion (%) estimée de personnes selon le <strong>dernier mode de transport utilisé</strong>",
				   "Nombre estimé de non-résidents selon le <strong>dernier mode de transport utilisé</strong>",

				   "Nombre estimé de personnes par <strong>revenu du ménage</strong>", //30
				   "Proportion (%) estimée de personnes par <strong>revenu du ménage</strong>",
				   "Nombre estimé de non-résidents par <strong>revenu du ménage</strong>",

				   "Nombre estimé de personnes par <strong>département de résidence</strong>",
				   "Proportion (%) estimée de personnes par <strong>département de résidence</strong>",
				   "Nombre estimé de non-résidents par <strong>département de résidence</strong>", //35

				   "Proportion (%) estimée de personnes selon leur <strong>résidence dans/hors QPV</strong>",
				   "Nombre estimé de personnes selon la <strong>résidence dans/hors QPV</strong>",
				   "Nombre estimé de non-résidents selon la <strong>résidence dans/hors QPV</strong>",

				   "Proportion (%) estimée de personnes selon leur <strong>secteur de résidence</strong>",
				   "Nombre estimé de personnes selon leur <strong>secteur de résidence</strong>", //40

				   "Nombre estimé de personnes par <strong>groupe d'âge bis</strong>",
				   "Proportion (%) estimée de personnes par <strong>groupe d'âge bis</strong>",
				   "Nombre estimé de non-résidents par <strong>groupe d'âge bis</strong>",

				   "Nombre estimé de personnes selon leur <strong>(in)formalité professionnelle</strong>",
				   "Proportion (%) estimée de personnes selon leur <strong>(in)formalité professionnelle</strong>", //45
				   "Nombre estimé de non-résidents selon leur <strong>(in)formalité professionnelle</strong>",

				   "Nombre estimé de personnes selon leur <strong>couronne de résidence</strong>",
				   "Proportion (%) estimée de personnes selon leur <strong>couronne de résidence</strong>",
				   "Nombre estimé de non-résidents selon leur <strong>couronne de résidence</strong>", //49

				   "Nombre estimé de personnes selon leur <strong>strate socio-économique de résidence</strong>",
				   "Proportion (%) estimée de personnes selon leur <strong>strate socio-économique de résidence</strong>",
				   "Nombre estimé de non-résidents selon leur <strong>strate socio-économique de résidence</strong>", //52

				   "Proportion (%) estimée de personnes selon la <strong>composition de leur ménage</strong>", //53
				   "Nombre estimé de personnes selon la <strong>composition de leur ménage</strong>",
				   "Nombre estimé de non-résidents selon la <strong>composition de leur ménage</strong>",

				   "Proportion (%) estimée de personnes selon leur <strong>statut d'occupation dans le logement</strong>", //56
				   "Nombre estimé de personnes selon leur <strong>statut d'occupation dans le logement</strong>",
				   "Nombre estimé de non-résidents selon leur <strong>statut d'occupation dans le logement</strong>",

				   // cso
				   "Proportion (%) estimée de personnes par <strong>catégorie socioprofessionnelle</strong>", //59
				   "Nombre estimé de personnes par <strong>catégorie socioprofessionnelle</strong>",
				   "Nombre estimé de non-résidents par <strong>catégorie socioprofessionnelle</strong>",
				   ];


var spanPopup = ["<span class = 'help' onclick = 'popup_mapTitle1()'></span>"];

//Nom des indicateurs
var indicator = ["le groupe d'âge", "le sexe", "le niveau d'éducation", "le niveau d'éducation du ménage",
				"la catégorie socioprofessionnelle", "la catégorie socioprofessionnelle du ménage",
				"l'occupation principale", "la zone de résidence", "l'activité réalisée", "le mode de transport utilisé",
				"le revenu du ménage", "le département de résidence", "la résidence dans/hors QPV",
				"le groupe d'âge bis", "l'informalité professionnelle", "la couronne de résidence",
				"la strate socio-économique de résidence", "la composition du ménage", "le statut d'occupation du logement",
				"la catégorie socioprofessionnelle"];

// Titres de Duncan et de Moran
var titleSegreg = ["Intensité de la ségrégation selon",
				   " (Duncan) <span class = 'help' onclick = 'popup_duncan()'></span>",
                   " (Moran) <span class = 'help' onclick = 'popup_moran()'></span>",
                   "Degré de proximité spatiale selon"];



// Déclaration des variables appelées dans load.js
//Nom des couches OSM
var overlayName = ['Fond de carte simple', 'Fond de carte détaillé', 'Quartiers prioritaires (QPV) - France',
					'Communes/arrondissements', 'Carte Mobiliscope', 'Couronnes centre/périphérie', 
					'Photo. aérienne', 'Fond de carte sombre'];
var lcHover = ['Calques'];

// Sous-titre du bandeau entête
var subTitle = "La ville à toute heure";

// Checkbox
var layersName = ["Routes ", "Cours d'eau ", "Villes principales"]

// Copyright
var d = new Date();
//var copy = " Mobiliscope - " + d.getFullYear() + " (" + "<a href='/fr/info/about/evolution'>v4.0</a>" + ")";
var copy = "Mobiliscope (" + "<a href='/fr/info/open/evolution' target='_blank'>v4.1</a>" + ")";

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
var discretMethod = {quintiles:'</br>Discrétisation en quintiles. ',
					 manuelle:'</br>Discrétisation manuelle. ',
					 amplEg:'</br>Discrétisation en amplitude égale. ',
					 seuilNat:'</br>Discrétisation selon les seuils naturels (Jenks). ',
					 sd:"</br>Discrétisation selon la moyenne et l'écart-type. ",
					 nestedAve:'Discrétisation par moyennes emboîtées. ',
					 arithmProg:'</br>Discrétisation par progression arithmétique. '};
var textCompar = ["Les classes restent identiques sur les 24h pour une même region.",
				  "Pour chaque modalité, les intervalles de classes restent identiques sur les 24h pour une même région.",
				  "Pour cette modalité, les intervalles de classes restent identiques sur les 24h et pour toutes les régions.",
				  "Les intervalles de classe restent identiques sur les 24h et pour toutes les modalités de l'indicateur."
					];
var textLegProp = "La proportionnalité des cercles est la même pour toutes les cartes d'une même région.";
var textLegFlow = ["La proportionnalité des cercles est la même pour toutes les cartes d'une même région.",
				   "L'épaisseur des liens principaux correspond au nombre de personnes présentes dans le secteur selectionné et résidant dans le secteur lié."];
var textLeg = ["Moy.:",
			   " ou moins",
			   "% à ",
			   " ou plus"];

var Xgraph = ["4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h", "0h", "2h"];

var sliderValue = ["4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "0h", "1h", "2h", "3h"];

var sliderValueDomX = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

// city name "et sa région" + tooltips
var endof = " et sa région";
var tooltipProp = "proportion";
var tooltipDens = "densité";
var tooltipNb = "nombre";
var tooltipFlux = "flux";
var tooltipPlay = "Lancer l\'animation";
var tooltipPause = "Arrêter l\’animation";
var alClose = "Fermer graph.";
var alDisplay = "Afficher graph.";

// Système de partage de lien
var shareLocalText = ['au cours des 24 heures de la journée','Copiée dans le presse papier !','Copier l\'url de la page'];



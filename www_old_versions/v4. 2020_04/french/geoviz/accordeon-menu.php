<?php if ($page == 'idf')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>


	<div class = "niv2"><p>Population totale<span class = "helpAcc" onclick = "popup_pop0(event)""></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Population totale</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Population résidente<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Résidents</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>Non-résidents</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL DÉMOGRAPHIQUE</span></div>

	<div class = "niv2"><p>Groupe d\'âge<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 ans et +</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 ans</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 ans</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 ans</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexe<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Femmes</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hommes</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL SOCIAL</span></div>

	<div class = "niv2"><p>Niveau d\'éducation<span class = "helpAcc" onclick = "popup_cleduc(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Niveau d\'éducation<br/>(ménage)<span class = "helpAcc" onclick = "popup_educmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Revenu du ménage<span class = "helpAcc" onclick = "popup_rev_idf(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #dc2c48 ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "rev4_choro()">%</button><button class ="nb" onclick = "rev4_prop()">nb</button><button class ="flow" onclick = "rev4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Intermédiaire, tranche supérieure</p><div class="niv-logo"><button class ="part" onclick = "rev3_choro()">%</button><button class ="nb" onclick = "rev3_prop()">nb</button><button class ="flow" onclick = "rev3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Intermédiaire, tranche inférieure</p><div class="niv-logo"><button class ="part" onclick = "rev2_choro()">%</button><button class ="nb" onclick = "rev2_prop()">nb</button><button class ="flow" onclick = "rev2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #348e89 ;"><p>Faible</p><div class="niv-logo"><button id = "first" class ="part" onclick = "rev1_choro()">%</button><button class ="nb" onclick = "rev1_prop()">nb</button><button class ="flow" onclick = "rev1_flow()"></button></div></div>

	<div class = "niv2"><p>Catégorie socioprofessionnelle<span class = "helpAcc" onclick = "popup_cs(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Cadres</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cs5_choro()">%</button><button class ="nb" onclick = "cs5_prop()">nb</button><button class ="flow" onclick = "cs5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cs4_choro()">%</button><button class ="nb" onclick = "cs4_prop()">nb</button><button class ="flow" onclick = "cs4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Employés</p><div class="niv-logo"><button class ="part" onclick = "cs3_choro()">%</button><button class ="nb" onclick = "cs3_prop()">nb</button><button class ="flow" onclick = "cs3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Ouvriers</p><div class="niv-logo"><button class ="part" onclick = "cs2_choro()">%</button><button class ="nb" onclick = "cs2_prop()">nb</button><button class ="flow" onclick = "cs2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "cs1_choro()">%</button><button class ="nb" onclick = "cs1_prop()">nb</button><button class ="flow" onclick = "cs1_flow()"></button></div></div>

	<div class = "niv2"><p>Catégorie socioprofessionnelle<br/>(ménage)<span class = "helpAcc" onclick = "popup_cspmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Cadres</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cspmen5_choro()">%</button><button class ="nb" onclick = "cspmen5_prop()">nb</button><button class ="flow" onclick = "cspmen5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cspmen4_choro()">%</button><button class ="nb" onclick = "cspmen4_prop()">nb</button><button class ="flow" onclick = "cspmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Employés</p><div class="niv-logo"><button class ="part" onclick = "cspmen3_choro()">%</button><button class ="nb" onclick = "cspmen3_prop()">nb</button><button class ="flow" onclick = "cspmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Ouvriers</p><div class="niv-logo"><button class ="part" onclick = "cspmen2_choro()">%</button><button class ="nb" onclick = "cspmen2_prop()">nb</button><button class ="flow" onclick = "cspmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "cspmen1_choro()">%</button><button class ="nb" onclick = "cspmen1_prop()">nb</button><button class ="flow" onclick = "cspmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Occupation principale<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Retraités</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Sans emploi</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Étudiants</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Actifs</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL RÉSIDENTIEL</span></div>

	<div class = "niv2"><p>Département de résidence<span class = "helpAcc" onclick = "popup_dep(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #2d365e ;"><p>Grande couronne</p><div class="niv-logo"><button class ="part" onclick = "dep5_choro()">%</button><button class ="nb" onclick = "dep5_prop()">nb</button><button class ="flow" onclick = "dep5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #167e88 ;"><p>Hauts-de-Seine</p><div class="niv-logo"><button class ="part" onclick = "dep4_choro()">%</button><button class ="nb" onclick = "dep4_prop()">nb</button><button class ="flow" onclick = "dep4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Val-de-Marne</p><div class="niv-logo"><button class ="part" onclick = "dep3_choro()">%</button><button class ="nb" onclick = "dep3_prop()">nb</button><button class ="flow" onclick = "dep3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec7646 ;"><p>Seine-Saint-Denis</p><div class="niv-logo"><button class ="part" onclick = "dep2_choro()">%</button><button class ="nb" onclick = "dep2_prop()">nb</button><button class ="flow" onclick = "dep2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #9a2679 ;"><p>Paris</p><div class="niv-logo"><button class ="part" onclick = "dep1_choro()">%</button><button class ="nb" onclick = "dep1_prop()">nb</button><button class ="flow" onclick = "dep1_flow()"></button></div></div>

	<div class = "niv2"><p>Résidence selon le zonage</br>en aires urbaines<span class = "helpAcc" onclick = "popup_resarea(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #cb5f00 ;"><p id = "vcMenu"></p><div class="niv-logo"><button class ="part" onclick = "resarea3_choro()">%</button><button class ="nb" onclick = "resarea3_prop()">nb</button><button class ="flow" onclick = "resarea3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #00998b ;"><p>Zone urbaine</p><div class="niv-logo"><button class ="part" onclick = "resarea2_choro()">%</button><button class ="nb" onclick = "resarea2_prop()">nb</button><button class ="flow" onclick = "resarea2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #005099 ;"><p>Zone périphérique</p><div class="niv-logo"><button class ="part" onclick="resarea1_choro()">%</button><button class ="nb" onclick = "resarea1_prop()">nb</button><button class ="flow" onclick = "resarea1_flow()"></button></div></div>

	<div class = "niv2"><p>Résidence dans/hors QPV<span class = "helpAcc" onclick = "popup_qpv(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #e77000 ;"><p>Dans QPV</p><div class="niv-logo"><button class ="part" onclick = "qpv2_choro()">%</button><button class ="nb" onclick = "qpv2_prop()">nb</button><button class ="flow" onclick = "qpv2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Hors QPV</p><div class="niv-logo"><button class ="part" onclick = "qpv1_choro()">%</button><button class ="nb" onclick = "qpv1_prop()">nb</button><button class ="flow" onclick = "qpv1_flow()"></button></div></div>



<div class = "niv1"><span class="niv1-item">ACTIVITÉ / TRANSPORT</span></div>

	<div class = "niv2"><p>Activité réalisée<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Loisirs</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Achats</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Études</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Travail</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>À la maison</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Dernier mode de transport utilisé<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Mobilité douce</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Véhicule motorisé<br/>privé</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transports<br/>publics</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';
}

else if ($page == 'montreal' || $page == 'ottawa-gatineau' || $page == 'quebec' || $page == 'saguenay' || $page == 'sherbrooke' || $page == 'trois-rivieres')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>

	<div class = "niv2"><p>Population totale<span class = "helpAcc" onclick = "popup_pop0(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Population totale</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Population résidente<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Résidents</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>Non-résidents</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span  class="niv1-item">PROFIL DÉMOGRAPHIQUE</span></div>

	<div class = "niv2"><p>Groupe d\'âge<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 ans et +</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 ans</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 ans</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 ans</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexe<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Femmes</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hommes</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL SOCIAL</span></div>


	<div class = "niv2"><p>Revenu du ménage<span class = "helpAcc" onclick = "popup_rev_can(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #dc2c48 ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "rev4_choro()">%</button><button class ="nb" onclick = "rev4_prop()">nb</button><button class ="flow" onclick = "rev4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Intermédiaire, tranche supérieure</p><div class="niv-logo"><button class ="part" onclick = "rev3_choro()">%</button><button class ="nb" onclick = "rev3_prop()">nb</button><button class ="flow" onclick = "rev3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Intermédiaire, tranche inférieure</p><div class="niv-logo"><button class ="part" onclick = "rev2_choro()">%</button><button class ="nb" onclick = "rev2_prop()">nb</button><button class ="flow" onclick = "rev2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #348e89 ;"><p>Faible</p><div class="niv-logo"><button id = "first" class ="part" onclick = "rev1_choro()">%</button><button class ="nb" onclick = "rev1_prop()">nb</button><button class ="flow" onclick = "rev1_flow()"></button></div></div>

  		<div class = "niv3" style = "border-left-color: #4b4443 ;"><p>Inconnu</p><div class="niv-logo"><button class ="part" onclick = "rev5_choro()">%</button><button class ="nb" onclick = "rev5_prop()">nb</button><button class ="flow" onclick = "rev5_flow()"></button></div></div>


	<div class = "niv2"><p>Occupation principale<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Retraités</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Sans emploi</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Étudiants</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Actifs</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">ACTIVITÉ / TRANSPORT</span></div>

 	<div class = "niv2"><p>Activité réalisée<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

 		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Loisirs</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Achats</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Études</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Travail</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #17297c ;"><p>À la maison</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

 	<div class = "niv2"><p>Mode de transport utilisé<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

 		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Mobilité douce</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

 		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Véhicule motorisé<br/>privé</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transports<br/>publics</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';
}

else if ($page == 'besancon' || $page == 'carcassonne')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>

	<div class = "niv2"><p>Population totale<span class = "helpAcc" onclick = "popup_pop0(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Population totale</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Population résidente<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Résidents</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>Non-résidents</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL DÉMOGRAPHIQUE</span></div>

	<div class = "niv2"><p>Groupe d\'âge<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 ans et +</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 ans</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 ans</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 ans</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexe<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Femmes</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hommes</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL SOCIAL</span></div>

	<div class = "niv2"><p>Niveau d\'éducation<span class = "helpAcc" onclick = "popup_cleduc(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Niveau d\'éducation<br/>(ménage)<span class = "helpAcc" onclick = "popup_educmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>


	<div class = "niv2"><p>Catégorie socioprofessionnelle<span class = "helpAcc" onclick = "popup_cs(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Cadres</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cs5_choro()">%</button><button class ="nb" onclick = "cs5_prop()">nb</button><button class ="flow" onclick = "cs5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cs4_choro()">%</button><button class ="nb" onclick = "cs4_prop()">nb</button><button class ="flow" onclick = "cs4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Employés</p><div class="niv-logo"><button class ="part" onclick = "cs3_choro()">%</button><button class ="nb" onclick = "cs3_prop()">nb</button><button class ="flow" onclick = "cs3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Ouvriers</p><div class="niv-logo"><button class ="part" onclick = "cs2_choro()">%</button><button class ="nb" onclick = "cs2_prop()">nb</button><button class ="flow" onclick = "cs2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "cs1_choro()">%</button><button class ="nb" onclick = "cs1_prop()">nb</button><button class ="flow" onclick = "cs1_flow()"></button></div></div>

	<div class = "niv2"><p>Catégorie socioprofessionnelle<br/>(ménage)<span class = "helpAcc" onclick = "popup_cspmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Cadres</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cspmen5_choro()">%</button><button class ="nb" onclick = "cspmen5_prop()">nb</button><button class ="flow" onclick = "cspmen5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cspmen4_choro()">%</button><button class ="nb" onclick = "cspmen4_prop()">nb</button><button class ="flow" onclick = "cspmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Employés</p><div class="niv-logo"><button class ="part" onclick = "cspmen3_choro()">%</button><button class ="nb" onclick = "cspmen3_prop()">nb</button><button class ="flow" onclick = "cspmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Ouvriers</p><div class="niv-logo"><button class ="part" onclick = "cspmen2_choro()">%</button><button class ="nb" onclick = "cspmen2_prop()">nb</button><button class ="flow" onclick = "cspmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "cspmen1_choro()">%</button><button class ="nb" onclick = "cspmen1_prop()">nb</button><button class ="flow" onclick = "cspmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Occupation principale<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Retraités</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Sans emploi</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Étudiants</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Actifs</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL RÉSIDENTIEL</span></div>

	<div class = "niv2"><p>Résidence selon le zonage</br>en aires urbaines<span class = "helpAcc" onclick = "popup_resarea(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #cb5f00 ;"><p id = "vcMenu"></p><div class="niv-logo"><button class ="part" onclick = "resarea3_choro()">%</button><button class ="nb" onclick = "resarea3_prop()">nb</button><button class ="flow" onclick = "resarea3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #005099 ;"><p>Zone périphérique</p><div class="niv-logo"><button class ="part" onclick="resarea1_choro()">%</button><button class ="nb" onclick = "resarea1_prop()">nb</button><button class ="flow" onclick = "resarea1_flow()"></button></div></div>

	<div class = "niv2"><p>Résidence dans/hors QPV<span class = "helpAcc" onclick = "popup_qpv(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #e77000 ;"><p>Dans QPV</p><div class="niv-logo"><button class ="part" onclick = "qpv2_choro()">%</button><button class ="nb" onclick = "qpv2_prop()">nb</button><button class ="flow" onclick = "qpv2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Hors QPV</p><div class="niv-logo"><button class ="part" onclick = "qpv1_choro()">%</button><button class ="nb" onclick = "qpv1_prop()">nb</button><button class ="flow" onclick = "qpv1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">ACTIVITÉ / TRANSPORT</span></div>

	<div class = "niv2"><p>Activité réalisée<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Loisirs</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Achats</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Études</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Travail</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>À la maison</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Dernier mode de transport utilisé<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Mobilité douce</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Véhicule motorisé<br/>privé</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transports<br/>publics</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';

}
else if ($page == 'annecy')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>

	<div class = "niv2"><p>Population totale<span class = "helpAcc" onclick = "popup_pop0(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Population totale</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Population résidente<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Résidents</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>Non-résidents</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL DÉMOGRAPHIQUE</span></div>

	<div class = "niv2"><p>Groupe d\'âge<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 ans et +</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 ans</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 ans</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 ans</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexe<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Femmes</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hommes</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL SOCIAL</span></div>

	<div class = "niv2"><p>Niveau d\'éducation<span class = "helpAcc" onclick = "popup_cleduc(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Niveau d\'éducation<br/>(ménage)<span class = "helpAcc" onclick = "popup_educmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>


	<div class = "niv2"><p>Catégorie socioprofessionnelle<span class = "helpAcc" onclick = "popup_cs(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Cadres</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cs5_choro()">%</button><button class ="nb" onclick = "cs5_prop()">nb</button><button class ="flow" onclick = "cs5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cs4_choro()">%</button><button class ="nb" onclick = "cs4_prop()">nb</button><button class ="flow" onclick = "cs4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Employés</p><div class="niv-logo"><button class ="part" onclick = "cs3_choro()">%</button><button class ="nb" onclick = "cs3_prop()">nb</button><button class ="flow" onclick = "cs3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Ouvriers</p><div class="niv-logo"><button class ="part" onclick = "cs2_choro()">%</button><button class ="nb" onclick = "cs2_prop()">nb</button><button class ="flow" onclick = "cs2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "cs1_choro()">%</button><button class ="nb" onclick = "cs1_prop()">nb</button><button class ="flow" onclick = "cs1_flow()"></button></div></div>

	<div class = "niv2"><p>Catégorie socioprofessionnelle<br/>(ménage)<span class = "helpAcc" onclick = "popup_cspmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Cadres</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cspmen5_choro()">%</button><button class ="nb" onclick = "cspmen5_prop()">nb</button><button class ="flow" onclick = "cspmen5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cspmen4_choro()">%</button><button class ="nb" onclick = "cspmen4_prop()">nb</button><button class ="flow" onclick = "cspmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Employés</p><div class="niv-logo"><button class ="part" onclick = "cspmen3_choro()">%</button><button class ="nb" onclick = "cspmen3_prop()">nb</button><button class ="flow" onclick = "cspmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Ouvriers</p><div class="niv-logo"><button class ="part" onclick = "cspmen2_choro()">%</button><button class ="nb" onclick = "cspmen2_prop()">nb</button><button class ="flow" onclick = "cspmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "cspmen1_choro()">%</button><button class ="nb" onclick = "cspmen1_prop()">nb</button><button class ="flow" onclick = "cspmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Occupation principale<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Retraités</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Sans emploi</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Étudiants</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Actifs</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL RÉSIDENTIEL</span></div>

	<div class = "niv2"><p>Résidence selon le zonage</br>en aires urbaines<span class = "helpAcc" onclick = "popup_resarea(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #cb5f00 ;"><p id = "vcMenu"></p><div class="niv-logo"><button class ="part" onclick = "resarea3_choro()">%</button><button class ="nb" onclick = "resarea3_prop()">nb</button><button class ="flow" onclick = "resarea3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #00998b ;"><p>Zone urbaine</p><div class="niv-logo"><button class ="part" onclick = "resarea2_choro()">%</button><button class ="nb" onclick = "resarea2_prop()">nb</button><button class ="flow" onclick = "resarea2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #005099 ;"><p>Zone périphérique</p><div class="niv-logo"><button class ="part" onclick="resarea1_choro()">%</button><button class ="nb" onclick = "resarea1_prop()">nb</button><button class ="flow" onclick = "resarea1_flow()"></button></div></div>

<div class = "niv1"><span class="niv1-item">ACTIVITÉ / TRANSPORT</span></div>

	<div class = "niv2"><p>Activité réalisée<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Loisirs</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Achats</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Études</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Travail</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>À la maison</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Dernier mode de transport utilisé<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Mobilité douce</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Véhicule motorisé<br/>privé</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transports<br/>publics</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';

}
else
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>

	<div class = "niv2"><p>Population totale<span class = "helpAcc" onclick = "popup_pop0(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Population totale</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Population résidente<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Résidents</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>Non-résidents</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL DÉMOGRAPHIQUE</span></div>

	<div class = "niv2"><p>Groupe d\'âge<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 ans et +</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 ans</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 ans</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 ans</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexe<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Femmes</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hommes</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL SOCIAL</span></div>

	<div class = "niv2"><p>Niveau d\'éducation<span class = "helpAcc" onclick = "popup_cleduc(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Niveau d\'éducation<br/>(ménage)<span class = "helpAcc" onclick = "popup_educmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>


	<div class = "niv2"><p>Catégorie socioprofessionnelle<span class = "helpAcc" onclick = "popup_cs(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Cadres</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cs5_choro()">%</button><button class ="nb" onclick = "cs5_prop()">nb</button><button class ="flow" onclick = "cs5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cs4_choro()">%</button><button class ="nb" onclick = "cs4_prop()">nb</button><button class ="flow" onclick = "cs4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Employés</p><div class="niv-logo"><button class ="part" onclick = "cs3_choro()">%</button><button class ="nb" onclick = "cs3_prop()">nb</button><button class ="flow" onclick = "cs3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Ouvriers</p><div class="niv-logo"><button class ="part" onclick = "cs2_choro()">%</button><button class ="nb" onclick = "cs2_prop()">nb</button><button class ="flow" onclick = "cs2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "cs1_choro()">%</button><button class ="nb" onclick = "cs1_prop()">nb</button><button class ="flow" onclick = "cs1_flow()"></button></div></div>

	<div class = "niv2"><p>Catégorie socioprofessionnelle<br/>(ménage)<span class = "helpAcc" onclick = "popup_cspmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Cadres</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cspmen5_choro()">%</button><button class ="nb" onclick = "cspmen5_prop()">nb</button><button class ="flow" onclick = "cspmen5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Intermédiaire</p><div class="niv-logo"><button class ="part" onclick = "cspmen4_choro()">%</button><button class ="nb" onclick = "cspmen4_prop()">nb</button><button class ="flow" onclick = "cspmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Employés</p><div class="niv-logo"><button class ="part" onclick = "cspmen3_choro()">%</button><button class ="nb" onclick = "cspmen3_prop()">nb</button><button class ="flow" onclick = "cspmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Ouvriers</p><div class="niv-logo"><button class ="part" onclick = "cspmen2_choro()">%</button><button class ="nb" onclick = "cspmen2_prop()">nb</button><button class ="flow" onclick = "cspmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "cspmen1_choro()">%</button><button class ="nb" onclick = "cspmen1_prop()">nb</button><button class ="flow" onclick = "cspmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Occupation principale<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactifs</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Retraités</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Sans emploi</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Étudiants</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Actifs</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PROFIL RÉSIDENTIEL</span></div>

	<div class = "niv2"><p>Résidence selon le zonage</br>en aires urbaines<span class = "helpAcc" onclick = "popup_resarea(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #cb5f00 ;"><p id = "vcMenu"></p><div class="niv-logo"><button class ="part" onclick = "resarea3_choro()">%</button><button class ="nb" onclick = "resarea3_prop()">nb</button><button class ="flow" onclick = "resarea3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #00998b ;"><p>Zone urbaine</p><div class="niv-logo"><button class ="part" onclick = "resarea2_choro()">%</button><button class ="nb" onclick = "resarea2_prop()">nb</button><button class ="flow" onclick = "resarea2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #005099 ;"><p>Zone périphérique</p><div class="niv-logo"><button class ="part" onclick="resarea1_choro()">%</button><button class ="nb" onclick = "resarea1_prop()">nb</button><button class ="flow" onclick = "resarea1_flow()"></button></div></div>

	<div class = "niv2"><p>Résidence dans/hors QPV<span class = "helpAcc" onclick = "popup_qpv(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #e77000 ;"><p>Dans QPV</p><div class="niv-logo"><button class ="part" onclick = "qpv2_choro()">%</button><button class ="nb" onclick = "qpv2_prop()">nb</button><button class ="flow" onclick = "qpv2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Hors QPV</p><div class="niv-logo"><button class ="part" onclick = "qpv1_choro()">%</button><button class ="nb" onclick = "qpv1_prop()">nb</button><button class ="flow" onclick = "qpv1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">ACTIVITÉ / TRANSPORT</span></div>

	<div class = "niv2"><p>Activité réalisée<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Loisirs</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Achats</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Études</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Travail</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>À la maison</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Dernier mode de transport utilisé<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Mobilité douce</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Véhicule motorisé<br/>privé</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transports<br/>publics</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';
}
?>

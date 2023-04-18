<?php if ($page == 'idf')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>


	<div class = "niv2"><p>Población total<span class = "helpAcc" onclick = "popup_pop0(event)""></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Población total</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Residentes/no residentes<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Residentes</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>No residentes</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL DEMOGRÁFICO</span></div>

	<div class = "niv2"><p>Grupo de edad<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 años o más</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 años</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 años</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 años</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexo<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Mujeres</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hombres</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>

<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strmfr(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar con niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr4_choro()">%</button><button class ="nb" onclick = "strmfr4_prop()">nb</button><button class ="flow" onclick = "strmfr4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar (excepto pareja) sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr3_choro()">%</button><button class ="nb" onclick = "strmfr3_prop()">nb</button><button class ="flow" onclick = "strmfr3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f37fbc ;"><p>Pareja sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr2_choro()">%</button><button class ="nb" onclick = "strmfr2_prop()">nb</button><button class ="flow" onclick = "strmfr2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strmfr1_choro()">%</button><button class ="nb" onclick = "strmfr1_prop()">nb</button><button class ="flow" onclick = "strmfr1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL SOCIAL</span></div>

	<div class = "niv2"><p>Nivel educativo<span class = "helpAcc" onclick = "popup_cleduc(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Nivel educativo<br/>(hogar)<span class = "helpAcc" onclick = "popup_educmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Ingresos del hogar<span class = "helpAcc" onclick = "popup_rev_idf(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #dc2c48 ;"><p>Altos</p><div class="niv-logo"><button class ="part" onclick = "rev4_choro()">%</button><button class ="nb" onclick = "rev4_prop()">nb</button><button class ="flow" onclick = "rev4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Medios-altos</p><div class="niv-logo"><button class ="part" onclick = "rev3_choro()">%</button><button class ="nb" onclick = "rev3_prop()">nb</button><button class ="flow" onclick = "rev3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Medios-bajos</p><div class="niv-logo"><button class ="part" onclick = "rev2_choro()">%</button><button class ="nb" onclick = "rev2_prop()">nb</button><button class ="flow" onclick = "rev2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #348e89 ;"><p>Bajos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "rev1_choro()">%</button><button class ="nb" onclick = "rev1_prop()">nb</button><button class ="flow" onclick = "rev1_flow()"></button></div></div>

	<div class = "niv2"><p>Categoría socioprofesional<span class = "helpAcc" onclick = "popup_cs(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cs5_choro()">%</button><button class ="nb" onclick = "cs5_prop()">nb</button><button class ="flow" onclick = "cs5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "cs4_choro()">%</button><button class ="nb" onclick = "cs4_prop()">nb</button><button class ="flow" onclick = "cs4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Empleados</p><div class="niv-logo"><button class ="part" onclick = "cs3_choro()">%</button><button class ="nb" onclick = "cs3_prop()">nb</button><button class ="flow" onclick = "cs3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Obreros</p><div class="niv-logo"><button class ="part" onclick = "cs2_choro()">%</button><button class ="nb" onclick = "cs2_prop()">nb</button><button class ="flow" onclick = "cs2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "cs1_choro()">%</button><button class ="nb" onclick = "cs1_prop()">nb</button><button class ="flow" onclick = "cs1_flow()"></button></div></div>

	<div class = "niv2"><p>Categoría socioprofesional<br/>(hogar)<span class = "helpAcc" onclick = "popup_cspmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cspmen5_choro()">%</button><button class ="nb" onclick = "cspmen5_prop()">nb</button><button class ="flow" onclick = "cspmen5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "cspmen4_choro()">%</button><button class ="nb" onclick = "cspmen4_prop()">nb</button><button class ="flow" onclick = "cspmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Empleados</p><div class="niv-logo"><button class ="part" onclick = "cspmen3_choro()">%</button><button class ="nb" onclick = "cspmen3_prop()">nb</button><button class ="flow" onclick = "cspmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Obreros</p><div class="niv-logo"><button class ="part" onclick = "cspmen2_choro()">%</button><button class ="nb" onclick = "cspmen2_prop()">nb</button><button class ="flow" onclick = "cspmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "cspmen1_choro()">%</button><button class ="nb" onclick = "cspmen1_prop()">nb</button><button class ="flow" onclick = "cspmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Ocupación principal<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Jubilados</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Desempleados</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Estudiantes</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Activos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL RESIDENCIAL</span></div>

	<div class = "niv2"><p>Departamento de residencia<span class = "helpAcc" onclick = "popup_dep(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #2d365e ;"><p>Grande couronne</p><div class="niv-logo"><button class ="part" onclick = "dep5_choro()">%</button><button class ="nb" onclick = "dep5_prop()">nb</button><button class ="flow" onclick = "dep5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #167e88 ;"><p>Hauts-de-Seine</p><div class="niv-logo"><button class ="part" onclick = "dep4_choro()">%</button><button class ="nb" onclick = "dep4_prop()">nb</button><button class ="flow" onclick = "dep4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Val-de-Marne</p><div class="niv-logo"><button class ="part" onclick = "dep3_choro()">%</button><button class ="nb" onclick = "dep3_prop()">nb</button><button class ="flow" onclick = "dep3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec7646 ;"><p>Seine-Saint-Denis</p><div class="niv-logo"><button class ="part" onclick = "dep2_choro()">%</button><button class ="nb" onclick = "dep2_prop()">nb</button><button class ="flow" onclick = "dep2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #9a2679 ;"><p>Paris</p><div class="niv-logo"><button class ="part" onclick = "dep1_choro()">%</button><button class ="nb" onclick = "dep1_prop()">nb</button><button class ="flow" onclick = "dep1_flow()"></button></div></div>

	<div class = "niv2"><p>Residencia por zonificación en <i>aires urbaines</i><span class = "helpAcc" onclick = "popup_resarea(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #cb5f00 ;"><p id = "vcMenu"></p><div class="niv-logo"><button class ="part" onclick = "resarea3_choro()">%</button><button class ="nb" onclick = "resarea3_prop()">nb</button><button class ="flow" onclick = "resarea3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #00998b ;"><p>Zona urbana</p><div class="niv-logo"><button class ="part" onclick = "resarea2_choro()">%</button><button class ="nb" onclick = "resarea2_prop()">nb</button><button class ="flow" onclick = "resarea2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #005099 ;"><p>Zona periférica</p><div class="niv-logo"><button class ="part" onclick="resarea1_choro()">%</button><button class ="nb" onclick = "resarea1_prop()">nb</button><button class ="flow" onclick = "resarea1_flow()"></button></div></div>

	<div class = "niv2"><p>Residencia dentro/fuera Barrios Prioritarios<span class = "helpAcc" onclick = "popup_qpv(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #e77000 ;"><p>Dentro Barrios Prioritarios</p><div class="niv-logo"><button class ="part" onclick = "qpv2_choro()">%</button><button class ="nb" onclick = "qpv2_prop()">nb</button><button class ="flow" onclick = "qpv2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Fuera Barrios Prioritarios</p><div class="niv-logo"><button class ="part" onclick = "qpv1_choro()">%</button><button class ="nb" onclick = "qpv1_prop()">nb</button><button class ="flow" onclick = "qpv1_flow()"></button></div></div>



<div class = "niv1"><span class="niv1-item">ACTIVIDAD / TRANSPORTE</span></div>

	<div class = "niv2"><p>Actividad realizada<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Recreo</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Compras</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Estudios</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Trabajo</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>En casa</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Último modo de transporte utilizado<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Modo suave</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Vehículo motorizado individual</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transporte<br/>colectivo</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';
}

else if ($page == 'montreal' || $page == 'ottawa-gatineau' || $page == 'quebec' || $page == 'saguenay' || $page == 'sherbrooke' || $page == 'trois-rivieres')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>

	<div class = "niv2"><p>Población total<span class = "helpAcc" onclick = "popup_pop0(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Población total</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Residentes/no residentes<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Residentes</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>No residentes</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span  class="niv1-item">PERFIL DEMOGRÁFICO</span></div>

	<div class = "niv2"><p>Grupo de edad<span class = "helpAcc" onclick = "popup_age_ca(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 años o más</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 años</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 años</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>15-24 años</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexo<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Mujeres</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hombres</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>

<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strmqc(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar con niño</p><div class="niv-logo"><button class ="part" onclick = "strmqc3_choro()">%</button><button class ="nb" onclick = "strmqc3_prop()">nb</button><button class ="flow" onclick = "strmqc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmqc2_choro()">%</button><button class ="nb" onclick = "strmqc2_prop()">nb</button><button class ="flow" onclick = "strmqc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strmqc1_choro()">%</button><button class ="nb" onclick = "strmqc1_prop()">nb</button><button class ="flow" onclick = "strmqc1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL SOCIAL</span></div>


	<div class = "niv2"><p>Ingresos del hogar<span class = "helpAcc" onclick = "popup_rev_can(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #dc2c48 ;"><p>Altos</p><div class="niv-logo"><button class ="part" onclick = "rev4_choro()">%</button><button class ="nb" onclick = "rev4_prop()">nb</button><button class ="flow" onclick = "rev4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Medios-altos</p><div class="niv-logo"><button class ="part" onclick = "rev3_choro()">%</button><button class ="nb" onclick = "rev3_prop()">nb</button><button class ="flow" onclick = "rev3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Medios-bajos</p><div class="niv-logo"><button class ="part" onclick = "rev2_choro()">%</button><button class ="nb" onclick = "rev2_prop()">nb</button><button class ="flow" onclick = "rev2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #348e89 ;"><p>Bajos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "rev1_choro()">%</button><button class ="nb" onclick = "rev1_prop()">nb</button><button class ="flow" onclick = "rev1_flow()"></button></div></div>

  		<div class = "niv3" style = "border-left-color: #4b4443 ;"><p>No informa</p><div class="niv-logo"><button class ="part" onclick = "rev5_choro()">%</button><button class ="nb" onclick = "rev5_prop()">nb</button><button class ="flow" onclick = "rev5_flow()"></button></div></div>


	<div class = "niv2"><p>Ocupación principal<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Jubilados</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Desempleados</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Estudiantes</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Activos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">ACTIVIDAD / TRANSPORTE</span></div>

 	<div class = "niv2"><p>Actividad realizada<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

 		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Recreo</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Compras</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Estudios</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Trabajo</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #17297c ;"><p>En casa</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

 	<div class = "niv2"><p>Modo de transporte utilizado<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

 		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Modo suave</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

 		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Vehículo motorizado<br/>individual</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

 		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transporte colectivo</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';
}

else if ($page == 'besancon' || $page == 'carcassonne')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>

	<div class = "niv2"><p>Población total<span class = "helpAcc" onclick = "popup_pop0(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Población total</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Residentes/no residentes<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Residentes</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>No residentes</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL DEMOGRÁFICO</span></div>

	<div class = "niv2"><p>Grupo de edad<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 años o más</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 años</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 años</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 años</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexo<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Mujeres</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hombres</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>

<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strmfr(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar con niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr4_choro()">%</button><button class ="nb" onclick = "strmfr4_prop()">nb</button><button class ="flow" onclick = "strmfr4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar (excepto pareja) sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr3_choro()">%</button><button class ="nb" onclick = "strmfr3_prop()">nb</button><button class ="flow" onclick = "strmfr3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f37fbc ;"><p>Pareja sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr2_choro()">%</button><button class ="nb" onclick = "strmfr2_prop()">nb</button><button class ="flow" onclick = "strmfr2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strmfr1_choro()">%</button><button class ="nb" onclick = "strmfr1_prop()">nb</button><button class ="flow" onclick = "strmfr1_flow()"></button></div></div>

<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strmfr(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar con niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr4_choro()">%</button><button class ="nb" onclick = "strmfr4_prop()">nb</button><button class ="flow" onclick = "strmfr4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar (excepto pareja) sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr3_choro()">%</button><button class ="nb" onclick = "strmfr3_prop()">nb</button><button class ="flow" onclick = "strmfr3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f37fbc ;"><p>Pareja sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr2_choro()">%</button><button class ="nb" onclick = "strmfr2_prop()">nb</button><button class ="flow" onclick = "strmfr2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strmfr1_choro()">%</button><button class ="nb" onclick = "strmfr1_prop()">nb</button><button class ="flow" onclick = "strmfr1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL SOCIAL</span></div>

	<div class = "niv2"><p>Nivel educativo<span class = "helpAcc" onclick = "popup_cleduc(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Nivel educativo<br/>(hogar)<span class = "helpAcc" onclick = "popup_educmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>


	<div class = "niv2"><p>Categoría socioprofesional<span class = "helpAcc" onclick = "popup_cs(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cs5_choro()">%</button><button class ="nb" onclick = "cs5_prop()">nb</button><button class ="flow" onclick = "cs5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "cs4_choro()">%</button><button class ="nb" onclick = "cs4_prop()">nb</button><button class ="flow" onclick = "cs4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Empleados</p><div class="niv-logo"><button class ="part" onclick = "cs3_choro()">%</button><button class ="nb" onclick = "cs3_prop()">nb</button><button class ="flow" onclick = "cs3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Obreros</p><div class="niv-logo"><button class ="part" onclick = "cs2_choro()">%</button><button class ="nb" onclick = "cs2_prop()">nb</button><button class ="flow" onclick = "cs2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "cs1_choro()">%</button><button class ="nb" onclick = "cs1_prop()">nb</button><button class ="flow" onclick = "cs1_flow()"></button></div></div>

	<div class = "niv2"><p>Categoría socioprofesional<br/>(hogar)<span class = "helpAcc" onclick = "popup_cspmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cspmen5_choro()">%</button><button class ="nb" onclick = "cspmen5_prop()">nb</button><button class ="flow" onclick = "cspmen5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "cspmen4_choro()">%</button><button class ="nb" onclick = "cspmen4_prop()">nb</button><button class ="flow" onclick = "cspmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Empleados</p><div class="niv-logo"><button class ="part" onclick = "cspmen3_choro()">%</button><button class ="nb" onclick = "cspmen3_prop()">nb</button><button class ="flow" onclick = "cspmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Obreros</p><div class="niv-logo"><button class ="part" onclick = "cspmen2_choro()">%</button><button class ="nb" onclick = "cspmen2_prop()">nb</button><button class ="flow" onclick = "cspmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "cspmen1_choro()">%</button><button class ="nb" onclick = "cspmen1_prop()">nb</button><button class ="flow" onclick = "cspmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Ocupación principal<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Jubilados</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Desempleados</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Estudiantes</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Activos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL RESIDENCIAL</span></div>

	<div class = "niv2"><p>Residencia por zonificación en <i>aires urbaines</i><span class = "helpAcc" onclick = "popup_resarea(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #cb5f00 ;"><p id = "vcMenu"></p><div class="niv-logo"><button class ="part" onclick = "resarea3_choro()">%</button><button class ="nb" onclick = "resarea3_prop()">nb</button><button class ="flow" onclick = "resarea3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #005099 ;"><p>Zona periférica</p><div class="niv-logo"><button class ="part" onclick="resarea1_choro()">%</button><button class ="nb" onclick = "resarea1_prop()">nb</button><button class ="flow" onclick = "resarea1_flow()"></button></div></div>

	<div class = "niv2"><p>Residencia dentro/fuera Barrios Prioritarios<span class = "helpAcc" onclick = "popup_qpv(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #e77000 ;"><p>Dentro Barrios Prioritarios</p><div class="niv-logo"><button class ="part" onclick = "qpv2_choro()">%</button><button class ="nb" onclick = "qpv2_prop()">nb</button><button class ="flow" onclick = "qpv2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Fuera Barrios Prioritarios</p><div class="niv-logo"><button class ="part" onclick = "qpv1_choro()">%</button><button class ="nb" onclick = "qpv1_prop()">nb</button><button class ="flow" onclick = "qpv1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">ACTIVIDAD / TRANSPORTE</span></div>

	<div class = "niv2"><p>Actividad realizada<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Recreo</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Compras</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Estudios</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Trabajo</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>En casa</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Último modo de transporte utilizado<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Modo suave</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Vehículo motorizado<br/>individual</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transporte colectivo</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';

}
else if ($page == 'annecy')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>

	<div class = "niv2"><p>Población total<span class = "helpAcc" onclick = "popup_pop0(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Población total</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Residentes/no residentes<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Residentes</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>No residentes</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL DEMOGRÁFICO</span></div>

	<div class = "niv2"><p>Grupo de edad<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 años o más</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 años</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 años</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 años</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexo<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Mujeres</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hombres</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>

<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strmfr(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar con niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr4_choro()">%</button><button class ="nb" onclick = "strmfr4_prop()">nb</button><button class ="flow" onclick = "strmfr4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar (excepto pareja) sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr3_choro()">%</button><button class ="nb" onclick = "strmfr3_prop()">nb</button><button class ="flow" onclick = "strmfr3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f37fbc ;"><p>Pareja sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr2_choro()">%</button><button class ="nb" onclick = "strmfr2_prop()">nb</button><button class ="flow" onclick = "strmfr2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strmfr1_choro()">%</button><button class ="nb" onclick = "strmfr1_prop()">nb</button><button class ="flow" onclick = "strmfr1_flow()"></button></div></div>

<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strmfr(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar con niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr4_choro()">%</button><button class ="nb" onclick = "strmfr4_prop()">nb</button><button class ="flow" onclick = "strmfr4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar (excepto pareja) sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr3_choro()">%</button><button class ="nb" onclick = "strmfr3_prop()">nb</button><button class ="flow" onclick = "strmfr3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f37fbc ;"><p>Pareja sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr2_choro()">%</button><button class ="nb" onclick = "strmfr2_prop()">nb</button><button class ="flow" onclick = "strmfr2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strmfr1_choro()">%</button><button class ="nb" onclick = "strmfr1_prop()">nb</button><button class ="flow" onclick = "strmfr1_flow()"></button></div></div>
		

<div class = "niv1"><span class="niv1-item">PERFIL SOCIAL</span></div>

	<div class = "niv2"><p>Nivel educativo<span class = "helpAcc" onclick = "popup_cleduc(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Nivel educativo<br/>(hogar)<span class = "helpAcc" onclick = "popup_educmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Al</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>


	<div class = "niv2"><p>Categoría socioprofesional<span class = "helpAcc" onclick = "popup_cs(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cs5_choro()">%</button><button class ="nb" onclick = "cs5_prop()">nb</button><button class ="flow" onclick = "cs5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "cs4_choro()">%</button><button class ="nb" onclick = "cs4_prop()">nb</button><button class ="flow" onclick = "cs4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Empleados</p><div class="niv-logo"><button class ="part" onclick = "cs3_choro()">%</button><button class ="nb" onclick = "cs3_prop()">nb</button><button class ="flow" onclick = "cs3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Obreros</p><div class="niv-logo"><button class ="part" onclick = "cs2_choro()">%</button><button class ="nb" onclick = "cs2_prop()">nb</button><button class ="flow" onclick = "cs2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "cs1_choro()">%</button><button class ="nb" onclick = "cs1_prop()">nb</button><button class ="flow" onclick = "cs1_flow()"></button></div></div>

	<div class = "niv2"><p>Categoría socioprofesional<br/>(hogar)<span class = "helpAcc" onclick = "popup_cspmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cspmen5_choro()">%</button><button class ="nb" onclick = "cspmen5_prop()">nb</button><button class ="flow" onclick = "cspmen5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "cspmen4_choro()">%</button><button class ="nb" onclick = "cspmen4_prop()">nb</button><button class ="flow" onclick = "cspmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Empleados</p><div class="niv-logo"><button class ="part" onclick = "cspmen3_choro()">%</button><button class ="nb" onclick = "cspmen3_prop()">nb</button><button class ="flow" onclick = "cspmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Obreros</p><div class="niv-logo"><button class ="part" onclick = "cspmen2_choro()">%</button><button class ="nb" onclick = "cspmen2_prop()">nb</button><button class ="flow" onclick = "cspmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "cspmen1_choro()">%</button><button class ="nb" onclick = "cspmen1_prop()">nb</button><button class ="flow" onclick = "cspmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Ocupación principal<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Jubilados</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Desempleados</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Estudiantes</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Activos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL RESIDENCIAL</span></div>

	<div class = "niv2"><p>Residencia por zonificación en <i>aires urbaines</i><span class = "helpAcc" onclick = "popup_resarea(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #cb5f00 ;"><p id = "vcMenu"></p><div class="niv-logo"><button class ="part" onclick = "resarea3_choro()">%</button><button class ="nb" onclick = "resarea3_prop()">nb</button><button class ="flow" onclick = "resarea3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #00998b ;"><p>Zona urbana</p><div class="niv-logo"><button class ="part" onclick = "resarea2_choro()">%</button><button class ="nb" onclick = "resarea2_prop()">nb</button><button class ="flow" onclick = "resarea2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #005099 ;"><p>Zona periférica</p><div class="niv-logo"><button class ="part" onclick="resarea1_choro()">%</button><button class ="nb" onclick = "resarea1_prop()">nb</button><button class ="flow" onclick = "resarea1_flow()"></button></div></div>

<div class = "niv1"><span class="niv1-item">ACTIVIDAD / TRANSPORTE</span></div>

	<div class = "niv2"><p>Actividad realizada<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Recreo</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Compras</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Estudios</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Trabajo</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>En casa</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Último modo de transporte utilizado<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Modo suave</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Vehículo motorizado<br/>individual</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transporte colectivo</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';

}
else if ($page == 'bogota')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>


	<div class = "niv2"><p>Población total<span class = "helpAcc" onclick = "popup_pop0(event)""></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Población total</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Residentes/no residentes<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Residentes</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>No residentes</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL DEMOGRÁFICO</span></div>

	<div class = "niv2"><p>Grupo de edad<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 años o más</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 años</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 años</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 años</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

	<div class = "niv2"><p>Sexo<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Mujeres</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hombres</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>

	<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strm(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar compuesto con niño</p><div class="niv-logo"><button class ="part" onclick = "strm5_choro()">%</button><button class ="nb" onclick = "strm5_prop()">nb</button><button class ="flow" onclick = "strm5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #58c2ef ;"><p>Familia con niño</p><div class="niv-logo"><button class ="part" onclick = "strm4_choro()">%</button><button class ="nb" onclick = "strm4_prop()">nb</button><button class ="flow" onclick = "strm4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar compuesto sin niño</p><div class="niv-logo"><button class ="part" onclick = "strm3_choro()">%</button><button class ="nb" onclick = "strm3_prop()">nb</button><button class ="flow" onclick = "strm3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f37fbc ;"><p>Familia sin niño</p><div class="niv-logo"><button class ="part" onclick = "strm2_choro()">%</button><button class ="nb" onclick = "strm2_prop()">nb</button><button class ="flow" onclick = "strm2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strm1_choro()">%</button><button class ="nb" onclick = "strm1_prop()">nb</button><button class ="flow" onclick = "strm1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL SOCIAL</span></div>

	<div class = "niv2"><p>Nivel educativo<span class = "helpAcc" onclick = "popup_cleduc_as(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Nivel educativo<br/>(hogar)<span class = "helpAcc" onclick = "popup_educmen_as(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Ingresos del hogar<span class = "helpAcc" onclick = "popup_rev_bo(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #7a1828 ;"><p>Muy altos</p><div class="niv-logo"><button class ="part" onclick = "rev5_choro()">%</button><button class ="nb" onclick = "rev5_prop()">nb</button><button class ="flow" onclick = "rev5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #dc2c48 ;"><p>Altos</p><div class="niv-logo"><button class ="part" onclick = "rev4_choro()">%</button><button class ="nb" onclick = "rev4_prop()">nb</button><button class ="flow" onclick = "rev4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Medios</p><div class="niv-logo"><button class ="part" onclick = "rev3_choro()">%</button><button class ="nb" onclick = "rev3_prop()">nb</button><button class ="flow" onclick = "rev3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Bajos</p><div class="niv-logo"><button class ="part" onclick = "rev2_choro()">%</button><button class ="nb" onclick = "rev2_prop()">nb</button><button class ="flow" onclick = "rev2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #348e89 ;"><p>Muy bajos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "rev1_choro()">%</button><button class ="nb" onclick = "rev1_prop()">nb</button><button class ="flow" onclick = "rev1_flow()"></button></div></div>

	<div class = "niv2"><p>Categoría socio-ocupacional<span class = "helpAcc" onclick = "popup_cso(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button class ="part" onclick = "cso4_choro()">%</button><button class ="nb" onclick = "cso4_prop()">nb</button><button class ="flow" onclick = "cso4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Independientes</p><div class="niv-logo"><button class ="part" onclick = "cso3_choro()">%</button><button class ="nb" onclick = "cso3_prop()">nb</button><button class ="flow" onclick = "cso3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008791 ;"><p>Trabajadores cualificados</p><div class="niv-logo"><button class ="part" onclick = "cso2_choro()">%</button><button class ="nb" onclick = "cso2_prop()">nb</button><button class ="flow" onclick = "cso2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #624f98 ;"><p>Trabajadores no cualificados</p><div class="niv-logo"><button class ="part" onclick = "cso1_choro()">%</button><button class ="nb" onclick = "cso1_prop()">nb</button><button class ="flow" onclick = "cso1_flow()"></button></div></div>

	<div class = "niv2"><p>Informalidad laboral<span class = "helpAcc" onclick = "popup_inf(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Activos con empleo informal</p><div class="niv-logo"><button class ="part" onclick = "inf2_choro()">%</button><button class ="nb" onclick = "inf2_prop()">nb</button><button class ="flow" onclick = "inf2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #9a2679 ;"><p>Activos con empleo formal</p><div class="niv-logo"><button class ="part" onclick = "inf1_choro()">%</button><button class ="nb" onclick = "inf1_prop()">nb</button><button class ="flow" onclick = "inf1_flow()"></button></div></div>

	<div class = "niv2"><p>Ocupación principal<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Jubilados</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Desempleados</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Estudiantes</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Activos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL RESIDENCIAL</span></div>

	<div class = "niv2"><p>Anillo de residencia<span class = "helpAcc" onclick = "popup_zona(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #167e88 ;"><p>Centro</p><div class="niv-logo"><button class ="part" onclick = "zona4_choro()">%</button><button class ="nb" onclick = "zona4_prop()">nb</button><button class ="flow" onclick = "zona4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Pericentro</p><div class="niv-logo"><button class ="part" onclick = "zona3_choro()">%</button><button class ="nb" onclick = "zona3_prop()">nb</button><button class ="flow" onclick = "zona3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec7646 ;"><p>Periferia cercana</p><div class="niv-logo"><button class ="part" onclick = "zona2_choro()">%</button><button class ="nb" onclick = "zona2_prop()">nb</button><button class ="flow" onclick = "zona2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #9a2679 ;"><p>Periferia lejana</p><div class="niv-logo"><button class ="part" onclick = "zona1_choro()">%</button><button class ="nb" onclick = "zona1_prop()">nb</button><button class ="flow" onclick = "zona1_flow()"></button></div></div>

	<div class = "niv2"><p>Estrato socioeconómico de residencia<span class = "helpAcc" onclick = "popup_sse(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #dc2c48 ;"><p>Estrato 4, 5 y 6</p><div class="niv-logo"><button class ="part" onclick = "sse4_choro()">%</button><button class ="nb" onclick = "sse4_prop()">nb</button><button class ="flow" onclick = "sse4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Estrato 3</p><div class="niv-logo"><button class ="part" onclick = "sse3_choro()">%</button><button class ="nb" onclick = "sse3_prop()">nb</button><button class ="flow" onclick = "sse3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Estrato 2</p><div class="niv-logo"><button class ="part" onclick = "sse2_choro()">%</button><button class ="nb" onclick = "sse2_prop()">nb</button><button class ="flow" onclick = "sse2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #348e89 ;"><p>Estrato 1 o sin estrato</p><div class="niv-logo"><button class ="part" onclick="sse1_choro()">%</button><button class ="nb" onclick = "sse1_prop()">nb</button><button class ="flow" onclick = "sse1_flow()"></button></div></div>

	<div class = "niv2"><p>Tenencia de la vivienda<span class = "helpAcc" onclick = "popup_log(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Propietarios</p><div class="niv-logo"><button class ="part" onclick = "log3_choro()">%</button><button class ="nb" onclick = "log3_prop()">nb</button><button class ="flow" onclick = "log3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>Arrendatarios</p><div class="niv-logo"><button class ="part" onclick = "log2_choro()">%</button><button class ="nb" onclick = "log2_prop()">nb</button><button class ="flow" onclick = "log2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Personas albergadas</p><div class="niv-logo"><button class ="part" onclick = "log1_choro()">%</button><button class ="nb" onclick = "log1_prop()">nb</button><button class ="flow" onclick = "log1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">ACTIVIDAD / TRANSPORTE</span></div>

	<div class = "niv2"><p>Actividad realizada<span class = "helpAcc" onclick = "popup_act_as(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Trámites admin. / personales</p><div class="niv-logo"><button class ="part" onclick = "act6_choro()">%</button><button class ="nb" onclick = "act6_prop()">nb</button><button class ="flow" onclick = "act6_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Recreo</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Compras</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Estudios</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Trabajo</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>En casa</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Último modo de transporte utilizado<span class = "helpAcc" onclick = "popup_mode_bo(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Modo suave</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Vehículo motorizado individual</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transporte colectivo</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ;"><p>TransMilenio</p><div class="niv-logo"><button class = "part" onclick = "mode4_choro()">%</button><button class = "nb" onclick = "mode4_prop()">nb</button><button class = "flow" onclick = "mode4_flow()"></button></div></div>';


}
else if ($page == 'santiago')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>


	<div class = "niv2"><p>Población total<span class = "helpAcc" onclick = "popup_pop0(event)""></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Población total</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Residentes/no residentes<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Residentes</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>No residentes</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL DEMOGRÁFICO</span></div>

	<div class = "niv2"><p>Grupo de edad<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 años o más</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 años</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 años</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 años</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

	<div class = "niv2"><p>Sexo<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Mujeres</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hombres</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>

	<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strm(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar compuesto con niño</p><div class="niv-logo"><button class ="part" onclick = "strm5_choro()">%</button><button class ="nb" onclick = "strm5_prop()">nb</button><button class ="flow" onclick = "strm5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #58c2ef ;"><p>Familia con niño</p><div class="niv-logo"><button class ="part" onclick = "strm4_choro()">%</button><button class ="nb" onclick = "strm4_prop()">nb</button><button class ="flow" onclick = "strm4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar compuesto sin niño</p><div class="niv-logo"><button class ="part" onclick = "strm3_choro()">%</button><button class ="nb" onclick = "strm3_prop()">nb</button><button class ="flow" onclick = "strm3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f37fbc ;"><p>Familia sin niño</p><div class="niv-logo"><button class ="part" onclick = "strm2_choro()">%</button><button class ="nb" onclick = "strm2_prop()">nb</button><button class ="flow" onclick = "strm2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strm1_choro()">%</button><button class ="nb" onclick = "strm1_prop()">nb</button><button class ="flow" onclick = "strm1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL SOCIAL</span></div>

	<div class = "niv2"><p>Nivel educativo<span class = "helpAcc" onclick = "popup_cleduc_as(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Nivel educativo<br/>(hogar)<span class = "helpAcc" onclick = "popup_educmen_as(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Ingresos del hogar<span class = "helpAcc" onclick = "popup_rev_sa(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #7a1828 ;"><p>Très élevé</p><div class="niv-logo"><button class ="part" onclick = "rev5_choro()">%</button><button class ="nb" onclick = "rev5_prop()">nb</button><button class ="flow" onclick = "rev5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #dc2c48 ;"><p>Élevé</p><div class="niv-logo"><button class ="part" onclick = "rev4_choro()">%</button><button class ="nb" onclick = "rev4_prop()">nb</button><button class ="flow" onclick = "rev4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "rev3_choro()">%</button><button class ="nb" onclick = "rev3_prop()">nb</button><button class ="flow" onclick = "rev3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Faible</p><div class="niv-logo"><button class ="part" onclick = "rev2_choro()">%</button><button class ="nb" onclick = "rev2_prop()">nb</button><button class ="flow" onclick = "rev2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #348e89 ;"><p>Très faible</p><div class="niv-logo"><button id = "first" class ="part" onclick = "rev1_choro()">%</button><button class ="nb" onclick = "rev1_prop()">nb</button><button class ="flow" onclick = "rev1_flow()"></button></div></div>

	<div class = "niv2"><p>Categoría socio-ocupacional<span class = "helpAcc" onclick = "popup_cso(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button class ="part" onclick = "cso4_choro()">%</button><button class ="nb" onclick = "cso4_prop()">nb</button><button class ="flow" onclick = "cso4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Independientes</p><div class="niv-logo"><button class ="part" onclick = "cso3_choro()">%</button><button class ="nb" onclick = "cso3_prop()">nb</button><button class ="flow" onclick = "cso3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008791 ;"><p>Trabajadores cualificados</p><div class="niv-logo"><button class ="part" onclick = "cso2_choro()">%</button><button class ="nb" onclick = "cso2_prop()">nb</button><button class ="flow" onclick = "cso2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #624f98 ;"><p>Trabajadores no cualificados</p><div class="niv-logo"><button class ="part" onclick = "cso1_choro()">%</button><button class ="nb" onclick = "cso1_prop()">nb</button><button class ="flow" onclick = "cso1_flow()"></button></div></div>

	<div class = "niv2"><p>Ocupación principal<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Jubilados</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Desempleados</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Estudiantes</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Activos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL RESIDENCIAL</span></div>

	<div class = "niv2"><p>Anillo de residencia<span class = "helpAcc" onclick = "popup_zona(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #167e88 ;"><p>Centro</p><div class="niv-logo"><button class ="part" onclick = "zona4_choro()">%</button><button class ="nb" onclick = "zona4_prop()">nb</button><button class ="flow" onclick = "zona4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Pericentro</p><div class="niv-logo"><button class ="part" onclick = "zona3_choro()">%</button><button class ="nb" onclick = "zona3_prop()">nb</button><button class ="flow" onclick = "zona3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec7646 ;"><p>Periferia cercana</p><div class="niv-logo"><button class ="part" onclick = "zona2_choro()">%</button><button class ="nb" onclick = "zona2_prop()">nb</button><button class ="flow" onclick = "zona2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #9a2679 ;"><p>Periferia lejana</p><div class="niv-logo"><button class ="part" onclick = "zona1_choro()">%</button><button class ="nb" onclick = "zona1_prop()">nb</button><button class ="flow" onclick = "zona1_flow()"></button></div></div>

	<div class = "niv2"><p>Tenencia de la vivienda<span class = "helpAcc" onclick = "popup_log(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Propietarios</p><div class="niv-logo"><button class ="part" onclick = "log3_choro()">%</button><button class ="nb" onclick = "log3_prop()">nb</button><button class ="flow" onclick = "log3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>Arrendatarios</p><div class="niv-logo"><button class ="part" onclick = "log2_choro()">%</button><button class ="nb" onclick = "log2_prop()">nb</button><button class ="flow" onclick = "log2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Personas albergadas</p><div class="niv-logo"><button class ="part" onclick = "log1_choro()">%</button><button class ="nb" onclick = "log1_prop()">nb</button><button class ="flow" onclick = "log1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">ACTIVIDAD / TRANSPORTE</span></div>

	<div class = "niv2"><p>Actividad realizada<span class = "helpAcc" onclick = "popup_act_as(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Trámites admin. / personales</p><div class="niv-logo"><button class ="part" onclick = "act6_choro()">%</button><button class ="nb" onclick = "act6_prop()">nb</button><button class ="flow" onclick = "act6_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Recreo</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Compras</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Estudios</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Trabajo</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>En casa</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Último modo de transporte utilizado<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Modo suave</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Vehículo motorizado individual</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transporte colectivo</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';
}
else if ($page == 'sao-paulo')
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>


	<div class = "niv2"><p>Población total<span class = "helpAcc" onclick = "popup_pop0(event)""></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Población total</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Residentes/no residentes<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Residentes</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>No residentes</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL DEMOGRÁFICO</span></div>

	<div class = "niv2"><p>Grupo de edad<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 años o más</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 años</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 años</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 años</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

	
	<div class = "niv2"><p>Sexo<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Mujeres</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hombres</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>

	<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strm(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar compuesto con niño</p><div class="niv-logo"><button class ="part" onclick = "strm5_choro()">%</button><button class ="nb" onclick = "strm5_prop()">nb</button><button class ="flow" onclick = "strm5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #58c2ef ;"><p>Familia con niño</p><div class="niv-logo"><button class ="part" onclick = "strm4_choro()">%</button><button class ="nb" onclick = "strm4_prop()">nb</button><button class ="flow" onclick = "strm4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar compuesto sin niño</p><div class="niv-logo"><button class ="part" onclick = "strm3_choro()">%</button><button class ="nb" onclick = "strm3_prop()">nb</button><button class ="flow" onclick = "strm3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f37fbc ;"><p>Familia sin niño</p><div class="niv-logo"><button class ="part" onclick = "strm2_choro()">%</button><button class ="nb" onclick = "strm2_prop()">nb</button><button class ="flow" onclick = "strm2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strm1_choro()">%</button><button class ="nb" onclick = "strm1_prop()">nb</button><button class ="flow" onclick = "strm1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL SOCIAL</span></div>

	<div class = "niv2"><p>Nivel educativo<span class = "helpAcc" onclick = "popup_cleduc_as(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Nivel educativo<br/>(hogar)<span class = "helpAcc" onclick = "popup_educmen_as(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Ingresos del hogar<span class = "helpAcc" onclick = "popup_rev_sp(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #7a1828 ;"><p>Muy altos</p><div class="niv-logo"><button class ="part" onclick = "rev5_choro()">%</button><button class ="nb" onclick = "rev5_prop()">nb</button><button class ="flow" onclick = "rev5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #dc2c48 ;"><p>Altos</p><div class="niv-logo"><button class ="part" onclick = "rev4_choro()">%</button><button class ="nb" onclick = "rev4_prop()">nb</button><button class ="flow" onclick = "rev4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Medios</p><div class="niv-logo"><button class ="part" onclick = "rev3_choro()">%</button><button class ="nb" onclick = "rev3_prop()">nb</button><button class ="flow" onclick = "rev3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Bajos</p><div class="niv-logo"><button class ="part" onclick = "rev2_choro()">%</button><button class ="nb" onclick = "rev2_prop()">nb</button><button class ="flow" onclick = "rev2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #348e89 ;"><p>Muy bajos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "rev1_choro()">%</button><button class ="nb" onclick = "rev1_prop()">nb</button><button class ="flow" onclick = "rev1_flow()"></button></div></div>

	<div class = "niv2"><p>Categoría socio-ocupacional<span class = "helpAcc" onclick = "popup_cso(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button class ="part" onclick = "cso4_choro()">%</button><button class ="nb" onclick = "cso4_prop()">nb</button><button class ="flow" onclick = "cso4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Independientes</p><div class="niv-logo"><button class ="part" onclick = "cso3_choro()">%</button><button class ="nb" onclick = "cso3_prop()">nb</button><button class ="flow" onclick = "cso3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008791 ;"><p>Trabajadores cualificados</p><div class="niv-logo"><button class ="part" onclick = "cso2_choro()">%</button><button class ="nb" onclick = "cso2_prop()">nb</button><button class ="flow" onclick = "cso2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #624f98 ;"><p>Trabajadores no cualificados</p><div class="niv-logo"><button class ="part" onclick = "cso1_choro()">%</button><button class ="nb" onclick = "cso1_prop()">nb</button><button class ="flow" onclick = "cso1_flow()"></button></div></div>

	<div class = "niv2"><p>Informalidad laboral<span class = "helpAcc" onclick = "popup_inf(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Activos con empleo informal</p><div class="niv-logo"><button class ="part" onclick = "inf2_choro()">%</button><button class ="nb" onclick = "inf2_prop()">nb</button><button class ="flow" onclick = "inf2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #9a2679 ;"><p>Activos con empleo formal</p><div class="niv-logo"><button class ="part" onclick = "inf1_choro()">%</button><button class ="nb" onclick = "inf1_prop()">nb</button><button class ="flow" onclick = "inf1_flow()"></button></div></div>

	<div class = "niv2"><p>Ocupación principal<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Jubilados</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Desempleados</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Estudiantes</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Activos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>

<div class = "niv1"><span class="niv1-item">PERFIL RESIDENCIAL</span></div>

	<div class = "niv2"><p>Anillo de residencia<span class = "helpAcc" onclick = "popup_zona(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #167e88 ;"><p>Centro</p><div class="niv-logo"><button class ="part" onclick = "zona4_choro()">%</button><button class ="nb" onclick = "zona4_prop()">nb</button><button class ="flow" onclick = "zona4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Pericentro</p><div class="niv-logo"><button class ="part" onclick = "zona3_choro()">%</button><button class ="nb" onclick = "zona3_prop()">nb</button><button class ="flow" onclick = "zona3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec7646 ;"><p>Periferia cercana</p><div class="niv-logo"><button class ="part" onclick = "zona2_choro()">%</button><button class ="nb" onclick = "zona2_prop()">nb</button><button class ="flow" onclick = "zona2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #9a2679 ;"><p>Periferia lejana</p><div class="niv-logo"><button class ="part" onclick = "zona1_choro()">%</button><button class ="nb" onclick = "zona1_prop()">nb</button><button class ="flow" onclick = "zona1_flow()"></button></div></div>

	<div class = "niv2"><p>Tenencia de la vivienda<span class = "helpAcc" onclick = "popup_log(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #fe7562 ;"><p>Propietarios</p><div class="niv-logo"><button class ="part" onclick = "log3_choro()">%</button><button class ="nb" onclick = "log3_prop()">nb</button><button class ="flow" onclick = "log3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>Arrendatarios</p><div class="niv-logo"><button class ="part" onclick = "log2_choro()">%</button><button class ="nb" onclick = "log2_prop()">nb</button><button class ="flow" onclick = "log2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Personas albergadas</p><div class="niv-logo"><button class ="part" onclick = "log1_choro()">%</button><button class ="nb" onclick = "log1_prop()">nb</button><button class ="flow" onclick = "log1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">ACTIVIDAD / TRANSPORTE</span></div>

	<div class = "niv2"><p>Actividad realizada<span class = "helpAcc" onclick = "popup_act_as(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Trámites admin. / personales</p><div class="niv-logo"><button class ="part" onclick = "act6_choro()">%</button><button class ="nb" onclick = "act6_prop()">nb</button><button class ="flow" onclick = "act6_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Recreo</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Compras</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Estudios</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Trabajo</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>En casa</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Último modo de transporte utilizado<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Modo suave</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Vehículo motorizado individual</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transporte colectivo</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';
}
else
{
echo '
<div class = "niv1"><span class="niv1-item">GLOBAL</span></div>

	<div class = "niv2"><p>Población total<span class = "helpAcc" onclick = "popup_pop0(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #000093 ; "><p>Población total</p><div class="niv-logo"><button class ="part" onclick = "pop0_choro()"><I>d</I></button><button class ="nb" onclick = "pop0_prop()">nb</button><button class ="flow" onclick = "pop0_flow()"></button></div></div>

	<div class = "niv2"><p>Residentes/no residentes<span class = "helpAcc" onclick = "popup_respop(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ; "><p>Residentes</p><div class="niv-logo"><button class ="part" onclick = "res2_choro()">%</button><button class ="nb" onclick = "res2_prop()">nb</button></div></div>

		<div class = "niv3" style = "border-left-color : #f8bd08 ; "><p>No residentes</p><div class="niv-logo"><button class ="part" onclick = "res1_choro()">%</button><button class ="nb" onclick = "res1_prop()">nb</button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL DEMOGRÁFICO</span></div>

	<div class = "niv2"><p>Grupo de edad<span class = "helpAcc" onclick = "popup_age(event);"></span></p></div>

		<div class = "niv3" style = "border-left-color : #816c53 ;"><p>65 años o más</p><div class="niv-logo"><button class ="part" onclick = "age4_choro()">%</button><button class ="nb" onclick = "age4_prop()">nb</button><button class ="flow" onclick = "age4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #67539b ;"><p>35-64 años</p><div class="niv-logo"><button class ="part" onclick = "age3_choro()">%</button><button class ="nb" onclick = "age3_prop()">nb</button><button class ="flow" onclick = "age3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e9621d ;"><p>25-34 años</p><div class="niv-logo"><button class ="part" onclick = "age2_choro()">%</button><button class ="nb" onclick = "age2_prop()">nb</button><button class ="flow" onclick = "age2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #da0846 ;"><p>16-24 años</p><div class="niv-logo"><button class ="part" onclick = "age1_choro()">%</button><button class ="nb" onclick = "age1_prop()">nb</button><button class ="flow" onclick = "age1_flow()"></button></div></div>

<div class = "niv2"><p>Sexo<span class = "helpAcc" onclick = "popup_sex(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #47b291 ;"><p>Mujeres</p><div class="niv-logo"><button class ="part" onclick = "sex2_choro()">%</button><button class ="nb" onclick = "sex2_prop()">nb</button><button class ="flow" onclick = "sex2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4e3e8e ;"><p>Hombres</p><div class="niv-logo"><button class ="part" onclick = "sex1_choro()">%</button><button class ="nb" onclick = "sex1_prop()">nb</button><button class ="flow" onclick = "sex1_flow()"></button></div></div>

<div class = "niv2"><p>Composición del hogar<span class = "helpAcc" onclick = "popup_strmfr(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #4c6fad ;"><p>Hogar con niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr4_choro()">%</button><button class ="nb" onclick = "strmfr4_prop()">nb</button><button class ="flow" onclick = "strmfr4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e81c58 ;"><p>Hogar (excepto pareja) sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr3_choro()">%</button><button class ="nb" onclick = "strmfr3_prop()">nb</button><button class ="flow" onclick = "strmfr3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #f37fbc ;"><p>Pareja sin niño</p><div class="niv-logo"><button class ="part" onclick = "strmfr2_choro()">%</button><button class ="nb" onclick = "strmfr2_prop()">nb</button><button class ="flow" onclick = "strmfr2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #7fb72c ;"><p>Persona sola</p><div class="niv-logo"><button id = "first" class ="part" onclick = "strmfr1_choro()">%</button><button class ="nb" onclick = "strmfr1_prop()">nb</button><button class ="flow" onclick = "strmfr1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL SOCIAL</span></div>

	<div class = "niv2"><p>Nivel educativo<span class = "helpAcc" onclick = "popup_cleduc(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc4_choro()">%</button><button class ="nb" onclick = "cleduc4_prop()">nb</button><button class ="flow" onclick = "cleduc4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "cleduc3_choro()">%</button><button class ="nb" onclick = "cleduc3_prop()">nb</button><button class ="flow" onclick = "cleduc3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "cleduc2_choro()">%</button><button class ="nb" onclick = "cleduc2_prop()">nb</button><button class ="flow" onclick = "cleduc2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "cleduc1_choro()">%</button><button class ="nb" onclick = "cleduc1_prop()">nb</button><button class ="flow" onclick = "cleduc1_flow()"></button></div></div>

	<div class = "niv2"><p>Nivel educativo<br/>(hogar)<span class = "helpAcc" onclick = "popup_educmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #c02767 ;"><p>Muy alto</p><div class="niv-logo"><button class ="part" onclick = "educmen4_choro()">%</button><button class ="nb" onclick = "educmen4_prop()">nb</button><button class ="flow" onclick = "educmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #ec721b ;"><p>Alto</p><div class="niv-logo"><button class ="part" onclick = "educmen3_choro()">%</button><button class ="nb" onclick = "educmen3_prop()">nb</button><button class ="flow" onclick = "educmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17a97a ;"><p>Medio</p><div class="niv-logo"><button class ="part" onclick = "educmen2_choro()">%</button><button class ="nb" onclick = "educmen2_prop()">nb</button><button class ="flow" onclick = "educmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #4b6dac ;"><p>Bajo</p><div class="niv-logo"><button class ="part" onclick = "educmen1_choro()">%</button><button class ="nb" onclick = "educmen1_prop()">nb</button><button class ="flow" onclick = "educmen1_flow()"></button></div></div>


	<div class = "niv2"><p>Categoría socioprofesional<span class = "helpAcc" onclick = "popup_cs(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cs5_choro()">%</button><button class ="nb" onclick = "cs5_prop()">nb</button><button class ="flow" onclick = "cs5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "cs4_choro()">%</button><button class ="nb" onclick = "cs4_prop()">nb</button><button class ="flow" onclick = "cs4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Empleados</p><div class="niv-logo"><button class ="part" onclick = "cs3_choro()">%</button><button class ="nb" onclick = "cs3_prop()">nb</button><button class ="flow" onclick = "cs3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Obreros</p><div class="niv-logo"><button class ="part" onclick = "cs2_choro()">%</button><button class ="nb" onclick = "cs2_prop()">nb</button><button class ="flow" onclick = "cs2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "cs1_choro()">%</button><button class ="nb" onclick = "cs1_prop()">nb</button><button class ="flow" onclick = "cs1_flow()"></button></div></div>

	<div class = "niv2"><p>Categoría socioprofesional<br/>(hogar)<span class = "helpAcc" onclick = "popup_cspmen(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #ab0f31 ;"><p>Directivos y profesionales</p><div class="niv-logo"><button id = "first" class ="part" onclick = "cspmen5_choro()">%</button><button class ="nb" onclick = "cspmen5_prop()">nb</button><button class ="flow" onclick = "cspmen5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #d69b01 ;"><p>Categorías intermedias</p><div class="niv-logo"><button class ="part" onclick = "cspmen4_choro()">%</button><button class ="nb" onclick = "cspmen4_prop()">nb</button><button class ="flow" onclick = "cspmen4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #188e31 ;"><p>Empleados</p><div class="niv-logo"><button class ="part" onclick = "cspmen3_choro()">%</button><button class ="nb" onclick = "cspmen3_prop()">nb</button><button class ="flow" onclick = "cspmen3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #624f98 ;"><p>Obreros</p><div class="niv-logo"><button class ="part" onclick = "cspmen2_choro()">%</button><button class ="nb" onclick = "cspmen2_prop()">nb</button><button class ="flow" onclick = "cspmen2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #008791 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "cspmen1_choro()">%</button><button class ="nb" onclick = "cspmen1_prop()">nb</button><button class ="flow" onclick = "cspmen1_flow()"></button></div></div>

	<div class = "niv2"><p>Ocupación principal<span class = "helpAcc" onclick = "popup_occ(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color: #f8bd08 ;"><p>Inactivos</p><div class="niv-logo"><button class ="part" onclick = "occ5_choro()">%</button><button class ="nb" onclick = "occ5_prop()">nb</button><button class ="flow" onclick = "occ5_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color: #957c60 ;"><p>Jubilados</p><div class="niv-logo"><button class ="part" onclick = "occ4_choro()">%</button><button class ="nb" onclick = "occ4_prop()">nb</button><button class ="flow" onclick = "occ4_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #586aa3 ;"><p>Desempleados</p><div class="niv-logo"><button class ="part" onclick = "occ3_choro()">%</button><button class ="nb" onclick = "occ3_prop()">nb</button><button class ="flow" onclick = "occ3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #97bc59 ;"><p>Estudiantes</p><div class="niv-logo"><button class ="part" onclick = "occ2_choro()">%</button><button class ="nb" onclick = "occ2_prop()">nb</button><button class ="flow" onclick = "occ2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e4406e ;"><p>Activos</p><div class="niv-logo"><button id = "first" class ="part" onclick = "occ1_choro()">%</button><button class ="nb" onclick = "occ1_prop()">nb</button><button class ="flow" onclick = "occ1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">PERFIL RESIDENCIAL</span></div>

	<div class = "niv2"><p>Residencia por zonificación en <i>aires urbaines</i><span class = "helpAcc" onclick = "popup_resarea(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #cb5f00 ;"><p id = "vcMenu"></p><div class="niv-logo"><button class ="part" onclick = "resarea3_choro()">%</button><button class ="nb" onclick = "resarea3_prop()">nb</button><button class ="flow" onclick = "resarea3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #00998b ;"><p>Zona urbana</p><div class="niv-logo"><button class ="part" onclick = "resarea2_choro()">%</button><button class ="nb" onclick = "resarea2_prop()">nb</button><button class ="flow" onclick = "resarea2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #005099 ;"><p>Zona periférica</p><div class="niv-logo"><button class ="part" onclick="resarea1_choro()">%</button><button class ="nb" onclick = "resarea1_prop()">nb</button><button class ="flow" onclick = "resarea1_flow()"></button></div></div>

	<div class = "niv2"><p>Residencia dentro/fuera Barrios Prioritarios<span class = "helpAcc" onclick = "popup_qpv(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #e77000 ;"><p>Dentro Barrios Prioritarios</p><div class="niv-logo"><button class ="part" onclick = "qpv2_choro()">%</button><button class ="nb" onclick = "qpv2_prop()">nb</button><button class ="flow" onclick = "qpv2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #58c2ef ;"><p>Fuera Barrios Prioritarios</p><div class="niv-logo"><button class ="part" onclick = "qpv1_choro()">%</button><button class ="nb" onclick = "qpv1_prop()">nb</button><button class ="flow" onclick = "qpv1_flow()"></button></div></div>


<div class = "niv1"><span class="niv1-item">ACTIVIDAD / TRANSPORTE</span></div>

	<div class = "niv2"><p>Actividad realizada<span class = "helpAcc" onclick = "popup_act(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #7e3a61 ;"><p>Recreo</p><div class="niv-logo"><button class ="part" onclick = "act5_choro()">%</button><button class ="nb" onclick = "act5_prop()">nb</button><button class ="flow" onclick = "act5_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #e7564d ;"><p>Compras</p><div class="niv-logo"><button class ="part" onclick = "act4_choro()">%</button><button class ="nb" onclick = "act4_prop()">nb</button><button class ="flow" onclick = "act4_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #379fac ;"><p>Estudios</p><div class="niv-logo"><button class ="part" onclick = "act3_choro()">%</button><button class ="nb" onclick = "act3_prop()">nb</button><button class ="flow" onclick = "act3_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #76ad71 ;"><p>Trabajo</p><div class="niv-logo"><button class ="part" onclick = "act2_choro()">%</button><button class ="nb" onclick = "act2_prop()">nb</button><button class ="flow" onclick = "act2_flow();"></button></div></div>

		<div class = "niv3" style = "border-left-color : #17297c ;"><p>En casa</p><div class="niv-logo"><button class ="part" onclick = "act1_choro()">%</button><button class ="nb" onclick = "act1_prop()">nb</button></div></div>

	<div class = "niv2"><p>Último modo de transporte utilizado<span class = "helpAcc" onclick = "popup_mode(event)"></span></p></div>

		<div class = "niv3" style = "border-left-color : #3d8966 ;"><p>Modo suave</p><div class="niv-logo"><button class = "part" onclick = "mode3_choro()">%</button><button class = "nb" onclick = "mode3_prop()">nb</button><button class = "flow" onclick = "mode3_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color :  #b44185 ;"><p>Vehículo motorizado<br/>individual</p><div class="niv-logo"><button class = "part" onclick = "mode2_choro()">%</button><button class = "nb" onclick = "mode2_prop()">nb</button><button class = "flow" onclick = "mode2_flow()"></button></div></div>

		<div class = "niv3" style = "border-left-color : #008eaa ;"><p>Transporte colectivo</p><div class="niv-logo"><button class = "part" onclick = "mode1_choro()">%</button><button class = "nb" onclick = "mode1_prop()">nb</button><button class = "flow" onclick = "mode1_flow()"></button></div></div>';
}
?>

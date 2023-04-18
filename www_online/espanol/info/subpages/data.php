<div class = "corps">
  <section>
<h2>Datos</h2>
</section>

<section>
	<p>
		<b>58 ciudades/regiones</b> situadas en Francia, en Quebec (Canadá) y en América Latina son accesibles en la versión actual de Mobiliscope.
	</p>
</section>

<section>
<h3>Las encuestas</h3>
	
	<p>
	Los datos provienen de grandes encuestas públicas sobre los desplazamientos de los individuos que permiten  <b>cuantificar </b> y <b>cualificar</b> a la población presente en las distintas horas del día.
	<ul>
		<li>En <b>Francia</b> estas encuestas las encargan los municipios, cada 10 años aproximadamente, y se realizan según una metodología estandarizada del <a href = "https://www.cerema.fr/fr/actualites/emc2-enquete-mobilite-certifiee-cerema-emc2-anciennement" target="_blank">Cerema</a>, salvo para Île-de-France y su <a href = "http://www.omnil.fr/spip.php?article81" target="_blank">Enquête Globale Transport</a> (DRIEA-STIF-OMNIL).</br>
		La mayoría de estas encuestas están disponibles para fines relacionados con la investigación a través de <a href = "http://www.progedo-adisp.fr/" target="_blank">Progedo</a> (archivos de datos provenientes de la Estadística Pública). Los datos de las otras encuestas provienen de la mencionada base de datos unificada del Cerema: esta base reagrupa el conjunto de las encuestas realizadas desde 2009.</br>
		Algunas de las encuestas también están disponibles en open data (<a href = "https://www.data.gouv.fr/fr/datasets/enquete-deplacements-en-loire-atlantique-2/" target="_blank">Nantes</a>, <a href = "https://data.montpellier3m.fr/dataset/enquete-menages-deplacements-archive" target="_blank">Montpellier</a> y <a href = "https://opendata.lillemetropole.fr/explore/dataset/enquete-deplacement-2016/information/" target="_blank">Lille</a>).
		</li>
		<li>En <b>Quebec</b>, se trata de encuestas origen-destino proporcionadas por el <a href = "http://www.transports.gouv.qc.ca" target="_blank">Ministerio de Transporte de Quebec</a>.</li>
		<li>En <b>América Latina</b>, se trata de encuestas origen-destino proporcionadas por: el <a href = "https://www.simur.gov.co/encuestas-de-movilidad" target="_blank"><i>Sistema Integrado de información sobre Movilidad Urbana Regional</i> (SIMUR) para Bogotá</a>; el <a href = "http://www.sectra.gob.cl/biblioteca/detalle1.asp?mfn=3253" target="_blank"><i>Ministerio de Transportes y Telecomunicaciones, Programa de Vialidad y Transporte Urbano: SECTRA</i></a> para Santiago de Chile; la <a href = "http://www.metro.sp.gov.br/pesquisa-od/" target="_blank"><i>Companhia do Metrô de São Paulo </i></a>para São Paulo.</li>
	</ul>
	</p>

	<p>
	 Las encuestas se han realizado a una muestra de hogares representativa de la población del territorio. En el transcurso de las entrevistas cara a cara o telefónicas, las personas han sido invitadas a describir todos los desplazamientos de su jornada anterior precisando los puntos de salida y de llegada de cada uno de los desplazamientos, la hora exacta del inicio y del fin del desplazamiento, el motivo del desplazamiento y el modo de transporte utilizado. En las encuestas quebequenses, la hora de llegada no se ha preguntado sistemáticamente a los participantes interrogados. Estos datos omitidos han sido imputados utilizando desplazamientos comparables o calculando la duración del desplazamiento a partir de un Sistema de Información Geográfica.
    </p>

    <p>
		Los ritmos cotidianos de los territorios también pueden cuantificarse a partir del rastro digital que dejan los teléfonos móviles. Aunque, con respecto al rastro digital, las grandes encuestas utilizadas por el equipo de Mobiliscope tienen la ventaja de permitir que la población presente sea cualificada según un gran número de <a href="/es/info/methods/indicators">indicadores</a> relativos al perfil sociodemográfico de los individuos (sin utilizar, por ejemplo, las estimaciones a partir de la antena de residencia de los titulares de teléfonos móviles), al tipo de actividades efectuadas (trabajo, estudios, ocio, etc.) y al modo de transporte utilizado para llegar al destino. No obstante, un inconveniente que presentan las encuestas es que las personas que residen <i>fuera de la zona de estudio</i> no son interrogadas: así que no son tenidas en cuenta en las estimaciones de la población presente.  
	</p>

	</section>

<section>
<h3>Localización por hora</h3>
  	<p>
		Con el fin de localizar a la población presente en cada sector de las ciudades <b>a cada hora del día</b>, hemos transformado los datos de <b>desplazamientos </b> en datos de <b>presencias</b>por horas. 

			<ul>
				<li>La idea era obtener así 24 fotografías de la población presente en las ciudades: una fotografía de la repartición de la población para cada hora <b>"en punto" (4:00, 5:00, etc.) del día</b>. Por lo tanto, las asistencias cortas entre dos horas "en punto" no se tienen en cuenta en nuestra base de datos de presencias por horas.</li>
				<li>Sólo se han considerado los desplazamientos realizados en un <b>día hábil</b> (de lunes a viernes), lo que ha permitido razonar según un día tipo entre semana.</li>
				<li>Los <b>periodos de desplazamiento</b> han sido excluidos del análisis, con excepción de los desplazamientos realizados en un modo de transporte blando (a pie, en bicicleta, etc.). Para los desplazamientos realizados a pie o en bicicleta, se considera la primera mitad del tiempo de desplazamiento como presencia en el sector de partida y la segunda mitad como presencia en el sector de llegada. En los (raros) casos en los que el desplazamiento blando se produce de forma simétrica a lo largo de una hora en punto, la presencia en ese momento concreto se sitúa en el distrito en el que el encuestado permaneció menos tiempo (porque la presencia más larga en el otro distrito tiene una alta probabilidad de ser contabilizada en otro momento).</li>
			</ul>
	</p>

    <p>
		Sólo se incluyen a los encuestados de <b>16 años y más</b> (o de 15 años y más para las ciudades de Quebec).
	</p>

	<p>
        Cada una de las medidas agregadas por hora y por sector publicadas en Mobiliscope proviene de un ajuste ponderado para así garantizar una distribución de la población similar a la observada en el censo de la población. Se han utilizado por tanto <b>factores de expansión</b>.
		
		<ul>
			<li>En las ciudades francesas, estos factores toman en cuenta el tamaño y el tipo de vivienda de los hogares así como la edad y el sexo de los individuos (para Île-de-France, la ocupación y la categoría socioprofesional de los individuos son igualmente consideradas).</li>
			<li>Para las ciudades de Quebec, estos factores únicamente tienen en cuenta la edad y el sexo de los individuos.</li>
			<li>En América Latina, todos los factores no siguen la misma lógica. En Bogotá, el factor se ha ajustado sobre el número de hogares contabilizados por el censo. En Santiago, el factor tiene en cuenta el tamaño y el equipamiento en vehículos del hogar, así como la edad y el sexo de los individuos. En São Paulo, no disponemos de información sobre los datos tenidos en cuenta en el factor de expansión proporcionado por los productores de la encuesta. </li>
		</ul>
	</p>

	<p>
		Los datos que se visualizan en Mobiliscope son datos agregados y ponderados (que no permiten la identificación de las personas encuestadas). Para las ciudades francesas y latinoamericanas, estos datos están disponibles bajo <a href="/es/info/open/license">licencia libre</a> y pueden descargarse haciendo clic en el botón <img src="/dist/assets/download.svg" width="20px" height= "20px"/> situado arriba del mapa central.
	</p>
</section>

<section>
 <h3>Sectores</h3>
	
	<p>
		La superficie de los sectores varía según la densidad de población: son más pequeños en el centro de las ciudades y más extensos en la periferia.
		<ul>
			<li>Para las ciudades francesas, los sectores corresponden a la unidad espacial mínima para la difusión de los resultados de las encuestas origen-destino. En las ciudades centrales, los sectores corresponden a <b>grandes barrios</b> (o a distritos para París, Lyon y Marsella). En el resto, los sectores corresponden a un <b>municipio</b> o a un <b>grupo de municipios</b> (si hay más de tres en un sector, Mobiliscope sólo muestra, al deslizar el ratón, el nombre de los tres más poblados).</li>
			<li>Para las ciudades de Quebec, los sectores corresponden a los <b>sectores municipales</b>.</li>
			<li>Para América Latina, los sectores se han definido de forma diferente:</br>
				<ul style='margin-top: 0px'>
					<li>En Bogotá, los sectores corresponden a la unidad espacial mínima para la difusión de los resultados de la encuesta origen-destino (las UTAM). No obstante, los fondos cartográficos utilizados en Mobiliscope son aquellos elaborados por Florent Demoraes en el marco del proyecto <a target="_blank" href = "https://modural.hypotheses.org/le-projet">ANR MODURAL</a>, que permiten reajustar los grandes sectores con muy poca densidad a las zonas realmente habitadas y estudiadas.</li>
					<li>En Santiago, los sectores han sido definidos por el equipo de Mobiliscope reagrupando las zonas definidas por la encuesta origen-destino, según un criterio de número mínimo de residentes encuestados de 16 años y más (al menos 100) y manteniendo lo mejor posible la coherencia de las divisiones administrativas y de su composición social. </li>
					<li>En São Paulo, los sectores también han sido definidos por el equipo de Mobiliscope y corresponden a los <b>distritos</b> en el municipio de São Paulo y, para el resto, a las <b>zonas</b> definidas por la encuesta origen-destino. </li>
				</ul>
			</li>
		</ul>
	</p>
	
</section>

<section>
	<p>
		Puede encontrar más información sobre la metodología en el artículo <a href = "/pdf/2017_SegregationAroundTheClock.pdf" target="_blank">Social segregation around the clock in the Paris región (France)</a>.
	</p>
</section>

<p>
<button class="style-button mb50"><a href="/es/info/methods/indicators">Descubra los indicadores disponibles</a></button>
</p>



	<h3>Descripción de cada una de las encuestas</h3>
	<h4>Encuestados de 15 años o más para Canadá o de 16 años o más para otros países</h4>

<?php include('data_table.html'); ?>




</div>

<script type="text/javascript">
  $(document).ready(function(){
    $("thead").sticky({topSpacing:62});
  });
</script>

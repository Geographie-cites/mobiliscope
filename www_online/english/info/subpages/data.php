<div class = "corps">
<section>
<h2>Data </h2>
</section>

<section>
  <p>
    There are <b>58 city regions</b> (in France, Canada and Latin America) included in the actual version of the Mobiliscope.
  </p>

</section>

<section>
<h3>Origin-destination surveys</h3>

  <p>The data comes from large 'Origin-Destination' surveys</p>
    <ul>
      <li> <b>French</b> surveys are commissioned by local authorities, every 10 years or so, and carried out according to a standardised methodology developed by the <a href = "https://www.cerema.fr/fr/europe-international" target="_blank">Cerema</a> (except for the Ile-de-France and its Global Transport Survey ; DRIEA-STIF-OMNIL). The majority of the surveys are available for research purposes through <a href="http://www.progedo-adisp.fr/" target="_blank">Progedo</a> (National Archive of Data from Official Statistics in France). The remaining surveys come from  the 'Unified Database' built by the Cerema and including all the French Origin-Destination surveys carried out since 2009. Some surveys are also available in open data (<a href="https://www.data.gouv.fr/fr/datasets/enquete-deplacements-en-loire-atlantique-2/" target="_blank">Nantes</a>, <a href="https://data.montpellier3m.fr/dataset/enquete-menages-deplacements-archive" target="_blank">Montpellier</a> and <a href="https://opendata.lillemetropole.fr/explore/dataset/enquete-deplacement-2016/information/" target="_blank">Lille</a>).</li>
      <li><b>Canadian</b> surveys are provided by the <a href="http://www.transports.gouv.qc.ca/" target="_blank">Ministry of Transportation, Quebec</a>.</li>
      <li>For <b>Latin American</b> cities, surveys are provided by: for Bogotá, the <a href = "https://www.simur.gov.co/encuestas-de-movilidad" target="_blank"><i>Sistema Integrado de información sobre Movilidad Urbana Regional</i> (SIMUR)</a>; for Santiago, the <a href = "http://www.sectra.gob.cl/biblioteca/detalle1.asp?mfn=3253" target="_blank"><i>Ministerio de Transportes y Telecomunicaciones, Programa de Vialidad y Transporte Urbano: SECTRA</i></a>; for São Paulo, the <a href = "http://www.metro.sp.gov.br/pesquisa-od/" target="_blank"><i>Companhia do Metrô de São Paulo</i></a>.</li>
    </ul>
  </p>

  <p>
    In the 'Origin-Destination' surveys, every trip made on the day before the survey was reported by respondents. The following variables were available for each trip: precise localisation of place of departure and place of arrival, time of departure and time of arrival (with exact minutes), trip purpose, and mode of transportation used. In the Canadian surveys, time of arrival was not requested from every respondent. These missing values have been replaced either from trip duration of comparable trips or from GIS computation.
  </p>

</section>

<section>
<h3>Hourly district location</h3>

  <p>The Mobiliscope team has transformed the <b>trip dataset</b> into <b>location dataset</b>:
    
    <ul>
      <li>24 hourly time steps were defined to get 24 cross-sectional pictures of respondents' locations <b>at exact hours</b> (04.00, 05.00 etc.). Short locations in the interval between two exact hours are then not registered in district hourly dataset.</li>
      <li>Only trips occurring during the week (Monday-Friday) are considered to estimate hourly location during a <b>typical weekday</b></li>
      <li><b>Transportation periods</b> were also not considered except if respondents reported to use an 'adherent' mode of transportation (i.e. walking or cycling). In this case, half of the trip was considered as located in the district of origin and the other half as located in the district of destination. In the (rares) cases where 'adherent' trip  symmetrically straddling an exact hour, location at this very hour was chosen to be in the district where respondent stayed the shortest time (because the longest duration taking place in the other district has a high probability to be registered at another hour).</li>

    </ul>

  </p>

  

  <p>
      Hourly location (which do not allow the re-identification of respondents) are displayed in the Mobiliscope. For French cities, theses hourly location data  are <b>freely downloadable and reusable</b>, as they remain under open license (ODbL) and the <a href="/en/info/open/license">sources</a> are mentioned. Data can be downloaded by clicking the button <img src="/dist/assets/download.svg" width="20px" height= "20px"/> above the central map.
    </p>

</section>

<section>
<h3>Studied population</h3>

  <p>
    Only respondents <b>aged 16 years and over</b> (or aged 15 years and over in Canadian cities) are taken into consideration.
  </p>

  <p>
    Measures displayed in the Mobiliscope have been estimated taking into account <b>weighting coefficients</b> to grant the same distribution and the same population size than observed in population census.
    <ul>
      <li>In French cities, weighting coefficients are based on household profile (size and housing type) and on individual profile (age, sex, and for the Paris Region, occupation and socioprofessional group).</li>
      <li>In Canadian cities, weighting coefficients are only based on sex and age of participants.</li>
      <li>In Bogotá, weighting coefficients were adjusted on the number of households enumerated by the census. In Santiago, weighting coefficients are based on household profile (size and vehicle equipment) and on individual profile (age, sex). In São Paulo, we do not have all the elements.</li>
    </ul>
  </p>

</section>

<section>
<h3>Districts</h3>

  <p>In the Mobiliscope, cities have been subdivided into <b>districts</b>. Districts are smaller in inner cities and larger in the peripheral areas. In every city region, there is roughly the same number of surveyed residents by district. District was the smallest unit in which it is relevant to aggregate data when it comes to not only ensuring sufficient sample size for statistical analysis but also protecting confidentiality of personal data for the provision of open data.

    <ul>
      <li>In French cities, districts (called 'secteurs' in French 'Origin-Destination' surveys) are the primary sampling units. They correspond to <b>large neighbourhoods</b> in urban areas and to a <b>'commune'</b> (or a group of communes) in suburban/peripheral areas. When more than three communes are included in one district, only the names of the three more populated are displayed on mouseover.</li>
      <li>In Canadian cities, districts correspond to <b>municipalities.</b></li>
      <li>In Bogotá, districts correspond to the primary sampling units (named UTAM). Nevertheless, the map backgrounds used in the Mobiliscope are those reworked by Florent Demoraes as part of the <a target="_blank" href = "https://modural.hypotheses.org/le-projet">ANR MODURAL</a> project, allowing the large, very sparsely populated sectors to be readjusted to the contours of the areas actually inhabited and surveyed.</li>
      <li>In Santiago, districts were defined by the Mobiliscope team based on the spatial units defined by the Origin-Destination survey, the <i>zonas</i>, according to an objective in terms of the minimum number of residents surveyed aged 16 and over (at least 100) and by preserving as much as possible the coherence of the administrative divisions and their social composition.</li>
      <li>For São Paulo, districts were also defined by the Mobiliscope team and correspond to the <b><i>Distritos</i></b> within the <i>municipio</i> of São Paulo and, outside the <i>municipio</i>, to the <b><i>zonas</i></b> defined by the Origin-Destination survey.</li>
    </ul>
  </p>

</section>

<section>
  <p>
    More methodological details can be found in the paper <a href = "/pdf/2017_SegregationAroundTheClock.pdf" target="_blank">Social segregation around the clock in the Paris region (France)</a>.
  </p>
</section>

<p>
<button class="style-button mb50"><a href="/en/info/methods/indicators">Discover the indicators available in the Mobiliscope</a></button>
</p>


<h3>Survey description for every city region</h3>
<h4>Respondents aged 15 yrs. and over in Canada or aged 16 yrs. and over in the other cities </h4>

<?php include('data_table.html'); ?>



</div>

<script type="text/javascript">
  $(document).ready(function(){
    $("thead").sticky({topSpacing:62});
  });
</script>

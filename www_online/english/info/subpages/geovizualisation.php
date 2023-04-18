<div class = "corps">

    <section>
        <h2>Geovizualisation</h2>
    </section>

    <section>
        <h3>To explore city around the clock</h3>

        <p>
            Every 'geoviz' page display a city region whose the geographical perimeter corresponds to the origin-destination survey under consideration. The city region is named according to name of the central city. Its geographical perimeter, which varies in size from one survey to another - they may be urban agglomerations, departments or regions - is divided into districts corresponding to neighbourhoods, municipalities or groups of municipalities. 
        </p>

        <p>
            For each city region, the interface is composed in the same way:
        </p>

        <h2>
            <figure class="inline">
                <img src="/dist/assets/interface-en.png" alt="screenshot of the Paris region interface" width = "1000"/>
            </figure>
        </h2>

        <p>
            1) In the <b>indicator block</b> (on the left-side), users can choose to display the whole ambient population ('Global overview') or to look at the ambient population according to demographic profile (sex and age), social profile (socioprofessional status, educational level and occupational status), or residential areas. It is also possible to explore the types of activities carried out by the ambient population in each district in a given hour, as well as the last mode of transport used to get to destination.
        </p>

        <p>
            2) In the center of the screen, <b>maps</b> are displayed according to the indicator chosen in the indicator block. Maps are dynamics: users can zoom, move around it, display the names of the sectors on mouseover. To make it easier to find your way around, Open Street Map layers or aerial photographs can be displayed.
        </p>

        <p>
            3) In the right side of the screen, a <b>first chart</b> (top) shows hourly information for a <b>specific district</b> (selected on the map). A <b>second chart</b> (bottom) provides <b>segregation</b> values in the <b>whole city region</b> around the clock.<br>
        </p>

        <p> 
            4) With <b>timeline</b> (on the top), users can animate maps hour by hour.
        </p>

        <p>
             For every indicator, one specific colour code has been applied in the maps and charts. The colour charts were constructed using the <a target="_blank"  href = "http://www.geotests.net/couleurs/gradients_inflex_en.html">color gradients explorer</a>.
        </p>


    </section>


    <section>
        <h3>Central map</h3>

        <p>
            <b>Three map representations</b> can be displayed: choropleth maps, maps in proportional symbols and 'flow' maps. </br>

            Data used in the maps are under ODbL license and can be <b>downloaded</b> by <b>clicking the button</b> <img src="/dist/assets/download.svg" width="20px" height= "20px"/> above the title of the central map. More informations <a href="/en/info/open/license">here</a>.
        </p>

        <section>
            <h4>Choropleth maps</h4>

            <figure >
                <img src="/dist/assets/choro.png" alt="extract choropleth map" />
            </figure>

            <p>
                <b>Choropleth maps</b> display estimated <b>proportions</b> of people in a specified group at district level. In the case of the 'Whole Population' indicator, population densities (people per km²) can also be displayed.</br>
                Five classes have constantly been defined (8 classes for population densities). Same class boundaries apply over the 24h period for all maps of the same city region. Different <b>discretisation methods</b> are used to delineate the thresholds of these classes.
                <ul>
                    <li>
                        For the majority of the avalaible indicators (<i>Age groups</i>, <i>Household compoistion</i>, <i>Education level</i>, <i>Socioprofessional status</i>, <i>Occupational status</i>, <i>Professional informality</i>, <i>Socio-economic stratum</i>, <i>Housing tenure</i> and <i>Mode of transport</i>), we used a <b>quintile method</b> based on the values distribution over the 24h period in every city. Class intervals can then diverge according to the city region.
                    </li>

                    <li>
                        The <b>equal amplitude method</b> has been used for four indicators: <i>Residing in/out the district</i>; <i>Sex</i><i>French 'Poverty Areas'</i>; and <i>Household income</i>. For indicator 'Residing in/out the district', the legend is identical for all city regions and for both modalities since the distributions always range between 0% and 100% (of residents or non-residents per district). For the three others indicators, class boundaries differ from city to city due to highly variable statistical distributions.
                    </li>

                    <li>
                        Discretization in <b>natural thresholds</b> (<b>Jenks</b>) is used for the indicators <i>Residential location in urban/peripheral rings</i>, <i>Department of residence</i> (Paris region) and <i>Activity</i> from the distribution of the data in every city region. Class boundaries therefore vary according to the city region under consideration.
                    </li>

                     <li>
                        For the <i>Whole Population</i> indicator, population densities are discretised into 8 classes according to the <b>nested mean</b> method. The resulting classes are therefore region-specific, but remain the same throughout the day in a given city region.
                    </li>
                </ul>

                </br>Discretizations are computed when loading the maps with the <a href = "https://github.com/simogeo/geostats" target="_blank" >geostats.js library</a>, except for the calculation of nested averages which was coded by the Mobiliscope team. 
            </p>
        </section>

        <section>
            <h4>Proportional symbol maps</h4>

            <figure >
                <img src="/dist/assets/prop.png" alt="extract proportional symbol map" />
            </figure>

            <p>
                <b>Proportional symbol maps</b> display estimated <b>number</b> of people at district level. Circles are proportionally sized according to the number of people and are rigorously similar over the 24h period for all maps of the same city region (but can diverge according to city regions).
            </p>
        </section>

        <section>
            <h4>Proportional symbol and flow maps</h4>

            <figure >
                <img src="/dist/assets/flow.png" alt="extract flow map" />
            </figure>

            <p>
                <b>Flow maps</b> display the number of "non-resident" population located in the district. Circles are proportionally sized according to the number of people and are rigorously similar over the 24h period for all maps of the same city region (but can diverge according to city regions).To prevent unnecessary duplications, flow maps cannot be displayed for indicator <i>Residing in/out the district</i> and for the group 'at home' from <i>Activity</i> indicator. 
            </p>

            <p>
                Link thickness (displayed on mouseover) represents estimated flow of "non-resident" people according to their districts of residence. For confidentiality and statistical power reasons, we have introduced a filter for not displaying the estimated flow of people from their original districts of residence when the crude number of concerned respondents is below 6. Link thickness are similar over the 24h period for all maps of the same city region (but can diverge according to city regions). 
               
            </p>
        </section>

    </section>

    <section>
        <h3>Chart</h3>

        <section>
            <figure >
                <img src="/dist/assets/t1-en.png" alt="title image of the top chart" />
            </figure>

            <p>
                The top chart displays the estimated number/proportion of people in the district selected in the central map over the 24h period. Two modes are available: unique or stacked.
            </p>
        </section>

        <section>
            <figure >
                <img src="/dist/assets/t2-en.png" alt="title image of the buttom chart" />
            </figure>

            <p>
                In the buttom chart, two segregation indices measure spatial distribution over the 24h period in the whole city region

                <ul>
                    <li>
                        <b>Duncan dissimilarity index</b> measures the extent of segregation of a group of individuals across spatial units. Values range from 0 (minimum segregation) to 1 (maximum segregation). Values express the proportion of individuals of a given group who would have to move to another district (without being replaced) to get similar proportion of people from this group in every district. When this index is used to measure the segregation of a population divided into two groups only (e.g. men and women), the values of this index are the same for both groups.
                    </li>
                    <li>
                        <b>Moran index</b> is based on both feature locations and feature values simultaneously. It may be used to express correlation in social composition among nearby districts. Values ranges from -1 (when districts that are spatially close to each other tend to have dissimilar social composition - negative autocorrelation) to 1 (when districts that are spatially close to each other tend to have similar social composition - positive autocorrelation. A value close to zero expresses no spatial structure.
                    </li>

                </ul>
            </p>

            <p>
                In charts representing Duncan or Moran indices, minimum and maximum values are similar for all groups of a same indicator which makes them comparable. Moreover, intervals between minimum and maximum values cannot be less than 0.4 not to give too much importance to minor variations in spatial structure.
            </p>

            <p>
                Duncan and Moran indices are respectively computed from <a href="https://mran.microsoft.com/snapshot/2018-04-05/web/packages/OasisR/index.html" target="_blank">OasisR</a> and <a href="https://cran.r-project.org/web/packages/spdep/index.html" target="_blank">spdep</a> R packages.
            </p>

            <p>
                Hourly Duncan and Moran values displayed in the Mobiliscope are <b>freely reusable</b>, as they remain under open license (ODbL) and the sources are mentioned. Data can be <b>downloaded</b> by clicking the button <img src="/dist/assets/download.svg" width="20px" height="20px"> next to the bottom chart. More informations <a href="/en/info/open/license">here</a>.
            </p>
        </section>
        
    </section>

</div>

# Mobiliscope - v4.2 (April 2023)

Mobiliscope is a free and open-source web mapping platform for the interactive exploration of cities around the clock.

58 city regions are included in the actual version (v4.2) of the Mobiliscope : 49 French cities, 6 Canadian cities and 3 Latin American cities.
https://mobiliscope.cnrs.fr/

Mobiliscope is licensed under the **AGPL-3.0 License**.
Please have a look at the terms and conditions (https://www.gnu.org/licenses/agpl-3.0.fr.html) for copying, distribution and modification.


# To cite the Mobiliscope

Vallée J, Douet A, Le Roux G, Commenges H, Lecomte C, Villard E (2023). Mobiliscope, a geovisualization platform to explore cities around the clock (v4.2). Zenodo. doi: [10.5281/zenodo.7822701](https://doi.org/10.5281/zenodo.7822701).

![Mobiliscope v4](/img_v4.2_Bogota.png?raw=true)

# Version history

## v1. 
Focused on the Paris region, the first version (only in english) allows to explore the population present over 24 hours of the day according to three indicators (total population, level of education and socioprofessional status of the household), with two modes of representation (choropleth maps and proportional symbol maps). 
[May 2017] 

## v2.
In the second version (still focused on the Paris region), six new indicators have been included (sex, age, income, occupational status, residential areas and activity). 
Flows (from residential districts) have been adeed.
[September 2017] 

## v3.
In the third version, new cities have been added. 
A bilingual interface (French/English) is proposed. 
A new indicator for the last mode of transport is added. 
The age of the study population is now set at 16 years and older. 

### v3.1. 
21 French cities have been added. [March 2019]

### v3.2.
With one more French city (Nîmes). [December 2019]

### v3.3. 
6 Canadian cities have been added. Indicators are slightly less numerous (sex, age, income, occupational status, activity carried out and last mode of transport used). [April 2020]

### v4.0.
26 French cities have been added and data for Valenciennes region have been updated from the EMC² 2019 survey. 18 peripherical districts for the Bordeaux region (2009) have been added. Corrections were also made on estimates of the present populations in Canadian cities.

New indicators are added: 
* The whole present population can be splitted into two groups (resident versus non resident) according the original district of residence.
* Present population density (people per km²) is now available for the 'Whole population' indicator.  
* It is now possible to distinguish people according to whether they reside or not in the 'Poverty Areas' (ie. Quartiers Priortaires en Politique de la Ville). For France only.

In this fourth version, users can freely download the French data aggregated by hour and district - available under ODbL license. 

Lastly, this new version is undergoing a major overhaul of its interface : graphic design and addition of OpenStreetMap layers. 

[April 2021]


## v4.1. 
3 Latin American cities have been added: Bogotá (Colombia), Santiago (Chile) and São Paulo (Brazil), with the addition of specific indicators and associated layers (e.g. indicator on informal work, TransMilenio network in Bogotá).  Weighted and aggregated data by hour and by district are available to download for these new cities. A Spanish interface have been developped to offer a trilingual interface (French, English, Spanish).

In addition to the integration of these 3 new cities, several improvements have been made:
* Weighted and aggregated data by hour and by district are now also available to download for Canadian cities. 

* A new indicator regarding the household composition of respondents for the 58 Mobiliscope cities/regions has been integrated.

* In addition to the OpenStreetMap layers, satellite and/or aerial images can be displayed to help user find his way around the cities.

* Users can now share a specific geovisualisation using the "Share view" button thanks to the specification of URLs correponding to displayed geovisualisations.

* The search tool by municipality/city name has been improved: district associated with the searched commune is now automatically selected in the geovisualization.

## v4.2. - ONLINE -
Extensive reorganisation of the software architecture, consisting mainly of a refactoring of the web code in order to guarantee stability, efficiency and durability of the tool and to facilitate future developments. 
Refactoring of the R code for the construction of data read by the Mobiliscope. These data have also been reorganised and simplified.

In addition:
* For choropleth maps, modification of the discretization methods now carried out "on the fly" city by city thanks to the [geostats.js](https://github.com/simogeo/geostats) library. New class boundaries may consequently differ from those of v4.1, in particular for the indicators "Sex", "Area/Residence" and "Activity" whose class boundaries were previously similar for all cities.

* Introduction of stricter rules for the removal of double counts (i.e. respondents counted twice in the same district at a given hour) in order to correct some hourly estimates. These corrections mainly affect Canadian cities, and are very marginally in French and Latin American cities.

* Simplification of map and chart titles.

* Creation of a [Zenodo record](https://zenodo.org/record/7822016#.ZD6uS87P1PY) gathering all the data proposed in open-data in the tool.

# Future developments

New features are being considered: 
* Propose an expert mode for geovisualization
* Integrate data on mobility during the Covid pandemic and lockdown periods
* Propose territorial classifications according to districts hourly rhythms
* ....

# Contact
mobiliscope[at]parisgeo.cnrs.fr






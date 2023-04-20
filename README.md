# Mobiliscope - v4.2 (April 2023)

Mobiliscope is a free and open-source web mapping platform for the interactive exploration of cities around the clock.

58 city regions are included in the actual version (v4.2) of the Mobiliscope : 49 French cities, 6 Canadian cities and 3 Latin American cities.
https://mobiliscope.cnrs.fr/


# Folders and files available in the repository

## ODdata_processing
### Preprocess: R preprocessing programms (to be used in a first step)
 - input: Initial dataset coming from various household surveys
 - outputs: Standardized trip database and standardized people database

### Process_allCities : R programms (to be used in a second step)
- inputs: Standardized trip database and standardized people database
- output 1: Full hourly database (format .rds) for all city regions
- output 2: Hourly data per city region (geojson files for spatial data, csv files for data without geometry) to be displayed in the Mobiliscope -> folder [data]

Note: A data dictionary (dictionary.md) is also available

## www_online
Source code of Mobiliscope v4.2.

Note about data folder:
- Data folder contains only the settings data.
- Hourly data per city region (geojson files for spatial data and csv files for data without geometry) issued from R programms (see above) should be copied in folder data.
- Some of these hourly data are also available under ODbl license and can be direcly downloaded here : [Zenodo record](https://doi.org/10.5281/zenodo.7822016)

## www_old_versions
Source code of the previous versions

## Manuals
- v2. Manuel_FR
- v3.1. Manuel_FR


# License
Mobiliscope is licensed under the **AGPL-3.0 License**.
Please have a look at the terms and conditions (https://www.gnu.org/licenses/agpl-3.0.fr.html) for copying, distribution and modification.


# To cite the Mobiliscope (v4.2)
Vallée J, Douet A, Le Roux G, Commenges H, Lecomte C, Villard E (2023). Mobiliscope, a geovisualization platform to explore cities around the clock (v4.2). Zenodo. doi: [10.5281/zenodo.7822701](https://doi.org/10.5281/zenodo.7822701).

![Mobiliscope v4](/img_v4.2_Bogota.png?raw=true)


# Version history

## v1. & v2. [2017]
The first two versions concerned only the Paris Region, with an interface in English.

### v1 [May 2017]
The first version (only in English) allows to explore the ambient population over 24 hours of the day according to three indicators (total population, level of education and socioprofessional status of the household) with two modes of representation (choropleth maps and proportional symbol maps). The studied population is over 16 years of age. A central map displays the ambient population per districts in the whole city region. A first chart shows the segregation indices (Duncan and Moran) for the whole region, a second chart shows the ambient in the district selected in the map.

### v2 [September 2017]
In the second version, six new indicators are included (sex, age, income, occupational status, residential areas and activity). Flows (from residential districts) are added.


## v3. [2019-2020]
A bilingual interface (French/English) is proposed. A new indicator for the last mode of transportation is added. New city regions from France but also from Canada are added to increase geographical coverage.

### v3.1. [March 2019]
21 French cities are added. The age of the studied population is now set at 16 years and older. A new indicator for the last mode of transportation is added.

### v3.2. [December 2019]
With one more French city region (Nîmes).

### v3.3. [April 2020]
6 Canadian cities are included. In Canadian cities, indicators are slightly less numerous (sex, age, income, occupational status, activity carried out and last mode of transport used) and the age threshold is slightly lower (set at 15 years and older).


## v4. [2021-2023]
The fourth version of the tool undergoes a major overhaul of its graphic and cartographic interface. New cities and functionalities are added.
District hourly data can be downloaded from the Mobiliscope platform. These open-data are under ODbL license (cf. ici).

### v4.0 [April 2021]
- Addition of 26 new French cities/regions such as Rouen, Metz, Besançon, Brest, Le Havre, Poitiers and Tours but also the territories of Martinique and La Réunion.
- Open-data. Hourly data of French cities can be downloaded from the Mobiliscope platform.
- Integration of 2 new indicators: (1) residents/non-residents of the area; (2) living (yes/no) in a 'Poverty Areas' (i.e.i> Quartiers Priortaires en Politique de la Ville - QPV). For France only.
- Addition of a new mode of representation (ambient population density - people per km²) is now available for the 'Whole population' indicator.
- OpenStreetMap tiles can be displayed to explore cities more easily.
- Change of threshold values. The threshold previously applied to the maps and charts of the non-resident population (flow mode) has been changed. The threshold of 12 respondents below which no information was displayed (number of non-residents and flows between districts of presence and residence) has been removed. It has been replaced by a threshold of 6 (crude) respondents concerning only flows between districts of presence and residence.
- Additional changes: data for Valenciennes region have been updated from the EMC² 2019 survey ; 18 peripheral districts for the Bordeaux region (2009) have been added ; corrections were made on estimates of the ambient population in Canadian cities; segregation indices for the indicators 'activities' and 'mode of transport' have been deleted.

### v4.1 [April 2022]
- Addition of 3 new Latin American cities/regions: Bogotá (Colombia), Santiago (Chile) and São Paulo (Brazil), with the addition of specific indicators and associated layers (e.g. indicator on informal work, TransMilenio network in Bogotá)
- Open-data. Hourly data of Canadian and Latin America cities (as well as of French cities) can be downloaded from the Mobiliscope platform.
- Development of the Spanish interface to offer a trilingual interface (French, English, Spanish).
- Integration of an indicator regarding the household composition of respondents for all cities/regions.
- Display of satellite and/or aerial images to help the user find his way around the cities.
- Readjustment of the computation of ambient population across hours. This readjustment induces a shift of one hour in hourly data compared to the data displayed in the previous versions of the tool: ambient population located in a district at a time h was previously counted at h-1.
- Specification of URLs corresponding to displayed geovisualisations. For example, the proportion of women in Bogotá at 8am in the La Candelaria district can now be displayed directly with this URL. Possibility to share specific geovisualisation using the 'Share view' button .
- Improvement of the search tool by municipality/city name : district associated with the searched municipality/city is now automatically selected in the geovisualization (selection of the district in the map and the top chart).
- Modification of the last main mode of transport for Canadian cities: in case of multimodal trips, the last main mode of transport is now defined following this priority order: 1) Collective transportation; 2) Individual motor vehicle and 3) Soft mobility. This priority order is now similar to the one adopted for French and Latin American cities

### v4.2 [April 2023]
- Extensive reorganisation of the software architecture (web code refactoring) in order to guarantee stability, efficiency and durability of the platform and to facilitate future developments.
- Refactoring of the R code used for data-processing. Data have also been reorganised and simplified.
- For the choropleth maps, modification of the discretization methods now carried out "on the fly" city by city thanks to the geostats.js library. New class boundaries may consequently differ from those of v4.1, in particular for the indicators "Sex", "Area/Residence" and "Activity" whose class boundaries were previously similar for all cities.
- Introduction of stricter rules for the removal of double counts (i.e. respondents counted twice in the same district at a given hour) in order to correct some hourly estimates. These corrections mainly affect Canadian cities, and are very marginally in French and Latin American cities.
- Simplification of map and chart titles.
- Creation of a [Zenodo record](https://doi.org/10.5281/zenodo.7822016) gathering all the data proposed in open-data in.


# Contact
mobiliscope[at]parisgeo.cnrs.fr






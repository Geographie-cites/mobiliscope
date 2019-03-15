// Indicators

// Whole population
function popup_pop0(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Present population</h3><p>We used data from <strong>respondents</strong> aged 16 and over (sufficiently autonomous in their daily mobility).</p><p>Please note that we have only focused on <strong>weekday trips </strong>(Monday-Friday).</p>" );	
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// DEMO PROFILE - Age groups
function popup_age(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Age groups</h3><p>Age has been divided into four groups: 16-24 years; 25-34 years; 35-64 years; 65 and more.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// DEMO PROFILE - sex
function popup_sex(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Sex</h3><p>Female and Male.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// SOCIAL PROFILE - individual educational level
function popup_cleduc(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Individual educational level</h3><p>We merged respondents’ achieved level of education in four groups :<ul><li>low (middle school or less);</li><li>middle-low (high school without Baccalauréat);</li><li>middle-high (Up to two years after Baccalauréat);</li><li>and high (three years or more after Baccalauréat).</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household educational level
function popup_educmen(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Household educational level</h3><p>From the respondents’ achieved level of education, we computed educational status corresponding to the lowest level of education of the adults in the household. </p><p>We distinguished four groups:<ul><li>low (middle school or less);</li><li>middle-low (high school without Baccalauréat);</li><li>middle-high (Up to two years after Baccalauréat);</li><li>and high (three years or more after Baccalauréat).</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// SOCIAL PROFILE - Household income 
// Ce pop-up est seulement pour Paris
function popup_rev(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Household income</h3><p>Total monthly household income has been divided by the number of adults and children in the household to get household income per consumption units (CU). </p><p>We distinguished four groups:<ul><li>low (< 1084€/CU);</li><li>middle-low (1084-1806€/CU);</li><li>middle-high (1806-2890€/CU);</li><li>high (>2890€/CU).</li></ul></p><p>Income intervals have been defined according to median household income in the Paris region (equal to 1806€/CU in 2010).The first threshold (1084€/CU) or 'poverty threshold’ corresponds to 60 % of median household income; the second one (1806€/CU) corresponds to the median household income; the third one (2890€/CU) correspond to 160 % of median household income. </p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// SOCIAL PROFILE - individual socioprofessional status 
function popup_cs(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Individual socioprofessional status</h3><p>We merged respondents’ socioprofessional data in five groups:<ul><li>inactive (unemployed long term, housework);</li><li>low (workers);</li><li>middle-low (employees);</li><li>middle-high (intermediary professionals, craftsmen, merchants, employers of more than 10 employees and farm operators);</li><li>and high (managers and intellectual professionals).</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// SOCIAL PROFILE - household socioprofessional status 
function popup_cspmen(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Household socioprofessional status</h3><p>From respondents’ socioprofessional data, we computed socioprofessional status corresponding to the lowest socioprofessional category of the adults in the household.</p><p>We distinguished five groups:<ul><li>inactive (unemployed long term, housework);</li><li>low (workers);</li><li>middle-low (employees);</li><li>middle-high (intermediary professionals, craftsmen, merchants, employers of more than 10 employees and farm operators);</li><li>and high (managers and intellectual professionals).</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// SOCIAL PROFILE - Occupational status
function popup_occ(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Occupational status</h3><p>Five groups: Inactive; Retired; Unemployed; Student; Active. </p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

// RESIDENTIAL AREA - residential area 
function popup_resarea(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Urban typology</h3><p>Districts of residence have been divided into 3 groups :<ul><li>'Inner city' refers to central (administrative) city in charge of the origin-destination survey.</ul></li><ul><li>'Urban area' refers to districts which are totally (or mainly) included in large, middle or small urban clusters as defined in the 2010 'Zoning into Urban Areas - ZAU' (French National Institute of Statistics and Economic Studies).</ul></li><ul><li>Remaining districts are labbeled as belonging to 'suburban/peripheral area'.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// RESIDENTIAL AREA - departement of residence
// ce pop-up est seulement pour Paris
function popup_dep(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Departement of residence</h3><p>In Paris Region, five groups:<ul><li>Greater Paris (Essonne + Seine-et-Marne + Yvelines + Val-d'Oise);</li><li>Hauts-de-Seine;</li><li>Val-de-Marne;</li><li>Seine-Saint-Denis;</li><li>Paris.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// ACTIVITY/TRAVEL BEHAVIOUR - Activity type
function popup_act(){

	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Current activity</h3><p>We used trip purposes to define the various activities that the respondent engages in over the 24 hours of a day.We have focused on five groups of activity: At home; At work; Studying; Shopping; Leisure (recreational, cultural or sporting activities, family and personal visits).</p><p>We have excluded 'unspecified activity' and 'activity related to escorting or chauffeuring'. The sample related to these activities was too small to constitute one group, and too specfic to be agregated with other activities groups.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;

}

// ACTIVITY/TRAVEL BEHAVIOUR - travel mode
function popup_mode(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Last mode of transport</h3><p>We considered the last mode of transport which has been used to reach destination. We distinguished three main travel modes: <ul><li>soft mobility (walking, cycling ...);</li><li> private motor vehicle (two-wheeled motor vehicle, company vehicle, taxi etc.);</li><li> public transportation.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}


// Other popups

function popup_mapTitle1(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Estimated number/proportion of people</h3><p>Every measure published in the Mobiliscope has been estimated taking into account weighting coefficients.<ul><li>In the Paris Region (EGT, 2010), weighting coefficients have been computed at household and individual levels to grant every district with the same distribution in household profile (size and housing type) and population profile (age, sex, occupation, and socioprofessional group) as the distribution observed in the 2008 French census.</li><li>In the other cities (EMD), weighting coefficients have been computed at household and individual levels to grant every district with the same distribution in household sizes and age groups as the distribution observed in French census.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_mapTitle2(){
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Districts</h3><p>Cities have been subdivided into districts (called 'secteurs' in french 'Origin-Destination' surveys).</p><p>Districts are the primary sampling units in these surveys.<p>Same number of inhabitants have been surveyed in every district.</p><p>  in every district. Districts are smaller in inner cities and larger in the peripheral areas.</p> <ul><li>Within large cities, districts correspond to large neighborhoods(or arrondissements in Paris, Lyon and Marseille).</li><li>Outside large cities, they correspond to groups of municipalities (and the Mobiliscope only displays the name of the three more populated municipalities).</li></p>");
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_segreg(){
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Measures of spatial distribution in the whole metropolitan area</h3><p>They have been computed hourly (from 4:00 am to 3:00 am) taking into account weighting coefficients.</p><p>Two unigroup indices have been considered:<ul><li><strong>Duncan’s dissimilarity index</strong> gives information about the dispersal of every group across spatial units. It is commonly used as a measure of pairwise segregation (e.g. Black versus White) but can also be used when measuring segregation through an indicator divided in more than two groups. In this case, Duncan’s dissimilarity index expresses the proportion of individuals of a given group who would have to change spatial unit (without being replaced) to get an even distribution of the group relative to the total population.</li><li><strong>Moran’s index</strong> is a measure of spatial autocorrelation. Its value varies from -1 (the group perfectly repulses itself) to 1 (the group is perfectly clustered in space) ; 0 indicates an absence of spatial structure.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup_source(){
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>'Origin-destination' surveys</h3><p>In the Mobiliscope, data came from large 'Origin-Destination' surveys (Enquêtes Ménages Déplacements - EMD ; CEREMA), available from ADISP (National Archive of Data from Official Statistics in France).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}
 // Indicators
$(document).mouseup(function (e)
{

var container = $("#popup");

if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
{
    container.css("display", "none") ;
		$(".popup-container").css("display", "none") ;
}
});

// Whole population
function popup_pop0(e){
   e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Present population</h3><p>The <span style='color:" + gammePop[0] + "'><strong>whole population</strong></span> concern all people <b>aged 16 and over</b>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// Resident population
function popup_respop(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Residential population</h3><p>The whole present population has been divided into two groups (<span style='color:" + gammeRespop[1] + "'><strong>resident</strong></span> versus <span style='color:" + gammeRespop[0] + "'><strong>non resident</strong></span>) according the their original district of residence.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// DEMO PROFILE - Age groups
function popup_age(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Age groups</h3><p>Age has been divided into four groups: <span style='color:" + gammeAge[0] + "'><strong>16-24 years</strong></span>; <span style='color:" + gammeAge[1] + "'><strong>25-34 years</strong></span>; <span style='color:" + gammeAge[2] + "'><strong>35-64 years</strong></span>; <span style='color:" + gammeAge[3] + "'><strong>65 and more</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// DEMO PROFILE - sex
function popup_sex(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Sex</h3><p><span style='color:" + gammeSex[1] + "'><strong>Female</strong></span> and <span style='color:" + gammeSex[0] + "'><strong>Male</strong></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - individual educational level
function popup_cleduc(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Individual educational level</h3><p>We merged respondents’ <strong>achieved level of education</strong> in four groups :<ul><li><span style='color:" + gammeSP[0] + "'><strong>low</strong></span> (middle school or less);</li><li><span style='color:" + gammeSP[1] + "'><strong>middle-low</strong></span> (high school without Baccalauréat);</li><li><span style='color:" + gammeSP[2] + "'><strong>middle-high</strong></span> (Up to two years after Baccalauréat);</li><li>and <span style='color:" + gammeSP[3] + "'><strong>high</strong></span> (three years or more after Baccalauréat).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household educational level
function popup_educmen(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Household educational level</h3><p>From the respondents’ achieved level of education, we computed educational status corresponding to the <strong>lowest level of education of the adults in the household</strong>.</br>We distinguished four groups:<ul><li><span style='color:" + gammeSP[0] + "'><strong>low</strong></span> (middle school or less);</li><li><span style='color:" + gammeSP[1] + "'><strong>middle-low</strong></span> (high school without Baccalauréat);</li><li><span style='color:" + gammeSP[2] + "'><strong>middle-high</strong></span> (Up to two years after Baccalauréat);</li><li>and <span style='color:" + gammeSP[3] + "'><strong>high</strong></span> (three years or more after Baccalauréat).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - Household income
// Ce pop-up est seulement pour Paris et les villes canadiennes
function popup_rev_fr(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Household income</h3><p>Total monthly <strong>household income</strong> has been divided by the number of adults and children in the household to get household income per consumption units (CU).</p><p>We distinguished four groups:<ul><li><span style='color:" + gammeRev_fr[0] + "'><strong>low</strong></span> (< 1084€/CU);</li><li><span style='color:" + gammeRev_fr[1] + "'><strong>middle-low</strong></span> (1084-1806€/CU);</li><li><span style='color:" + gammeRev_fr[2] + "'><strong>middle-high</strong></span> (1806-2890€/CU);</li><li><span style='color:" + gammeRev_fr[3] + "'><strong>high</strong></span> (>2890€/CU).</li></ul><p>Income intervals have been defined according to median household income in the Paris region (equal to 1806€/CU in 2010).The first threshold (1084€/CU) or 'poverty threshold’ corresponds to 60 % of median household income; the second one (1806€/CU) corresponds to the median household income; the third one (2890€/CU) correspond to 160 % of median household income.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

function popup_rev_can(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Household income</h3><p>Total annual <strong>household income</strong> has been divided by the number of adults and children in the household. We distinguished five groups:<ul><li><span style='color:" + gammeRev_can[1] + "'><strong>Low</strong></span> (< 19669$/year);</li><li><span style='color:" + gammeRev_can[2] + "'><strong>Middle-low</strong></span> (19669-39337$/year);</li><li><span style='color:" + gammeRev_can[3] + "'><strong>Middle-high</strong></span> (39337-68840$/year);</li><li><span style='color:" + gammeRev_can[4] + "'><strong>High</strong></span> (>68840$/year);</li><li><span style='color:" + gammeRev_can[0] + "'><strong>Missing</strong></span> (not given by the participants);</li></ul><p>Income intervals have been defined according to median household income for a one-person household in Quebec (equal to 39337$/year in 2015). The first threshold (19669$/year) or 'low income measure’ corresponds to 50 % of median household income; the second one (39337$/year) corresponds to the median household income; the third one (68840$/year) correspond to 175 % of median household income.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - individual socioprofessional status
function popup_cs(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Individual socioprofessional status</h3><p>We merged respondents’ <strong>socioprofessional status</strong> in five groups:<ul><li><span style='color:" + gammeCs[0] + "'><strong>inactive</strong></span> (unemployed long term, housework);</li><li><span style='color:" + gammeCs[1] + "'><strong>low</strong></span> (workers);</li><li><span style='color:" + gammeCs[2] + "'><strong>middle-low</strong></span> (employees);</li><li><span style='color:" + gammeCs[3] + "'><strong>middle-high</strong></span> (intermediary professionals, craftsmen, merchants, employers of more than 10 employees and farm operators);</li><li>and <span style='color:" + gammeCs[4] + "'><strong>high</strong></span> (managers and intellectual professionals).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household socioprofessional status
function popup_cspmen(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Household socioprofessional status</h3><p>From respondents’ socioprofessional data, we computed socioprofessional status corresponding to the <strong>lowest socioprofessional category of the adults in the household</strong>.</br>We distinguished five groups:<ul><li><span style='color:" + gammeCs[0] + "'><strong>inactive</strong></span> (unemployed long term, housework);</li><li><span style='color:" + gammeCs[1] + "'><strong>low</strong></span> (workers);</li><li><span style='color:" + gammeCs[2] + "'><strong>middle-low</strong></span> (employees);</li><li><span style='color:" + gammeCs[3] + "'><strong>middle-high</strong></span> (intermediary professionals, craftsmen, merchants, employers of more than 10 employees and farm operators);</li><li>and <span style='color:" + gammeCs[4] + "'><strong>high</strong></span> (managers and intellectual professionals).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - Occupational status
function popup_occ(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Occupational status</h3><p>Five groups: <span style='color:" + gammeOcc[4] + "'><strong>Inactive</strong></span>; <span style='color:" + gammeOcc[3] + "'><strong>Retired</strong></span>; <span style='color:" + gammeOcc[2] + "'><strong>Unemployed</strong></span>; <span style='color:" + gammeOcc[1] + "'><strong>Student</strong></span>; <span style='color:" + gammeOcc[0] + "'><strong>Active</strong></span>." );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// RESIDENTIAL PROFILE - residential area (ZAU)
function popup_resarea(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Urban/peripheral rings</h3><p>Districts of residence have been divided into 3 groups :<ul><li>The first group refers to <span style='color:" + gammeRes[2] + "'><strong>central (administrative) city</strong></span> in charge of the origin-destination survey.</li><li>'<span style='color:" + gammeRes[1] + "'><strong>Urban area</strong></span>' refers to districts which are totally (or mainly) included in large, middle or small urban clusters as defined in the 2010 '<strong>Zoning into Urban Areas - ZAU</strong>' (French National Institute of Statistics and Economic Studies). There are not districts belonging to this category in Carcassonne and Besançon regions.</li><li>Remaining districts are labelled as belonging to '<span style='color:" + gammeRes[0] + "'><strong>suburban/peripheral area</strong></span>'.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// RESIDENTIAL AREA - residential area (QPV)
function popup_qpv(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>'Poverty Areas'</h3><p>Respondents have been divided into two groups according to the overlap between their local area of residence (called 'zone fine' in the French survey) and the boundaries of the 'Poverty Areas' (Quartiers prioritaires de la Politique de la Ville - QPV): living <span style='color:" + gammeQpv[1] + "'><strong>in 'Poverty Areas'</strong></span> or <span style='color:" + gammeQpv[0] + "'><strong>outside 'Poverty Areas'</strong></span>.</br></br>Since French Origin-Destination surveys do not provide information on the exact residential location, respondents have been defined as living in 'Poverty Areas' if their local areas of residence include a majority (> 56%) of population in 'Poverty Areas' according to 2013 population census.</br> There are 'Poverty Areas' in every French city region included in the Mobiliscope except for the Annecy city region.</p>");
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// RESIDENTIAL AREA - departement of residence
// ce pop-up est seulement pour Paris
function popup_dep(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Departement of residence</h3><p>In Paris Region, five groups:<ul><li><span style='color:" + gammeDep[4] + "'><strong>Greater Paris</strong></span> (Essonne, Seine-et-Marne, Yvelines and Val-d'Oise);</li><li><span style='color:" + gammeDep[3] + "'><strong>Hauts-de-Seine</strong></span>;</li><li><span style='color:" + gammeDep[2] + "'><strong>Val-de-Marne</strong></span>;</li><li><span style='color:" + gammeDep[1] + "'><strong>Seine-Saint-Denis</strong></span>;</li><li><span style='color:" + gammeDep[0] + "'><strong>Paris</strong></span>.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// ACTIVITY/TRAVEL BEHAVIOUR - Activity type
function popup_act(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Current activity</h3><p>We used trip purposes to define the various activities that the respondent engages in over the 24 hours of a day. We have focused on five groups of activity:</p><ul><li><span style='color:" + gammeAct[0] + "'><strong>At home</strong></span></li><li><span style='color:" + gammeAct[1] + "'><strong>At work</strong></span></li><li><span style='color:" + gammeAct[2] + "'><strong>Studying</strong></span></li><li><span style='color:" + gammeAct[3] + "'><strong>Shopping</strong></span></li><li><span style='color:" + gammeAct[4] + "'><strong>Leisure</strong></span> (recreational, cultural or sporting activities, family and personal visits).</li></ul><p>We have excluded 'unspecified activity' and 'activity related to escorting or chauffeuring'. The sample related to these activities was too small to constitute one group, and too specific to be agregated with other activities groups.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// ACTIVITY/TRAVEL BEHAVIOUR - travel mode
function popup_mode(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Last mode of transport</h3><p>We distinguished three main travel modes: <ul><li><span style='color:" + gammeMode[2] + "'><strong>soft mobility</strong></span> (walking, cycling ...);</li><li><span style='color:" + gammeMode[1] + "'><strong>private motor vehicle</strong></span> (two-wheeled motor vehicle, company vehicle, taxi etc.);</li><li><span style='color:" + gammeMode[0] + "'><strong>public transportation</strong></span>.</li></ul><p>We considered the last mode of transport which has been used to reach destination. Trips may have occurred more or less recently. Take the example of an individual who has used public transport at 7 pm to come back home where he stayed all night. At midnight in his residential district, this individual is part of the present population that has used public transport as last mode of transport.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}


// Other popups

function popup_mapTitle1(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Estimated number/proportion of present people per hour et per district</h3><p>Values concern a typical <b>weekday</b> (Monday-Friday) for the population <b>aged 16 and more</b>.</br></br><b>Districts</b> are smaller in inner cities and larger in the peripheral areas. In every city region, there is roughly the same number of surveyed residents by district. In <b>France</b>, districts (called 'secteurs') are the primary sampling units. They correspond to large neighbourhoods in urban areas and to a 'commune' (or a group of communes) in suburban/peripheral areas. When more than three communes are included in one district, only the names of the three more populated are displayed on mouseover. In <b>Canada</b>, districts correspond to municipalities.</br></br>Number and proportion of present population by district and hour have been estimated from survey data. They are therefore subject to a <b>statistical margin of error</b>. Every measure published in the Mobiliscope has been estimated taking into account weighting coefficients.<ul><li>In the <b>Paris Region</b> (EGT, 2010): Weighting coefficients have been computed at household and individual levels to grant every district with the same distribution in household profile (size and housing type) and population profile (age, sex, occupation, and socioprofessional group) as the distribution observed in the 2008 French census.</li><li>In the other <b>French cities</b> (Cerema): Weighting coefficients have been computed at household and individual levels to grant every district with the same distribution in household sizes and age groups as the distribution observed in French census.</li><li>In the <b>Canadian cities</b>: Weighting coefficients have been computed  at individual level to grant every district with the same distribution in age and sex groups as the distribution observed in the 2011 Canadian census.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_duncan(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Measures of spatial distribution in the whole metropolitan area</h3><p>Measures have been computed hourly (from 4:00 am to 3:00 am) taking into account weighting coefficients.</br><strong>Duncan’s dissimilarity index</strong> gives information about the dispersal of every group across spatial units. It is commonly used as a measure of pairwise segregation (e.g. Black versus White) but can also be used when measuring segregation through an indicator divided in more than two groups. In this case, Duncan’s dissimilarity index expresses the proportion of individuals of a given group who would have to change spatial unit (without being replaced) to get an even distribution of the group relative to the total population.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}
function popup_moran(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Measures of spatial distribution in the whole metropolitan area</h3><p>Measures have been computed hourly (from 4:00 am to 3:00 am) taking into account weighting coefficients.</br><strong>Moran’s index</strong> measures the intensity of the relationship between the proximity of places and their degree of resemblance (spatial autocorrelation). It ranges from -1 (close places tend to be more different than distant places - negative autocorrelation) to 1 (close places tend to be more similar than distant places - positive autocorrelation). Autocorrelation is zero when there is no relationship between proximity and resemblance.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}
function popup_source_fr(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>'Origin-destination' surveys</h3><p>In French cities, data came from large 'Origin-Destination' surveys (Enquêtes Ménages Déplacements - EMD ; Cerema), mainly available from ADISP (National Archive of Data from Official Statistics in France).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_can(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>'Origin-destination' surveys</h3><p>In Canadian cities, data came from large 'Origin-Destination' surveys (Enquêtes Origine/Destination - EOD), available from the Ministry of Transportation, Quebec.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

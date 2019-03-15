// Indicators
function popup11(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Present population</h3><p>We used data from <strong>25,714 EGT respondents</strong> aged 16 or over (sufficiently autonomous in their daily mobility).</p><p>Please note that we have only focused on <strong>weekday trips </strong>(Monday-Friday).</p>" );	
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup12(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Departement of residence</h3><p>Five groups:<ul><li>Greater Paris (Essonne + Seine-et-Marne + Yvelines + Val-d'Oise);</li><li>Hauts-de-Seine;</li><li>Val-de-Marne;</li><li>Seine-Saint-Denis;</li><li>Paris.</li></ul></p><p>Sample size: 25,714 respondents (no missing values).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup13(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Activity</h3><p>We used trip purposes (initially in 9 groups) to define the various activities that the respondent engages in over the 24 hours of a day. In contrast with indicators related to individual/household characteristics, activity may change for one respondent throughout the day.</p><p> We have focused on five groups of activity: At home; At work; Studying; Shopping; Leisure (recreational, cultural or sporting activities, family and personal visits).</p><p>We have excluded 'unspecified activity' and 'activity related to escorting or chauffeuring'. The sample of locations related to these activities was too small and it does not make sense to gather them with some other activities.</p> <p>The sample size ranges from 22,425 respondents at 6 pm to 25,707 respondents at 3 pm when exploring activity pattern around the clock.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup21(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Age groups</h3><p>Age has been divided into four groups: 17-24 years; 25-34 years; 35-64 years; 65 and more.</p><p> Sample size = 25,714 respondents (no missing values)</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup22(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Sex</h3><p>Female and Male.</p><p>Sample size = 25,714 respondents (no missing values)</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup31(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Socioprofessional status</h3><p>From respondents’ socioprofessional data (initially in 24 groups), we computed socioprofessional status corresponding to the lowest socioprofessional category of the adults in the household.</p><p>We distinguished five groups:<ul><li>unemployed (unemployed long term, housework);</li><li>low (workers and domestic services);</li><li>middle-low (employees, craftsmen);</li><li>middle-high (intermediary professionals, merchants, farm operators);</li><li>and high (managers, intellectual professionals, employers of more than 10 employees).</li></ul></p><p>Sample size = 25,411 respondents (after exclusion of missing values).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup32(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Educational level</h3><p>From the respondents’ achieved level of education (initially in ten groups), we computed educational status corresponding to the lowest level of education of the adults in the household. </p><p>We distinguished four groups:<ul><li>low (middle school or less);</li><li>middle-low (high school without Baccalauréat);</li><li>middle-high (Up to two years after Baccalauréat);</li><li>and high (three years or more after Baccalauréat).</li></ul></p><p>Sample size = 25,654 respondents (after exclusion of missing values).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup33(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Occupational status</h3><p>Five groups: Inactive; Retired; Unemployed; Student; Active. </p><p>Sample size = 25,676 respondents (after exclusion of missing values).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup34(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Household income</h3><p>Total monthly household income has been divided by the number of adults and children in the household to get household income per consumption units (CU). </p><p>We distinguished four groups:<ul><li>low (< 1084€/CU);</li><li>middle-low (1084-1806€/CU);</li><li>middle-high (1806-2890€/CU);</li><li>high (>2890€/CU).</li></ul></p><p>Income intervals have been defined according to median household income in the Paris region (equal to 1806€/CU in 2010).The first threshold (1084€/CU) or 'poverty threshold’ corresponds to 60 % of median household income; the second one (1806€/CU) corresponds to the median household income; the third one (2890€/CU) correspond to 160 % of median household income. </p><p>Sample size = 23,899 respondents (after exclusion of missing values).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}


// Other popups

function popup3(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Estimated number/proportion of people</h3><p>Number and proportion of people are weighted.</p><p>EGT weighting coefficients have been computed at household and individual levels to afford every district the same distribution in household profile (size and housing type) and population profile (age, sex, occupation, and socioprofessional group) as the distribution observed in the 2008 French census.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup4(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>EGT districts</h3>	<p>The Paris region has been subdivided into 109 districts (called 'secteurs' in EGT survey). Districts are the primary sampling units in EGT survey. They correspond to groups of municipalities or arrondissements in Paris and consist of approximately 100,000 inhabitants.</p><p>The Mobiliscope only displays the name of the three more populated municipalities or arrondissements in every district (<span style = 'font-style : italic ;'>see complete <a style = 'color : black ; text-decoration : underline ;' href = 'pdf/EGTDistricts.pdf' target='_blank'>list of municipalities in EGT districts)</a></span></p><p>Smaller in inner Paris and larger in the peripheral areas, district sizes range from 3 to 1,326 km2 (with a median area of 14 km²). At 3 am the number of respondents per district varies from 124 to 410, with a median of 231. At 3 pm the number of respondents per district varied from 69 to 741, with a median of 191.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
}

function popup5(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Measures of spatial distribution in the whole metropolitan area</h3><p>They have been computed hourly (from 4:00 am to 3:00 am) taking into account weighting coefficients.</p><p>Two unigroup indices have been considered:<ul><li><strong>Duncan’s dissimilarity index</strong> gives information about the dispersal of every group across spatial units. It is commonly used as a measure of pairwise segregation (e.g. Black versus White) but can also be used when measuring segregation through an indicator divided in more than two groups. In this case, Duncan’s dissimilarity index expresses the proportion of individuals of a given group who would have to change spatial unit (without being replaced) to get an even distribution of the group relative to the total population.</li><li><strong>Moran’s index</strong> is a measure of spatial autocorrelation. Its value varies from -1 (the group perfectly repulses itself) to 1 (the group is perfectly clustered in space). A zero value indicates an absence of spatial structure.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup6(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>EGT 2010</h3><p>In the actual version of the Mobiliscope, data came from the Enquête Globale Transport - EGT (STIF, OMNIL, DRIEA), a large origin-destination survey carried out in 2010 in the Paris region and available through «Réseau Quetelet».</p><p>Only respondents <strong>aged 16 years or over </strong> (sufficiently autonomous in their daily mobility) have been selected. We also restricted our dataset to <strong>weekday trips </strong>(Monday-Friday).</p><p>Here, the final sample contains <strong>25,714 respondents</strong>  aged 16 or over with a total of 102,00 weekdays trips and 127,000 locations.</p><p>Every measure from EGT database has been estimated taking into account EGT <strong>weighting coefficients</strong>.</p>" );	
	
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}
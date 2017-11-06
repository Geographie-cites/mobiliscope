function popup1(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Socioprofessional status</h3><p>From respondents’ socioprofessional EGT data (initially in 24 groups, which were combined and ranked), we computed a social indicator corresponding to the lowest socioprofessional category of the adults in the household. Called “socioprofessional status”, this variable was composed of five groups: unemployed (unemployed long term, housework); low (workers and domestic services); middle-low (employees, craftsmen); middle-high (intermediary professionals, merchants, farm operators); and high (managers, intellectual professionals, employers of more than ten employees).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup2(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Educational status</h3><p>From EGT data about respondents’ achieved level of education (initially in ten groups), we computed a first social indicator corresponding to the lowest level of education of the adults in the household. Called ‘educational status’, this variable was composed of four groups: low (middle school or less), middle-low (high school without Baccalauréat), middle-high (Baccalauréat to two years after Baccalauréat), and high (three years or more after Baccalauréat).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup3(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Number (n) of people / Proportion (%) of people</h3><p>Number and proportion of people are weighted. EGT weighting coefficients have been computed at household and individual levels to afford every district the same distribution in household profile (size and housing type) and population profile (age, sex, occupation, and socioprofessional group) as the distribution observed in the 2008 French census.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup4(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>EGT districts</h3><p>The Paris region has been subdivided into 109 districts (“secteurs”) in EGT survey. They correspond to groups of municipalities or arrondissements in Paris and consist of approximately 100,000 inhabitants. Smaller in inner Paris and larger in the peripheral areas, their sizes vary from 3 to 1,326 km2 (with a median area of 14 km²). Districts are the primary sampling units in EGT survey. In the present analysis (restricted to EGT respondents aged 16 or over and interviewed about their weekday trips), the number of respondents per districts varied from 124 to 406, with a median of 229 (<span style = 'font-style : italic ;'>see complete <a class = 'highlight' style = 'color : black ; text-decoration : none ;' href = 'pdf/EGTDistricts.pdf' target='_blank'>list of municipalities in EGT districts)</a></span>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup5(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>Segregation index</h3><p>From the EGT dataset location, segregation indices were computed hourly (from 4:00 am to 3:00 am) regardless of the day of the week. If individuals were in transportation (in a not 'adherent' mode), they were removed from the calculation. To assess the extent of social segregation for each subgroup, we crossed two unigroup indexes: the first (Duncan’s dissimilarity index) gave information about the dispersal of every subgroup across spatial units and the second (Moran’s index) is a measure of spatial autocorrelation of subgroups within the city.</br></br><span style = 'font-weight : bold ;'>Duncan’s dissimilarity index</span> is commonly used as a measure of pairwise segregation (e.g. Black versus White) but it can also be used when measuring segregation of a social indicator divided in more than two groups. In this case, Duncan’s dissimilarity index expresses the proportion of individuals of a given social group who would have to change their spatial unit (without replacement) to get an even distribution of the group relative to the total population.</br></br><span style = 'font-weight : bold ;'>Moran’s index</span> is a measure of spatial autocorrelation. Its values vary from -1 (the group perfectly repulses itself) to 1 (the group is perfectly clustered in space), and a zero value indicates an absence of spatial structure. </p>");
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}

function popup6(){
	
	$("#popup").css("display", "block") ;
	$("#text").html( "" );
	$("#text").html("<h3>EGT 2010</h3><p>The Enquête Globale Transport (EGT) is a large household travel survey carried out every ten years in the Paris region (Ile-de-France) since 1976. Here we used the last edition which took place during two periods: from October 2009 to May 2010 and from October 2010 to May 2011 (i.e. over 16 months of surveys). The EGT was limited to inhabitants living in the Paris region. We only selected respondents aged 16 years or over, considering that younger people were not sufficiently autonomous in their daily mobility. To reduce spatiotemporal heterogeneity between trips occurring on weekends and on weekdays, we also restricted our dataset to weekday trips (Monday-Friday). The sample of daily trips at weekends was too small in the EGT survey to explore what happens during the weekend. Here, the final sample contains 25,499 respondents aged 16 or over with a total of 101,814 weekdays trips and 127,245 locations.</p>");
	$("#close").click(function() {$("#popup").css("display", "none") ; }) ;
	
}
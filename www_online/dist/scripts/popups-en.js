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
	$("#text").html("<h3>Resident/non resident</h3><p>The whole present population has been divided into two groups (<span style='color:" + gammeRespop[1] + "'><strong>resident</strong></span> versus <span style='color:" + gammeRespop[0] + "'><strong>non resident</strong></span>) according the their district of residence.</p>" );
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

function popup_age_ca(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Age groups</h3><p>Age has been divided into four groups: <span style='color:" + gammeAge[0] + "'><strong>15-24 years</strong></span>; <span style='color:" + gammeAge[1] + "'><strong>25-34 years</strong></span>; <span style='color:" + gammeAge[2] + "'><strong>35-64 years</strong></span>; <span style='color:" + gammeAge[3] + "'><strong>65 and more</strong></span>.</p>" );
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

// DEMO PROFILE - Composition du ménage
function popup_strm(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Household composition</h3><p>We have defined 5 types of household according to the form of family structure and the presence or absence of children. Here, we consider '<b>child</b>' as a person aged below 16 and '<b>adult</b>' as a person aged 16 or more:<ul><li><span style='color:" + 
		gammeStrm[4] + 
		"'><strong>Complex household with children</strong></span>: household consisting of one or more adults with children with at least one member outside nuclear family (family person other than parents/children or unrelated person);</li><li><span style='color:" + 
		gammeStrm[3] + 
		"'><strong>Family with children</strong></span>: household consisting of one or two parents with at least one child;</li><li><span style='color:" + 
		gammeStrm[2] +
		"'><strong>Complex household without children</strong></span>: household consisting only of adults with at least one member outside nuclear family;</li><li><span style='color:" + 
		gammeStrm[1] +
		"'><strong>Family without children</strong></span>: household consisting only of adults belonging to nuclear family (couple without chldren, couple/single-parent with child(ren) aged 16 years or more);</li><li><span style='color:" + 
		gammeStrm[0] + 
		"'><strong>Single-person household</strong></span>.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}


// DEMO PROFILE - Composition du ménage - France
function popup_strmfr(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Household composition</h3><p>We have defined 4 types of household according to the form of family structure and the presence or absence of children. Here, we consider '<b>child</b>' as a person aged below 16 and '<b>adult</b>' as a person aged 16 or more:<ul><li><span style='color:" + 
		gammeStrmfr[3] + 
		"'><strong>Household with children</strong></span> : household composed of one or more adults with child(ren). The members of the household are not necessarily related;</li><li><span style='color:" + 
		gammeStrmfr[2] +
		"'><strong>Household (excluding couple) without children</strong></span> : household composed of adults only. This category includes nuclear families (one or two parents with child(ren) aged 16 or over), extended families where all members are adults, flatmates, etc;</li><li><span style='color:" + 
		gammeStrmfr[1] +
		"'><strong>Couple without children</strong></span> : household of two adults living together as a couple;</li><li><span style='color:" + 
		gammeStrmfr[0] + 
		"'><strong>Single-person household</strong></span>.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}


// DEMO PROFILE - Composition du ménage - Québec
function popup_strmqc(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Household composition</h3><p>We have defined 3 types of household according to the presence or absence of children. Here, we consider '<b>child</b>' as a person aged below 15 and '<b>adult</b>' as a person aged 15 or more:<ul><li><span style='color:" + 
		gammeStrmqc[2] +
		"'><strong>Household with children</strong></span> : household composed of one or more adultes with child(ren). The members of the household are not necessarily related;</li><li><span style='color:" + 
		gammeStrmqc[1] +
		"'><strong>Household without children</strong></span> : household composed of adults only. This category includes nuclear families (couple, one or two parents with child(ren) aged 15 or more), extended families where all members are adults, flatmates...;</li><li><span style='color:" + 
		gammeStrmqc[0] + 
		"'><strong>Single-person household</strong></span>.</li></ul></p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - individual educational level
function popup_cleduc(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Educational level</h3><p>We merged respondents’ <strong>achieved level of education</strong> in four groups :<ul><li><span style='color:" + gammeSP[0] + "'><strong>low</strong></span> (middle school or less);</li><li><span style='color:" + gammeSP[1] + "'><strong>middle-low</strong></span> (high school without Baccalauréat);</li><li><span style='color:" + gammeSP[2] + "'><strong>middle-high</strong></span> (Up to two years after Baccalauréat);</li><li>and <span style='color:" + gammeSP[3] + "'><strong>high</strong></span> (three years or more after Baccalauréat).</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

function popup_cleduc_as(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Educational level</h3><p>We merged respondents’ <strong>achieved level of education</strong> in four groups :<ul><li><span style='color:" + gammeSP[0] + "'><strong>low</strong></span> : less than 9 years of education (no schooling to full primary);</li><li><span style='color:" + gammeSP[1] + "'><strong>middle-low</strong></span> : between 9 and 11 years of education (full or incomplete high school);</li><li><span style='color:" + gammeSP[2] + "'><strong>middle-high</strong></span> : between 12 and 15 years of education (complete or incomplete higher technical/technological education, incomplete university education);</li><li>and <span style='color:" + gammeSP[3] + "'><strong>high</strong></span> : at least 16 years of education (complete university education, postgraduate education).</li></ul>" );
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

function popup_educmen_as(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Household educational level</h3><p>From the respondents’ achieved level of education, we computed educational status corresponding to the <strong>highest level of education of the adults in the household</strong>.</br>We distinguished four groups:<ul><li><span style='color:" + gammeSP[0] + "'><strong>low</strong></span> : less than 9 years of education (no schooling to full primary);</li><li><span style='color:" + gammeSP[1] + "'><strong>middle-low</strong></span> : between 9 and 11 years of education (full or incomplete high school);</li><li><span style='color:" + gammeSP[2] + "'><strong>middle-high</strong></span> : between 12 and 15 years of education (complete or incomplete higher technical/technological education, incomplete university education);</li><li>and <span style='color:" + gammeSP[3] + "'><strong>high</strong></span> : at least 16 years of education (complete university education, postgraduate education).</li></ul>" );
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

 function popup_rev_bo(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Household income</h3><p>Total annual <strong>household income</strong> has been divided by the number of adults and children in the household. We distinguished five groups:<ul><li><span style='color:" + gammeRev_as[0] + "'><strong>Very low</strong></span> (< $414 000/CU)</li><li><span style='color:" + gammeRev_as[1] + "'><strong>Low</strong></span> ($414 000-$827 999/CU)</li><li><span style='color:" + gammeRev_as[2] + "'><strong>Intermediate</strong></span> ($828 000-$1 655 999/CU)</li><li><span style='color:" + gammeRev_as[3] + "'><strong>High</strong></span> ($1 656 000-$3 311 999/CU)</li><li><span style='color:" + gammeRev_as[4] + "'><strong>Very high</strong></span> (>= $3 312 000/CU)</li></ul><p>The intervals were defined according to the national minimum wage (SMN) in Colombia, which is equivalent to 828,000 pesos in 2019 (or 220€): the first threshold ($414000) corresponds to 0.5 SMN; the second threshold ($828000) corresponds to the minimum wage; the third threshold ($1656000) corresponds to 2 SMN; the fourth threshold ($3312000) corresponds to 4 SMN.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none"); $(".popup-container").css("display", "none"); }) ;

}

function popup_rev_sa(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Household income</h3><p>Total annual <strong>household income</strong> has been divided by the number of adults and children in the household. We distinguished five groups:<ul><li><span style='color:" + gammeRev_as[0] + "'><strong>Very low</strong></span> (< $187 500/CU)</li><li><span style='color:" + gammeRev_as[1] + "'><strong>Low</strong></span> ($187 500-$281 249/CU)</li><li><span style='color:" + gammeRev_as[2] + "'><strong>Intermediate</strong></span> ($281 250-$374 999/CU)</li><li><span style='color:" + gammeRev_as[3] + "'><strong>High</strong></span> ($375 000-$562 499/CU)</li><li><span style='color:" + gammeRev_as[4] + "'><strong>Very high</strong></span> (>= $562 500/CU)</li></ul><p>The intervals were defined according to the national minimum wage (SMN) of Chile, which is equivalent to 187,500 pesos in 2012 (or 278€): the first threshold ($187500) therefore corresponds to the SMN; the second threshold ($281250) corresponds to 1.5 SMN; the third threshold ($375000) corresponds to 2 SMN; the fourth threshold ($562500) corresponds to 3 SMN.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none"); $(".popup-container").css("display", "none"); }) ;

}

function popup_rev_sp(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Household income</h3><p>Total annual <strong>household income</strong> has been divided by the number of adults and children in the household. We distinguished five groups:<ul><li><span style='color:" + gammeRev_as[0] + "'><strong>Very low</strong></span> (< 937R$/CU)</li><li><span style='color:" + gammeRev_as[1] + "'><strong>Low</strong></span> (937R$-1 873R$/CU)</li><li><span style='color:" + gammeRev_as[2] + "'><strong>Intermediate</strong></span> (1 874R$-2 810R$/CU)</li><li><span style='color:" + gammeRev_as[3] + "'><strong>High</strong></span> (2 811R$-4 684R$/CU)</li><li><span style='color:" + gammeRev_as[4] + "'><strong>Very high</strong></span> (>= 4 685R$/CU)</li></ul><p>The intervals were defined according to Brazil's national minimum wage (SMN), which is equivalent to 937 reais in 2017 (or 273€): the first threshold (R$937) therefore corresponds to the SMN; the second threshold (R$1874) corresponds to 2 SMN; the third threshold (R$2811) corresponds to 3 SMN; the fourth threshold (R$4685) corresponds to 5 SMN.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none"); $(".popup-container").css("display", "none"); }) ;

}

// SOCIAL PROFILE - individual socioprofessional status
function popup_cs(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Individual socioprofessional status</h3><p>We merged respondents’ <strong>socioprofessional status</strong> in five groups:<ul><li><span style='color:" +
	 gammeCs[0] + "'><strong>Inactive</strong></span> (unemployed long term, housework);</li><li><span style='color:" + 
	 gammeCs[1] + "'><strong>Workers</strong></span>;</li><li><span style='color:" + 
	 gammeCs[2] + "'><strong>Employees</strong></span>;</li><li><span style='color:" + 
	 gammeCs[3] + "'><strong>Intermediate occupations</strong></span> (intermediary professionals, craftsmen, merchants, employers of more than 10 employees and farm operators);</li><li><span style='color:" + 
	 gammeCs[4] + "'><strong>Managers and</strong></span> higher <span style='color:" + gammeCs[4] + "'><strong>intellectual professionals</strong></span>.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - CSO
function popup_cso(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Individual socioprofessional status of workers</h3><p>We merged employed respondents’ <strong>socioprofessional status</strong> in five groups:<ul><li><span style='color:" + gammeCso[0] + "'><strong>Unskilled workers</strong></span></li><li><span style='color:" + gammeCso[1] + "'><strong>Skilled workers</strong></span></li><li><span style='color:" + gammeCso[2] + "'><strong>Self-employed</strong></span></li><li><span style='color:" + gammeCso[3] + "'><strong>Executives and higher intellectual professions</strong></span></li></ul><p>When the type of job reported did not provide enough information to determine precisely the socio-professional group to which the respondent belongs (in particular the separation between skilled and unskilled workers), the economic sector of the employing company and the level of education of the respondents were used.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - household socioprofessional status
function popup_cspmen(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Household socioprofessional status</h3><p>From respondents’ socioprofessional data, we computed socioprofessional status corresponding to the <strong>lowest socioprofessional category of the adults in the household</strong>.</br>We distinguished five groups:<ul><li><span style='color:" + 
		gammeCs[0] + "'><strong>Inactive</strong></span> (unemployed long term, housework);</li><li><span style='color:" + 
		gammeCs[1] + "'><strong>Workers</strong></span>;</li><li><span style='color:" + 
		gammeCs[2] + "'><strong>Employees</strong></span>;</li><li><span style='color:" + 
		gammeCs[3] + "'><strong>Intermediate occupations</strong></span> (intermediary professionals, craftsmen, merchants, employers of more than 10 employees and farm operators);</li><li>and <span style='color:" + 
	 gammeCs[4] + "'><strong>Managers and</strong></span> higher <span style='color:" + gammeCs[4] + "'><strong>intellectual professionals</strong></span>.</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// SOCIAL PROFILE - informalité
function popup_inf(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Professional informality of the active population</h3><p>Professional informality was estimated by combining the socioprofessional status and the economic sector of the employing company, based on the methods proposed by the International Labour Organization (ILO). The respondents were divided into two groups: </p><ul><li><span style='color:" + gammeInf[0] + "'><strong>Informal workers</strong></span></li><li><span style='color:" + gammeInf[1] + "'><strong>Formal workers</strong></span></li></ul><p>When there was insufficient information to follow the decision rules recommended by the ILO, the level of education and income of the workers surveyed were also used.</p>" );
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
	$("#text").html("<h3>'Poverty Areas'</h3><p>Respondents have been divided into two groups according to the overlap between their local area of residence (called 'zone fine' in the French survey) and the boundaries of the 'Poverty Areas' (Quartiers prioritaires de la Politique de la Ville - QPV): living <span style='color:" + gammeQpv[1] + "'><strong>in 'Poverty Areas'</strong></span> or <span style='color:" + gammeQpv[0] + "'><strong>outside 'Poverty Areas'</strong></span>.</br></br>Since French Origin-Destination surveys do not provide information on the exact residential location, respondents have been defined as living in 'Poverty Areas' if their local areas of residence include a majority (> 51%) of population in 'Poverty Areas' according to 2013 population census.</br> There are 'Poverty Areas' in every French city region included in the Mobiliscope except for the Annecy city region.</p>");
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

// RESIDENTIAL PROFILE - statut d'occupation dans le logement
// Amérique Latine
function popup_zona(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Ring of residence</h3><p>District of residence has been grouped four rings : <ul><li><span style='color:" + gammeZona[3] + "'><strong>Center</strong></span> ;</li><li><span style='color:" + gammeZona[2] + "'><strong>Pericenter</strong></span></li><li><span style='color:" + gammeZona[1] + "'><strong>Close periphery</strong></span></li><li><span style='color:" + gammeZona[0] + "'><strong>Distant periphery</strong></span></li></ul><p>This division is inspired by the division proposed in the book <em> Mobilités et changement urbain. Bogotá, Santiago et São Paulo</em> directed by F.Dureau, T.Lulle, S.Souchaud and Y.Contreras (2014).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// RESIDENTIAL PROFILE - strate socio-économique
// ce pop-up est seulement pour Bogota
function popup_sse(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Socio-economic stratum</h3><p>Socio-economic stratification is a <a href='https://datosabiertos.bogota.gov.co/dataset/manzana-estratificacion-bogota-d-c' target='_blank'>typology</a> of Colombian public action, which aims to establish the tariffs of public services applied to households according to their place of residence, based on a classification of dwellings according to the characteristics of the dwellings and their immediate environment (quality of the building, roads, presence of facilities, etc.). We classified the respondents into four groups according to the stratum to which their dwelling belongs: <ul><li><span style='color:" + gammeRev_fr[3] + "'><strong>Stratum 4, 5 or 6</strong></span> : middle-high and high ;</li><li><span style='color:" + gammeRev_fr[2] + "'><strong>Stratum 3</strong></span> : middle-low</li><li><span style='color:" + gammeRev_fr[1] + "'><strong>Stratum 2</strong></span> : low</li><li><span style='color:" + gammeRev_fr[0] + "'><strong>Stratum 1 or not stratified</strong></span> : very low</li></ul>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_log(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Housing tenure</h3><p>We consider the status of the household dwelling (ownership, rental, usufruct, etc.) and the place of the respondent in the household and define three tenure status:<ul><li><span style='color:" + 
		gammeLog[2] + 
		"'><strong>Owners</strong></span> : referents of the household or partners, owners;</li><li><span style='color:" + 
		gammeLog[1] +
		"'><strong>Tenants</strong></span> : referents of the household or partners, tenants;</li><li><span style='color:" + 		
		gammeLog[0] +
		"'><strong>Rent-free</strong></span> tenants : persons - or their partner - who live in a dwelling without owning or renting it. Usufructuaries, persons occupying a dwelling free of charge or housed in an owner-occupied or tenant-occupied dwelling are included in this category.</li></ul>" +
		"<p>For respondents under 25 living with their parents, the tenure status of the parents is considered.</p>");
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

function popup_act_as(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Current activity</h3><p>We used trip purposes to define the various activities that the respondent engages in over the 24 hours of a day. We have focused on six groups of activity:</p><ul><li><span style='color:" + gammeAct[0] + "'><strong>At home</strong></span></li><li><span style='color:" + gammeAct[1] + "'><strong>At work</strong></span></li><li><span style='color:" + gammeAct[2] + "'><strong>Studying</strong></span></li><li><span style='color:" + gammeAct[3] + "'><strong>Shopping</strong></span></li><li><span style='color:" + gammeAct[4] + "'><strong>Leisure</strong></span> (recreational, cultural or sporting activities, family and personal visits)</li><li><span style='color:" + gammeAct[5] + "'><strong>Admistrative or personal procedures.</strong></span></li></ul>" ) ;
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

// ACTIVITY/TRAVEL BEHAVIOUR - travel mode
function popup_mode(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html( "" );
	$("#text").html("<h3>Last mode of transport</h3><p>We distinguished three main travel modes: <ul><li><span style='color:" +
	 gammeMode[2] + "'><strong>Soft mobility</strong></span> (walking, cycling ...);</li><li><span style='color:" + 
	 gammeMode[1] + "'><strong>Individual motor vehicle</strong></span> (personal cars or motorcycles, cabs);</li><li><span style='color:" + 
	 gammeMode[0] + "'><strong>Collective transportation</strong></span>.</li></ul>" + 
	 "<p>This is the <b>main</b> mode of transport used. If more than one mode of transport are used during the same trip, the <b>main</b> mode of transport is defined in this <b>order priority</b>: 1) Collective transportation; 2) Individual motor vehicle and 3) Soft mobility. Thus, a trip in which the individual would have used collective transportation and his/her own car will be classified as a trip made mainly by collective transportation.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;

}

// Bogota
function popup_mode_bo(e){
	e.stopPropagation();
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Last mode of transport</h3><p>We distinguished four main travel modes in Bogotá:<ul><li><span style='color:" + 
		gammeMode_b[3] + "'><strong>Soft mobility</strong></span> (walking, cycling ...)</li><li><span style='color:" + 
		gammeMode_b[2] + "'><strong>Individual motor vehicle</strong></span> (personal cars or motorcycles, cabs)</li><li><span style='color:" + 
		gammeMode_b[1] + "'><strong>Collective transportation</strong></span></li><li><span style='color:" + 
		gammeMode_b[0] + "'><strong>TransMilenio</strong></span> (including the secondary network of <i>alimentadores</i> serving the TransMilenio)</li></ul>" + 
	 "<p>This is the <b>main</b> mode of transport used. If more than one mode of transport are used during the same trip, the <b>main</b> mode of transport is defined in this <b>order priority</b>: 1) TransMilenio; 2) Collective transportation; 3) Individual motor vehicle and 4) Soft mobility. Thus, a trip in which the individual would have used TransMilenio and his/her own car will be classified as a trip made mainly by TransMilenio.</p>" );	
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

function popup_source_sa(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>In Santiago, data came from the <i>Encuesta Origen-Destino de Viajes (EOD) 2012</i> available from <i>Ministerio de Transportes y Telecomunicaciones, Programa de Vialidad y Transporte Urbano: SECTRA</i>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_bo(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>In Bogotá, data came from the <i>Encuesta Origen-Destino de Hogares (EODH) 2019</i> available from <i>Sistema Integrado de información sobre Movilidad Urbana Regional</i> (SIMUR).</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}

function popup_source_sp(){
	$("#popup").css("display", "block") ;
	$(".popup-container").css("display", "inherit") ;
	$("#text").html("<h3>Enquête \"origine-destination\"</h3><p>In São Paulo, data came from <i>Pesquisa Origem e Destino (OD) 2017</i> available from <i>Companhia do Metrô de São Paulo</i>.</p>" );
	$("#close").click(function() {$("#popup").css("display", "none") ; $(".popup-container").css("display", "none") ; }) ;
}
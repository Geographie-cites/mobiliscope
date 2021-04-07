//Stockage des titres

/*//Nom des modalités
var modalite = ["people", "aged 16 to 24", "aged 25 to 34", "aged 35 to 64", "aged 65 and more",
				"men", "women",
				"low educational level", "middle-low educational level", "middle-high educational level", "high educational level",
				"low educational h. level", "middle-low educational h. level", "middle-high educational h. level","high educational h. level",
				"inactiveADISP", "low socioprofessional status", "middle-low socioprofessional status", "middle-high socioprofessional status", "high socioprofessional status",
				"inactive (h.)", "low socioprofessional h. status", "middle-low socioprofessional h. status", "middle-high socioprofessional h. status", "high socioprofessional h. status",
				"active", "students", "unemployed", "retired", "inactive",
				"living in ", "living in urban areas", "living in suburban/peripheral areas",
				"at home", "at work", "studying", "shopping", "on leisure",
				"soft mobility", "private motor vehicule", "public transportation",
				"low household income", "middle-low household income", "middle-high household income", "high household income",
				"living in Seine-Saint-Denis", "living in Val-de-Marne", "living in Hauts-de-Seine", "living in greater Paris",
				"people",
				"missing income"];*/


// Titres des cartes
var tMap = [
			//Whole population
			"<strong>Population</strong> density (people per km²) at district level",
			"Estimated number of <strong>people</strong> at district level",
			"Estimated number of non resident <strong>population</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Resident population
			"Estimated proportion of <strong>resident</strong> population at district level",
			"Estimated number of <strong>resident</strong> population at district level",
			"Estimated proportion of <strong>non resident</strong> population at district level",
			"Estimated number of <strong>non resident</strong> population at district level",
			//Age group
			"Estimated proportion of people <strong>aged 65 and more</strong> at district level",
			"Estimated number of people <strong>aged 65 and more</strong> at district level",
			"Estimated number of non resident people <strong>aged 65 and more</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>aged 35 to 64</strong> at district level",
			"Estimated number of people <strong>aged 35 to 64</strong> at district level",
			"Estimated number of non resident people <strong>aged 35 to 64</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>aged 25 to 34</strong> at district level",
			"Estimated number of people <strong>aged 25 to 34</strong> at district level",
			"Estimated number of non resident people <strong>aged 25 to 34</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>aged 16 to 24</strong> at district level",
			"Estimated number of people <strong>aged 16 to 24</strong> at district level",
			"Estimated number of non resident people <strong>aged 16 to 24</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Sex
			"Estimated proportion of <strong>women</strong> at district level",
			"Estimated number of <strong>women</strong> at district level",
			"Estimated number of non resident <strong>women</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>men</strong> at district level",
			"Estimated number of <strong>men</strong> at district level",
			"Estimated number of non resident <strong>men</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Educationnal level (ind)
			"Estimated proportion of people with <strong>high educational level</strong> at district level",
			"Estimated number of people with <strong>high educational level</strong> at district level",
			"Estimated number of non resident people with <strong>high educational level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-high educational level</strong> at district level",
			"Estimated number of people with <strong>middle-high educational level</strong> at district level",
			"Estimated number of non resident people with <strong>middle-high educational level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-low educational level</strong> at district level",
			"Estimated number of people with <strong>middle-low educational level</strong> at district level",
			"Estimated number of non resident people with <strong>middle-low educational level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>low educational level</strong> at district level",
			"Estimated number of people with <strong>low educational level</strong> at district level",
			"Estimated number of non resident people with <strong>low educational level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Educationnal level (men)
			"Estimated proportion of people with <strong>high educational h. level</strong> at district level",
			"Estimated number of people with <strong>high educational h. level</strong> at district level",
			"Estimated number of non resident people with <strong>high educational h. level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-high educational h. level</strong> at district level",
			"Estimated number of people with <strong>middle-high educational h. level</strong> at district level",
			"Estimated number of non resident people with <strong>middle-high educational h. level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-low educational h. level</strong> at district level",
			"Estimated number of people with <strong>middle-low educational h. level</strong> at district level",
			"Estimated number of non resident people with <strong>middle-low educational h. level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>low educational h. level</strong> at district level",
			"Estimated number of people with <strong>low educational h. level</strong> at district level",
			"Estimated number of non resident people with <strong>low educational h. level</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Household income
			"Estimated proportion of people with <strong>high household income</strong> at district level",
			"Estimated number of people with <strong>high household income</strong> at district level",
			"Estimated number of non resident people with <strong>high household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-high household income</strong> at district level",
			"Estimated number of people with <strong>middle-high household income</strong> at district level",
			"Estimated number of non resident people with <strong>middle-high household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-low household income</strong> at district level",
			"Estimated number of people with <strong>middle-low household income</strong> at district level",
			"Estimated number of non resident people with <strong>middle-low household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>low household income</strong> at district level",
			"Estimated number of people with <strong>low household income</strong> at district level",
			"Estimated number of non resident people with <strong>low household income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>missing income</strong> at district level",
			"Estimated number of people with <strong>missing income</strong> at district level",
			"Estimated number of non resident people with <strong>missing income</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//CSP
			"Estimated proportion of people with <strong>high socioprofessional status</strong> at district level",
			"Estimated number of people with <strong>high socioprofessional status</strong> at district level",
			"Estimated number of non resident people with <strong>high socioprofessional status</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-high socioprofessional status</strong> at district level",
			"Estimated number of people with <strong>middle-high socioprofessional status</strong> at district level",
			"Estimated number of non resident people with <strong>middle-high socioprofessional status</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-low socioprofessional status</strong> at district level",
			"Estimated number of people with <strong>middle-low socioprofessional status</strong> at district level",
			"Estimated number of non resident people with <strong>middle-low socioprofessional status</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>low socioprofessional status</strong> at district level",
			"Estimated number of people with <strong>low socioprofessional status</strong> at district level",
			"Estimated number of non resident people with <strong>low socioprofessional status</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>inactive</strong> people at district level",
			"Estimated number of <strong>inactive</strong> people at district level",
			"Estimated number of non resident <strong>inactive</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//CSP
			"Estimated proportion of people with <strong>high socioprofessional h. status</strong> at district level",
			"Estimated number of people with <strong>high socioprofessional h. status</strong> at district level",
			"Estimated number of non resident people with <strong>high socioprofessional h. status</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-high socioprofessional h. status</strong> at district level",
			"Estimated number of people with <strong>middle-high socioprofessional h. status</strong> at district level",
			"Estimated number of non resident people with <strong>middle-high socioprofessional h. status</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>middle-low socioprofessional h. status</strong> at district level",
			"Estimated number of people with <strong>middle-low socioprofessional h. status</strong> at district level",
			"Estimated number of non resident people with <strong>middle-low socioprofessional h. status</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people with <strong>low socioprofessional h. status</strong> at district level",
			"Estimated number of people with <strong>low socioprofessional h. status</strong> at district level",
			"Estimated number of non resident people with <strong>low socioprofessional h. status</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>inactive (h.)</strong> people at district level",
			"Estimated number of <strong>inactive (h.)</strong> people at district level",
			"Estimated number of non resident <strong>inactive (h.)</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Occupationnal status
			"Estimated proportion of <strong>inactive</strong> people at district level",
			"Estimated number of <strong>inactive</strong> people at district level",
			"Estimated number of non resident <strong>inactive</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>retired</strong> people at district level",
			"Estimated number of <strong>retired</strong> people at district level",
			"Estimated number of non resident <strong>retired</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>unemployed</strong> people at district level",
			"Estimated number of <strong>unemployed</strong> people at district level",
			"Estimated number of non resident <strong>unemployed</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>    ", // laisser les espaces, pour occ3_flow2()
			"Estimated proportion of <strong>students</strong> at district level",
			"Estimated number of <strong>students</strong> at district level",
			"Estimated number of non resident <strong>students</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of <strong>active</strong> people at district level",
			"Estimated number of <strong>active</strong> people at district level",
			"Estimated number of non resident <strong>active</strong> people at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Department of residence
			"Estimated proportion of people <strong>living in greater Paris</strong> at district level",
			"Estimated number of people <strong>living in greater Paris</strong> at district level",
			"Estimated number of non resident people <strong>living in greater Paris</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in Hauts-de-Seine</strong> at district level",
			"Estimated number of people <strong>living in Hauts-de-Seine</strong> at district level",
			"Estimated number of non resident people <strong>living in Hauts-de-Seine</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in Val-de-Marne</strong> at district level",
			"Estimated number of people <strong>living in Val-de-Marne</strong> at district level",
			"Estimated number of non resident people <strong>living in Val-de-Marne</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in Seine-Saint-Denis</strong> at district level",
			"Estimated number of people <strong>living in Seine-Saint-Denis</strong> at district level",
			"Estimated number of non resident people <strong>living in Seine-Saint-Denis</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in Paris</strong> at district level",
			"Estimated number of people <strong>living in Paris</strong> at district level",
			"Estimated number of non resident people <strong>living in Paris</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Residential rings
			"Estimated proportion of people <strong>living in</strong> ", " at district level",
			"Estimated number of people <strong>living in</strong> ", " at district level",
			"Estimated number of non resident people <strong>living in</strong> ", " at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in urban areas</strong> at district level",
			"Estimated number of people <strong>living in urban areas</strong> at district level",
			"Estimated number of non resident people <strong>living in urban areas</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living in suburban/peripheral areas</strong> at district level",
			"Estimated number of people <strong>living in suburban/peripheral areas</strong> at district level",
			"Estimated number of non resident people <strong>living in suburban/peripheral areas</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//QPV
			"Estimated proportion of people <strong>living in 'Poverty Areas'</strong> at district level",
			"Estimated number of people <strong>living in 'Poverty Areas'</strong> at district level",
			"Estimated number of non resident people <strong>living in 'Poverty Areas'</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>living outside 'Poverty Areas'</strong> at district level",
			"Estimated number of people <strong>living outside 'Poverty Areas'</strong> at district level",
			"Estimated number of non resident people <strong>living outside 'Poverty Areas'</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			//Activity
			"Estimated proportion of people <strong>on leisure</strong> at district level",
			"Estimated number of people <strong>on leisure</strong> at district level",
			"Estimated number of non resident people <strong>on leisure</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>shopping</strong> at district level",
			"Estimated number of people <strong>shopping</strong> at district level",
			"Estimated number of non resident people <strong>shopping</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>studying</strong> at district level",
			"Estimated number of people <strong>studying</strong> at district level",
			"Estimated number of non resident people <strong>studying</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>at work</strong> at district level",
			"Estimated number of people <strong>at work</strong> at district level",
			"Estimated number of non resident people <strong>at work</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people <strong>at home</strong> at district level",
			"Estimated number of people <strong>at home</strong> at district level",
			// Travel mode
			"Estimated proportion of people who used <strong>soft mobility</strong> at district level",
			"Estimated number of people who used <strong>soft mobility</strong> at district level",
			"Estimated number of non resident people who used <strong>soft mobility</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people who used <strong>private motor vehicule</strong> at district level",
			"Estimated number of people who used <strong>private motor vehicule</strong> at district level",
			"Estimated number of non resident people who used <strong>private motor vehicule</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			"Estimated proportion of people who used <strong>public transportation</strong> at district level",
			"Estimated number of people who used <strong>public transportation</strong> at district level",
			"Estimated number of non resident people who used <strong>public transportation</strong> at district level <span style = 'font-size : .7em'>(& the main districts of residence on mouseover)</span>",
			];


//Titre des graphiques simples
var tUnique = [
			//Whole population
			"<strong>Population</strong> density (people per km²)",
			"Estimated number of <strong>people</strong>",
			"Estimated number of non resident <strong>people</strong>",
			//Residential population
			"Estimated proportion (%) of <strong>resident</strong> population",
			"Estimated number of <strong>resident</strong> population",
			"Estimated proportion (%) of <strong>non resident</strong> population",
			"Estimated number of <strong>non resident</strong> population",
			//Age group
			"Estimated proportion (%) of people <strong>aged 65 and more</strong>",
			"Estimated number of people <strong>aged 65 and more</strong>",
			"Estimated number of non resident people <strong>aged 65 and more</strong>",
			"Estimated proportion (%) of people <strong>aged 35 to 64</strong>", //10
			"Estimated number of people <strong>aged 35 to 64</strong>",
			"Estimated number of non resident people <strong>aged 35 to 64</strong>",
			"Estimated proportion (%) of people <strong>aged 25 to 34</strong>",
			"Estimated number of people <strong>aged 25 to 34</strong>",
			"Estimated number of non resident people <strong>aged 25 to 34</strong>",
			"Estimated proportion (%) of people <strong>aged 16 to 24</strong>",
			"Estimated number of people <strong>aged 16 to 24</strong>",
			"Estimated number of non resident people <strong>aged 16 to 24</strong>",
			//Sex
			"Estimated proportion (%) of <strong>women</strong>",
			"Estimated number of <strong>women</strong>", //20
			"Estimated number of non resident <strong>women</strong>",
			"Estimated proportion (%) of <strong>men</strong>",
			"Estimated number of <strong>men</strong>",
			"Estimated number of non resident <strong>men</strong>",
			//Educationnal level (ind)
			"Estimated proportion (%) of people with <strong>high educational level</strong>",
			"Estimated number of people with <strong>high educational level</strong>",
			"Estimated number of non resident people with <strong>high educational level</strong>",
			"Estimated proportion (%) of people with <strong>middle-high educational level</strong>",
			"Estimated number of people with <strong>middle-high educational level</strong>",
			"Estimated number of non resident people with <strong>middle-high educational level</strong>", //30
			"Estimated proportion (%) of people with <strong>middle-low educational level</strong>",
			"Estimated number of people with <strong>middle-low educational level</strong>",
			"Estimated number of non resident people with <strong>middle-low educational level</strong>",
			"Estimated proportion (%) of people with <strong>low educational level</strong>",
			"Estimated number of people with <strong>low educational level</strong>",
			"Estimated number of non resident people with <strong>low educational level</strong>",
			//Educationnal level (men)
			"Estimated proportion (%) of people with <strong>high educational h. level</strong>",
			"Estimated number of people with <strong>high educational h. level</strong>",
			"Estimated number of non resident people with <strong>high educational h. level</strong>",
			"Estimated proportion (%) of people with <strong>middle-high educational h. level</strong>", //40
			"Estimated number of people with <strong>middle-high educational h. level</strong>",
			"Estimated number of non resident people with <strong>middle-high educational h. level</strong>",
			"Estimated proportion (%) of people with <strong>middle-low educational h. level</strong>",
			"Estimated number of people with <strong>middle-low educational h. level</strong>",
			"Estimated number of non resident people with <strong>middle-low educational h. level</strong>",
			"Estimated proportion (%) of people with <strong>low educational h. level</strong>",
			"Estimated number of people with <strong>low educational h. level</strong>",
			"Estimated number of non resident people with <strong>low educational h. level</strong>",
			//Household income
			"Estimated proportion (%) of people with <strong>high household income</strong>",
			"Estimated number of people with <strong>high household income</strong>", //50
			"Estimated number of non resident people with <strong>high household income</strong>",
			"Estimated proportion (%) of people with <strong>middle-high household income</strong>",
			"Estimated number of people with <strong>middle-high household income</strong>",
			"Estimated number of non resident people with <strong>middle-high household income</strong>",
			"Estimated proportion (%) of people with <strong>middle-low household income</strong>",
			"Estimated number of people with <strong>middle-low household income</strong>",
			"Estimated number of non resident people with <strong>middle-low household income</strong>",
			"Estimated proportion (%) of people with <strong>low household income</strong>",
			"Estimated number of people with <strong>low household income</strong>",
			"Estimated number of non resident people with <strong>low household income</strong>", //60
			"Estimated proportion (%) of people with <strong>missing income</strong>",
			"Estimated number of people with <strong>missing income</strong>",
			"Estimated number of non resident people with <strong>missing income</strong>",
			//CSP
			"Estimated proportion (%) of people with <strong>high socioprofessional status</strong>",
			"Estimated number of people with <strong>high socioprofessional status</strong>",
			"Estimated number of non resident people with <strong>high socioprofessional status</strong>",
			"Estimated proportion (%) of people with <strong>middle-high socioprofessional status</strong>",
			"Estimated number of people with <strong>middle-high socioprofessional status</strong>",
			"Estimated number of non resident people with <strong>middle-high socioprofessional status</strong>",
			"Estimated proportion (%) of people with <strong>middle-low socioprofessional status</strong>", //70
			"Estimated number of people with <strong>middle-low socioprofessional status</strong>",
			"Estimated number of non resident people with <strong>middle-low socioprofessional status</strong>",
			"Estimated proportion (%) of people with <strong>low socioprofessional status</strong>",
			"Estimated number of people with <strong>low socioprofessional status</strong>",
			"Estimated number of non resident people with <strong>low socioprofessional status</strong>",
			"Estimated proportion (%) of <strong>inactive</strong> people",
			"Estimated number of <strong>inactive</strong> people",
			"Estimated number of non resident <strong>inactive</strong> people",
			//CSP
			"Estimated proportion (%) of people with <strong>high socioprofessional h. status</strong>",
			"Estimated number of people with <strong>high socioprofessional h. status</strong>", //80
			"Estimated number of non resident people with <strong>high socioprofessional h. status</strong>",
			"Estimated proportion (%) of people with <strong>middle-high socioprofessional h. status</strong>",
			"Estimated number of people with <strong>middle-high socioprofessional h. status</strong>",
			"Estimated number of non resident people with <strong>middle-high socioprofessional h. status</strong>",
			"Estimated proportion (%) of people with <strong>middle-low socioprofessional h. status</strong>",
			"Estimated number of people with <strong>middle-low socioprofessional h. status</strong>",
			"Estimated number of non resident people with <strong>middle-low socioprofessional h. status</strong>",
			"Estimated proportion (%) of people with <strong>low socioprofessional h. status</strong>",
			"Estimated number of people with <strong>low socioprofessional h. status</strong>",
			"Estimated number of non resident people with <strong>low socioprofessional h. status</strong>", //90
			"Estimated proportion (%) of <strong>inactive (h.)</strong> people",
			"Estimated number of <strong>inactive (h.)</strong> people",
			"Estimated number of non resident <strong>inactive (h.)</strong> people",
			//Occupationnal status
			"Estimated proportion (%) of <strong>inactive</strong> people",
			"Estimated number of <strong>inactive</strong> people",
			"Estimated number of non resident <strong>inactive</strong> people",
			"Estimated proportion (%) of <strong>retired</strong> people",
			"Estimated number of <strong>retired</strong> people",
			"Estimated number of non resident <strong>retired</strong> people",
			"Estimated proportion (%) of <strong>unemployed</strong> people", //100
			"Estimated number of <strong>unemployed</strong> people",
			"Estimated number of non resident <strong>unemployed</strong> people",
			"Estimated proportion (%) of <strong>students</strong>",
			"Estimated number of <strong>students</strong>",
			"Estimated number of non resident <strong>students</strong>",
			"Estimated proportion (%) of <strong>active</strong> people",
			"Estimated number of <strong>active</strong> people",
			"Estimated number of non resident <strong>active</strong> people",
			//Department of residence
			"Estimated proportion (%) of people <strong>living in greater Paris</strong>",
			"Estimated number of people <strong>living in greater Paris</strong>", //110
			"Estimated number of non resident people <strong>living in greater Paris</strong>",
			"Estimated proportion (%) of people <strong>living in Hauts-de-Seine</strong>",
			"Estimated number of people <strong>living in Hauts-de-Seine</strong>",
			"Estimated number of non resident people <strong>living in Hauts-de-Seine</strong>",
			"Estimated proportion (%) of people <strong>living in Val-de-Marne</strong>",
			"Estimated number of people <strong>living in Val-de-Marne</strong>",
			"Estimated number of non resident people <strong>living in Val-de-Marne</strong>",
			"Estimated proportion (%) of people <strong>living in Seine-Saint-Denis</strong>",
			"Estimated number of people <strong>living in Seine-Saint-Denis</strong>",
			"Estimated number of non resident people <strong>living in Seine-Saint-Denis</strong>", //120
			"Estimated proportion (%) of people <strong>living in Paris</strong>",
			"Estimated number of people <strong>living in Paris</strong>",
			"Estimated number of non resident people <strong>living in Paris</strong>",
			//Residential rings
			"Estimated proportion (%) of people <strong>living in</strong> ",
			"Estimated number of people <strong>living in</strong> ",
			"Estimated number of non resident people <strong>living in</strong> ", 
			"Estimated proportion (%) of people <strong>living in urban areas</strong>",
			"Estimated number of people <strong>living in urban areas</strong>",
			"Estimated number of non resident people <strong>living in urban areas</strong>",
			"Estimated proportion (%) of people <strong>living in suburban/peripheral areas</strong>", //130
			"Estimated number of people <strong>living in suburban/peripheral areas</strong>",
			"Estimated number of non resident people <strong>living in suburban/peripheral areas</strong>",
			//QPV
			"Estimated proportion (%) of people <strong>living in 'Poverty Areas'</strong>",
			"Estimated number of people <strong>living in 'Poverty Areas'</strong>",
			"Estimated number of non resident people <strong>living inside 'Poverty Areas'</strong>",
			"Estimated proportion (%) of people <strong>residing outside QPV</strong>",
			"Estimated number of people <strong>residing outside 'Poverty Areas'</strong>",
			"Estimated number of non resident people <strong>living outside 'Poverty Areas'</strong>",
			//Activity
			"Estimated proportion (%) of people <strong>on leisure</strong>",
			"Estimated number of people <strong>on leisure</strong>",  //140
			"Estimated number of non resident people <strong>on leisure</strong>",
			"Estimated proportion (%) of people <strong>shopping</strong>",
			"Estimated number of people <strong>shopping</strong>",
			"Estimated number of non resident people <strong>shopping</strong>",
			"Estimated proportion (%) of people <strong>studying</strong>",
			"Estimated number of people <strong>studying</strong>",
			"Estimated number of non resident people <strong>studying</strong>",
			"Estimated proportion (%) of people <strong>at work</strong>",
			"Estimated number of people <strong>at work</strong>",
			"Estimated number of non resident people <strong>at work</strong>",  //150
			"Estimated proportion (%) of people <strong>at home</strong>",
			"Estimated number of people <strong>at home</strong>",
			// Travel mode
			"Estimated proportion (%) of people who used <strong>soft mobility</strong>",
			"Estimated number of people who used <strong>soft mobility</strong>",
			"Estimated number of non resident people who used <strong>soft mobility</strong>",
			"Estimated proportion (%) of people who used <strong>private motor vehicule</strong>",
			"Estimated number of people who used <strong>private motor vehicule</strong>",
			"Estimated number of non resident people who used <strong>private motor vehicule</strong>",
			"Estimated proportion (%) of people who used <strong>public transportation</strong>",
			"Estimated number of people who used <strong>public transportation</strong>",  //160
			"Estimated number of non resident people who used <strong>public transportation</strong>",
			];


// Titres des graphiques empilés
var titleStacked =["Estimated proportion (%) of people by <strong>socioprofessional status</strong>",
				   "Estimated number of people by <strong>socioprofessional status</strong>",
				   "Estimated number of non resident people by <strong>socioprofessional status</strong>",
				   "Estimated proportion (%) of people by <strong>socioprofessional h. status</strong>",
				   "Estimated number of people by <strong>socioprofessional h. status</strong>",
				   "Estimated number of non resident people by <strong>socioprofessional h. status</strong>", //5
				   "Estimated number of people by <strong>educational level</strong>",
				   "Estimated proportion (%) of people by <strong>educational level</strong>",
				   "Estimated number of non resident people by <strong>educational level</strong>",
				   "Estimated number of people by <strong>educational h. level</strong>",
				   "Estimated proportion (%) of people by <strong>educational h. level</strong>", //10
				   "Estimated number of non resident people by <strong>educational h. level</strong>",
				   "Estimated number of people by <strong>current activity</strong>",
				   "Estimated proportion (%) of people by <strong>current activity</strong>",
				   "Estimated number of non resident people by <strong>current activity</strong>",
				   "Estimated number of people by <strong>residential rings</strong>", //15
				   "Estimated proportion (%) of people by <strong>residential rings</strong>",
				   "Estimated number of non resident people by <strong>residential rings</strong>",
				   "Estimated number of people by <strong>age groups</strong>",
				   "Estimated proportion (%) of people by <strong>age groups</strong>",
				   "Estimated number of non resident people by <strong>age groups</strong>", //20
				   "Estimated number of people by <strong>occupational status</strong>",
				   "Estimated proportion (%) of people by <strong>occupational status</strong>",
				   "Estimated number of non resident people by <strong>occupational status</strong>",
				   "Estimated number of people by <strong>sex</strong>",
				   "Estimated proportion (%) of people by <strong>sex</strong>", //25
				   "Estimated number of non resident people by <strong>sex</strong>",
				   "Estimated number of people by <strong>last mode of transport</strong>",
				   "Estimated proportion (%) of people by <strong>last mode of transport</strong>",
				   "Estimated number of non resident people by <strong>last mode of transport</strong>",
				   "Estimated number of people by <strong>household income</strong>", //30
				   "Estimated proportion (%) of people by <strong>household income</strong>",
				   "Estimated number of non resident people by <strong>household income</strong>",
				   "Estimated number of people by <strong>departement of residence</strong>",
				   "Estimated proportion (%) of people by <strong>departement of residence</strong>",
				   "Estimated number of non resident people by <strong>departement of residence</strong>", //35
				   "Estimated proportion (%) of people according to their residence in/outside <strong>'Poverty Areas'</strong>",
				   "Estimated number of people according to their residence in/outside <strong>'Poverty Areas'</strong>",
				   "Estimated number of non resident people according to their residence in/outside <strong>'Poverty Areas'</strong>",
				   "Estimated proportion (%) of people according to their original <strong> district of residence</strong>",
				   "Estimated number of people according to to their original <strong> district of residence</strong>"]; //40


var spanPopup = ["<span class = 'help' onclick = 'popup_mapTitle1()'></span>"];

//Nom des indicateurs
var indicator = ["age groups", "sex", "educational level", "educational h. level", 
				"socioprofessional status", "socioprofessional h. status", "occupational status", 
				"residential rings", "current activity", "last mode of transport", 
				"household income", "departement of residence", "living in/outside 'Poverty Areas'"];

// Titres de Duncan et de Moran
var titleSegreg = ["Segregation related to", 
				   ": Duncan index <span class = 'help' onclick = 'popup_duncan()'></span>",
                   ": Moran index <span class = 'help' onclick = 'popup_moran()'></span>", 
                   "Spatial proximity of population with same"];






// Déclaration des variables appelées dans load.js

//Nom des couches OSM
var overlayName = ['Simple base map', 'Detailed base map', 'Poverty Areas - France'];
var lcHover = ['Layers'];

// Sous-titre du bandeau entête
var subTitle = "Cities around the clock";

// Checkbox
var layersName = ["Main roads", "Main rivers", "Main cities"]

// Copyright
window.copy = "Mobiliscope (" + "<a href='/en/info/open/evolution' target='_blank'>v4.0</a>" + ")";

// Main title des graphiques
var titleGraph1 = "IN THE WHOLE REGION";
var titleGraph2 = "IN THE SELECTED DISTRICT";

// Messages des graphiques
var graph1Message = "Spatial distribution indices are not available for this indicator or this representation mode";
var graph2Message = "Click a district in the map</br>to get local information";

//Nom des onglets des graphiques
var titleAltGr1 = ["Duncan", "Moran"];
var titleAltGr2 = ["Unique", "Stacked"];

// Textes des légendes
var discretMethod = ['</br>Discretization in quintiles. ', 
					 'Manual discretization. ', 
					 '</br>Equal amplitude discretization. ',
					 '</br>Discretization according to natural thresholds. '];
var textLegChoro = ["For each group, same class intervals apply over the 24h period in the same region.",
					 "Discretization by nested averages. Class intervals remain unchanged over the 24 hours for the same region.",
					 "Class intervals remain unchanged over the 24h and for every French or Canadian region.",
					 "Class intervals remain the same over the 24 hours for all groups of this indicator and for every French region.",
					 "Same class intervals apply over the 24 period for all groups of this indicator."];
var textLegProp = "Circle proportionality remain unchanged for all maps of the same region.";
var textLegFlow = ["Circle proportionality remain unchanged for all maps of the same region.",
				   "Main link thickness represents people flow between districts where they are located and their districts of residence."];
var textLeg = ["Mean:",
			   " or less",
			   "% to ",
			   " or more"];


var Xgraph = ["4am", "6am", "8am", "10am", "12am", "2pm", "4pm", "6pm", "8pm", "10pm", "12pm", "2am"];

var sliderValue = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

var sliderValueDomX = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

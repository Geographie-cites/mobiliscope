// Stockage des nuanciers pour les cartes choroplètes (key = indmod)
// du plus clair au plus foncé ; 
// la dernière couleur correspond à la teinte associée à la modalité (pour les graphiques)
// la position des couleurs n'est pas modifiable
var colors = {
	// Pop totale
	pop0:["#e6e1d0", "#cfcad2", "#b7b4d3", "#9f9ed3", "#8788d4", "#6e71d5", "#525ad7", "#000093"], 
	// Résidents/Non-résidents
	res2:["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"],
	res1:["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"],
	//Groupe d'âge 
	age4:["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"],
	age3:["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"],
	age2:["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"],
	age1:["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"],
	//Groupe d'âge Québec
	ageqc4:["#fbf9e2", "#dcd3bd", "#bdb099", "#9f8d76", "#816c53"],
	ageqc3:["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"],
	ageqc2:["#fbf9e2", "#ffd3b9", "#fead8e", "#f68860", "#e9621d"],
	ageqc1:["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#da0846"],
	// Sexe
	sex2:["#7f7f7f", "#a5a5a5", "#d5e8ce", "#add6b9", "#47b291"],
	sex1:["#7f7f7f", "#a5a5a5", "#d3cee0", "#9689c9", "#4e3e8e"],
	// Compo du ménage fr
	strmfr4:["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"],
	strmfr3:["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#e81c58"],
	strmfr2:["#fdeae7", "#fbd6df", "#f9c1d8", "#f7acd0", "#f37fbc"],
	strmfr1:["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"],
	// Compo du ménage Québec
	strmqc3:["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"],
	strmqc2:["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#e81c58"],
	strmqc1:["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"],
	// Compo du ménage Amé lat
	strm5:["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"],
	strm4:["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"],
	strm3:["#fbf9e2", "#fec7bb", "#f99494", "#ed5f6e", "#e81c58"],
	strm2:["#fdeae7", "#fbd6df", "#f9c1d8", "#f7acd0", "#f37fbc"],
	strm1:["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"],
	// Niveau d'éducation
	cleduc4:["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"],
	cleduc3:["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"],
	cleduc2:["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"],
	cleduc1:["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"],
	educmen4:["#f8f8df", "#efc7bf", "#e297a0", "#d26683", "#c02867"],
	educmen3:["#f8f8df", "#fed5b7", "#fdb38d", "#f7915f", "#ee7319"],
	educmen2:["#f8f8df", "#cce5c5", "#9ed2ab", "#69bf92", "#00ad78"],
	educmen1:["#f8f8df", "#cfd4d3", "#a5b1c6", "#7b8fb9", "#4c6fad"],
	// Revenu Paris
	rev4:["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"],
	rev3:["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"],
	rev2:["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"],
	rev1:["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"],
	// Revenu Québec
	revqc4:["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"],
	revqc3:["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"],
	revqc2:["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"],
	revqc1:["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"],
	revqc5:["#fbf9e2", "#b4afa5", "#908983", "#6c6562", "#4b4443"],
	// Revenu Amé lat
	reval5:["#fff1de", "#dbb49c", "#b0605d", "#7f4341", "#7a1828"], 
	reval4:["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"],
	reval3:["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"],
	reval2:["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"],
	reval1:["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"],
	// CSP fr
	cs5:["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"],
	cs4:["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"],
	cs3:["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"],
	cs2:["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"],
	cs1:["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"],
	cspmen5:["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"],
	cspmen4:["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"],
	cspmen3:["#f8f8df", "#c8dcb6", "#97c28d", "#63a762", "#198e32"],
	cspmen2:["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"],
	cspmen1:["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"],
	// CSP Amé lat
	cso4:["#f8f8df", "#edc1b2", "#db8c86", "#c5555b", "#a9002f"],
	cso3:["#f8f8df", "#f3dfb8", "#ebc78e", "#e1af5f", "#d59900"],
	cso2:["#f8f8df", "#cadacb", "#9abdb7", "#65a1a4", "#008792"],
	cso1:["#f8f8df", "#d2cdd8", "#aea3cf", "#8b79c5", "#6c4dc1"],
	// Informalité pro Amé lat
	inf2:["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"],
	inf1:["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"],
	// Occupation principale
	occ5:["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"],
	occ4:["#fefbe1", "#e3d9c0", "#c9b9a0", "#af9a80", "#957c60"],
	occ3:["#fefbe1", "#d4d4d2", "#abb0c2", "#828cb2", "#586aa3"],
	occ2:["#fefbe1", "#e4ebc2", "#cadba1", "#b1cb7f", "#97bc59"],
	occ1:["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"],
	// Département de résidence idf
	dep5:["#fef6df", "#c7c2bb", "#929099", "#5f6178", "#2d365e"],
	dep4:["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"],
	dep3:["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"],
	dep2:["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"],
	dep1:["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"],
	// Strate socio-éco Bogota
	sse4:["#fbf9e2", "#fec9bc", "#f99a96", "#ed6970", "#dc2c48"],
	sse3:["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"],
	sse2:["#fbf9e2", "#dce8bc", "#bdd895", "#9ec769", "#7fb72c"],
	sse1:["#fbf9e2", "#cfddcb", "#a2c1b5", "#71a79f", "#348e89"],
	// couronne de résidence Amé lat 
	zona4:["#fef6df", "#ced6c9", "#9db7b3", "#679a9d", "#167e88"],
	zona3:["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"],
	zona2:["#fef6df", "#ffd9c0", "#fcbda0", "#f7a180", "#ee865c"],
	zona1:["#fef6df", "#e5c4c4", "#cb94aa", "#b26290", "#9a2679"],
	// ZAU de résidence fr
	resarea3:["#fef6df", "#fec57e", "#efa25f", "#de813c", "#cb5f00"],
	resarea2:["#fef6df", "#afe8e2", "#86ccc5", "#57b2a8", "#00998b"],
	resarea1:["#fef7e1", "#bad3e7", "#6998ca", "#4273af", "#005099"],
	// résidence en/hors qpv 
	qpv2:["#fef6df", "#fecc8d", "#f9ad6c", "#f28e47", "#e77000"],
	qpv1:["#fef7e1", "#dde9e6", "#b9dbea", "#90ceec", "#58c2ef"],
	// Statut d'occupation du logement Amé lat
	log3:["#fbf9e2", "#ffd7c3", "#ffb7a4", "#ff9684", "#fe7562"],
	log2:["#fbf9e2", "#d4ced0", "#aea4bd", "#897bab", "#67539b"],
	log1:["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"],
	// Activité
	act6:["#fefbe1", "#ffcfc4", "#fba3a6", "#f2758a", "#e4406e"], // Amé lat
	act5:["#fbf9e2", "#dbc7c0", "#ba989e", "#9b697f", "#7e3a61"],
	act4:["#fbf9e2", "#ffd1be", "#fca99a", "#f48075", "#e7564d"],
	act3:["#fbf9e2", "#d2e1d5", "#a7cac7", "#78b4ba", "#379fac"],
	act2:["#fbf9e2", "#dbe5c6", "#bad2aa", "#99bf8e", "#76ad71"],
	act1:["#fbf9e2", "#c2c1c3", "#8b8da5", "#565b89", "#17297c"],
	// mode de transport
	mode4:["#fefbe1", "#ffebbe", "#ffdb97", "#fccc68", "#f8bd08"], // Bogota
	mode3:["#fbf9e2", "#9fd3bb", "#80b99f", "#60a082", "#3d8966"],
	mode2:["#fbf9e2", "#dcc1d1", "#d198b7", "#c36f9e", "#b44185"],
	mode1:["#fbf9e2", "#c0d9dc", "#94bfcb", "#63a5ba", "#008eaa"]
}

// Réservé aux popups du menu geoviz (key: ind)
// possibilité de changer la position des couleurs pour être en raccord avec le texte popup
var gamme = 
{
	pop:["#000093"],
    res:["#97bc59", "#f8bd08"],

    age:["#da0846", "#e9621d", "#67539b", "#816c53"],
    ageqc:["#da0846", "#e9621d", "#67539b", "#816c53"],
    sex:["#47b291", "#4e3e8e"],
    strm:["#7fb72c", "#f37fbc", "#e81c58", "#58c2ef", "#4c6fad"],
    strmfr:["#7fb72c", "#f37fbc", "#e81c58", "#4c6fad"],
    strmqc:["#7fb72c", "#e81c58", "#4c6fad"],

    cleduc:["#4b6dac", "#17a97a", "#ec721b", "#c02767"], 
    educmen:["#4b6dac", "#17a97a", "#ec721b", "#c02767"],
    rev:["#348e89", "#7fb72c", "#fe7562", "#dc2c48"],
    revqc:["#348e89", "#7fb72c", "#fe7562", "#dc2c48", "#4b4443"],
    reval:["#348e89", "#7fb72c", "#fe7562", "#dc2c48", "#7a1828"],
    cs:["#008792", "#624f98", "#188e31", "#d69b01", "#ab0f31"],
    cspmen:["#008792", "#624f98", "#188e31", "#d69b01", "#ab0f31"],
    cso:["#624f98", "#008791", "#d69b01", "#ab0f31"],
    inf:["#7fb72c", "#9a2679"],
    occ:["#e4406e", "#97bc59", "#586aa3", "#957c60", "#f8bd08"],

    dep:["#9a2679", "#ee865c", "#58c2ef", "#167e88", "#2d365e"],
    resarea:["#cb5f00", "#00998b", "#005099"],                       
    zona:["#167e88", "#58c2ef", "#ec7646", "#9a2679"], 
    qpv:["#e77000", "#58c2ef"],
    sse:["#348e89", "#7fb72c", "#fe7562", "#dc2c48"],
    log:["#fe7562", "#67539b", "#7e3a61"],

    act:["#17297c", "#76ad71", "#379fac", "#e7564d", "#7e3a61", "#e4406e"],
    mode:["#3d8966", "#b44185", "#008eaa", "#f8bd08"]
}


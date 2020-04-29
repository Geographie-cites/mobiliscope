
Popular / About
KoGor’s Block 5685876
Updated January 11, 2017
Russia choropleth example
Open
index.html
#

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Accidents on the Road - Choropleth</title>
  <script type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script>
  <script type="text/javascript" src="http://d3js.org/queue.v1.min.js"></script>
  <script type="text/javascript" src="http://d3js.org/topojson.v0.min.js"></script>
  <!-- <script type="text/javascript" src="http://d3js.org/topojson.v1.min.js"></script> -->
</head>
<style>

path {
  stroke:white;
  stroke-width: 1px;
}

body {
  font-family: Arial, sans-serif;
}

.city {
  font: 10px sans-serif;
  font-weight: bold;
}

.legend {
  font-size: 12px;
}

div.tooltip {   
  position: absolute;           
  text-align: center;           
  width: 150px;                  
  height: 25px;                 
  padding: 2px;             
  font-size: 10px;     
  background: #FFFFE0;
  border: 1px;      
  border-radius: 8px;           
  pointer-events: none;         
}        
</style>
<body>
  <script type="text/javascript">
  var width = 960,
  height = 500;

  // Setting color domains(intervals of values) for our map

  var color_domain = [50, 150, 350, 750, 1500]
  var ext_color_domain = [0, 50, 150, 350, 750, 1500]
  var legend_labels = ["< 50", "50+", "150+", "350+", "750+", "> 1500"]              
  var color = d3.scale.threshold()
  .domain(color_domain)
  .range(["#adfcad", "#ffcb40", "#ffba00", "#ff7d73", "#ff4e40", "#ff1300"]);

  var div = d3.select("body").append("div")   
  .attr("class", "tooltip")               
  .style("opacity", 0);

  var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .style("margin", "10px auto");

  var projection = d3.geo.albers()
  .rotate([-105, 0])
  .center([-10, 65])
  .parallels([52, 64])
  .scale(700)
  .translate([width / 2, height / 2]);

  var path = d3.geo.path().projection(projection);

  //Reading map file and data

  queue()
  .defer(d3.json, "/d/5685937/russia_1e-7sr.json")
  .defer(d3.csv, "Accidents.csv")
  .await(ready);

  //Start of Choropleth drawing

  function ready(error, map, data) {
   var rateById = {};
   var nameById = {};

   data.forEach(function(d) {
    rateById[d.RegionCode] = +d.Deaths;
    nameById[d.RegionCode] = d.RegionName;
  });

  //Drawing Choropleth

  svg.append("g")
  .attr("class", "region")
  .selectAll("path")
  .data(topojson.object(map, map.objects.russia).geometries)
  //.data(topojson.feature(map, map.objects.russia).features) <-- in case topojson.v1.js
  .enter().append("path")
  .attr("d", path)
  .style("fill", function(d) {
    return color(rateById[d.properties.region]); 
  })
  .style("opacity", 0.8)

  //Adding mouseevents
  .on("mouseover", function(d) {
    d3.select(this).transition().duration(300).style("opacity", 1);
    div.transition().duration(300)
    .style("opacity", 1)
    div.text(nameById[d.properties.region] + " : " + rateById[d.properties.region])
    .style("left", (d3.event.pageX) + "px")
    .style("top", (d3.event.pageY -30) + "px");
  })
  .on("mouseout", function() {
    d3.select(this)
    .transition().duration(300)
    .style("opacity", 0.8);
    div.transition().duration(300)
    .style("opacity", 0);
  })
  
   // Adding cities on the map

  d3.tsv("cities.tsv", function(error, data) {
    var city = svg.selectAll("g.city")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "city")
    .attr("transform", function(d) { return "translate(" + projection([d.lon, d.lat]) + ")"; });

    city.append("circle")
    .attr("r", 3)
    .style("fill", "lime")
    .style("opacity", 0.75);

    city.append("text")
    .attr("x", 5)
    .text(function(d) { return d.City; });
  });
  
  }; // <-- End of Choropleth drawing
 
  //Adding legend for our Choropleth

  var legend = svg.selectAll("g.legend")
  .data(ext_color_domain)
  .enter().append("g")
  .attr("class", "legend");

  var ls_w = 20, ls_h = 20;

  legend.append("rect")
  .attr("x", 20)
  .attr("y", function(d, i){ return height - (i*ls_h) - 2*ls_h;})
  .attr("width", ls_w)
  .attr("height", ls_h)
  .style("fill", function(d, i) { return color(d); })
  .style("opacity", 0.8);

  legend.append("text")
  .attr("x", 50)
  .attr("y", function(d, i){ return height - (i*ls_h) - ls_h - 4;})
  .text(function(d, i){ return legend_labels[i]; });

  </script>
</body>
</html>

Accidents.csv
#

Rtype,RegionCode,RegionName,CarAccidents,Deaths
federation,Russian Federation,Российская Федерация,203597,27991
fregion,RU-BEL,Белгородская область,1369,285
fregion,RU-BRY,Брянская область,1449,238
fregion,RU-VLA,Владимирская область,3157,450
fregion,RU-VOR,Воронежская область,3920,615
fregion,RU-IVA,Ивановская область,2018,187
fregion,RU-KLU,Калужская область,2140,368
fregion,RU-KOS,Костромская область,873,80
fregion,RU-KRS,Курская область,2060,307
fregion,RU-LIP,Липецкая область,2225,271
fregion,RU-MOW,Москва,12010,810
fregion,RU-MOS,Московская область,9241,1706
fregion,RU-ORL,Орловская область,1350,180
fregion,RU-RYA,Рязанская область,2464,370
fregion,RU-SMO,Смоленская область,1384,219
fregion,RU-TAM,Тамбовская область,2057,248
fregion,RU-TVE,Тверская область,2077,301
fregion,RU-TUL,Тульская область,2621,386
fregion,RU-YAR,Ярославская область,2078,284
fdistrict,Central,Центральный округ,54493,7305
fregion,RU-KR,Республика Карелия,861,110
fregion,RU-KO,Республика Коми,1675,134
fregion,RU-ARK,Архангельская область,2133,214
fregion,RU-VLG,Вологодская область,1986,207
fregion,RU-KGD,Калининградская область,1327,193
fregion,RU-LEN,Ленинградская область,3576,642
fregion,RU-SPE,Санкт-Петербург,8288,445
fregion,RU-MUR,Мурманская область,969,85
fregion,RU-NGR,Новгородская область,1470,216
fregion,RU-PSK,Псковская область,1635,247
fregion,RU-NEN,Ненецкий авт.округ,43,4
fdistrict,Northwestern,Северо-Западный округ,23963,2497
fregion,RU-AD,Республика Адыгея,540,111
fregion,RU-KL,Республика Калмыкия,692,99
fregion,RU-KDA,Краснодарский край,6710,1190
fregion,RU-AST,Астраханская область,1763,168
fregion,RU-VGG,Волгоградская область,3052,432
fregion,RU-ROS,Ростовская область,6183,823
fdistrict,Southern,Южный округ,18940,2823
fregion,RU-DA,Республика Дагестан,1419,510
fregion,RU-IN,Республика Ингушетия,235,88
fregion,RU-KB,Кабардино-Балкарская Республика,837,212
fregion,RU-KC,Карачаево-Черкесская Республика,642,133
fregion,RU-SE,Республика Северная Осетия,769,156
fregion,RU-CE,Чеченская Республика,387,210
fregion,RU-CE & RU-IN,Чеченская Республика и Республика Ингушетия,652,298
fregion,RU-STA,Ставропольский край,2912,504
fdistrict,Northcaucasian,Северо-Кавказский округ,7201,1813
fregion,RU-BA,Республика Башкортостан,5115,707
fregion,RU-ME,Республика Марий Эл,1113,151
fregion,RU-MO,Республика Мордовия,1104,219
fregion,RU-TA,Республика Татарстан,5483,695
fregion,RU-UD,Удмуртская Республика,1524,269
fregion,RU-CU,Чувашская Республика,2061,265
fregion,RU-PER,Пермский край,3898,596
fregion,RU-KIR,Кировская область,2093,241
fregion,RU-NIZ,Нижегородская область,5215,706
fregion,RU-ORE,Оренбургская область,2449,369
fregion,RU-PNZ,Пензенская область,2251,296
fregion,RU-SAM,Самарская область,4600,591
fregion,RU-SAR,Саратовская область,2605,438
fregion,RU-ULY,Ульяновская область,2199,212
fdistrict,Volga,Приволжский округ,41710,5755
fregion,RU-KGN,Курганская область,1410,235
fregion,RU-SVE,Свердловская область,5387,836
fregion,RU-TYU,Тюменская область,3431,381
fregion,RU-CHE,Челябинская область,4924,641
fregion,RU-KHM,Ханты-мансийский авт.округ,2462,308
fregion,RU-YAN,Ямало-ненецкий авт.округ,743,81
fdistrict,Urals,Уральский округ,18357,2482
fregion,RU-AL,Республика Алтай,436,84
fregion,RU-BU,Республика Бурятия,1463,237
fregion,RU-TY,Республика Тыва,337,145
fregion,RU-KK,Республика Хакасия,1170,149
fregion,RU-ALT,Алтайский край,3778,407
fregion,RU-ZAB,Забайкальский край,1287,277
fregion,RU-KYA,Красноярский край,5135,620
fregion,RU-IRK,Иркутская область,3420,529
fregion,RU-KEM,Кемеровская область,3913,562
fregion,RU-NVS,Новосибирская область,2637,453
fregion,RU-OMS,Омская область,3377,375
fregion,RU-TOM,Томская область,952,126
fdistrict,Siberia,Сибирский округ,27905,3964
fregion,RU-SA,Республика Саха (Якутия),932,134
fregion,RU-PRI,Приморский край,4370,497
fregion,RU-KAM,Камчатский край,655,75
fregion,RU-KHA,Хабаровский край,2203,233
fregion,RU-AMU,Амурская область,1367,192
fregion,RU-MAG,Магаданская область,314,49
fregion,RU-SAK,Сахалинская область,760,120
fregion,RU-YEV,Еврейская автономная область,403,51
fregion,RU-CHU,Чукотский авт.округ,24,1
fdistrict,Far_Eastern,Дальневосточный округ,11028,1352

cities.tsv
#

City	lat	lon
Москва	55.7522200	37.6155600
Санкт-Петербург	59.8944400	30.2641700
Новосибирск	55.0411100	82.9344400
Екатеринбург	56.8575000	60.6125000
Нижний Новгород	56.3286700	44.0020500
Самара	53.2000000	50.1500000
Казань	55.7877000	49.1248000
Омск	55.0000000	73.4000000
Челябинск	55.1544400	61.4297200
Ростов-на-Дону	47.2363900	39.7138900
Уфа	54.7750000	56.0375000
Волгоград	48.8047200	44.5858300
Пермь	58.0000000	56.2500000
Красноярск	56.0097200	92.7916700
Воронеж	51.6699000	39.1922700

README.md
#

Смертность на дорогах России за 2012 год по официальным данным ГИБДД. Инфографика создавалась как пример создания SVG картограммы для веба. Статью о создании можете найти на [Хабрахабре](http://habrahabr.ru/post/181766/).

LICENSE
#
This block appears to have no license. Please contact the author to request a license.

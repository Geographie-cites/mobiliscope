#==============================================================================#
#                     Construction de la BD géo Mobiliscope
#
#
# Description : Construction des secteurs de Santiago par agrégation des zonas
#               
#
# AD, juin 2021
#==============================================================================#


# directory
setwd("~/git/mobiliscope/ODdata_processing/v4.1_online/Preprocessing_LatinAmericaCities/")

# Biblio
library(tidyverse)
library(tidylog)
library(sf)
library(mapview)



# load data source Santiago ----
require(readxl)
options(scipen = 9999)
## déplacement
depl <- read_excel("data_source/Santiago/Act_recolec_STU_IX _EODStgo_2012_Encuesta_hogares/extractionAccess/Viaje.xlsx")
## personne
pers <- read_excel("data_source/Santiago/Act_recolec_STU_IX _EODStgo_2012_Encuesta_hogares/extractionAccess/Persona.xlsx")
## ménage
men <- read_excel("data_source/Santiago/Act_recolec_STU_IX _EODStgo_2012_Encuesta_hogares/extractionAccess/Hogar.xlsx")

## zonas
zonas <- st_read("data_source/Santiago/eod2012_utm19s/eod2012_utm19sPolygon.shp")
length(unique(zonas$ID))
## comunas
com <- st_read("data_source/Santiago/Administratif/comunas.shp")

## check geom
sum(st_is_valid(zonas)==FALSE)

length(unique(zonas$ID))


# Effectif par zonas ----
## toutes les zonas mentionnées dans la BD numérique ont une géométrie :
setdiff(men$Zona, zonas$ID)
## codes des zonas non enquêtées :
setdiff(zonas$ID, men$Zona)

## compter le nombre de personne de 16 + par zona
pers16_zona <- pers %>% 
  left_join(., select(men, Hogar, Zona, Comuna)) %>% 
  filter(AnoNac<=1996) %>% 
  filter(!is.na(Factor_LaboralNormal)) %>% 
  group_by(Zona) %>% 
  summarize(nByZona = n_distinct(Persona)) 

zc <- men %>% 
  select(Zona, Comuna) %>% 
  filter(!duplicated(Zona))

## compter par comuna
pers16_zona <- pers16_zona %>% 
  left_join(., zc) %>% 
  group_by(Comuna) %>% 
  mutate(nByCom = sum(nByZona)) %>% 
  ungroup()

rm(zc)

## joindre le décompte à la couche
zonas <- zonas %>% 
  left_join(., select(pers16_zona, ID = Zona, nByZona, nByCom), by = "ID")


# Mapview ----
### transfo shape
zonaspt <- st_point_on_surface(zonas)
zonaspt <- zonaspt %>% filter(!is.na(nByZona))

mapview(zonas, alpha.regions = 0, aplha = 1) + 
  # mapview(com, alpha.regions = 0, alpha = 1) +
  mapview(zonaspt, cex = "nByZona") 


# Regroupement des zonas ----
# selon leur effectif enquêté, leur localisation et leur caractéristique sociale
# cf document TO DO
# Création des libellés des secteurs dans le même temps

# code secteur = code de la zona la plus peuplée
zonas <- zonas %>% 
  mutate(SECTEUR = case_when(ID %in% c(727) ~ "727",
                             ID %in% c(748:752, 756:757) ~ "751",
                             ID %in% c(747, 753:755) ~ "753",
                             ID %in% c(783, 784, 787, 788, 792) ~ "783",
                             ID %in% c(785, 786, 789, 790, 791) ~ "785",
                             ID %in% c(820, 827) ~ "820",
                             ID %in% c(818, 819, 821:826, 828:829) ~ "821",
                             ID %in% c(830:837) ~ "837",
                             ID %in% c(831:836) ~ "831",
                             ID %in% c(838, 843, 846) ~ "838",
                             ID %in% c(839:842, 844:845, 847) ~ "839",
                             ID %in% c(738) ~ "738",
                             ID %in% c(728:737, 739:741, 743:746) ~ "737",
                             ID %in% c(324, 327, 330, 331) ~ "327",
                             ID %in% c(325, 326, 328, 329, 332:336, 742) ~ "325",
                             ID %in% c(806, 807, 809, 810, 813:815) ~ "806",
                             ID %in% c(804, 805, 808, 811, 812, 816, 817) ~ "805",
                             ID %in% c(856, 857, 861, 862, 863:866) ~ "857",
                             ID %in% c(858, 859) ~ "858",
                             ID == 860 ~ "860",
                             ID == 799 ~ "799",
                             ID %in% c(793:798, 800:803) ~ "793",
                             ID == 848 ~ "848",
                             ID %in% c(849:855) ~ "849",
                             ID %in% c(21:23, 34, 41) ~ "34",
                             ID %in% c(12, 13, 17:20) ~ "17",
                             ID %in% c(5, 7, 9:11) ~ "9",
                             ID %in% c(1:4, 6, 8, 39, 40) ~ "1",
                             ID %in% c(32, 33, 35) ~ "32",
                             ID %in% c(48:50) ~ "50",
                             ID %in% c(30:31, 36:38, 42, 47, 51, 52) ~ "51",
                             ID %in% c(24:29, 43:46) ~ "28",
                             ID %in% c(14:16) ~ "16",
                             ID %in% c(157, 160:167) ~ "163",
                             ID %in% c(158:159, 168:171) ~ "171",
                             ID %in% c(583, 585, 586, 588:596, 600:601) ~ "596",
                             ID %in% c(584, 587, 590, 597:599) ~ "584",
                             ID %in% c(581, 582) ~ "581",
                             ID %in% c(578:580) ~ "580",
                             ID %in% c(83:86, 91, 96, 97, 102) ~ "84",
                             ID %in% c(93, 94, 100, 101) ~ "93",
                             ID %in% c(87, 88, 92, 95) ~ "87",
                             ID %in% c(89, 90, 98, 99) ~ "89",
                             ID %in% c(494, 495, 501, 511, 515, 516) ~ "495",
                             ID %in% c(500, 502, 503, 510) ~ "502",
                             ID %in% c(497:499, 506, 515) ~ "497",
                             ID %in% c(496, 507, 508) ~ "496",
                             ID %in% c(504, 505, 509, 512:514) ~ "514",
                             ID %in% c(623, 624, 631:634, 637) ~ "623",
                             ID %in% c(625, 630, 635, 636, 638) ~ "630",
                             ID %in% c(619:622, 626:629) ~ "619",
                             ID %in% c(419:421, 423, 427, 428) ~ "423",
                             ID %in% c(424, 445:448) ~ "424",
                             ID %in% c(425, 429:431, 437) ~ "437",
                             ID %in% c(422, 438, 439, 441:444) ~ "422",
                             ID %in% c(426, 436, 440) ~ "436",
                             ID %in% c(432:435) ~ "434",
                             ID %in% c(361:363, 365, 366) ~ "363",
                             ID %in% c(360, 367, 372, 374:377) ~ "367",
                             ID %in% c(368:370, 373) ~ "370",
                             ID %in% c(364, 371) ~ "364",
                             ID %in% c(640, 642:644) ~ "644",
                             ID %in% c(639, 641, 645:648) ~ "648",
                             ID %in% c(649:652) ~ "651",
                             ID %in% c(449, 450, 455, 457:460) ~ "459",
                             ID %in% c(456, 461, 462, 464, 465) ~ "461",
                             ID %in% c(451:454, 463) ~ "463",
                             ID %in% c(55:57, 66:68) ~ "55",
                             ID %in% c(53, 54, 58:65) ~ "53",
                             ID %in% c(123, 135, 136, 139, 140) ~ "123",
                             ID %in% c(130, 132, 133, 137, 141, 142) ~ "142",
                             ID %in% c(120:122, 124:129, 131, 134, 138) ~ "138",
                             ID %in% c(572:574, 577) ~ "577",
                             ID %in% c(557, 564:567, 569:571, 575, 576) ~ "557",
                             ID %in% c(558:563, 568) ~ "563",
                             ID %in% c(613, 617, 618) ~ "618",
                             ID %in% c(610, 612, 616) ~ "612",
                             ID %in% c(602:609, 611, 614, 615) ~ "615",
                             ID %in% c(172, 177, 181, 184:188) ~ "187",
                             ID %in% c(173:176, 178:180, 182, 183) ~ "180",
                             ID %in% c(340, 341, 343:347) ~ "346",
                             ID %in% c(337:339, 342) ~ "339",
                             ID %in% c(353:359) ~ "356",
                             ID %in% c(348:352) ~ "351",
                             ID %in% c(77:79) ~ "77",
                             ID %in% c(69:73, 76) ~ "73",
                             ID %in% c(74, 75, 80:82) ~ "82",
                             ID == 544 ~ "544",
                             ID %in% c(545, 555) ~ "545",
                             ID %in% c(542, 546:549, 554) ~ "547",
                             ID %in% c(553, 556) ~ "556",
                             ID %in% c(550:552) ~ "552",
                             ID == 543 ~ "543",
                             ID %in% c(143, 150, 151, 154) ~ "150",
                             ID %in% c(144:149, 152, 153, 155, 156) ~ "148",
                             ID %in% c(669:671, 673:676, 679:681, 684) ~ "681",
                             ID %in% c(666:668, 672, 677, 678, 682, 683) ~ "667",
                             ID %in% c(270, 274:277, 286) ~ "274",
                             ID %in% c(268, 271:273, 278:280, 283:285) ~ "279",
                             ID %in% c(265:267, 269, 281, 282) ~ "282",
                             ID %in% c(207, 214, 217, 231) ~ "207",
                             ID %in% c(208, 209) ~ "209",
                             ID %in% c(210, 211, 233) ~ "211",
                             ID %in% c(218, 229, 230) ~ "229",
                             ID %in% c(192, 195, 204) ~ "195",
                             ID %in% c(191, 194, 205) ~ "194",
                             ID %in% c(189, 190, 193, 215, 216, 228) ~ "216",
                             ID %in% c(196, 213, 225:227) ~ "196",
                             ID %in% c(197, 198, 206) ~ "206",
                             ID %in% c(199, 200, 223, 224) ~ "223",
                             ID %in% c(201:203, 212, 221, 222, 232) ~ "201",
                             ID %in% c(219, 220) ~ "220",
                             ID %in% c(471:473) ~ "472",
                             ID %in% c(469, 470, 474, 488) ~ "474",
                             ID %in% c(475:477, 487, 489) ~ "489",
                             ID %in% c(486, 467, 468, 482, 483) ~ "486",
                             ID %in% c(466, 484, 485, 490:493) ~ "491",
                             ID %in% c(478:481) ~ "478",
                             ID == 287 ~ "287",
                             ID %in% c(288:290) ~ "288",
                             ID %in% c(304, 305) ~ "305",
                             ID %in% c(306, 307, 312, 320, 321) ~ "312",
                             ID %in% c(291, 292, 296) ~ "296",
                             ID %in% c(297, 299, 300, 313, 317, 319) ~ "297",
                             ID %in% c(293, 295, 303, 322, 323) ~ "293",
                             ID %in% c(294, 308, 309) ~ "294",
                             ID %in% c(298, 301, 302, 310, 311, 314:316, 318) ~ "302",
                             ID %in% c(694, 709, 723, 725, 726) ~ "725",
                             ID %in% c(695, 698, 699) ~ "699",
                             ID %in% c(702, 703, 724) ~ "703",
                             ID %in% c(700, 701) ~ "701",
                             ID %in% c(704, 710, 722) ~ "710",
                             ID %in% c(711:716) ~ "713",
                             ID %in% c(688, 696) ~ "696",
                             ID == 689 ~ "689",
                             ID == 697 ~ "697",
                             ID %in% c(687, 690, 705) ~ "705",
                             ID %in% c(685, 686) ~ "685",
                             ID %in% c(692, 693, 706, 707) ~ "706",
                             ID %in% c(691, 708, 717:721) ~ "719",
                             ID == 247 ~ "247",
                             ID %in% c(240:242, 248) ~ "248",
                             ID %in% c(238, 239, 243, 246) ~ "243",
                             ID %in% c(234:237, 244, 245, 249) ~ "244",
                             ID %in% c(660:664) ~ "662",
                             ID %in% c(653:659, 665) ~ "655",
                             ID %in% c(253:257, 262) ~ "253",
                             ID %in% c(263, 264) ~ "264",
                             ID == 260 ~ "260",
                             ID %in% c(252, 258, 259, 261) ~ "261",
                             ID %in% c(250, 251) ~ "250",
                             ID == 113 ~ "113",
                             ID %in% c(106, 108, 109, 118, 119) ~ "118",
                             ID %in% c(105, 107, 114, 115) ~ "115",
                             ID %in% c(110:112) ~ "112",
                             ID %in% c(103, 104, 116, 117) ~ "116",
                             ID == 770 ~ "770",
                             ID == 763 ~ "763",
                             ID %in% c(761, 762) ~ "762",
                             ID %in% c(764:766, 777, 778, 781, 782) ~ "764",
                             ID %in% c(758, 767, 779, 780) ~ "758",
                             ID %in% c(759, 760, 772) ~ "772",
                             ID %in% c(771, 773) ~ "773",
                             ID %in% c(768, 769, 774:776) ~ "769",
                             ID %in% c(394, 395, 397, 398) ~ "398",
                             ID == 386 ~ "386",
                             ID == 385 ~ "385",
                             ID == 388 ~ "388",
                             ID == 387 ~ "387",
                             ID == 418 ~ "418",
                             ID %in% c(382, 390:392) ~ "391",
                             ID == 415 ~ "415",
                             ID %in% c(412:414) ~ "414",
                             ID %in% c(378, 416, 417) ~ "417",
                             ID == 407 ~ "407",
                             ID %in% c(389, 393, 396) ~ "389",
                             ID %in% c(383, 399:401, 406) ~ "399",
                             ID %in% c(384, 402:405) ~ "402",
                             ID %in% c(379:381, 408:411) ~ "380",
                             ID %in% c(517, 524, 536:541) ~ "540",
                             ID == 522 ~ "522",
                             ID %in% c(527, 534) ~ "534",
                             ID %in% c(518:520, 528, 535) ~ "535",
                             ID %in% c(525, 526) ~ "525",
                             ID %in% c(521, 523, 531) ~ "523",
                             ID %in% c(529, 530, 532, 533) ~ "529",
  ),
  
  LIBSEC = case_when(ID %in% c(727) ~ "PIRQUE",
                     ID %in% c(748:752, 756:757) ~ "BAZUCO",
                     ID %in% c(747, 753:755) ~ "LAMPA",
                     ID %in% c(783, 784, 787, 788, 792) ~ "BUINE NORTE",
                     ID %in% c(785, 786, 789, 790, 791) ~ "BUINE SUR",
                     ID %in% c(820, 827) ~ "TALAGANTE PONIENTE",  
                     ID %in% c(818, 819, 821:826, 828:829) ~ "TALAGANTE ORIENTE",
                     ID %in% c(830:837) ~ "EL MONTE ORIENTE",
                     ID %in% c(831:836) ~ "EL MONTE PONIENTE",
                     ID %in% c(838, 843, 846) ~ "ISLITA",
                     ID %in% c(839:842, 844:845, 847) ~ "ISLA DE MAIPO",
                     ID %in% c(738) ~ "COLINA CENTRO",
                     ID %in% c(728:737, 739:741, 743:746) ~ "COLINA RESTO",
                     ID %in% c(324, 327, 330, 331) ~ "LO BARNECHEA",
                     ID %in% c(325, 326, 328, 329, 332:336, 742) ~ "LA DEHESA",
                     ID %in% c(806, 807, 809, 810, 813:815) ~ "MELIPILLA SUR",
                     ID %in% c(804, 805, 808, 811, 812, 816, 817) ~ "MELIPILLA NORTE",
                     ID %in% c(856, 857, 861, 862, 863:866) ~ "PEÑAFLOR RESTO",
                     ID %in% c(858, 859) ~ "PEÑAFLOR MALLOCO",   
                     ID == 860 ~ "PEÑAFLOR MACKENNA", 
                     ID == 799 ~ "CALERA DE TANGO CENTRO",
                     ID %in% c(793:798, 800:803) ~ "CALERA DE TANGO RESTO",
                     ID == 848 ~ "PADRE HURTADO CENTRO",
                     ID %in% c(849:855) ~ "PADRE HURTADO RESTO",
                     ID %in% c(21:23, 34, 41) ~ "SANTIAGO BELLAS ARTES",
                     ID %in% c(12, 13, 17:20) ~ "SANTIAGO CATEDRAL",
                     ID %in% c(5, 7, 9:11) ~ "SANTIAGO BRASIL",
                     ID %in% c(1:4, 6, 8, 39, 40) ~ "SANTIAGO BALMACEDA",
                     ID %in% c(32, 33, 35) ~ "SANTIAGO SAN ISIDRO",
                     ID %in% c(48:50) ~ "SANTIAGO PARQUE ALMAGRO",
                     ID %in% c(30:31, 36:38, 42, 47, 51, 52) ~ "SANTIAGO SUR ORIENTE",
                     ID %in% c(24:29, 43:46) ~ "SANTIAGO CLUB HÍPICO",
                     ID %in% c(14:16) ~ "SANTIAGO REPÚBLICA",
                     ID %in% c(157, 160:167) ~ "INDEPENDENCIA ORIENTE",
                     ID %in% c(158:159, 168:171) ~ "INDEPENDENCIA PONIENTE",
                     ID %in% c(583, 585, 586, 588:596, 600:601) ~ "RECOLETA SUR",
                     ID %in% c(584, 587, 590, 597:599) ~ "RECOLETA NORORIENTE",
                     ID %in% c(581, 582) ~ "RECOLETA, MUNICIPALIDAD",
                     ID %in% c(578:580) ~ "RECOLETA, ZAPADORES",
                     ID %in% c(83:86, 91, 96, 97, 102) ~ "CONCHALÍ VIVACETA",
                     ID %in% c(93, 94, 100, 101) ~ "CONCHALÍ CARDENAL CARO",
                     ID %in% c(87, 88, 92, 95) ~ "CONCHALÍ LA PALMILLA",
                     ID %in% c(89, 90, 98, 99) ~ "CONCHALÍ ESTADIO MUNICIPAL",
                     ID %in% c(494, 495, 501, 511, 515, 516) ~ "PROVIDENCIA BARRIO ITALIA",
                     ID %in% c(500, 502, 503, 510) ~ "PROVIDENCIA INÉS DE SUÁREZ",
                     ID %in% c(497:499, 506, 515) ~ "PROVIDENCIA LOS LEONES",
                     ID %in% c(496, 507, 508) ~ "PROVIDENCIA EL BOSQUE",
                     ID %in% c(504, 505, 509, 512:514) ~ "PROVIDENCIA PLAZA DE LA ALCALDESA",
                     ID %in% c(623, 624, 631:634, 637) ~ "SAN JOAQUÍN LA LEGUA-CASTRINA",
                     ID %in% c(625, 630, 635, 636, 638) ~ "SAN JOAQUÍN HAYDN",
                     ID %in% c(619:622, 626:629) ~ "SAN JOAQUÍN NORTE",
                     ID %in% c(419:421, 423, 427, 428) ~ "ÑUÑOA ESTADIO",
                     ID %in% c(424, 445:448) ~ "ÑUÑOA SUÁRES MUJICA",
                     ID %in% c(425, 429:431, 437) ~ "ÑUÑOA PLAZA SUCRE",
                     ID %in% c(422, 438, 439, 441:444) ~ "ÑUÑOA PARQUE JUAN XXIII",
                     ID %in% c(426, 436, 440) ~ "ÑUÑOA VILLA FREI",
                     ID %in% c(432:435) ~ "ÑUÑOA EMILIA TÉLLEZ",
                     ID %in% c(361:363, 365, 366) ~ "MACUL SANTA CAROLINA",
                     ID %in% c(360, 367, 372, 374:377) ~ "MACUL SUR",
                     ID %in% c(368:370, 373) ~ "MACUL MEDIO ORIENTE",
                     ID %in% c(364, 371) ~ "MACUL NORIORENTE",
                     ID %in% c(640, 642:644) ~ "SAN MIGUEL NORPONIENTE",
                     ID %in% c(639, 641, 645:648) ~ "SAN MIGUEL NORORIENTE",
                     ID %in% c(649:652) ~ "SAN MIGUEL SUR",
                     ID %in% c(449, 450, 455, 457:460) ~ "PEDRO AGUIRRE CERDA VILLAS",
                     ID %in% c(456, 461, 462, 464, 465) ~ "PEDRO AGUIRRE CERDA POBLACIÓNES PONIENTE",
                     ID %in% c(451:454, 463) ~ "PEDRO AGUIRRE CERDA SUR",
                     ID %in% c(55:57, 66:68) ~ "CERRILLOS INDUSTRIAL",
                     ID %in% c(53, 54, 58:65) ~ "CERRILLOS SUR",
                     ID %in% c(123, 135, 136, 139, 140) ~ "ESTACIÓN CENTRAL LOS NOGALES",
                     ID %in% c(130, 132, 133, 137, 141, 142) ~ "ESTACIÓN CENTRAL SUR PONIENTE",
                     ID %in% c(120:122, 124:129, 131, 134, 138) ~ "ESTACIÓN CENTRAL ORIENTE",
                     ID %in% c(572:574, 577) ~ "QUINTA NORMAL LO ESPINOZA",
                     ID %in% c(557, 564:567, 569:571, 575, 576) ~ "QUINTA NORMAL ORIENTE",
                     ID %in% c(558:563, 568) ~ "QUINTA NORMAL PONIENTE",
                     ID %in% c(613, 617, 618) ~ "RENCA MIRAFLORES",
                     ID %in% c(610, 612, 616) ~ "RENCA TOPOCALMA",
                     ID %in% c(602:609, 611, 614, 615) ~ "RENCA ORIENTE",
                     ID %in% c(172, 177, 181, 184:188) ~ "LA CISTERNA NORTE",
                     ID %in% c(173:176, 178:180, 182, 183) ~ "LA CISTERNA SUR",
                     ID %in% c(340, 341, 343:347) ~ "LO ESPEJO SUR",
                     ID %in% c(337:339, 342) ~ "LO ESPEJO NORTE",
                     ID %in% c(353:359) ~ "LO PRADO SUR",
                     ID %in% c(348:352) ~ "LO PRADO NORTE",
                     ID %in% c(77:79) ~ "CERRO NAVIA PONIENTE",
                     ID %in% c(69:73, 76) ~ "CERRO NAVIA SUR ORIENTE",
                     ID %in% c(74, 75, 80:82) ~ "CERRO NAVIA NORORIENTE",
                     ID == 544 ~ "QUILICURA SANTA LAURA",
                     ID %in% c(545, 555) ~ "QUILICURA SAN ENRIQUE",
                     ID %in% c(542, 546:549, 554) ~ "QUILICURA RESTO",
                     ID %in% c(553, 556) ~ "QUILICURA BLOC8",
                     ID %in% c(550:552) ~ "QUILICURA SANTA PAULA",
                     ID %in% c(543) ~ "QUILICURA JARDÍN DE MARTE PONIENTE",
                     ID %in% c(143, 150, 151, 154) ~ "HUECHURABA PONIENTE",
                     ID %in% c(144:149, 152, 153, 155, 156) ~ "HUECHURABA ORIENTE",
                     ID %in% c(669:671, 673:676, 679:681, 684) ~ "VITACURA NORTE E ORIENTE",
                     ID %in% c(666:668, 672, 677, 678, 682, 683) ~ "VITACURA PONIENTE",
                     ID %in% c(270, 274:277, 286) ~ "LA REINA ALTA",
                     ID %in% c(268, 271:273, 278:280, 283:285) ~ "LA REINA SUR",
                     ID %in% c(265:267, 269, 281, 282) ~ "LA REINA COUNTRY CLUB",
                     ID %in% c(207, 214, 217, 231) ~ "LA FLORIDA LAS GARDENIAS",
                     ID %in% c(208, 209) ~ "LA FLORIDA JUAN PABLO II",
                     ID %in% c(210, 211, 233) ~ "LA FLORIDA VILLA TAURO",
                     ID %in% c(218, 229, 230) ~ "LA FLORIDA VILLA ITALIA",
                     ID %in% c(192, 195, 204) ~ "LA FLORIDA SAN JORGE",
                     ID %in% c(191, 194, 205) ~ "LA FLORIDA TRINIDAD",
                     ID %in% c(189, 190, 193, 215, 216, 228) ~ "LA FLORIDA VICENTE VALDÉS",
                     ID %in% c(196, 213, 225:227) ~ "LA FLORIDA MIRADOR",
                     ID %in% c(197, 198, 206) ~ "LA FLORIDA VILLA ESPAÑA",
                     ID %in% c(199, 200, 223, 224) ~ "LA FLORIDA NUEVO AMANECER",
                     ID %in% c(201:203, 212, 221, 222, 232) ~ "LA FLORIDA LO CAÑAS",
                     ID %in% c(219, 220) ~ "LA FLORIDA ALTO",
                     ID %in% c(471:473) ~ "PEÑALOLÉN ICTINOS",  
                     ID %in% c(469, 470, 474, 488) ~ "PEÑALOLÉN LO HERMIDA",
                     ID %in% c(475:477, 487, 489) ~ "PEÑALOLÉN QUILÍN",
                     ID %in% c(486, 467, 468, 482, 483) ~ "PEÑALOLÉN SAN LUIS DE MACÚL",
                     ID %in% c(466, 484, 485, 490:493) ~ "PEÑALOLÉN LAS PIRCAS",
                     ID %in% c(478:481) ~ "PEÑALOLÉN ANTIGUA",
                     ID == 287 ~ "LAS CONDES EL GOLF", 
                     ID %in% c(288:290) ~ "LAS CONDES VATICANO",
                     ID %in% c(304, 305) ~ "LAS CONDES LOS DESCUBRIDORES PTE",
                     ID %in% c(306, 307, 312, 320, 321) ~ "LAS CONDES ARAUCANO PARK",
                     ID %in% c(291, 292, 296) ~ "LAS CONDES RONCESVALLES",
                     ID %in% c(297, 299, 300, 313, 317, 319) ~ "LAS CONDES MARDOÑAL",
                     ID %in% c(293, 295, 303, 322, 323) ~ "LAS CONDES LOS DESCUBRIDORES OTE",
                     ID %in% c(294, 308, 309) ~ "LAS CONDES ESTADIO MUNICIPAL",
                     ID %in% c(298, 301, 302, 310, 311, 314:316, 318) ~ "LAS CONDES UNIVERSIDADES",
                     ID %in% c(694, 709, 723, 725, 726) ~ "PUENTE ALTO PLAZA VIVA", 
                     ID %in% c(695, 698, 699) ~ "PUENTE ALTO CEMENTERIOS",
                     ID %in% c(702, 703, 724) ~ "PUENTE ALTO LOS TOROS",
                     ID %in% c(700, 701) ~ "PUENTE ALTO GABRIELA OTE",
                     ID %in% c(704, 710, 722) ~ "PUENTE ALTO ELVIRA MATTE",
                     ID %in% c(711:716) ~ "PUENTE ALTO LA LAJA",
                     ID %in% c(688, 696) ~ "PUENTE ALTO JARDINES",
                     ID == 689 ~ "PUENTE ALTO BARRIO HOLANDA PTE",
                     ID == 697 ~ "PUENTE ALTO BARRIO HOLANDA OTE",
                     ID %in% c(687, 690, 705) ~ "PUENTE ALTO VINAS",
                     ID %in% c(685, 686) ~ "PUENTE ALTO PARQUE JUAN PABLO II",
                     ID %in% c(692, 693, 706, 707) ~ "PUENTE ALTO SAN GERÓNIMO",
                     ID %in% c(691, 708, 717:721) ~ "PUENTE ALTO PLAZA",
                     ID == 247 ~ "LA GRANJA LOS PENSAMIENTOS", 
                     ID %in% c(240:242, 248) ~ "LA GRANJA VILLA PABLO NERUDA",
                     ID %in% c(238, 239, 243, 246) ~ "LA GRANJA POBLACIÓN SAN GREGORIO",
                     ID %in% c(234:237, 244, 245, 249) ~ "LA GRANJA NORTE",
                     ID %in% c(660:664) ~ "SAN RAMÓN SUR",
                     ID %in% c(653:659, 665) ~ "SAN RAMÓN NORTE",
                     ID %in% c(253:257, 262) ~ "LA PINTANA SUR",
                     ID %in% c(263, 264) ~ "LA PINTANA POBLACIÓN SANTO TOMÁS",
                     ID == 260 ~ "LA PINTANA POBLACIÓN SANTA MAGDALENA",
                     ID %in% c(252, 258, 259, 261) ~ "LA PINTANA NORPONIENTE",
                     ID %in% c(250, 251) ~ "LA PINTANA ESTADIO MUNICIPAL",
                     ID == 113 ~ "EL BOSQUE MADRID",
                     ID %in% c(106, 108, 109, 118, 119) ~ "EL BOSQUE BASE AÉREA", 
                     ID %in% c(105, 107, 114, 115) ~ "EL BOSQUE PLAZA MAYORGA",
                     ID %in% c(110:112) ~ "EL BOSQUE EL ROSAL",
                     ID %in% c(103, 104, 116, 117) ~ "EL BOSQUE NORORIENTE",
                     ID == 770 ~ "SAN BERNARDO MAPUHUE",
                     ID == 763 ~ "SAN BERNARDO STA TERESA",
                     ID %in% c(761, 762) ~ "SAN BERNARDO EL ALMENDRO",
                     ID %in% c(764:766, 777, 778, 781, 782) ~ "SAN BERNARDO SUR Y PONIENTE",
                     ID %in% c(758, 767, 779, 780) ~ "SAN BERNARDO AUTOPISTA",
                     ID %in% c(759, 760, 772) ~ "SAN BERNARDO CENTRO",
                     ID %in% c(771, 773) ~ "SAN BERNARDO ESTADIO MUNICIPAL",
                     ID %in% c(768, 769, 774:776) ~ "SAN BERNARDO EUCALIPTUS",
                     ID %in% c(394, 395, 397, 398) ~ "MAIPÚ NORPONIENTE",
                     ID == 386 ~ "MAIPÚ LAS NACIONES",
                     ID == 385 ~ "MAIPÚ EL CONQUISTADOR",
                     ID == 388 ~ "MAIPÚ LICEO TECNOLÓGICO",
                     ID == 387 ~ "MAIPÚ RENÉ OLIVARES BECERRA",
                     ID == 418 ~ "MAIPÚ CIUDAD SATELITE",
                     ID %in% c(382, 390:392) ~ "MAIPÚ EL ABRAZO",
                     ID == 415 ~ "MAIPÚ GOLF NORTE",
                     ID %in% c(412:414) ~ "MAIPÚ VERSALLES",
                     ID %in% c(378, 416, 417) ~ "MAIPÚ VILLA LO ERRÁZURIZ",
                     ID == 407 ~ "MAIPÚ LUMEN",
                     ID %in% c(389, 393, 396) ~ "MAIPÚ PARQUE TRES PONIENTE",
                     ID %in% c(383, 399:401, 406) ~ "MAIPÚ HURTADO",
                     ID %in% c(384, 402:405) ~ "MAIPÚ TEMPLO",
                     ID %in% c(379:381, 408:411) ~ "MAIPÚ SANTIAGO BUERAS",
                     ID %in% c(517, 524, 536:541) ~ "PUDAHUEL PONIENTE",
                     ID == 522 ~ "PUDAHUEL EL ABETO",
                     ID %in% c(527, 534) ~ "PUDAHUEL INSTITUTO TECNOLÓGICO SAN MATEO",
                     ID %in% c(518:520, 528, 535) ~ "PUDAHUEL LAGUNA SUR",
                     ID %in% c(525, 526) ~ "PUDAHUEL SANTA CORINA",
                     ID %in% c(521, 523, 531) ~ "PUDAHUEL SERRANO",
                     ID %in% c(529, 530, 532, 533) ~ "PUDAHUEL EL PEUMO",
  )
  )


zonas %>% filter(is.na(zonas$SECTEUR))
length(unique(zonas$SECTEUR))

## Harmonisation de la longueur des codes
zonas <- zonas %>% 
  mutate(CODE_ZONA = case_when(nchar(ID)==1 ~ paste0("00", as.character(ID)),
                               nchar(ID)==2 ~ paste0("0", as.character(ID)),
                               nchar(ID)==3 ~ as.character(ID)),
         CODE_SEC = case_when(nchar(SECTEUR)==1 ~ paste0("00", as.character(SECTEUR)),
                              nchar(SECTEUR)==2 ~ paste0("0", as.character(SECTEUR)),
                              nchar(SECTEUR)==3 ~ as.character(SECTEUR)))

## Nombre de zonas par secteur 
zonas <- zonas %>% 
  group_by(CODE_SEC) %>% 
  mutate(nbZonas = n_distinct(ID)) %>% 
  ungroup()

## Nombre d'enquêtés de 16 ans ou plus par secteur
pers16_sec <- zonas %>% 
  group_by(CODE_SEC, nbZonas) %>% 
  summarise(n = sum(nByZona, na.rm = TRUE)) %>% 
  st_drop_geometry() %>% 
  ungroup()

mean(pers16_sec$n)
median(pers16_sec$n)

length(unique(zonas$ID))
sum(pers16_sec$nbZonas)



# Création de la couche des secteurs ----
sec <- zonas %>% 
  rename(LIB = LIBSEC) %>% 
  group_by(CODE_SEC, LIB) %>% 
  summarize(geometry = st_union(geometry)) %>% 
  ungroup()

mapview(sec)

length(unique(sec$CODE_SEC))


## Les polygones des zonas étant disjoints, présence de résidus dans la nouvelle couche
## => QGis
st_write(sec, "qgis/santiago/sec2clean_santiago.shp",
         delete_dsn = TRUE, layer_options = "ENCODING=UTF-8")


# Création de la table de passage zonas -> secteurs ----
# pour la BD numérique (script bdBrute2bdm.R)
zonasdf <- zonas %>% 
  st_drop_geometry() %>% 
  select(CODE_ZONA, CODE_SEC) %>% 
  arrange(CODE_ZONA)

write.csv2(zonasdf, "txt/corresp_ZONA_SEC_santiago.csv",
           row.names = FALSE)

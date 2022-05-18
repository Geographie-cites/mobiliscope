//Stockage des titres

// Titres des cartes
var tMap = [
			//Pop totale
			"Densidad de <strong>personas</strong> presentes (pers/km²) por sector",
			"Número estimado de <strong>personas</strong> por sector",
			"Número estimado de <strong>no residentes</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Pop résidante
			"Proporción estimada de <strong>residentes</strong> por sector",
			"Número estimado de <strong>residentes</strong> por sector",
			"Proporción estimada de <strong>no residentes</strong> por sector",
			"Número estimado de <strong>no residentes</strong> por sector",
			//Groupe d'âge
			"Proporción estimada de personas de <strong>65 años o más</strong> por sector",
			"Número estimado de personas de <strong>65 años o más</strong> por sector",
			"Número estimado de no residentes de <strong>65 años o más</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas de <strong>35 a 64 años</strong> por sector", //10
			"Número estimado de personas de <strong>35 a 64 años</strong> por sector",
			"Número estimado de no residentes de <strong>35 a 64 años</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas de <strong>25 a 34 años</strong> por sector",
			"Número estimado de personas de <strong>25 a 34 años</strong> por sector",
			"Número estimado de no residentes de <strong>25 a 34 años</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas de <strong>16 a 24 años</strong> por sector",
			"Número estimado de personas de <strong>16 a 24 años</strong> por sector",
			"Número estimado de no residentes de <strong>16 a 24 años</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Sexe
			"Proporción estimada de <strong>mujeres</strong> por sector",
			"Número estimado de <strong>mujeres</strong> por sector", //20
			"Número estimado de <strong>mujeres no residentes</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>hombres</strong> por sector",
			"Número estimado de <strong>hombres</strong> por sector",
			"Número estimado de <strong>hombres</strong> no residentes por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Niveau d'éducation (ind)
			"Proporción estimada de personas con un <strong>nivel educativo muy alto</strong> por sector",
			"Número estimado de personas con un <strong>nivel educativo muy alto</strong> por sector",
			"Número estimado de no residentes con un <strong>nivel educativo muy alto</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con un <strong>nivel educativo alto</strong> por sector",
			"Número estimado de personas con un <strong>nivel educativo alto</strong> por sector",
			"Número estimado de no residentes con un <strong>nivel educativo alto</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con un <strong>nivel educativo medio</strong> por sector", //31
			"Número estimado de personas con un <strong>nivel educativo medio</strong> por sector",
			"Número estimado de no residentes con un <strong>nivel educativo medio</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con un <strong>nivel educativo bajo</strong> por sector",
			"Número estimado de personas con un <strong>nivel educativo bajo</strong> por sector",
			"Número estimado de no residentes con un <strong>nivel educativo bajo</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Niveau d'éducation (men)
			"Proporción estimada de personas con un <strong>nivel educativo muy alto (hogar)</strong> por sector",
			"Número estimado de personas con un <strong>nivel educativo muy alto (hogar)</strong> por sector",
			"Número estimado de no residentes con un <strong>nivel educativo muy alto (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con un <strong>nivel educativo alto (hogar)</strong> por sector", //40
			"Número estimado de personas con un <strong>nivel educativo alto (hogar)</strong> por sector",
			"Número estimado de no residentes con un <strong>nivel educativo alto (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con un <strong>nivel educativo medio (hogar)</strong> por sector", //31
			"Número estimado de personas con un <strong>nivel educativo medio (hogar)</strong> por sector",
			"Número estimado de no residentes con un <strong>nivel educativo medio (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con un <strong>nivel educativo bajo (hogar)</strong> por sector",
			"Número estimado de personas con un <strong>nivel educativo bajo (hogar)</strong> por sector",
			"Número estimado de no residentes con un <strong>nivel educativo bajo (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Revenu du ménage
			"Proporción estimada de personas con <strong>ingresos altos</strong> por sector",
			"Número estimado de personas con <strong>ingresos altos</strong> por sector", //50
			"Número estimado de no residentes con <strong>ingresos altos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con <strong>ingresos medios-altos</strong> por sector",
			"Número estimado de personas con <strong>ingresos medios-altos</strong> por sector",
			"Número estimado de no residentes con <strong>ingresos medios-altos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con <strong>ingresos medios-bajos</strong> por sector",
			"Número estimado de personas con <strong>ingresos medios-bajos</strong> por sector",
			"Número estimado de no residentes con <strong>ingresos medios-bajos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con <strong>ingresos bajos</strong> por sector",
			"Número estimado de personas con <strong>ingresos bajos</strong> por sector",
			"Número estimado de no residentes con <strong>ingresos bajos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con <strong>ingresos no informados</strong> por sector", //61
			"Número estimado de personas con <strong>ingresos no informados</strong> por sector",
			"Número estimado de no residentes con <strong>ingresos no informados</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//CSP (ind)
			"Proporción estimada de <strong>directivos y profesionales</strong> por sector",
			"Número estimado de <strong>directivos y profesionales</strong> por sector",
			"Número estimado de no residentes <strong>directivos y profesionales</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas en una <strong>categoría socioprofesional intermedia</strong> por sector",
			"Número estimado de personas en una <strong>categoría socioprofesional intermedia</strong> por sector",
			"Número estimado de no residentes en una <strong>categoría socioprofesional intermedia</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>empleados</strong> por sector", //70
			"Número estimado de <strong>empleados</strong> por sector",
			"Número estimado de no residentes <strong>empleados</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>obreros</strong> por sector",
			"Número estimado de <strong>obreros</strong> por sector",
			"Número estimado de no residentes <strong>obreros</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>inactivos</strong> por sector",
			"Número estimado de <strong>inactivos</strong> por sector",
			"Número estimado de no residentes <strong>inactivos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//CSP (men)
			"Proporción estimada de <strong>directivos y profesionales (hogar)</strong> por sector",
			"Número estimado de <strong>directivos y profesionales (hogar)</strong> por sector",
			"Número estimado de no residentes <strong>directivos y profesionales (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas en una <strong>categoría socioprofesional intermedia (hogar)</strong> por sector",
			"Número estimado de personas en una <strong>categoría socioprofesional intermedia (hogar)</strong> por sector",
			"Número estimado de no residentes en una <strong>categoría socioprofesional intermedia (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>empleados (hogar)</strong> por sector", //70
			"Número estimado de <strong>empleados (hogar)</strong> por sector",
			"Número estimado de no residentes <strong>empleados (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>obreros (hogar)</strong> por sector",
			"Número estimado de <strong>obreros (hogar)</strong> por sector",
			"Número estimado de no residentes <strong>obreros (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>inactivos (hogar)</strong> por sector",
			"Número estimado de <strong>inactivos (hogar)</strong> por sector",
			"Número estimado de no residentes <strong>inactivos (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Statut d'occupation
			"Proporción estimada de <strong>inactivos (hogar)</strong> por sector",
			"Número estimado de <strong>inactivos (hogar)</strong> por sector",
			"Número estimado de no residentes <strong>inactivos (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>jubilados</strong> por sector",
			"Número estimado de <strong>jubilados</strong> por sector",
			"Número estimado de no residentes <strong>jubilados</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas <strong>desempleadas</strong> por sector", //100
			"Número estimado de personas <strong>desempleadas</strong> por sector",
			"Número estimado de no residentes <strong>desempleadas</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>estudiantes</strong> por sector",
			"Número estimado de personas <strong>estudiantes</strong> por sector",
			"Número estimado de no residentes <strong>estudiantes</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>activos</strong> por sector",
			"Número estimado de <strong>activos</strong> por sector",
			"Número estimado de no residentes <strong>activos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			// Département de résidence
			"Proporción estimada de personas que <strong>residen en <i>grande couronne</i></strong> por sector",
			"Número estimado de personas que <strong>residen en <i>grande couronne</strong> por sector", //110
			"Número estimado de no residentes que <strong>residen en <i>grande couronne</i></strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en Hauts-de-Seine</strong> por sector",
			"Número estimado de personas que <strong>residen en Hauts-de-Seine</strong> por sector",
			"Número estimado de no residentes que <strong>residen en Hauts-de-Seine</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en Val-de-Marne</strong> por sector",
			"Número estimado de personas que <strong>residen en Val-de-Marne</strong> por sector",
			"Número estimado de no residentes que <strong>residen en Val-de-Marne</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en Seine-Saint-Denis</strong> por sector",
			"Número estimado de personas que <strong>residen en Seine-Saint-Denis</strong> por sector",
			"Número estimado de no residentes que <strong>residen en Seine-Saint-Denis</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en Paris</strong> por sector", //121
			"Número estimado de personas que <strong>residen en Paris</strong> por sector",
			"Número estimado de no residentes que <strong>residen en Paris</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Zonage en aire urbaine
			"Proporción estimada de personas que <strong>residen en</strong> ", " por sector",
			"Número estimado de personas que <strong>residen en</strong> ", " por sector",
			"Número estimado de no residentes que <strong>residen en</strong> ", " por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en zona urbana</strong> por sector", //130
			"Número estimado de personas que <strong>residen en zona urbana</strong> por sector",
			"Número estimado de no residentes que <strong>residen en zona urbana</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en zona periférica</strong> por sector",
			"Número estimado de personas que <strong>residen en zona periférica</strong> por sector",
			"Número estimado de no residentes que <strong>residen en zona periférica</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//QPV
			"Proporción estimada de personas que <strong>residen en Barrios Prioritarios</strong> por sector",
			"Número estimado de personas que <strong>residen en Barrios Prioritarios</strong> por sector",
			"Número estimado de no residentes que <strong>residen en Barrios Prioritarios</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen fuera Barrios Prioritarios</strong> por sector",
			"Número estimado de personas que <strong>residen fuera Barrios Prioritarios</strong> por sector", //140
			"Número estimado de no residentes que <strong>residen fuera Barrios Prioritarios</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Activités
			"Proporción estimada de personas <strong>dedicadas al recreo</strong> por sector",
			"Número estimado de personas <strong>dedicadas al recreo</strong> por sector",
			"Número estimado de no residentes <strong>dedicados al recreo</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>compran</strong> por sector",
			"Número estimado de personas que <strong>compran</strong> por sector",
			"Número estimado de no residentes que <strong>compran</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>están estudiando</strong> por sector",
			"Número estimado de personas que <strong>están estudiando</strong> por sector",
			"Número estimado de no residentes que <strong>están estudiando</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>están trabajando</strong> por sector", //151
			"Número estimado de personas que <strong>están trabajando</strong> por sector",
			"Número estimado de no residentes que <strong>están trabajando</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas <strong>en casa</strong> por sector",
			"Número estimado de personas <strong>en casa</strong> por sector",
			//Mode de transport
			"Proporción estimada de personas que utilizaron un <strong>modo suave</strong> por sector",
			"Número estimado de personas que utilizaron un <strong>modo suave</strong> por sector",
			"Número estimado de no residentes que utilizaron un <strong>modo suave</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que utilizaron un <strong>vehículo motorizado individual</strong> por sector",
			"Número estimado de personas que utilizaron un <strong>vehículo motorizado individual</strong> por sector", //160
			"Número estimado de no residentes que utilizaron un <strong>vehículo motorizado individual</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que utilizaron un <strong>transporte colectivo</strong> por sector",
			"Número estimado de personas que utilizaron un <strong>transporte colectivo</strong> por sector",
			"Número estimado de no residentes que utilizaron un <strong>transporte colectivo</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Groupe d'âge bis (Amérique du Sud) ABANDON
			"Proporción estimada de personas <strong>âgées de 61 et plus</strong> por sector", //165
			"Número estimado de personas <strong>âgées de 61 et plus</strong> por sector",
			"Número estimado de no residentes <strong>âgés de 61 et plus</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas <strong>âgées de 41 à 60 ans</strong> por sector",
			"Número estimado de personas <strong>âgées de 41 à 60 ans</strong> por sector",
			"Número estimado de no residentes <strong>âgés de 41 à 60 ans</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas <strong>âgées de 26 à 40 ans</strong> por sector",
			"Número estimado de personas <strong>âgées de 26 à 40 ans</strong> por sector",
			"Número estimado de no residentes <strong>âgés de 26 à 40 ans</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas <strong>âgées de 16 à 25 ans</strong> por sector",
			"Número estimado de personas <strong>âgées de 16 à 25 ans</strong> por sector", //175
			"Número estimado de no residentes <strong>âgés de 16 à 25 ans</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Revenu du ménage (Amérique du Sud)
			"Proporción estimada de personas con <strong>ingresos muy altos</strong> por sector", //177
			"Número estimado de personas con <strong>ingresos muy altos</strong> por sector",
			"Número estimado de no residentes con <strong>ingresos muy altos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con <strong>ingresos altos</strong> por sector", //180
			"Número estimado de personas con <strong>ingresos altos</strong> por sector",
			"Número estimado de no residentes con <strong>ingresos altos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con <strong>ingresos medios</strong> por sector", //183
			"Número estimado de personas con <strong>ingresos medios</strong> por sector",
			"Número estimado de no residentes con <strong>ingresos medios</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con <strong>ingresos bajos</strong> por sector", //186
			"Número estimado de personas con <strong>ingresos bajos</strong> por sector",
			"Número estimado de no residentes con <strong>ingresos bajos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas con <strong>ingresos muy bajos</strong> por sector", //189
			"Número estimado de personas con <strong>ingresos muy bajos</strong> por sector",
			"Número estimado de no residentes con <strong>ingresos muy bajos</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//CSO (Amérique du Sud)
			"Proporción estimada de <strong>directivos y profesionales (hogar)</strong> por sector",
			"Número estimado de <strong>directivos y profesionales (hogar)</strong> por sector",
			"Número estimado de no residentes <strong>directivos y profesionales (hogar)</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>independientes</strong> por sector", //195
			"Número estimado de <strong>independientes</strong> por sector",
			"Número estimado de no residentes <strong>independientes</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>trabajadores cualificados</strong> por sector",
			"Número estimado de <strong>trabajadores cualificados</strong> por sector",
			"Número estimado de no residentes <strong>trabajadores cualificados</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>trabajadores no cualificados</strong> por sector", //201
			"Número estimado de <strong>trabajadores no cualificados</strong> por sector",
			"Número estimado de no residentes <strong>trabajadores no cualificados</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Informalité (Bogota et Sao Paulo)
			"Proporción estimada de personas que tienen un <strong>empleo informal</strong> por sector", //204
			"Número estimado de personas que tienen un <strong>empleo informal</strong> por sector",
			"Número estimado de no residentes que tienen <strong>empleo informal</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que tienen un <strong>empleo formal</strong> por sector",
			"Número estimado de personas que tienen un <strong>empleo formal</strong> por sector",
			"Número estimado de no residentes que tienen <strong>empleo formal</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Zonage METAL (Bogota)
			"Proporción estimada de personas que <strong>residen en el centro</strong> por sector", //210
			"Número estimado de personas que <strong>residen en el centro</strong> por sector",
			"Número estimado de no residentes que <strong>residen en el centro</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en el pericentro</strong> por sector",
			"Número estimado de personas que <strong>residen en el pericentro</strong> por sector",
			"Número estimado de no residentes que <strong>residen en el pericentro</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en la periferia cercana</strong> por sector", //216
			"Número estimado de personas que <strong>residen en la periferia cercana</strong> por sector",
			"Número estimado de no residentes que <strong>residen en la periferia cercana</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en la periferia lejana</strong> por sector",
			"Número estimado de personas que <strong>residen en la periferia lejana</strong> por sector", //220
			"Número estimado de no residentes que <strong>residen en la periferia lejana</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Strate socio-éco (Bogota)
			"Proporción estimada de personas que <strong>residen en estrato 4, 5 o 6</strong> por sector", //222
			"Número estimado de personas que <strong>residen en estrato 4, 5 o 6</strong> por sector",
			"Número estimado de no residentes que <strong>residen en estrato 4, 5 o 6</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en estrato 3</strong> por sector", //225
			"Número estimado de personas que <strong>residen en estrato 3</strong> por sector",
			"Número estimado de no residentes que <strong>residen en estrato 3</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en estrato 2</strong> por sector",
			"Número estimado de personas que <strong>residen en estrato 2</strong> por sector",
			"Número estimado de no residentes que <strong>residen en en estrato 2</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que <strong>residen en estrato 1 o una manzana sin estrato</strong> por sector", //231
			"Número estimado de personas que <strong>residen en estrato 1 o una manzana sin estrato</strong> por sector",
			"Número estimado de no residentes que <strong>residen en estrato 1 o una manzana sin estrato</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Activité 6 : démarches admin./perso (Amérique du Sud)
			"Proporción estimada de personas <strong>ocupadas por trámites administrativos o personales</strong> por sector", //234
			"Número estimado de personas <strong>ocupadas por trámites administrativos o personales</strong> por sector",
			"Número estimado de no residentes <strong>ocupadas por trámites administrativos o personales</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Mode 4 : TransMilenio (Bogota)
			"Proporción estimada de personas que utilizaron el <strong>TransMilenio</strong> por sector", //237
			"Número estimado de personas que utilizaron el <strong>TransMilenio</strong> por sector",
			"Número estimado de no residentes que utilizaron el <strong>TransMilenio</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Composition du ménage (Amérique du Sud)
			"Proporción estimada de personas que viven en un <strong>hogar compuesto con niño</strong> por sector", //240
			"Número estimado de personas que viven en un <strong>hogar compuesto con niño</strong> por sector",
			"Número estimado de no residentes que viven en un <strong>hogar compuesto con niño</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que viven en una <strong>familia con niño</strong> por sector", //243
			"Número estimado de personas que viven en una <strong>familia con niño</strong> por sector",
			"Número estimado de no residentes que viven en una <strong>familia con niño</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que viven en un <strong>hogar compuesto sin niño</strong> por sector", //246
			"Número estimado de personas que viven en un <strong>hogar compuesto sin niño</strong> por sector",
			"Número estimado de no residentes que viven en un <strong>hogar compuesto sin niño</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que viven en una <strong>familia sin niño</strong> por sector", //249
			"Número estimado de personas que viven en una <strong>familia sin niño</strong> por sector",
			"Número estimado de no residentes que viven en una <strong>familia sin niño</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que viven <strong>solas</strong> por sector", //252
			"Número estimado de personas que viven <strong>solas</strong> por sector",
			"Número estimado de no residentes que viven <strong>solas</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Statut d'occupation du logement (Amérique du Sud)
			"Proporción estimada de <strong>propietarios</strong> presentes por sector", //255
			"Número estimado de <strong>propietarios</strong> presentes por sector",
			"Número estimado de <strong>propietarios</strong> no residentes por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>arrendatarios</strong> presentes por sector", //258
			"Número estimado de <strong>arrendatarios</strong> presentes por sector",
			"Número estimado de <strong>arrendatarios</strong> no residentes por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de <strong>personas albergadas</strong> presentes por sector", //261
			"Número estimado de <strong>personas albergadas</strong> presentes por sector",
			"Número estimado de <strong>personas albergadas</strong> no residentes por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			// âge 15-24 canada
			"Proporción estimada de personas de <strong>15 a 24 años</strong> por sector", //264
			"Número estimado de personas de <strong>15 a 24 años</strong> por sector",
			"Número estimado de no residentes de <strong>15 a 24 años</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			//Composition du ménage (France)
			"Proporción estimada de personas que viven en un <strong>hogar con niño</strong> por sector", //267
			"Número estimado de personas que viven en un <strong>hogar con niño</strong> por sector",
			"Número estimado de no residentes que viven en un <strong>hogar con niño</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que viven en un <strong>hogar (excepto pareja) sin niño</strong> por sector", //270
			"Número estimado de personas que viven en un <strong>hogar (excepto pareja) sin niño</strong> por sector",
			"Número estimado de no residentes que viven en un <strong>hogar (excepto pareja) sin niño</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			"Proporción estimada de personas que viven en <strong>pareja sin niño</strong> por sector", //273
			"Número estimado de personas que viven en <strong>pareja sin niño</strong> por sector",
			"Número estimado de no residentes que viven en <strong>pareja sin niño</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>",
			// composition du ménage (Québec)
			"Proporción estimada de personas que viven en un <strong>hogar sin niño</strong> por sector", //276
			"Número estimado de personas que viven en un <strong>hogar sin niño</strong> por sector",
			"Número estimado de no residentes que viven en un <strong>hogar sin niño</strong> por sector <span style = 'font-size : .7em'>(y los principales sectores de residencia al pasar el cursor por encima)</span>"
			];


// Titres des graphiques "simples"
var tUnique = [
			   //Pop totale
			   "Densidad de <strong>personas</strong> presentes (pers/km²)",
			   "Número estimado de <strong>personas</strong>",
			   "Número estimado de <strong>personas</strong> no residentes",
			   //Pop résidente
			   "Proporción (%) estimada de <strong>residentes</strong>",
			   "Número estimado de <strong>residentes</strong>",
			   "Proporción (%) estimada de <strong>no residentes</strong>",
			   "Número estimado de <strong>no residentes</strong>",
			   //Groupe d'âge
			   "Proporción (%) estimada de personas <strong>de 65 años o más</strong>",
			   "Número estimado de personas <strong>de 65 años o más</strong>",
			   "Número estimado de no residentes <strong>de 65 años o más</strong>",
			   "Proporción (%) estimada de personas <strong>entre 35 y 64 años</strong>", //10
			   "Número estimado de personas <strong>entre 35 y 64 años</strong>",
			   "Número estimado de no residentes <strong>entre 35 y 64 años</strong>",
			   "Proporción (%) estimada de personas <strong>entre 25 y 34 años</strong>",
			   "Número estimado de personas <strong>entre 25 y 34 años</strong>",
			   "Número estimado de no residentes <strong>entre 25 y 34 años</strong>",
			   "Proporción (%) estimada de personas <strong>entre 16 y 24 años</strong>",
			   "Número estimado de personas <strong>entre 16 y 24 años</strong>",
			   "Número estimado de no residentes <strong>entre 16 y 24 años</strong>",
			   //sexe
			   "Proporción (%) estimada de <strong>mujeres</strong>",
			   "Número estimado de <strong>mujeres</strong>", //20
			   "Número estimado de <strong>mujeres</strong> no residentes",
			   "Proporción (%) estimada de <strong>hombres</strong>",
			   "Número estimado de <strong>hombres</strong>",
			   "Número estimado de <strong>hommes</strong> no residentes",
			   // Niveau d'éducation (ind)
			   "Proporción (%) estimada de personas con <strong>nivel educativo muy alto</strong>",
			   "Número estimado de personas con <strong>nivel educativo muy alto</strong>",
			   "Número estimado de no residentes con <strong>nivel educativo muy alto</strong>",
			   "Proporción (%) estimada de personas con <strong>nivel educativo alto</strong>",
			   "Número estimado de personas con <strong>nivel educativo alto</strong>",
			   "Número estimado de no residentes con <strong>nivel educativo alto</strong>", //30
			   "Proporción (%) estimada de personas con <strong>nivel educativo medio</strong>",
			   "Número estimado de personas con <strong>nivel educativo medio</strong>",
			   "Número estimado de no residentes con <strong>nivel educativo medio</strong>",
			   "Proporción (%) estimada de personas con <strong>nivel educativo bajo</strong>",
			   "Número estimado de personas con <strong>nivel educativo bajo</strong>",
			   "Número estimado de no residentes con <strong>nivel educativo bajo</strong>",
			   // Niveau d'éducation (men)
			   "Proporción (%) estimada de personas con <strong>nivel educativo muy alto (hogar)</strong>",
			   "Número estimado de personas con <strong>nivel educativo muy alto (hogar)</strong>",
			   "Número estimado de no residentes con <strong>nivel educativo muy alto (hogar)</strong>",
			   "Proporción (%) estimada de personas con <strong>nivel educativo alto (hogar)</strong>",
			   "Número estimado de personas con <strong>nivel educativo alto (hogar)</strong>",
			   "Número estimado de no residentes con <strong>nivel educativo alto (hogar)</strong>", //42
			   "Proporción (%) estimada de personas con <strong>nivel educativo medio (hogar)</strong>",
			   "Número estimado de personas con <strong>nivel educativo medio (hogar)</strong>",
			   "Número estimado de no residentes con <strong>nivel educativo medio (hogar)</strong>",
			   "Proporción (%) estimada de personas con <strong>nivel educativo bajo (hogar)</strong>",
			   "Número estimado de personas con <strong>nivel educativo bajo (hogar)</strong>",
			   "Número estimado de no residentes con <strong>nivel educativo bajo (hogar)</strong>",
			   //Revenu du ménage
			   "Proporción (%) estimada de personas con <strong>ingresos altos</strong>",
			   "Número estimado de personas con <strong>ingresos altos</strong>", //50
			   "Número estimado de no residentes con <strong>ingresos altos</strong>",
			   "Proporción (%) estimada de personas con <strong>ingresos medios-altos</strong>",
			   "Número estimado de personas con <strong>ingresos medios-altos</strong>",
			   "Número estimado de no residentes con <strong>ingresos medios-altos</strong>",
			   "Proporción (%) estimada de personas con <strong>ingresos medios-bajos</strong>",
			   "Número estimado de personas con <strong>ingresos medios-bajos</strong>",
			   "Número estimado de no residentes con <strong>ingresos medios-bajos</strong>",
			   "Proporción (%) estimada de personas con <strong>ingresos bajos</strong>",
			   "Número estimado de personas con <strong>ingresos bajos</strong>",
			   "Número estimado de no residentes con <strong>ingresos bajos</strong>", //60
			   "Proporción (%) estimada de personas con <strong>ingresos no informados</strong>",
			   "Número estimado de personas con <strong>ingresos no informados</strong>",
			   "Número estimado de no residentes con <strong>ingresos no informados</strong>",
			   //CSP
			   "Proporción (%) estimada de <strong>directivos y profesionales</strong>",
			   "Número estimado de <strong>directivos y profesionales</strong>",
			   "Número estimado de <strong>directivos y profesionales</strong> no residentes",
			   "Proporción (%) estimada de personas con una <strong>categoría socioprofesional intermedia</strong>",
			   "Número estimado de personas con una <strong>categoría socioprofesional intermedia</strong>",
			   "Número estimado de no residentes con una <strong>categoría socioprofesional intermedia</strong>",
			   "Proporción (%) estimada de <strong>empleados</strong>", //70
			   "Número estimado de <strong>empleados</strong>",
			   "Número estimado de <strong>empleados</strong> no residentes",
			   "Proporción (%) estimada de <strong>obreros</strong>",
			   "Número estimado de <strong>obreros</strong>",
			   "Número estimado de <strong>obreros</strong> no residentes",
			   "Proporción (%) estimada de <strong>inactivos</strong>",
			   "Número estimado de <strong>inactivos</strong>",
			   "Número estimado de no residentes <strong>inactivos</strong>",
			   //CSP (ménage)
			   "Proporción (%) estimada de <strong>directivos y profesionales (hogar)</strong>",
			   "Número estimado de <strong>directivos y profesionales (hogar)</strong>",
			   "Número estimado de <strong>directivos y profesionales (hogar)</strong> no residentes",
			   "Proporción (%) estimada de personas con una <strong>categoría socioprofesional intermedia (hogar)</strong>",
			   "Número estimado de personas con una <strong>categoría socioprofesional intermedia (hogar)</strong>",
			   "Número estimado de no residentes con una <strong>categoría socioprofesional intermedia (hogar)</strong>",
			   "Proporción (%) estimada de <strong>empleados (hogar)</strong>", //95
			   "Número estimado de <strong>empleados (hogar)</strong>",
			   "Número estimado de <strong>empleados (hogar)</strong> no residentes",
			   "Proporción (%) estimada de <strong>obreros (hogar)</strong>",
			   "Número estimado de <strong>obreros (hogar)</strong>",
			   "Número estimado de <strong>obreros (hogar)</strong> no residentes",
			   "Proporción (%) estimada de <strong>inactivos (hogar)</strong>",
			   "Número estimado de <strong>inactivos (hogar)</strong>",
			   "Número estimado de no residentes <strong>inactivos (hogar)</strong>",
			   //Occupation principale
			   "Proporción (%) estimada de <strong>inactivos</strong>",
			   "Número estimado de <strong>inactivos</strong>",
			   "Número estimado de no residentes <strong>inactivos</strong>",
			   "Proporción (%) estimada de <strong>jubilados</strong>",
			   "Número estimado de <strong>jubilados</strong>",
			   "Número estimado de no residentes <strong>jubilados</strong>",
			   "Proporción (%) estimada de personas <strong>desempleadas</strong>", //100
			   "Número estimado de personas <strong>desempleadas</strong>",
			   "Número estimado de no residentes <strong>desempleados</strong>",
			   "Proporción (%) estimada de <strong>estudiantes</strong>",
			   "Número estimado de <strong>estudiantes</strong>",
			   "Número estimado de <strong>estudiantes</strong> no residentes",
			   "Proporción (%) estimada de <strong>activos</strong>",
			   "Número estimado de <strong>activos</strong>",
			   "Número estimado de no residentes <strong>activos</strong>",
			   //Département de résidence
			   "Proporción (%) estimada de personas que <strong>residen en <i>grande couronne</i></strong>",
			   "Número estimado de personas que <strong>residen en <i>grande couronne</i></strong>", //110
			   "Número estimado de no residentes que <strong>residen en <i>grande couronne</i></strong>",
			   "Proporción (%) estimada de personas que <strong>residen en Hauts-de-Seine</strong>",
			   "Número estimado de personas que <strong>residen en Hauts-de-Seine</strong>",
			   "Número estimado de no residentes que <strong>residen en Hauts-de-Seine</strong>",
			   "Proporción (%) estimada de personas que <strong>residen en Val-de-Marne</strong>",
			   "Número estimado de personas que <strong>residen en Val-de-Marne</strong>",
			   "Número estimado de no residentes que <strong>residen en Val-de-Marne</strong>",
			   "Proporción (%) estimada de personas que <strong>residen en Seine-Saint-Denis</strong>",
			   "Número estimado de personas que <strong>residen en Seine-Saint-Denis</strong>",
			   "Número estimado de no residentes que <strong>residen en Seine-Saint-Denis</strong>", //120
			   "Proporción (%) estimada de personas que <strong>residen en Paris</strong>",
			   "Número estimado de personas que <strong>residen en Paris</strong>",
			   "Número estimado de no residentes que <strong>residen en Paris</strong>",
			   //Zonage en aire urbaine
			   "Proporción (%) estimada de personas que <strong>residen en</strong> ",
			   "Número estimado de personas que <strong>residen en</strong> ",
			   "Número estimado de no residentes que <strong>residen en</strong> ",
			   "Proporción (%) estimada de personas que <strong>residen en zona urbana</strong>",
			   "Número estimado de personas que <strong>residen en zona urbana</strong>",
			   "Número estimado de no residentes que <strong>residen en zona urbana</strong>",
			   "Proporción (%) estimada de personas que <strong>residen en zona periférica</strong>", //130
			   "Número estimado de personas que <strong>residen en zona periférica</strong>",
			   "Número estimado de no residentes que <strong>residen en zona periférica</strong>",
			   //QPV
			   "Proporción (%) estimada de personas que <strong>residen en Barrios Prioritarios</strong> ",
			   "Número estimado de personas que <strong>residen en Barrios Prioritarios</strong> ",
			   "Número estimado de no residentes que <strong>residen en Barrios Prioritarios</strong> ",
			   "Proporción (%) estimada de personas que <strong>residen fuera Barrios Prioritarios</strong>",
			   "Número estimado de personas que <strong>residen fuera Barrios Prioritarios</strong> ",
			   "Número estimado de no residentes que <strong>residen fuera Barrios Prioritarios</strong>",
			   //Activités
				"Proporción (%) estimada de personas <strong>dedicadas al recreo</strong> ",
				"Número estimado de personas <strong>dedicadas al recreo</strong> ", //140
				"Número estimado de no residentes <strong>dedicados al recreo</strong>",
				"Proporción (%) estimada de personas que <strong>compran</strong> ",
				"Número estimado de personas que <strong>compran</strong> ",
				"Número estimado de no residentes que <strong>compran</strong>",
				"Proporción (%) estimada de personas que <strong>están estudiando</strong> ",
				"Número estimado de personas que <strong>están estudiando</strong> ",
				"Número estimado de no residentes que <strong>están estudiando</strong>",
				"Proporción (%) estimada de personas que <strong>están trabajando</strong> ",
				"Número estimado de personas que <strong>están trabajando</strong> ",
				"Número estimado de no residentes que <strong>están trabajando</strong>", //150
				"Proporción (%) estimada de personas <strong>en casa</strong> ",
				"Número estimado de personas <strong>en casa</strong> ",
				//Mode de transport
				"Proporción (%) estimada de personas que utilizaron un <strong>modo suave</strong> ",
				"Número estimado de personas que utilizaron un <strong>modo suave</strong> ",
				"Número estimado de no residentes que utilizaron un <strong>modo suave</strong>",
				"Proporción (%) estimada de personas que utilizaron un <strong>vehículo motorizado individual</strong> ",
				"Número estimado de personas que utilizaron un <strong>vehículo motorizado individual</strong> ",
				"Número estimado de no residentes que utilizaron un <strong>vehículo motorizado individual</strong>",
				"Proporción (%) estimada de personas que utilizaron un <strong>transporte colectivo</strong> ",
				"Número estimado de personas que utilizaron un <strong>transporte colectivo</strong> ", //160
				"Número estimado de no residentes que utilizaron un <strong>transporte colectivo</strong>",
				//Groupe d'âge bis (Amérique du Sud) ABANDON
			    "Proporción (%) estimada de personas <strong>âgées de 61 et plus</strong>",
			    "Número estimado de personas <strong>âgées de 61 et plus</strong>",
			    "Número estimado de no residentes <strong>âgés de 61 et plus</strong>",
			    "Proporción (%) estimada de personas <strong>âgées de 41 à 60 ans</strong>", //165
			    "Número estimado de personas <strong>âgées de 41 à 60 ans</strong>",
			    "Número estimado de no residentes <strong>âgés de 41 à 60 ans</strong>",
			    "Proporción (%) estimada de personas <strong>âgées de 26 à 40 ans</strong>",
			    "Número estimado de personas <strong>âgées de 26 à 40 ans</strong>",
			    "Número estimado de no residentes <strong>âgés de 26 à 40 ans</strong>", //170
			    "Proporción (%) estimada de personas <strong>âgées de 16 à 25 ans</strong>",
			    "Número estimado de personas <strong>âgées de 16 à 25 ans</strong>",
			    "Número estimado de no residentes <strong>âgés de 16 à 25 ans</strong>",
			    //Revenu du ménage (Amérique du Sud)
			    "Proporción (%) estimada de personas con <strong>ingresos muy altos</strong>",
			    "Número estimado de personas con <strong>ingresos muy altos</strong>", // 175
			    "Número estimado de no residentes con <strong>ingresos muy altos</strong>",
			    "Proporción (%) estimada de personas con <strong>ingresos altos</strong>",
			    "Número estimado de personas con <strong>ingresos altos</strong>",
			    "Número estimado de no residentes con <strong>ingresos altos</strong>",
			    "Proporción (%) estimada de personas con <strong>ingresos medios</strong>", //180
			    "Número estimado de personas con <strong>ingresos medios</strong>",
			    "Número estimado de no residentes con <strong>ingresos medios</strong>",
			    "Proporción (%) estimada de personas con <strong>ingresos bajos</strong>",
			    "Número estimado de personas con <strong>ingresos bajos</strong>",
			    "Número estimado de no residentes con <strong>ingresos bajos</strong>", // 185
			    "Proporción (%) estimada de personas con <strong>ingresos muy bajos</strong>",
			    "Número estimado de personas con <strong>ingresos muy bajos</strong>",
			    "Número estimado de no residentes con <strong>ingresos muy bajos</strong>",
			    //CSO (Amérique du Sud)
			    "Proporción (%) estimada de <strong>directivos y profesionales</strong>", //189
			    "Número estimado de <strong>directivos y profesionales</strong>",
			    "Número estimado de <strong>directivos y profesionales</strong> no residentes",
			    "Proporción (%) estimada de <strong>independientes</strong>",
			    "Número estimado de <strong>independientes</strong>",
			    "Número estimado de no residentes <strong>independientes</strong>",
			    "Proporción (%) estimada de <strong>trabajadores cualificados</strong>", //195
			    "Número estimado de <strong>trabajadores cualificados</strong>",
			    "Número estimado de <strong>trabajadores cualificados</strong> no residentes",
			    "Proporción (%) estimada de <strong>trabajadores no cualificados</strong>",
			    "Número estimado de <strong>trabajadores no cualificados</strong>",
			    "Número estimado de <strong>trabajadores no cualificados</strong> no residentes", //200
			    // informalité (Bogota et Sao Paulo)
			    "Proporción (%) estimada de personas que tienen un <strong>empleo informal</strong> ", //201
			    "Número estimado de personas que tienen un <strong>empleo informal</strong> ",
			    "Número estimado de no residentes que tienen un <strong>empleo informal</strong> ",
			    "Proporción (%) estimada de personas que tienen un <strong>empleo formal</strong>",
			    "Número estimado de personas que tienen un <strong>empleo formal</strong> ", //205
			    "Número estimado de no residentes que tienen un <strong>empleo formal</strong>",
			    //Zona METAL
			    "Proporción (%) estimada de personas que <strong>residen en el centro</strong>", //207
			    "Número estimado de personas que <strong>residen en el centro</strong>",
			    "Número estimado de no residentes que <strong>residen en el centro</strong>",
			    "Proporción (%) estimada de personas que <strong>residen en el pericentro</strong>", //210
			    "Número estimado de personas que <strong>residen en el pericentro</strong>",
			    "Número estimado de no residentes que <strong>residen en el pericentro</strong>",
			    "Proporción (%) estimada de personas que <strong>residen en la periferia cercana</strong>",
			    "Número estimado de personas que <strong>residen en la periferia cercana</strong>",
			    "Número estimado de no residentes que <strong>residen en la periferia cercana</strong>", //215
			    "Proporción (%) estimada de personas que <strong>residen en la periferia lejana</strong>",
			    "Número estimado de personas que <strong>residen en la periferia lejana</strong>",
			    "Número estimado de no residentes que <strong>residen en la periferia lejana</strong>",
			    //Strate socio-éco (Bogota)
			    "Proporción (%) estimada de personas que <strong>residen en estrato 4, 5 o 6</strong>", //219
			    "Número estimado de personas que <strong>residen en estrato 4, 5 o 6</strong>",
			    "Número estimado de no residentes que <strong>residen en estrato 4, 5 o 6</strong>",
			    "Proporción (%) estimada de personas que <strong>residen en estrato 3</strong>",
			    "Número estimado de personas que <strong>residen en estrato 3</strong>",
			    "Número estimado de no residentes que <strong>residen en estrato 3</strong>",
			    "Proporción (%) estimada de personas que <strong>residen en estrato 2</strong>", //225
			    "Número estimado de personas que <strong>residen en estrato 2</strong>",
			    "Número estimado de no residentes que <strong>residen en estrato 2</strong>",
			    "Proporción (%) estimada de personas que <strong>residen en estrato 1 o una manzana sin estrato</strong>",
			    "Número estimado de personas que <strong>residen en estrato 1 o una manzana sin estrato</strong>",
			    "Número estimado de no residentes que <strong>residen en estrato 1 o una manzana sin estrato</strong>", //230
			    //Activité 6 : démarches admin./perso (Amérique du Sud)
			    "Proporción (%) estimada de personas <strong>ocupadas con trámites administrativos o personales</strong> ",
				"Número estimado de personas <strong>ocupadas con trámites administrativos o personales</strong> ",
				"Número estimado de no residentes <strong>ocupados con trámites administrativos o personales</strong>",
				//Mode 4 : TransMilenio (Bogota)
				"Proporción (%) estimada de personas que utilizaron el <strong>TransMilenio</strong> ", //234
				"Número estimado de personas que utilizaron el <strong>TransMilenio</strong> ",
				"Número estimado de no residentes que utilizaron el <strong>TransMilenio</strong>",
				//composition du ménage (Amérique latine)
				"Proporción (%) estimada de personas que viven en un <strong>hogar compuesto con niño</strong>", //237
			   "Número estimado de personas que viven en un <strong>hogar compuesto con niño</strong>",
			   "Número estimado de no residentes que viven en un <strong>hogar compuesto con niño</strong>",
			   "Proporción (%) estimada de personas que viven en una <strong>familia con niño</strong>", //240
			   "Número estimado de personas que viven en una <strong>familia con niño</strong>",
			   "Número estimado de no residentes que viven en una <strong>familia con niño</strong>",
			   "Proporción (%) estimada de personas que viven en un <strong>hogar compuesto sin niño</strong>", //243
			   "Número estimado de personas que viven en un <strong>hogar compuesto sin niño</strong>",
			   "Número estimado de no residentes que viven en un <strong>hogar compuesto sin niño</strong>",
			   "Proporción (%) estimada de personas que viven en una <strong>familia sin niño</strong>", //246
			   "Número estimado de personas que viven en una <strong>familia sin niño</strong>",
			   "Número estimado de no residentes que viven en una <strong>familia sin niño</strong>",
			   "Proporción (%) estimada de personas que viven <strong>solas</strong>", //249
			   "Número estimado de personas que viven <strong>solas</strong>",
			   "Número estimado de no residentes que viven <strong>solos</strong>",
			   //statut d'occupation dans le logement
			   "Proporción (%) estimada de <strong>propietarios</strong> presentes", //252
				"Número estimado de <strong>propietarios</strong> presentes",
				"Número estimado de <strong>propietarios</strong> no residentes",
				"Proporción (%) estimada de <strong>arrendatarios</strong> presentes", //255
				"Número estimado de <strong>arrendatarios</strong> presentes",
				"Número estimado de <strong>arrendatarios</strong> no residentes",
				"Proporción (%) estimada de <strong>personas albergadas</strong> presentes", //258
				"Número estimado de <strong>personas albergadas</strong> presentes",
				"Número estimado de <strong>personas albergadas</strong> no residentes",
				// âge 15-24 canada
				"Proporción (%) estimada de personas <strong>entre 15 y 24 años</strong>", //261
			   "Número estimado de personas <strong>entre 15 y 24 años</strong>",
			   "Número estimado de no residentes <strong>entre 15 y 24 años</strong>",
			   //composition du ménage (France)
				"Proporción (%) estimada de personas que viven en un <strong>hogar con niño</strong>", //264
			   "Número estimado de personas que viven en un <strong>hogar con niño</strong>",
			   "Número estimado de no residentes que viven en un <strong>hogar con niño</strong>",
			   "Proporción (%) estimada de personas que viven en un <strong>hogar (excepto pareja) sin niño</strong>", //267
			   "Número estimado de personas que viven en un <strong>hogar (excepto pareja) sin niño</strong>",
			   "Número estimado de no residentes que viven en un <strong>hogar (excepto pareja) sin niño</strong>",
			   "Proporción (%) estimada de personas que viven en <strong>pareja sin niño</strong>", //270
			   "Número estimado de personas que viven en un <strong>pareja sin niño</strong>",
			   "Número estimado de no residentes que viven en un <strong>pareja sin niño</strong>",
			   //composition du ménage (Québec)
			   "Proporción (%) estimada de personas que viven en un <strong>hogar sin niño</strong>", //273
			   "Número estimado de personas que viven en un <strong>hogar sin niño</strong>",
			   "Número estimado de no residentes que viven en un <strong>hogar sin niño</strong>"
				];

// Titres des graphique empilés
var titleStacked =["Proporción (%) estimada de personas por <strong>categoría socioprofesional</strong>",
				   "Número estimado de personas por <strong>categoría socioprofesional</strong>",
				   "Número estimado de no residentes por <strong>categoría socioprofesional</strong>",

				   "Proporción (%) estimada de personas por <strong>categoría socioprofesional del hogar</strong>",
				   "Número estimado de personas por <strong>categoría socioprofesional del hogar</strong>",
				   "Número estimado de no residentes por <strong>categoría socioprofesional del hogar</strong>", //5

				   "Número estimado de personas por <strong>nivel educativo</strong>",
				   "Proporción (%) estimada de personas por <strong>nivel educativo</strong>",
				   "Número estimado de no residentes por <strong>nivel educativo</strong>",

				   "Número estimado de personas por <strong>nivel educativo del hogar</strong>",
				   "Proporción (%) estimada de personas por <strong>nivel educativo del hogar</strong>", //10
				   "Número estimado de no residentes por <strong>nivel educativo del hogar</strong>",

				   "Número estimado de personas por <strong>actividad realizada</strong>",
				   "Proporción (%) estimada de personas por <strong>actividad realizada</strong>",
				   "Número estimado de no residentes por <strong>actividad realizada</strong>",

				   "Número estimado de personas por <strong>zona de residencia</strong>", //15
				   "Proporción (%) estimada de personas por <strong>zona de residencia</strong>",
				   "Número estimado de no residentes por <strong>zona de residencia</strong>",

				   "Número estimado de personas por <strong>grupo de edad</strong>",
				   "Proporción (%) estimada de personas por <strong>grupo de edad</strong>",
				   "Número estimado de no residentes por <strong>grupo de edad</strong>", //20

				   "Número estimado de personas por <strong>ocupación principal</strong>",
				   "Proporción (%) estimada de personas por <strong>ocupación principal</strong>",
				   "Número estimado de no residentes por <strong>ocupación principal</strong>",

				   "Número estimado de personas por <strong>sexo</strong>",
				   "Proporción (%) estimada de personas por <strong>sexo</strong>", //25
				   "Número estimado de no residentes por <strong>sexo</strong>",

				   "Número estimado de personas según el <strong>último modo de transporte utilizado</strong>",
				   "Proporción (%) estimada de personas según el <strong>último modo de transporte utilizado</strong>",
				   "Número estimado de no residentes según el <strong>último modo de transporte utilizado</strong>",

				   "Número estimado de personas por <strong>nivel de ingresos del hogar</strong>", //30
				   "Proporción (%) estimada de personas por <strong>nivel de ingresos del hogar</strong>",
				   "Número estimado de no residentes por <strong>nivel de ingresos del hogar</strong>",

				   "Número estimado de personas por <strong>departamento de residencia</strong>",
				   "Proporción (%) estimada de personas por <strong>departamento de residencia</strong>",
				   "Número estimado de no residentes por <strong>departamento de residencia</strong>", //35

				   "Proporción (%) estimada de personas según su <strong>lugar de residencia dentro/fuera Barrios Prioritarios</strong>",
				   "Número estimado de personas según su <strong>lugar de residencia dentro/fuera Barrios Prioritarios</strong>",
				   "Número estimado de no residentes según su <strong>lugar de residencia dentro/fuera Barrios Prioritarios</strong>",

				   "Proporción (%) estimada de personas según su <strong>sector de residencia</strong>",
				   "Número estimado de personas según su <strong>sector de residencia</strong>", //40

				   "Número estimado de personas por <strong>grupo de edad bis</strong>",
				   "Proporción (%) estimada de personas por <strong>grupo de edad bis</strong>",
				   "Número estimado de no residentes por <strong>grupo de edad bis</strong>",

				   "Número estimado de personas según su <strong>(in)formalidad laboral</strong>",
				   "Proporción (%) estimada de personas según su <strong>(in)formalidad laboral</strong>", //45
				   "Número estimado de no residentes según su <strong>(in)formalidad laboral</strong>",

				   "Número estimado de personas según su <strong>anillo de residencia</strong>",
				   "Proporción (%) estimada de personas según su <strong>anillo de residencia</strong>",
				   "Número estimado de no residentes según su <strong>anillo de residencia</strong>", //49

				   "Número estimado de personas según su <strong>estrato socioeconómico de residencia</strong>",
				   "Proporción (%) estimada de personas según su <strong>estrato socioeconómico de residencia</strong>",
				   "Número estimado de no residentes según su <strong>estrato socioeconómico de residencia</strong>", //52

				   "Proporción (%) estimada de personas según la <strong>composición de su hogar</strong>", //53
				   "Número estimado de personas según la <strong>composición de su hogar</strong>",
				   "Número estimado de no residentes según la <strong>composición de su hogar</strong>",

				   "Proporción (%) estimada de personas según su <strong>tenencia en la vivienda</strong>", //56
				   "Número estimado de personas según su <strong>tenencia en la vivienda</strong>",
				   "Número estimado de no residentes según su <strong>tenencia en la vivienda</strong>",

				   // cso
				   "Proporción (%) estimada de personas por <strong>categoría socio-ocupacional</strong>", //59
				   "Número estimado de personas por <strong>categoría socio-ocupacional</strong>",
				   "Número estimado de no residentes por <strong>categoría socio-ocupacional</strong>",
				   ];


var spanPopup = ["<span class = 'help' onclick = 'popup_mapTitle1()'></span>"];

//Nom des indicateurs
var indicator = ["el grupo de edad", "el sexo", "el nivel educativo", "el nivel educativo del hogar",
				"la categoría socioprofesional", "la categoría socioprofesional del hogar",
				"la ocupación principal", "la zona de residencia", "la actividad realizada", "el modo de transporte utilizado",
				"los ingresos del hogar", "el departamento de residencia", "la residencia dentro/fuera Barrios Prioritarios",
				"el grupo de edad bis", "la informalidad laboral", "el anillo de residencia",
				"el estrato socioeconómico de residencia", "la composición del hogar", "la tenencia de la vivienda",
				"la categoría socio-ocupacional"];

// Titres de Duncan et de Moran
var titleSegreg = ["Intensidad de la segregación según",
				   " (Duncan) <span class = 'help' onclick = 'popup_duncan()'></span>",
                   " (Moran) <span class = 'help' onclick = 'popup_moran()'></span>",
                   "Grado de proximidad espacial por"];



// Déclaration des variables appelées dans load.js
//Nom des couches OSM
var overlayName = ['Mapa simple', 'Mapa detallado', 'Barrios Prioritarios - France',
					'Municipios/localidades', 'Mapa Mobiliscope', 'Anillos centro/periferia', 
					'Foto aérea', 'Mapa oscuro'];
var lcHover = ['Capas'];

// Sous-titre du bandeau entête
var subTitle = "La ciudad a todas horas";

// Checkbox
var layersName = ["Vias ", "Río", "Ciudades principales"]

// Copyright
var d = new Date();
//var copy = " Mobiliscope - " + d.getFullYear() + " (" + "<a href='/fr/info/about/evolution'>v4.0</a>" + ")";
var copy = "Mobiliscope (" + "<a href='/fr/info/open/evolution' target='_blank'>v4.1</a>" + ")";

// Main title des graphiques
var titleGraph1 = "EN TODA LA REGIÓN";
var titleGraph2 = "EN EL SECTOR SELECCIONADO";

// Messages des graphiques
var graph1Message = "Los indicadores de segregación no están disponibles para este indicador o modo de representación";
var graph2Message = "Seleccione un sector del mapa para obtener los valores";

//Nom des onglets des graphiques
var titleAltGr1 = ["Duncan", "Moran"];
var titleAltGr2 = ["Simple", "Apilado"];

// Textes des légendes
var discretMethod = ['</br>Clasificación en quintiles. ',
					 '</br>Clasificación manual. ',
					 '</br>Clasificación de igual amplitud. ',
					 '</br>Clasificación de rupturas naturales. '];
var textLegChoro = ["Para cada modalidad, los intervalos de clase se mantienen idénticos a lo largo de las 24 horas para la misma región.",
					"Clasificación para promedios anidados. Las clases se mantienen idénticas durante las 24 horas para la misma región.",
					"Para esta modalidad, los intervalos de clase se mantienen idénticos a lo largo de las 24 horas y para todas las regiones.",
					"Los intervalos de clases se mantienen idénticos a lo largo de las 24 horas para todas las modalidades del indicador y para todas las regiones francesas.",
					"Los intervalos de clases son los mismos a lo largo de las 24 horas para todas las modalidades del indicador.",
					"Los intervalos de clases son los mismos a lo largo de las 24 horas para todas las ciudades latinoamericanas."];
var textLegProp = "La proporcionalidad de los círculos es la misma para todos los mapas de la misma región.";
var textLegFlow = ["La proporcionalidad de los círculos es la misma para todos los mapas de la misma región.",
				   "El grosor de los vínculos principales corresponde al número de personas presentes en el sector seleccionado y que viven en el sector vinculado."];
var textLeg = ["Media:",
			   " o menos",
			   "% a las ",
			   " o más"];

var Xgraph = ["4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h", "0h", "2h"];

var sliderValue = ["4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "0h", "1h", "2h", "3h"];

var sliderValueDomX = ["4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am"];

// city name "et sa région" + tooltips
var endof = " y su región";
var tooltipProp = "proporción";
var tooltipDens = "densidad";
var tooltipNb = "número";
var tooltipFlux = "flujos";
var tooltipPlay = "Iniciar la animación";
var tooltipPause = "Detener la animación";
var alClose = "Cerrar gráficos";
var alDisplay = "Mostrar gráficos";

// système de partage de lien
var shareLocalText = ['en las 24 horas del día','¡Copiado al portapapeles!','Copiar URL de la página'];

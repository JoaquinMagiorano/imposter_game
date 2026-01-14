// Categorias harcodeadas a mano
const CATEGORIES = {
    animales: {
        nombre: "🐾 Animales",
        palabras: [
            { palabra: "Perro", pistas: ["lealtad","olfato","vigía","hogar","alerta"] },
            { palabra: "Gato", pistas: ["sigilo","alfombra","mimo","equilibrio","independencia"] },
            { palabra: "León", pistas: ["corona","pradera","rugido","manada","fuerza"] },
            { palabra: "Elefante", pistas: ["memoria","columna","trompa","tamaño","manada"] },
            { palabra: "Tigre", pistas: ["rayado","emboscada","solitario","selva","fuerza"] },
            { palabra: "Caballo", pistas: ["galope","monta","transporte","velocidad","resistencia"] },
            { palabra: "Delfín", pistas: ["eco","escuela","salto","inteligencia","grupo"] },
            { palabra: "Águila", pistas: ["altura","garras","visión","vuelo","caza"] },
            { palabra: "Tiburón", pistas: ["depredador","mar","olfato","aleta","caza"] },
            { palabra: "Oso", pistas: ["invernar","fortaleza","colmena","bosque","peso"] },
            { palabra: "Ballena", pistas: ["vasto","canto","profundidad","océano","tamaño"] },
            { palabra: "Pingüino", pistas: ["filo","hielo","formación","frío","nado"] },
            { palabra: "Jirafa", pistas: ["altorrelieve","ramas","manchado","cuello","altura"] },
            { palabra: "Cebra", pistas: ["contraste","manada","camuflaje","rayas","sabana"] },
            { palabra: "Cocodrilo", pistas: ["acecho","mandíbula","estuarios","río","quietud"] },
            { palabra: "Serpiente", pistas: ["desliz","muda","silencio","escamas","veneno"] },
            { palabra: "Búho", pistas: ["nocturno","giro","místico","noche","vuelo"] },
            { palabra: "Loro", pistas: ["eco","plumas","sabio","colores","voz"] },
            { palabra: "Canguro", pistas: ["salto","bolsa","austral","patas","movimiento"] },
            { palabra: "Koala", pistas: ["eucalipto","letargo","mimoso","árbol","lento"] },
            { palabra: "Pulpo", pistas: ["tentáculo","camufla","inteligencia","tinta","mar"] },
            { palabra: "Mariposa", pistas: ["metamorfosis","ligereza","alas","color","vuelo"] },
            { palabra: "Abeja", pistas: ["colmena","zángano","polen","miel","vuelo"] },
            { palabra: "Hormiga", pistas: ["colonia","fuerza","ruta","trabajo","orden"] },
            { palabra: "Camaleón", pistas: ["tono","reposo","lengua","color","cambio"] }
        ]
    },
    lugares_inter: {
        nombre: "🌍 Lugares (Internacionales)",
        palabras: [
            { palabra: "París", pistas: ["arte","romance","moda","turismo","historia"] },
            { palabra: "Londres", pistas: ["lluvia","historia","teatro","multicultural","ciudad"] },
            { palabra: "Roma", pistas: ["ruinas","imperio","plaza","antiguo","turismo"] },
            { palabra: "Tokio", pistas: ["tecnología","tradición","multitud","islas","ritmo"] },
            { palabra: "Nueva-York", pistas: ["rascacielos","ciudad","negocios","multitud","cultura"] },
            { palabra: "Berlín", pistas: ["muro","historia","arte","cambio","ciudad"] },
            { palabra: "Moscú", pistas: ["frío","capital","plaza","historia","poder"] },
            { palabra: "Barcelona", pistas: ["arquitectura","playa","Gaudí","diseño","turismo"] },
            { palabra: "Dubái", pistas: ["lujo","rascacielos","desierto","comercio","expansión"] },
            { palabra: "Atenas", pistas: ["ruinas","partenón","filosofía","antigüedad","historia"] },
            { palabra: "Sídney", pistas: ["puerto","playa","ópera","puente","lejos"] },

            { palabra: "México", pistas: ["comida","cultura","tradición","colores","país"] },
            { palabra: "Brasil", pistas: ["carnaval","fútbol","selva","playa","país"] },
            { palabra: "Colombia", pistas: ["café","montaña","caribe","diversidad","país"] },
            { palabra: "Chile", pistas: ["andes","largo","vino","costas","país"] },
            { palabra: "Perú", pistas: ["ruinas","cocina","andes","cultura","país"] },
            { palabra: "Venezuela", pistas: ["caribe","petroleo","diversidad","montañas","país"] },
            { palabra: "Cuba", pistas: ["música","caribe","historia","clásico","país"] },
            { palabra: "Uruguay", pistas: ["mate","playa","fútbol","pequeño","país"] },
            { palabra: "Ecuador", pistas: ["islas","biodiversidad","montaña","galápagos","país"] },
            { palabra: "Bolivia", pistas: ["altiplano","lagos","tradición","diversidad","país"] }
        ]
    },
    lugares_arg: {
        nombre: "🇦🇷 Lugares (Argentina)",
        palabras: [
            { palabra: "Provincia de Buenos-Aires", pistas: ["pampa","agro","puerto","extenso","provincia"] },
            { palabra: "Catamarca", pistas: ["montaña","mineral","tranquilidad","altiplano","tradición"] },
            { palabra: "Chaco", pistas: ["calor","sabanas","quebradizo","bosque","rural"] },
            { palabra: "Chubut", pistas: ["patagonia","costa","pesca","petróleo","extensión"] },
            { palabra: "Córdoba-Prov", pistas: ["sierras","universidad","industria","tradición","centrica"] },
            { palabra: "Corrientes (Provincia)", pistas: ["litoral","río","chamamé","humedal","fiesta"] },
            { palabra: "Entre Ríos", pistas: ["río","islas","puente","termal","ferry"] },
            { palabra: "Formosa  (Provincia)", pistas: ["humedal","frontera","calor","río","rural"] },
            { palabra: "Jujuy", pistas: ["quebrada","altiplano","color","culto","tradicional"] },
            { palabra: "La Pampa", pistas: ["llanura","ganadería","vasto","tranquilo","agro"] },
            { palabra: "La Rioja (Provincia)", pistas: ["montaña","vinos","arqueología","sol","pueblo"] },
            { palabra: "Mendoza (Provincia)", pistas: ["viñedos","cordillera","riego","sol","ruta"] },
            { palabra: "Misiones", pistas: ["selva","cataratas","biodiversidad","humedad","turismo"] },
            { palabra: "Neuquén (Provincia)", pistas: ["andes","gas","lagos","estepa","norte-patagónico"] },
            { palabra: "Río Negro", pistas: ["valle","costas","frontera-patagónica","río","turismo"] },
            { palabra: "Salta (Provincia)", pistas: ["altitud","colonial","folklore","cerro","paisaje"] },
            { palabra: "San Juan (Provincia)", pistas: ["desierto","minería","viñedos","cordón","sol"] },
            { palabra: "San Luis (Provincia)", pistas: ["sierras","tranquilidad","lago","infraestructura","campo"] },
            { palabra: "Santa Cruz", pistas: ["glaciares","estepa","viento","patagonia","frío"] },
            { palabra: "Santa Fe", pistas: ["río","agro","puerto","industrial","ferro"] },
            { palabra: "Santiago-del-Estero", pistas: ["calor","tradición","chacarera","río","rural"] },
            { palabra: "Tierra del Fuego", pistas: ["islas","frío","antártico","fin-del-mundo","puerto"] },
            { palabra: "Tucumán", pistas: ["norte","hortalizas","historia","densidad","azúcar"] },

            { palabra: "Buenos-Aires", pistas: ["puerto","tango","teatro","capital","multitud"] },
            { palabra: "La-Plata", pistas: ["diagonal","universidad","capital-provincial","plaza","museo"] },
            { palabra: "Córdoba", pistas: ["sierras","universidad","patio","nocturna","centrica"] },
            { palabra: "Rosario", pistas: ["río","bandera","puerto","cultura","monumento"] },
            { palabra: "Mendoza", pistas: ["vinos","cordón","bodega","plaza","oleaje-de-montaña"] },
            { palabra: "Mar-del-Plata", pistas: ["playa","verano","balneario","oleaje","turismo"] },
            { palabra: "Bariloche", pistas: ["lago","cerro","chocolate","nieve","cabañas"] },
            { palabra: "Ushuaia", pistas: ["fin-del-mundo","canal","frío","lejanía","puerto"] },
            { palabra: "El-Calafate", pistas: ["glaciar","laguna","hielo","trekking","turismo"] },
            { palabra: "El-Chaltén", pistas: ["trekking","cumbre","sendero","viento","montaña"] },
            { palabra: "Puerto-Madryn", pistas: ["ballenas","golfo","avistaje","mar","biodiversidad"] },
            { palabra: "San-Miguel-de-Tucumán", pistas: ["historia","plaza","densidad","norte","puertas"] },
            { palabra: "Salta", pistas: ["colonial","cerro","folklore","altitud","cabildo"] },
            { palabra: "Posadas", pistas: ["río","frontera","misiones","puente","cultura"] },
            { palabra: "Paraná", pistas: ["río","capital","puente","costanera","provincial"] },
            { palabra: "Viedma", pistas: ["río","capital","playa-cercana","bahía","conexión"] },
            { palabra: "Bahía-Blanca", pistas: ["puerto","industria","bahía","pampa","conexión"] },
            { palabra: "Tandil", pistas: ["sierras","rocas","panorama","tradición","sendero"] },
        ]
    },
    comida: {
        nombre: "🍽️ Comida",
        palabras: [
            { palabra: "Pizza", pistas: ["italia","horno","queso","masa","rodajas"] },
            { palabra: "Hamburguesa", pistas: ["estados unidos","carne","pan","rápido","doble"] },
            { palabra: "Sushi", pistas: ["japón","arroz","crudo","rollos","algas"] },
            { palabra: "Tacos", pistas: ["méxico","maíz","mano","relleno","plegado"] },
            { palabra: "Tortilla", pistas: ["españa","papas","cebolla","sartén","gruesa"] },
            { palabra: "Burrito", pistas: ["méxico","envoltura","abundante","arroz","relleno"] },
            { palabra: "Lasaña", pistas: ["italia","capas","horno","pasta","salsa"] },
            { palabra: "Empanada", pistas: ["españa","relleno","masa","horno","repulgue"] },
            { palabra: "Pancho", pistas: ["estados unidos","salchicha","pan","rápido","mostaza"] },
            { palabra: "Asado", pistas: ["argentina","familia","fuego","carne","parrilla"] },
            { palabra: "Rosquilla", pistas: ["estados unidos","anillo","glaseado","dulce","frito"] },
            { palabra: "Tiramisú", pistas: ["italia","café","capas","frío","postre"] },
            { palabra: "Churro", pistas: ["españa","azúcar","frito","alargado","dulce"] },
            { palabra: "Milanesa", pistas: ["argentina","empanado","carne","frito","limón"] },
            { palabra: "Choripán", pistas: ["argentina","chorizo","pan","parrilla","calle"] },
            { palabra: "Locro", pistas: ["argentina","guiso","maíz","lento","tradición"] },
            { palabra: "Dulce-de-leche", pistas: ["argentina","dulce","espeso","postre","untable"] },
            { palabra: "Alfajor", pistas: ["argentina","galletas","relleno","dulce","chocolate"] },
            { palabra: "Provoleta", pistas: ["argentina","queso","parrilla","fundido","entrada"] }
        ]
    },
    trabajos: {
        nombre: "💼 Trabajos",
        palabras: [
            { palabra: "Médico", pistas: ["evaluar","decisión","cuidado","diagnóstico","responsabilidad"] },
            { palabra: "Profesor", pistas: ["orientar","proceso","aprendizaje","explicación","seguimiento"] },
            { palabra: "Abogado", pistas: ["defensa","criterio","acuerdo","argumento","interpretación"] },
            { palabra: "Ingeniero", pistas: ["análisis","solución","diseño","optimización","cálculo"] },
            { palabra: "Arquitecto", pistas: ["concepto","estructura","forma","planificación","espacio"] },
            { palabra: "Chef", pistas: ["creación","equilibrio","resultado","técnica","presentación"] },
            { palabra: "Enfermero", pistas: ["atención","constancia","apoyo","seguimiento","cuidado"] },
            { palabra: "Bombero", pistas: ["respuesta","riesgo","acción","urgencia","coordinación"] },
            { palabra: "Policía", pistas: ["vigilancia","intervención","orden","control","presencia"] },
            { palabra: "Carpintero", pistas: ["medición","precisión","ensamble","corte","acabado"] },
            { palabra: "Plomero", pistas: ["flujo","control","ajuste","presión","conexión"] },
            { palabra: "Electricista", pistas: ["conexión","seguridad","corte","voltaje","revisión"] },
            { palabra: "Mecánico", pistas: ["diagnóstico","corrección","función","revisión","ajuste"] },
            { palabra: "Jardinero", pistas: ["cuidado","ritmo","crecimiento","poda","mantenimiento"] },
            { palabra: "Pintor", pistas: ["cobertura","tono","acabado","superficie","detalle"] },
            { palabra: "Soldador", pistas: ["unión","temperatura","resistencia","precisión","material"] },
            { palabra: "Albañil", pistas: ["nivel","progreso","base","estructura","mezcla"] },
            { palabra: "Zapatero", pistas: ["ajuste","uso","durabilidad","reparación","material"] },
            { palabra: "Sastre", pistas: ["medida","forma","detalle","corte","acabado"] },
            { palabra: "Panadero", pistas: ["tiempo","volumen","transformación","fermentación","horno"] },
            { palabra: "Carnicero", pistas: ["selección","sección","preparación","corte","calidad"] },
            { palabra: "Herrero", pistas: ["fuerza","moldeo","resistencia","calor","metal"] },
            { palabra: "Cerrajero", pistas: ["mecanismo","acceso","precisión","seguridad","ajuste"] },
            { palabra: "Tapicero", pistas: ["textura","ajuste","renovar","material","detalle"] },
            { palabra: "Barrendero", pistas: ["recorrido","limpieza","constancia","orden","rutina"] }
        ]
    },
    peliculas: {
        nombre: "🎬 Películas",
        palabras: [
            { palabra: "Titanic", pistas: ["viaje","destino","ruptura","tragedia","romance"] },
            { palabra: "Avatar", pistas: ["entorno","conexión","conflicto","invasión","equilibrio"] },
            { palabra: "Star-Wars", pistas: ["equilibrio","legado","lucha","fuerza","destino"] },
            { palabra: "Harry-Potter", pistas: ["formación","vínculo","despertar","magia","crecimiento"] },
            { palabra: "Matrix", pistas: ["elección","realidad","control","despertar","sistema"] },
            { palabra: "Avengers", pistas: ["alianza","amenaza","sacrificio","equipo","batalla"] },
            { palabra: "Jurassic-Park", pistas: ["control","error","caos","ciencia","naturaleza"] },
            { palabra: "Inception", pistas: ["nivel","idea","percepción","sueño","confusión"] },
            { palabra: "Gladiador", pistas: ["honor","espectáculo","venganza","combate","imperio"] },
            { palabra: "Forrest-Gump", pistas: ["recorrido","azar","persistencia","vida","historia"] },
            { palabra: "El-Padrino", pistas: ["poder","familia","lealtad","traición","herencia"] },
            { palabra: "Terminator", pistas: ["amenaza","futuro","persecución","máquina","destino"] },
            { palabra: "Rocky", pistas: ["esfuerzo","superación","reto","disciplina","caída"] },
            { palabra: "Shrek", pistas: ["identidad","parodia","aceptación","cuento","humor"] },
            { palabra: "Buscando-Nemo", pistas: ["búsqueda","protección","aprendizaje","océano","familia"] },
            { palabra: "Toy-Story", pistas: ["cambio","pertenencia","desapego","amistad","crecer"] },
            { palabra: "Frozen", pistas: ["vínculo","control","liberación","miedo","afecto"] },
            { palabra: "Batman", pistas: ["justicia","dualidad","sombra","venganza","ciudad"] },
            { palabra: "Superman", pistas: ["origen","responsabilidad","esperanza","poder","protección"] },
            { palabra: "Spider-Man", pistas: ["culpa","equilibrio","madurez","sacrificio","identidad"] },
            { palabra: "Iron-Man", pistas: ["ingenio","ego","redención","tecnología","cambio"] },
            { palabra: "Alien", pistas: ["encierro","supervivencia","amenaza","oscuridad","aislamiento"] },
            { palabra: "Rambo", pistas: ["aislamiento","resistencia","conflicto","guerra","trauma"] },
            { palabra: "E.T.", pistas: ["encuentro","empatía","retorno","amistad","hogar"] },
            { palabra: "Volver-Futuro", pistas: ["causa","consecuencia","paradoja","tiempo","decisión"] }
        ]
    },
    series: {
        nombre: "📺 Series",
        palabras: [
            { palabra: "Los-Simpsons", pistas: ["rutina","ironía","familia","sátira","cotidiano"] },
            { palabra: "Friends", pistas: ["vínculo","cotidiano","transición","amistad","etapas"] },
            { palabra: "Breaking-Bad", pistas: ["transformación","ambición","decadencia","decisión","doble-vida"] },
            { palabra: "Game-Thrones", pistas: ["poder","alianzas","traición","reinos","conflicto"] },
            { palabra: "Stranger-Things", pistas: ["ruptura","amistad","amenaza","misterio","infancia"] },
            { palabra: "The-Office", pistas: ["dinámica","observación","incomodidad","rutina","humor"] },
            { palabra: "Lost", pistas: ["incertidumbre","destino","conexión","misterio","aislamiento"] },
            { palabra: "Prison-Break", pistas: ["planificación","riesgo","escape","urgencia","ingenio"] },
            { palabra: "Walking-Dead", pistas: ["escasez","adaptación","supervivencia","amenaza","grupo"] },
            { palabra: "Narcos", pistas: ["ascenso","control","violencia","poder","caída"] },
            { palabra: "Casa-De-Papel", pistas: ["estrategia","presión","tiempo","plan","tensión"] },
            { palabra: "Squid-Game", pistas: ["competencia","desigualdad","decisión","riesgo","juego"] },
            { palabra: "Peaky-Blinders", pistas: ["ambición","jerarquía","expansión","familia","poder"] },
            { palabra: "Sherlock", pistas: ["observación","lógica","deducción","detalle","misterio"] },
            { palabra: "Black-Mirror", pistas: ["impacto","proyección","consecuencia","tecnología","futuro"] },
            { palabra: "Mandalorian", pistas: ["trayecto","protección","código","viaje","soledad"] },
            { palabra: "Westworld", pistas: ["conciencia","bucle","libertad","control","identidad"] },
            { palabra: "Big-Bang-Theory", pistas: ["contraste","convivencia","torpeza","amistad","rutina"] },
            { palabra: "Dexter", pistas: ["control","dualidad","ritual","secreto","tensión"] },
            { palabra: "House", pistas: ["análisis","conflicto","ingenio","diagnóstico","ironía"] },
            { palabra: "Vikings", pistas: ["expansión","honor","conquista","batalla","tradición"] },
            { palabra: "Chernobyl", pistas: ["falla","ocultamiento","impacto","riesgo","responsabilidad"] },
            { palabra: "Wednesday", pistas: ["distancia","ironía","observación","misterio","identidad"] },
            { palabra: "Succession", pistas: ["herencia","poder","manipulación","familia","conflicto"] },
            { palabra: "The-Crown", pistas: ["deber","imagen","continuidad","tradición","poder"] }
        ]
    },
    vida_cotidiana: {
        nombre: "🏠 Vida Cotidiana",
        palabras: [
            { palabra: "Cepillo-dientes", pistas: ["rutina","fricción","espuma","contacto","repetición"] },
            { palabra: "Reloj", pistas: ["ritmo","medición","ciclo","secuencia","continuidad"] },
            { palabra: "Llave", pistas: ["acceso","control","encaje","habilitación","dependencia"] },
            { palabra: "Paraguas", pistas: ["protección","apertura","clima","cobertura","respuesta"] },
            { palabra: "Espejo", pistas: ["imagen","simetría","reflejo","proyección","observación"] },
            { palabra: "Almohada", pistas: ["apoyo","descanso","presión","posición","comodidad"] },
            { palabra: "Sábana", pistas: ["cobertura","contacto","textil","envolver","continuidad"] },
            { palabra: "Toalla", pistas: ["absorción","secado","fibra","retención","contacto"] },
            { palabra: "Cuchara", pistas: ["curvatura","recoger","líquido","traslado","dosificación"] },
            { palabra: "Tenedor", pistas: ["agarre","separación","puntas","estabilidad","control"] },
            { palabra: "Cuchillo", pistas: ["precisión","corte","dirección","separación","presión"] },
            { palabra: "Vaso", pistas: ["contención","vertical","sorbo","límite","soporte"] },
            { palabra: "Plato", pistas: ["superficie","soporte","centro","disposición","estabilidad"] },
            { palabra: "Silla", pistas: ["soporte","pausa","estructura","equilibrio","reposo"] },
            { palabra: "Mesa", pistas: ["base","reunión","plano","soporte","organización"] },
            { palabra: "Lámpara", pistas: ["foco","ambiente","energía","dirección","intensidad"] },
            { palabra: "Control-remoto", pistas: ["distancia","secuencia","comando","intermediación","orden"] },
            { palabra: "Celular", pistas: ["conexión","interfaz","portátil","atención","respuesta"] },
            { palabra: "Cartera", pistas: ["resguardo","contenido","acceso","organización","dependencia"] },
            { palabra: "Mochila", pistas: ["carga","transporte","espalda","distribución","capacidad"] },
            { palabra: "Zapatos", pistas: ["impacto","protección","pisada","estabilidad","desplazamiento"] },
            { palabra: "Peine", pistas: ["orden","desliz","alinear","separación","dirección"] },
            { palabra: "Jabón", pistas: ["emulsión","higiene","espuma","disolución","arrastre"] },
            { palabra: "Despertador", pistas: ["alerta","inicio","interrupción","transición","urgencia"] },
            { palabra: "Escoba", pistas: ["arrastre","limpieza","ritmo","acumulación","dirección"] },
            { palabra: "Tacho de basura", pistas: ["descarte","acumulación","residuo","separación","final"] },
            { palabra: "Cortina", pistas: ["filtro","privacidad","caída","gradiente","límite"] },
            { palabra: "Ventilador", pistas: ["circulación","flujo","alivio","movimiento","dispersión"] },
            { palabra: "Enchufe", pistas: ["conexión","energía","contacto","dependencia","activación"] },
            { palabra: "Interruptor", pistas: ["cambio","estado","control","transición","decisión"] },
            { palabra: "Cuaderno", pistas: ["registro","secuencia","papel","acumulación","memoria"] },
            { palabra: "Bolígrafo", pistas: ["trazo","fluidez","presión","continuidad","marca"] },
            { palabra: "Agenda", pistas: ["orden","planificación","tiempo","prioridad","estructura"] },
            { palabra: "Gafas", pistas: ["corrección","enfoque","visión","claridad","ajuste"] },
            { palabra: "Cinturón", pistas: ["sujeción","ajuste","cierre","tensión","estabilidad"] },
            { palabra: "Llaves", pistas: ["conjunto","rutina","dependencia","control","acceso"] },
            { palabra: "Termo", pistas: ["aislamiento","temperatura","retención","conservación","duración"] },
            { palabra: "Auriculares", pistas: ["inmersión","sonido","privado","aislamiento","atención"] },
            { palabra: "Cargador", pistas: ["recuperación","flujo","espera","dependencia","proceso"] },
            { palabra: "Calendario", pistas: ["organización","referencia","ciclo","anticipación","orden"] }
        ]
    },
    deportes: {
        nombre: "⚽ Deportes",
        palabras: [
            { palabra: "Fútbol", pistas: ["equipo","ritmo","estrategia","espacio","transición"] },
            { palabra: "Baloncesto", pistas: ["altura","fluidez","posesión","velocidad","lectura"] },
            { palabra: "Tenis", pistas: ["intercambio","precisión","rebote","timing","concentración"] },
            { palabra: "Voleibol", pistas: ["coordinación","red","rotación","sincronía","anticipación"] },
            { palabra: "Natación", pistas: ["resistencia","fluido","respiración","regularidad","control"] },
            { palabra: "Atletismo", pistas: ["marca","progresión","esfuerzo","constancia","superación"] },
            { palabra: "Ciclismo", pistas: ["ritmo","trayecto","resistencia","cadencia","gestión"] },
            { palabra: "Boxeo", pistas: ["ritmo","impacto","defensa","anticipación","resistencia"] },
            { palabra: "Rugby", pistas: ["avance","contacto","territorio","cohesión","sacrificio"] },
            { palabra: "Golf", pistas: ["calma","precisión","recorrido","control","planificación"] },
            { palabra: "Surf", pistas: ["timing","fluidez","balance","lectura","adaptación"] },
            { palabra: "Béisbol", pistas: ["turno","anticipación","coordinación","espera","ejecución"] }
        ]
    },
    eventos_sociales: {
        nombre: "🎉 Eventos Sociales",
        palabras: [
            { palabra: "Fiesta", pistas: ["ambiente","interacción","energía","dinámica","flujo"] },
            { palabra: "Boda", pistas: ["unión","ritual","expectativa","compromiso","celebración"] },
            { palabra: "Reunión", pistas: ["intercambio","agenda","coordinación","acuerdo","organización"] },
            { palabra: "Cumpleaños", pistas: ["celebración","ciclo","atención","marca","ritual"] },
            { palabra: "Graduación", pistas: ["transición","logro","etapa","cierre","proyección"] },
            { palabra: "Concierto", pistas: ["multitud","ritmo","emoción","experiencia","intensidad"] },
            { palabra: "Manifestación", pistas: ["colectivo","mensaje","presión","expresión","visibilidad"] },
            { palabra: "Cita", pistas: ["expectativa","vínculo","tensión","encuentro","intención"] },
            { palabra: "Cena", pistas: ["convivencia","pausa","intercambio","ritmo","presencia"] },
            { palabra: "Velorio", pistas: ["presencia","silencio","respeto","acompañamiento","despedida"] },
            { palabra: "Conferencia", pistas: ["exposición","atención","mensaje","transmisión","enfoque"] },
            { palabra: "Feria", pistas: ["recorrido","oferta","variedad","interacción","movimiento"] },
            { palabra: "Desfile", pistas: ["observación","orden","exhibición","secuencia","ritmo"] },
            { palabra: "Asamblea", pistas: ["deliberación","decisión","grupo","participación","consenso"] }
        ]
    }
};

// Variables de estado
let gameState = {
    selectedCategories: [],
    players: [],
    impostorsCount: 1,
    gameTime: 5,
    currentPlayerIndex: 0,
    currentWord: null,
    selectedWordObj: null,
    playerRoles: [],
    alivePlayers: [],
    selectedPlayerToEliminate: null,
    gameTimer: null,
    remainingImpostors: 0,
    anonymousMode: false,
    teamImpostorsMode: false,
    blindImpostorMode: false,
};

// Carga inicial
function init() {
    loadPlayers();
    renderCategories();
    renderPlayers();
    setupSwipeReveal();
}

function loadPlayers() {
    const saved = localStorage.getItem('impostorPlayers');
    if (saved) {
        gameState.players = JSON.parse(saved);
    }
}

function savePlayers() {
    localStorage.setItem('impostorPlayers', JSON.stringify(gameState.players));
}

function renderCategories() {
    const container = document.getElementById('categories-list');
    container.innerHTML = '';
    
    Object.keys(CATEGORIES).forEach(catKey => {
        const category = CATEGORIES[catKey];
        const div = document.createElement('div');
        div.className = 'col-md-4 mb-3';
        const isSelected = gameState.selectedCategories.includes(catKey);
        const selectedClass = isSelected ? 'selected' : '';
        
        div.innerHTML = `
            <div class="category-item card p-3 text-center ${selectedClass}" onclick="toggleCategory('${catKey}')">
                <h5 class="mb-0">${category.nombre}</h5>
            </div>
        `;
        container.appendChild(div);
    });
}

function toggleCategory(category) {
    const index = gameState.selectedCategories.indexOf(category);
    const element = event.currentTarget;
    
    if (index === -1) {
        gameState.selectedCategories.push(category);
        element.classList.add('selected');
    } else {
        gameState.selectedCategories.splice(index, 1);
        element.classList.remove('selected');
    }
}

function addPlayer() {
    const input = document.getElementById('player-name-input');
    const name = input.value.trim();
    
    if (name && !gameState.players.includes(name)) {
        gameState.players.push(name);
        savePlayers();
        renderPlayers();
        input.value = '';
    }
}

function removePlayer(name) {
    gameState.players = gameState.players.filter(p => p !== name);
    savePlayers();
    renderPlayers();
}

function renderPlayers() {
    const container = document.getElementById('players-list');
    container.innerHTML = '';
    
    if (gameState.players.length === 0) {
        container.innerHTML = '<p class="text-muted">No hay jugadores añadidos</p>';
        return;
    }
    
    gameState.players.forEach(player => {
        const div = document.createElement('div');
        div.className = 'player-item badge bg-primary me-2 mb-2 p-2 fs-6';
        div.style.display = 'inline-block';
        div.innerHTML = `
            ${player} 
            <span onclick="removePlayer('${player}')" style="cursor: pointer; margin-left: 5px;">✕</span>
        `;
        container.appendChild(div);
    });
}

// Desliz de pantalla de rol
function setupSwipeReveal() {
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    const overlay = document.getElementById('reveal-overlay');
    
    function handleStart(e) {
        isDragging = true;
        startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        overlay.style.transition = 'none';
    }
    
    function handleMove(e) {
        if (!isDragging) return;
        
        currentY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        const deltaY = startY - currentY;
        
        if (deltaY > 0) {
            const translateY = -Math.min(deltaY, overlay.offsetHeight);
            overlay.style.transform = `translateY(${translateY}px)`;
        }
    }
    
    function handleEnd() {
        if (!isDragging) return;
        isDragging = false;
        
        overlay.style.transition = 'transform 0.3s ease-out';
        overlay.style.transform = 'translateY(0)';
    }
    
    overlay.addEventListener('mousedown', handleStart);
    overlay.addEventListener('touchstart', handleStart);
    
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);
    
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
}

// Start
function startGame() {
    if (gameState.selectedCategories.length === 0) {
        alert('Selecciona al menos una categoría');
        return;
    }
    
    if (gameState.players.length < 3) {
        alert('Se necesitan al menos 3 jugadores');
        return;
    }
    
    const impostorsCount = parseInt(document.getElementById('impostors-count').value);
    if (impostorsCount >= gameState.players.length) {
        alert('El número de impostores debe ser menor al número de jugadores');
        return;
    }
    
    gameState.impostorsCount = impostorsCount;
    gameState.gameTime = parseInt(document.getElementById('game-time').value);
    
    const allWords = [];
    gameState.selectedCategories.forEach(catKey => {
        allWords.push(...CATEGORIES[catKey].palabras);
    });
    gameState.selectedWordObj = allWords[Math.floor(Math.random() * allWords.length)];
    gameState.currentWord = gameState.selectedWordObj.palabra;
    
    // Asignar roles
    assignRoles();
    
    // Fase de revelacion
    gameState.currentPlayerIndex = 0;
    showScreen('screen-reveal');
    showPlayerReveal();
}

function assignRoles() {
    //Array de los roles (true = impostor, false = civil)
    const roles = [];
    for (let i = 0; i < gameState.players.length; i++) {
        roles.push(i < gameState.impostorsCount);
    }
    
    //Se mezclan con el algoritmo Fisher-Yates (es buenisimo, googleenlo)
    for (let i = roles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [roles[i], roles[j]] = [roles[j], roles[i]];
    }
    
    //Se asignan los roles mezclados a los jugadores
    gameState.playerRoles = gameState.players.map((name, index) => ({
        name: name,
        isImpostor: roles[index],
        isAlive: true
    }));
    
    gameState.alivePlayers = [...gameState.playerRoles];
    gameState.remainingImpostors = gameState.impostorsCount;
}


// Revelacion de roles
function showPlayerReveal() {
    const player = gameState.playerRoles[gameState.currentPlayerIndex];
    const playerNameElement = document.getElementById('current-player-name');
    
    // Animacion de cambio
    const banner = document.querySelector('.player-turn-banner');
    banner.classList.remove('player-change-animation');
    void banner.offsetWidth;
    banner.classList.add('player-change-animation');
    
    playerNameElement.textContent = player.name;
    
    // Resetear overlay
    const overlay = document.getElementById('reveal-overlay');
    overlay.style.transform = 'translateY(0)';
    
    if (player.isImpostor) {
        let hintContent = '';
        if (gameState.blindImpostorMode) {
            // Sin pista
            hintContent = '<div style="font-size: 1.5rem; color: #e74c3c;">Sin pista - ¡Adiviná!</div>';
        } else {
            // Con pista
            const randomHint = gameState.selectedWordObj.pistas[
                Math.floor(Math.random() * gameState.selectedWordObj.pistas.length)
            ];
            hintContent = `<div style="font-size: 1.5rem; color: #3498db;">Pista: ${randomHint}</div>`;
        }
        
        // Obtener info de compañeros impostores
        let teamInfo = '';
        if (gameState.teamImpostorsMode && gameState.impostorsCount > 1) {
            const otherImpostors = gameState.playerRoles
                .filter(p => p.isImpostor && p.name !== player.name)
                .map(p => p.name);
            
            if (otherImpostors.length > 0) {
                teamInfo = `
                    <div class="mt-3 p-3" style="background: rgba(231, 76, 60, 0.2); border-radius: 10px;">
                        <strong>Tus compañeros:</strong><br>
                        ${otherImpostors.join(', ')}
                    </div>
                `;
            }
        }
        
        document.getElementById('role-content').innerHTML = `
            <div>
                <div class="badge bg-danger mb-3" style="font-size: 1.5rem;">IMPOSTOR</div>
                ${hintContent}
                ${teamInfo}
            </div>
        `;
    } else {
        document.getElementById('role-content').innerHTML = `
            <div>
                <div class="badge bg-success mb-3" style="font-size: 1.5rem;">CIVIL</div>
                <div style="font-size: 1.5rem; color: #27ae60;">Palabra: ${gameState.currentWord}</div>
            </div>
        `;
    }
    
    // Actualizar boton
    if (gameState.currentPlayerIndex === gameState.playerRoles.length - 1) {
        document.getElementById('next-player-btn').textContent = 'Iniciar Juego';
        document.getElementById('next-player-btn').classList.remove('btn-primary');
        document.getElementById('next-player-btn').classList.add('btn-success');
    } else {
        document.getElementById('next-player-btn').textContent = 'Siguiente Jugador';
        document.getElementById('next-player-btn').classList.add('btn-primary');
        document.getElementById('next-player-btn').classList.remove('btn-success');
    }
}

function nextPlayer() {
    if (gameState.currentPlayerIndex === gameState.playerRoles.length - 1) {
        startGamePhase();
    } else {
        gameState.currentPlayerIndex++;
        showPlayerReveal();
    }
}

// Fase de juego (con el timer y eso)
function startGamePhase() {
    const randomPlayer = gameState.alivePlayers[Math.floor(Math.random() * gameState.alivePlayers.length)];
    document.getElementById('starting-player-name').textContent = randomPlayer.name;
    
    showScreen('screen-game');
    startTimer();
}

function startTimer() {
    let timeLeft = gameState.gameTime * 60;
    updateTimerDisplay(timeLeft);
    
    gameState.gameTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        
        if (timeLeft <= 0) {
            clearInterval(gameState.gameTimer);
            skipToVoting();
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('game-timer').textContent = 
        `${mins}:${secs.toString().padStart(2, '0')}`;
}

function skipToVoting() {
    if (gameState.gameTimer) {
        clearInterval(gameState.gameTimer);
    }
    showVotingScreen();
}

// Fase de votacion
function showVotingScreen() {
    showScreen('screen-voting');
    renderVotingPlayers();
}

function renderVotingPlayers() {
    const container = document.getElementById('voting-players');
    container.innerHTML = '';
    
    gameState.alivePlayers.forEach(player => {
        const div = document.createElement('div');
        div.className = 'col-md-4 mb-3';
        div.innerHTML = `
            <div class="player-vote-card card p-4 text-center" onclick="selectPlayerToEliminate('${player.name}')">
                <h4>${player.name}</h4>
            </div>
        `;
        container.appendChild(div);
    });
}

function selectPlayerToEliminate(name) {
    gameState.selectedPlayerToEliminate = name;
    
    document.querySelectorAll('.player-vote-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    document.getElementById('eliminate-btn').disabled = false;
}

function eliminatePlayer() {
    if (!gameState.selectedPlayerToEliminate) return;
    
    showScreen('screen-result');
    
    let countdown = 2; //Segundos de cuenta regresiva
    document.getElementById('reveal-timer').textContent = countdown;
    document.getElementById('reveal-timer').style.display = 'block';
    document.getElementById('eliminated-player-info').style.display = 'none';
    
    const timer = setInterval(() => {
        countdown--;
        document.getElementById('reveal-timer').textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(timer);
            revealEliminatedPlayer();
        }
    }, 1000);
}

function revealEliminatedPlayer() {
    //Seleccion de el jugador que se va a eliminar
    const player = gameState.alivePlayers.find(p => p.name === gameState.selectedPlayerToEliminate);
    player.isAlive = false;
    gameState.alivePlayers = gameState.alivePlayers.filter(p => p.name !== gameState.selectedPlayerToEliminate);
    
    if (player.isImpostor) {
        gameState.remainingImpostors--;
    }
    
    document.getElementById('reveal-timer').style.display = 'none';
    document.getElementById('eliminated-player-info').style.display = 'block';
    document.getElementById('eliminated-name').textContent = player.name;
    
    let roleText;
    if (gameState.anonymousMode) {
        roleText = '<span class="badge bg-secondary" style="font-size: 2rem;">ROL OCULTO 🎭</span>';
    } else {
        roleText = player.isImpostor ? 
            '<span class="badge bg-danger" style="font-size: 2rem;">ERA IMPOSTOR 🎭</span>' : 
            '<span class="badge bg-success" style="font-size: 2rem;">ERA CIVIL 👤</span>';
    }
    document.getElementById('eliminated-role').innerHTML = roleText;
    
    checkResult();
}

function checkResult() {
    const buttonsDiv = document.getElementById('result-buttons');
    const aliveCivils = gameState.alivePlayers.filter(p => !p.isImpostor).length;
    
    if (gameState.remainingImpostors === 0) {
        buttonsDiv.innerHTML = `
            <div class="alert alert-success mb-3">¡Los civiles ganaron! Eliminaron a todos los impostores</div>
            <button class="btn btn-primary btn-lg" onclick="goToHome()">Volver al Inicio</button>
        `;
    } else if ((aliveCivils <= gameState.remainingImpostors) || (gameState.remainingImpostors === 1 && gameState.players.length >= 6 && aliveCivils === 2)) {
        buttonsDiv.innerHTML = `
            <div class="alert alert-danger mb-3">¡Los impostores ganaron!</div>
            <button class="btn btn-primary btn-lg" onclick="goToHome()">Volver al Inicio</button>
        `;
    } else {
        let statusText = '';
        if (!gameState.anonymousMode) {
            statusText = `<p class="mb-3">Quedan ${gameState.remainingImpostors} impostor(es) y ${aliveCivils} civil(es)</p>`;
        } else {
            statusText = `<p class="mb-3">Quedan ${gameState.alivePlayers.length} jugadores</p>`;
        }
        buttonsDiv.innerHTML = `
            ${statusText}
            <button class="btn btn-success btn-lg" onclick="continueGame()">Continuar Juego</button>
        `;
    }
}       

function continueGame() {
    showVotingScreen();
}

// Funciones relacionas a distintos modos de juego
function toggleAnonymousMode() {
    gameState.anonymousMode = !gameState.anonymousMode;
    const toggleSwitch = document.getElementById("anonymous-mode-toggle");
    
    if (gameState.anonymousMode) {
        toggleSwitch.classList.add('active');
    } else {
        toggleSwitch.classList.remove('active');
    }
}

function toggleTeamImpostorsMode() {
    gameState.teamImpostorsMode = !gameState.teamImpostorsMode;
    const toggleSwitch = document.getElementById("team-impostors-toggle");
    
    if (gameState.teamImpostorsMode) {
        toggleSwitch.classList.add('active');
    } else {
        toggleSwitch.classList.remove('active');
    }
}

function toggleBlindImpostorMode() {
    gameState.blindImpostorMode = !gameState.blindImpostorMode;
    const toggleSwitch = document.getElementById("blind-impostor-toggle");
    
    if (gameState.blindImpostorMode) {
        toggleSwitch.classList.add('active');
    } else {
        toggleSwitch.classList.remove('active');
    }
}

// Funciones que no pertenecen a ningun otro grupo pero que tienen una utilidad
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function cancelGame() {
    if (confirm('¿Seguro que quieres cancelar el juego?')) {
        goToHome();
    }
}

function goToHome() {
    if (gameState.gameTimer) {
        clearInterval(gameState.gameTimer);
    }

    gameState.currentPlayerIndex = 0;
    gameState.selectedPlayerToEliminate = null;
    
    renderCategories();
    
    showScreen('screen-setup');
}

//Inicializacion
init();
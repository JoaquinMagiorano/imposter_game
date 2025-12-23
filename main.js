// Categorias harcodeadas a mano
const CATEGORIES = {
    animales: [
        { palabra: "Perro", pistas: ["lealtad","olfato","vigía"] },
        { palabra: "Gato", pistas: ["sigilo","alfombra","mimo"] },
        { palabra: "León", pistas: ["corona","pradera","rugido"] },
        { palabra: "Elefante", pistas: ["memoria","columna","trompa"] },
        { palabra: "Tigre", pistas: ["rayado","emboscada","solitario"] },
        { palabra: "Caballo", pistas: ["galope","monta","transporte"] },
        { palabra: "Delfín", pistas: ["eco","escuela","salto"] },
        { palabra: "Águila", pistas: ["altura","garras","visión"] },
        { palabra: "Tiburón", pistas: ["depredador","mar","olfato"] },
        { palabra: "Oso", pistas: ["invernar","fortaleza","colmena"] },
        { palabra: "Ballena", pistas: ["vasto","canto","profundidad"] },
        { palabra: "Pingüino", pistas: ["filo","hielo","formación"] },
        { palabra: "Jirafa", pistas: ["altorrelieve","ramas","manchado"] },
        { palabra: "Cebra", pistas: ["contraste","manada","camuflaje"] },
        { palabra: "Cocodrilo", pistas: ["acecho","mandíbula","estuarios"] },
        { palabra: "Serpiente", pistas: ["desliz","muda","silencio"] },
        { palabra: "Búho", pistas: ["nocturno","giro","místico"] },
        { palabra: "Loro", pistas: ["eco","plumas","sabio"] },
        { palabra: "Canguro", pistas: ["salto","bolsa","austral"] },
        { palabra: "Koala", pistas: ["eucalipto","letargo","mimoso"] },
        { palabra: "Pulpo", pistas: ["tentáculo","camufla","inteligencia"] },
        { palabra: "Mariposa", pistas: ["metamorfosis","ligereza","alas"] },
        { palabra: "Abeja", pistas: ["colmena","zángano","polen"] },
        { palabra: "Hormiga", pistas: ["colonia","fuerza","ruta"] },
        { palabra: "Camaleón", pistas: ["tono","reposo","lengua"] }
    ],
    lugares: [
        { palabra: "París", pistas: ["arte","romance","historia"] },
        { palabra: "Londres", pistas: ["tradición","movimiento","diversidad"] },
        { palabra: "Roma", pistas: ["antigüedad","legado","imperio"] },
        { palabra: "Tokio", pistas: ["densidad","ritmo","modernidad"] },
        { palabra: "Nueva-York", pistas: ["flujo","escala","oportunidad"] },
        { palabra: "Berlín", pistas: ["contraste","memoria","cambio"] },
        { palabra: "Moscú", pistas: ["centralidad","frío","poder"] },
        { palabra: "Río-Janeiro", pistas: ["energía","relieve","celebración"] },
        { palabra: "Barcelona", pistas: ["creatividad","mar","identidad"] },
        { palabra: "Dubái", pistas: ["exceso","verticalidad","contraste"] },
        { palabra: "Atenas", pistas: ["pensamiento","fundamento","clásico"] },

        { palabra: "Italia", pistas: ["legado","estilo","diversidad"] },
        { palabra: "Japón", pistas: ["disciplina","equilibrio","contraste"] },
        { palabra: "Brasil", pistas: ["extensión","mezcla","expresión"] },
        { palabra: "México", pistas: ["identidad","raíces","variedad"] },
        { palabra: "Egipto", pistas: ["antigüedad","permanencia","misterio"] },
        { palabra: "Australia", pistas: ["aislamiento","amplitud","costa"] },
        { palabra: "España", pistas: ["ritmo","historia","pluralidad"] },
        { palabra: "Francia", pistas: ["influencia","cultura","forma"] },
        { palabra: "Alemania", pistas: ["estructura","precisión","memoria"] },
        { palabra: "Argentina", pistas: ["extensión","carácter","contraste"] }
    ],
    comida: [
        { palabra: "Pizza", pistas: ["italia","horno","queso"] },
        { palabra: "Hamburguesa", pistas: ["estados unidos","carne","pan"] },
        { palabra: "Sushi", pistas: ["japón","arroz","crudo"] },
        { palabra: "Tacos", pistas: ["méxico","maíz","mano"] },
        { palabra: "Tortilla", pistas: ["españa","papas","cebolla"] },
        { palabra: "Ceviche", pistas: ["perú","ácido","pescado"] },
        { palabra: "Burrito", pistas: ["méxico","envoltura","abundante"] },
        { palabra: "Lasaña", pistas: ["italia","capas","horno"] },
        { palabra: "Empanada", pistas: ["españa","relleno","masa"] },
        { palabra: "Hot-dog", pistas: ["estados unidos","salchicha","pan"] },
        { palabra: "Risotto", pistas: ["italia","cremoso","arroz"] },
        { palabra: "Asado", pistas: ["argentina","familia","fuego"] },
        { palabra: "Rosquilla", pistas: ["estados unidos","anillo","glaseado"] },
        { palabra: "Tiramisú", pistas: ["italia","café","capas"] },
        { palabra: "Churro", pistas: ["españa","azúcar","frito"] },
    ],
    trabajos: [
        { palabra: "Médico", pistas: ["evaluar","decisión","cuidado"] },
        { palabra: "Profesor", pistas: ["orientar","proceso","aprendizaje"] },
        { palabra: "Abogado", pistas: ["defensa","criterio","acuerdo"] },
        { palabra: "Ingeniero", pistas: ["análisis","solución","diseño"] },
        { palabra: "Arquitecto", pistas: ["concepto","estructura","forma"] },
        { palabra: "Chef", pistas: ["creación","equilibrio","resultado"] },
        { palabra: "Enfermero", pistas: ["atención","constancia","apoyo"] },
        { palabra: "Bombero", pistas: ["respuesta","riesgo","acción"] },
        { palabra: "Policía", pistas: ["vigilancia","intervención","orden"] },
        { palabra: "Carpintero", pistas: ["medición","precisión","ensamble"] },
        { palabra: "Plomero", pistas: ["flujo","control","ajuste"] },
        { palabra: "Electricista", pistas: ["conexión","seguridad","corte"] },
        { palabra: "Mecánico", pistas: ["diagnóstico","corrección","función"] },
        { palabra: "Jardinero", pistas: ["cuidado","ritmo","crecimiento"] },
        { palabra: "Pintor", pistas: ["cobertura","tono","acabado"] },
        { palabra: "Soldador", pistas: ["unión","temperatura","resistencia"] },
        { palabra: "Albañil", pistas: ["nivel","progreso","base"] },
        { palabra: "Zapatero", pistas: ["ajuste","uso","durabilidad"] },
        { palabra: "Sastre", pistas: ["medida","forma","detalle"] },
        { palabra: "Panadero", pistas: ["tiempo","volumen","transformación"] },
        { palabra: "Carnicero", pistas: ["selección","sección","preparación"] },
        { palabra: "Herrero", pistas: ["fuerza","moldeo","resistencia"] },
        { palabra: "Cerrajero", pistas: ["mecanismo","acceso","precisión"] },
        { palabra: "Tapicero", pistas: ["textura","ajuste","renovar"] },
        { palabra: "Barrendero", pistas: ["recorrido","limpieza","constancia"] }
    ],
    peliculas: [
        { palabra: "Titanic", pistas: ["viaje","destino","ruptura"] },
        { palabra: "Avatar", pistas: ["entorno","conexión","conflicto"] },
        { palabra: "Star-Wars", pistas: ["equilibrio","legado","lucha"] },
        { palabra: "Harry-Potter", pistas: ["formación","vínculo","despertar"] },
        { palabra: "Matrix", pistas: ["elección","realidad","control"] },
        { palabra: "Avengers", pistas: ["alianza","amenaza","sacrificio"] },
        { palabra: "Jurassic-Park", pistas: ["control","error","caos"] },
        { palabra: "Inception", pistas: ["nivel","idea","percepción"] },
        { palabra: "Gladiador", pistas: ["honor","espectáculo","venganza"] },
        { palabra: "Forrest-Gump", pistas: ["recorrido","azar","persistencia"] },
        { palabra: "El-Padrino", pistas: ["poder","familia","lealtad"] },
        { palabra: "Terminator", pistas: ["amenaza","futuro","persecución"] },
        { palabra: "Rocky", pistas: ["esfuerzo","superación","reto"] },
        { palabra: "Shrek", pistas: ["identidad","parodia","aceptación"] },
        { palabra: "Buscando-Nemo", pistas: ["búsqueda","protección","aprendizaje"] },
        { palabra: "Toy-Story", pistas: ["cambio","pertenencia","desapego"] },
        { palabra: "Frozen", pistas: ["vínculo","control","liberación"] },
        { palabra: "Batman", pistas: ["justicia","dualidad","sombra"] },
        { palabra: "Superman", pistas: ["origen","responsabilidad","esperanza"] },
        { palabra: "Spider-Man", pistas: ["culpa","equilibrio","madurez"] },
        { palabra: "Iron-Man", pistas: ["ingenio","ego","redención"] },
        { palabra: "Alien", pistas: ["encierro","supervivencia","amenaza"] },
        { palabra: "Rambo", pistas: ["aislamiento","resistencia","conflicto"] },
        { palabra: "E.T.", pistas: ["encuentro","empatía","retorno"] },
        { palabra: "Volver-Futuro", pistas: ["causa","consecuencia","paradoja"] }
    ],
    series: [
        { palabra: "Los-Simpsons", pistas: ["rutina","ironía","familia"] },
        { palabra: "Friends", pistas: ["vínculo","cotidiano","transición"] },
        { palabra: "Breaking-Bad", pistas: ["transformación","ambición","decadencia"] },
        { palabra: "Game-Thrones", pistas: ["poder","alianzas","traición"] },
        { palabra: "Stranger-Things", pistas: ["ruptura","amistad","amenaza"] },
        { palabra: "The-Office", pistas: ["dinámica","observación","incomodidad"] },
        { palabra: "Lost", pistas: ["incertidumbre","destino","conexión"] },
        { palabra: "Prison-Break", pistas: ["planificación","riesgo","escape"] },
        { palabra: "Walking-Dead", pistas: ["escasez","adaptación","supervivencia"] },
        { palabra: "Narcos", pistas: ["ascenso","control","violencia"] },
        { palabra: "Casa-De-Papel", pistas: ["estrategia","presión","tiempo"] },
        { palabra: "Squid-Game", pistas: ["competencia","desigualdad","decisión"] },
        { palabra: "Peaky-Blinders", pistas: ["ambición","jerarquía","expansión"] },
        { palabra: "Sherlock", pistas: ["observación","lógica","deducción"] },
        { palabra: "Black-Mirror", pistas: ["impacto","proyección","consecuencia"] },
        { palabra: "Mandalorian", pistas: ["trayecto","protección","código"] },
        { palabra: "Westworld", pistas: ["conciencia","bucle","libertad"] },
        { palabra: "Big-Bang-Theory", pistas: ["contraste","convivencia","torpeza"] },
        { palabra: "Dexter", pistas: ["control","dualidad","ritual"] },
        { palabra: "House", pistas: ["análisis","conflicto","ingenio"] },
        { palabra: "Vikings", pistas: ["expansión","honor","conquista"] },
        { palabra: "Chernobyl", pistas: ["falla","ocultamiento","impacto"] },
        { palabra: "Wednesday", pistas: ["distancia","ironía","observación"] },
        { palabra: "Succession", pistas: ["herencia","poder","manipulación"] },
        { palabra: "The-Crown", pistas: ["deber","imagen","continuidad"] }
    ],
    vida_cotidiana: [
        { palabra: "Cepillo-dientes", pistas: ["rutina","fricción","espuma"] },
        { palabra: "Reloj", pistas: ["ritmo","medición","ciclo"] },
        { palabra: "Llave", pistas: ["acceso","control","encaje"] },
        { palabra: "Paraguas", pistas: ["protección","apertura","clima"] },
        { palabra: "Espejo", pistas: ["imagen","simetría","reflejo"] },
        { palabra: "Almohada", pistas: ["apoyo","descanso","presión"] },
        { palabra: "Sábana", pistas: ["cobertura","contacto","textil"] },
        { palabra: "Toalla", pistas: ["absorción","secado","fibra"] },
        { palabra: "Cuchara", pistas: ["curvatura","recoger","líquido"] },
        { palabra: "Tenedor", pistas: ["agarre","separación","puntas"] },
        { palabra: "Cuchillo", pistas: ["precisión","corte","dirección"] },
        { palabra: "Vaso", pistas: ["contención","vertical","sorbo"] },
        { palabra: "Plato", pistas: ["superficie","soporte","centro"] },
        { palabra: "Silla", pistas: ["soporte","pausa","estructura"] },
        { palabra: "Mesa", pistas: ["base","reunión","plano"] },
        { palabra: "Lámpara", pistas: ["foco","ambiente","energía"] },
        { palabra: "Control-remoto", pistas: ["distancia","secuencia","comando"] },
        { palabra: "Celular", pistas: ["conexión","interfaz","portátil"] },
        { palabra: "Cartera", pistas: ["resguardo","contenido","acceso"] },
        { palabra: "Mochila", pistas: ["carga","transporte","espalda"] },
        { palabra: "Zapatos", pistas: ["impacto","protección","pisada"] },
        { palabra: "Peine", pistas: ["orden","desliz","alinear"] },
        { palabra: "Jabón", pistas: ["emulsión","higiene","espuma"] },
        { palabra: "Despertador", pistas: ["alerta","inicio","interrupción"] },
        { palabra: "Escoba", pistas: ["arrastre","limpieza","ritmo"] },
        { palabra: "Tacho de basura", pistas: ["descarte","acumulación","residuo"] },
        { palabra: "Cortina", pistas: ["filtro","privacidad","caída"] },
        { palabra: "Ventilador", pistas: ["circulación","flujo","alivio"] },
        { palabra: "Enchufe", pistas: ["conexión","energía","contacto"] },
        { palabra: "Interruptor", pistas: ["cambio","estado","control"] },
        { palabra: "Cuaderno", pistas: ["registro","secuencia","papel"] },
        { palabra: "Bolígrafo", pistas: ["trazo","fluidez","presión"] },
        { palabra: "Agenda", pistas: ["orden","planificación","tiempo"] },
        { palabra: "Gafas", pistas: ["corrección","enfoque","visión"] },
        { palabra: "Cinturón", pistas: ["sujeción","ajuste","cierre"] },
        { palabra: "Llaves", pistas: ["conjunto","rutina","dependencia"] },
        { palabra: "Termo", pistas: ["aislamiento","temperatura","retención"] },
        { palabra: "Auriculares", pistas: ["inmersión","sonido","privado"] },
        { palabra: "Cargador", pistas: ["recuperación","flujo","espera"] },
        { palabra: "Calendario", pistas: ["organización","referencia","ciclo"] }
    ],
    deportes: [
        { palabra: "Fútbol", pistas: ["equipo","ritmo","estrategia"] },
        { palabra: "Baloncesto", pistas: ["altura","fluidez","posesión"] },
        { palabra: "Tenis", pistas: ["intercambio","precisión","rebote"] },
        { palabra: "Voleibol", pistas: ["coordinación","red","rotación"] },
        { palabra: "Natación", pistas: ["resistencia","fluido","respiración"] },
        { palabra: "Atletismo", pistas: ["marca","progresión","esfuerzo"] },
        { palabra: "Ciclismo", pistas: ["ritmo","trayecto","resistencia"] },
        { palabra: "Boxeo", pistas: ["ritmo","impacto","defensa"] },
        { palabra: "Rugby", pistas: ["avance","contacto","territorio"] },
        { palabra: "Golf", pistas: ["calma","precisión","recorrido"] },
        { palabra: "Surf", pistas: ["timing","fluidez","balance"] },
        { palabra: "Béisbol", pistas: ["turno","anticipación","coordinación"] }
    ]

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
    
    Object.keys(CATEGORIES).forEach(cat => {
        const div = document.createElement('div');
        div.className = 'col-md-4 mb-3';
        div.innerHTML = `
            <div class="category-item card p-3 text-center" onclick="toggleCategory('${cat}')">
                <h5 class="mb-0">${cat.charAt(0).toUpperCase() + cat.slice(1)}</h5>
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
    
    // Palabra aleatoria
    const allWords = [];
    gameState.selectedCategories.forEach(cat => {
        allWords.push(...CATEGORIES[cat]);
    });
    gameState.selectedWordObj = allWords[Math.floor(Math.random() * allWords.length)];
    gameState.currentWord = gameState.selectedWordObj.palabra;
    
    // Asigna roles
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
        // Selecciona una pista aleatoria
        const randomHint = gameState.selectedWordObj.pistas[
            Math.floor(Math.random() * gameState.selectedWordObj.pistas.length)
        ];
        
        document.getElementById('role-content').innerHTML = `
            <div>
                <div class="badge bg-danger mb-3" style="font-size: 1.5rem;">IMPOSTOR</div>
                <div style="font-size: 1.5rem; color: #3498db;">Pista: ${randomHint}</div>
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
    
    let countdown = 3;
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
    
    const buttonsDiv = document.getElementById('result-buttons');
    
    // Contar los civiles vivos
    const aliveCivils = gameState.alivePlayers.filter(p => !p.isImpostor).length;
    
    if (gameState.remainingImpostors === 0) {
        buttonsDiv.innerHTML = `
            <div class="alert alert-success mb-3">¡Los civiles ganaron! Eliminaron a todos los impostores</div>
            <button class="btn btn-primary btn-lg" onclick="goToHome()">Volver al Inicio</button>
        `;
    } else if (aliveCivils < gameState.remainingImpostors) {
        buttonsDiv.innerHTML = `
            <div class="alert alert-danger mb-3">¡Los impostores ganaron! Hay más impostores que civiles</div>
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
    const toggleSwitch = document.querySelector('.toggle-switch');
    
    if (gameState.anonymousMode) {
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
    gameState.selectedCategories = [];
    gameState.currentPlayerIndex = 0;
    gameState.selectedPlayerToEliminate = null;
    
    document.querySelectorAll('.category-item').forEach(cat => {
        cat.classList.remove('selected');
    });
    
    showScreen('screen-setup');
}

//Inicializacion
init();
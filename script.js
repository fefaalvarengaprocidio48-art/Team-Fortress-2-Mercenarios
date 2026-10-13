/* =========================================
   DADOS DOS PERSONAGENS
========================================= */

const characters = {

    scout: {

        name: "SCOUT",

        class: "OFFENSE",

        role: "Ofensiva",

        image: "images/scout.png",

        description:
            "Extremamente rápido e ágil. O Scout é especialista em capturar objetivos rapidamente e destruir seus inimigos em combates de curta distância.",

        health: "125",

        speed: "133%",

        weapon: "SCATTERGUN",

        difficulty: 4

    },


    soldier: {

        name: "SOLDIER",

        class: "OFFENSE",

        role: "Ofensiva",

        image: "images/soldier.png",

        description:
            "Combatente versátil equipado com um poderoso lança-foguetes. O Soldier pode causar enormes quantidades de dano e controlar áreas.",

        health: "200",

        speed: "80%",

        weapon: "ROCKET LAUNCHER",

        difficulty: 2

    },


    pyro: {

        name: "PYRO",

        class: "OFFENSE",

        role: "Ofensiva",

        image: "images/pyro.png",

        description:
            "Especialista em combate de curta distância. Seu lança-chamas é capaz de incendiar inimigos e controlar áreas.",

        health: "175",

        speed: "100%",

        weapon: "FLAMETHROWER",

        difficulty: 2

    },


    demoman: {

        name: "DEMOMAN",

        class: "DEFENSE",

        role: "Defesa",

        image: "images/demoman.png",

        description:
            "Especialista em explosivos. Suas granadas e bombas adesivas permitem controlar corredores e pontos estratégicos.",

        health: "175",

        speed: "93%",

        weapon: "GRENADE LAUNCHER",

        difficulty: 4

    },


    heavy: {

        name: "HEAVY",

        class: "DEFENSE",

        role: "Defesa",

        image: "images/heavy.png",

        description:
            "O mercenário mais resistente da equipe. Sua poderosa minigun causa enorme dano, mas sua velocidade é baixa.",

        health: "300",

        speed: "77%",

        weapon: "MINIGUN",

        difficulty: 1

    },


    engineer: {

        name: "ENGINEER",

        class: "DEFENSE",

        role: "Defesa",

        image: "images/engineer.png",

        description:
            "Constrói sentinelas, dispensers e teleporters. Um Engineer preparado pode transformar uma posição em uma verdadeira fortaleza.",

        health: "125",

        speed: "100%",

        weapon: "SHOTGUN",

        difficulty: 3

    },


    medic: {

        name: "MEDIC",

        class: "SUPPORT",

        role: "Suporte",

        image: "images/medic.png",

        description:
            "Mantém seus companheiros vivos utilizando seu Medi Gun e pode ativar uma poderosa ÜberCharge.",

        health: "150",

        speed: "107%",

        weapon: "MEDIGUN",

        difficulty: 3

    },


    sniper: {

        name: "SNIPER",

        class: "SUPPORT",

        role: "Suporte",

        image: "images/sniper.png",

        description:
            "Especialista em eliminar inimigos de longa distância. Um Sniper habilidoso pode mudar o resultado de uma batalha.",

        health: "125",

        speed: "100%",

        weapon: "SNIPER RIFLE",

        difficulty: 5

    },


    spy: {

        name: "SPY",

        class: "SUPPORT",

        role: "Suporte",

        image: "images/spy.png",

        description:
            "Mestre da infiltração. Utiliza disfarces e invisibilidade para entrar atrás das linhas inimigas.",

        health: "125",

        speed: "107%",

        weapon: "REVOLVER",

        difficulty: 5

    }

};



/* =========================================
   ELEMENTOS
========================================= */

const buttons =
    document.querySelectorAll(
        ".character"
    );


const heroImage =
    document.getElementById(
        "heroImage"
    );


const heroName =
    document.getElementById(
        "heroName"
    );


const heroClass =
    document.getElementById(
        "heroClass"
    );


const className =
    document.getElementById(
        "className"
    );


const characterName =
    document.getElementById(
        "characterName"
    );


const characterRole =
    document.getElementById(
        "characterRole"
    );


const description =
    document.getElementById(
        "description"
    );


const health =
    document.getElementById(
        "health"
    );


const speed =
    document.getElementById(
        "speed"
    );


const weapon =
    document.getElementById(
        "weapon"
    );


const difficultyBars =
    document.querySelectorAll(
        ".difficulty-bars i"
    );


const heroContainer =
    document.querySelector(
        ".hero-image-container"
    );



/* =========================================
   MOSTRAR PERSONAGEM
========================================= */

function showCharacter(
    characterId
) {

    const character =
        characters[characterId];


    if (!character) {

        return;

    }


    /* Imagem */

    heroImage.src =
        character.image;


    heroImage.alt =
        character.name;


    /* Nomes */

    heroName.textContent =
        character.name;


    heroClass.textContent =
        character.class;


    className.textContent =
        character.class;


    characterName.textContent =
        character.name;


    characterRole.textContent =
        character.role;


    /* Descrição */

    description.textContent =
        character.description;


    /* Estatísticas */

    health.textContent =
        character.health;


    speed.textContent =
        character.speed;


    weapon.textContent =
        character.weapon;


    /* Dificuldade */

    difficultyBars.forEach(
        (bar, index) => {

            if (
                index <
                character.difficulty
            ) {

                bar.style.opacity =
                    "1";

            } else {

                bar.style.opacity =
                    ".15";

            }

        }
    );


    /* Botão ativo */

    buttons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    const selectedButton =
        document.querySelector(
            `[data-character="${characterId}"]`
        );


    if (selectedButton) {

        selectedButton.classList.add(
            "active"
        );

    }


    /* Animação */

    heroContainer.classList.remove(
        "change"
    );


    void heroContainer.offsetWidth;


    heroContainer.classList.add(
        "change"
    );

}



/* =========================================
   EVENTOS
========================================= */

buttons.forEach(
    button => {


        /* Mouse */

        button.addEventListener(
            "mouseenter",
            () => {

                showCharacter(
                    button.dataset.character
                );

            }
        );


        /* Clique */

        button.addEventListener(
            "click",
            () => {

                showCharacter(
                    button.dataset.character
                );

            }
        );


        /* Teclado */

        button.addEventListener(
            "focus",
            () => {

                showCharacter(
                    button.dataset.character
                );

            }
        );

    }
);



/* =========================================
   PERSONAGEM INICIAL
========================================= */

showCharacter(
    "soldier"
);
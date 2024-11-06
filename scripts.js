// Obiekt kategorii obrazów z dynamicznymi opisami
const images = {
    'sketches': [
        { src: 'images/girl_4_sketch.jpg', description: 'Drawing of a girl using a reference' },
        { src: 'images/apocalypse_sketch.jpg', description: 'An apocalyptic sketch + extra' },
        { src: 'images/characters_2_sketch.jpg', description: 'Man drawn from reference + concepts for the nun and the girl in the bottom' },
        { src: 'images/girl_2_sketch.jpg', description: 'Drawing of a girl about to listen to music followed by her crying and lying on the floor' },
        { src: 'images/girl_3_sketch.jpg', description: 'Drawing of a girl with a bubbly personality' },
        
        { src: 'images/girl_5_sketch.jpg', description: 'Drawing of a girl listening to music' },
        { src: 'images/girl_6_sketch.jpg', description: 'Drawing of a girl (experimenting with colors)' },
        { src: 'images/girl_7_sketch.jpg', description: 'Drawing of a girl (experimenting with colors)' },
        { src: 'images/girl_sketch.jpg', description: 'A small collection of drawings of the bubbly girl' },
        { src: 'images/gwen_sketch.jpg', description: 'Drawing of Gwen Tennyson from Ben 10: Ultimate Alien' },
        { src: 'images/man_2_sketch.jpg', description: 'A ballpoint pen sketch of a young man' },
        { src: 'images/man_sketch.jpg', description: 'Drawing of a middle aged man' },
        { src: 'images/monsters_sketch.jpg', description: 'Some drawings of various monsters' },
        { src: 'images/practice_2_sketch.jpg', description: 'A practice sketch including a more realised drawing of a tentacle monster-human hybrid' },
        { src: 'images/practice_sketch.jpg', description: 'A practice sketch of a made up girl and Son Gohan from Dragon Ball series' },
        { src: 'images/random_sketch.jpg', description: 'A sketch of a man looking out the window on a Halloween night' },
        { src: 'images/random_stuff_sketch.jpg', description: 'A collection of various sketches' },
        { src: 'images/thumbnail_sketch.jpg', description: 'A thumbnail sketch of a fantasy swamp girl' },
        { src: 'images/zombie_sketch.jpg', description: 'A zombie apocalypse sketch' }
    ],
    'comics': [
        { src: 'images/comic_1_sketch.jpg', description: 'A horror comic (page 1)' },
        { src: 'images/comic_2_sketch.jpg', description: 'A horror comic (page 2)' },
        { src: 'images/comic_3_sketch.jpg', description: 'A horror comic (page 3)' },
        { src: 'images/comic_halloween_1.jpg', description: 'A Halloween comic (page 1)' },
        { src: 'images/comic_halloween_2.jpg', description: 'A Halloween comic (page 2)' },
        { src: 'images/comic_halloween_3.jpg', description: 'A Halloween comic (page 3)' }
    ],
    'pixel': [
        { src: 'images/scale_bg_1.png', description: 'Battle background for ScaleBoy: Forest' },
        { src: 'images/scale_bg_2.png', description: 'Battle background for ScaleBoy: Corrupted forest' },
        { src: 'images/virus_powerup.png', description: 'Virogue powerup icon' },
        { src: 'images/virus_tiles_fixed.png', description: 'Tileset for Virogue' }

    ],
    'gifs': [
        { src: 'images/scale_atk.gif', description: 'Unfinished attack animation for ScaleBoy' },
        { src: 'images/scale_walk.gif', description: 'Front walk-cycle for ScaleBoy' },
        { src: 'images/scale_boss.gif', description: 'Corrupted forest boss attack animation' },
        { src: 'images/scale_moveset.gif', description: 'ScaleBoy moveset in battle' },
        { src: 'images/scale_note_effect_1.gif', description: 'A successful note hit effect' },
        { src: 'images/virus_door.gif', description: 'Virogue - door opening animation' },
        { src: 'images/virus_shooter.gif', description: 'Virogue - shooting enemy animation' },
        { src: 'images/virus_synapse.gif', description: 'Virogue - synapse + lightning animation' },
        { src: 'images/virus_brain_boss_attack_1.gif', description: 'Virogue - Brain Boss charge attack animation' },
        { src: 'images/virus_brain_boss_attack_2.gif', description: 'Virogue - Brain Boss attack animation no. 2' },
        { src: 'images/virus_heart_boss_attack.gif', description: 'Virogue - Heart Boss aerial attack animation' },
        { src: 'images/virus_heart_boss_idle_2.gif', description: 'Virogue - Heart Boss idle animation' },
        { src: 'images/virus_heart_boss_idle.gif', description: 'Virogue - Heart Boss idle animation no. 2' },
        { src: 'images/virus_lung_boss_idle.gif', description: 'Virogue - Lungs Boss idle animation' }
    ],
    'concepts': [
        { src: 'images/scale_concept.png', description: 'ScaleBoy design concepts' },
        { src: 'images/characters_concept.jpg', description: 'Concept art for two people with contrasting personalities: a pessimistic man and an optimistic and energetic girl' },
        { src: 'images/horror_2_concept.jpg', description: 'A rough concept for NPCs for a horror game no. 1' },
        { src: 'images/horror_concept.jpg', description: 'A rough concept for NPCs for a horror game no. 2' },
        { src: 'images/horror_npc_concept.jpg', description: 'A rough concept for NPCs for a horror game no. 3' },
        { src: 'images/monster_2_concept.jpg', description: 'A rough concept of a monster' },
        { src: 'images/horror_enemies_concept.png', description: 'A more realized concept of the monsters for the horror game' },
        { src: 'images/monster_concept.jpg', description: 'A more realized concept of a monster' },
        { src: 'images/scale_overworld_concept.png', description: 'A concept for a hub area and world gate in ScaleBoy' },
        { src: 'images/scale_ui_concept.png', description: 'A more realized concept of the UI elements and battle mechanics in ScaleBoy' },
        { src: 'images/scaleboy_map_concept.jpg', description: 'A rough concept for a map in ScaleBoy' },
        { src: 'images/scaleboy_ui_concept.jpg', description: 'A rough concept for UI elements and mechanics in battle for ScaleBoy' },
        { src: 'images/virus_concept_1.png', description: 'A rough gameplay concept for Virogue' }
    ]
};


// Inicjalizowanie indeksów dla każdej kategorii
const currentIndex = {
    'sketches': 0,
    'comics': 0,
    'pixel': 0,
    'gifs': 0,
    'concepts': 0
};

// Funkcja do aktualizacji obrazu i opisu
function showImage(section, index) {
    const imageElement = document.getElementById(`${section}-img`);
    const descriptionElement = document.getElementById(`${section}-description`);
    
    imageElement.src = images[section][index].src;
    descriptionElement.textContent = images[section][index].description;
}

// Funkcje do zmiany obrazu
function showNext(section) {
    currentIndex[section] = (currentIndex[section] + 1) % images[section].length;
    showImage(section, currentIndex[section]);
}

function showPrev(section) {
    currentIndex[section] = (currentIndex[section] - 1 + images[section].length) % images[section].length;
    showImage(section, currentIndex[section]);
}

// Inicjalizacja obrazów i opisów przy załadowaniu strony
window.onload = function() {
    Object.keys(images).forEach(section => {
        showImage(section, currentIndex[section]);
    });
};

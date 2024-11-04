// Obiekt kategorii obrazów z dynamicznymi opisami
const images = {
    'koncepty': [
        { src: 'images/virus_concept_1.png', description: 'To jest przykład konceptu nr 1' },
    ],
    'rysunki': [
        { src: 'images/scale_bg_1.png', description: 'Sceneria 1: las' },
        { src: 'images/scale_bg_2.png', description: 'Sceneria 2: góry' },
        { src: 'images/virus_tiles.png', description: 'Tekstury terenu' }
    ],
    'gify': [
        { src: 'images/scale_atk.gif', description: 'Animacja ataku postaci' },
        { src: 'images/scale_walk.gif', description: 'Animacja chodzenia postaci' },
        { src: 'images/scale_boss.gif', description: 'Animacja bossa' }
    ]
};

// Inicjalizowanie indeksów dla każdej kategorii
const currentIndex = {
    'koncepty': 0,
    'rysunki': 0,
    'gify': 0
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

/*******************
---- CONSTANTS -----
*******************/
const divMain = document.getElementById('div-main');
const section = document.getElementById('section-flex');
const buttonNav = document.getElementById('nav-buttons');

/*
const spinner = document.createElement('div');
spinner.id = "spinner";
*/

/*******************
----- FETCHES  -----
*******************/

//Function for getting characters with fetch
function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
        return response.json();
    })
    .then((charData) => { 
        displayChars(charData);
    })
    .catch((error) => {
        console.log(error);
    })
};

//Function for getting episodes with fetch
function getEpisodes() {
    fetch('https://rickandmortyapi.com/api/episode')
    .then((response) => {
        return response.json();
    })
    .then((episodeData) => { 
        displayEpisodes(episodeData);
    })
    .catch((error) => {
        console.log(error);
    })
};

//Function for getting location with fetch
function getLocations() {
    fetch('https://rickandmortyapi.com/api/location')
    .then((response) => {
        return response.json();
    })
    .then((locationData) => { 
        displayLocations(locationData);
    })
    .catch((error) => {
        console.log(error);
    })
};

function changePageChars(url) {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((charData) => { 
        window.scrollTo( 0, 500 );
        displayChars(charData);
    })
    .catch((error) => {
        console.log(error);
    })
};

function changePageEpisode(url) {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((episodeData) => { 
        window.scrollTo( 0, 500 );
        displayEpisodes(episodeData);
    })
    .catch((error) => {
        console.log(error);
    })
};

function changePageLocations(url) {
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((locationData) => { 
        window.scrollTo( 0, 500 );
        displayLocations(locationData);
    })
    .catch((error) => {
        console.log(error);
    })
};

function getCharacter(id) {
    fetch('https://rickandmortyapi.com/api/character/' + id)
    .then((response) => {
        return response.json();
    })
    .then((charData) => { 
        displayChar(charData);
    })
    .catch((error) => {
        console.log(error);
    })
};

/*******************
---- FUNCTIONS  ----
*******************/


//Function for displaying characters
function displayChars(charData) {
    var infoCard = "";
    var characters = charData.results;
    var nextPage = charData.info.next;
    var prevPage = charData.info.prev;
    for( let i = 0; i < characters.length; i++) {

        infoCard += `
        <article id="id-${characters[i].id}" class="info-card">
            <div class="img-container">
                <img src="${characters[i].image}" class="img-fluid">
            </div>
            <h2><a href="javascript://artistInfo" id="${characters[i].id}" onclick="getCharacter(this.id)"> ${ characters[i].name} </a></h2>
            <span class="info">Status: </span> <span>${characters[i].status}</span><br>
            <span class="info">Species: </span> <span>${characters[i].species}</span><br>
            <span class="info">Origin: </span> <span>${characters[i].origin.name}</span><br>
            <span class="info">Location: </span> <span>${characters[i].location.name}</span>
        </article>
        
        `
     }
     infoCard += `<div class="clearfix"></div>`;
     section.innerHTML = infoCard;
     //section.innerHTML += '<div style="clear: both"></div>';
     buttonNav.innerHTML = `
     <a class="btn btn-outline-success btn-lg" id="${prevPage}" onClick="changePageChars(this.id)">Previous Page</a>
     <a class="btn btn-outline-success btn-lg" id="${nextPage}" onClick="changePageChars(this.id)">Next page</a>
     
     `;
     
}

//Function for displaying episodes
function displayEpisodes(episodeData) {
    var infoCard = "";
    var episodeResults = episodeData.results;
    var nextPage = episodeData.info.next;
    var prevPage = episodeData.info.prev;
    var clearfix = `<div class="clearfix"></div>`;

    for( let i = 0; i < episodeResults.length; i++) {

        infoCard += `
        <article id="id-${ episodeResults[i].id}">
        <h2>Episode: ${episodeResults[i].episode}</h2>
        <span class="name">${ episodeResults[i].name}</span><br><br>
        <span class="name"><strong>Air date: </strong>${episodeResults[i].air_date}</span>
        </article>
        `
    }
    infoCard += `<div class="clearfix"></div>`;
    section.innerHTML = infoCard;
    buttonNav.innerHTML = `
     <a class="btn btn-outline-success btn-lg" id="${prevPage}" onClick="changePageEpisode(this.id)">Previous Page</a>
     <a class="btn btn-outline-success btn-lg" id="${nextPage}" onClick="changePageEpisode(this.id)">Next page</a>
     `;
}

//Function for displaying locations
function displayLocations(locationData) {
    var infoCard = "";
    var locationResults = locationData.results;
    var nextPage = locationData.info.next;
    var prevPage = locationData.info.prev;

    for( let i = 0; i < locationResults.length; i++) {
       
        infoCard += `
        <article id="${ locationResults[i].id}">
        <h2> ${ locationResults[i].name}</h2>
        <span><strong>Type:</strong> ${ locationResults[i].type}</span><br>
        <span><strong>Dimension:</strong> ${ locationResults[i].dimension}</span>
        </article>
        `
     }
     infoCard += `<div class="clearfix"></div>`;
     section.innerHTML = infoCard;
     buttonNav.innerHTML = `
     <a class="btn btn-outline-success btn-lg" id="${prevPage}" onClick="changePageLocations(this.id)">Previous Page</a>
     <a class="btn btn-outline-success btn-lg" id="${nextPage}" onClick="changePageLocations(this.id)">Next page</a>
     `;
}

function displayChar(charData) {
    var charInfo = `
    <div class="charInfo">
        <div class="img-container-specific">
            <img src="${charData.image}" class="img-fluid">
        </div>
        <div class="info-container">
            <h1>${charData.name}</h1>
            <span><strong>Status:</strong> ${charData.status}</span><br>
            <span><strong>Species: </strong>${charData.species}</span><br>
            <span><strong>Type:</strong> ${charData.type}</span><br>
            <span><strong>Gender:</strong> ${charData.gender}</span><br>
            <span><strong>Origin:</strong> ${charData.origin.name}</span><br>
            <span><strong>Current location:</strong> ${charData.location.name}</span><br>
        </div>
    </div>
    `;
    section.innerHTML = charInfo;
    buttonNav.innerHTML = ``;
}

//Function for switching the fill-color on the rick & morty logotype
function switchColor(colorClass) {
    document.getElementById('rm-base-1').setAttribute("class", colorClass );
    document.getElementById('rm-base-2').setAttribute("class", colorClass );
    document.getElementById('rm-base-3').setAttribute("class", colorClass );
}


/*******************
--- CLICK EVENTS ---
*******************/

//Add constant and click-event for the "Episodes-Button"
const episodesBtn = document.getElementById('btn-episodes');
episodesBtn.addEventListener('click', function(event) {
    event.preventDefault()
    getEpisodes();
    switchColor("episode-blue");
});

//Add constant and click-event for the "Characters-Button"
const charactersBtn = document.getElementById('btn-characters');
charactersBtn.addEventListener('click', function(event) {
    event.preventDefault()
    getCharacters();
    switchColor("character-green");
});

//Add constant and click-event for the "Locations-Button"
const locationsBtn = document.getElementById('btn-locations');
locationsBtn.addEventListener('click', function(event) {
    event.preventDefault()
    getLocations(); 
    switchColor("location-red");
});

//Add constant and hover-event for the "Logo"
const rickMortyLogo = document.getElementById('rickmortylogo');
rickMortyLogo.addEventListener('click', function() {
    //getQuote();
})

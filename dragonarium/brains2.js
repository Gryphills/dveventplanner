


let allDragonData ;
let allDragonNames;
let allDragonImgs ;
let initDiv;
let wantDiv ;
let haveDiv ;
let shadowDiv ;
let backOne = "backtotop";
let pairingOutputs = {}
let pairsForDragons = {}
let availableDragonNames = []
let lastUpdate = 'unknown!'

let hashHistory = []
let singleSpecialGuys = []
//let sortedcheck = {"oddsOfCool": [], "newOdds": []}
let hasAllElements = false;
let hasAllRiftElements = false;

let riftSpecialDragons = []

let playerHasElements = {
        normal: [],
        rift: []
}


let eventObj = JSON.parse(localStorage.getItem('dvEvents'));
if (!eventObj) {
        eventObj = {}
}
if (!eventObj.dragonarium) {
  eventObj.dragonarium = {}
}
let dragonarium = eventObj.dragonarium

function saveData() {
  eventObj.dragonarium = dragonarium;
  localStorage.setItem("dvEvents", JSON.stringify(eventObj));
}




function sortAvailDragons() {
        for (dragonName of allDragonNames) {
                if (allDragonData[dragonName].limited == "" || allDragonData[dragonName].limited == "A" || allDragonData[dragonName].limited == "N") {
                    availableDragonNames.push(dragonName)
                }
                if (!dragonarium[dragonName]) {
                        dragonarium[dragonName] = {fav : 0, rifted: "0", status: "init"}
                }
                if (allDragonData[dragonName].elements.includes("R Rift")) {
                        riftSpecialDragons.push(dragonName)
                }
        }
}
/*
{
        parent1//parent2 : [possible outputs?]
}
*/


let tabFilters = {
  multiparents: [],
  wantTab: [],
  initTab: [],
  haveTab: [],
  shadowTab: []
}

const savedSettings = {
  currentTab: 'init',
  multiparents: {
    hideOwned: 1,
    showPerm: 0,
    hideShadowCards: 1,
    sortBy: 0,
    favsFirst: 1,
    suggestFromOutputs: 1
  },
   wantTab: {
    hideBreeds: 0,
    showPerm: 1,
    showUnavailable: 1,
    showLimitedAvail: 1,
    sortBy: 0,
    favsFirst: 1
  },
  initTab: {
    hideBreeds: 0,
    showPerm: 1,
    showUnavailable: 1,
    showLimitedAvail: 1,
    sortBy: 0,
    favsFirst: 1
  },
  haveTab: {
    hideBreeds: 0,
    showPerm: 1,
    showUnavailable: 1,
    showLimitedAvail: 1,
    sortBy: 0,
    favsFirst: 1
  },
  shadowTab: {
    hideBreeds: 0,
    showPerm: 1,
    showUnavailable: 1,
    showLimitedAvail: 1,
    sortBy: 0,
    favsFirst: 1
  }
}

let dragonEls = {}
let dragonsInElement = {}

let chartRef = {
        P: 'P Plant',
        F: 'F Fire',
        E: 'E Earth',
        C: 'C Cold',
        W: 'W Water',
        L: 'L Lightning',
        A: 'A Air',
        M: 'M Metal',
        I: 'I Light',
        D: 'D Dark',
        R: 'R Rift',
        
        plant: 'P Plant',
        fire: 'F Fire',
        earth: 'E Earth',
        cold: 'C Cold',
        water: 'W Water',
        lightning: 'L Lightning',
        air: 'A Air',
        metal: 'M Metal',
        light: 'I Light',
        dark: 'D Dark',
        rift: 'R Rift',
        
        Ap: 'ApApocalypse',
        Au: 'AuAura',
        Ch: 'ChChrysalis',
        Cr: 'CrCrystalline',
        Dr: 'DrDream',
        Ga: 'GaGalactic',
        Ge: 'GeGemstone',
        Hi: 'HiHidden',
        Me: 'MeMelody',
        Mh: 'MhMonolith',
        Ol: 'OlOlympus',
        Or: 'OrOrnamental',
        Rb: 'RbRainbow',
        Se: 'SeSeasonal',
        Sn: 'SnSnowflake',
        Su: 'SuSun',
        Mo: 'MoMoon',
        Sf: 'SfSurface',
        Tr: 'TrTreasure',
        Zo: 'ZoZodiac',

        apocalypse:	"ApApocalypse",
        aura	:	"AuAura",
        chrysalis:	"ChChrysalis",
        crystalline:	"CrCrystalline",
        dream	:	"DrDream",
        galactic:	"GaGalactic",
        galaxy:	        "GaGalactic",
        gemstone:	"GeGemstone",
        hidden	:	"HiHidden",
        melody	:	"MeMelody",
        monolith:	"MhMonolith",
        olympus	:	"OlOlympus",
        ornamental:	"OrOrnamental",
        rainbow	:	"RbRainbow",
        seasonal:	"SeSeasonal",
        snowflake:	"SnSnowflake",
        sun	:	"SuSun",
        moon	:	"MoMoon",
        surface	:	"SfSurface",
        treasure:	"TrTreasure",
        zodiac	:	"ZoZodiac",
  }
  //let chartRef = {
let elementChart = {
  epic: [
    'Ap',
    'Au',
    'Ch',
    'Cr',
    'Dr',
    'Ga',
    'Ge',
    'Hi',
    'Me',
    'Mh',
    'Ol',
    'Or',
    'Rb',
    'Se',
    'Sn',
    'Su',
    'Mo',
    'Sf',
    'Tr',
    'Zo'
  ],
  prims: ['P',    'F',    'E',    'C',    'W',    'L',    'A',    'M',    'I',    'D',    'R'],
  basics : [
  'P Plant',  'F Fire',  'E Earth',  'C Cold',  'W Water',  'L Lightning',  'A Air',  'M Metal',  'I Light',  'D Dark',
  
  'R Rift', "AnAny",
  'ApApocalypse',  'AuAura',  'ChChrysalis',  'CrCrystalline',  'DrDream',  'GaGalactic',  'GeGemstone',  'HiHidden',  'MeMelody',  'MhMonolith',  
  'OlOlympus',  'OrOrnamental',  'RbRainbow',  'SeSeasonal',  'SnSnowflake',  'SuSun',  'MoMoon',  'SfSurface',  'TrTreasure',  'ZoZodiac'
  ],
  subbedprims : ['Plant',  'Fire',  'Earth',  'Cold',  'Water',  'Lightning',  'Air',  'Metal',  'Light',  'Dark']
          
}

let elementIcons = {
        Air:	        'https://i.postimg.cc/J4d5RKb9/Icon-Air.webp',
        Apocalypse:	'https://i.postimg.cc/zXPFqpCB/Icon-Apocalypse.webp',
        Aura:	        'https://i.postimg.cc/MKrmzt7K/Icon-Aura.webp',
        Chrysalis:	'https://i.postimg.cc/Yqyzt86S/Icon-Chrysalis.webp',
        Cold:	        'https://i.postimg.cc/HsP9T3wT/Icon-Cold.webp',
        Dark:	        'https://i.postimg.cc/FHdgzcpN/Icon-Dark.webp',
        Dream:	        'https://i.postimg.cc/L8YB5fD4/Icon-Dream.webp',
        Earth:	        'https://i.postimg.cc/Hkc4n5zL/Icon-Earth.webp',
        Fire:	        'https://i.postimg.cc/8zJBcW45/Icon-Fire.webp',
        Crystalline:    'https://i.postimg.cc/4yZnbYKk/Icon-Crystalline.webp',
        Gemstone:       'https://i.postimg.cc/zv53Syys/Icon-Gemstone.webp',
        Galactic:	'https://i.postimg.cc/BnLcbDp8/Icon-Galaxy.webp',
        Hidden:	        'https://i.postimg.cc/T3Lq1m0W/Icon-Hidden.webp',
        Light:	        'https://i.postimg.cc/jSwQ2NcP/Icon-Light.webp',
        Lightning:	'https://i.postimg.cc/x1Jy8H5L/Icon-Lightning.webp',
        Melody:	        'https://i.postimg.cc/JzDc0JxQ/Icon-Melody.webp',
        Metal:	        'https://i.postimg.cc/XYGcqFLx/Icon-Metal.webp',
        Monolith:	'https://i.postimg.cc/FHdgzcpD/Icon-Monolith.webp',
        Moon:	        'https://i.postimg.cc/XYGcqFLs/Icon-Moon.webp',
        Olympus:	'https://i.postimg.cc/0yTGwQXG/Icon-Olympus.webp',
        Ornamental:	'https://i.postimg.cc/Z5GPdRsL/Icon-Ornamental.webp',
        Plant:	        'https://i.postimg.cc/sgkPhXHm/Icon-Plant.webp',
        Rainbow:	'https://i.postimg.cc/6pkVv3bz/Icon-Rainbow.webp',
        Seasonal:	'https://i.postimg.cc/Cx3Cq1rr/Icon-Seasonal.webp',
        Snowflake:	'https://i.postimg.cc/pLwQFTcS/Icon-Snowflake.webp',
        Sun:	        'https://i.postimg.cc/x1wGzCp7/Icon-Sun.webp',
        Surface:	'https://i.postimg.cc/13k0qt72/Icon-Surface.webp',
        Treasure:	'https://i.postimg.cc/8z2d65ng/Icon-Treasure.webp',
        Water:	        'https://i.postimg.cc/fRG79Lgh/Icon-Water.webp',
        Zodiac:	        'https://i.postimg.cc/vZJ7VBSb/Icon-Zodiac.webp',
        Rift:	        'https://i.postimg.cc/3w0Cw3dH/Icon-Rift.webp'
}
let traitIcons = {
  "planttrait" : 'https://i.postimg.cc/4x1Nj2HD/Plant-Rift-Alignment-Gold.webp',
  "firetrait" : 'https://i.postimg.cc/MpYKg3f4/Fire-Rift-Alignment-Gold.webp',
  "earthtrait" : 'https://i.postimg.cc/6ph5Fb4m/Earth-Rift-Alignment-Gold.webp',
  "coldtrait" : 'https://i.postimg.cc/W17bxYqy/Cold-Rift-Alignment-Gold.webp',
  "watertrait" : 'https://i.postimg.cc/9QBFsgw1/Water-Rift-Alignment-Gold.webp',
  "lightningtrait" : 'https://i.postimg.cc/2Sx8g9L9/Lightning-Rift-Alignment-Gold.webp',
  "airtrait" : 'https://i.postimg.cc/3xZJzf0n/Air-Rift-Alignment-Gold.webp',
  "metaltrait" : 'https://i.postimg.cc/pLBX3c5s/Metal-Rift-Alignment-Gold.webp',
  "lighttrait" : 'https://i.postimg.cc/K85vCp3f/Light-Rift-Alignment-Gold.webp',
  "darktrait" : 'https://i.postimg.cc/kgyXLYRv/Dark-Rift-Alignment-Gold.webp'
}

function addSortButtons() {
        //let elementIconArr = elIcons.split('\n')
        let innerHtml = '<div class="elementsort">'
        //let styleHtml = ''
        for (const el of elementChart.basics) {
                if (el != "AnAny") {
                        let imgsrc = '';
                        //styleHtml += `.filter${el.substring(2)} {
                        //        display: flex;
                        //}
                        //`
                        for (const url of Object.getOwnPropertyNames(elementIcons)) {
                                if (url.includes(el.substring(2))) {
                                        imgsrc = url;
                                        elementIcons[el] = url;
                                }
                        }
                        innerHtml += `<img loading="lazy" alt="${el.substring(2)}" title="${el.substring(2)}" class="elsort${el.substring(2)} desat" src="${elementIcons[el.substring(2)]}" onClick="sortCardsByEl(this, '${el.substring(2)}')">`
                } else {
                        innerHtml += ` </div> <div class="elementsort">`
                }
        }
        innerHtml += ` </div>`
        for (const sortArea of document.querySelectorAll('.elementsortbox')) {
                sortArea.innerHTML = innerHtml;
        }
        //let styleEl = document.createElement('style')
        //console.log(styleHtml)
        //styleEl.innerHtml = styleHtml
        //document.head.appendChild(styleEl);
}



window.addEventListener('hashchange', function(e) {
        console.log('hash shanged! ', window.location.href)
        let name = window.location.href.split('#')[1]
        let lastCard = hashHistory.pop()
        if (name != lastCard.replaceAll(' ', '-')) {
                console.log(name , ' is NOT ', lastCard.replaceAll(' ', '-'))
        } else {
                console.log(name, ' IS ', lastCard.replaceAll(' ', '-'))
        }
});

function jumpToDragon(dragonName, clickedEl = undefined) {
        /*if (clickedEl) {
                let back = clickedEl.closest('dragonCard')
                if (back) {
                        back = clickedEl.closest('dragonCard').id;
                } if (back) {
                        backOne = back;
                        window.location.href = window.location.href.split('#')[0] + '#' + back.replaceAll(' ', '-')
                }
                
        }*/
        //console.log(dragonName.id)
        let currentDragonName = clickedEl.closest('.dragonCard').id
        hashHistory.push(currentDragonName)
        hashHistory.push(dragonName)
        let cardEl = document.getElementById(dragonName)

        if (cardEl.classList.toString().includes('filter')) {
                for (const classname of cardEl.classList) {
                        if (classname.includes('filter')) {
                                cardEl.classList.remove(classname)
                        }
                }
        }
        
        let inDiv = dragonarium[dragonName].status;
        document.getElementById(`tabbutton-${inDiv}`).click()
        while (!document.getElementById(`tabbutton-${inDiv}`).classList.contains('open')) {
                console.log('opening ' , inDiv, '...')
        }
        console.log(document.getElementById(`tabbutton-${inDiv}`), ' should be open now! ')
        window.location.href = window.location.href.split('#')[0] + '#' + dragonName.replaceAll(' ', '-')
        //document.getElementById(inDiv + 'Div')
        console.log('hashhistory = ', hashHistory)
}


function addRiftSpecialties() {
        for (const riftguy of riftSpecialDragons) {

        }
}

//NEW
function sortCardsByEl(el, elementName) {
        console.log('sorting!! ', elementName)
        let tabName = el.closest('.tab').id
        let cardsDiv;
        if (el.closest('.tab').id == "multiparents") {
                cardsDiv = document.getElementById('targetcards')
        } else {
                cardsDiv = el.closest('.tab').querySelector('.dragonCards')
        }
        if (cardsDiv) {
                if (tabFilters[tabName]) {
                        //if (tabFilters[tabName].length == 0) {
                                //what do we do if no filters?
                                //add filter to every el I guess?
                                //adda filter to the cardsDiv that lets everyone be seen/not seen probably!
                                cardsDiv.classList.add('filters-active')
                        //}
                        if (tabFilters[tabName].includes(elementName)) {
                                tabFilters[tabName].splice(tabFilters[tabName].indexOf(elementName), 1)
                                el.classList.add('desat')
                        } else {
                                tabFilters[tabName].push(elementName);
                                el.classList.remove('desat')
                        }
                        for (const card of Array.from(cardsDiv.children)) {
                                card.classList.remove('filteredout')
                        }
                        if (tabFilters[tabName].length == 0) {
                                cardsDiv.classList.remove('filters-active')
                        } else {
                                for (const card of Array.from(cardsDiv.children)) {
                                        for (const filteredElName of tabFilters[tabName]) {
                                                if (!card.classList.contains(filteredElName)) {
                                                        card.classList.add('filteredout');
                                                }
                                        }
                                }
                        }
                } else {
                        console.log('waaa no tab filter knowledge of ', tabName)
                                        
                }
        }
}
//DECOMMISSION - it is Inclsive not exclusive search
/*function sortCardsByElOLD(el, elementName) {
        console.log('sorting!! ', elementName)
        let tabName = el.closest('.tab').id
        let cardsDiv = el.closest('.tab').querySelector('.dragonCards')
        if (cardsDiv) {
                if (tabFilters[tabName]) {
                        //if (tabFilters[tabName].length == 0) {
                                //what do we do if no filters?
                                //add filter to every el I guess?
                                //adda filter to the cardsDiv that lets everyone be seen/not seen probably!
                                cardsDiv.classList.add('filters-active')
                        //}
                        if (tabFilters[tabName].includes(elementName)) {
                                tabFilters[tabName].splice(tabFilters[tabName].indexOf(elementName), 1)
                                if (tabFilters[tabName].length == 0) {
                                        cardsDiv.classList.remove('filters-active')
                                        
                                } else {
                                        for (const card of Array.from(cardsDiv.querySelectorAll(`.${elementName}`))) {
                                                card.classList.remove(`filter${elementName}`)
                                        }
                                }
                                el.classList.add('desat')
                        } else {
                                tabFilters[tabName].push(elementName);
                                
                                for (const card of Array.from(cardsDiv.querySelectorAll(`.${elementName}`))) {
                                        card.classList.add(`filter${elementName}`)
                                }
                                el.classList.remove('desat')
                        }
                } else {
                        console.log('waaa no tab filter knowledge of ', tabName)
                                        
                }
        }
}
*/





function setbackup() {
  let backupbutton = document.querySelector('.gobackupbutton');
  backupbutton.addEventListener('click', function (e) {
    e.preventDefault();
    if (window.location.href.split('#').length > 1) {
      if (window.location.href.split('#')[1] == backOne) {
        backOne = "backtotop"
      }
    }
    e.currentTarget.href = backOne;
    e.currentTarget.click();
  })
}

function setTabs() {
  let tabButtArr = Array.from(document.querySelector('.tab-button').parentNode.children)
  let tabDivArr = Array.from(document.querySelector('.tab').parentNode.children)
  for (const tabButton of tabButtArr) {
    tabButton.addEventListener('click', function(e) {
      dragonarium.savedSettings.currentTab = e.currentTarget.dataset.key;
      saveData();
      let tabButtArr = Array.from(document.querySelector('.tab-button').parentNode.children)
      let tabDivArr = Array.from(document.querySelector('.tab').parentNode.children)
      for (i=0;i<tabButtArr.length;i++) {
        let tabButton = tabButtArr[i]
        tabButton.classList.remove('open')
      }
      e.currentTarget.classList.add('open')
      for (i=0;i<tabDivArr.length;i++) {
        let tabdiv = tabDivArr[i]
        tabdiv.classList.remove('open')
        if (tabDivArr.indexOf(tabdiv) == (tabButtArr.indexOf(e.currentTarget))) {
          tabdiv.classList.add('open')
        }
      }
    })
  }
  /*if (dragonarium.openTab) {
    let button = document.querySelector('.tab-button').parentNode.querySelector(`[data-key="${dragonarium.openTab}"]`)
    if (button) {
      button.click();
    }
  }*/
}



function sortCards(div) {
  let permCards = div.querySelectorAll('.perm')
  let availCards = div.querySelectorAll('.avail')
  let unavailCards = div.querySelectorAll('.unavail')
  
  //favs just leave where they are, and we will append after.
  for (const card of availCards) {
    if (!card.classList.contains('favourite')) {
      div.appendChild(card)
    }
  }
  for (const card of permCards) {
    if (!card.classList.contains('favourite')) {
      div.appendChild(card)
    }
  }
  for (const card of unavailCards) {
    if (!card.classList.contains('favourite')) {
      div.appendChild(card)
    }
  }
  
}


function favouriteCard(button) {
  let el = button.closest('.dragonCard');
  if (Number(button.dataset.toggle) == 0) {
    el.classList.add("favourite");
    button.dataset.toggle = 1;
    el.parentElement.firstElementChild.before(el);
  } else {
    el.classList.remove("favourite");
    button.dataset.toggle = 0;
    if (el.classList.contains('avail')) {
      let next = el.nextElementSibling;
      if (next.classList.contains('favourite')) {
        while (next.classList.contains('favourite')) {
          next = next.nextElementSibling;
        }
        if (!next) {
          el.parentElement.appendChild(el);
        } else {
          next.before(el);
        }
      }
    } else if (el.classList.contains('unavail')) {
      el.parentElement.appendChild(el);
    } else {
      sortCards(el.parentElement);
    }
  }
  dragonarium[el.id].fav = button.dataset.toggle;
  saveData()
  updateTargetCard(el.id, 'fav', button.dataset.toggle)
}

function wantCard(button) {
  radioOtherButtons(button)
  let el = button.closest('.dragonCard');
  if (Number(button.dataset.toggle) == 0) {
    button.dataset.toggle = 1;
    dragonarium[el.id].status = 'want';
    if (el.classList.contains('favourite') && wantDiv.children.length > 0) {
      wantDiv.children[0].before(el)
    } else if (el.classList.contains('unavail')) {
      wantDiv.appendChild(el)
    } else {
      wantDiv.appendChild(el)
      sortCards(wantDiv);
    }
  } else {
    button.dataset.toggle = 0;
    dragonarium[el.id].status = 'init';
    if (el.classList.contains('favourite') && initDiv.children.length > 0) {
      initDiv.children[0].before(el)
    } else if (el.classList.contains('unavail')) {
      initDiv.appendChild(el)
    } else {
      initDiv.appendChild(el)
      sortCards(initDiv);
    }
    //el.closest('.dragonCards').previousElementSibling
  }
  
  //console.log(button.dataset.toggle, el.name)
  saveData()
}


function haveCard(button) {
  let el = button.closest('.dragonCard');
  //console.log(button)
  //console.log(el)
  //console.log(el.name)
  radioOtherButtons(button)
  if (Number(button.dataset.toggle) == 0) {
    button.dataset.toggle = 1;
    dragonarium[el.id].status = 'have';
    if (!hasAllElements) {
            for (const eeel of allDragonData[el.id].elements) {
                if (!playerHasElements.normal.includes(eeel)) {
                        playerHasElements.normal.push(eeel)
                }
            }
            //playerHasElements.normal.concat(allDragonData[el.id].elements)
            if (playerHasElements.normal.length == 28) {
                hasAllElements = true;
                    console.log('all els! ', playerHasElements)
            }
    }
    //updateTargetCard(el.id)
    updatePossibleTargets()
    if (el.classList.contains('favourite') && haveDiv.children.length > 0) {
      haveDiv.children[0].before(el)
    } else if (el.classList.contains('unavail')) {
      haveDiv.appendChild(el)
    } else {
      haveDiv.appendChild(el)
      sortCards(haveDiv);
    }
  } else {
    button.dataset.toggle = 0;
    dragonarium[el.id].status = 'init';
    //updateTargetCard(el.id)
    updatePossibleTargets()
    if (el.classList.contains('favourite') && haveDiv.children.length > 0) {
      initDiv.children[0].before(el)
    } else if (el.classList.contains('unavail')) {
      initDiv.appendChild(el)
    } else {
      initDiv.appendChild(el)
      sortCards(initDiv);
    }
  }
  saveData()
}

function shadowCard(button) {
  
  let el = button.closest('.dragonCard');
  if (Number(button.dataset.toggle) == 0) {
    button.dataset.toggle = 1;
    dragonarium[el.id].status = 'shadow';
    if (el.classList.contains('favourite') && shadowDiv.children.length > 0) {
      shadowDiv.children[0].before(el)
    } else if (el.classList.contains('unavail')) {
      shadowDiv.appendChild(el)
    } else {
      shadowDiv.appendChild(el)
      sortCards(shadowDiv);
    }
  } else {
    button.dataset.toggle = 0;
    dragonarium[el.id].status = 'init';
    if (el.classList.contains('favourite') && shadowDiv.children.length > 0) {
      initDiv.children[0].before(el)
    } else if (el.classList.contains('unavail')) {
      initDiv.appendChild(el)
    } else {
      initDiv.appendChild(el)
      sortCards(initDiv);
    }
  }
  saveData()
}


function radioOtherButtons(clicked) {
  let safety = 25
  let prev = clicked.previousElementSibling;
  while (prev) {
    if (!prev.classList.contains('favc')) {
      prev.dataset.toggle = 0;
      prev.classList.remove('toggled')
    }
    prev = prev.previousElementSibling
    safety -= 1;
    if (safety < 0) {
      console.log("AAAA")
      break;
    }
  }
  let next = clicked.nextElementSibling;
  while (next) {
          if (!next.classList.contains('rifttrait')) {
              next.dataset.toggle = 0;
              next.classList.remove('toggled')
          }
    next = next.nextElementSibling;
    safety -= 1;
    if (safety < 0) {
      console.log("AAAA")
      break;
    }
  }
}



/*
function hideUnavail(el) {
  console.log('hiding/showing!');
  let cards = Array.from(el.closest('.tab').querySelectorAll('.unavail'));
  
  if (Number(el.dataset.toggle) == 0) {
    el.dataset.toggle = 1;
    el.classList.add('toggled')
    for (const card of cards) {
      card.classList.add('filterunavail');
    }
  } else {
    el.dataset.toggle = 0
    el.classList.remove('toggled')
    for (const card of cards) {
      card.classList.remove('filterunavail');
    }
  }
  let id = el.closest('.settings-buttons').nextElementSibling.id
  if (!dragonarium[id]) {
    dragonarium[id] = {}
  }
  dragonarium[id].hideUnavail = el.dataset.toggle
  saveData()
}


function hidePerm(el) {
  console.log('hiding/showing!');
        let cards = Array.from(el.closest('.tab').querySelectorAll('.perm'));
  //let cards = Array.from(el.closest('.settings-buttons').nextElementSibling.nextElementSibling.querySelectorAll('.perm'));
  if (Number(el.dataset.toggle) == 0) {
    el.dataset.toggle = 1;
    el.classList.add('toggled')
    for (const card of cards) {
      card.classList.add('filterperm');
    }
  } else {
    el.dataset.toggle = 0
    el.classList.remove('toggled')
    for (const card of cards) {
      card.classList.remove('filterperm');
    }
  }
  let id = el.closest('.settings-buttons').nextElementSibling.nextElementSibling.id
  if (!dragonarium[id]) {
    dragonarium[id] = {}
  }
  dragonarium[id].hidePerm = el.dataset.toggle
  saveData()
}*/


function hideBreeds(el) {
        
        //let cardsDiv = Array.from(el.closest('.tab'));
  //let cardsDiv = Array.from(el.closest('.settings-buttons').nextElementSibling.nextElementSibling.children);
  //console.log('hiding/showing!', cardsDiv[0]);
  if (Number(el.dataset.toggle) == 0) {
    el.dataset.toggle = 1;
    el.classList.add('toggled')
    //console.log(cardsDiv[0])
    for (const breeds of Array.from(el.closest('.tab').querySelectorAll('.breedinginfo'))) {
      breeds.classList.add('hidden');
    }
  } else {
    el.dataset.toggle = 0
    el.classList.remove('toggled')
    for (const breeds of Array.from(el.closest('.tab').querySelectorAll('.breedinginfo'))) {
      breeds.classList.remove('hidden');
    }
  }
  let id = el.closest('.settings-buttons').nextElementSibling.nextElementSibling.id
  if (!dragonarium[id]) {
    dragonarium[id] = {}
  }
  if (dragonarium[id]) {
    dragonarium[id].hideBreeds = el.dataset.toggle
    saveData()
  } else {
    console.log('smth weird with ', id);
  }
}


function clickInitButtons() {
        /*let tabs = [wantDiv, initDiv, haveDiv, shadowDiv]
        for (const tab of tabs) {
                let buttons = tab.querySelectorAll('.sortbutton')
                for (const button of buttons) {
                        let id = tab.querySelector('.dragonCards').id
                        let sortType = button.classList[0].substring(0, button.classList[0].length - 6);
                        if (Number(dragonarium[id][sortType]) == 1) {
                                button.click()
                        }
                }
        }*/
}


function cycleViews(imgEl) {
  let card = imgEl.closest('.dragonCard')
  let imgsFront = card.querySelector('.multiimgfront')
  let imgsBack = card.querySelector('.multiimgback')
  let imgArray = JSON.parse(imgsFront.dataset.imgarray)
  imgArray.push(imgArray.splice(0, 1)[0])
        imgsFront.dataset.imgarray = JSON.stringify(imgArray)
  for (const img of imgArray) {
    if (imgArray.indexOf(img) == 0) {
      imgsFront.firstElementChild.src = img
    } else {
      imgsBack.children[imgArray.indexOf(img) - 1].firstElementChild.src = img
    }
  }
  let viewLabel = card.querySelector('.viewname')
  let type = imgArray[0].split('dult')[1].replace('.webp', '');
  if (!type || type.length < 2){
    viewLabel.textContent = "Day/Normal Form"
  } else {
    viewLabel.textContent = type.substring(1) + " Form"
  }
  
}

function riftTraitButton(el) {
        if (Number(el.dataset.toggle) == 0) {
                el.dataset.toggle = 1
                el.closest('.dragonCard').classList.add('rifted')
                el.classList.add('toggled')
                if (!hasAllRiftElements) {
                    for (const eeel of allDragonData[el.closest('.dragonCard').id].elements) {
                        if (!playerHasElements.rift.includes(eeel)) {
                                playerHasElements.rift.push(eeel)
                        }
                    }
                    //playerHasElements.normal.concat(allDragonData[el.id].elements)
                    if (playerHasElements.rift.length == 28) {
                        hasAllElements = true;
                            console.log('has all rift elements! ', playerHasElements.rift)
                    }
                }
                let havebutton = el.closest('.dragonCard').querySelector('.havec')
                        if (havebutton.dataset.toggle == "0") {
                                havebutton.click()
                        }
                //document.querySelector('.targetdragons').querySelector('.'+ el.closest('.dragonCard').id).classList.add('rifted')
        }
        else {
                el.dataset.toggle = 0
                el.closest('.dragonCard').classList.remove('rifted')
                el.classList.remove('toggled')
                
        }
        dragonarium[el.closest('.dragonCard').id].rifted = Number(el.dataset.toggle)
        saveData()
}



function buildDragonCard(name, data) {
  //console.log(name, data)
  let elements = ``
  for (const internalEl of allDragonData[name].elements) {
        elements += `<img loading="lazy" src="${elementIcons[internalEl.substring(2)]}" class="minielicon ${internalEl.substring(2)}">`
  }
  let cardhtml = 
 `<div class="dragonCard `
    if (data.limited == "Y") {
      cardhtml += ` limited unavail filterunavail `
    } else if (data.limited == "A") {
      cardhtml += `limited avail`
    } else {
      cardhtml += ` perm`
    }
    if (Number(data.gold) > 50) {
        cardhtml += ` highgold `
    }
    /*if (dragonarium[name].rifted == "1") {
        cardhtml += ` rifted `
    }*/
    if (data.combo.raw) {
            //console.log('why do we have raw for ', name)
        data.combo = processCombo(data.combo.raw)
            allDragonData[name].combo = data.combo;
            //console.log(name, "'s combo should now be ", data.combo, allDragonData[name].combo)
    }
     if (data.combo.special) {
             if (data.combo.special.includes("Evolve")) {
                      cardhtml += ` evolution `
             }
             if (data.combo.special.includes("night")) {
                      cardhtml += ` breednight `
             } else if (data.combo.special.includes("day")) {
                      cardhtml += ` breedday `
             }
             if (data.combo.special.includes("blossoms")) {
                      cardhtml += ` weatherblossoms `
             } else if (data.combo.special.includes("fireflies")) {
                      cardhtml += ` weatherfireflies `
             }
    }

    if (data.elements) {
        for (const elem of data.elements) {
                if (elementChart.basics.includes(elem)) {
                        
                        cardhtml += ` ${elem.substring(2)} `
                }
                
        }
    }
  cardhtml += `" name="${name}" id="${name}">
    <div class="minibuttons">
        <div class="minibutton favc" data-toggle=0 onclick="favouriteCard(this)" >❤<div class="tooltip">Favourite</div></div>
        <div class="minibutton wantc" data-toggle=0 onclick="wantCard(this)">✦<div class="tooltip">Want</div></div>
        <div class="minibutton havec" data-toggle=0 onclick="haveCard(this)" >✔<div class="tooltip">Acquired</div></div>
        <div class="minibutton shadowc" data-toggle=0 onclick="shadowCard(this)" >🗡<div class="tooltip">Shadow Realm</div></div>
        <div class="minibutton rifttrait" onclick="riftTraitButton(this)" data-toggle=0><div class="tooltip">Rift Version Acquired</div></div>
    </div>`
        
    cardhtml +=`<div class="leftminiicons">`
        /*
            if (data.limited == "Y") {
                cardhtml +=`<div class='leftmini unavail'>⧗<div class="tooltip">Not Currently Available</div></div>`
            } else if (data.limited == "A") {
                cardhtml +=`<div class='leftmini avail'>⧗<div class="tooltip">Currently Available Limited!</div></div>`
            }*/
            
            if (data.limited == "Y") {
                cardhtml +=`<div class='leftmini availability'><div class="tooltip">Not Currently Available</div></div>`
            }
            if (data.limited == "A") {
                cardhtml +=`<div class='leftmini availability'><div class="tooltip">Currently Available</div></div>`
            }
            if (Number(data.gold) > 50) {
                cardhtml +=`<div class='leftmini'> <img loading="lazy" src='https://i.postimg.cc/X7JBNYbL/Coin-template.webp'> <div class="tooltip">Top 10% DC earner</div></div>`
            }
            if (data.rarity == "Gemstone") {
                cardhtml +=`<div class='leftmini'> <img loading="lazy" src='https://i.postimg.cc/jd5nqSb4/Gem-template.webp'> <div class="tooltip">Earns Gems</div></div>`
            }
        
    cardhtml +=`</div>`
    
    cardhtml +=`<h2 class="itemname">${name} Dragon</h2>`
    if (allDragonImgs[name]) {
      let imgCount = Object.getOwnPropertyNames(allDragonImgs[name]).length
      if (imgCount > 1) {
        let imgArray = Object.values(allDragonImgs[name])
        imgArray.splice(imgArray.indexOf(allDragonImgs[name].Adult), 1)
        imgArray = [ allDragonImgs[name].Adult ].concat(imgArray)
        //console.log(imgArray)
              
        cardhtml += `<p class="viewname" style="font-weight:bold;font-size:medium;">Day/Regular View</p><p style="font-size:smaller;font-style:italic;">(click to cycle views)</p><div style="display: flex; position: relative; height: 220px;">
          <div class="multiimgback">`
          for (const img of Object.getOwnPropertyNames(allDragonImgs[name])) {
            //console.log(img, allDragonImgs[name][img])
            if (img != "Adult") {
              cardhtml += `<div><img loading="lazy" class="itemimage multi" onclick="cycleViews(this)" src='${allDragonImgs[name][img]}'></div>`
            }
          }
            
          cardhtml += `</div>
          <div class="multiimgfront" data-imgarray='${JSON.stringify(imgArray)}'>
            <img loading="lazy"  class="itemimage multi" onclick="cycleViews(this)" src='${allDragonImgs[name].Adult}'>
          </div>
        </div>`
      }
      else if (imgCount == 1) {
        cardhtml += `<div class="itemimage"` 
        //if (Object.getOwnPropertyNames(data.images)[0] == "temp") {
        //    cardhtml += ` style="max-width:100px;max-height:100px;" `
        //}
        cardhtml += `><img loading="lazy" src='${allDragonImgs[name][Object.getOwnPropertyNames(allDragonImgs[name])[0]]}' ></div>`
      } else {
         cardhtml += `<div class="itemimage" style="max-width:50px;max-height:50px;"></div>` 
      }
    } else {
      cardhtml += `<div class="itemimage" style="max-width:50px;max-height:50px;"></div>` 
    }
    cardhtml += `<div style='max-height:22px;height:fit-content;display:flex; justify-content:center;'>${elements}</div> `

        if (data.eventprice) {
                cardhtml += `<div class="eventprice"><p>${data.eventprice}</p></div>`
        }
            
           cardhtml +=  `<div class="breedinginfo">`

    let skipThing = false;
    if (data.combo['special']) {
        data.combo.special = data.combo.special.charAt(0).toUpperCase() + data.combo.special.substring(1)
      if (data.combo['special'].includes('Evolve')) {
              let evolveFrom = data.combo.special.split('from ')[1]
              if (allDragonData[evolveFrom]) {
                 cardhtml += `<h3>Evolve from
                         <div class="specific-breeding-req">
                                 <a class="specific-breeding-req" href="#${evolveFrom}" onClick="jumpToDragon('${evolveFrom}', this)">${evolveFrom}</a>
                                 </h3>`
              } else {
                 cardhtml += `<h3>${data.combo.special}</h3>`
              }
        skipThing = true;
      }
      
    } 
    if (!skipThing) {
      cardhtml += `<h4>Breeding Info:</h4>`
      if (data.combo['special']) {
        if (data.combo.special.includes('trait')) {
                cardhtml += `<h4 style="margin:5px">One Parent Must Have</h4><h3 style="margin:0px"><div class="el-img riftbgicon" style="background-position: center; background-image:url('${traitIcons[data.combo.special.replace(' ', '').toLowerCase()]}');"></div> ${data.combo.special.split(' trait')[0]} Trait</h3>`
        } else if (data.combo.special.includes('Rift align:')) {
                let elName = data.combo.special.split('lign:')[1]
                elName = elName.charAt(0).toUpperCase() + elName.substring(1)
                cardhtml += `<h4 style="margin:5px">Rift Must be <div class="el-img" style="background-position: center; background-image:url('${traitIcons[data.combo.special.split('lign:')[1].toLowerCase() + 'trait']}');"></div>${elName} Aligned</h4>`
        }
        else {
                cardhtml += `<h3>${data.combo.special}</h3>`
        }
      }
      if (data.rarity == "Galaxy" && data.name != "Rigel") {
        cardhtml += `<div class="el-img" style="background-image:url('${elementIcons.Galactic}');"></div>`
        cardhtml += `Galaxy Dragon; Clone in Coop only`;
        //skipThing = true;
      }
      if (data.combo['requirements'] && data.combo['requirements'].length > 0) {
        let cleanedReq = ''
        let istrait = false
              if ( data.combo.requirements[0] != data.combo.requirements[1]) {
                for (const req of data.combo.requirements) {
                        let reqq = req
                    if (elementChart.basics.includes(req)) {
                        cleanedReq +=  `<div class="el-img" style="background-image:url('${elementIcons[req.substring(2)]}');"></div>` + reqq.substring(2)
                    } else {
                        if (req.includes('trait)')) {
                                cleanedReq = cleanedReq.substring(0, cleanedReq.length - 3)
                                cleanedReq += `<div class="el-img" title="${data.combo.special.split(' trait')[0] + ' Trait'}" style="background-position: center; background-image:url('${traitIcons[data.combo.special.replace(' ', '').toLowerCase()]}');"><div class="tooltip">${data.combo.special.split(' trait')[0]} Trait</div></div></h3>`
                                istrait = true
                        } else {
                            cleanedReq += `<div class="specific-breeding-req"><a class="specific-breeding-req" href="#${req}" onClick="jumpToDragon('${req}', this)">${req}</a>`
                            if (allDragonData[req]) {
                                cleanedReq += `<span class="internal-el-imgs">`
                                for (const el of allDragonData[req].elements) {
                                        cleanedReq += `<div style="background-image:url('${elementIcons[el.substring(2)]}');"></div>`
                                }
                                 cleanedReq += `</span>`
                                if (req.includes('trait)')) {
                                        //if (data.combo.special.includes('trait)')) {
                                                let traitName = req.split('(')[1].split(')')[0]
                                                if (traitName) {
                                                        if (traitIcons[traitName]) {
                                                                cleanedReq += `<div class="el-img" title="${traitName.charAt(0).toUpperCase() + traitName.substring(1).replace('trait', ' Trait')}" style="background-image:url('${traitIcons[traitName]}');"></div>`
                                                        }
                                                }
                                        //}
                                }
                            }
                        
                            cleanedReq += `</div>`
                        }
                    }
                    if (data.combo.requirements.indexOf(req) != data.combo.requirements.length - 1) {
                        cleanedReq += ' + '
                    }
                }
                /*if (data.combo.requirements.length == 1) {
                        if (data.combo.requirements[0] == "MhMonolith") {
                                data.combo.requirements.push("MhMonolith")

                        }*/
                if (data.combo.requirements.length == 1) {
                    cleanedReq += ' + Any Dragon'
                }
              } else {
                      //console.log(data.combo.requirements, data)
                      cleanedReq = `Any 2 &nbsp;<div class="el-img" style="background-image:url('${elementIcons[data.combo.requirements[0].substring(2)]}');"></div>${data.combo.requirements[0].substring(2)} Dragons`
              }
        cardhtml += `<h3>${cleanedReq}</h3>`
      }
      if (data.times) {
        cardhtml += `<p>${data.times}</p>`
      }
      if (data.breedingOdds) {
        if (data.breedingOdds.base) {
          cardhtml += `<p>Base Odds: ${data.breedingOdds.base} / Coop Clone: ${data.breedingOdds.social}</p><br>`
        }
      }
      if (data.combo.requirements) {
         let otherhtml = `<details class="otherpossible" style="min-width: 0px;" onclick = "seeOtherPossible(this)">
         <summary>Other Dragons from this Combo:</summary>`

         otherhtml += '</details>'
         cardhtml += otherhtml;
      }
      cardhtml +=   `</div>
      </div>`
    }
    let cardDiv = document.createElement('div');
    cardDiv.innerHTML = cardhtml;
    let cardEl = cardDiv.children[0]
    //console.log(cardhtml, cardDiv, cardEl)
    return cardEl;

}

function seeOtherPossible(htmEl, elementAdded) {
        if (htmEl.classList.contains('otherpossible') && htmEl.childElementCount < 2) {
                let otherhtml = `<div class="addelementstomix">
                         <p>Add additional elements to results:</p>
                         <div class="elementsort">`
                        let data = allDragonData[htmEl.closest('.dragonCard').id]
                 for (const eel of elementChart.basics) {
                         //let elName = chartRef[eel]
                         if (eel == "AnAny") {
                                otherhtml += `</div><div class="elementsort">`
                         }
                         else if (!data.combo.output.includes(eel) && eel != "CrCrystalline" && eel != "GeGemstone") {
                                otherhtml += `<img loading="lazy" class="minielicon desat" src="${elementIcons[eel.substring(2)]}" data-el="${eel}" onclick="seeOtherPossible(this)">`
                         }
                         if (eel == "OlOlympus") {
                                otherhtml += `</div><div class="elementsort">`
                         }
                 }
                 otherhtml += `</div>
                 </div>
                 <p>*only shows dragons you don't own</p>
                 <div class="otherss"> </div>`
                 htmEl.innerHTML += otherhtml
                 htmEl.open = "true"
                console.log('opening for first time!')
                 setTimeout(seeOtherPossible(htmEl, elementAdded), 0.1)
                 return;
        }
        /*if (htmEl.open) {
                console.log('open!')
                return;
        } else {
                console.log('notpopne')
        }*/
        
        let dragonName = htmEl.closest('.dragonCard').id
        let data = allDragonData[dragonName]
        let objPairStuff = {}
        
        let otherguys = ``
        let cave = 'reg'
        
        let comboOutput = [].concat(data.combo.output)
        if (!htmEl.classList.contains('otherpossible')) {
                if (htmEl.classList.contains('desat')) {
                        htmEl.classList.remove('desat')
                        htmEl.classList.add('addedel')
                        //comboOutput.push(elementAdded)
                }
                else {
                        htmEl.classList.add('desat')
                        htmEl.classList.remove('addedel')
                }
                htmEl = htmEl.closest('.otherpossible')
        }
        let addedels = htmEl.querySelectorAll('.addedel')
        for (const added of Array.from(addedels)) {
                if (added.dataset.el) {
                        comboOutput.push(added.dataset.el)
                }
        }
        
        if (data.combo.requirements.includes('R Rift')) {
                cave = 'rift'
        }
        
        let possiblediv = htmEl.querySelector('.otherss')
        
        objPairStuff = getOutputsAndOdds(['justOutputs', 'awaaa'], comboOutput, objPairStuff, cave)
        //console.log(comboOutput, objPairStuff)
        for (const guy of Object.keys(objPairStuff.newGuys)) {
                if (guy != dragonName) {
                        let imgsrc = allDragonImgs[guy].Adult
                        if (!imgsrc) {
                                imgsrc = allDragonImgs[guy][Object.keys(allDragonImgs[guy])[0]]
                                console.log('no adult.? ', allDragonImgs[guy], Object.keys(allDragonImgs[guy])[0])
                        }
                        otherguys += `<div class="otherpossibleguy"><img src="${imgsrc}" loading="lazy">
                                <h5>${guy}</h5></div>`
                }
        }
/*
        if (singleSpecialGuys.includes(dragonName)) {
                let specialA = ''
                for (const req of data.combo.requirements) {
                        if (!elementChart.basics.includes(req)) {
                                specialA = req
                                break;
                        }
                }
                if (specialA) {
                        for (const guy of singleSpecialGuys) {
                                let doublecombocheck = [].concat(allDragonData[specialA].elements)
                                doublecombocheck.push(specialA)
                                let specialB = ''
                                for (const req of allDragonData[guy].combo.requirements) {
                                        if (!elementChart.basics.includes(req)) {
                                                specialB = req
                                                break;
                                        }
                                }
                                if (specialB) {
                                        doublecombocheck.push(specialB)
                                        doublecombocheck.concat(allDragonData[specialB].elements)
                                        let valid = true
                                        for (const reqqq of data.combo.requirements) {
                                                if (!doublecombocheck.includes(reqqq)) {
                                                        valid = false
                                                        break;
                                                }
                                        }
                                        console.log(dragonName, ' needs ',data.combo.requirements, '; check is ', valid, '\n', doublecombocheck, )
                                        
                                        if (valid) {
                                                let specialguyimg = allDragonImgs[guy].Adult
                                                if (!specialguyimg) {
                                                        specialguyimg = allDragonImgs[guy][Object.keys(allDragonImgs[guy])[0]]
                                                        console.log('no adult.? ', allDragonImgs[guy], Object.keys(allDragonImgs[guy])[0])
                                                }
                                                //otherguys += `<div class="otherpossibleguy"><img src="${specialguyimg}" loading="lazy">
                                                //<h5>${guy}<br>(combo is ${specialA.name}+${specialB.name})</h5></div>`

                                        }
                                }
                                
                        }
                }
        } //else if (!htmEl.closest('.dragonCard').classList.includes('twospecialguys')) {
          //      for (const guy of singleSpecialGuys) {
        //}*/
        if (otherguys) {
                possiblediv.innerHTML = otherguys 
        } else {
                possiblediv.innerHTML = `No other new dragons found in results!`
        }
}


function makeCards() {
  if (!eventObj.dragonarium) {
      eventObj.dragonarium = {};
      dragonarium = {};
  } if (!dragonarium) {
    dragonarium = {};
  }
  
  for (const dragonName of allDragonNames) {
    let card = buildDragonCard(dragonName, allDragonData[dragonName])
    initDiv.appendChild(card)
          
    //console.log(card)
    /*if (card.querySelector('.multiimgfront')) {
        let multiArray = []
          multiArray.push(card.querySelector('.multiimgfront').firstElementChild.src)
        for (const img of Array.from(card.querySelector('.multiimgback'))) {
                console.log(img, img.firstElementChild.firstElementChild)
            multiArray.push(img.firstElementChild.firstElementChild.src)
        }
      card.querySelector('.multiimgfront').dataset.imgarray = JSON.stringify(multiArray)
            console.log('array: ', multiArray, JSON.stringify(multiArray))
    }*/
    if (!dragonarium[dragonName]) {
      dragonarium[dragonName] = {"fav": 0, "status": "init", "rifted": "0"};
    }
    /*if (dragonarium[dragonName].status == "init") {
        initDiv.appendChild(card);
    }*/
    else if (dragonarium[dragonName].status == "have" || dragonarium[dragonName].status == "acquired" ) {
      card.querySelector('.havec').click();
    }
    else if (dragonarium[dragonName].status == "want") {
      wantDiv.appendChild(card);
      card.querySelector('.wantc').click();
    }
    else if (dragonarium[dragonName].status == "shadow") {
      shadowDiv.appendChild(card);
      card.querySelector('.shadowc').click();
    }
    if (!dragonarium[dragonName].rifted) {
        dragonarium[dragonName].rifted = "0"
    }
    else if (dragonarium[dragonName].rifted == "1") {
        card.querySelector('.rifttrait').click()
    }
    /*else {
      //console.log('???? what was that?', dragonName, " has a status of ", dragonarium[dragonName].status);
      initDiv.appendChild(card);
    }*/
    if (Number(dragonarium[dragonName].fav) == 1) {
      card.querySelector('.favc').click()
    }
  }
}



function addCheckListeners() {
  let checks = Array.from(document.querySelectorAll('.hideBreedsButton'));
  for (const check of checks) {
    //console.log(check);
    check.addEventListener("click", function(e){hideBreeds(e.currentTarget)});
  }
  checks = Array.from(document.querySelectorAll('.hideUnavailButton'));
  for (const check of checks) {
    //console.log(check);
    check.addEventListener("click", function(e){hideUnavail(e.currentTarget)});
  }
  checks = Array.from(document.querySelectorAll('.hidePermButton'));
  for (const check of checks) {
    //console.log(check);
    check.addEventListener("click", function(e){hidePerm(e.currentTarget)});
  }
}





function processDragonData() {
  let exclude = ["Tiamat", "Bahamut", "Gaia", "Ts'aishen", "Kairos"]
  for (const dragon of allDragonNames) {
    if (!exclude.includes(dragon)) {
        if (dragon.includes("Ghostly")) {
                allDragonData[dragon].limited = "";
                allDragonData[dragon].rarity = "Ghostly";
        }
    } else {
      delete allDragonData[dragon];
      allDragonNames.splice(allDragonNames.indexOf(dragon), 1)
    }
    if (allDragonData[dragon]) {
      if (allDragonData[dragon].combo) {
        //console.log(dragon, dragon.combo
        let comboTemp =  processCombo(allDragonData[dragon].combo.raw);
        allDragonData[dragon].combo = comboTemp;
      }
    }
  }
}

function processCombo(comboData) {
        
  //combo  = {output, requirements, special/notes}
  let comboFin = {};
  
  let readyforSplits = true;
  if (comboData.includes('[')) {
    let special = comboData.split('[')[1];
    special = special.split(']')[0];
    comboFin['special'] = special;
    comboData = comboData.split('[')[0];

    if (!comboData.includes('+')) {
      readyforSplits = false;
    } else {
      comboData = comboData.substring(0, comboData.length - 1)
    }
  } 
  if (comboData.includes('Evolve')) {
    comboFin['special'] = comboData;
    readyforSplits = false;
  } 
  else if (comboData.includes('(')) {
          if (comboData == 'Mirage(water)+Shadow(air)+rift') {
                comboData = "Mirage + Shadow"
                comboFin.requirements = ["Mirage", "(watertrait)", "Shadow", "(airtrait)", "R Rift"]
                comboFin.output = [ "I Light", "D Dark", "Mirage", "Shadow" , "R Rift"]
                comboFin.special = '' //`Mirage(watertrait) + Shadow(airtrait) + <div class="el-img" style="background-image:url('https://i.postimg.cc/3w0Cw3dH/Icon-Rift.webp');"></div>Rift`
                readyforSplits = false;
                  
          }
          else {
            comboFin['special'] = comboData + `\n pls hold for better info on this guy!`;
            readyforSplits = false;
          }
  } 
  
  if (readyforSplits) {
    comboFin.requirements = []
    comboFin.output = []
    let specificReqInternalEls = []
    let comboArr = comboData.split('+')
    let chartRefArr = Object.getOwnPropertyNames(chartRef)
    
    for (const data of comboArr) {
      datapoint = data.trim()
      if (datapoint.length > 2) {
        //datapoint = datapoint.charAt(0).toUpperCase() + datapoint.substring(1)
        //let special = isUpperCase(datapoint.trim())
        if (chartRefArr.includes(datapoint)) {
          comboFin.requirements.push(chartRef[datapoint]);
          comboFin.output.push(chartRef[datapoint]);
        } else {
          comboFin.requirements.push(datapoint);
          comboFin.output.push(datapoint);
          if (allDragonData[datapoint]) {
            let requirementEls = allDragonData[datapoint].elements
            if (!requirementEls) {
              console.log('oops no ', datapoint)
            } else {          //getRequirementEls(datapoint.trim())
              for (const el of requirementEls) {
                      if (!specificReqInternalEls.includes(el)) {
                        specificReqInternalEls.push(el)
                      }
                      if (!comboFin.output.includes(el)) {
                        comboFin.output.push(el)
                      }
              }
            }
          } else {
            console.log('cant get els for ', datapoint)
          }
        }
      }
    }
    let outputNoDups = []
    for (const item of comboFin.output) {
      if (!outputNoDups.includes(item)) {
        outputNoDups.push(item)
      }
    }
    let requirementNoDups = [];
    for (const item of comboFin.requirements) {
      if (!requirementNoDups.includes(item) && !specificReqInternalEls.includes(item)) {
        requirementNoDups.push(item)
      }
    }
    comboFin.output = outputNoDups;
    //if (comboFin.requirements.length != 1) {
      comboFin.requirements = requirementNoDups;
    //} else {
        
    //}
    
    //if (comboFin.requirements.length != requirementNoDups.length) {
    //    console.log('lendth is not same:', comboFin.requirements, requirementNoDups)
    //}
  }
        if (comboFin.requirements) {
                if (comboFin.requirements.length == 1) {
                        if (comboFin.requirements[0] == "MhMonolith") {
                                comboFin.requirements = [ "MhMonolith", "MhMonolith" ]
                        } else if (comboFin.requirements[0] == "SnSnowflake" ) {
                                comboFin.requirements = [ "SnSnowflake", "SnSnowflake" ]
                        } //else if (comboFin.requirements.length == 1) {
                          //      comboFin.requirements.push('AnAny')
                        //}
                }
        }
  return comboFin;
}

/*function getRequirementEls(requirementName) {
  for (i=0;i<allDragonNames.length;i++) {
    if (allDragonNames[i] == requirement){
      console.log('yeah got em!');
      let rowStuff = processElsAndHabitats(allDragonData[allDragonNames[i]])
      return rowStuff.elements
    }
  }
}*/



function processElsAndHabitats(row) {
  let elementChart = {
    epic: [],
    prims: []
  }
  let chartRef = {}

  let elementLetters = row.elements;
  row.elements = []
  if (elementLetters.includes("All")) {
    for (const prim of elementChart.prims) {
      row.elements.push(chartRef[prim]);
    }
    elementLetters.replace('All', ' ');

  } else {
    for (const epicCheck of elementChart.epic) {
      if (elementLetters.includes(epicCheck)) {
        row.elements.push(chartRef[epicCheck]);
        elementLetters.replace(epicCheck, ' ');
      }
    }
    for (const primCheck of elementChart.prims) {
      if (elementLetters.includes(primCheck)) {
        row.elements.push(chartRef[primCheck]);
        elementLetters.replace(primCheck, ' ');
      }
    }
  }

  let habitatLetters = row.habitats;
  row.habitats = []
  for (const epicCheck of elementChart.epic) {
    if (habitatLetters.includes(epicCheck)) {
      row.habitats.push(chartRef[epicCheck]);
      habitatLetters.replace(epicCheck, ' ');
      if (!row.elements.includes(chartRef[epicCheck])) {
        row.elements.push(chartRef[epicCheck])
      }
    }
  }
  for (const primCheck of elementChart.prims) {
    if (habitatLetters.includes(primCheck)) {
      row.habitats.push(chartRef[primCheck]);
      habitatLetters.replace(primCheck, ' ');
      if (!row.elements.includes(chartRef[primCheck])) {
        row.elements.push(chartRef[primCheck])
      }
    }
  }

  //remove dups in the elements
  let elementsNoDups = []
  for (const item of row.elements) {
    if (!elementsNoDups.includes(item)) {
      elementsNoDups.push(item)
    }
  }
  row.elements = elementsNoDups;

  return row;
}

/*
function getDragonImgs() {
  for (const node of Array.from(document.getElementById('dragonurls').childNodes)) {
    if (node.textContent) {
      let url = node.textContent;
      let dragonName = url.split('/')[url.split('/').length - 1].replace('.webp', '');
      let imgType = dragonName.split('Dragon-Adult')[dragonName.split('Dragon-Adult').length - 1].replace('-', ' ');
      dragonName = "Adu" + dragonName.split('-Dragon-Adu')[0].replace('-', ' ');
      //let imgType = fileWords[fileWords.length - 1]
      if (imgType.includes("Adult") && imgType.length == 6) {
        dragonName = dragonName + ' ' + imgType[5];
        imgType = "Adult"
      }
      if (allDragonData[dragonName]) {
        if (!allDragonData[dragonName].images) {
          allDragonData[dragonName].images = {}
        }
        allDragonData[dragonName].images[imgType] = url
      } else {
        console.log('!! couldnt find img for ', dragonName)
      }
    }
  }
}*/


/////////////////////TARGETING YAY////////////////////////////



function searchListeners() {
  for (const input of Array.from(document.querySelectorAll('.search'))) {
    input.addEventListener('input', function(e) {
      let key = e.currentTarget.dataset.key;
        //console.log(e.currentTarget.value);
      let cardHolder = input.closest('.tab').querySelector('#'+key);
            //console.log(key, cardHolder)
      for (const card of Array.from(cardHolder.children)) {
        if (e.currentTarget.value && e.currentTarget.value != ' ') {
                let dragonName = card.dataset.dragonName
                /*if (!dragonName) {
                        dragonName = card.tagName
                        console.log(dragonName, 'aaa no name', card);
                        //continue
                }*/
                if (!dragonName) {
                        dragonName = card.id
                        //console.log(dragonName, 'aaa no nameaa', card);
                }
                if (!dragonName) {
                        console.log('cant find dragonname for card: ', card)
                }
                if (!dragonName.toLowerCase().includes(e.currentTarget.value.trim().toLowerCase())) {
                    card.classList.add('filtersearch');
                } else {
                    card.classList.remove('filtersearch');
                }
                //console.log(dragonName)
        } else {
                card.classList.remove('filtersearch');
        }
      }
    })
  }
}



function createTargetCards() {
  let targetCardDiv = document.querySelector('.targetcards');
  let lastFavCard;
  let lastWantCard;
  let lastInitCard;
  for (const dragonName of allDragonNames) {
    if (allDragonData[dragonName].limited != 'Y') {
      if (!allDragonImgs[dragonName]) {
              console.log(':( no img for ', dragonName)
              continue;
      }
      let elementsClasses = ''
      let elementsEls = ``
            for (const internalEl of allDragonData[dragonName].elements) {
                elementsEls += `<img loading="lazy" src="${elementIcons[internalEl.substring(2)]}" class="minielicon">`;
                    elementsClasses += ' ' + internalEl.substring(2) + ' '
                    if (elementChart.subbedprims.includes(dragonName)) {
                        elementsClasses += ' primarydragon '
                    }
                    if (internalEl == "GaGalactic") {
                        elementsClasses += ' noriftallowed '
                    }
                    if (internalEl == "R Rift") {
                        elementsClasses += ' riftexclusion '
                        let primtest = dragonName.charAt(0) + ' ' + dragonName.replace(' Rift', '')
                        //console.log(primtest)
                        if (elementChart.basics.includes(primtest)) {
                                elementsClasses += ' riftprim '
                        }
                    }
            }
        
      //let breedInfo = document.querySelector(`#${dragonName}`).querySelector('h3').innerHTML <h3> ${breedInfo} </h3>
      let targetCardHtml = 
      `<div class='targetcard ${dragonName.replaceAll(' ', '')} ${elementsClasses}' data-dragon-name="${dragonName}" data-status='${dragonarium[dragonName].status}' data-fav="${dragonarium[dragonName].fav}" onclick="targetSelect(this)">
          <div class="itemimage targetimage">
              <img loading="lazy" src="${allDragonImgs[dragonName].Adult}">
          </div>
          <h2 class="itemname">${dragonName}</h2>` + 
          //<div style="justify-content: center; display:flex; max-height:22px; height:fit-content;">${elementsEls}</div>
      `</div>`;

      let cardEl = document.createElement('div');
      cardEl.innerHTML = targetCardHtml;
      //console.log(cardEl, cardEl.innerHTML);
      cardEl = cardEl.children[0];

      if (allDragonData[dragonName].combo.requirements) {
              let specialguycount = 0
              if (allDragonData[dragonName].combo.requirements[0] == allDragonData[dragonName].combo.requirements[1]) {
                specialguycount = 2
              } else {
                  for (const required of allDragonData[dragonName].combo.requirements) {
                        if (!elementChart.basics.includes(required)) {
                                specialguycount += 1
                        }
                  }
              }
          if (specialguycount > 1) {
              cardEl.classList.add('twospecialguys')
              let card = document.getElementById(dragonName)
              if (!card) {
                console.log('no card sad! ', dragonName)       
              } else {
                      card.classList.add('twospecialguys')
              }
          } else if (specialguycount == 1) {
              cardEl.classList.add('onespecialguy')
              document.querySelector('#'+dragonName).classList.add('onespecialguy')
              singleSpecialGuys.push(dragonName)
          }
      }
      if (allDragonData[dragonName].conditions.includes('Night')) {
        cardEl.classList.add('breednight')
      } else if (allDragonData[dragonName].conditions.includes('Day')) {
        cardEl.classList.add('breedday')
      }
      if (allDragonData[dragonName].conditions.includes('Blossoms')) {
        cardEl.classList.add('weatherblossoms')
      } else if (allDragonData[dragonName].conditions.includes('Fireflies')) {
        cardEl.classList.add('weatherfireflies')
      }
      if (allDragonData[dragonName].conditions.includes('Evolve')) {
        cardEl.classList.add('filterevolve')
      }
      
      if (!allDragonData[dragonName].limited) {
        cardEl.classList.add('perm');
        //cardEl.classList.add('filterperm');
      }
      if (dragonarium[dragonName].status == 'have') {
        cardEl.classList.add('owned');
        cardEl.classList.add('filterowned');
      }
      if (Number(dragonarium[dragonName].rifted) == 1) {
        cardEl.classList.add('riftowned');
      }
      if (dragonarium[dragonName].status == 'shadow') {
        cardEl.classList.add('shadow');
        cardEl.classList.add('filtershadow');
      }
      //slotElIntoTargetArray(cardEl, targetCardDiv)

      if (targetCardDiv.childElementCount == 0) {
        
                targetCardDiv.appendChild(cardEl);
      }

      if (dragonarium[dragonName].fav == "1" || dragonarium[dragonName].fav == 1) {
                //what
            if (!lastFavCard) {
                targetCardDiv.firstElementChild.before(cardEl)
            } else {
                lastFavCard.after(cardEl);
            }
            lastFavCard = cardEl;
      } else {
              if (dragonarium[dragonName].status == "want") {
                if (!lastWantCard) {
                        if (!lastFavCard) {
                                lastWantCard = cardEl;
                                targetCardDiv.firstElementChild.before(cardEl)
        
                        } else {
                                lastFavCard.after(cardEl);
                        }
                } else {
                        lastWantCard.after(cardEl);
                }
                lastWantCard = cardEl;
              }
              else if (dragonarium[dragonName].status == "init") {
                if (!lastInitCard) {
                        if (!lastWantCard) {
                                if (!lastFavCard) {
                                        lastInitCard = cardEl;
                                        targetCardDiv.firstElementChild.before(cardEl)
                
                                } else {
                                        lastFavCard.after(cardEl);
                                }
                                
                        } else {
                                lastWantCard.after(cardEl);
                        }
                } else {
                        lastInitCard.after(cardEl);
                }
                lastInitCard = cardEl;
              } else {
                  targetCardDiv.appendChild(cardEl)
              }
      }

              
       if (dragonarium[dragonName].fav) {
        cardEl.classList.add('favourite');
       }
               /*
        if (targetCardDiv.children.length == 0) {
          targetCardDiv.appendChild(cardEl);
        } else {
          if (!lastFavCard) {
                  let checkCard = targetCardDiv.firstElementChild
                  while (checkCard.classList.contains('favourite')) {
                        checkCard = checkCard.nextElementSibling
                  }
                  if (checkCard) {
                        lastFavCard = checkCard
                  } else {
                        lastFavCard = targetCardDiv.lastElementChild
                  }
          }
          lastFavCard.after(cardEl);
        }
        lastFavCard = cardEl;
      } else {
        if (dragonarium[dragonName].status == "want") {
          if (targetCardDiv.children.length == 0) {
            targetCardDiv.appendChild(cardEl);
          } else {
                if (!lastWantCard) {
                  let checkCard = targetCardDiv.firstElementChild
                  while (checkCard.classList.contains('favourite')) {
                        checkCard = checkCard.nextElementSibling
                  }
                        console.log(checkCard)
                  if (checkCard) {
                          lastWantCard = checkCard
                          while (checkCard.dataset.status = 'want') {
                                checkCard = checkCard.nextElementSibling
                          }
                          if (checkCard) {
                                lastWantCard = checkCard
                          } else {
                                lastWantCard = targetCardDiv.lastElementChild
                          }
                  } 
                }
             lastWantCard.after(cardEl);
             lastWantCard = targetCardDiv.lastElementChild
          }
        } else {
                targetCardDiv.appendChild(cardEl);
        }
        
      }*/
    }
  }
  updatePossibleTargets()
}

/*
//@DEPRECATE
function slotElIntoTargetArray(cardEl, targetCardDiv) {
  if (targetCardDiv.children.length == 0) {
        targetCardDiv.appendChild(cardEl);
        return;
  }
  //let lastFavCard;
  //let lastWantCard;
  //let toSection = 'init'
  let sectionOrder = ['want', 'have', 'init', 'shadow']
  let letterIsBefore = true;
  let dragonName = cardEl.dataset.dragonName
  let checkCard = targetCardDiv.firstElementChild
  
  if (Number(dragonarium[dragonName].fav) != 1) {
    cardEl.classList.remove('favourite');
    while (checkCard.classList.contains('favourite')) {
            checkCard = checkCard.nextElementSibling
    }
          console.log(checkCard, targetCardDiv.children)
    if (!checkCard) {
        targetCardDiv.appendChild(cardEl);
        return;
    }
  } else {
        cardEl.classList.add('favourite');
  }
  for (const sectionsName of sectionOrder) {
          //console.log(sectionsName, cardEl.dataset.status, cardEl)
          let foundSection = false
          while (checkCard != null && letterIsBefore == true) {
                if (sectionsName == checkCard.dataset.status) {
                        foundSection = true
                        console.log(checkCard, ' is now about to start the section of ', sectionsName, checkCard.dataset.status)
                        let checkLetter = checkCard.dataset.dragonName
                        let sorted = [checkLetter, dragonName].sort()
                        console.log(sorted, dragonName)
                        if (sorted[0] == dragonName) {
                                checkCard.before(cardEl)
                                console.log(dragonName, ' goes before ', checkLetter)
                                letterIsBefore = false
                                
                        } else {
                                checkCard = checkCard.nextElementSibling
                        }
                } else {
                        if (foundSection) {
                                checkCard.after(cardEl)
                                letterIsBefore = false
                        }
                        checkCard = checkCard.nextElementSibling
                        
                }
          }
          if (!checkCard) {
                targetCardDiv.appendChild(cardEl);
                  console.log('idk we hit the end of the list bro')
                return;
          }
  }
  /*if (checkCard) {
        checkCard.before(cardEl)
  } else {*/
        //targetCardDiv.lastElementChild.after(cardEl);
  //}
  //return;
      /*  
        //lastFavCard = cardEl;
      } else {
        if (dragonarium[dragonName].status == sectionName) {
          if (targetCardDiv.children.length == 0) {
            targetCardDiv.appendChild(cardEl);
          } else {
                if (!lastWantCard) {
                  let checkCard = targetCardDiv.firstElementChild
                  while (checkCard.classList.contains('favourite')) {
                        checkCard = checkCard.nextElementSibling
                  }
                  if (checkCard) {
                          while (checkCard.dataset.status == 'want') {
                                  
                                checkCard = checkCard.nextElementSibling
                          }
                          if (checkCard) {
                                lastWantCard = checkCard
                          } else {
                                lastWantCard = targetCardDiv.lastElementChild
                          }
                  } 
                }
             lastWantCard.after(cardEl);
             lastWantCard = targetCardDiv.lastElementChild
          }
        } else {
                targetCardDiv.appendChild(cardEl);
        }
}*/

function updatePossibleTargets() {
  let possibleTargets = document.querySelector('#targetcards').children;
  //let safety = 30
  for (const child of possibleTargets) {
    
    child.classList.remove('impossible')
    let impossible = false;
    let dragonName = child.dataset.dragonName;
    child.dataset.status = dragonarium[dragonName].status
          //console.log(dragonName, allDragonData[dragonName])
    if (dragonarium[dragonName].status == 'have') {
        child.classList.remove('shadow')
        child.classList.remove('want')
        child.classList.add('owned')
    }
    let dragonReqs = allDragonData[dragonName].combo.requirements;
          if (dragonReqs) {
            for (const req of dragonReqs) {
                    if (!playerHasElements.normal.includes(req) && elementChart.basics.includes(req)) {
                        child.classList.add('impossible')
                        impossible = true
                    }
                    if (req != "R Rift" && elementChart.basics.includes(req) && !playerHasElements.rift.includes(req)) {
                        child.classList.add('noriftallowed')
                    }
                    //if (safety > 0) {
                    //        console.log(`is ${req} an element or a dragon?`)
                    //        safety -= 1;
                    //}
              if (allDragonNames.includes(req)) {
                if (dragonarium[req].status != 'have') {
                  child.classList.add('impossible')
                  impossible = true
                }
                if (dragonarium[req].rifted == "0" || dragonarium[req].rifted == 0 ) {
                        child.classList.add('noriftallowed')
                }
              }
            }
          } else {
                //console.log('cant find reqs for ', dragonName);
          }
    if (impossible) {
      document.getElementById(dragonName).classList.add('impossible')
    }
          
  }
}

function showTargetsWith(el, keyword) {  
   let cards 
   if (el.closest('.tab').id == "multiparents") {
        cards = document.querySelector('#targetcards').querySelectorAll(`.${keyword}`)
   } else {
        cards = el.closest('.tab').querySelectorAll(`.${keyword}`)
   }
        
   if (el.dataset.toggle == 1) {
           el.dataset.toggle = 0
           el.classList.remove('toggled');
           for (const card of Array.from(cards)) {
                card.classList.add(`filter${keyword}`)
           }
   } else {
           el.dataset.toggle = 1
           el.classList.add('toggled');
           for (const card of Array.from(cards)) {
                card.classList.remove(`filter${keyword}`)
           }
   }
        console.log('showing/hiding! ', keyword, el.dataset.toggle)
}
/*
function hideOwned(el) {
   let cards = document.querySelector('#targetcards').querySelectorAll('.owned')
   if (el.dataset.toggle == 0) {
           el.dataset.toggle == 1
           el.classList.add('toggled');
           for (const card of Array.from(cards)) {
                card.classList.add('filterowned')
           }
   } else {
           el.dataset.toggle == 0
           el.classList.remove('toggled');
           for (const card of Array.from(cards)) {
                card.classList.remove('filterowned')
           }
   }
}
*/

function setBreedingCave(buttonEl) {
        let caveId = buttonEl.dataset.caveid
        for (const radioo of buttonEl.parentElement.children) {
                radioo.classList.remove('caveselected')
        }
        buttonEl.classList.add('caveselected')
        
        
        let targetCardDiv = document.querySelector('.targetdragons')
        if (caveId == "rift") {
                document.getElementById('currentcavetitle').textContent = "Rift Breeding Cave"
                for (const norifttargetcard of Array.from(targetCardDiv.querySelectorAll('.noriftallowed'))) {
                        norifttargetcard.classList.add('filternorift')
                }
                for (const riftexclusive of Array.from(targetCardDiv.querySelectorAll('.Rift'))) {
                        riftexclusive.classList.remove('riftexclusion')
                }
                if (Number(savedSettings.multiparents.hideOwned) == 1) {
                        for (const ownedcard of Array.from(targetCardDiv.querySelectorAll('.filterowned'))) {
                                ownedcard.classList.remove('filterowned')
                                if (Number(dragonarium[ownedcard.dataset.dragonName].rifted) == 1) {
                                        ownedcard.classList.add('filterriftowned')
                                }
                        }
                }
        } else {
                document.getElementById('currentcavetitle').textContent = "Regular Breeding Cave/Island"
                for (const norifttargetcard of Array.from(targetCardDiv.querySelectorAll('.filternorift'))) {
                        norifttargetcard.classList.remove('filternorift')
                }
                for (const riftexclusive of Array.from(targetCardDiv.querySelectorAll('.Rift'))) {
                        riftexclusive.classList.add('riftexclusion')
                }
                if (Number(savedSettings.multiparents.hideOwned) == 1) {
                        for (const ownedcard of Array.from(targetCardDiv.querySelectorAll('.owned'))) {
                                ownedcard.classList.remove('filterriftowned')
                                ownedcard.classList.add('filterowned')
                        }
                }
        }
}

function updateTargetCard(dragonName, statusId, statusNum) {
  let targetCardDiv = document.querySelector('.targetdragons')
  let targetCard = targetCardDiv.querySelector(`.${dragonName}`)
  if (!targetCard) {
        //console.log(`cant find ${dragonName} in `, targetCardDiv)
          return
  }

  if (statusId == "fav") {
        targetCard.dataset.fav = statusNum;
        if (statusNum) {
              targetCard.classList.add('favourite')
              targetCard.parentElement.firstElementChild.before(targetCard);
        } else {
      targetCard.classList.remove('favourite')
      let next = el.nextElementSibling;
      if (next.classList.contains('favourite')) {
        while (next.classList.contains('favourite')) {
          next = next.nextElementSibling;
        }
        if (!next) {
          el.parentElement.appendChild(el);
        } else {
          next.before(el);
        }
      }
    }
  }
  else {
        if (statusId == 'want') {
            targetCard.classList.add('want')
            //if (Number(targetCardDiv.querySelector('.showShadowButton').dataset.toggle) == 1) {
            //     targetCard.classList.add('filterwant')
            //}
            targetCard.classList.remove('owned')
            targetCard.classList.remove('filterowned')
            targetCard.classList.remove('shadow')
            targetCard.classList.remove('filtershadow')
          } else {
            targetCard.classList.remove('want')
            targetCard.classList.remove('filterwant')
          }
          if (dragonarium[dragonName].status == 'have') {
            targetCard.classList.add('owned')
            if (Number(targetCardDiv.querySelector('.showOwnedButton ').dataset.toggle) == 1) {
                 targetCard.classList.add('filterowned')
            }
            targetCard.classList.remove('want')
            targetCard.classList.remove('filterwant')
            targetCard.classList.remove('shadow')
            targetCard.classList.remove('filtershadow')
          } else {
            targetCard.classList.remove('owned')
            targetCard.classList.remove('filterowned')
          }
          
          if (dragonarium[dragonName].status == 'shadow') {
            targetCard.classList.add('shadow')
            if (Number(targetCardDiv.querySelector('.showShadowButton').dataset.toggle) == 1) {
                 targetCard.classList.add('filtershadow')
            }
            targetCard.classList.remove('owned')
            targetCard.classList.remove('filterowned')
            targetCard.classList.remove('want')
            targetCard.classList.remove('filterwant')
          } else {
            targetCard.classList.remove('shadow')
            targetCard.classList.remove('filtershadow')
          }
    }
}

function targetSelect(element) {
  let swapDiv;
  if (element.closest('.targets-selected')) {
          let dragonName = element.dataset.dragonName;
          //console.log(dragonName)
          let baseTarget = element.closest('.targets-selected').previousElementSibling.querySelector('.' + dragonName.replaceAll(' ', '')).classList.remove('selected');
          element.remove()
    //swapDiv = element.closest('.targets-selected').previousElementSibling;
  } else {
          swapDiv = element.closest('.targetcards').nextElementSibling;
          let copyEl = element.cloneNode(true)
          if (element.classList.contains('favourite')) {
            if (swapDiv.children.length > 0) {
              swapDiv.firstElementChild.before(copyEl);
            } else {
              swapDiv.appendChild(copyEl);
            }
          } else {
            swapDiv.appendChild(copyEl);
          }
          element.classList.add('selected');
  }
  //updateTargetSearch()
}


function getPairingWeights() {
        let settingsbox = document.querySelector('.additionalsettings')
        let settingsWeights = {
                minTargets: Number(settingsbox.querySelector('#mintargets').value),
                pairpertarget: Number(settingsbox.querySelector('#pairpertarget').value),
                weighting : {
                        targetQuantity: Number(settingsbox.querySelector('#weight-targetquantity').value),
                        //averageTime: settingsbox.querySelector('#weight-averagetime').value,
                        targetOdds: Number(settingsbox.querySelector('#weight-targetodds').value),
                        newGuy: Number(settingsbox.querySelector('#weight-newguy').value),
                        //includeShadow: settingsbox.querySelector('#includeShadow').checked
                }
        }
        return settingsWeights
}
function applyWeighting(settingsWeights, pairObj, targets) {
        //how do I even out these numbers?
        let maxWeighting = settingsWeights.weighting.targetQuantity + settingsWeights.weighting.targetOdds + settingsWeights.weighting.newGuy
        let targetQuantity = (pairObj.targetsMet.length / targets.length) * settingsWeights.weighting.targetQuantity //percentage of targets met!
        let targetOdds = ((pairObj.oddsOfCool*100) / 10) * settingsWeights.weighting.targetOdds //percentage of odds of cool. I feel like 15 is a very Good number? can be "100"? or 12?
        let newGuyOdds = ((pairObj.newOdds*100) / 80) * settingsWeights.weighting.newGuy //lets say... 80% is 100?

        let finalWeighting = (targetQuantity + targetOdds + newGuyOdds) / maxWeighting

        pairObj.weightedValue = finalWeighting
        
        //okay
        
        return pairObj
        
}
/*
        <div class="additionalsettings" style="display:none;">
            <label>Minimum Targets:<input type="number" id="mintargets" value=2 ></label>
            <label>Show at least <input type="number" id="pairpertarget" value=1 > valid pairs per Target</label>
            Sorting Weight for pair qualities:
            <label>Targets/pair <input type="number" id="weight-targetquantity" value=2 ></label>
            <label>Lower Average Breed Time <input type="number" id="weight-averagetime" value=1 ></label>
            <label>Odds for getting any target <input type="number" id="weight-targetodds" value=5 ></label>
            <label>Odds for getting a dragon you don't have (target or not) <input type="number" id="weight-newguy" value=3 ></label>
            <label>Include shadow realm dragons <input type="checkbox" id="includeShadow" checked></label>
          </div>
          */

function highestNewOdds(caveId = "reg") {
        
          let haveDragonNodes = haveDiv.children;
          let haveDragonsToCheck = []
          let riftDragonsToCheck = []

          let allPairs = []
          let riftPairs = []
          
          for (const child of haveDragonNodes) {
                  if (child.classList.contains('dragonCard')) {
                  //console.log(child)
                          if (allDragonData[child.id].rarity != "Gemstone") {
                                  if (caveId == "rift") {
                                        if (Number(dragonarium[child.id].rifted) == 1) {
                                            riftDragonsToCheck.push(child.id);
                                        }
                                  } else {
                                        haveDragonsToCheck.push(child.id);
                                  }
                          }
                  }
          }
          let bDragons = [].concat(haveDragonsToCheck)
          for (const a of haveDragonsToCheck) {
                let bcheck = 0
                for (const b of bDragons) {
                        bcheck += 1
                        let pairingOutput = allDragonData[a].elements.concat(allDragonData[b].elements)
                        pairingOutput.push(a)
                        pairingOutput.push(b)
                        let pairingOutputCleaned = []
                        let sorted = [a, b].sort()
                        for (const el of pairingOutput) {
                          if (!pairingOutputCleaned.includes(el)) {
                                pairingOutputCleaned.push(el)
                          }
                        }
                        let objPair = {
                                parentLeft: sorted[0], 
                                parentRight : sorted[1],
                                elOutput : pairingOutputCleaned
                        }
                        let results = getOutputsAndOdds(sorted, pairingOutputCleaned, objPair, "reg")
                        if (Number(dragonarium[a].rifted) == 1) {
                                riftPairs.push(results)
                        }
                        allPairs.push(results)
                        /*if (Number(results.newOdds) > Number(bestOdds.odds)) {
                                bestOdds.odds = Number(results.newOdds);
                                bestOdds.pairObjs = [results]
                        } else if (Number(results.newOdds) > Number(bestOdds.odds)) {
                                bestOdds.pairObjs.push(results)
                        }*/
                }
                bDragons.splice(bDragons.indexOf(a), 1)
          }
          let safety = 50
          allPairs.sort(sortingNewOdds)
          riftPairs.sort(sortingNewOdds)
          let topRegPairs = [allPairs[0], allPairs[1],allPairs[2],allPairs[3],allPairs[4]]
          let topRiftPairs = [riftPairs[0], riftPairs[1],riftPairs[2],riftPairs[3],riftPairs[4]]
          let iterate = 1
          /*while (allPairs[iterate].newOdds == topRegPairs[0].newOdds && safety > 0) {
                topRegPairs.push(allPairs[iterate])
                iterate += 1
                safety -= 1
          }
          
          iterate = 1
          while (riftPairs[iterate].newOdds == topRiftPairs[0].newOdds && safety > 0) {
                topRiftPairs.push(allPairs[iterate])
                iterate += 1
                safety -= 1
          }*/
        console.log(topRegPairs, topRiftPairs)
}



function updateTargetSearch() {
  let caveId = "reg"
  if (document.querySelector('#tabbutton-mpf').classList.contains("open")) {
          caveId = document.getElementById('multiparents').querySelector('.caveselected').dataset.caveid
          if (!caveId) {
                caveId = "reg"
          }
  }
  let targetCardDiv = document.querySelector('.targets-selected');
  let possiblepairdiv = document.querySelector('.pairsholder')
  let settingsWeights = getPairingWeights()
  if (settingsWeights.pairpertarget < 1) {
     settingsWeights.pairpertarget = 1
  }

  let bestTargetOdds = {}
  let bestNewOdds = {}
  //while (possiblepairdiv.firstElementChild) {
  //  possiblepairdiv.firstElementChild.remove()
  //}
  let tempTextEl = document.getElementById('temptextel')
  /*if (targetCardDiv.childElementCount < 2) {
        tempTextEl.textContent = "Select more than one dragon!"
  }*/
  tempTextEl.textContent = ""
  //possiblepairdiv.appendChild(tempTextEl)
  let pairsNeededForTargets = {}
  //let pairCountTotal = 0
  let targets = []
  //let bestPairForTarget = {}

  let validPairObj = {}
  let validPairs = []
  //let pairsForEachTarget = {}
  //let guysWithNoSpecialGuys = []
  let guysWithTwoSpecialGuys = []
  let specialPairs = []
  //let allRequirements = []
  
  for (const target of Array.from(targetCardDiv.children)) {
    let dragonName = target.dataset.dragonName
    targets.push(dragonName);
    bestTargetOdds[dragonName] = {pairObj: undefined, odds: 0}
    //bestPairForTarget[dragonName] = {pair: 'none', odds: ''}
    pairsNeededForTargets[dragonName] = Number(settingsWeights.pairpertarget)
    //pairCountTotal += Number(settingsWeights.pairpertarget) + 5
    if (target.classList.contains('twospecialguys')) {
                guysWithTwoSpecialGuys.push(dragonName)
                pairsNeededForTargets[dragonName] = 1
    }
    //guysWithNoSpecialGuys.push(dragonName)
    //let dragonRequires = allDragonData[dragonName].combo.requirements
    //for (const needed of dragonRequires) {
    //  if (!allRequirements.includes(needed)) {
    //    allRequirements.push(needed);
    //  }
    //}
  }
  //console.log(targets, ' require ', allRequirements)
  //now we haveall our required stuff, and all our targets. lets start with uh
  let haveDragonNodes = haveDiv.children;
  let haveDragonsToCheck = []
  if (document.getElementById('includeallpairs').checked) {
        for (const dn of allDragonNames) {
                if (allDragonData[dn].rarity != "Gemstone") {
                    haveDragonsToCheck.push(dn);
                }
          }
  } else {
          for (const child of haveDragonNodes) {
                  if (child.classList.contains('dragonCard')) {
                  //console.log(child)
                          if (allDragonData[child.id].rarity != "Gemstone") {
                                  if (caveId == "rift") {
                                        if (Number(dragonarium[child.id].rifted) == 1) {
                                            haveDragonsToCheck.push(child.id);
                                        }
                                  } else {
                                        haveDragonsToCheck.push(child.id);
                                        
                                  }
                          }
                  }
          }
          console.log(caveId, ' cave: ', haveDragonsToCheck.length)
  }
  
  
  //console.log('checking dragons we have: ', haveDragonsToCheck);
  
  /*      
  for (const target of Array.from(targetCardDiv.children)) {
        let dragonName = target.dataset.dragonName
          if (target.classList.contains('twospecialguys')) {
                guysWithTwoSpecialGuys.push(dragonName)
          }
        /*let checkPairs = possiblePairsa(target, validPairObj)
          if (checkPairs != "NoSpecial") {
                  for (const pairname of Object.keys(checkPairs)) {
                          if (validPairObj[pairname]) {
                                validPairObj[pairname].targetsMet = validPairObj[pairname].targetsMet.push(target)
                          } else {
                                validPairObj[pairname] = checkPairs[pairname]  
                          }
                  }
                  //Object.assign(validPairObj, checkPairs)
                //pairsForEachTarget[target] = checkPairs
          } else {
           guysWithNoSpecialGuys.push(dragonName)
          //}
          
  }*/

  //for (const

  /*for (const targetName of Object.getOwnPropertyNames(pairsForEachTarget)) {
        for (const pairName of Object.getOwnPropertyNames(pairsForEachTarget[targetName])) {
                let targetsMet = [targetName];
                if (validPairObj[pairName]) {
                        targetsMet = targetsMet.concat(validPairObj[pairName].targetsMet);
                }
                pairsForEachTarget[targetName][pairName].targetsMet = targetsMet
                //console.log(pairsForEachTarget[targetName][)
                validPairObj[pairName] = pairsForEachTarget[targetName][pairName]
        }   
  }*/

if (guysWithTwoSpecialGuys.length < targets.length) {
        console.log('we have regular targets!')
}
 

 let checked = 0
 let stopp = []
 //let aIdx = 0
 let bDragons = [].concat(haveDragonsToCheck)
  for (const a of haveDragonsToCheck) {
        //console.log('checking ', a, '; number ', haveDragonsToCheck.indexOf(a), 'of ', haveDragonsToCheck.length, ' (', bDragons.length, ' to check against)')
        //haveDragonsToCheck.splice(haveDragonsToCheck.indexOf(a), 1);
        let bcheck = 0
        for (const b of bDragons) {
                bcheck += 1
                checked += 1
                let pairingOutput = allDragonData[a].elements.concat(allDragonData[b].elements)
                pairingOutput.push(a)
                pairingOutput.push(b)
                let specialPair = false
                let sorted = [a, b].sort()
                for (const guy of targets) {
                        let validPair = checkTargetReq(guy, pairingOutput)
                        if (validPair) {
                                if (guysWithTwoSpecialGuys.includes(guy)) {
                                        specialPair = true;
                                        console.log('FOUND SPECIAL PAIR FOR ', guy)
                                        
                                }
                              //console.log(specialGuys[0], 'and ', otherParentName, ' is a valid pair for ', dragonName)
                              
                              if (validPairObj[`${sorted[0]}//${sorted[1]}`]) {
                                      validPairObj[`${sorted[0]}//${sorted[1]}`].targetsMet.push(guy)
                              } else {
                                      let pairingOutputCleaned = []
                                      for (const el of pairingOutput) {
                                        if (!pairingOutputCleaned.includes(el)) {
                                                pairingOutputCleaned.push(el)
                                        }
                                      }
                                        let objPair = {
                                                parentLeft: sorted[0], 
                                                parentRight : sorted[1], 
                                                targetsMet : [guy],
                                                elOutput : pairingOutputCleaned
                                        }
                                        let results = getOutputsAndOdds(sorted, pairingOutputCleaned, objPair, caveId)
                                        //console.log(`${sorted[0]}//${sorted[1]}: `, results)
                                        validPairObj[`${sorted[0]}//${sorted[1]}`] = results
                                                //multiplierOdds: results.multiplierOdds,
                                                //hybridOdds: results.hybridOdds,
                                                //breeds : results.breeds,
                                                //hybrids : results.hybrids,
                                                
                                        
                              }
                              //validPairs[`${sorted[0]}//${sorted[1]}`] = pairObj
                        }
                }
                if (specialPair) {
                        specialPairs.push(`${sorted[0]}//${sorted[1]}`)
                        validPairObj[`${sorted[0]}//${sorted[1]}`].specialPair = true
                        //console.log('marked as special pair!')
                }
        }
        
        bDragons.splice(bDragons.indexOf(a), 1)
        //console.log('checked ', bcheck, ' dragons against ', a, '; moving to next guy!')
  }
  console.log('checked ', checked, ' pairs phew!', bDragons.length, haveDragonsToCheck.length)
        
  for (const pairName of Object.getOwnPropertyNames(validPairObj)) {
        let pair = validPairObj[pairName]
        if (pair.targetsMet.length > Number(settingsWeights.minTargets) - 1 || pair.specialPair == true) {
                //console.log(pairName, ' meets ', pair.targetsMet)
                //if (validPairs.length == 0) {
                        validPairs.push(pair)
                        //console.log('pushed!')
                //} else {
                        //console.log('tosort,,,')
                //        validPairs = sortPairIntoArray(pair, validPairs);
                //}
        }
  }
  //console.log('done sorting? ', validPairs)

  if (validPairs.length > 0) {
          console.log(validPairs.length, ' valid pairs found - time to score')
          let scoredPairs = []
          for (const pair of validPairs) {
                  let pairObj = pair
                  if (!pairObj.multiplierOdds) {
                        let sorted = [pairObj.parentLeft, pairObj.parentRight].sort()
                        pairObj = getOutputsAndOdds(sorted, pairObj.elOutput, pairObj, caveId)
                  }
                /*let outputEls = []
                for (const el of allDragonData[pair.parentLeft].elements) {
                        if (!outputEls.includes(el)) {
                                outputEls.push(el)
                        }
                }
                pair.outputEls = outputEls
                pair.score = ((outputEls.length * 2) + pair.targetsMet.length) / 3*/
                let oddsOfCool = 0;
                for (const metTarget of pairObj.targetsMet) {
                        let targetData = allDragonData[metTarget]
                        
                        if (targetData.rarity != "Hybrid") {
                                oddsOfCool += Number(targetData.odds.base) * Number(pairObj.multiplierOdds)
                                if (bestTargetOdds[metTarget].odds < (Number(targetData.odds.base) * Number(pairObj.multiplierOdds))) {
                                        bestTargetOdds[metTarget] = {odds: Number(targetData.odds.base) * Number(pairObj.multiplierOdds), pairObj: pairObj, soloNum: true}
                                } else if (bestTargetOdds[metTarget].odds == (Number(targetData.odds.base) * Number(pairObj.multiplierOdds))) {
                                        bestTargetOdds[metTarget].soloNum = false;
                                }
                        } else {
                                oddsOfCool += Number(pairObj.hybridOdds)
                        }
                        
                }
                pairObj.oddsOfCool = oddsOfCool
                scoredPairs.push(pairObj)
                //pairObj = applyWeighting(settingsWeights, pairObj, targets)
                //console.log(pairObj)
                
                //scoredPairs = sortPairIntoArray(pairObj, scoredPairs, "newOdds")
                
                
                //scoredPairs = sortPairIntoArray(pairObj, scoredPairs, "oddsOfCool")
                
          }
          scoredPairs = scoredPairs.sort(sortingPairObj)
          //console.log('after sorting: ', sortedcheck)
          validPairs = scoredPairs
  } //else {console.log('no valid pairs? tf?')}


  

 
        
  

   if (validPairs.length > 0) {
        let innerHtmlStuff = ''
        let top4 = 4
        for (const targett of Object.keys(bestTargetOdds)){
                
                if (bestTargetOdds[targett].soloNum) {
                        if (validPairs.includes(bestTargetOdds[targett].pairObj)) {
                                console.log('found pair, altering!')
                                bestTargetOdds[targett].pairObj.bestOddsFor = targett;
                                validPairs.splice(validPairs.indexOf(bestTargetOdds[targett].pairObj), 1, bestTargetOdds[targett].pairObj)
                                //validPairs.splice(validPairs.indexOf(pair), 1)
                        } else {
                                console.log('couldnt find ',targett,  bestTargetOdds[targett])
                        }
                }
        }
        //console.log(pairCountTotal, ' total pairs I want, from ', validPairs.length, pairsNeededForTargets)
        //console.log(pairsNeededForTargets, validPairs.length)
        for (const pair of validPairs) {
                
                let neededPair = 0
                if (!pair.specialPair) {
                        if (pair.bestOddsFor) {
                                neededPair = 5
                        } else {
                                for (const targ of pair.targetsMet) {
                                        //console.log(
                                        if (pairsNeededForTargets[targ] > 0) {
                                                neededPair += 1;
                                                pairsNeededForTargets[targ] =  pairsNeededForTargets[targ] - 1
                                        }
                                }
                        }
                } else {
                        neededPair = 5
                }
                if (neededPair > 0 || top4 > 0) {
                        top4 -= 1
                        let htmlStuff = pairTemplate(pair)
                        innerHtmlStuff += htmlStuff
                        //pairCountTotal -= 1;
                        //console.log(`added ${pair.parentLeft}/${pair.parentRight}; ${pairCountTotal} pairs to go!`, pairsNeededForTargets)
                } else {
                        //console.log(`skipping ${pair.parentLeft}/${pair.parentRight} because no targets met needed more pairs. Remaining: `, pairsNeededForTargets)
                }
                
                //if (pairCountTotal < 10) {
                //        console.log("count is now 10? breaking - ", pairsNeededForTargets)
                        //break;
                //}
                
        }
           //console.log(pairsNeededForTargets, innerHtmlStuff)
        document.querySelector('.pairsholder').innerHTML = innerHtmlStuff
           console.log('html added!', pairsNeededForTargets)
        //tempTextEl.textContent = "AAA?"//.remove();
  } else {
        tempTextEl.textContent = "No pairs found that meet requirements :(!"
  }
        
   /*     
  for (i=0;i<haveDragonsToCheck.length;i++) {
    let dragonName = haveDragonsToCheck.pop()
    let parentLeft = allDragonData[dragonName]
    
    if (parentLeft.combo.output) {
      for (const otherParentName of haveDragonsToCheck) {
        let pairingElementOutput = getPairingOutput(dragonName, otherParentName)*/


                
        /*let otherOutput = [].concat(allDragonData[otherParentName].combo.output);
        let pairingElementOutput = [].concat(parentLeft.combo.output)
        if (otherOutput) {
          for (const outputEl of otherOutput) {
            if (!pairingElementOutput.includes(outputEl)) {
              pairingElementOutput.push(outputEl)
            }
          }*/
          //console.log('pairing output for ', dragonName,  otherParentName, pairingElementOutput)
          
              
              /*let targetsMet = checkEachTarget(targets, pairingElementOutput);
          if (targetsMet.length > 1) {
            let pairObj = {
              parentLeft: parentLeft.name,
              parentRight : otherParentName,
              targetsMet: targetsMet
            }
            if (validPairs.length > 0) {
              validPairs = sortPairIntoArray(pairObj, validPairs)
            } else {
              validPairs.push(pairObj)
            }
          }
        }
      }
    }*/
  //console.log(validPairObj);
  //console.log(validPairs);
  
  /*for (const pairObj of validPairs) {
    let newPairEl = document.createElement('div');
    let html = pairTemplate(pairObj);
    newPairEl.outerHTML = html;
    possiblepairdiv.appendChild(newPairEl);
  }*/
  //yay we checked ALL the possible pairs! Hopefully that doesn't completely eat the computer to do mSJHDgfsd
  //now we need to build and add the pairs into the template thingy.

  document.getElementById('mpfloading').classList.add('hidden')
  
}

function sortingPairObj(a, b) {
        if (b.oddsOfCool - a.oddsOfCool != 0) {
             return b.oddsOfCool - a.oddsOfCool
        } else {
                if (b.newOdds - a.newOdds != 0) {
                        return b.newOdds - a.newOdds
                }
                return b.targetsMet.length - a.targetsMet.length
        }
        
}

function sortingNewOdds(a, b) {
        if  (b.newOdds - a.newOdds != 0) {
                return b.newOdds - a.newOdds
        }
}

/*//@DEPRECATE
function sortPairIntoArray(pairObj, array, property) {
  let propIsArray = false
  if (property.includes('Array')) {
        property = property.split('Array')[0]
        propIsArray = true
  }
  //console.log('sorting ', pairObj, ' into ' , validPairs)
  for (i=0;i<array.length;i++) {
          let pairing = array[i]
          if (propIsArray) {
              if (pairObj[property].length > pairing[property].length) {
                      array.splice(array.indexOf(pairing), 0, pairObj)
                      return array;
              }
          } else {
            if (pairObj[property] > pairing[property]) {
              array.splice(array.indexOf(pairing), 0, pairObj)
              return array;
            }
          }
  }
  array.push(pairObj)
  //sortedcheck[property].push({cool: pairObj.oddsOfCool, new: pairObj.newOdds})
  return array;
}
*/

function getOutputsAndOdds(pairArray, pairingOutput, pairObj, caveLocation = "reg") {
        //console.log('is this firing?', pairObj)
        let parentClone = "singleclone"
        
        if (pairArray[0] == pairArray[1]) {
                parentClone = "doubleclone"
        }
        let a = allDragonData[pairArray[0]]
        let b = allDragonData[pairArray[1]]
        let resultNames = []
        let hybrids = []
        let breeds = []
        let newGuys = {}
        let newOdds = 0
        let breedsOdds = 0
        let clonePercentage = 0
        let riftassumed = true

        let breedMinutes = 0
        //let breedcountforAverage = 0
        
        if (pairArray[0] != "justOutputs") {
                
                if (a.odds[parentClone]) {
                        if (a.odds[parentClone][caveLocation]) {
                                let getClone = Number(a.odds[parentClone][caveLocation])
                                if (getClone != NaN) {
                                        clonePercentage += getClone
                                }
                                if (!a.incubation) {a.incubation = {reg: 0, fast: 0}}
                                breedMinutes += (Number(a.incubation.reg) * getClone)
                                /*if (a.rarity == "Hybrid") {
                                        hybrids.push(a.name)
                                } else {
                                        breeds.push(a.name)
                                }*/
                                
                        }
                }
                if (b.odds[parentClone]) {
                        if (b.odds[parentClone][caveLocation]) {
                                let getClone = Number(b.odds[parentClone][caveLocation])
                                if (getClone != NaN) {
                                        clonePercentage += getClone
                                }
                                if (!b.incubation) {b.incubation = {reg: 0, fast: 0}}
                                breedMinutes += (Number(b.incubation.reg) * getClone)
                                /*if (b.rarity == "Hybrid") {
                                        hybrids.push(b.name)
                                } else {
                                        breeds.push(b.name)
                                }*/
                        }
                }
                riftassumed = false
        } //else {
                
        //}
        let newHybrids = []
        for (const dragonName of availableDragonNames) {
                let dragonData = allDragonData[dragonName]
                if (caveLocation == "rift" && elementChart.subbedprims.includes(dragonName)) {
                        continue;
                        console.log('THIS SHOULD NEVER FIRE!')
                } else if (caveLocation != "rift" && dragonData.elements.includes('R Rift') && riftassumed == false) {
                        continue;
                        console.log('THIS SHOULD NOT FIRE!')
                }
                
                
                let thisGuyOdds = 0
                if (!dragonData.conditions.includes("Evolve")) {
                        if (checkTargetReq(dragonName, pairingOutput, riftassumed)) {
                                //if (dragonarium[dragonName].status != 'have') {
                                //        newGuys.push(dragonName)
                                //}
                                
                                if (dragonData.rarity == "Hybrid") {
                                        //if (dragonName != a && dragonName != b) {
                                                hybrids.push(dragonData)
                                        //}
                                        if (dragonarium[dragonName].status != 'have') {
                                                newHybrids.push(dragonName)
                                        }
                                } else {
                                        //if (dragonName != a && dragonName != b) {
                                                breeds.push(dragonData)
                                        //}
                                        if (dragonData.odds.base) {
                                                if (Number(dragonData.odds.base) != NaN) {
                                                        
                                                        //console.log('breeds base is ', dragonData.odds.base, ' so breedsOdds is now ', breedsOdds)
                                                        if (dragonarium[dragonName].status != 'have') {
                                                                //if (dragonData.rarity == "Hybrid")
                                                                newGuys[dragonName] = Number(dragonData.odds.base)
                                                                breedsOdds += Number(dragonData.odds.base)
                                                        } else {
                                                           if (dragonData.odds.second) {
                                                                breedsOdds += Number(dragonData.odds.second)
                                                           } else {
                                                                breedsOdds += Number(dragonData.odds.base)
                                                           }
                                                        }
                                                }
                                        }
                                }
                        }
                }
        }
        let totalCurrent = Number(breedsOdds) //+ Number(clonePercentage)
        //console.log('current: ' , totalCurrent, ` (${Number(breedsOdds)} + ${Number(clonePercentage)}`)
        let leftForHybrids = 1 - Math.min((Number(totalCurrent) + Number(clonePercentage)), 0.99)
        let hybridOdds = Number(leftForHybrids) / hybrids.length
        if (hybridOdds == NaN) {
                hybridOdds = 0;
        }
        let totalblocked = Number(clonePercentage) + leftForHybrids
        let leftforBreeds = 1 - totalblocked
        let multiplierOdds = leftforBreeds / totalCurrent
        if (multiplierOdds == NaN) {
                console.log('NaN multiplier!', leftforBreeds, '/', totalCurrent,'/', multiplierOdds)
                multiplierOdds = 0;
        }
        //let 

        for (const newHybrid of newHybrids) {
                newGuys[newHybrid] = hybridOdds
                newOdds += hybridOdds
        }
        for (const guyy of Object.keys(newGuys)) {
                let guyOdds = newGuys[guyy] * multiplierOdds
                newGuys[guyy] = guyOdds
                newOdds += guyOdds
        }
        for (

        

        for (const hybridd of hybrids) {
                if (!hybridd.incubation) {hybridd.incubation = {reg: 0, fast: 0}}
                breedMinutes += Number(hybridd.incubation.reg) * hybridOdds
        }
        for (const breeddd of breeds) {
                if (!breeddd.incubation) {breeddd.incubation = {reg: 0, fast: 0}}
                breedMinutes += Number(breeddd.incubation.reg) * multiplierOdds
        }
        /*if (a.rarity == "Hybrid") {
                breedMinutes += a.incubation.reg * hybridOdds
        } else {
                breedMinutes += a.incubation.reg * multiplierOdds
        }
        if (b.rarity == "Hybrid") {
                breedMinutes += b.incubation.reg * hybridOdds
        } else {
                breedMinutes += b.incubation.reg * multiplierOdds
        }*/
        
        let breedAverage = breedMinutes / (hybrids.length + breeds.length + 2) //100
        //console.log(breedAverage)
        
        
        pairObj.hybridOdds = hybridOdds
        pairObj.multiplierOdds = multiplierOdds //(1 - Math.min((hybridOdds + Number(clonePercentage)), 0.99))/Number(totalCurrent)
        pairObj.breeds = breeds
        pairObj.hybrids = hybrids
        pairObj.newOdds = newOdds
        pairObj.newGuys = newGuys
        pairObj.breedAverage = breedAverage
        //console.log(newGuys)
        //console.log(pairObj)
        return pairObj;
        

}


/*@DEPRECATED
function checkEachTarget(targets, pairingElOutput) {
  let targetsMet = []
        
  for (const target of targets) {
    if (checkTargetReq(target, pairingElOutput)) {
      targetsMet.push(target)
            console.log('met ', targetsMet, '; need ', targets)
      if (targetsMet.length == targets.length) {
        return targetsMet;
      }
    }
  }
  return targetsMet;
}*/

function checkTargetReq(target, pairingElOutput, riftassumed = true) {
  let targetRequirements = [].concat(allDragonData[target].combo.requirements);
  let metReqs = [];
        console.log('checking ', target, targetRequirements, pairingElOutput)
  for (const req of targetRequirements) {
    if (pairingElOutput.includes(req)) {
      metReqs.push(req);
      
    } else if (riftassumed) {
            if (req == "R Rift") {
                    metReqs.push(req)
            }
            else if (req.includes('trait)')) {
                     metReqs.push(req)
            }
    }
    if (metReqs.length == targetRequirements.length) {
        return true;
    }
  }
        //console.log('checking ', target, metReqs, targetRequirements, pairingElOutput)
        
  if (metReqs.length != targetRequirements.length) {
    return false;
  }
}



function pairTemplate(pairObj) {
 // console.log(pairObj) //WHY NO ODDS AAAAA    
  let htmlTemplate = `<div class="pairing `
        if (pairObj.bestOddsFor) {
                htmlTemplate += ` bestodds"><h3>*Best Odds for ${pairObj.bestOddsFor}!</h3>`
        } else {
                htmlTemplate += `">`
        }
  htmlTemplate += `<div class="pairparents">`
        let averageHours = Math.floor(pairObj.breedAverage / 60)
        let averageMinutes = Math.round(pairObj.breedAverage - (averageHours*60))
  htmlTemplate += `<p class="averagetime">Average Breed Times: ${averageHours}h${averageMinutes}m</p>`
  htmlTemplate += parentTemplate(pairObj.parentLeft);
  htmlTemplate += `<p class="plus"> + </p>`
  htmlTemplate += parentTemplate(pairObj.parentRight);
  htmlTemplate += `</div> <div class="result-targetbox"> <h4> Possible Target Results:</h4> <div class="possibletargets"> `
  let newGuysMinusTargets = Object.keys(pairObj.newGuys)
  for (const validTarget of pairObj.targetsMet) {
    if (newGuysMinusTargets.includes(validTarget)) {
        newGuysMinusTargets.splice(newGuysMinusTargets.indexOf(validTarget), 1)
    }
    //console.log(validTarget, allDragonData[validTarget].odds, pairObj.multiplierOdds, pairObj)
    let formatOdds = 0
    let targetData = allDragonData[validTarget]
    if (targetData.rarity == "Hybrid") {
        formatOdds = Number(pairObj.hybridOdds)
    } else if (targetData.odds.base) {
        formatOdds = Number(targetData.odds.base) * Number(pairObj.multiplierOdds)
    }
    
    formatOdds = Math.round(formatOdds*100000) / 1000
    if (formatOdds == 0) {
        formatOdds = "??"
    }
    let additionalClasses = ''
    //console.log(targetData.odds, pairObj)
    if (allDragonData[validTarget].conditions != "") {
        additionalClasses = allDragonData[validTarget].conditions
    }
    htmlTemplate += `<div class="possibletarget ${additionalClasses}"><img loading="lazy" src="${allDragonImgs[validTarget].Adult}">`
            if (allDragonData[validTarget].combo) {
                    if (allDragonData[validTarget].combo.special) {
                          if (allDragonData[validTarget].combo.special.includes('align')) {
                                let alignment = allDragonData[validTarget].combo.special.split('align:')[1].trim();
                                htmlTemplate +=`<div class="riftaligned-elimg">
                                            <div class='el-img' style='background-image:url('${traitIcons[alignment.toLowerCase() + 'trait']}');>
                                                <div class='tooltip'>Rift Must Be Aligned to ${alignment}</div>
                                            </div>
                                        </div>`
                          } else if (allDragonData[validTarget].combo.special.includes('trait')) {
                                let alignment = allDragonData[validTarget].combo.special.split('trait')[0].trim();
                                htmlTemplate +=`<div class='el-img' style='background-image:url('${traitIcons[alignment.toLowerCase() + 'trait']}');>
                                                   <div class='tooltip'>One Parent Must Have ${alignment} Rift Trait</div>
                                                </div>`
                          }
                    }
            }
    htmlTemplate += `<p>${validTarget}</p><p class="oddsnumber">(${formatOdds}%)</p></div>`
  }
  let formatNewOdds = Math.round(Number(pairObj.newOdds) * 100000) / 1000
  let oddsOfCool = Math.round(Number(pairObj.oddsOfCool) * 100000) / 1000
  htmlTemplate += `</div> <h4>Odds for any Target:</h4><p>${oddsOfCool}%</p>`
          
  
 
  if (newGuysMinusTargets.length > 0) {
          htmlTemplate += `<h5 style="margin-bottom:0px;">Odds of getting a new dragon:</h5><p>${formatNewOdds}%</p>`
          htmlTemplate += `<div class="otherss">`
          for (const newGuy of newGuysMinusTargets) {
                  //console.log(newGuy, pairObj.newGuys[newGuy])
                  let imgsrc = allDragonImgs[newGuy].Adult
                  if (!imgsrc) {
                        imgsrc = allDragonImgs[newGuy][Object.keys(allDragonImgs[newGuy])[0]]
                  }
                  htmlTemplate += `<div class="otherpossibleguy"><img src="${imgsrc}" loading="lazy">`
                  if (allDragonData[newGuy].combo) {
                          if (allDragonData[newGuy].combo.special) {
                                  if (allDragonData[newGuy].combo.special.includes('align')) {
                                        let alignment = allDragonData[newGuy].combo.special.split('align:')[1].trim();
                                        htmlTemplate +=`<div class="riftaligned-elimg">
                                                    <div class='el-img' style='background-image:url('${traitIcons[alignment.toLowerCase() + 'trait']}');>
                                                        <div class='tooltip'>Rift Must Be Aligned to ${alignment}</div>
                                                    </div>
                                                </div>`
                                  } else if (allDragonData[newGuy].combo.special.includes('trait')) {
                                        let alignment = allDragonData[newGuy].combo.special.split('trait')[0].trim();
                                        htmlTemplate +=`<div class='el-img' style='background-image:url('${traitIcons[alignment.toLowerCase() + 'trait']}');>
                                                           <div class='tooltip'>One Parent Must Have ${alignment} Rift Trait</div>
                                                        </div>`
                                  }
                          }
                  }
                  htmlTemplate +=`<h5 style="margin-bottom: 0px;">${newGuy}</h5> <h5 style="margin-top:0px;">(${Math.round(pairObj.newGuys[newGuy]*10000)/100}%)</h5></div>`
                
          }
          htmlTemplate += `</div>`
        } else {
        htmlTemplate += `<h5 style="margin-bottom:0px;font-style:italic;">(No new dragons other than targets in results)</h5>`
  }
  htmlTemplate += `<details class="otherpossibleowned" data.breeds="${JSON.stringify(Object.keys(pairObj.breeds))}" data.hybrids="${JSON.stringify(Object.keys(pairObj.hybrids))}" data.multiplier-odds="${pairObj.multiplierOdds}" data.hybrid-odds="${pairObj.hybridOdds}" onclick="getAllOtherResults(this)" data.combo-output="${JSON.stringify(pairObj.elOutput)}" data-parents="[${pairObj.parentLeft}, ${pairObj.parentRight}]"> <summary> See all other possible results: </summary> <div class="otherpossibleownedholder otherss"> </div> </details>`
  htmlTemplate += `</div></div>`
  return htmlTemplate;
}

function getAllOtherResults(detailsbox) {
        if (detailsbox.childElementCount < 3) {
                let htmlStuff = ``
                for (const breed of JSON.parse(detailsbox.dataset.breeds)) {
                        let imgsrc = allDragonImgs[breed].Adult
                          if (!imgsrc) {
                                imgsrc = allDragonImgs[breed][Object.keys(allDragonImgs[breed])[0]]
                          }
                          htmlTemplate += `<div class="otherpossibleguy"><img src="${imgsrc}" loading="lazy">`
                          let dragData = allDragonData[breed]
                        if (JSON.parse(detailsbox.dataset.parents).includes(breed)) {
                                let cloneOdds
                                let cave = document.getElementById('multiparents').querySelector('.caveselected').dataset.caveid
                                if (JSON.parse(detailsbox.dataset.parents)[0] != JSON.parse(detailsbox.dataset.parents)[1]) {
                                        cloneOdds = dragData.odds.singleclone[cave]
                                } else {
                                        cloneOdds = dragData.odds.doubleclone[cave]
                                }
                                
                                htmlTemplate +=`<h5 style="margin-bottom: 0px;">${breed}</h5> <h5 style="margin-top:0px;">(${Math.round((Number(dragData.odds.base) * Number(detailsbox.dataset.multiplierOdds) + cloneOdds)*10000) /100}%)</h5></div>`
                        } else {
                                htmlTemplate +=`<h5 style="margin-bottom: 0px;">${breed}</h5> <h5 style="margin-top:0px;">(${Math.round(Number(dragData.odds.base) * Number(detailsbox.dataset.multiplierOdds)*10000) /100}%)</h5></div>`
                        }
                }
                
                let div = detailsbox.querySelector('.otherpossibleownedholder')
                div.innerHTML = htmlStuff
                //let objPairStuff = getOutputsAndOdds(JSON.parse(detailsbox.dataset.parents), JSON.parse(detailsbox.dataset.comboOutput), objPairStuff, cave)
        }
}

function parentTemplate(parent) {
  let parenthtml = `
      <div class='parent'>
          <div class="itemimg">
                <img  loading="lazy" src="`
          if (allDragonImgs[parent].Adult) {
                  parenthtml += allDragonImgs[parent].Adult
          } else if (allDragonImgs[parent].Old) {
                  parenthtml += allDragonImgs[parent].Old
          }
          parenthtml += `">
          </div>
          <h5>${parent}</h5>
          <div class="internal-el-imgs">`
    for (const el of allDragonData[parent].elements) {
          parenthtml += `<div style="background-image:url('${elementIcons[el.substring(2)]}');"></div>`
    }
    parenthtml += `</div>
            </div>`
    return parenthtml;
}
///////////// testing NEW



function sortDragonsIntoEls() {
        for (const basic of elementChart.basics) {
                if (!dragonsInElement[basic]  && basic != "AnAny") {
                        dragonsInElement[basic] = []
                }
        }
        for (const dragonName of allDragonNames) {
                if (allDragonData[dragonName]) {
                        for (const el of allDragonData[dragonName].elements) {
                                if (elementChart.basics.includes(el)) {
                                        dragonsInElement[el].push(dragonName)
                                }
                        }
                }
        }
}

function possiblePairsa(dragonName) {
  let specialGuys = [];
  let dragonReqs = allDragonData[dragonName].combo.requirements;
  let validPairs = {}
  //let targetsWithoutSpecialGuys = []
  if (dragonReqs) {
          let haveDragonNodes = haveDiv.children;
          let haveDragonsToCheck = []
          for (const child of haveDragonNodes) {
                          //if (!targets.includes(child.id)) {
              haveDragonsToCheck.push(child.id);
                          //}
          }
            for (const req of dragonReqs) {
                  if (!elementChart.basics.includes(req)) {
                          specialGuys.push(req)
                  }
            }
               if (specialGuys.length == 2) {
                        let sorted = specialGuys.sort()
                        let elOutput = []
                        for (const el of [].concat(allDragonData[specialGuys[0]].elements.concat(allDragonData[specialGuys[1]].elements))) {
                                if (!elOutput.includes(el)) {
                                        elOutput.push(el)
                                }
                        }
                        elOutput.push(sorted[0], sorted[1])
                        validPairs[`${sorted[0]}//${sorted[1]}`] = {
                                      parentLeft: sorted[0],
                                      parentRight : sorted[1],
                                      elOutput : elOutput
                              }
            }
               else if (specialGuys.length == 1) {
                //console.log('one special guy! ', specialGuys[0])
                  let specialGuy = allDragonData[specialGuys[0]]
                  if (specialGuy) {
                          for (const otherParentName of haveDragonsToCheck) { 
                            let pairingOutput = specialGuy.elements.concat(allDragonData[otherParentName].elements)
                            pairingOutput.push(otherParentName)
                            pairingOutput.push(specialGuys[0])
                            let validPair = checkTargetReq(dragonName, pairingOutput)
                            //console.log(`We need ${dragonName.combo.requirements}; Pairing of ${specialGuy.name} and ${otherParentName} gets ${pairingOutput} and therefore is ${validPair}`)
                            if (validPair) {
                                    let sorted = [specialGuys[0], otherParentName].sort()
                                    if (validPairs[`${sorted[0]}//${sorted[1]}`]) {
                                        validPairs[`${sorted[0]}//${sorted[1]}`].targetsMet.push(dragonName)
                                    } else {
                                        let pairObj = {
                                              parentLeft: specialGuys[0],
                                              parentRight : otherParentName,
                                              elOutput : pairingOutput,
                                              targetsMet: [dragonName]
                                        }
                                        validPairs[`${sorted[0]}//${sorted[1]}`] = pairObj
                                    }
                              //console.log(specialGuys[0], 'and ', otherParentName, ' is a valid pair for ', dragonName)
                              
                              
                                    //let newObj = 
                              
                                
                            }
                          }
                  }
    }  else {
                       //console.log(dragonName, ' has no special guys :)')
                       return "NoSpecial"
       //targetsWithoutSpecialGuys.push(dragonName)
        //noSpecificDragonTargets([dragonName], haveDragonsToCheck)
        /*let narrowedList = []
        for (const req of dragonReqs) {
                for (const d of dragonsInElement[req]) {
                        if (!narrowedList.includes(d)) {
                                narrowedList.push(d);
                        }
                }
        }*/

    }
  }

  return validPairs      
}


/*
function noSpecificDragonTargets(targetNames, haveDragonsToCheck) {
        let allValid = []
        for (const dr of haveDragonsToCheck) {
                for (const drTwo of haveDragonsToCheck) {
                        let pairingOutput = allDragonData[dr].elements.concat(allDragonData[drTwo].elements)
                        let targetsFromPair = []
                        for (const targetN of targetNames) {
                                let validPair = checkTargetReq(targetN, pairingOutput)
                                if (validPair) {
                                        targetsFromPair.push(targetN);
                                        //console.log(specialGuys[0], 'and ', otherParentName, ' is a valid pair for ', dragonName)
                                        //let sorted = [specialGuys[0], otherParentName].sort()
                                        //validPairs.push(`${sorted[0]}//${sorted[1]}`)
                                        if (!pairsForDragons[targetN]) {
                                                pairsForDragons[targetN] = []
                                        }
                                        pairsForDragons[targetN].push([dr,drTwo].sort())
                                }
                        }
                        if (targetsFromPair.length > 0) {
                                let pairObj = {
                                   parentLeft: dr,
                                   parentRight : drTwo,
                                   targetsMet: targetsFromPair
                                }
                                console.log(pairObj)
                                allValid.push(pairObj)
                        }
                }
        }
        console.log(allValid);
        return allValid
}*/

function checkTargetReqa(target, pairingElOutput) {
  let targetRequirements = [].concat(allDragonData[target].combo.requirements);
  let metReqs = [];
  
        //console.log('checking ', target, targetRequirements, pairingElOutput)
  for (const req of targetRequirements) {
    if (pairingElOutput.includes(req)) {
      targetRequirements.splice(targetRequirements.indexOf(req), 1)
      //metReqs.push(req);
      if (targetRequirements.length == 0) {
        return true;
      }
    }
  }
        //console.log('checking ', target, metReqs, targetRequirements, pairingElOutput)
        
  //if (metReqs.length != targetRequirements.length) {
    return false;
  //}
}


//////////////////end of testing new


function getPairingOutput(dragonLeftName, dragonRightName) {
        let parentNames = [dragonLeftName, dragonRightName].sort()
        
        //let alphabetical = parentNames[0] //ehhhh hmmm
        //let preMade = pairingOutputs[alphabetical][parentNames[1]  <- use for when we place it inside ok
        if (preMade) {
                return preMade
        } else {
                let haveDragonNodes = haveDiv.children
                  let haveDragonsToCheck = []
                  for (const child of haveDragonNodes) {
                    haveDragonsToCheck.push(child.id);
                  }
                  let parentLeft = allDragonData[dragonLeftName]
                for (const otherParentName of haveDragonsToCheck) {
                        let otherOutput = [].concat(allDragonData[otherParentName].combo.output);
                        let pairingElementOutput = [].concat(parentLeft.combo.output)
                        if (otherOutput) {
                          for (const outputEl of otherOutput) {
                            if (!pairingElementOutput.includes(outputEl)) {
                              pairingElementOutput.push(outputEl)
                            }
                          }
                          //console.log('pairing output for ', dragonLeftName,  dragonRightName, pairingElementOutput)
                          pairingOutputs[dragonLeftName + `//` + dragonRightName] = pairingElementOutput
                                return pairingElementOutput
                        }
                }
        }
}

function getSettings() {
        let retrievedSettings = Object.assign({}, dragonarium.savedSettings)
        let defaultSettings = savedSettings;
        //console.log('retrieved ', retrievedSettings)
        if (!retrievedSettings.wantTab || !retrievedSettings.multiparents || !retrievedSettings.initTab || !retrievedSettings.haveTab || !retrievedSettings.shadowTab) {
                
                dragonarium.savedSettings = defaultSettings;
                return;
        }
        if (retrievedSettings) {
                
               // console.log('retrieving settings: ', dragonarium.savedSettings)
                //retrievedSettings = Object.assign(retrievedSettings, dragonarium.savedSettings);
        
               // console.log('settings: ', retrievedSettings, defaultSettings)
                if (retrievedSettings.currentTab) {
                        document.getElementById('tab-buttons').querySelector(`[data-key="${retrievedSettings.currentTab}"]`).click();
                }
                if (defaultSettings.multiparents != retrievedSettings.multiparents) {
                        let buttons = document.getElementById('multiparents').querySelector('.settings-buttons');
                        for (const setting of Object.keys(defaultSettings.multiparents)) {
                                if (defaultSettings.multiparents[setting] != retrievedSettings.multiparents[setting]) {
                                        buttons.querySelector('.' + setting + 'Button').click()
                                }
                                
                        }
                }
                if (defaultSettings.wantTab != retrievedSettings.wantTab) {
                        let tabb = document.getElementById('wantTab');
                        for (const setting of Object.keys(defaultSettings.wantTab)) {
                                
                                if (defaultSettings.wantTab[setting] != retrievedSettings.wantTab[setting]) {
                                        console.log(setting, " has default of ", defaultSettings.wantTab[setting], " ; retrieved ", retrievedSettings.wantTab[setting])
                                        let btut = tabb.querySelector('.' + setting + 'Button')
                                        console.log(btut)
                                                btut.click()
                                }
                                
                        }
                }
                if (defaultSettings.initTab != retrievedSettings.initTab) {
                        let buttons = document.getElementById('initTab').firstElementChild;
                        for (const setting of Object.keys(defaultSettings.initTab)) {
                                if (defaultSettings.initTab[setting] != retrievedSettings.initTab[setting]) {
                                        buttons.querySelector('.' + setting + 'Button').click()
                                }
                                
                        }
                }
                if (defaultSettings.haveTab != retrievedSettings.haveTab) {
                        let buttons = document.getElementById('haveTab').firstElementChild;
                        for (const setting of Object.keys(defaultSettings.haveTab)) {
                                if (defaultSettings.haveTab[setting] != retrievedSettings.haveTab[setting]) {
                                        buttons.querySelector('.' + setting + 'Button').click()
                                }
                                
                        }
                }
                if (defaultSettings.shadowTab != retrievedSettings.shadowTab) {
                        let buttons = document.getElementById('shadowTab').firstElementChild;
                        for (const setting of Object.keys(defaultSettings.shadowTab)) {
                                if (defaultSettings.shadowTab[setting] != retrievedSettings.shadowTab[setting]) {
                                        buttons.querySelector('.' + setting + 'Button').click()
                                }
                                
                        }
                }
        }
        dragonarium.savedSettings = retrievedSettings;
}

function calculateParentsPressed() {
          let possiblepairdiv = document.querySelector('.pairsholder');
        
          while (possiblepairdiv.firstElementChild) {
            possiblepairdiv.firstElementChild.remove()
          }
          //let tempTextEl = document.createElement('p')
          //tempTextEl.id = "temptextel"
          /*if (targetCardDiv.childElementCount < 2) {
                tempTextEl.textContent = "Select more than one dragon!"
          }*/
          //tempTextEl.textContent = "Calculating Pairs, please wait a moment..."
          //possiblepairdiv.appendChild(tempTextEl)
          document.getElementById('mpfloading').classList.remove('hidden')

        setTimeout(updateTargetSearch, 0.3)
          //requestAnimationFrame(updateTargetSearch)
}

function exportdatabuttonClicked(button) {
        saveData()
        let toCopy = JSON.stringify(eventObj)
        navigator.clipboard.writeText(toCopy).then(
            () => {
              document.getElementById('exportnotif').textContent = "Data copied to clipboard!"
            },
            () => {
              document.getElementById('exportnotif').textContent = "Failed to copy data :(! waddahell"
            },
        );
        setTimeout(function() {
                 document.getElementById('exportnotif').textContent = ' '
        }, 10000)
}



function importdatabuttonClicked(button) {
        if (button.classList.contains('importdatabuttonfinal')) {
                let newDragonarium = {}
                let input = document.querySelector('#importdatainput')
                if (input.value) {
                        let importData = JSON.parse(input.value)
                        let issues = false
                        for (const key of Object.keys(dragonarium)) {
                                if (importData.dragonarium[key]) {
                                        newDragonarium[key] = importData.dragonarium[key]
                                        console.log('imported ', key, ' data!')
                                } else {
                                        console.error('issue importing ', key, importData.dragonarium[key])
                                        issues = true
                                }
                        }
                        if (!issues) {
                                console.log('saved data with no issues!')
                                saveData()
                                document.getElementById('importnotif').textContent = 'Saved Data, please refresh your page!'
                                //input.nextElementSibling.after(
                        } else {
                                document.getElementById('importnotif').textContent = 'Had an issue with importing (please let me know, bc this shouldnt happen)'
                        }
                        //console.log('dragonarium is the same as imported? ', JSON.stringify(dragonarium) == JSON.stringify(newDragonarium))
                }
        } else {
                document.getElementById('importnotif').textContent = ''
                let divv = document.querySelector('.importdatadiv')
                if (divv.classList.contains('hidden')) {
                        divv.classList.remove('hidden')
                        button.textContent = "Close Import Tab"
                } else {
                        divv.classList.add('hidden')
                        button.textContent = "Import Data"
                }
        }
        
}

function getScriptUpdateDate() {
        const desiredRepo = "gryphills.github.io";
        const dateTagClass = ".date";
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
          if (this.readyState == 4 && this.status == 200)
          {
            let repos = JSON.parse(this.responseText);
        
            repos.forEach((repo)=>{
              console.log(repo.name)
              if (repo.name == 'dveventplanner')
              {
                var lastUpdated = new Date(repo.updated_at);
                var day = lastUpdated.getUTCDate();
                var month = lastUpdated.getUTCMonth();
                var year = lastUpdated.getUTCFullYear();
                //document.getElementById('lastupdated').textContent += `\n Script Last Updated: ${year}-${month}-${day}`
              }
            });
          }
        };
        xhttp.open("GET", "https://api.github.com/users/gryphills/repos", true);
        xhttp.send();
}


document.addEventListener("DOMContentLoaded", function() {
    console.log('loaded dom!');
    allDragonData = JSON.parse(document.getElementById('dragondata').textContent);
    lastUpdate = allDragonData.lastUpdate;
    delete allDragonData.lastUpdate;
    document.getElementById('lastupdated').textContent += 'Dragon Info/Availability Last Updated: ' + lastUpdate;
    getScriptUpdateDate()
    allDragonNames = Object.getOwnPropertyNames(allDragonData);
    sortAvailDragons()
    allDragonImgs = JSON.parse(document.getElementById('dragonurls').textContent);
    
    processDragonData();
    sortDragonsIntoEls()
    addCheckListeners();
    initDiv = document.querySelector('#initCards');
    wantDiv = document.querySelector('#wantCards');
    haveDiv = document.querySelector('#haveCards');
    shadowDiv = document.querySelector('#shadowCards');
    setTabs();
    makeCards();
    clickInitButtons();
    addSortButtons();
    sortCards(initDiv);
    sortCards(wantDiv);
    sortCards(haveDiv);
    sortCards(shadowDiv);
    createTargetCards();
    searchListeners();
    getSettings();
    document.querySelector('.oopsie').style.display = 'none';
    
});


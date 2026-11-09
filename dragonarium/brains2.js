


let allDragonData ;
let allDragonNames;
let allDragonImgs ;
let initDiv;
let wantDiv ;
let haveDiv ;
let shadowDiv ;
let backOne = "backtotop";


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
  
  'R Rift',
  'ApApocalypse',  'AuAura',  'ChChrysalis',  'CrCrystalline',  'DrDream',  'GaGalactic',  'GeGemstone',  'HiHidden',  'MeMelody',  'MhMonolith',  
  'OlOlympus',  'OrOrnamental',  'RbRainbow',  'SeSeasonal',  'SnSnowflake',  'SuSun',  'MoMoon',  'SfSurface',  'TrTreasure',  'ZoZodiac'
  ]
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

let eventObj = JSON.parse(localStorage.getItem('dvEvents'));
if (!eventObj.dragonarium) {
  eventObj.dragonarium = {}
}
let dragonarium = eventObj.dragonarium

function saveData() {
  eventObj.dragonarium = dragonarium;
  localStorage.setItem("dvEvents", JSON.stringify(eventObj));
}


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
      dragonarium.openTab = e.currentTarget.dataset.key;
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
  if (dragonarium.openTab) {
    let button = document.querySelector('.tab-button').parentNode.querySelector(`[data-key="${dragonarium.openTab}"]`)
    if (button) {
      button.click();
    }
  }
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
    el.parentElement.firstChild.before(el);
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
    next.dataset.toggle = 0;
    next.classList.remove('toggled')
    next = next.nextElementSibling;
    safety -= 1;
    if (safety < 0) {
      console.log("AAAA")
      break;
    }
  }
}




function hideUnavail(el) {
  console.log('hiding/showing!');
  let cards = Array.from(el.closest('.settings-buttons').nextElementSibling.querySelectorAll('.unavail'));
  
  if (Number(el.dataset.toggle) == 0) {
    el.dataset.toggle = 1;
    el.classList.add('toggled')
    for (const card of cards) {
      card.classList.add('hidden');
    }
  } else {
    el.dataset.toggle = 0
    el.classList.remove('toggled')
    for (const card of cards) {
      card.classList.remove('hidden');
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
  let cards = Array.from(el.closest('.settings-buttons').nextElementSibling.querySelectorAll('.perm'));
  if (Number(el.dataset.toggle) == 0) {
    el.dataset.toggle = 1;
    el.classList.add('toggled')
    for (const card of cards) {
      card.classList.add('hidden');
    }
  } else {
    el.dataset.toggle = 0
    el.classList.remove('toggled')
    for (const card of cards) {
      card.classList.remove('hidden');
    }
  }
  let id = el.closest('.settings-buttons').nextElementSibling.id
  if (!dragonarium[id]) {
    dragonarium[id] = {}
  }
  dragonarium[id].hidePerm = el.dataset.toggle
  saveData()
}

function hideBreeds(el) {
  
  let cardsDiv = Array.from(el.closest('.settings-buttons').nextElementSibling.children);
  //console.log('hiding/showing!', cardsDiv[0]);
  if (Number(el.dataset.toggle) == 0) {
    el.dataset.toggle = 1;
    el.classList.add('toggled')
    console.log(cardsDiv[0])
    for (const card of cardsDiv) {
      card.querySelector('.breedinginfo').classList.add('hidden');
    }
  } else {
    el.dataset.toggle = 0
    el.classList.remove('toggled')
    for (const card of cardsDiv) {
      card.querySelector('.breedinginfo').classList.remove('hidden');
    }
  }
  let id = el.closest('.settings-buttons').nextElementSibling.id
  if (!dragonarium[id]) {
    dragonarium[id] = {}
  }
  if (dragonarium[id]) {
    dragonarium[id].hideBreeds = el.dataset.toggle
    saveData()
  } else {
    console.log(id);
  }
}

function cycleViews(imgEl) {
  let imgsFront = imgEl.parentElement.querySelector('.multiimgfront')
  let imgsBack = imgEl.parentElement.querySelector('.multiimgback')
  let imgarray = imgsFront.dataset.imgarray
  imgarray.push(imgarray.shift())
  for (const img of imgArray) {
    if (imgArray.indexOf(img) == 0) {
      imgsFront.firstChild.src = img
    } else {
      imgsBack.children[imgArray.indexOf(img) - 1].src = img
    }
  }
  let viewLabel = imgEl.parentElement.parentElement.querySelector('.viewname')
  let type = imgarray[0].split('dult')[1].replace('.webp', '');
  if (!type || type.length < 2){
    viewLabel.textContent = "Day/Normal Form"
  } else {
    viewLabel.textContent = type + " Form"
  }
  
}

function navToDragon(dragonName) {
        
}




function buildDragonCard(name, data) {
  //console.log(name, data)
  let cardhtml = 
 `<div class="dragonCard `
    if (data.limited == "Y") {
      cardhtml += ` limited unavail`
    } else if (data.limited == "A") {
      cardhtml += `limited avail`
    } else {
      cardhtml += `perm`
    }
  cardhtml += `" name="${name}" id="${name}">
    <div class="minibuttons">
        <div class="minibutton favc" data-toggle=0 onclick="favouriteCard(this)" >❤<div class="tooltip">Favourite</div></div>
        <div class="minibutton wantc" data-toggle=0 onclick="wantCard(this)">✦<div class="tooltip">Want</div></div>
        <div class="minibutton havec" data-toggle=0 onclick="haveCard(this)" >✔<div class="tooltip">Acquired</div></div>
        <div class="minibutton shadowc" data-toggle=0 onclick="shadowCard(this)" >🗡<div class="tooltip">Shadow Realm</div></div>
    </div>`
    
    cardhtml +=`<h2 class="itemname">${name} Dragon</h2>`
    if (allDragonImgs[name]) {
      let imgCount = Object.getOwnPropertyNames(allDragonImgs[name]).length
      if (imgCount > 1) {
        cardhtml += `<p class="viewname" style="font-weight:bold;font-size:medium;">Day/Regular View</p><p>(click to cycle views)</p><div style="display: flex; position: relative; height: 220px;">
          <div class="multiimgback">`
          for (const img of Object.getOwnPropertyNames(allDragonImgs[name])) {
            //console.log(img, allDragonImgs[name][img])
            if (img != "Adult") {
              cardhtml += `<div><img loading="lazy" class="itemimage multi" onclick="cycleViews(this)" src='${allDragonImgs[name][img]}'></div>`
            }
          }
            
          cardhtml += `</div>
          <div class="multiimgfront">
            <img loading="lazy" class="itemimage multi" onclick="cycleViews(this)" src='${allDragonImgs[name].Adult}'>
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
    cardhtml += `<div class="breedinginfo">`

    let skipThing = false;
    if (data.combo['special']) {
      if (data.combo['special'].includes('Evolve')) {
        cardhtml += `${data.combo.special}`
        skipThing = true;
      }
    }
    if (!skipThing) {
      cardhtml += `<h4>Breeding Info:</h4>`
      if (data.combo['special']) {
        cardhtml += `<h3>${data.combo.special}</h3>`
      }
      console.log(data.combo)
      if (data.combo['requirements']) {
        console.log(data.combo.requirements)
        let cleanedReq = ''
        for (const req of data.combo.requirements) {
            if (elementChart.basics.includes(req)) {
                cleanedReq +=  `<div style="background-image:url('${elementIcons[req.substring(2)]}'); vertical-align: center; display: inline-block; height:22px; width: 22px; background-size: contain; background-repeat: no-repeat;"></div>`+ req.substring(2)
            } else {
                cleanedReq += `<a class="specific-breeding-req" href="#${req}" onClick="navToDragon(${req})">${req}</a>`
            }
            if (data.combo.requirements.indexOf(req) != data.combo.requirements.length - 1) {
                cleanedReq += ' + '
            }
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
      cardhtml +=   `</div>
      </div>`
    }
    
    let cardDiv = document.createElement('div');
    cardDiv.innerHTML = cardhtml;
    let cardEl = cardDiv.children[0]
    //console.log(cardhtml, cardDiv, cardEl)
    return cardEl;

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
    if (card.querySelector('.multiimgfront')) {
        let multiArray = []
          multiArray.push(card.querySelector('.multiimgfront').firstChild.src)
        for (const img of Array.from(card.querySelector('.multiimgback'))) {
            multiArray.push(img.firstChild.src)
        }
      card.querySelector('.multiimgfront').dataset.imgarray = JSON.stringify(multiArray)
    }
    if (!dragonarium[dragonName]) {
      dragonarium[dragonName] = {"fav": 0, "status": "init"};
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
    /*else {
      //console.log('???? what was that?', dragonName, " has a status of ", dragonarium[dragonName].status);
      initDiv.appendChild(card);
    }*/
    if (Number(dragonarium[dragonName].fav) == 1) {
      card.querySelector('.favc').click()
    }
  }
}

function clickInitButtons() {
  
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
      //allDragonData[dragon] = processData(dragon)
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
    } else {
      console.log('okay wtf? ', dragon)
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
    comboFin['special'] = comboData + `\n pls hold for better info on this guy!`;
    readyforSplits = false;
  } 
  
  if (readyforSplits) {
    comboFin.requirements = []
    comboFin.output = []
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
                comboFin.output.push(el)
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
    comboFin.output = outputNoDups;
  }
  console.log('processed reqs got ', comboFin)
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
      let cardHolder = input.closest('.tab').querySelector('#'+key);
      for (const card of Array.from(cardHolder.children)) {
        if (e.currentTarget.value && e.currentTarget.value != ' ') {
          if (!card.id.includes(e.currentTarget.value.trim())) {
            card.classList.add('hidden');
          } else {
            card.classList.remove('hidden');
          }
        }
      }
    })
  }
}



function createTargetCards() {
  let targetCardDiv = document.querySelector('.targetcards')
  for (const dragonName of allDragonNames) {
    if (allDragonData[dragonName].limited != 'Y') {
      let targetCardHtml = 
      `<div class='targetcard ${dragonName}' data-dragon-name="${dragonName}" data-status='${dragonarium[dragonName].status}' data-fav="${dragonarium[dragonName].fav}" onclick="targetSelect(this)">
          <div class="itemimage targetimage">
              <img loading="lazy" src="${allDragonImgs[dragonName].Adult}" >
          </div>
          <h2 class="itemname">${dragonName} Dragon</h2>
      </div>`;

      let cardEl = document.createElement('div');
      cardEl.outerHTML = targetCardHtml;
      
      if (!allDragonData[dragonName].limited) {
        cardEl.classList.add('perm');
      }
      if (dragonarium[dragonName].fav) {
        cardEl.classList.add('favourite');
        if (targetCardDiv.children.length == 0) {
          targetCardDiv.appendChild(cardEl);
        } else {
          targetCardDiv.children[0].appendChild(cardEl);
        }
      } else {
        targetCardDiv.appendChild(cardEl);
      }
    }
  }
}

function updateTargetCard(dragonName) {
  let targetCardDiv = document.querySelector('.targetdragons')
  let targetCard = targetCardDiv.querySelector(`.${dragonName}`)

  if (targetCard.dataset.fav != dragonarium[dragonName].fav) {
    if (Number(dragonarium[dragonName].fav) == 1) {
      targetCard.classList.add('favourite')
      targetCard.parentElement.firstChild.before(targetCard);
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
  targetCard.dataset.status = dragonarium[dragonName].status;
  if (targetCard.dataset.status == 'shadow') {
    targetCard.classList.add('shadow')
  } else {
    targetCard.classList.remove('shadow')
  }
  targetCard.dataset.fav = dragonarium[dragonName].fav;
}

function targetSelect(element) {
  let swapDiv;
  if (element.closest('.targets-selected')) {
    swapDiv = element.closest('.targets-selected').previousElementSibling;
  } else {
    swapDiv = element.closest('.targetdragons').nextElementSibling;
  }
  if (element.classList.contains('favourite')) {
    if (swapDiv.children.length > 0) {
      swapDiv.firstChild.before(element);
    } else {
      swapDiv.appendChild(element);
    }
  } else {
    swapDiv.appendChild(element);
  }
}

function updateTargetSearch() {
  let targetCardDiv = document.querySelector('.targets-selected');
  let possiblepairdiv = document.querySelector('.possiblepairs')

  let targets = []
  let allRequirements = []

  for (const target of Array.from(targetCardDiv.children)) {
    let dragonName = target.dataset.dragonName
    targets.push(dragonName);
    let dragonRequires = allDragonData[dragonName].combo.requirements
    for (const needed of dragonRequires) {
      if (!allRequirements.includes(needed)) {
        allRequirements.push(needed);
      }
    }
  }
  //now we haveall our required stuff, and all our targets. lets start with uh
  let haveDragonNodes = haveDiv.children
  let haveDragonsToCheck = []
  for (const child of haveDragonNodes) {
    haveDragonsToCheck.push(child.id);
  }
  
  let validPairs = []

  for (i=0;i<haveDragonsToCheck.length;i++) {
    let dragonName = haveDragonsToCheck.pop()
    let parentLeft = allDragonData[dragonName]
    
    if (parentLeft.combo.output) {
      for (const otherParentName of haveDragonsToCheck) {

        let otherOutput = allDragonData[otherParentName].combo.output;
        let pairingElOutput = []
        pairingElOutput = pairingElOutput.concat(parentLeft.combo.output)
        if (otherOutput) {
          for (const outputEl of otherOutput) {
            if (!pairingElOutput.includes(outputEl)) {
              pairingElOutput.push(outputEl)
            }
          }
          let targetsMet = checkEachTarget(targets, pairingElOutput);
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
    }
  }
  //yay we checked ALL the possible pairs! Hopefully that doesn't completely eat the computer to do mSJHDgfsd
}

function sortPairIntoArray(pairObj, validPairs) {

  for (i=0;i<validPairs.length;i++) {
    let pair = validPairs[i]
    if (pairObj.targetsMet.length > pair.targetsMet.length) {
      validPairs.splice(validPairs.indexOf(pair), 0, pairObj)
      return validPairs;
    }
  }
  return validPairs;
}


function checkEachTarget(targets, pairingElOutput) {
  let targetsMet = []
  for (const target of targets) {
    if (checkTargetReq(target, pairingElOutput)) {
      targetsMet.push(target)
      if (targetsMet.length == targets.length) {
        return targetsMet;
      }
    }
  }
  return targetsMet;
}

function checkTargetReq(target, pairingElOutput) {
  let targetRequirements = allDragonData[target].combo.requirements;
  let metReqs = [];
  for (const req of targetRequirements) {
    if (pairingElOutput.includes(req)) {
      metReqs.push(req);
      if (metReqs.length == targetRequirements.length) {
        return true;
      }
    }
  }
  if (metReqs.length != targetRequirements.length) {
    return false;
  }
}

function pairTemplate(parentLeft, parentRight) {
  `<div class="pairing"><div>${parentLeft.name} + ${parentRight.name} = </div>/div>`
}


document.addEventListener("DOMContentLoaded", function() {
    console.log('loaded dom!');
    allDragonData = JSON.parse(document.getElementById('dragondata').textContent);
    allDragonNames = Object.getOwnPropertyNames(allDragonData);
    allDragonImgs = JSON.parse(document.getElementById('dragonurls').textContent);
    processDragonData();
    addCheckListeners();
    initDiv = document.querySelector('#initCards');
    wantDiv = document.querySelector('#wantCards');
    haveDiv = document.querySelector('#haveCards');
    shadowDiv = document.querySelector('#shadowCards');
    setTabs();
    makeCards();
    clickInitButtons();
    sortCards(initDiv);
    sortCards(wantDiv);
    sortCards(haveDiv);
    sortCards(shadowDiv);
    createTargetCards()
    document.querySelector('.oopsie').style.display = 'none';
});


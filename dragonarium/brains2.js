


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
/*
{
        parent1//parent2 : [possible outputs?]
}
*/
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
  
  'R Rift', "Any",
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

function addSortButtons() {
        //let elementIconArr = elIcons.split('\n')
        let innerHtml = ''
        for (const el of elementChart.basics) {
                if (el != "Any") {
                        let imgsrc = '';
                        for (const url of Object.getOwnPropertyNames(elementIcons)) {
                                if (url.includes(el.substring(2))) {
                                        imgsrc = url;
                                        elementIcons[el] = url;
                                }
                        }
                        innerHtml += `<img class="elsort${el.substring(2)}" src="${elementIcons[el]}" onClick="sortCardsByEl(this, '${el}')">`
                }
        }
        for (const sortArea of document.querySelectorAll('.elementsort')) {
                sortArea.innerHTML = innerHtml;
        }
}

function jumpToDragon(dragonName, clickedEl = undefined) {
        if (clickedEl) {
                let back = clickedEl.closest('dragonCard')
                if (back) {
                        back = clickedEl.closest('dragonCard').id;
                } if (back) {
                        backOne = back;
                        window.location.href = window.location.href.split('#')[0] + back.replaceAll(' ', '')
                }
                
        }
        console.log(dragonName.id)
        let inDiv = dragonarium[dragonName.id].status;
        document.getElementById(`tabbutton-${inDiv}`).click()
        while (!document.getElementById(`tabbutton-${inDiv}`.classList.contains('open'))) {
                console.log('opening ' , inDiv, '...')
        }
        window.location.href = window.location.href.split('#')[0] + dragonName.replaceAll(' ', '')
        //document.getElementById(inDiv + 'Div')
}

function sortCardsByEl(el, elementName) {
        let activeFilters = JSON.parse(el.parentElement.dataset.active)
        if (!activeFilters) {
                activeFilters = []
        }
        let cardsDiv = el.closest('.tab').querySelector('.dragonCards')
        if (cardsDiv) {
                let toggled = el.dataset.toggled
                if (toggled) {
                        activeFilters.push(elementName)
                                for (const card of Array.from(cardsDiv.querySelectorAll('.${elementName}'))) {
                                        card.classList.add('.filter${elementName}')
                                }
                        
                } else {
                        activeFilters.splice(activeFilters.indexOf(elementName), 1)
                                for (const card of Array.from(cardsDiv.querySelectorAll('.${elementName}'))) {
                                        card.classList.remove('.filter${elementName}')
                                }
                                        
                }
        }
        el.parentElement.dataset.active = JSON.stringify(activeFilters)
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
  let cards = Array.from(el.closest('.settings-buttons').nextElementSibling.querySelectorAll('.perm'));
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
    //console.log(cardsDiv[0])
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
    console.log('smth weird with ', id);
  }
}


function clickInitButtons() {
        let tabs = [wantDiv, initDiv, haveDiv, shadowDiv]
        for (const tab of tabs) {
                let buttons = tab.querySelectorAll('.sortbutton')
                for (const button of buttons) {
                        let id = tab.querySelector('.dragonCards').id
                        let sortType = button.classList[0].substring(0, button.classList[0].length - 6);
                        if (Number(dragonarium[id][sortType]) == 1) {
                                button.click()
                        }
                }
        }
}


function cycleViews(imgEl) {
  let imgsFront = imgEl.parentElement.parentElement.parentElement.querySelector('.multiimgfront')
  let imgsBack = imgEl.parentElement.parentElement.parentElement.querySelector('.multiimgback')
  let imgarray = JSON.parse(imgsFront.dataset.imgarray)
  imgarray.push(imgarray.splice(0, 1)[0])
        imgsFront.dataset.imgarray = JSON.stringify(imgarray)
  for (const img of imgArray) {
    if (imgArray.indexOf(img) == 0) {
      imgsFront.firstChild.src = img
    } else {
      imgsBack.children[imgArray.indexOf(img) - 1].src = img
    }
  }
  let viewLabel = imgEl.parentElement.parentElement.parentElement.querySelector('.viewname')
  let type = imgarray[0].split('dult')[1].replace('.webp', '');
  if (!type || type.length < 2){
    viewLabel.textContent = "Day/Normal Form"
  } else {
    viewLabel.textContent = type + " Form"
  }
  
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
      cardhtml += ` limited unavail `
    } else if (data.limited == "A") {
      cardhtml += `limited avail`
    } else {
      cardhtml += ` perm`
    }
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
    </div>`
    
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
    cardhtml += `<div style='max-height:22px;height:fit-content;display:flex; justify-content:center;'>${elements}</div>  <div class="breedinginfo">`

    let skipThing = false;
    if (data.combo['special']) {
      if (data.combo['special'].includes('Evolve')) {
        cardhtml += `${data.combo.special}`
        skipThing = true;
      }
    } else if (data.rarity == "Galaxy") {
        cardhtml += `<div class="el-img" style="background-image:url('${elementIcons.Galactic}');"></div>`
        cardhtml += `Galaxy Dragon; Clone in Coop`;
        //skipThing = true;
    }
    if (!skipThing) {
      cardhtml += `<h4>Breeding Info:</h4>`
      if (data.combo['special']) {
        cardhtml += `<h3>${data.combo.special}</h3>`
      }
      if (data.combo['requirements']) {
        let cleanedReq = ''
        for (const req of data.combo.requirements) {
                let reqq = req
            if (elementChart.basics.includes(req)) {
                    if (req == "Any") {
                        reqq = "AnAny"
                    }
                cleanedReq +=  `<div class="el-img" style="background-image:url('${elementIcons[req.substring(2)]}');"></div>` + reqq.substring(2)
            //} else if (req == "Any") {
                //cleanedReq +=  `req`
            
            } else {
                cleanedReq += `<div class="specific-breeding-req"><a class="specific-breeding-req" href="#${req}" onClick="jumpToDragon(${req}, this)">${req}</a>`
                    if (allDragonData[req]) {
                        cleanedReq += `<span class="internal-el-imgs">`
                        for (const el of allDragonData[req].elements) {
                                cleanedReq += `<div style="background-image:url('${elementIcons[el.substring(2)]}');"></div>`
                        }
                         cleanedReq += `</span>`
                    }
                cleanedReq += `</div>`
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
    /*if (card.querySelector('.multiimgfront')) {
        let multiArray = []
          multiArray.push(card.querySelector('.multiimgfront').firstChild.src)
        for (const img of Array.from(card.querySelector('.multiimgback'))) {
                console.log(img, img.firstChild.firstChild)
            multiArray.push(img.firstChild.firstChild.src)
        }
      card.querySelector('.multiimgfront').dataset.imgarray = JSON.stringify(multiArray)
            console.log('array: ', multiArray, JSON.stringify(multiArray))
    }*/
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
    comboFin['special'] = comboData + `\n pls hold for better info on this guy!`;
    readyforSplits = false;
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
    comboFin.requirements = requirementNoDups;
  }
        if (comboFin.requirements) {
                if (comboFin.requirements == [ "MhMonolith" ]) {
                        comboFin.requirements = [ "MhMonolith", "MhMonolith" ]
                } else if (comboFin.requirements.length == 1) {
                        comboFin.requirements.push('Any')
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
        console.log(e.currentTarget.value);
      let cardHolder = input.closest('.tab').querySelector('#'+key);
      for (const card of Array.from(cardHolder.children)) {
        if (e.currentTarget.value && e.currentTarget.value != ' ') {
          if (!card.dataset.dragonName.toLowerCase().includes(e.currentTarget.value.trim().toLowerCase())) {
            card.classList.add('filtersearch');
          } else {
            card.classList.remove('filtersearch');
          }
        } else {
                card.classList.remove('filtersearch');
        }
      }
    })
  }
}



function createTargetCards() {
  let targetCardDiv = document.querySelector('.targetcards');
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
            }
        
      //let breedInfo = document.querySelector(`#${dragonName}`).querySelector('h3').innerHTML <h3> ${breedInfo} </h3>
      let targetCardHtml = 
      `<div class='targetcard ${dragonName} ${elementsClasses}' data-dragon-name="${dragonName}" data-status='${dragonarium[dragonName].status}' data-fav="${dragonarium[dragonName].fav}" onclick="targetSelect(this)">
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

      if (allDragonData[dragonName].requirements) {
        
      }
      
      if (!allDragonData[dragonName].limited) {
        cardEl.classList.add('perm');
        cardEl.classList.add('filterperm');
      }
      if (dragonarium[dragonName].status == 'have') {
        cardEl.classList.add('owned');
        cardEl.classList.add('filterowned');
      }
      if (dragonarium[dragonName].fav) {
        cardEl.classList.add('favourite');
        if (targetCardDiv.children.length == 0) {
          targetCardDiv.appendChild(cardEl);
        } else {
          targetCardDiv.children[0].after(cardEl);
        }
      } else {
        targetCardDiv.appendChild(cardEl);
      }
    }
  }
  updatePossibleTargets()
}

function updatePossibleTargets() {
  let possibleTargets = document.querySelector('#targetcards').children;
  //let safety = 30
  for (const child of possibleTargets) {
    child.classList.remove('impossible')
    let impossible = false;
    let dragonName = child.dataset.dragonName;
          //console.log(dragonName, allDragonData[dragonName])
    let dragonReqs = allDragonData[dragonName].combo.requirements;
          if (dragonReqs) {
            for (const req of dragonReqs) {
                    //if (safety > 0) {
                    //        console.log(`is ${req} an element or a dragon?`)
                    //        safety -= 1;
                    //}
              if (allDragonNames.includes(req)) {
                if (dragonarium[req].status != 'have') {
                  child.classList.add('impossible')
                  impossible = true
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


function hideOwned(el) {
   let cards = document.querySelector('#targetcards').querySelector('.owned')
   if (el.dataset.value == 0) {
           el.dataset.value == 1
           el.classList.add('toggled');
           for (const card of Array.from(cards)) {
                card.classList.add('filterowned')
           }
   } else {
           el.dataset.value == 0
           el.classList.remove('toggled');
           for (const card of Array.from(cards)) {
                card.classList.remove('filterowned')
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
          let dragonName = element.dataset.dragonName;
          //console.log(dragonName)
          let baseTarget = element.closest('.targets-selected').previousElementSibling.querySelector('.' + dragonName).classList.remove('selected');
          element.remove()
    //swapDiv = element.closest('.targets-selected').previousElementSibling;
  } else {
          swapDiv = element.closest('.targetcards').nextElementSibling;
          let copyEl = element.cloneNode(true)
          if (element.classList.contains('favourite')) {
            if (swapDiv.children.length > 0) {
              swapDiv.firstChild.before(copyEl);
            } else {
              swapDiv.appendChild(copyEl);
            }
          } else {
            swapDiv.appendChild(copyEl);
          }
          element.classList.add('selected');
  }
  updateTargetSearch()
}



function updateTargetSearch() {
  let targetCardDiv = document.querySelector('.targets-selected');
  let possiblepairdiv = document.querySelector('.possiblepairs')

  while (possiblepairdiv.firstChild) {
    possiblepairdiv.firstChild.remove()
  }
  let tempTextEl = document.createElement('p')
  if (targetCardDiv.childElementCount < 2) {
        tempTextEl.textContent = "Select more than one dragon!"
  }
  tempTextEl.textContent = "Calculating pairs..."
  possiblepairdiv.appendChild(tempTextEl)

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
  //console.log(targets, ' require ', allRequirements)
  //now we haveall our required stuff, and all our targets. lets start with uh
  let haveDragonNodes = haveDiv.children;
  let haveDragonsToCheck = []
  for (const child of haveDragonNodes) {
          //if (!targets.includes(child.id)) {
            haveDragonsToCheck.push(child.id);
          //}
  }
  
  let validPairObj = {}
  let validPairs = []
  let pairsForEachTarget = {}
  let guysWithNoSpecialGuys = []
  //console.log('checking dragons we have: ', haveDragonsToCheck);

  for (const target of targets) {
        let checkPairs = possiblePairsa(target)
          if (checkPairs != "NoSpecial") {
                pairsForEachTarget[target] = checkPairs
          } else {
                guysWithNoSpecialGuys.push(target)
          }
          
  }

  //for (const

  for (const targetName of Object.getOwnPropertyNames(pairsForEachTarget)) {
        for (const pairName of Object.getOwnPropertyNames(pairsForEachTarget[targetName])) {
                let targetsMet = [targetName];
                if (validPairObj[pairName]) {
                        targetsMet = targetsMet.concat(validPairObj[pairName].targetsMet);
                }
                pairsForEachTarget[targetName][pairName].targetsMet = targetsMet
                //console.log(pairsForEachTarget[targetName][)
                validPairObj[pairName] = pairsForEachTarget[targetName][pairName]
        }   
  }
 
  for (const pairName of Object.getOwnPropertyNames(validPairObj)) {
          let pair = validPairObj[pairName]
          
        if (pair.targetsMet.length > 1) {
                console.log(pairName, ' meets ', pair.targetsMet)
                if (validPairs.length == 0) {
                        validPairs.push(pair)
                } else {
                        validPairs = sortPairIntoArray(pair, validPairs);
                }
        }
  }

  if (validPairs.length > 0) {
        let innerHtmlStuff = ''
        for (const pair of validPairs) {
                let htmlStuff = pairTemplate(pair)
                innerHtmlStuff += htmlStuff
                //console.log(pair, htmlStuff, '!!!!!!!!!!!')
        }
        document.querySelector('.possiblepairs').innerHTML = innerHtmlStuff
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
  
  console.log(validPairs);
  
  /*for (const pairObj of validPairs) {
    let newPairEl = document.createElement('div');
    let html = pairTemplate(pairObj);
    newPairEl.outerHTML = html;
    possiblepairdiv.appendChild(newPairEl);
  }*/
  //yay we checked ALL the possible pairs! Hopefully that doesn't completely eat the computer to do mSJHDgfsd
  //now we need to build and add the pairs into the template thingy.


  //tempTextEl.remove();
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
            console.log('met ', targetsMet, '; need ', targets)
      if (targetsMet.length == targets.length) {
        return targetsMet;
      }
    }
  }
  return targetsMet;
}

function checkTargetReq(target, pairingElOutput) {
  let targetRequirements = [].concat(allDragonData[target].combo.requirements);
  let metReqs = [];
  
        //console.log('checking ', target, targetRequirements, pairingElOutput)
  for (const req of targetRequirements) {
    if (pairingElOutput.includes(req)) {
      metReqs.push(req);
      if (metReqs.length == targetRequirements.length) {
        return true;
      }
    }
  }
        //console.log('checking ', target, metReqs, targetRequirements, pairingElOutput)
        
  if (metReqs.length != targetRequirements.length) {
    return false;
  }
}

function pairTemplate(pairObj) {
  let htmlTemplate = `<div class="pairing"> <div class="pairparents">`
  htmlTemplate += parentTemplate(pairObj.parentLeft);
  htmlTemplate += `<p> + </p>`
  htmlTemplate += parentTemplate(pairObj.parentRight);
  htmlTemplate += `</div> <div class="possibletargets"> <h4> Possible Target Results:</h4>`
  for (const validTarget of pairObj.targetsMet) {
    htmlTemplate += `<div class="possibletarget"><img src="${allDragonImgs[validTarget].Adult}"><p>${validTarget}</p></div>`
  }
  htmlTemplate += `</div></div>`
  return htmlTemplate;
}

function parentTemplate(parent) {
  let parenthtml = `<a href="#${parent}">
      <div class='parent'>
          <div class="itemimg">
                <img src="${allDragonImgs[parent].Adult}">
          </div>
          <h5>${parent}</h5>
          <div class="internal-el-imgs">`
    for (const el of allDragonData[parent].elements) {
          parenthtml += `<div style="background-image:url('${elementIcons[el.substring(2)]}');"></div>`
    }
    parenthtml += `</div>
            </div>
    </a>`
    return parenthtml;
}
///////////// testing NEW



function sortDragonsIntoEls() {
        for (const basic of elementChart.basics) {
                if (!dragonsInElement[basic]  && basic != "Any") {
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
                        validPairs.push(`${sorted[0]}//${sorted[1]}`)
            }
               else if (specialGuys.length == 1) {
                console.log('one special guy! ', specialGuys[0])
                  let specialGuy = allDragonData[specialGuys[0]]
                  if (specialGuy) {
                          for (const otherParentName of haveDragonsToCheck) { 
                            let pairingOutput = specialGuy.elements.concat(allDragonData[otherParentName].elements)
                            pairingOutput.push(otherParentName)
                            pairingOutput.push(specialGuys[0])
                            let validPair = checkTargetReq(dragonName, pairingOutput)
                            //console.log(`We need ${dragonName.combo.requirements}; Pairing of ${specialGuy.name} and ${otherParentName} gets ${pairingOutput} and therefore is ${validPair}`)
                            if (validPair) {
                              //console.log(specialGuys[0], 'and ', otherParentName, ' is a valid pair for ', dragonName)
                              let sorted = [specialGuys[0], otherParentName].sort()
                              let pairObj = {
                                      parentLeft: specialGuys[0],
                                      parentRight : otherParentName
                              }
                                    //let newObj = 
                              validPairs[`${sorted[0]}//${sorted[1]}`] = pairObj
                            }
                          }
                  }
    }  else {
                       console.log(dragonName, ' has no special guys :)')
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
                          console.log('pairing output for ', dragonLeftName,  dragonRightName, pairingElementOutput)
                          pairingOutputs[dragonLeftName + `//` + dragonRightName] = pairingElementOutput
                                return pairingElementOutput
                        }
                }
        }
}


document.addEventListener("DOMContentLoaded", function() {
    console.log('loaded dom!');
    allDragonData = JSON.parse(document.getElementById('dragondata').textContent);
    allDragonNames = Object.getOwnPropertyNames(allDragonData);
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
    addSortButtons()
    sortCards(initDiv);
    sortCards(wantDiv);
    sortCards(haveDiv);
    sortCards(shadowDiv);
    createTargetCards()
    searchListeners()
    document.querySelector('.oopsie').style.display = 'none';
});





let allDragonData ;
let allDragonNames;
let allDragonImgs ;
let initDiv;
let wantDiv ;
let haveDiv ;
let shadowDiv ;
let backOne = "backtotop";

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
    div.appendChild(card)
  }
  for (const card of permCards) {
    div.appendChild(card)
  }
  for (const card of unavailCards) {
    div.appendChild(card)
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
        Zo: 'ZoZodiac'
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
  prims: [
    'P',
    'F',
    'E',
    'C',
    'W',
    'L',
    'A',
    'M',
    'I',
    'D',
    'R'
  ],
  basics : [
    'P Plant',
        'F Fire',
       'E Earth',
        'C Cold',
        'W Water',
        'L Lightning',
        'A Air',
        'M Metal',
         'I Light',
         'D Dark',
         'R Rift',
         'ApApocalypse',
         'AuAura',
         'ChChrysalis',
        'CrCrystalline',
         'DrDream',
       'GaGalactic',
         'GeGemstone',
         'HiHidden',
         'MeMelody',
         'MhMonolith',
         'OlOlympus',
        'OrOrnamental',
        'RbRainbow',
        'SeSeasonal',
        'SnSnowflake',
        'SuSun',
         'MoMoon',
        'SfSurface',
        'TrTreasure',
       'ZoZodiac'
  ]
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
        cardhtml += `<div style="display: flex; position: relative; height: 220px;">
          <div class="multiimgback">`
          for (const img of Object.getOwnPropertyNames(allDragonImgs[name])) {
            if (img != "Adult") {
              cardhtml += `<img loading="lazy" class="itemimage multi" onclick="cycleViews(this) src="${allDragonImgs[name][img]}">`
            }
          }
            
          cardhtml += `</div>
          <div class="multiimgfront">
            <img loading="lazy" class="itemimage multi" onclick="cycleViews(this)" src="${allDragonImgs[name].Adult}">
          </div>
        </div>`
      }
      else if (imgCount == 1) {
        cardhtml += `<div class="itemimage"` 
        //if (Object.getOwnPropertyNames(data.images)[0] == "temp") {
        //    cardhtml += ` style="max-width:100px;max-height:100px;" `
        //}
        cardhtml += `><img loading="lazy" src="${allDragonImgs[name][Object.getOwnPropertyNames(allDragonImgs[name])[0]]}" ></div>`
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
      if (data.combo['requirements']) {
        console.log(data.combo.requirements)
        let cleanedReq = ''
        for (const req of data.combo.requirements) {
            if (elementChart.basics.includes(req)) {
                cleanedReq += req.substring(2)
            } else {
                cleanedReq += `<a class="specific-breeding-req" href="#${req}">${req}</a>`
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
        let multiArray = [card.querySelector('.multiimgfront').firstChild.src]
        for (const img of card.querySelector('.multiimgback')) {
            multiArray.push(img.src)
        }
      card.querySelector('.multiimgfront').dataset.imgarray = multiArray
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
    if (dragon.combo) {
      let comboTemp =  processCombo(dragon.combo.raw);
      dragon.combo = comboTemp;
    }
  }
}


/*function processData(row) {
  if (row.avail != '') {
    row.limited = "A"
  }
  row = processCombo(row);
  row = processElsAndHabitats(row);
  return row;
}*/

function processCombo(comboData) {
  //combo  = {output, requirements, special/notes}
  let comboFin = {};
  
  let readyforSplits = true;
  if (comboData.includes('[')) {
    let special = row.combo.split('[')[1];
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
    let comboArr = row.combo.split('+')
    let chartRefArr = Object.getOwnPropertyNames(chartRef)
    
    for (const datapoint of comboArr) {
      if (datapoint.trim().length > 2) {
        //let special = isUpperCase(datapoint.trim())
        if (chartRefArr.includes(datapoint.trim())) {
          comboFin.requirements.push(chartRef[datapoint.trim()]);
          comboFin.output.push(chartRef[datapoint.trim()]);
        } else {
          comboFin.requirements.push(datapoint);
          comboFin.output.push(datapoint);
          let requirementEls = getRequirementEls(datapoint.trim())
          for (const el of requirementEls) {
            comboFin.requirements.push(el)
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
  return comboFin;
}

function getRequirementEls(requirementName) {
  for (i=0;i<allDragonNames.length;i++) {
    if (dragonNames[i] == requirement){
      console.log('yeah got em!');
      let rowStuff = processElsAndHabitats(allDragonData[allDragonNames[i]])
      return rowStuff.elements
    }
  }
}



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
    document.querySelector('.oopsie').style.display = 'none';
});


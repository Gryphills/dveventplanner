


let allDragonData ;
let allDragonNames;
let initDiv;
let wantDiv ;
let haveDiv ;
let shadowDiv ;

let eventObj = JSON.parse(localStorage.getItem('dvEvents'));
if (!eventObj.dragonarium) {
  eventObj.dragonarium = {}
}
let dragonarium = eventObj.dragonarium

function saveData() {
  eventObj.dragonarium = dragonarium;
  localStorage.setItem("dvEvents", JSON.stringify(eventObj));
}

function setTabs() {
  let tabButtArr = Array.from(document.querySelector('.tab-button').parentNode.children)
  let tabDivArr = Array.from(document.querySelector('.tab').parentNode.children)
  for (const tabButton of tabButtArr) {
    tabButton.addEventListener('click', function(e) {
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
}




function favouriteCard(button) {
  let el = button.closest('.dragonCard');
  if (Number(el.dataset.toggle) == 0) {
    el.classList.add("favourite");
    button.dataset.toggle = 1;
    el.parentElement.children[0].before(el);
  } else {
    el.classList.remove("favourite");
    button.dataset.toggle = 0;
    el.parentElement.appendChild(el);
  }
  dragonarium[el.name].fav = button.dataset.toggle;
  console.log(button.dataset.toggle, el.name)
  saveData()
}

function wantCard(button) {
  radioOtherButtons(button)
  let el = button.closest('.dragonCard');
  if (Number(el.dataset.toggle) == 0) {
    button.dataset.toggle = 1;
    dragonarium[el.name].status = 'want';
    if (el.classList.contains('favourite')) {
      wantDiv.children[0].before(el)
    } else {
      wantDiv.appendChild(el)
    }
  } else {
    button.dataset.toggle = 0;
    dragonarium[el.name].status = 'init';
    if (el.classList.contains('favourite')) {
      initDiv.children[0].before(el)
    } else {
      initDiv.appendChild(el)
    }
  }
  
  console.log(button.dataset.toggle, el.name)
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

function haveCard(button) {
  let el = button.closest('.dragonCard');
  radioOtherButtons(button)
  if (Number(button.dataset.toggle) == 0) {
    dragonarium[el.name].status = 'have';
    if (el.classList.contains('favourite')) {
      haveDiv.children[0].before(el)
    } else {
      haveDiv.appendChild(el)
    }
  } else {
    button.dataset.toggle = 0;
    dragonarium[el.name].status = 'init';
    if (el.classList.contains('favourite')) {
      initDiv.children[0].before(el)
    } else {
      initDiv.appendChild(el)
    }
  }
  saveData()
}

function shadowCard(button) {
  let el = button.closest('.dragonCard');
  if (Number(button.dataset.toggle) == 0) {
    button.dataset.toggle = 1;
    dragonarium[el.name].status = 'shadow';
    if (el.classList.contains('favourite')) {
      shadowDiv.children[0].before(el)
    } else {
      shadowDiv.appendChild(el)
    }
  } else {
    button.dataset.toggle = 0;
    dragonarium[el.name].status = 'init';
    if (el.classList.contains('favourite')) {
      initDiv.children[0].before(el)
    } else {
      initDiv.appendChild(el)
    }
  }
  saveData()
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
}

function hideBreeds(el) {
  console.log('hiding/showing!', cardsDiv[0]);
  let cardsDiv = Array.from(el.closest('.settings-buttons').nextElementSibling.children);
  if (Number(el.dataset.toggle) == 0) {
    el.dataset.toggle = 1;
    el.classList.add('toggled')
    console.log(cardsDiv[0])
    for (const card of cardsDiv) {
      card.querySelector('.breedingInfo').classList.add('hidden');
    }
  } else {
    el.dataset.toggle = 0
    el.classList.remove('toggled')
    for (const card of cardsDiv) {
      card.querySelector('.breedingInfo').classList.remove('hidden');
    }
  }
}

let chartRef = [
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
    'AaAllPrimaries',
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
        <div class="minibutton favc" data-toggle=0 onclick="favouriteCard(this)" style="background-color: #bcb8f5; margin-bottom:25px;">❤<div class="tooltip">Favourite</div></div>
        <div class="minibutton wantc" data-toggle=0 onclick="wantCard(this)" style="background-color: #bcb8f5;">✦<div class="tooltip">Want</div></div>
        <div class="minibutton havec" data-toggle=0 onclick="haveCard(this)" style="background-color: #bcb8f5;">✔<div class="tooltip">Acquired</div></div>
        <div class="minibutton shadowc" data-toggle=0 onclick="shadowCard(this)" style="background-color: #bcb8f5;">🗡<div class="tooltip">Shadow Realm</div></div>
    </div>`
    
    cardhtml +=`<h2 class="itemname">${name} Dragon</h2>`
    if (data.images) {
      let imgCount = Object.getOwnPropertyNames(data.images).length
      if (imgCount > 1) {
        cardhtml += `<div style="display: flex; position: relative; height: 220px;">
          <div class="multiimgback">`
          for (const img of Object.getOwnPropertyNames(data.images)) {
            if (img != "Adult") {
              cardhtml += `<img loading="lazy" class="itemimage multi" onclick="cycleViews(this)" src="${data.images[img]}">`
            }
          }
            
          cardhtml += `</div>
          <div class="multiimgfront">
            <img loading="lazy" class="itemimage multi" onclick="cycleViews(this)" src="${data.images.Adult}">
          </div>
        </div>`
      }
      else if (imgCount == 1) {
        cardhtml += `<div class="itemimage"` 
        //if (Object.getOwnPropertyNames(data.images)[0] == "temp") {
        //    cardhtml += ` style="max-width:100px;max-height:100px;" `
        //}
        cardhtml += `><img loading="lazy" src="${data.images[Object.getOwnPropertyNames(data.images)[0]]}" ></div>`
      } else {
         cardhtml += `<div class="itemimage" style="max-width:50px;max-height:50px;"></div>` 
      }
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
        let cleanedReq = ''
        for (const req of data.combo.requirements) {
            if (chartRef.includes(req)) {
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
      if (data.combo['times']) {
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
    //let cardEl = cardDiv.children[0]
    return cardDiv;

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
    card = card.children[0]
    if (!dragonarium[dragonName]) {
      dragonarium[dragonName] = {"fav": 0, "status": "init"};
      initDiv.appendChild(card);
    }
    else if (dragonarium[dragonName].status == "init") {
        initDiv.appendChild(card);
    }
    else if (dragonarium[dragonName].status == "acquired") {
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
    else {
      console.log('???? what');
    }
    if (Number(dragonarium[dragonName].fav) == 1) {
      card.querySelector('.favc').click()
      //card.parentElement.children[0].before(card);
      //card.classList.add('favourite')
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

document.addEventListener("DOMContentLoaded", function() {
    console.log('loaded dom!');
    allDragonData = JSON.parse(document.getElementById('dragondata').textContent);
    allDragonNames = Object.getOwnPropertyNames(allDragonData);
    addCheckListeners();
    initDiv = document.querySelector('#unacquiredCards');
    wantDiv = document.querySelector('#wantCards');
    haveDiv = document.querySelector('#haveCards');
    shadowDiv = document.querySelector('#shadowCards');
    setTabs();
    makeCards();
    document.querySelector('.oopsie').style.display = 'none';
});


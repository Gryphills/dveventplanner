


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
  for (const tabButton of document.querySelectorAll('.tab-button')) {
    tabButton.addEventListener('click', function(e) {
      let tabDivArr = Array.from(document.querySelector('.tab').parentNode.children)
      let tabButtArr = Array.from(document.querySelector('.tab').parentNode.children)
      for (i=0;i<tabButtArr.length;i++) {
        let tabButton = tabButtArr[i]
        tabButton.classList.remove('open')
      }
      e.currentTarget.classList.add('open')
      for (i=0;i<tabDivArr.length;i++) {
        let tabdiv = tabDivArr[i]
        tabdiv.classList.remove('open')
        if (tabArr.indexOf(tabDivArr) == (tabButtArr.indexOf(e.currentTarget))) {
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
  saveData()
}

function wantCard(button) {
  let el = button.closest('.dragonCard');
  if (Number(el.dataset.toggle) == 0) {
    button.dataset.toggle = 1;
    if (el.classList.contains('favourite')) {
      wantDiv.children[0].before(el)
    } else {
      wantDiv.appendChild(el)
    }
  } else {
    button.dataset.toggle = 0;
    if (el.classList.contains('favourite')) {
      initDiv.children[0].before(el)
    } else {
      initDiv.appendChild(el)
    }
  }
  dragonarium[el.name].fav = button.dataset.toggle;
  saveData()
}

function haveCard(button) {
  let el = button.closest('.dragonCard');
  if (Number(button.dataset.toggle) == 0) {
    if (el.classList.contains('favourite')) {
      haveDiv.children[0].before(el)
    } else {
      haveDiv.appendChild(el)
    }
  } else {
    button.dataset.toggle = 0;
    if (el.classList.contains('favourite')) {
      initDiv.children[0].before(el)
    } else {
      initDiv.appendChild(el)
    }
  }
  dragonarium[el.name].fav = button.dataset.toggle;
  saveData()
}

function shadowCard(button) {
  let el = button.closest('.dragonCard');
  if (Number(button.dataset.toggle) == 0) {
    button.dataset.toggle = 1;
    if (el.classList.contains('favourite')) {
      shadowDiv.children[0].before(el)
    } else {
      shadowDiv.appendChild(el)
    }
  } else {
    button.dataset.toggle = 0;
    if (el.classList.contains('favourite')) {
      initDiv.children[0].before(el)
    } else {
      initDiv.appendChild(el)
    }
  }
  dragonarium[el.name].fav = button.dataset.toggle;
  saveData()
}

function hideBreeds(el) {
  let cardsDiv = el.closest('.settings-buttons').nextElementSibling;
  if (el.checked) {
    for (const card of cardsDiv.children) {
      card.querySelector('.breedingInfo').classList.add('hidden')
    }
  } else {
    for (const card of cardsDiv.children) {
      card.querySelector('.breedingInfo').classList.remove('hidden')
    }
  }
}

function buildDragonCard(name, data) {
 let cardhtml = 
 `<div class="dragonCard" name=${name}>
    <div class="minibuttons">
        <div class="minibutton favc" data-toggle=0 onclick="favouriteCard(this)" style="background-color: #bcb8f5; margin-bottom:15px;">❤<div class="tooltip">Favourite</div></div>
        <div class="minibutton wantc" data-toggle=0 onclick="wantCard(this)" style="background-color: #bcb8f5;">✦<div class="tooltip">Want</div></div>
        <div class="minibutton havec" data-toggle=0 onclick="haveCard(this)" style="background-color: #bcb8f5;">✔<div class="tooltip">Acquired</div></div>
        <div class="minibutton shadowc" data-toggle=0 onclick="shadowCard(this)" style="background-color: #bcb8f5;">🗡<div class="tooltip">Shadow Realm</div></div>
    </div>`
    if (data.limited == "Y") {
      cardhtml +=`<div class="limited"></div>`
    }
    cardhtml +=`<h2 class="itemname">${name} Dragon</h2>`
    
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
    else {
      cardhtml += `<div class="itemimage"><img loading="lazy" src="${data.images[Object.getOwnPropertyNames(data.images)[0]]}"></div>`
    }
    
    cardhtml += `<div class="breedinginfo hidden">`

    let skipThing = false;
    if (data.combo['special']) {
      if (data.combo['special'].includes('Evolve')) {
        cardhtml += `${data.combo.special}`
        skipThing = true
      }
    }
    if (!skipThing) {
      cardhtml += `<h4>Breeding Info:</h4><br>`
      if (data.combo['special']) {
        cardhtml += `<h3>${data.combo.special}</h3>`
      }
      if (data.combo['requirements']) {
        cardhtml += `<h3>${data.combo.requirements}</h3>`
      }
      if (data.combo['times']) {
        cardhtml += `<p>${data.times}</p>`
      }
      if (data.breedingOdds) {
        if (data.breedingOdds.base) {
          cardhtml += `<p>Base: ${data.breedingOdds.base} / Coop Clone: ${data.breedingOdds.social}</p><br>`
        }
      }
      cardhtml +=   `</div>
      </div>`
    }
    let cardEl = document.createElement('div');
    cardEl.innerHTML = cardhtml;
    return cardEl;

}


function makeCards() {
  for (const dragonName of allDragonNames) {
    let card = buildDragonCard(dragonName, allDragonData[dragonName])
    if (!eventObj.dragonarium) {
      eventObj.dragonarium = {}
    }
    if (!eventObj.dragonarium[dragonName]) {
      eventObj.dragonarium[dragonName] = {"fav": 0, "status": "unacquired"}
      initDiv.appendChild(card);
    }
    else if (eventObj.dragonarium[dragonName].status == "acquired") {
      card.querySelector('.havec').click();
    }
    else if (eventObj.dragonarium[dragonName].status == "want") {
      wantDiv.appendChild(card);
      card.querySelector('.wantc').click();
    }
    else if (eventObj.dragonarium[dragonName].status == "shadow") {
      shadowDiv.appendChild(card);
      card.querySelector('.shadowc').click();
    }
    if (Number(eventObj.dragonarium[dragonName].fav) == 1) {
      card.querySelector('.favc').click()
      //card.parentElement.children[0].before(card);
      //card.classList.add('favourite')
    }
  }
}

function addCheckListeners() {
  let checks = document.querySelectorAll('input [type="checkbox"]');
  for (const check of checks) {
    check.addEventListener("click", hideBreeds(el));
  }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log('loaded dom!');
    allDragonData = JSON.parse(document.getElementById('dragondata').innerText);
    allDragonNames = Object.getOwnPropertyNames(allDragonData);
    addCheckListeners();
    initDiv = document.querySelector('#unacquiredCards');
    wantDiv = document.querySelector('#wantCards');
    haveDiv = document.querySelector('#haveCards');
    shadowDiv = document.querySelector('#shadowCards');
    setTabs()
    makeCards();
});


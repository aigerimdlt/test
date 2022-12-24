var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const domElements = {                                                     
  results: document.getElementById('results'),
  search: {
      input: document.getElementById('myBtn'),
      button: document.getElementById('search-button'),
  },
  filters: {
    category: document.getElementById('filter-category'),
    role: document.getElementById('filter-role'),
    responsible: document.getElementById('filter-responsible'),
    director: document.getElementById('filter-director'),
    status: document.getElementById('filter-status'),
    deadline: document.getElementById('filter-deadline'),

  }
}
// document.getElementById("clearButton").onclick = function(e) {
//   document.getElementById("filter-director").value = "";
// }
document.querySelectorAll("clearButton")
.forEach(function (elem) {
  elem.onclick = function (e) {
    let selector = this.dataset.clearSelector;
    document.querySelectorAll(selector)
    .forEach(function (item) {
      item.value = "";
    });
  };
});

function generateCards(data) {       
  const cards = []
  for(let i = 0; i < data.length; i++) {
    let countClass = 'card__count'
    let countValue = cardsData[i].params.role
    if (data[i].params.role === 'Указан') {
      countClass = 'card__count card__count_empty'
    
    }
cards.push(`
<div class="card">
  <div class="${countClass}">
    <p class="card__title">${data[i].title}</p>
  </div>
</div>
  `)
  }
  return cards
}
const cardsArr = generateCards(cardsData)
domElements.results.innerHTML = cardsArr.join('')

{
  let searchValue = ''
  domElements.search.input.oninput = (event) => {
      searchValue = event.target.value
    filterSearch()
  }
  domElements.search.button.onclick = () => {
      filterSearch()
    
  }
function filterSearch() {
  const rgx = new RegExp(searchValue, 'i')     
  let filteredCardsData = cardsData.filter(card => {
    if (rgx.test(card.title)) {
      return true
    } else {
      return false
    }
  })
  const newFilteredCardsHTML = generateCards(filteredCardsData)
  domElements.results.innerHTML = newFilteredCardsHTML.join('')
}
}

{
  const filtersType = [
    'category',
    'status',
    'role',
    'responsible',
    'deadline',
    'director'
   ]
   function filterSelect(filterType) {
    domElements.filters[filterType].onchange = (event) => {
          const value = event.target.value
          const filteredCards = cardsData.filter(card => {
            const reg = new RegExp(value)
            if (reg.test(card.params[filterType])) {
              return true
            } else {
              return false
            }
          })
          const filteredCardsHTML = generateCards(filteredCards)
          domElements.results.innerHTML = filteredCardsHTML.join('')
        }
   }
   filtersType.forEach(type => filterSelect(type))
   function checkOther (filtersType, filteredCards){
    let moreFilteredCards
    filtersType.forEach(type => {
      const value = domElements.filters[type].value
      const reg = new RegExp(value)
     
    })
   }

}





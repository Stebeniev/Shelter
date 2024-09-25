function mainPage() {
  let currentCards = []

  /* Func adds cards to carousel in Main page */
  function addCardsToCarousel(pets) {
    const carouselWrapper = document.querySelector('.carousel-wrapper')
    if (carouselWrapper) {
      carouselWrapper.innerHTML = ''
      currentCards = getRandomCards(3, pets.map(createCard))
      currentCards.forEach(card => carouselWrapper.appendChild(card))
      cardEvents()
    } else {
      console.error('.carousel-wrapper not found')
    }
  }

  /* Func updates the carousel depending on the screen size */
  function getCardsCount() {
    const width = window.innerWidth
    if (width >= 1280) {
      return 3
    } else if (width >= 1184) {
      return 3
    } else if (width >= 754) {
      return 2
    } else {
      return 1
    }
  }

  function updateCarousel() {
    const cardsCount = getCardsCount()
    displayCards(currentCards.slice(0, cardsCount))
  }

  function displayCards(cards) {
    const carouselWrapper = document.querySelector('.carousel-wrapper')
    if (carouselWrapper) {
      carouselWrapper.innerHTML = ''
      cards.forEach(card => carouselWrapper.appendChild(card))
      cardEvents()
    } else {
      console.error('.carousel-wrapper not found')
    }
  }

  function cardEvents() {
    const petsCards = document.querySelectorAll('.friends-cards')
    petsCards.forEach(function (petsCard) {
      petsCard.addEventListener('click', function () {
        const petId = this.getAttribute('id')
        updatePetsCard(petId)
        toggleMenu()
      })
    })
  }

  function handleArrowClick() {
    const carouselWrapper = document.querySelector('.carousel-wrapper')
    if (carouselWrapper) {
      carouselWrapper.classList.add('hidden')
      setTimeout(() => {
        currentCards = getRandomCards(3, pets.map(createCard))
        displayCards(currentCards)
        carouselWrapper.classList.remove('hidden')
      }, 500)
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    addCardsToCarousel(pets)

    const petsWrapper = document.querySelector('.pets-wrapper')
    const closeButton = document.querySelector('.pets-svg')

    function closeCard() {


      if (petsWrapper) {
        petsWrapper.classList.remove('active')
        // document.body.style.paddingRight = '';
        document.documentElement.style.overflow = ''
      }
    }

    if (closeButton) {
      closeButton.addEventListener('click', function () {
        closeCard()
      })
    }

    if (petsWrapper) {
      petsWrapper.addEventListener('click', function (e) {
        e.stopPropagation()
      })
    }

    const prevButtons = document.querySelectorAll('.arrow-prev, .prew-new-arrow')
    const nextButtons = document.querySelectorAll('.arrow-next, .next-new-arrow')

    prevButtons.forEach(button => {
      button.addEventListener('click', handleArrowClick)
    })

    nextButtons.forEach(button => {
      button.addEventListener('click', handleArrowClick)
    })

    window.addEventListener('resize', function () {
      updateCarousel()
      cardEvents()
    })
  })
}

mainPage()

function ourPetsPage() {
  let currentPage = 1
  let totalPages = calkPages()
  const cardsPerPage = 8
  let currentCards = []

  /* Func adds cards to section in OurPets page */
  function addCardsToSection(pets) {
    const cardsSection = document.querySelector('.cards')
    if (cardsSection) {
      cardsSection.innerHTML = ''
      currentCards = getRandomCards(cardsPerPage, pets.map(createCard))
      currentCards.forEach(card => cardsSection.appendChild(card))
      petCardEvents()
    } else {
      console.error('.cards not found')
    }
  }

  function calkPages() {
    const width = window.innerWidth
    if (width >= 1280) {
      return 6
    } else if (width >= 769) {
      return 6
    } else if (width === 768) {
      return 8
    } else if (width >= 480) {
      return 8
    } else {
      return 16
    }
  }

  function updatePagination() {
    const previousTotalPages = totalPages
    totalPages = calkPages()

    if (currentPage > totalPages) {
      currentPage = totalPages
    }
    pagination()

    if (previousTotalPages !== totalPages) {
      addCardsToSection(pets)
    }
  }

  function getPetsCards() {
    const width = window.innerWidth
    if (width >= 1280) {
      return 8
    } else if (width >= 769) {
      return 8
    } else if (width === 768) {
      return 6
    } else if (width >= 480) {
      return 4
    } else {
      return 3
    }
  }

  function updatePetsCards() {
    const cardsCount = getPetsCards()
    displayCards(currentCards.slice(0, cardsCount))
  }

  function displayCards(cards) {
    const cardsSection = document.querySelector('.cards')
    if (cardsSection) {
      cardsSection.innerHTML = ''
      cards.forEach(card => cardsSection.appendChild(card))
      petCardEvents()
    } else {
      console.error('.cards not found')
    }
  }

  function petCardEvents() {
    const petsCards = document.querySelectorAll('.friends-cards')
    petsCards.forEach(function (petsCard) {
      petsCard.addEventListener('click', function () {
        const petId = this.getAttribute('id')
        updatePetsCard(petId)
        toggleMenu()
      })
    })
  }

  function pagination() {
    const centralButton = document.querySelector('.central')
    const prevButton = document.querySelector('.prew')
    const nextButton = document.querySelector('.next')
    const rightToEndButton = document.querySelector('.right-to_end')
    const leftToEndButton = document.querySelector('.left-to_end')

    centralButton.textContent = currentPage

    if (currentPage === 1) {
      prevButton.classList.add('disable')
      prevButton.querySelector('path').setAttribute('fill', '#CDCDCD')
      prevButton.querySelector('rect').setAttribute('stroke', '#CDCDCD')

      leftToEndButton.classList.add('disable')
      leftToEndButton.querySelector('path').setAttribute('fill', '#CDCDCD')
      leftToEndButton.querySelector('rect').setAttribute('stroke', '#CDCDCD')
    } else {
      prevButton.classList.remove('disable')
      prevButton.style.cursor = 'pointer'
      prevButton.querySelector('path').setAttribute('fill', '#292929')
      prevButton.querySelector('rect').setAttribute('stroke', '#F1CDB3')
      prevButton.classList.add('arrow')

      leftToEndButton.classList.remove('disable')
      leftToEndButton.style.cursor = 'pointer'
      leftToEndButton.querySelector('path').setAttribute('fill', '#292929')
      leftToEndButton.querySelector('rect').setAttribute('stroke', '#F1CDB3')
      leftToEndButton.classList.add('arrow')
    }

    if (currentPage === totalPages) {
      nextButton.classList.add('disable')
      nextButton.querySelector('path').setAttribute('fill', '#CDCDCD')
      nextButton.querySelector('rect').setAttribute('stroke', '#CDCDCD')
      nextButton.classList.remove('arrow')

      rightToEndButton.classList.add('disable')
      rightToEndButton.querySelector('path').setAttribute('fill', '#CDCDCD')
      rightToEndButton.querySelector('rect').setAttribute('stroke', '#CDCDCD')
      rightToEndButton.classList.remove('arrow')
    } else {
      nextButton.classList.remove('disable')
      nextButton.style.cursor = 'pointer'
      nextButton.querySelector('path').setAttribute('fill', '#292929')
      nextButton.querySelector('rect').setAttribute('stroke', '#F1CDB3')
      nextButton.classList.add('arrow')

      rightToEndButton.classList.remove('disable')
      rightToEndButton.style.cursor = 'pointer'
      rightToEndButton.querySelector('path').setAttribute('fill', '#292929')
      rightToEndButton.querySelector('rect').setAttribute('stroke', '#F1CDB3')
      rightToEndButton.classList.add('arrow')
    }
  }

  function hoverArrowClick() {
    const cardsSection = document.querySelector('.cards')
    if (cardsSection) {
      cardsSection.classList.add('hidden')
      setTimeout(() => {
        currentCards = getRandomCards(8, pets.map(createCard))
        displayCards(currentCards)
        cardsSection.classList.remove('hidden')
      }, 500)
    }
  }

  function handleArrowClick(direction) {
    if (direction === 'next' && currentPage < totalPages) {
      currentPage++
    } else if (direction === 'prev' && currentPage > 1) {
      currentPage--
    } else if (direction === 'right-to_end' && currentPage < totalPages) {
      currentPage = totalPages
    } else if (direction === 'left-to_end' && currentPage > 1) {
      currentPage = 1
    }

    pagination()
    addCardsToSection(pets)
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.cards')) {
      addCardsToSection(pets)
    }

    const petsWrapper = document.querySelector('.pets-wrapper')
    if (petsWrapper) {
      petsWrapper.addEventListener('click', toggleMenu)
    } else {
      console.error('.pets-wrapper not found')
    }

    const prevButtons = document.querySelectorAll('.prew, .left-to_end')
    const nextButtons = document.querySelectorAll('.next, .right-to_end')

    prevButtons.forEach(button => {
      button.addEventListener('click', () => handleArrowClick('prev'))
    })

    prevButtons.forEach(button => {
      button.addEventListener('click', () => hoverArrowClick('prev'))
    })

    nextButtons.forEach(button => {
      button.addEventListener('click', () => handleArrowClick('next'))
    })

    nextButtons.forEach(button => {
      button.addEventListener('click', () => hoverArrowClick('next'))
    })

    document.querySelector('.left-to_end').addEventListener('click', () => handleArrowClick('left-to_end'))
    document.querySelector('.right-to_end').addEventListener('click', () => handleArrowClick('right-to_end'))

    document.querySelector('.left-to_end').addEventListener('click', () => hoverArrowClick('left-to_end'))
    document.querySelector('.right-to_end').addEventListener('click', () => hoverArrowClick('right-to_end'))
    window.addEventListener('resize', updatePetsCards)
    window.addEventListener('resize', () => {
      updatePagination()
      // updatePetsCards();
    })
  })
}

ourPetsPage()

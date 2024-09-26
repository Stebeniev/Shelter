const basePath = window.location.pathname.includes('pages/our-pets') ? '../../' : './';
const pets = JSON.parse(`[
  {
    "id": "1",
    "name": "Katrine",
    "img": "${basePath}assets/images/card-1.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "2",
    "name": "Jennifer",
    "img": "${basePath}assets/images/card-2.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "3",
    "name": "Woody",
    "img": "${basePath}assets/images/card-3.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "id": "4",
    "name": "Sophia",
    "img": "${basePath}assets/images/card-4.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "5",
    "name": "Timmy",
    "img": "${basePath}assets/images/card-5.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "id": "6",
    "name": "Charly",
    "img": "${basePath}assets/images/card-6.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "id": "7",
    "name": "Scarlett",
    "img": "${basePath}assets/images/card-7.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "8",
    "name": "Freddie",
    "img": "${basePath}assets/images/card-8.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  }
]`);

console.log(pets);


/* Create cards from JSON */
function createCard(pet) {
  const card = document.createElement('div');
  card.classList.add('friends-cards');
  card.setAttribute('id', `${pet.id}`);
  card.innerHTML = `
    <img src="${pet.img}" alt="${pet.name}">
    <p class="pets-name">${pet.name}</p>
    <button class="pets-btn" id="${pet.id}">Learn more</button>
  `;
  return card;
}


/* Func updates pet card information from JSON */
function updatePetsCard(petsId) {
  const updatePets = pets.find((card) => card.id === petsId);

  if (!updatePets) {
    console.error(`Pet with id ${petsId} not found`);
    return;
  }

  const imgEl = document.querySelector('.pets-img');
  if (imgEl) {
    imgEl.src = updatePets.img;
  } else {
    console.error('Image element not found');
  }

  const nameEl = document.querySelector('.pets-name');
  if (nameEl) {
    nameEl.textContent = updatePets.name;
    // nameEl.classList.remove('pets-name');
    nameEl.classList.add('pets-name__card');
  }

  const breedEl = document.querySelector('.pets-breed');
  if (breedEl) {
    breedEl.textContent = `${updatePets.type} - ${updatePets.breed}`;
  }

  const aboutPetsEl = document.querySelector('.about-pets');
  if (aboutPetsEl) {
    aboutPetsEl.textContent = updatePets.description;
  }

  const ageEl = document.querySelector('.age');
  if (ageEl) {
    ageEl.innerHTML = `<span>Age:</span> ${updatePets.age}`;
  }

  const inoculationsEl = document.querySelector('.inoculations');
  if (inoculationsEl) {
    inoculationsEl.innerHTML = `<span>Inoculations:</span> ${updatePets.inoculations.join(', ')}`
  }

  const diseasesEl = document.querySelector('.diseases');
  if (diseasesEl) {
    diseasesEl.innerHTML = `<span>Diseases:</span> ${updatePets.diseases.join(', ')}`
  }

  const parasitesEl = document.querySelector('.parasites');
  if (parasitesEl) {
    parasitesEl.innerHTML = `<span>Parasites:</span> ${updatePets.parasites.join(', ')}`
  }
}

/* Func receives a random value when selecting cards*/
function getRandomCards(count, cards) {
  const indices = [];
  while (indices.length < count) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    if (!indices.includes(randomIndex)) {
      indices.push(randomIndex);
    }
  }
  return indices.map(index => cards[index]);
}
// const extendedPets = [];
// for (let i = 0; i < 6; i++) {
//   extendedPets.push(...pets.map(pet => ({ ...pet })));
// }
//
// function getRandomCards(count, cardsArray) {
//   const shuffled = cardsArray.sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// }
//
function toggleMenu() {
  const petsWrapper = document.querySelector('.pets-wrapper');

  if (petsWrapper) {
    petsWrapper.classList.toggle('active');

    if (petsWrapper.classList.contains('active')) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  } else {
    console.error('.pets-wrapper not found');
  }
}

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import axios from 'axios';
import { assignModal } from './pop_up_exercise';
import { makePagination } from './makePagination';
import { capitalize } from './capitalize_word';
const exercisesList = document.querySelector('.exercises-list');
let activeFilter = 'Muscles';
let activePage = 1;
const itemsPerPage = 12;
let totalPages;
let totalPagesforCards;
// const form = document.getElementById("exercises-search-form");
// const searchInput = form.querySelector(".exercises-search-input");
// const clearButton = document.querySelector('.exercises-inputclear-icon');

async function getMusclePage(filter, page) {
  let searchParams = new URLSearchParams({
    filter: filter,
    page: page,
    limit: itemsPerPage,
  });
  try {
    await axios.get(`https://energyflow.b.goit.study/api/filters?${searchParams}`)
      .then(response => {
        let musclesResult = response.data.results;
        totalPages = response.data.totalPages;
        // console.log('Total Pages: ', totalPages);

        const markup = musclesResult.map(({ name, filter, imgUrl }) => {
          return `<li class="exercises-list-item" data-name="${name}" data-filter="${filter}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${imgUrl}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${capitalize(name)}</p>
            <p class="exercises-item-subname">${filter}</p>
            </div>
          </li>`;
        })
          .join("");
        exercisesList.insertAdjacentHTML("beforeend", markup);
        assignClicktoCards();
      })
      .catch(error => { console.log(error.response.data.message) });
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong, try again');
  }
}
await getMusclePage(activeFilter, activePage);

makePagination(12, totalPages).on('afterMove', ({ page }) => {
  // console.log('Moved', page);
  exercisesList.innerHTML = "";
  getMusclePage(activeFilter, page);
});

function assignClicktoCards() {
  let page = activePage;
  const cards = document.querySelectorAll(".exercises-list-item");
  for (const card of cards) {
    card.addEventListener("click", async function (event) {
      const name = event.currentTarget.dataset.name
      const filter = event.currentTarget.dataset.filter
      // setDisplayCards(false)
      await getExercises({ filter, name, page });

      makePagination(10, totalPagesforCards).on('afterMove', async ({ page }) => {
        exercisesList.innerHTML = "";
        await getExercises({ filter, name, page });
      });
    });
  }
}


const actionButtons = document.querySelectorAll(".exercises-filter-button");
for (const card of actionButtons) {
  card.classList.remove("foo");
  card.addEventListener("click", async function (event) {
    const name = event.currentTarget.dataset.name;
    event.currentTarget.classList.add("foo");
    console.dir(event.currentTarget.classList);

    activeFilter = name;
    console.log('Clicked the button: ', name);
    exercisesList.innerHTML = "";
    await getMusclePage(name, activePage);
    makePagination(12, totalPages).on('afterMove', ({ page }) => {
      console.log('Moved', page);
      console.log('Total Pages Pressed', totalPages);
      exercisesList.innerHTML = "";
      getMusclePage(activeFilter, page);
    });
    console.log(name, activePage);
  });
}




// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const query = searchInput.value.trim().toLowerCase();

//   try {
//     // await getExercises({ "bodypart"});
//   } catch (error) {
//     console.error(error);
//   }
// });

async function getExercises({ filter, name, page }) {
  const filterParamMap = {
    'Body parts': 'bodypart',
    'Muscles': 'muscles',
    'Equipment': 'equipment'
  };
  const filterParam = filterParamMap[filter];

  await axios.get(`https://energyflow.b.goit.study/api/exercises?${filterParam}=${name.toLowerCase()}&page=${page}&limit${itemsPerPage}`)
    .then(response => {
      let musclesResult = response.data.results;
      totalPagesforCards = response.data.totalPages;
      console.log("totalPagesforCards", totalPagesforCards, "musclesResult:", response.data);
      // console.log(totalPages, response.data);
      const markup = musclesResult.map(({ bodyPart, burnedCalories, name, _id, target, rating }) => {
        return `<li class="exercises-item-page2">
            <div class="exercises-card">
              <div class="exercises-card-top">
                <div class="exercises-kind-wrapper">
                  <p class="exercises-card-kind">WORKOUT</p>
                  <div class="exercises-card-rating">
                    <p class="exercises-rating-value">${rating}</p>
                    <svg
                      class="exercises-star-icon"
                      width="18"
                      height="18"
                      aria-label="star icon"
                    >
                      <use
                        href="./img/exercises/exercises-sprite.svg#icon-star"
                      ></use>
                    </svg>
                  </div>
                </div>
                <button class="exercises-start-button" id=${_id}>
                  Start
                  <svg class="exercises-start-icon" width="14" height="14">
                    <use
                      href="./img/exercises/exercises-sprite.svg#icon-arrow"
                    ></use>
                  </svg>
                </button>
              </div>
              <div class="exercises-card-namewrapper">
                <svg
                  class="exercises-star-icon"
                  width="24"
                  height="24"
                  aria-label="star icon"
                >
                  <use
                    href="./img/exercises/exercises-sprite.svg#icon-icon"
                  ></use>
                </svg>
                <p class="exercises-card-exname">${capitalize(name)}</p>
              </div>
              <ul class="exercises-card-info">
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Burned calories: </span>${burnedCalories}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Body part: </span>${capitalize(bodyPart)}
                </li>
                <li class="exercises-info-data">
                  <span class="exercises-data-name">Target: </span>${capitalize(target)}
                </li>
              </ul>
            </div>
          </li> `;
      })
        .join("");
      exercisesList.innerHTML = "";
      exercisesList.insertAdjacentHTML("beforeend", markup);
      assignModal();

    })
    .catch(error => { console.log(error.response.data.message) });
}


//Эту функцию я не использую
function getExercisesPage({ filter, name, page }) {
  const filterParamMap = {
    'Body parts': 'bodypart',
    'Muscles': 'muscles',
    'Equipment': 'equipment'
  };
  const filterParam = filterParamMap[filter];

  axios.get(`https://energyflow.b.goit.study/api/exercises?${filterParam}=${name.toLowerCase()}&page=${page}&limit${itemsPerPage}`)
    .then(response => {
      let musclesResult = response.data.results;
      let { totalPages } = response.data;
      const markup = musclesResult.map(({ name, filter, imgUrl }) => {
        return `<li class="exercises-list-item" data-name="${name}" data-filter="${filter}">
            <div class="exercises-item"
            style="background:
            linear-gradient(0deg,rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%),
            url(${imgUrl}),lightgray -16.825px -9.156px / 128.765% 116.922% no-repeat; 
            background-size: cover;">
            <p class="exercises-item-name">${capitalize(name)}</p>
            <p class="exercises-item-subname">${filter}</p>
            </div>
          </li>`;
      })
        .join("");
      exercisesList.innerHTML = "";
      exercisesList.insertAdjacentHTML("beforeend", markup);
    })
    .catch(error => {
      console.error('Error while fetching exercises:', error);
    });
}
/*
Задания

В вёрстку можно вносить любые изменения (добавлять классы, дата-артрибуты, id и так далее) без изменения внешнего вида. Нельзя изменять другие JS файлы, подключаемые к HTML

    1.  На первом экране вы видите 3 блока с class="features-content". Они внутри себя содержат <div class="content-hide" ></div>, который
        содержит необходимую информацию. При наведении курсора на div с class="features-content" сделайте так, чтобы <div class="content-hide" ></div>
        показывался, а когда уводили курор, то блок с class="features-content" становился предыдущих размеров. 

        P.S. Нормально, если при наведении на див с class="features-content" он становится оранжевым - это можно не фиксить
*/

const blocks = document.querySelectorAll(".features-content")
const hidedContent = document.querySelectorAll(".content-hide")
const hideText = 'content-hide'
const showText = 'content-show'

function showContent(ind){
  hidedContent.forEach((content, i) => {
    if (i === ind) {
      content.classList.add(showText)
      content.classList.remove(hideText)
    }
  })
}

function hideContent(array) {
  array.forEach((content) => {
    content.classList.add(hideText)
    content.classList.remove(showText)
  })
}

blocks.forEach((block, ind) => {
  block.addEventListener('mouseover', (event) => {
    hideContent(hidedContent)
    showContent(ind)
  })
})

blocks.forEach((block, ind) => {
  block.addEventListener('mouseout', (event) => {
    hideContent(hidedContent)
  })
})
/*

    2.  На втором экране вы видите табы:
        а) Best Education
        б) Top Managemen
        в) Quality Meeting
        При нажатии на каждый из этих табов (квадратик или название) сайтик должен показывать соответствующий блок информации
        с нужной фотографией, описанием и заголовком.

        P.S. Сейчас показаны все блоки с описанием
*/

const activeTab = 'ui-tabs-active'
const newDoc = document.querySelector('.tabs_list')
const tabs = newDoc.querySelectorAll('li')
const tabsContent = document.querySelectorAll(".tabs_cont")
const hide = 'tabs_unactive'
const show = 'tabs_active'

function showTabContent(ind){
  tabsContent.forEach((content, i) => {
    if (i === ind) {
      content.classList.add(show)
      content.classList.remove(hide)
    }
  })
}

function hideTabContent(array) {
  array.forEach((content) => {
    content.classList.add(hide)
    content.classList.remove(show)
  })
}

hideTabContent(tabsContent)

tabs.forEach((tab, ind) => {
  tab.addEventListener('click', (event) => {
    tabs.forEach((tab) => {
      tab.classList.remove(activeTab)})
    hideTabContent(tabsContent)
    tab.classList.add(activeTab)
    showTabContent(ind)
  })
})


/*
    3. На третьем экране есть отсчёт обратного времени. Сделайте так, чтобы обратный отсчёт был в режиме реального времени (посекундно).
    В качестве дедлайна (крайней даты) возьмите 31.12.2023

    P.S. Подсказка - в 22_js уроке в проекте Food разбирается, как работать со счётчиком
*/

const deadline = '2023-12-31'

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor((t - 10800000) / (1000 * 60 * 60 * 24)),
    seconds = Math.floor(((t - 10800000)  / 1000) % 60),
    minutes = Math.floor(((t - 10800000)  / 1000 / 60) % 60),
    hours = Math.floor((((t - 10800000)  / (1000 * 60 * 60)) % 24))

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return '0' + num
  } else {
    return num
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector('.days-count'),
    hours = timer.querySelector('.hours-count'),
    minutes = timer.querySelector('.minutes-count'),
    seconds = timer.querySelector('.seconds-count'),
    timeInterval = setInterval(updateClock, 1000)

  updateClock()

  function updateClock() {
    const t = getTimeRemaining(endtime)

    days.innerHTML = getZero(t.days)
    hours.innerHTML = getZero(t.hours)
    minutes.innerHTML = getZero(t.minutes)
    seconds.innerHTML = getZero(t.seconds)

    if (t.total <= 0) {
      clearInterval(timeInterval)
    }
  }
}

setClock('.counter', deadline)

/*

    4.  На 4-ом экране есть 5 карточек, заполненные информацией. Сделайте так, чтобы верстка подтягивалась и вставлялась в HTML документа
        из JS, а именно из массива coursesMass. Это значит, в самом HTML не должно быть верстки (вам нужно будет удалить),
        и она должна вставляться только через JS

*/

// Задание 4
const coursesMass = [
  {
    cardImg: {
      src: 'assets/images/courses-01.jpg',
      alt: 'Course #1',
    },
    header: 'Digital Marketing',
    descr:
      'You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-01.png',
      alt: 'Author #1',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-02.jpg',
      alt: 'Course #2',
    },
    header: 'Business World',
    descr:
      'Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.',
    authorImg: {
      src: 'assets/images/author-02.png',
      alt: 'Author #2',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-03.jpg',
      alt: 'Course #3',
    },
    header: 'Media Technology',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec.',
    authorImg: {
      src: 'assets/images/author-03.png',
      alt: 'Author #3',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-04.jpg',
      alt: 'Course #4',
    },
    header: 'Communications',
    descr:
      'Download free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-04.png',
      alt: 'Author #4',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-05.jpg',
      alt: 'Course #5',
    },
    header: 'Business Ethics',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.',
    authorImg: {
      src: 'assets/images/author-05.png',
      alt: 'Author #5',
    },
  },
]
const carouselWrapper = document.querySelector('.carousel__wrapper');

  coursesMass.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('carousel__item');
    const img = document.createElement('img');
    img.src = course.cardImg.src;
    img.alt = course.cardImg.alt;
    const content = document.createElement('div');
    content.classList.add('carousel__content');
    const header = document.createElement('h4');
    header.textContent = course.header;
    const descr = document.createElement('p');
    descr.textContent = course.descr;
    const lastRow = document.createElement('div');
    lastRow.classList.add('item__last-row');
    const authorImg = document.createElement('img');
    authorImg.src = course.authorImg.src;
    authorImg.alt = course.authorImg.alt;
    const textButton = document.createElement('div');
    textButton.classList.add('text-button-pay');
    const link = document.createElement('a');
    link.href = '#';
    link.innerHTML = 'Pay <i class="fa fa-angle-double-right"></i>';

    textButton.appendChild(link);
    lastRow.appendChild(authorImg);
    lastRow.appendChild(textButton);
    content.appendChild(header);
    content.appendChild(descr);
    content.appendChild(lastRow);
    card.appendChild(img);
    card.appendChild(content);

    carouselWrapper.appendChild(card);
  });

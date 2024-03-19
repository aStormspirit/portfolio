import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fb,
  python,
  ts,
  wp,
  skilla,
  mydiary,
  huberma,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Обо мне',
  },
  {
    id: 'work',
    title: 'Опыт',
  },
  {
    id: 'contact',
    title: 'Контакты',
  },
];

const services = [
  {
    title: 'Web Разработчик',
    icon: web,
  },
  {
    title: 'Системный администратор',
    icon: mobile,
  },
  {
    title: 'Backend Разработчик',
    icon: backend,
  },
  {
    title: 'Data engineer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Веб-разработчик',
    company_name: 'Проектная работа',
    icon: wp,
    iconBg: '#E6DEDD',
    date: 'Февраль 2021 - Март 2022',
    points: [
      'В качестве Веб-разработчик я приобрел опыт доработки сайтов на платформе Wordpress и версткой макетов сайта.',
      'Мои услуги включали в себя настройку и оптимизацию сайтов, разработку и внедрение пользовательских функций, а также улучшение дизайна и интерфейса.',
      'Кроме того, я также предоставлял консультации и обучение основам JavaScript, помогая клиентам освоить этот язык программирования для дальнейшего развития и оптимизации их веб-проектов.',
      'Мой опыт работы в позволил мне развить навыки коммуникации и управления проектами, а также научил быть гибким и эффективным в самостоятельной работе.',
    ],
  },
  {
    title: 'Python разработчик',
    company_name: 'SEO Marketing',
    icon: python,
    iconBg: '#383E56',
    date: 'Июнь 2022 - Апрель 2023',
    points: [
      'Разработка и поддержка телеграмм ботов используя Python и другие технологии.',
      'Создание веб-программ для автоматизации действий в браузере, что значительно повысило эффективность работы и сократило затраты времени на рутинные операции.',
      'Взаимодействие с командой SEO специалистов. Продвижение и улучшение сайтов.',
    ],
  },
  {
    title: 'JavaScript разработчик',
    company_name: 'Shopify',
    icon: ts,
    iconBg: '#383E56',
    date: 'Июль 2022 - Ноябрь 2023',
    points: [
      'Участвовал в разработке веб-приложений, на React для образовательного учереждения',
      'Сотрудничал в командке с другими разработчиками включая дизайнеров, разработчиков и других специалистов для создания высококачественных продуктов.',
      'Разработал приложение для производственной компании, на языке Typescript с использование фреймворка NextJS.',
      'Реализовал бизнес логику по требованию заказчика, что позволило увеличить общий оборот продаж на 15% за первый месяц.',
    ],
  },
  {
    title: 'Full stack разработчик',
    company_name: 'Кубатура',
    icon: fb,
    iconBg: '#E6DEDD',
    date: 'Ноябрь 2023 - Сегодня',
    points: [
      'Разработка веб-приложений для Bitrix24 с использованием технологий React и FastApi.',
      'Развертывания веб-приложений на сервере с помощью Docker и Nginx, а также настройка и запуск, добавление доменного имени и SSL сертификата.',
      'Обработка больших массивов данных в формате XML, CSV. Редактирование и анализ Таблиц с помощью Pandas.',
      'Написание программ для парсинга и разработка веб-приложений для эфективного анализа полученной информации.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Владимир оперативно откликнулся на заказ и быстро помог решить задачу с кодом. Услугами доволен. Рекомендую и сам при случае обращусь вновь. Успехов!.',
    name: 'Сегрей',
    designation: 'SEO specialist',
    company: 'Профи.ру',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Я раньше не встречал веб разработчика, кто так заботился о своих клиетнах как Владимир, спасибо ему за это!',
    name: 'Алина',
    designation: 'Контент менджер',
    company: 'Яндекс',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'После того как Владимир внедрил автоматизированную систему обзвона клиентов, наши продажи увеличились на 20%!',
    name: 'Елена',
    designation: 'Директор',
    company: 'Все на чай',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Интернет магазин Huberma',
    description:
      'Интернет магазин Huberma, позволяющий клиенту сделать заказ, из выбранной продукции, с оплатой и доставкой на дом',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'redux',
        color: 'pink-text-gradient',
      },
    ],
    image: huberma,
    source_code_link: 'https://www.huberma.ru/',
  },
  {
    name: 'Мой дневничок',
    description:
      'Веб приложение которое позволяет пользователю добавлять свои заметки, фильтровать их по дате, сортировать и читать',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'pink-text-gradient',
      },
    ],
    image: mydiary,
    source_code_link: 'https://my-diary-three.vercel.app/',
  },
  {
    name: 'Панель телефонии для колл-центра',
    description: 'Панель для телефонии, учета и просмотра звонков колл-центра',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: skilla,
    source_code_link: 'https://skilla-test-task-lime.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };

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
  carrent,
  jobit,
  tripguide,
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
      'В качестве Веб-разработчик я приобрел доработки сайтов на платформе Wordpress и версткой макетов сайта.',
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
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
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
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };

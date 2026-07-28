import {
  Home,
  Flame,
  Bike,
  Snowflake,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react'

export { Home, Flame, Bike, Snowflake, Phone, Mail, MapPin, Clock }

export const NAV_LINKS = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/reviews', label: 'Отзывы' },
  { to: '/contacts', label: 'Контакты' },
] as const

export const PHONE_NUMBER = '8 (800) 123-45-67'
export const PHONE_HREF = 'tel:+78001234567'
export const EMAIL = 'info@sanset.ru'
export const EMAIL_HREF = 'mailto:info@sanset.ru'
export const ADDRESS = 'Прохладная улица, 2, Ижевск'
export const WORK_HOURS = 'Ежедневно: 9:00 – 23:00'
export const CHECK_IN = 'Заезд с 14:00, выезд до 12:00'
export const BASE_NAME = 'Сансет'
export const YANDEX_MAPS_LINK = 'https://yandex.ru/maps/org/sanset/244654587026'
export const YANDEX_REVIEWS_LINK = '#'
export const TWOGIS_REVIEWS_LINK = '#'

export const CONTACT_ITEMS = [
  { icon: Phone, label: 'Телефон', value: PHONE_NUMBER, href: PHONE_HREF },
  { icon: Mail, label: 'Email', value: EMAIL, href: EMAIL_HREF },
  { icon: MapPin, label: 'Адрес', value: ADDRESS, href: YANDEX_MAPS_LINK },
  { icon: Clock, label: 'Часы работы', value: WORK_HOURS },
] as const

export const ADVANTAGES = [
  'Живописное место за городом',
  'Современный и чистый домик',
  'Баня с чаном на дровах',
  'Прокат техники с инструктором',
  'Бесплатная парковка',
  'Камера хранения багажа',
] as const

export const SERVICES_OVERVIEW = [
  {
    icon: Home,
    title: 'Аренда дома',
    description: 'Уютные дом со всеми удобствами. От 2 до 15 гостей.',
    price: 'от 3 500 ₽',
    image: './images/sanset.jpg',
  },
  {
    icon: Flame,
    title: 'Баня с чаном',
    slug: 'banya',
    description:
      '...',
    price: 'от 2 000 ₽',
    image: './images/sans2.jpg',
  },
  {
    icon: Bike,
    title: 'Прокат мототехники',
    description: 'Квадроциклы и мотоциклы для активного отдыха по лесным маршрутам.',
    price: 'от 1 500 ₽',
    image: './images/moto.jpg',
  },
  {
    icon: Snowflake,
    title: 'Прокат снегоходов',
    description: 'Зимние покатушки по заснеженным полям и лесам. Доступно с декабря.',
    price: 'от 3 000 ₽',
    image: './images/snow.jpg',
  },
] as const

export const SERVICES_DETAILED = [
  {
    icon: Home,
    title: 'Аренда домов',
    description:
      'Просторные домики с террасой и видом на озеро. В каждом доме — кухня, санузел, спальные места, отопление и Wi-Fi.',
    price: 'от 3 500 ₽/сутки',
    image: './images/sanset.jpg',
    features: [
      'Дом на 2–4 гостей — 3 500 ₽',
      'Дом на 4–6 гостей — 5 500 ₽',
      'Дом на 6–10 гостей — 8 000 ₽',
      'Постельное бельё, полотенца',
      'Собственная терраса с мангалом',
    ],
  },
  {
    icon: Flame,
    title: 'Баня с чаном',
    description:
      'Настоящая русская баня на дровах с горячим чаном. Идеально после дня на природе — расслабление и перезагрузка.',
    price: 'от 2 000 ₽/сеанс',
    image: './images/sans2.jpg',
    features: [
      'Чан на 4–6 человек — 2 000 ₽',
      'Чан на 8 человек — 3 500 ₽',
      'Баня + чан — 4 000 ₽',
      'Веники включены',
      'Сеанс — 3 часа',
    ],
  },
  {
    icon: Bike,
    title: 'Прокат мототехники',
    description:
      'Квадроциклы и питбайки для прогулок по лесным трассам. Инструктаж и защитная экипировка входят в стоимость.',
    price: 'от 1 500 ₽/час',
    image: './images/moto.jpg',
    features: [
      'Квадроцикл — 1 500 ₽/час',
      'Питбайк — 1 200 ₽/час',
      'Инструктаж бесплатно',
      'Шлем, защита включены',
      'Маршруты 5–25 км',
    ],
  },
  {
    icon: Snowflake,
    title: 'Прокат снегоходов',
    description:
      'Зимний драйв по заснеженным полям и лесным тропам. Трассы любой сложности, от прогулочных до экстремальных.',
    price: 'от 3 000 ₽/час',
    image: './images/snow.jpg',
    features: [
      'Снегоход 1-местный — 3 000 ₽',
      'Снегоход 2-местный — 4 500 ₽',
      'Инструктор — 1 500 ₽/час',
      'Шлем, очки, перчатки',
      'Доступно: декабрь–март',
    ],
  },
] as const

export const REVIEWS_DATA = [
  {
    name: 'Анна М.',
    rating: 5,
    text: 'Отдыхали семьёй на выходных. Домики чистые и уютные, баня с чаном — просто сказка! Вид на озеро потрясающий. Обязательно вернёмся!',
    date: '12 июня 2026',
    source: 'yandex' as const,
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Сергей К.',
    rating: 5,
    text: 'Брали квадроциклы на прокат, маршруты отличные, техника в хорошем состоянии. Персонал дружелюбный, всё объяснили новичкам.',
    date: '5 июня 2026',
    source: '2gis' as const,
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Ольга П.',
    rating: 4,
    text: 'Красивое место, тихо и спокойно. Зона очага с видом на закат — лучшее, что мы видели. Единственное — хотелось бы больше дров в комплекте.',
    date: '28 мая 2026',
    source: 'yandex' as const,
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Дмитрий В.',
    rating: 5,
    text: 'Приезжали компанией 8 человек. Сняли большой дом, заказали баню с чаном. Всё на высшем уровне! Чистота, сервис, природа вокруг.',
    date: '15 мая 2026',
    source: '2gis' as const,
    avatar: 'https://i.pravatar.cc/100?img=8',
  },
  {
    name: 'Елена Р.',
    rating: 5,
    text: 'Зимой катались на снегоходах — это невероятно! Трассы подготовлены, инструктор вежливый. После — отогрелись в бане. 10 из 10.',
    date: '20 апреля 2026',
    source: 'yandex' as const,
    avatar: 'https://i.pravatar.cc/100?img=9',
  },
  {
    name: 'Алексей Н.',
    rating: 4,
    text: 'Хорошая база отдыха. Понравилась зона очага — вечером с костром и видом на озеро. Домики уютные. Рекомендую для семейного отдыха.',
    date: '3 апреля 2026',
    source: '2gis' as const,
    avatar: 'https://i.pravatar.cc/100?img=11',
  },
  {
    name: 'Марина С.',
    rating: 5,
    text: 'Отмечали день рождения на базе. Заказывали большой дом и баню. Администраторы помогли с организацией, украсили домик. Спасибо!',
    date: '18 марта 2026',
    source: 'yandex' as const,
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Игорь Т.',
    rating: 5,
    text: 'Лучшее место для выходных! Тишина, природа, свежий воздух. Арендовали дом на 6 человек, всё необходимое есть. Обязательно приедем ещё.',
    date: '1 марта 2026',
    source: '2gis' as const,
    avatar: 'https://i.pravatar.cc/100?img=14',
  },
  {
    name: 'Татьяна К.',
    rating: 4,
    text: 'Очень живописное место. Фотографии получаются потрясающие. Чан под открытым небом — это мастхэв! Немного не хватило парковочных мест.',
    date: '14 февраля 2026',
    source: 'yandex' as const,
    avatar: 'https://i.pravatar.cc/100?img=16',
  },
] as const

export const SEO_HOME = {
  title: 'База отдыха «Сансет» — аренда домов, баня с чаном, прокат техники',
  description:
    'Загородный отдых. Аренда уютных домов, русская баня с чаном, зона очага, прокат квадроциклов и снегоходов. Бронирование онлайн.',
} as const

export const SEO_SERVICES = {
  title: 'Услуги и цены — База отдыха «Сансет»',
  description:
    'Полный список услуг с ценами: аренда домов от 3 500 ₽, баня с чаном от 2 000 ₽, зона очага, прокат мототехники и снегоходов.',
} as const

export const SEO_REVIEWS = {
  title: 'Отзывы — База отдыха «Сансет»',
  description: 'Честные отзывы гостей с Яндекс и 2ГИС. Средний рейтинг 4.8 на основе десятков отзывов.',
} as const

export const SEO_CONTACTS = {
  title: 'Контакты и бронирование — База отдыха «Сансет»',
  description:
    'Забронируйте отдых по телефону 8 (800) 123-45-67 или заполните форму онлайн. Удмуртская Республика, г.Ижевск.',
} as const

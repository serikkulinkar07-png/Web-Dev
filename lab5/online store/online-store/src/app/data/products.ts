import { Product } from '../models/product.model';

export const products: Product[] = [

  {
    id: 1,
    name: 'iPhone 15 128GB',
    description: 'Новейший смартфон Apple с мощным A16 чипом и улучшенной камерой.',
    price: 407174,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb5/h1c/85139470786590.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h37/h6e/85139470852126.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h2f/h1b/85139470917662.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    categoryId: 1,
    likes: 0
  },

  {
    id: 2,
    name: 'Samsung Galaxy S24',
    description: 'Флагманский Android-смартфон с мощным процессором и ярким дисплеем.',
    price: 500000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/1610157.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h5d/h7e/86120800821278.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h63/hf1/86120800886814.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h09/h45/86120800952350.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-fe-5g-8-gb-256-gb-chernyi-128143468/?c=750000000',
    categoryId: 1,
    likes: 0
  },

  {
    id: 3,
    name: 'Xiaomi Redmi Note 13',
    description: 'Популярный смартфон с большим экраном, хорошей камерой и мощной батареей.',
    price: 190963,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pdd/15562935.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h55/h4a/85945578893342.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h72/hf0/85945578958878.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hfa/hde/85945579024414.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000',
    categoryId: 1,
    likes: 0
  },


  {
    id: 12,
    name: 'Samsung Galaxy A55',
    description: 'Смартфон среднего класса с хорошей камерой и AMOLED экраном.',
    price: 269990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h20/85428948598814.png?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/c/smartphones/',
    categoryId: 1,
    likes: 0
  },
  {
    id: 13,
    name: 'iPhone 13 128GB',
    description: 'Популярный iPhone с отличной камерой и производительностью.',
    price: 330990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/c/smartphones/',
    categoryId: 1,
    likes: 0
  },


  {
    id: 4,
    name: 'Lenovo IdeaPad 3',
    description: 'Надежный ноутбук для учебы и работы с хорошей производительностью.',
    price: 166990,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h21/h5c/85887162990622.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hbe/hfb/85887163056158.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h5c/hb1/85887163121694.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
    categoryId: 2,
    likes: 0
  },

  {
    id: 11,
    name: 'Apple MacBook Air 15',
    description: 'Легкий и мощный ноутбук Apple для работы и учебы.',
    price: 728995,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pfc/pa1/36912234.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h7d/h59/64050921127966.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc0/h8a/64050921259038.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h16/hc6/64050921390110.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2025-16-gb-ssd-256-gb-macos-mw1l3ru-a-138172227/?c=750000000',
    categoryId: 2,
    likes: 0
  },


  {
    id: 14,
    name: 'ASUS VivoBook 15',
    description: 'Универсальный ноутбук для учебы и офиса.',
    price: 398997,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h98/85775243247646.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/c/notebooks/',
    categoryId: 2,
    likes: 0
  },
  {
    id: 15,
    name: 'HP Pavilion 15',
    description: 'Хороший ноутбук для повседневных задач и мультимедиа.',
    price: 449999,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/hb6/82089377726494.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/c/notebooks/',
    categoryId: 2,
    likes: 0
  },
  {
    id: 16,
    name: 'Acer Aspire 5',
    description: 'Надежный ноутбук с хорошим соотношением цена/качество.',
    price: 399972,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h73/86421628518430.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/c/notebooks/',
    categoryId: 2,
    likes: 0
  },


  {
    id: 5,
    name: 'Apple AirPods 2',
    description: 'Беспроводные наушники Apple с качественным звуком и удобной посадкой.',
    price: 107580,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    images: [
      'https://fdn2.gsmarena.com/vv/pics/apple/apple-airpods-2-1.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h72/h8f/64054820552734.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc4/h4c/64054820683806.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    categoryId: 3,
    likes: 0
  },

  {
    id: 6,
    name: 'JBL Tune 510BT',
    description: 'Bluetooth-наушники с мощным басом и долгой работой от батареи.',
    price: 12418,
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/61kFL7ywsZS._AC_SL1500_.jpg',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/hfb/84713806065694.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h4a/h0d/84713806131230.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h8d/h3f/84713806196766.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
    categoryId: 3,
    likes: 0
  },


  {
    id: 17,
    name: 'Sony WH-CH520',
    description: 'Легкие Bluetooth-наушники с хорошей автономностью.',
    price: 18505,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hed/hd3/84007329103902.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/c/headphones/',
    categoryId: 3,
    likes: 0
  },
  {
    id: 18,
    name: 'Xiaomi Redmi Buds 5',
    description: 'TWS-наушники с шумоподавлением и удобной посадкой.',
    price: 25850,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h8d/84992684621854.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/c/headphones/',
    categoryId: 3,
    likes: 0
  },
  {
    id: 19,
    name: 'Marshall Major IV',
    description: 'Стильные on-ear наушники с мощным звуком.',
    price: 18759,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/c/headphones/',
    categoryId: 3,
    likes: 0
  },


  {
    id: 7,
    name: 'Logitech G102',
    description: 'Игровая мышь с высокой точностью и подсветкой RGB.',
    price: 5999,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h55/hb7/64034620526622.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9c/hc6/64034620657694.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h21/h06/64034620788766.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
    categoryId: 4,
    likes: 0
  },

  {
    id: 8,
    name: 'Redragon Anubis',
    description: 'Механическая клавиатура с подсветкой и прочным корпусом.',
    price: 32335,
    rating: 4.4,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/h05/67855040479262.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf3/64370608201758.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h7a/h12/64370608332830.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h31/64370608463902.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/redragon-anubis-70505-chernyi-137431624/?c=750000000',
    categoryId: 4,
    likes: 0
  },

  {
    id: 9,
    name: 'Power Bank Xiaomi 10000mAh',
    description: 'Компактный внешний аккумулятор с быстрой зарядкой.',
    price: 11990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/p5d/92083429.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfa/h68/64036417011742.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h0d/h12/64036417142814.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h63/hbc/64036417273886.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-xiaomi-power-bank-10000mah-integrated-cable-22-5-w-vhod-usb-c-usb-c-vyhod-usb-a-usb-c-usb-c-ice-blue-gl-10000-mach-22-5-vt-goluboi-153733621/?c=750000000',
    categoryId: 4,
    likes: 0
  },

  {
    id: 10,
    name: 'Apple Watch SE',
    description: 'Умные часы Apple с фитнес-функциями и отслеживанием здоровья.',
    price: 139000,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p1a/p83/5495067.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h7d/h59/64050921127966.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc0/h8a/64050921259038.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h16/hc6/64050921390110.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-m-l-40-mm-bezhevyi-bezhevyi-129157052/?c=750000000',
    categoryId: 4,
    likes: 0
  },


  {
    id: 20,
    name: 'USB-C Charger 20W',
    description: 'Быстрая зарядка USB-C для смартфонов и планшетов.',
    price: 3500,
    rating: 4.5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p98/78301747.jpg?format=gallery-medium',
    images: [],
    link: 'https://kaspi.kz/shop/c/accessories/',
    categoryId: 4,
    likes: 0
  }
];

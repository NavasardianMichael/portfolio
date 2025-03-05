import { generateRequiredStringSchema } from 'helpers/functions/commons'

export const COMMON_SCHEMA_GENERATORS = {
  email: generateRequiredStringSchema('Email').email('Enter a valid email'),
  password: generateRequiredStringSchema('Password').min(8, 'Password should be of minimum 8 characters length'),
}

export const links = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Browse Cars', href: '/posts' },
  { name: 'Post Your Car', href: '/posts/create' },
  { name: 'Subscriptions', href: '/subscriptions' },
  { name: 'Countries', href: '/countries' },
  // { name: 'Support', href: '/help' }
];

export const images = [
  'https://www.byd.com/content/dam/byd-site/en/banner/banner-02.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/2026-kia-sportage-hybrid-pr-107-673f7c8a4a148.jpg',
  'https://www.byd.com/content/dam/byd-site/en/banner/banner-02.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/2026-kia-sportage-hybrid-pr-107-673f7c8a4a148.jpg',
  'https://www.byd.com/content/dam/byd-site/en/banner/banner-02.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/2026-kia-sportage-hybrid-pr-107-673f7c8a4a148.jpg',
  'https://www.byd.com/content/dam/byd-site/en/banner/banner-02.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/2026-kia-sportage-hybrid-pr-107-673f7c8a4a148.jpg',
  'https://www.byd.com/content/dam/byd-site/en/banner/banner-02.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/2026-kia-sportage-hybrid-pr-107-673f7c8a4a148.jpg',
  'https://www.byd.com/content/dam/byd-site/en/banner/banner-02.jpg',
  'https://hips.hearstapps.com/hmg-prod/images/2026-kia-sportage-hybrid-pr-107-673f7c8a4a148.jpg',
];

export const carData = [
  { title: 'Наличие', description: 'В наличии' },
  { title: 'Поколение', description: 'III (G01) Рестайлинг' },
  { title: 'Год выпуска', description: '2021' },
  { title: 'Пробег', description: '54 500 км' },
  { title: 'Кузов', description: 'Внедорожник 5 дв.' },
  { title: 'Цвет', description: 'Синий' },
  { title: 'Двигатель', description: '3.0 л / 387 л.с. / Бензин' },
  { title: 'Комплектация', description: 'M40i M Special' },
  { title: 'Владельцы', description: '1 владелец' },
  { title: 'ПТС', description: 'Оригинал' },
  { title: 'Таможня', description: 'Растаможен' },
];

export const cards = [...Array(8)];  // Creates an array of 40 items, or replace with your actual data

export const subscriptionPlans = [
  {
    name: "Basic Plan",
    price: "$0",
    time: "/free",
    isPopular: false,
    features: [
      "Post 1 car listing for free",
      "View car listings without contact details",
      "Access to general search filters (e.g., brand, model, price range)",
      "Basic support (response within 48 hours)"
    ],
  },
  {
    name: "Pro Plan",
    price: "$10",
    time: "/month",
    isPopular: true,
    features: [
      "Post up to 5 car listings per month",
      "Promote 1 car listing as a 'Top Post' for better visibility",
      "Access detailed search filters (e.g., mileage, year, clearance cost)",
      "Priority support (response within 24 hours)",
      "Discount on additional features ($5 off VIP posts)"
    ],
  },
  {
    name: "VIP Plan",
    price: "$25",
    time: "/month",
    isPopular: false,
    features: [
      "Post unlimited car listings",
      "Automatically feature 3 VIP posts every month",
      "Listings shared in the Telegram VIP channel",
      "Access advanced analytics (e.g., listing views, engagement data)",
      "Premium support (response within 12 hours)",
      "Free VIN code auto-fill feature for car details"
    ],
  }
];

export const markersOfMap = [
  { title: "Russia", position: "55.7558,37.6173" },  // Moscow
  { title: "Germany", position: "52.5200,13.4050" },  // Berlin
  { title: "Georgia", position: "41.7151,44.8271" },  // Tbilisi
  { title: "China", position: "39.9042,116.4074" },   // Beijing
  { title: "Poland", position: "52.2298,21.0118" },   // Warsaw
  { title: "Uzbekistan", position: "41.2995,69.2401" },  // Tashkent
  { title: "Latvia", position: "56.9460,24.1059" },   // Riga
  { title: "Lithuania", position: "54.6892,25.2798" },  // Vilnius
  { title: "Belarus", position: "53.9,27.5667" },    // Minsk
  { title: "United Arab Emirates", position: "23.4241,53.8478" },  // Abu Dhabi
  { title: "Kazakhstan", position: "51.1694,71.4491" },  // Nur-Sultan (formerly Astana)
  { title: "Kyrgyzstan", position: "42.8746,74.5698" },  // Bishkek
  { title: "Ukraine", position: "50.4501,30.5236" },   // Kyiv
];
export const markerForBusiness = [
  { title: "Armenia, Yerevan, Andraniki St., 50/1 Building", position: "40.1774,44.5042" }
]

export const footerData = [
  {
    title: "Shopping Tools",
    links: [
      "Trade-In Value",
      "Build Your Eurasia",
      "Search Inventory",
      "Find a Dealer",
      "Shop Online With SmartPath",
      "Local Specials",
      "What Fits My Budget",
      "Payment Estimator",
      "Request a Quote",
      "Eurasia Certified Used Vehicles",
      "Buy Parts & Accessories",
    ],
  },
  {
    title: "Vehicles",
    links: [
      "All Eurasia Vehicles",
      "SUVs",
      "Trucks",
      "Cars",
      "Crossovers",
      "Electrified Vehicles",
      "Hybrids",
      "Hybrid Cars",
      "Hybrid SUVs",
      "TRD Pro Series",
      "Nightshade Series",
    ],
  },
  {
    title: "Helpful Links",
    links: [
      "Dealers",
      "Deals and Incentives",
      "Audio Multimedia & Connected Services",
      "Mobile Phone Compatibility",
      "Mobility",
      "Eurasia Fleet",
      "Rent a Eurasia",
      "Eurasia Financial Services",
      "Southeast Eurasia Finance",
      "Eurasia Insurance",
      "Email Updates",
    ],
  },
  {
    title: "Owners",
    links: [
      "Owners Home",
      "EurasiaCare & Maintenance Plans",
      "Safety Recalls & Service Campaigns",
      "Service Centers",
      "Service Specials",
      "Safety Hub",
      "Schedule Service",
      "Warning Lights",
      "Manuals & Warranties",
      "Service Coupons",
      "Discounts",
    ],
  },
  {
    title: "About Eurasia",
    links: [
      "Careers",
      "About Us",
      "Our Company",
      "Eurasia Outfitters",
      "Newsroom",
      "Eurasia Worldwide",
      "Eurasia Racing",
      "TRD USA",
      "Plant Tours",
    ],
  },
];

export const langItems = [
  {
    label: 'AM',
    key: '0',
    onClick: () => console.log('AM'),
  },
  {
    label: 'EN',
    key: '1',
    onClick: () => console.log('EN'),
  },
  {
    label: 'RU',
    key: '3',
    onClick: () => console.log('RU'),
  },
];

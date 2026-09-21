import type {
  GalleryImage,
  GearItem,
  JournalItem,
  KeyTopic,
  NavLink,
  Partner,
  PartnerGroup,
  PlatformStat,
  StatItem,
  VideoItem,
} from '../models/content.models';

/**
 * Source unique du contenu du site.
 * Textes repris du média-kit « Infos Tikih Mediakit.pdf ».
 * Volontairement exclus : NIF / STAT / RCS et les statistiques Facebook.
 */

export const BRAND = {
  name: 'I AM TIKIH',
  fullName: 'Tikih Ranjisoa',
  role: 'Content Creator | Travel & Lifestyle',
  award: 'Winner — Best Travel Influencer of the Indian Ocean 2026',
  awardLabel: 'Winner',
  awardTitle: 'Best Travel Influencer',
  awardScope: 'of the Indian Ocean',
  awardYear: '2026',
  awardUrl: 'https://www.influencersawards.mu/2026-winners/',
  awardLogo: 'assets/img/inf.png',
  email: 'Tikihranjisoa@gmail.com',
  whatsapp: '+261 34 20 841 82',
  location: 'Antananarivo, Madagascar',
  quote:
    'My goal is to showcase hidden gems while promoting local culture, inspiring a way of traveling that’s more connected to the soul of each place.',
} as const;

export const NAV: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'References', path: '/references' },
  { label: 'Contact', path: '/contact' },
];

export const SOCIALS: NavLink[] = [
  { label: 'Instagram', path: 'https://www.instagram.com/iam.tikih/' },
  { label: 'TikTok', path: 'https://www.tiktok.com/@iam.tikih' },
  { label: 'YouTube', path: 'https://www.youtube.com/@tikihranjisoa' },
  { label: 'Facebook', path: 'https://www.facebook.com/iam.tikih' },
];

export const PILLARS = ['Travel', 'Lifestyle', 'Tourism', 'Hospitality', 'Tropical', 'Madagascar'];

export const HERO = {
  eyebrow: BRAND.role,
  lines: ['Tikih', 'Ranjisoa'],
  subtitle: BRAND.quote,
  image: 'assets/img/hero.jpg',
  caption: 'Sunset Baobabs — March 2025',
} as const;

export const ABOUT = {
  eyebrow: 'About',
  title: ['Hello,', 'I’m Tikih'],
  body: [
    'Content creator. Passionate about travel, adventure, and video creation, I capture the magic of the places I discover. My world is an invitation to escape: summer vibes, dream beaches, cyan-blue landscapes, luxury spots, and carefully curated aesthetic settings.',
    'Through my vlogs, reels, and paradise-inspired cinematic videos, I spark wanderlust and the desire to explore the world. With a background in media and communication, my love for cinema, storytelling, and sharing naturally led me here.',
    'More than a job, it’s a true passion: showcasing exceptional destinations to inspire your next adventure.',
  ],
  image: 'assets/img/about.jpg',
  caption: 'Ste Marie — 2024',
} as const;

/**
 * Triptyque au format reel (9:16) de la section « Key topics ».
 * L'ordre affiché est celui du tableau ; `caption` est optionnel.
 */
export const TOPICS_GALLERY: GalleryImage[] = [
  { src: 'assets/img/topics/1.jpg', label: 'Tikih' },
  { src: 'assets/img/topics/3.jpg', label: 'Madagascar' },
  { src: 'assets/img/topics/2.jpg', label: 'Tikih' },
];

export const TOPICS = {
  eyebrow: 'Key topics',
  title: ['Destinations,', 'Stories,', 'Know-how'],
  body: [
    'I specialize in creating content focused on tourism, hospitality, travel, and the tropical lifestyle. Through my videos, I highlight unique destinations, immersive experiences, and dreamlike places.',
    'But beyond stunning landscapes and paradise beaches, I also strive to tell the stories that make each place truly authentic: its local crafts, ancestral know-how, traditions, and the human connections that bring real depth to a destination.',
  ],
  gallery: TOPICS_GALLERY,
} as const;

export const KEY_TOPICS: KeyTopic[] = [
  {
    index: '01',
    title: 'Tourism',
    body: 'Unique destinations, hidden gems and the places that deserve to be discovered.',
  },
  {
    index: '02',
    title: 'Hospitality',
    body: 'Luxury spots, lodges and resorts filmed with a cinematic, carefully curated eye.',
  },
  {
    index: '03',
    title: 'Travel',
    body: 'Vlogs, reels and immersive experiences that spark the desire to explore.',
  },
  {
    index: '04',
    title: 'Tropical lifestyle',
    body: 'Summer vibes, dream beaches, cyan-blue landscapes and aesthetic settings.',
  },
];

export const FILMS = {
  eyebrow: 'Watch',
  title: ['Films', '& Vlogs'],
  body: 'Cinematic travel videos, vlogs and reels — filmed, directed and edited in Madagascar and across the Indian Ocean.',
  channel: 'https://www.youtube.com/@tikihranjisoa',
  channelLabel: '@tikihranjisoa',
} as const;

/** Vidéos mises en avant. L'id est la partie après `watch?v=` dans l'URL. */
export const VIDEOS: VideoItem[] = [
  { id: 'NI_Tiiv9f3E', title: 'MADAGASCAR: Discover Adventure | A Cinematic Travel Video' },
  { id: 'F4X9tbTtbbU', title: 'FORT-DAUPHIN, Tolagnaro : le joyau caché de Madagascar' },
  { id: 'vty8MOnQ3d0', title: 'Montrer la beauté de MADAGASCAR aux Influencer Awards Indian Ocean' },
];

export const COMMUNITY = {
  eyebrow: 'Total community',
  headline: '+160K followers',
  body: 'Combined across all social platforms — Facebook, Instagram, TikTok and YouTube.',
  image: 'assets/img/community.jpg',
} as const;

/** Audiences par plateforme (média-kit, page « Total community »). */
export const PLATFORMS: PlatformStat[] = [
  { platform: 'TikTok', handle: '@iam.tikih', followers: '227K', extra: '559K likes' },
  { platform: 'Facebook', handle: 'Tikih Ranjisoa', followers: '116.8K', extra: '' },
  { platform: 'Instagram', handle: '@iam.tikih', followers: '20.2K', extra: '901 posts' },
  { platform: 'YouTube', handle: '@tikihranjisoa', followers: '1.16K', extra: '154 videos' },
];

/** Statistiques 2026 — Facebook volontairement exclu. */
export const STATS_2026: { platform: string; items: StatItem[] }[] = [
  {
    platform: 'Instagram',
    items: [
      { value: '3.0', suffix: 'M', label: 'Views', delta: '+49%' },
      { value: '1.7', suffix: 'M', label: 'Reach', delta: '+99.6%' },
      { value: '328.7', suffix: 'K', label: 'Content interactions', delta: '+95.1%' },
    ],
  },
  {
    platform: 'TikTok',
    items: [
      { value: '448', suffix: 'K', label: 'Video views', delta: '+46%' },
      { value: '28', suffix: 'K', label: 'Likes', delta: '+291%' },
      { value: '3.5', suffix: 'K', label: 'Shares', delta: '+69%' },
    ],
  },
];

export const REFERENCES = {
  eyebrow: 'References',
  title: ['Completed', 'Collaborations', '& Partnerships'],
  body: 'Over the course of my experience, I have had the opportunity to collaborate with several major players in Madagascar’s tourism sector, both institutional and private. Here are some of my key projects.',
} as const;

export const PRIMARY_PARTNERS = {
  label: 'My primary partner for 2026',
  partners: [
    { name: 'Ministère du Tourisme et de l\'Artisanat', logo: 'assets/img/partners/ministere-du-tourisme-et-de-l-artisanat.png' },
    { name: 'Palm Beach Resort & Spa', logo: 'assets/img/partners/palm-beach-resort-et-spa.png' },
    { name: 'By Tribes', logo: 'assets/img/partners/by-tribes.png' },
  ] as Partner[],
} as const;

export const PARTNER_GROUPS: PartnerGroup[] = [
  {
    icon: '🏛',
    title: 'Tourism institutions & offices',
    partners: [
      { name: 'Madagascar Treasure Island', logo: 'assets/img/partners/madagascar-treasure-island.png' },
      { name: 'Tanihely National Park', logo: 'assets/img/partners/tanihely-national-park.png' },
      { name: 'Madagascar Treasure Island — Nosy Be', logo: 'assets/img/partners/madagascar-treasure-island-nosy-be.png' },
      { name: 'ITM — International Tourism Fair Madagascar', logo: 'assets/img/partners/itm-international-tourism-fair-madagascar.png' },
      { name: 'ORTVak Vakinankaratra', logo: 'assets/img/partners/ortvak-vakinankaratra.png' },
      { name: 'Nosy Best Deals', logo: 'assets/img/partners/nosy-best-deals.png' },
      { name: 'Madagascar Treasure Island — Isalo Ihorombe', logo: 'assets/img/partners/madagascar-treasure-island-isalo-ihorombe.png' },
      { name: 'Ravinala Airports', logo: 'assets/img/partners/ravinala-airports.png' },
      { name: 'MVola Mobile Money', logo: 'assets/img/partners/mvola-mobile-money.png' },
      { name: 'À l\'Étranger', logo: 'assets/img/partners/a-l-etranger.png' },
      { name: 'Loha Rano', logo: 'assets/img/partners/loha-rano.png' },
      { name: 'Office du Tourisme de Sainte-Marie', logo: 'assets/img/partners/office-du-tourisme-de-sainte-marie.png' },
      { name: 'TVS', logo: 'assets/img/partners/tvs.png' },
      { name: 'Xway Adventure Madagascar', logo: 'assets/img/partners/xway-adventure-madagascar.png' },
      { name: 'Madagascar Treasure Island — Alaotra Mangoro', logo: 'assets/img/partners/madagascar-treasure-island-alaotra-mangoro.png' },
    ],
  },
  {
    icon: '🏨',
    title: 'Hotels, luxury & tourist establishments',
    partners: [
      { name: 'Radisson Blu Antananarivo Waterfront', logo: 'assets/img/partners/radisson-blu-antananarivo-waterfront.png' },
      { name: 'Five Senses Lodge', logo: 'assets/img/partners/five-senses-lodge.png' },
      { name: 'Radisson Serviced Apartments Antananarivo City Center', logo: 'assets/img/partners/radisson-serviced-apartments-antananarivo-city-center.png' },
      { name: 'SC', logo: 'assets/img/partners/sc.png' },
      { name: 'Vahine', logo: 'assets/img/partners/vahine.png' },
      { name: 'Miami Suites', logo: 'assets/img/partners/miami-suites.png' },
      { name: 'Anakao Lemurs Lodge', logo: 'assets/img/partners/anakao-lemurs-lodge.png' },
      { name: 'Safari Vezo — Anakao', logo: 'assets/img/partners/safari-vezo-anakao.png' },
      { name: 'Le Mango', logo: 'assets/img/partners/le-mango.png' },
      { name: 'Ankasy Lodge', logo: 'assets/img/partners/ankasy-lodge.png' },
      { name: 'Anakao Ocean Lodge', logo: 'assets/img/partners/anakao-ocean-lodge.png' },
      { name: 'Villas de Vohilava — La Varangue', logo: 'assets/img/partners/villas-de-vohilava-la-varangue.png' },
      { name: 'Ravintsara Wellness Hotel', logo: 'assets/img/partners/ravintsara-wellness-hotel.png' },
      { name: 'Mantis Soanambo Hotel & Spa', logo: 'assets/img/partners/mantis-soanambo-hotel-et-spa.png' },
      { name: 'Libertalia', logo: 'assets/img/partners/libertalia.png' },
      { name: 'Le Vezo Beach Morondava', logo: 'assets/img/partners/le-vezo-beach-morondava.png' },
      { name: 'Vohitsoa', logo: 'assets/img/partners/vohitsoa.png' },
      { name: 'Le Relais de la Reine', logo: 'assets/img/partners/le-relais-de-la-reine.png' },
      { name: 'Partenaire', logo: 'assets/img/partners/partenaire.png' },
      { name: 'Talinjoo', logo: 'assets/img/partners/talinjoo.png' },
      { name: 'Partenaire', logo: 'assets/img/partners/partenaire-2.png' },
      { name: 'Passot Hills', logo: 'assets/img/partners/passot-hills.png' },
      { name: 'Golf du Rova Luxury Hotel', logo: 'assets/img/partners/golf-du-rova-luxury-hotel.png' },
      { name: 'Izil Nosy Be', logo: 'assets/img/partners/izil-nosy-be.png' },
      { name: 'The Anja Reserve Lodge', logo: 'assets/img/partners/the-anja-reserve-lodge.png' },
    ],
  },
  {
    icon: '🎬',
    title: 'Brands & productions',
    partners: [
      { name: 'Inbrand', logo: 'assets/img/partners/inbrand.png' },
      { name: 'Africa Mada Travel & Tours', logo: 'assets/img/partners/africa-mada-travel-et-tours.png' },
      { name: 'Voaara', logo: 'assets/img/partners/voaara.png' },
      { name: 'Bogasy', logo: 'assets/img/partners/bogasy.png' },
      { name: 'Ragon', logo: 'assets/img/partners/ragon.png' },
    ],
  },
];

export const GEAR = {
  eyebrow: 'Equipment',
  title: ['The Gear I Use', 'For My Content'],
  intro:
    'I am a gear enthusiast and a loyal user of Sony, DJI, and Insta360 ecosystems.',
  body: 'I work with latest-generation equipment, ensuring every adventure is captured with professional-grade quality. I take pride in filming every moment with precision: for me, every second counts, and I leave no detail to chance in my content.',
  image: 'assets/img/gear.jpg',
  imageAlt: 'assets/img/gear-2.jpg',
} as const;

export const GEAR_BRANDS: GearItem[] = [
  { name: 'Sony', note: 'Cameras & lenses' },
  { name: 'DJI', note: 'Drones & gimbals' },
  { name: 'Insta360', note: 'Action & 360' },
];

export const FEED = {
  eyebrow: 'My feed',
  title: ['Instagram'],
  handle: '@iam.tikih',
  images: ['assets/img/gallery/01.jpg', 'assets/img/gallery/02.jpg', 'assets/img/gallery/03.jpg'],
} as const;

/** Réservé au futur blog — non affiché pour l'instant. */
export const JOURNAL: JournalItem[] = [];

export const CTA = {
  eyebrow: 'Let’s work together',
  title: ['Have A', 'Project ?'],
  body: 'Tell me about your destination, your property or your brand — and let’s create something worth travelling for.',
  action: 'Get in touch',
} as const;

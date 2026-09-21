export interface NavLink {
  label: string;
  path: string;
}

export interface GalleryImage {
  src: string;
  /** Texte affiché tant que le fichier n'est pas déposé. */
  label: string;
  caption?: string;
}

export interface KeyTopic {
  index: string;
  title: string;
  body: string;
}

export interface StatItem {
  value: string;
  suffix: string;
  label: string;
  delta?: string;
}

export interface PlatformStat {
  platform: string;
  handle: string;
  followers: string;
  extra: string;
}

export interface Partner {
  name: string;
  /** Chemin du logo dans public/assets/img/partners/. */
  logo: string;
}

export interface PartnerGroup {
  icon: string;
  title: string;
  partners: Partner[];
}

export interface VideoItem {
  /** Identifiant YouTube (la partie après `watch?v=`). */
  id: string;
  title: string;
}

export interface GearItem {
  name: string;
  note: string;
}

export interface JournalItem {
  title: string;
  category: string;
  date: string;
  image: string;
}

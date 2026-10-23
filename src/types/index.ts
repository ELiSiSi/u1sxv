export interface Video {
  id: string;
  title?: string;
  url: string;
  orientation?: 'portrait' | 'landscape' | 'square';
}

export interface Category {
  id: string;
  name: string;
  image: string;
  videos: Video[];
}

export interface CustomField {
  label: string;
  value: string;
}

export interface ImportantLink {
  id: string;
  title: string;
  description?: string;
  url: string;
  icon?: 'store' | 'shopping-bag' | 'sparkles' | 'link' | 'message-circle' | 'globe' | 'star' | 'zap' | 'vyonel' | string;
  badge?: string;
  badgeColor?: string;
  highlight?: boolean;
}

export interface SocialPlatformStat {
  platform: 'tiktok' | 'instagram' | 'youtube' | 'snapchat' | 'facebook';
  name: string;
  handle: string;
  url: string;
  followers?: string | number;
  followersLabel?: string;
  likesOrViews?: string | number;
  likesOrViewsLabel?: string;
  badge?: string;
  verified?: boolean;
  color?: string;
}

export interface SocialLiveStatsConfig {
  enabled: boolean;
  autoRefreshIntervalMinutes?: number;
  youtubeChannelHandle?: string; // e.g. "@u1sxv"
  totalFollowersEstimate?: string;
  totalInteractionsEstimate?: string;
  platforms: SocialPlatformStat[];
}

export interface SheikhConfig {
  type: string;
  typeLabel: string;
  name: string;
  title: string;
  bio: string;
  bioLong: string;
  logo: string;
  heroImage: string;
  yearsInField: number;
  fieldLabel: string;
  education: string;
  certificates: string[];
  location: string;
  customFields: CustomField[];
  importantLinks?: ImportantLink[];
  socialStats?: SocialLiveStatsConfig;
  colors: {
    primary: string;
    gold: string;
    background: string;
    text: string;
  };
  social: {
    youtube?: string;
    threads?: string;
    tiktok?: string;
    facebook?: string;
    instagram?: string;
    snapchat?: string;
    whatsapp?: string;
    email?: string;
    phone?: string;
  };
  shareMessage: string;
  athkar: string[];
  categories: Category[];
  settings: {
    athkarInterval: number;
    athkarDuration: number;
    prayerReminderInterval: number;
    prayerReminderDuration: number;
    adDelay: number;
    city: string;
    country: string;
  };
  seo: {
    siteUrl: string;
    keywords: string[];
    defaultImage: string;
  };
}

export interface Menu {
  name: string;
}

export interface Settings {
  setting: string;
  icon: string;
  color?: string;
}

export interface EventsProps {
  id: number;
  date: string;
  location: string;
  description: string;
}
export interface EventType {
  event: EventsProps;
}

export interface FriendProps {
  id: number;
  name: string;
  img: string;
}
export interface FriendType {
  friend: FriendProps;
}

export interface MoneyProps {
  currency: string;
  amount: number;
}
export interface MoneyType {
  money: MoneyProps;
}

export interface NewsProps {
  url: string;
  source: string;
  authors: [string];
  title: string;
  pubDate: string;
  country: string;
  language: string;
  description: string;
  imageUrl: string;
  content: string;
}

export interface NewsType {
  notice: NewsProps;
}

export interface ChannelProps {
  id: number;
  channel: string;
  color?: string;
}

export interface ChannelType {
  channel: ChannelProps;
}


export interface userInitialType {
  profile: Object;
  channels: [];
  money: [];
  invesments: [];
  events: [];
  notifications: [];
  contactRequest: [];
  isOpen: boolean;
  assets: [];
  asset: string;
}

export interface initialStateType {
  state: userInitialType;
  handleSetTweets: () => {};
  tweets: [];
  handleAddfounds: () => {};
  handleOpenModal: () => {};
  handleCloseModal: () => {};
  handleSetAsset: () => {};
  handleSetListAssets: () => {};
}
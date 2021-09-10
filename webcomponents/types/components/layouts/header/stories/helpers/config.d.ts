export declare const calendarEvents: {
  2021: {
    date: string;
    events: {
      localizedStartTime: string;
      title: string;
      description: string;
    }[];
  }[];
  2020: {
    date: string;
    events: {
      localizedStartTime: string;
      title: string;
      description: string;
    }[];
  }[];
};
export declare const brandList: {
  name: string;
  id: number;
  query: number[];
}[];
export declare const themes: {
  name: string;
  value: string;
  active: boolean;
}[];
export declare const languages: {
  name: string;
  value: string;
  active: boolean;
}[];
export declare const appData: ({
  _id: string;
  code: string;
  status: string;
  name: string;
  icon: string;
  url: string;
  extranet_url: string;
  roles: string[];
  deleted: boolean;
  created_at: string;
  updated_at: string;
  order: number;
  parent?: undefined;
  children?: undefined;
  children_icons?: undefined;
  children_names?: undefined;
} | {
  _id: string;
  code: string;
  status: string;
  name: string;
  icon: string;
  url: string;
  extranet_url: string;
  roles: string[];
  deleted: boolean;
  created_at: string;
  updated_at: string;
  order: number;
  parent: boolean;
  children: {
    _id: string;
    code: string;
    status: string;
    name: string;
    icon: string;
    url: string;
    extranet_url: string;
    roles: string[];
    deleted: boolean;
    created_at: string;
    updated_at: string;
    order: number;
  }[];
  children_icons: string[];
  children_names: string[];
} | {
  _id: string;
  code: string;
  status: string;
  name: string;
  icon: string;
  url: string;
  roles: string[];
  deleted: boolean;
  created_at: string;
  updated_at: string;
  order: number;
  extranet_url?: undefined;
  parent?: undefined;
  children?: undefined;
  children_icons?: undefined;
  children_names?: undefined;
} | {
  _id: string;
  code: string;
  status: string;
  name: string;
  icon: string;
  url: string;
  roles: string[];
  deleted: boolean;
  created_at: string;
  updated_at: string;
  order: number;
  parent: boolean;
  children: {
    _id: string;
    code: string;
    status: string;
    name: string;
    icon: string;
    url: string;
    roles: string[];
    deleted: boolean;
    created_at: string;
    updated_at: string;
    order: number;
  }[];
  children_icons: string[];
  children_names: string[];
  extranet_url?: undefined;
})[];

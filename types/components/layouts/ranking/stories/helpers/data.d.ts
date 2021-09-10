export declare const rankingData: {
  cod_section: number;
  children: ({
    units: number;
    pvpType: string;
    pvps: {
      inicio: string;
      name: string;
      tag: string;
    }[];
    new: {
      inicio: string;
      name: string;
    }[];
    description: string;
    partnumber: string;
    image: string;
  } | {
    pvps: {
      inicio: string;
      name: string;
      tag: string;
    }[];
    new: {
      inicio: string;
      name: string;
    }[];
    image: string;
    units?: undefined;
    pvpType?: undefined;
    description?: undefined;
    partnumber?: undefined;
  } | {
    image: string;
    units?: undefined;
    pvpType?: undefined;
    pvps?: undefined;
    new?: undefined;
    description?: undefined;
    partnumber?: undefined;
  })[];
}[];
export declare const sectionData: {
  cod_section: number;
  children: ({
    image: string;
    units: number;
    description: string;
    partnumber: string;
    pvpType: string;
    pvps: {
      inicio: string;
      name: string;
      tag: string;
    }[];
  } | {
    image: string;
    units: number;
    description: string;
    partnumber: string;
    pvpType?: undefined;
    pvps?: undefined;
  } | {
    image: string;
    units?: undefined;
    description?: undefined;
    partnumber?: undefined;
    pvpType?: undefined;
    pvps?: undefined;
  })[];
}[];

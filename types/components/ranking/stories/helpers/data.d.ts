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
    description: string;
    partnumber: string;
    image: string;
  } | {
    image: string;
    units?: undefined;
    pvpType?: undefined;
    pvps?: undefined;
    description?: undefined;
    partnumber?: undefined;
  })[];
}[];
export declare const sectionData: {
  cod_section: number;
  children: ({
    pvpType: string;
    pvps: {
      inicio: string;
      name: string;
      tag: string;
    }[];
    image: string;
  } | {
    image: string;
    pvpType?: undefined;
    pvps?: undefined;
  })[];
}[];

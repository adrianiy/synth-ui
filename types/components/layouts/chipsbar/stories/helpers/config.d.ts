import dayjs from 'dayjs';
export declare const filter: (index: any) => {
  description: string;
  plural: string;
  haveMultiSelect: boolean;
  multiSelect: boolean;
  visible: boolean;
  selected: any[];
  options: ({
    description: string;
    brand: number[];
    active: boolean;
    display: boolean;
    code: number;
  } | {
    description: string;
    active: boolean;
    display: boolean;
    code: number;
    brand?: undefined;
  })[];
};
export declare const hiddenFilter: {
  description: string;
  plural: string;
  haveMultiSelect: boolean;
  multiSelect: boolean;
  visible: boolean;
  selected: any[];
  options: {
    description: string;
    active: boolean;
    display: boolean;
    code: number;
  }[];
};
export declare const filterWithChildren: {
  description: string;
  plural: string;
  haveMultiSelect: boolean;
  multiSelect: boolean;
  selected: any[];
  searchPlaceholder: string;
  visible: boolean;
  options: {
    description: string;
    display: boolean;
    header: boolean;
    code: number;
    children: {
      description: string;
      active: boolean;
      display: boolean;
      code: number;
    }[];
  }[];
};
export declare const year: number;
export declare const endOfYear: dayjs.Dayjs;
export declare const minDate: dayjs.Dayjs;
export declare const maxDate: dayjs.Dayjs;
export declare const dateRanges: ({
  description: string;
  startDate: Date;
  endDate: Date;
  isDefault?: undefined;
  active?: undefined;
} | {
  description: string;
  startDate: Date;
  endDate: Date;
  isDefault: boolean;
  active: boolean;
})[];
export declare const dateFilter: {
  description: string;
  minDate: dayjs.Dayjs;
  maxDate: dayjs.Dayjs;
  options: ({
    description: string;
    startDate: Date;
    endDate: Date;
    isDefault?: undefined;
    active?: undefined;
  } | {
    description: string;
    startDate: Date;
    endDate: Date;
    isDefault: boolean;
    active: boolean;
  })[];
  visible: boolean;
  comparableType: string;
  comparableOptions: ({
    name: string;
    value: string;
    disabled?: undefined;
  } | {
    name: string;
    value: string;
    disabled: boolean;
  })[];
};
export declare const filtersConfig: {
  date: {
    description: string;
    minDate: dayjs.Dayjs;
    maxDate: dayjs.Dayjs;
    options: ({
      description: string;
      startDate: Date;
      endDate: Date;
      isDefault?: undefined;
      active?: undefined;
    } | {
      description: string;
      startDate: Date;
      endDate: Date;
      isDefault: boolean;
      active: boolean;
    })[];
    visible: boolean;
    comparableType: string;
    comparableOptions: ({
      name: string;
      value: string;
      disabled?: undefined;
    } | {
      name: string;
      value: string;
      disabled: boolean;
    })[];
  };
  filter1: {
    description: string;
    plural: string;
    haveMultiSelect: boolean;
    multiSelect: boolean;
    visible: boolean;
    selected: any[];
    options: ({
      description: string;
      brand: number[];
      active: boolean;
      display: boolean;
      code: number;
    } | {
      description: string;
      active: boolean;
      display: boolean;
      code: number;
      brand?: undefined;
    })[];
  };
  filter2: {
    haveMultiSelect: boolean;
    description: string;
    plural: string;
    multiSelect: boolean;
    visible: boolean;
    selected: any[];
    options: ({
      description: string;
      brand: number[];
      active: boolean;
      display: boolean;
      code: number;
    } | {
      description: string;
      active: boolean;
      display: boolean;
      code: number;
      brand?: undefined;
    })[];
  };
  filter3: {
    description: string;
    plural: string;
    haveMultiSelect: boolean;
    multiSelect: boolean;
    visible: boolean;
    selected: any[];
    options: ({
      description: string;
      brand: number[];
      active: boolean;
      display: boolean;
      code: number;
    } | {
      description: string;
      active: boolean;
      display: boolean;
      code: number;
      brand?: undefined;
    })[];
  };
  filter6: {
    description: string;
    plural: string;
    haveMultiSelect: boolean;
    multiSelect: boolean;
    selected: any[];
    searchPlaceholder: string;
    visible: boolean;
    options: {
      description: string;
      display: boolean;
      header: boolean;
      code: number;
      children: {
        description: string;
        active: boolean;
        display: boolean;
        code: number;
      }[];
    }[];
  };
  filter7: {
    description: string;
    plural: string;
    haveMultiSelect: boolean;
    multiSelect: boolean;
    visible: boolean;
    selected: any[];
    options: {
      description: string;
      active: boolean;
      display: boolean;
      code: number;
    }[];
  };
};

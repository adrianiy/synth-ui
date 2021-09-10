import { h, Component, Prop, Element, State, Event } from '@stencil/core';
import { Flex } from '../../utils/layout';
import { cls, getComponentClosestLanguage } from '../../utils/utils';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekDay from 'dayjs/plugin/weekday';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import minMax from 'dayjs/plugin/minMax';
import 'dayjs/locale/es';
import 'dayjs/locale/en';
import state from '../../utils/store/context.store';
dayjs.extend(updateLocale);
dayjs.extend(weekDay);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(minMax);
export class CalendarComponent {
  constructor() {
    /** Minimum allowed date */
    this.minDate = dayjs().startOf('year').toDate();
    /** Maximum allowed date */
    this.maxDate = new Date();
    /** Minimum allowed date */
    this.minDateAux = dayjs().startOf('year').toDate();
    /** Maximum allowed date */
    this.maxDateAux = new Date();
    /** Selected start date */
    this.startDate = new Date();
    /** Selected end date */
    this.endDate = new Date();
    /** Secondary selected start date */
    this.startDateAux = new Date();
    /** Secondary selected end date */
    this.endDateAux = new Date();
    /** Number of months to be shown. 2 by default */
    this.months = 2;
    this._prevMonth = (position) => () => {
      const isRedesign = this.interface === "redesign" /* redesign */;
      this.monthTables = this.monthTables.map((month, _position) => {
        if (isRedesign && position === _position) {
          return month.subtract(1, 'month');
        }
        else if (!isRedesign) {
          return month.subtract(1, 'month');
        }
        else {
          return month;
        }
      });
    };
    this._nextMonth = (position) => () => {
      const isRedesign = this.interface === "redesign" /* redesign */;
      this.monthTables = this.monthTables.map((month, _position) => {
        if (isRedesign && position === _position) {
          return month.add(1, 'month');
        }
        else if (!isRedesign) {
          return month.add(1, 'month');
        }
        else {
          return month;
        }
      });
    };
    this._selectDate = (startDate, endDate, comparableType) => {
      this.startDate = startDate;
      this.endDate = endDate;
      this.dateSelect.emit({
        startDate,
        endDate,
        comparableType,
      });
    };
    this._selectDateAux = (startDate, endDate) => {
      this.startDateAux = startDate;
      this.endDateAux = endDate;
      this.dateSelectAux.emit({
        startDate,
        endDate,
      });
    };
    this._selectMonth = (month) => () => {
      if (!this.secondary) {
        const maxDate = dayjs.min(month.endOf('month'), dayjs(this.maxDate));
        const minDate = dayjs.max(month.startOf('month'), dayjs(this.minDate));
        this._selectDate(minDate.toDate(), maxDate.toDate(), "calendar" /* calendar */);
      }
    };
    this._secondarySelection = (day) => {
      if (this.singleSelect) {
        this._selectDateAux(day.toDate(), day.toDate());
      }
      else if (!this.selectedStartDateAux) {
        this.selectedStartDateAux = day;
        [this.startDateAux, this.endDateAux] = [null, null];
      }
      else {
        const isValidSelection = day.isSameOrAfter(this.selectedStartDateAux, 'day');
        if (isValidSelection) {
          this._selectDateAux(this.selectedStartDateAux.toDate(), day.toDate());
          this.selectedStartDateAux = null;
          this.currentHoveredDateAux = null;
        }
        else {
          this.selectedStartDateAux = null;
          this._handleDayClick(day)();
        }
      }
    };
    this._primarySelection = (day) => {
      if (this.singleSelect) {
        this._selectDate(day.toDate(), day.toDate());
      }
      else if (!this.selectedStartDate) {
        this.selectedStartDate = day;
        [this.startDate, this.endDate] = [null, null];
      }
      else {
        const isValidSelection = day.isSameOrAfter(this.selectedStartDate, 'day');
        if (isValidSelection) {
          this._selectDate(this.selectedStartDate.toDate(), day.toDate());
          this.selectedStartDate = null;
          this.currentHoveredDate = null;
        }
        else {
          this.selectedStartDate = null;
          this._handleDayClick(day)();
        }
      }
    };
    this._handleDayClick = (day) => () => {
      if (this.secondary) {
        this._secondarySelection(day);
      }
      else {
        this._primarySelection(day);
      }
    };
    this._handleDayHover = (day) => () => {
      if (this.secondary && this.selectedStartDateAux) {
        this.currentHoveredDateAux = day;
      }
      else if (!this.secondary && this.selectedStartDate) {
        this.currentHoveredDate = day;
      }
    };
    this._checkInRange = (day) => {
      return (this.selectedStartDate &&
        day.isSameOrAfter(this.selectedStartDate, 'day') &&
        this.currentHoveredDate &&
        day.isBetween(this.selectedStartDate, this.currentHoveredDate, 'day', '[]'));
    };
    this._checkInAuxRange = (day) => {
      return (this.auxActive &&
        this.selectedStartDateAux &&
        day.isSameOrAfter(this.selectedStartDateAux, 'day') &&
        this.currentHoveredDateAux &&
        day.isBetween(this.selectedStartDateAux, this.currentHoveredDateAux, 'day', '[]'));
    };
    this._renderHeader = (position, month) => {
      const isRedesign = this.interface === "redesign" /* redesign */;
      const isLowerLimit = position === 0 || isRedesign;
      const isUpperLimit = position === this.months - 1 || isRedesign;
      const minDate = this.secondary ? this.minDateAux : this.minDate;
      const maxDate = this.secondary ? this.maxDateAux : this.maxDate;
      const beforeDisabled = month.isSame(minDate, 'month') ||
        (isRedesign &&
          this.monthTables[position - 1] &&
          month.subtract(1, 'month').isSame(this.monthTables[position - 1], 'month'));
      const afterDisabled = month.isSame(maxDate, 'month') ||
        (isRedesign &&
          this.monthTables[position + 1] &&
          month.add(1, 'month').isSame(this.monthTables[position + 1], 'month'));
      return (h(Flex, { row: true, spaced: true, middle: true, class: "calendar__header" },
        h("span", { class: { calendar__header__arrow: true, before: true, disabled: beforeDisabled }, onClick: !beforeDisabled ? this._prevMonth(position) : null }, isLowerLimit && h("em", { class: "material-icons" }, "chevron_left")),
        h("span", { class: cls('calendar__header__month', {
            'label--l--medium': this.interface === "redesign" /* redesign */,
          }), onClick: this._selectMonth(month) }, month.format(this.interface === "redesign" /* redesign */ ? 'MMMM YYYY' : 'MMM YYYY')),
        h("span", { class: { calendar__header__arrow: true, after: true, disabled: afterDisabled }, onClick: !afterDisabled ? this._nextMonth(position) : null }, isUpperLimit && h("em", { class: "material-icons" }, "chevron_right"))));
    };
    this._renderDaysHeader = () => {
      const days = Array(7)
        .fill(0)
        .map((_, i) => dayjs().weekday(i));
      return days.map(day => (h(Flex, { middle: true, center: true, class: "calendar__days__container__header" }, day.format('dd'))));
    };
    this._renderWeekRows = (month) => {
      const minDate = this.secondary ? this.minDateAux : this.minDate;
      const maxDate = this.secondary ? this.maxDateAux : this.maxDate;
      const monthStart = month.startOf('month');
      const monthEnd = month.endOf('month');
      const firstDayOfMonth = monthStart.day();
      const startDate = monthStart.subtract(firstDayOfMonth - 1, 'days');
      const days = Array(6 * 7).fill(0);
      return days.map((_, i) => {
        const day = startDate.add(i, 'day');
        const selectable = day.isBetween(monthStart, monthEnd, 'day', '[]');
        const disabled = !day.isBetween(dayjs(minDate), dayjs(maxDate), 'day', '[]');
        const selected = this.startDate && this.endDate && day.isBetween(this.startDate, this.endDate, 'day', '[]');
        const secondarySelected = this.auxActive &&
          this.startDateAux &&
          this.endDateAux &&
          day.isBetween(this.startDateAux, this.endDateAux, 'day', '[]');
        const inRange = this._checkInRange(day);
        const inAuxRange = this._checkInAuxRange(day);
        const isFirst = (this.startDate && day.isSame(this.startDate, 'day')) ||
          (this.selectedStartDate && day.isSame(this.selectedStartDate, 'day'));
        const isLast = (this.endDate && day.isSame(this.endDate, 'day')) ||
          (this.currentHoveredDate && day.isSame(this.currentHoveredDate, 'day'));
        const current = day.isSame(new Date(), 'day');
        return (h(Flex, { middle: true, center: true, class: cls('calendar__days__container__day', {
            selectable,
            disabled,
            selected,
            current,
            'secondary': this.auxActive && this.secondary,
            'selected--secondary': secondarySelected,
            'in-range': inRange,
            'in-range--secondary': inAuxRange,
            'first': isFirst,
            'last': isLast,
          }), onClick: this._handleDayClick(day), onMouseEnter: this._handleDayHover(day) }, day.format('D')));
      });
    };
    this._renderCalendar = (month, position) => {
      return (h(Flex, { top: true, center: true, class: "calendar" },
        this._renderHeader(position, month),
        h("div", { class: "calendar__days__container" },
          this._renderDaysHeader(),
          this._renderWeekRows(month))));
    };
  }
  componentWillLoad() {
    this.interface = this.interface || state.interface;
    this._getMonths();
    const lang = getComponentClosestLanguage(this.element);
    dayjs.locale(lang);
    dayjs.updateLocale(lang, { weekStart: 1 });
  }
  _getMonths() {
    const startMonth = dayjs(this.startDate);
    const endMonth = dayjs(this.endDate);
    const sameMonth = startMonth.isSame(endMonth, 'month');
    if (sameMonth) {
      this.startMonth = startMonth.subtract(this.months - 1, 'month');
    }
    else {
      this.startMonth = startMonth;
    }
    this.endMonth = endMonth;
    this.monthTables = Array(this.months)
      .fill(0)
      .map((_, i) => {
      const first = i === 0;
      const last = i === this.months - 1;
      return first ? this.startMonth : last ? this.endMonth : this.startMonth.add(i, 'month');
    });
  }
  render() {
    return (h(Flex, { row: true, center: true, top: true, class: cls('calendar__container', this.interface) }, this.monthTables.map(this._renderCalendar)));
  }
  static get is() { return "glyph-calendar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./calendar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calendar.css"]
  }; }
  static get properties() { return {
    "minDate": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Minimum allowed date"
      },
      "defaultValue": "dayjs().startOf('year').toDate()"
    },
    "maxDate": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Maximum allowed date"
      },
      "defaultValue": "new Date()"
    },
    "minDateAux": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Minimum allowed date"
      },
      "defaultValue": "dayjs().startOf('year').toDate()"
    },
    "maxDateAux": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Maximum allowed date"
      },
      "defaultValue": "new Date()"
    },
    "startDate": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Selected start date"
      },
      "defaultValue": "new Date()"
    },
    "endDate": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Selected end date"
      },
      "defaultValue": "new Date()"
    },
    "startDateAux": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Secondary selected start date"
      },
      "defaultValue": "new Date()"
    },
    "endDateAux": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Secondary selected end date"
      },
      "defaultValue": "new Date()"
    },
    "auxActive": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Activate seconday selection display"
      },
      "attribute": "aux-active",
      "reflect": false
    },
    "secondary": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Secondary selection. Shows selection in orange. **requires auxActive**"
      },
      "attribute": "secondary",
      "reflect": false
    },
    "singleSelect": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Allow single day selection"
      },
      "attribute": "single-select",
      "reflect": false
    },
    "months": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Number of months to be shown. 2 by default"
      },
      "attribute": "months",
      "reflect": false,
      "defaultValue": "2"
    },
    "interface": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Filter chip interface ['MODERN', 'CLASSIC']"
      },
      "attribute": "interface",
      "reflect": false
    }
  }; }
  static get states() { return {
    "monthTables": {},
    "endMonth": {},
    "startMonth": {},
    "selectedStartDate": {},
    "selectedStartDateAux": {},
    "currentHoveredDate": {},
    "currentHoveredDateAux": {}
  }; }
  static get events() { return [{
      "method": "dateSelect",
      "name": "dateSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggered on date selection"
      },
      "complexType": {
        "original": "{ startDate: Date; endDate: Date; comparableType?: ComparableType }",
        "resolved": "{ startDate: Date; endDate: Date; comparableType?: ComparableType; }",
        "references": {
          "Date": {
            "location": "global"
          },
          "ComparableType": {
            "location": "import",
            "path": "glyph-core-poc"
          }
        }
      }
    }, {
      "method": "dateSelectAux",
      "name": "dateSelectAux",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event triggered on aux date selection"
      },
      "complexType": {
        "original": "{ startDate: Date; endDate: Date }",
        "resolved": "{ startDate: Date; endDate: Date; }",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      }
    }]; }
  static get elementRef() { return "element"; }
}

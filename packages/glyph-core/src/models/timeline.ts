export interface CalendarEvent {
    localizedStartTime?: string;
    title: string;
    description: string;
}

export interface CalendarGroup {
    date: string;
    events: CalendarEvent[];
}

export interface TimelineEvent {
    [date: string]: CalendarGroup[];
}

export interface Schedule {
    id: string;
    day: string;
    close: string | null;
    open: string | null;
    weekDayId: number;
}
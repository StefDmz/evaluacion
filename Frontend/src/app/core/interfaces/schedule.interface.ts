export interface Schedule {
    id: number;
    day: string;
    close: string | null;
    open: string | null;
    weekDayId: number;
}
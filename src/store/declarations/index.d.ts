import dayjs from 'dayjs'

export interface RootState {
    today: dayjs.Dayjs;
    leftNavigationStatus: boolean;
    windowWidth: number;
    selectedLanguage: string;
}

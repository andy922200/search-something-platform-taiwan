export namespace MotelModule {
    type State = {
        motels: Array<OneMotelData>;
        motelsForSelector: Array<GetMotelListReturnValue>;
        areaList: Array<AreaOption>;
        loadingStatus: boolean;
    }

    interface ObjectKeys {
        [key: string]: string | number | undefined | ObjectKeys;
    }

    interface CellContent {
        type?: string;
        $t: string;
    }

    interface OneMotelData extends ObjectKeys {
        id: number | string | undefined;
        name: string | undefined;
        addressFull: string | undefined;
        city: string | undefined;
        area: string | undefined;
        zip: string | undefined;
        cityId: string | undefined;
        tel: string | undefined;
        latitude: number | undefined;
        longitude: number | undefined;
    }

    interface AreaOption extends ObjectKeys{
        label: string;
        value: string;
    }

    interface GetMotelListReturnValue{
        cityId: string | undefined;
        label: string | undefined;
        items: Array<{ label: string | undefined; value: OneMotelData}>;
    }
}

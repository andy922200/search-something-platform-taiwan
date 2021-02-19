export namespace MotelModule {
    type State = {
        motels: Array<OneMotelData>;
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
        city: undefined;
        area: undefined;
        zip: undefined;
        cityId: string | undefined;
        tel: string | undefined;
    }

    interface GetMotelListReturnValue{
        cityId: string | undefined;
        label: string | undefined;
        items: Array<{ label: string | undefined; value: OneMotelData}>;
    }
}

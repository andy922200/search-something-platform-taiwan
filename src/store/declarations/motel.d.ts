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
        address: ObjectKeys;
        tel: string | undefined;
    }
}

declare type NameDescriptor = {
    native: {
        short: string;
        long: string;
    };
    english: {
        short: string;
        long: string;
    };
    transliterations: string[];
    other: string[];
};
declare type IsoCode = "iso6391" | "iso6392" | "iso6393";

export declare type Language = {
    group: string;
    names: string[] | NameDescriptor;
    iso6391: string;
    iso6392: string;
    iso6393: string;
    glottolog?: string;
};

export declare class Parser {
    static getCode (string, targetCode?: IsoCode): Language[IsoCode];
    static getName (string): string;
    static get (string): Language | undefined;
    static search (string): Language | null;
    static get languages (): Language[];
}

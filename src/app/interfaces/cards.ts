export interface Plains {
    plains: Plain[];
}

export interface Plain {
    type:     string;
    price:    number;
    image:string;
    features: Feature[];
}

export interface Feature {
    feature:   string;
    isEnabled: boolean;
}

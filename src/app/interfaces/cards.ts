export interface Cards {
    cards: Card[];
}

export interface Card {
    type:     string;
    price:    number;
    image:string;
    features: Feature[];
}

export interface Feature {
    feature:   string;
    isEnabled: boolean;
}

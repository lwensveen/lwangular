export interface Phone {
    model: string;
    brand: string;
    bulletpoints: Bulletpoints[];
    colors: Colors[];
    title: string;
    content: string;
    id: number;
    img: string;
    os: string;
    price: number;
    storage: string;
}

export interface Bulletpoints {
    point: string;
}

export interface Colors {
    color: string;
}

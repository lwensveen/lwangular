export interface Phone {
    model: string;
    brand: string;
    bulletpoints: Bulletpoints[];
    colors: Colors[];
    title: string;
    content: string;
    id: number;
    images: ImageSides;
    os: string;
    price: number;
    storage: string;
}

export interface Bulletpoints {
    point: string;
}

export interface ImageSides {
    front: string;
    side: string;
    back: string;
}

export interface Colors {
    color: string;
}

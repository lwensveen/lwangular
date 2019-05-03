export class Phones {
    id: number;
    title: string;
    subtitle: string | null;
    brand: string;
    os: string;
    img: string;
    colors: Colors[];
    bulletpoints: Bulletpoints[];
    content: string;
}

export class Bulletpoints {
    point: string;
}

export class Colors {
    color: string;
}

export class Phones {
    id: number;
    title: string;
    subtitle: string | null;
    img: string;
    bulletpoints: Bulletpoints[];
    content: string;
}

export class Bulletpoints {
    point: string;
}

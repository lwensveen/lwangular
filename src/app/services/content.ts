export class Content {
    id: number;
    name: string;
    subtitle: string | null;
    avatar: string;
    bulletpoints: Bulletpoints[];
    content: string;
}

export class Bulletpoints {
    point: string;
}

export class Clients {
    id: number;
    url: string;
    name: string;
}

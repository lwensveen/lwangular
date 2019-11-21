export class Content {
    id: number;
    title: string;
    subtitle: string;
    url: string;
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

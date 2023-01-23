export interface Card {
    id: string,
    title: string | React.ReactNode[],
    description:string | React.ReactNode[],
    imageUrl: string,
    date:string,
    spanInTitle?: number;
    spanInDescription?: number;
}

export interface ServicesType {
    name: string;
    description: string;
    imageUrl: string;
    url: string;
    isPrincipal: boolean;
    title: string;
}
export interface TestimonialsType {
    id: number;
    name: string;
    text: string;
}


export interface FaqType {
    id: number;
    question: string;
    answer: string;
}       
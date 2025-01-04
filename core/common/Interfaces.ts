import {UserType} from "@/core/common/Enums";


export interface User {
    id: string;
    email: string;
    phone: boolean;
}


export interface Blog {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

export interface Category {
    id: number;
    name: string;
    sub: Category [];
    thumbnail: string
}

interface Translations {
    [key: string]: string
}

export interface ITranslation {
    translations?: Translations
}
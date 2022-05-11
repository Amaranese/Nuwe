export interface DestinationOption{
    id: string;
    label: string;
}

export interface TypeOption{
    id: string;
    label: string;
}

export interface Attendant {
    id: string;
    checked?: boolean;
}

export interface TourForm {
    destination: string;
    type: string;
    attendant: boolean[];
}

export interface ContactForm {
    firstName: string,
    lastName: string,
    country: string,
    mobile: string,
    email: string,
    adultNumber: number,
    childrenNumber: number,
    has4YearsKids: boolean
}
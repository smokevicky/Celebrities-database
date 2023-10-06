import { Gender } from './gender';

export interface Celebrity {
    id: number;
    first: string;
    last: string;
    dob: string | Date;
    gender: string | Gender;
    email?: string;
    picture: string;
    country: string;
    description: string;
}

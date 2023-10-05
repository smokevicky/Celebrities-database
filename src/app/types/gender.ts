export interface Genders {
    male: Gender;
    female: Gender;
    transgender: Gender;
    NOT_TO_SAY: Gender;
}

export interface Gender {
    label: string;
    value: string;
}

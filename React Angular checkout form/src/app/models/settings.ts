export interface LabelledValue{
    label: string;
    value: string;
}

export interface DisabledOption extends LabelledValue {
    disabled: boolean;
}

export interface Data{
    destinations: LabelledValue[];
    types: LabelledValue[];
    attendants:LabelledValue[];
    countries: LabelledValue[];
    safariExperiments: LabelledValue[];
    hostingTypes: LabelledValue[];
    meals: LabelledValue[];
    vehicles: LabelledValue[];
}

export class Settings {
    data: Data;
}
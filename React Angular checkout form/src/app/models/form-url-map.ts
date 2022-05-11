import { FormUrlMappingRule } from './form-url-item';
import { ArrayMapper, DateMapper, NumberMapper } from './form-url-mappers';

export const FORM_URL_MAP: FormUrlMappingRule[] = [
    {
        queryKey: 'dest',
        formKey: 'tour.destinations',
        formUrlMapper: new ArrayMapper(),
    },
    {
        queryKey: 'safexp',
        formKey: 'tour.safariExperiments',
        formUrlMapper: new ArrayMapper(),
    },
    {
        queryKey: 'tour',
        formKey: 'tour.tourType',
    },
    {
        queryKey: 'attendants',
        formKey: 'tour.attendants',
        formUrlMapper: new ArrayMapper(),
    },
    {
        queryKey: 'start',
        formKey: 'tour.startDate',
        formUrlMapper: new DateMapper(),
    },
    {
        queryKey: 'isdur',
        formKey: 'tour.isDuration',
        formUrlMapper: new NumberMapper(),
    },
    {
        queryKey: 'end',
        formKey: 'tour.endDate',
        formUrlMapper: new DateMapper(),
    },
    {
        queryKey: 'dur',
        formKey: 'tour.duration',
    },
    {
        queryKey: 'hosting',
        formKey: 'preferences.hostingType',
    },
    {
        queryKey: 'vehicle',
        formKey: 'preferences.vehicleType',
    },
    {
        queryKey: 'meal',
        formKey: 'preferences.mealType',
    },
];

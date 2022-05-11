import { FormGroup } from '@angular/forms';
import { ParamMap } from '@angular/router';
import { FORM_URL_MAP } from '../models/form-url-map';

export class FormUrlMapperHelper {
    static mapToUrl(form: FormGroup) {
        return FORM_URL_MAP.reduce((obj: any, r) => {
            const { value } = form.get(r.formKey);
            if (value != null) {
                obj[r.queryKey] = r.formUrlMapper
                    ? r.formUrlMapper.toQuery(value)
                    : value;
            }

            return obj;
        }, {});
    }

    static mapToForm(
        form: FormGroup,
        queryParamMap: ParamMap,
        disableAfterFilling: boolean = false
    ) {
        FORM_URL_MAP.forEach((r) => {
            if (queryParamMap.has(r.queryKey)) {
                const rawValue = queryParamMap.get(r.queryKey);
                const value = r.formUrlMapper
                    ? r.formUrlMapper.fromQuery(rawValue)
                    : rawValue;

                const control = form.get(r.formKey);
                control.setValue(value);

                if (disableAfterFilling) {
                    control.disable();
                }
            }
        });
    }
}

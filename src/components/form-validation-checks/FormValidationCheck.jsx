import { FormValidationCheckV1 } from "./FormValidationCheckV1";
import { FormValidationCheckV2 } from "./FormValidationCheckV2";
import { FormValidationCheckV3 } from "./FormValidationCheckV3";

export const FormValidationCheck = () => {
    return (
        <div className="card">
            <h1 className="font-bold text-xl">Form Validation Check</h1>
            <FormValidationCheckV1 />
            <FormValidationCheckV2 />
            <FormValidationCheckV3 />
        </div>
    );
 }
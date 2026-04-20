import { CheckBoxValidate } from "./CheckBoxValidate";
import { RadioValidate } from "./ReadioValidate";
import { TextAreaValidation } from "./TextAreaValidateCheck";


export const FormValidate = () => {
    return (
        <div className="card">
             <RadioValidate />
            <CheckBoxValidate />    
            <TextAreaValidation />
        </div>
    );
}
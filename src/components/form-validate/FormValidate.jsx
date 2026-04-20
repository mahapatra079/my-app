import { CheckBoxValidate } from "./CheckBoxValidate";
import { RadioValidate } from "./ReadioValidate";
import { TextAreaValidation } from "./TextAreaValidateCheck";


export const FormValidate = () => {
  return (
        <div className="card">
           <h2 className="font-bold text-lg mb-5">Validation Check</h2>
            <RadioValidate />
          <CheckBoxValidate />    
          <TextAreaValidation />
      </div>
    );
}
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

// Form elements in React are used to collect user input like login or search. 
// They can be controlled using React state (controlled components) or by using refs (uncontrolled components)

// Key Form Elements in React
// <input />
// <textarea />
// <select />
// <button />
// <form />

import { useState } from "react";
import { armorPieceNames, itemNames } from "../../_data/armor";
import { ArmorPieceInputData } from "../../App";

interface FormState {
    name: string;
    level: 0 | 1 | 2 | 3 | 4;
}

interface SyntheticEvent {
    target: {
        name: string;
        value: string;
    }
}

interface FormProps {
    onFormSubmit: (data: ArmorPieceInputData) => void;
}

function Form({ onFormSubmit }: FormProps) {
    const initialFormState = {

    }
    const [formState, setFormState] = useState<FormState>({
        name: '',
        level: 0,
    });

    function handleChange(e: SyntheticEvent) {
        const { name, value } = e.target;
        const sanitizedValue: string | number = name === 'level' ? +value : value;
        setFormState({ ...formState, [name]: sanitizedValue });
    }

    const armorSuitOptions: JSX.Element[] = armorPieceNames.map((name) => (
        <option key={name} value="name">{name}</option>
    ));

    return( 
        <div>
            <form onSubmit={(_) => onFormSubmit(formState as ArmorPieceInputData)}>
                <select name="name" onChange={(e) => handleChange(e as SyntheticEvent)}>
                    {armorSuitOptions}
                </select>
                <select name="level">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button onSubmit={(_) => onFormSubmit(formState as ArmorPieceInputData)}>Submit</button>
            </form>
        </div>
    );
}

export default Form;

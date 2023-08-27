import { CalculatedResultProps } from "../_models/props";

function CalculatedResult({ item, requirement }: CalculatedResultProps) {
    return (
        <div className="item-requirement">
            <p>{item}</p>
            <p>{requirement}</p>
        </div>
    );
}

export default CalculatedResult;

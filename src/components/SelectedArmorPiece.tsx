import { SelectedArmorPieceProps } from '../_models/props';

function SelectedArmorPiece({name, level, removeArmorPieceFromState}: SelectedArmorPieceProps) {
    return (
        <div className="selected-armor-piece">
            <p>{`${name} (level ${level})`}</p>
            <p
                onClick={() => removeArmorPieceFromState(name)}
                className="remove-selected-piece"
                title="Remove piece"
            >
                X
            </p>
        </div>
    );
}

export default SelectedArmorPiece;
import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { armorData, armorPieceNames } from "./_data/armor";
import { StringNumberMap } from "./_models/generic";
import { ArmorPiece } from "./_models/armor";

export interface ArmorPieceInputData {
    name: string;
    level: 0 | 1 | 2 | 3 | 4;
}

interface FormState {
    name: string;
    level: 0 | 1 | 2 | 3 | 4;
}

function App() {
    const initialFormState: FormState = {
        name: "",
        level: 0,
    };
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [selectedArmorPieces, setSelectedArmorPieces] = useState<
        ArmorPieceInputData[]
    >([]);
    const [calculatedResults, setCalculatedResults] = useState<StringNumberMap | null>(null);

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        const sanitizedValue: string | number =
            name === "level" ? +value : value;
        setFormState({ ...formState, [name]: sanitizedValue });
    }

    const armorSuitOptions: JSX.Element[] = armorPieceNames.map((name) => (
        <option key={name} value={name}>
            {name}
        </option>
    ));

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSelectedArmorPieces([...selectedArmorPieces, formState]);
        setFormState(initialFormState);
    }

    function removeArmorPieceFromState(toRemove: string) {
        setSelectedArmorPieces(
            selectedArmorPieces.filter((x) => x.name !== toRemove)
        );
    }

    function calculateItemRequirements() {
        const requirements: StringNumberMap = {};
        selectedArmorPieces.forEach(({ name, level }) => {
            const armorPiece = retrieveArmorPiece(name);
            if (!armorPiece.materialsRequiredForUpgrades) return;
            for (let i = level; i < 4; i++) {
                armorPiece.materialsRequiredForUpgrades[i].forEach(
                    ([material, req]) => {
                        requirements[material] ??= 0;
                        requirements[material] += req;
                    }
                );
            }
        });
        setCalculatedResults(requirements);
    }

    function retrieveArmorPiece(name: string): ArmorPiece {
        return (
            armorData
                .flatMap(({ headgear, body, legwear }) => [
                    headgear,
                    body,
                    legwear,
                ])
                .find((piece) => piece.name === name) ?? ({} as ArmorPiece)
        );
    }

    function selectAllArmorPiece() {
        const allPieces: ArmorPieceInputData[] = [];
        armorData.forEach(({ headgear, body, legwear }) => {
            [headgear, body, legwear].forEach(({ name }) => {
                allPieces.push({
                    name,
                    level: 0,
                });
            });
        });
        setSelectedArmorPieces(allPieces);
    }

    const selectedArmorPieceListItems = selectedArmorPieces.map(
        ({ name, level }) => {
            return (
                <div key={name} className="selected-armor-piece">
                    <p>{`${name}: ${level}`}</p>
                    <p
                        onClick={() => removeArmorPieceFromState(name)}
                        className="remove-selected-piece"
                    >
                        X
                    </p>
                </div>
            );
        }
    );

    return (
        <>
            <h1>TOTK Armor Upgrade Guide</h1>
            <div className="app">
                <div className="left-panel">
                    <div className="selected-pieces-container">
                        {selectedArmorPieceListItems}
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <select
                            value={formState.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                        >
                            <option value=""></option>
                            {armorSuitOptions}
                        </select>
                        <select
                            name="level"
                            value={formState.level + ""}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button type="submit">Add piece</button>
                    </form>
                    <br />
                    <br />
                    <button onClick={() => selectAllArmorPiece()}>
                        Just add everythying at level 0
                    </button>
                    <button onClick={() => calculateItemRequirements()}>
                        Calculate
                    </button>
                </div>
                <div className="right-panel"></div>
            </div>
        </>
    );
}

export default App;

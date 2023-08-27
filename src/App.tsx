import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { armorData, armorPieceNames } from "./_data/armor";
import { StringNumberMap } from "./_models/generic";
import { ArmorPiece } from "./_models/armor";
import SelectedArmorPiece from "./components/SelectedArmorPiece";
import CalculatedResult from "./components/CalculatedResult";

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

    function clearResults() {
        setCalculatedResults(null);
        setSelectedArmorPieces([]);
    }

    function removeArmorPieceFromState(toRemove: string) {
        setSelectedArmorPieces(
            selectedArmorPieces.filter((x) => x.name !== toRemove)
        );
    }

    function calculateItemRequirements() {
        const requirements: StringNumberMap = {};
        const armorPieces = armorData.flatMap(({ headgear, body, legwear }) => [
            headgear,
            body,
            legwear,
        ]);
        for (const { name, level } of selectedArmorPieces) {
            const armorPiece =
                armorPieces.find((piece) => piece.name === name) ??
                ({} as ArmorPiece);

            if (!armorPiece.materialsRequiredForUpgrades) return;

            for (let i = level; i < 4; i++) {
                armorPiece.materialsRequiredForUpgrades[i].forEach(
                    ([material, req]) => {
                        requirements[material] ??= 0;
                        requirements[material] += req;
                    }
                );
            }
        }
        setCalculatedResults(requirements);
    }

    function selectAllArmorPieces() {
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

    function formattedCalculatedResults(): JSX.Element[] {
        return Object.entries(calculatedResults ?? [])
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([item, requirement]) => (
                <CalculatedResult 
                    key={item + requirement}
                    item={item}
                    requirement={requirement}
                />
            ));
    }

    const selectedArmorPieceListItems = selectedArmorPieces.map(
        ({ name, level }) => {
            return (
                <SelectedArmorPiece
                    name={name}
                    level={level}
                    key={name}
                    removeArmorPieceFromState={removeArmorPieceFromState}
                />
            );
        }
    );

    return (
        <div className="app">
            <div>
                <h1 style={{width: '600px', textAlign: 'center'}}>TOTK Armor Upgrade Guide</h1>
                <div className="content">
                    <div className="left-panel">
                        <div className="selected-pieces-container">
                            {selectedArmorPieceListItems}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <select
                                value={formState.name}
                                name="name"
                                onChange={handleChange}
                            >
                                <option value=""></option>
                                {armorSuitOptions}
                            </select>
                            <select
                                name="level"
                                value={formState.level + ""}
                                onChange={handleChange}
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <button type="submit">+</button>
                        </form>
                        <br />
                        <br />
                        <button onClick={() => selectAllArmorPieces()}>
                            Just add everythying at level 0
                        </button>
                        <button onClick={() => calculateItemRequirements()}>
                            Calculate
                        </button>
                    </div>
                    <div className="right-panel">
                        <div className="results-container">
                            {formattedCalculatedResults()}
                        </div>
                        <button onClick={() => clearResults()}>
                            Clear results
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

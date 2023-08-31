import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { armorData, armorPieceNames } from "./_data/armor";
import { StringNumberMap } from "./_models/generic";
import SelectedArmorPiece from "./components/SelectedArmorPiece";
import CalculatedResult from "./components/CalculatedResult";
import { calculateItemRequirements } from "./_utils/data-processors";

export interface ArmorPieceInputData {
    name: string;
    level: 0 | 1 | 2 | 3 | 4;
}

function App() {
    const initialFormState: ArmorPieceInputData = {
        name: "",
        level: 0,
    };
    const [formState, setFormState] = useState<ArmorPieceInputData>(initialFormState);
    const [selectedArmorPieces, setSelectedArmorPieces] = useState<ArmorPieceInputData[]>([]);
    const [itemRequirements, setItemRequirements] = useState<StringNumberMap | null>(null);

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        const sanitizedValue = name === "level" ? +value : value;
        setFormState({ ...formState, [name]: sanitizedValue });
    }

    const armorSuitOptions: JSX.Element[] = armorPieceNames.map((name) => (
        <option key={name} value={name}>{name}</option>
    ));

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSelectedArmorPieces([...selectedArmorPieces, formState]);
        setFormState(initialFormState);
    }

    function clearResults() {
        setItemRequirements(null);
        setSelectedArmorPieces([]);
    }

    function removeArmorPieceFromState(toRemove: string) {
        setSelectedArmorPieces(
            selectedArmorPieces.filter((x) => x.name !== toRemove)
        );
    }

    function calculateAndSetItemRequirements() {
        setItemRequirements(calculateItemRequirements(selectedArmorPieces));
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

    const formattedItemRequirements = Object.entries(itemRequirements ?? [])
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([item, requirement]) => (
            <CalculatedResult 
                key={item + requirement}
                item={item}
                requirement={requirement}
            />
        ));
    

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
                <h1 style={{width: '600px', textAlign: 'center'}}>
                    TOTK Armor Upgrade Guide
                </h1>
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
                        <button onClick={() => calculateAndSetItemRequirements()}>
                            Calculate
                        </button>
                    </div>
                    <div className="right-panel">
                        <div className="results-container">
                            {formattedItemRequirements}
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

export interface SelectedArmorPieceProps {
    name: string;
    level: number;
    removeArmorPieceFromState(name: string): void; 
}

export interface CalculatedResultProps {
    item: string;
    requirement: number;
}

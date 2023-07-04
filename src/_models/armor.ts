export interface ArmorSet {
    name: string;
    headgear: ArmorPiece;
    body: ArmorPiece;
    legwear: ArmorPiece;
    setBonus: string | null;
}

export interface ArmorPiece {
    name: string;
    materialsRequiredForUpgrades: MaterialRequirement[][];
}

export type MaterialRequirement = [string, number]

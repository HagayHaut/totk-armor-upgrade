import { ArmorPiece, ArmorSet } from "../_models/armor";

export function extractUniqueArmorPieceNames(armorData: ArmorSet[]): string[] {
    return armorData.flatMap((armorSet) => [
        armorSet.headgear.name,
        armorSet.body.name,
        armorSet.legwear.name,
    ]);
}

export function extractUniqueItemNames(armorData: ArmorSet[]): string[] {
    const uniqueNames: Set<string> = new Set();
    armorData.forEach((armorSet) => {
        for (const [key, val] of Object.entries(armorSet)) {
            if (["headgear", "body", "legwear"].includes(key)) {
                for (const level of (val as unknown as ArmorPiece)
                    .materialsRequiredForUpgrades) {
                    for (const req of level) {
                        uniqueNames.add(req[0]);
                    }
                }
            }
        }
    });
    return [...uniqueNames];
}

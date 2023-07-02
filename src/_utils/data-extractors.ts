import { ArmorPiece, ArmorSet } from "../_models/armor";
import { StringNumberMap } from "../_models/generic";

export function extractUniqueArmorPieceNames(armorData: ArmorSet[]): string[] {
    return armorData.flatMap((armorSet) => [
        armorSet.headgear.name,
        armorSet.body.name,
        armorSet.legwear.name,
    ]);
}

export function extractUniqueMaterialNames(armorData: ArmorSet[]): string[] {
    const uniqueNames: Set<string> = new Set();
    armorData.forEach((armorSet) => {
        for (const [key, val] of Object.entries(armorSet)) {
            if (["headgear", "body", "legwear"].includes(key)) {
                for (const level of (val as unknown as ArmorPiece)
                    .materialsRequiredForUpgrades) {
                    for (const [material, _] of level) {
                        uniqueNames.add(material);
                    }
                }
            }
        }
    });
    return [...uniqueNames];
}

export function extractMaterialRequirements(armorData: ArmorSet[]): StringNumberMap {
    const requirments: StringNumberMap = {};
    for (const armorSet of armorData) {
        for (const [key, val] of Object.entries(armorSet)) {
            if (["headgear", "body", "legwear"].includes(key)) {
                for (const level of (val as unknown as ArmorPiece)
                    .materialsRequiredForUpgrades) {
                    for (const [material, req] of level) {
                        requirments[material] ??= 0;
                        requirments[material] += req;
                    }
                }
            }
        }
    }
    return requirments;
}

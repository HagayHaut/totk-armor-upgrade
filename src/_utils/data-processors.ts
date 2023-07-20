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

export function addRupeeReqsToArmorSet(armorSet: ArmorSet): void {
    addRupeeReqsToArmorPiece(armorSet.headgear);
    addRupeeReqsToArmorPiece(armorSet.body);
    addRupeeReqsToArmorPiece(armorSet.legwear);
}

function addRupeeReqsToArmorPiece(armorPiece: ArmorPiece): void {
    armorPiece.materialsRequiredForUpgrades.forEach((level, i) => {
        let req: number;
        switch (i) {
            case 0: req = 10; break;
            case 1: req = 50; break;
            case 2: req = 200; break;
            case 3: req = 500; break;
            default: req = 0;
        }
        level.push(["Rupee", req]);
    });
}
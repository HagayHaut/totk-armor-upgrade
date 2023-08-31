import { ArmorPieceInputData } from "../App";
import { armorData } from "../_data/armor";
import { ArmorPiece, ArmorSet } from "../_models/armor";
import { Items, RupeeRequirements, StringNumberMap } from "../_models/generic";

export function extractArmorPieceNames(armorData: ArmorSet[]) {
    return armorData.flatMap((armorSet) => [
        armorSet.headgear.name,
        armorSet.body.name,
        armorSet.legwear.name,
    ]);
}

export function extractUniqueMaterialNames(armorData: ArmorSet[]) {
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

export function extractMaterialRequirements(armorData: ArmorSet[]) {
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

export function addRupeeReqsToArmorSet(armorSet: ArmorSet) {
    [armorSet.headgear, armorSet.body, armorSet.legwear].forEach(
        addRupeeReqsToArmorPiece
    );
}

function addRupeeReqsToArmorPiece(armorPiece: ArmorPiece) {
    armorPiece.materialsRequiredForUpgrades.forEach((level, i) => {
        let req: number;
        switch (i) {
            case 0: req = RupeeRequirements.LEVEL_0; break;
            case 1: req = RupeeRequirements.LEVEL_1; break;
            case 2: req = RupeeRequirements.LEVEL_2; break;
            case 3: req = RupeeRequirements.LEVEL_3; break;
            default: req = 0;
        }
        level.push([Items.RUPEE, req]);
    });
}

export function calculateItemRequirements(selectedArmorPieces: ArmorPieceInputData[]) {
    const requirements: StringNumberMap = {};
    const armorPieces = armorData.flatMap(({ headgear, body, legwear }) => [
        headgear,
        body,
        legwear,
    ]);
    for (const { name, level } of selectedArmorPieces) {
        const armorPiece = armorPieces.find((piece) => 
            piece.name === name) ?? ({} as ArmorPiece);

        if (!armorPiece.materialsRequiredForUpgrades) continue;

        for (let i = level; i < 4; i++) {
            armorPiece.materialsRequiredForUpgrades[i].forEach(
                ([material, req]) => {
                    requirements[material] ??= 0;
                    requirements[material] += req;
                }
            );
        }
    }
    return requirements;
}
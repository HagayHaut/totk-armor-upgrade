import { ArmorSet, MaterialRequirement } from "../_models/armor";
import {
    addRupeeReqsToArmorSet,
    extractMaterialRequirements,
    extractUniqueArmorPieceNames,
    extractUniqueMaterialNames,
} from "../_utils/data-processors";

export const armorData: ArmorSet[] = [
    {
        name: "Flamebreaker Set",
        headgear: {
            name: "Flamebreaker Helm",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Moblin Horn", 3]],
                [
                    ["Moblin Fang", 5],
                    ["Fireproof Lizard", 5],
                ],
                [
                    ["Blue Moblin Horn", 5],
                    ["Flint", 15],
                    ["Smotherwing Butterfly", 3],
                ],
                [
                    ["Fire-Breath Lizalfos Horn", 5],
                    ["Fire-Breath Lizalfos Tail", 10],
                    ["Ruby", 5],
                ],
            ],
        },
        body: {
            name: "Flamebreaker Armor",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Moblin Horn", 3]],
                [
                    ["Moblin Fang", 5],
                    ["Fireproof Lizard", 5],
                ],
                [
                    ["Blue Moblin Horn", 5],
                    ["Flint", 15],
                    ["Smotherwing Butterfly", 3],
                ],
                [
                    ["Fire-Breath Lizalfos Horn", 5],
                    ["Fire-Breath Lizalfos Tail", 10],
                    ["Ruby", 5],
                ],
            ],
        },
        legwear: {
            name: "Flamebreaker Boots",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Moblin Horn", 3]],
                [
                    ["Moblin Fang", 5],
                    ["Fireproof Lizard", 5],
                ],
                [
                    ["Blue Moblin Horn", 5],
                    ["Flint", 15],
                    ["Smotherwing Butterfly", 3],
                ],
                [
                    ["Fire-Breath Lizalfos Horn", 5],
                    ["Fire-Breath Lizalfos Tail", 10],
                    ["Ruby", 5],
                ],
            ],
        },
        setBonus: "Fireproof",
    },
    {
        name: "Snowquill Set",
        headgear: {
            name: "Snowquill Headdress",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Red Chuchu Jelly", 3]],
                [
                    ["Warm Safflina", 3],
                    ["Red Chuchu Jelly", 5],
                ],
                [
                    ["Sunshroom", 5],
                    ["Fire Keese Wing", 5],
                    ["Fire-Breath Lizalfos Tail", 3],
                ],
                [
                    ["Fire-Breath Lizalfos Horn", 5],
                    ["Fire-Breath Lizalfos Tail", 10],
                    ["Ruby", 5],
                ],
            ],
        },
        body: {
            name: "Snowquill Tunic",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Red Chuchu Jelly", 3]],
                [
                    ["Warm Safflina", 3],
                    ["Red Chuchu Jelly", 5],
                ],
                [
                    ["Sunshroom", 5],
                    ["Fire Keese Wing", 5],
                    ["Fire-Breath Lizalfos Tail", 3],
                ],
                [
                    ["Fire-Breath Lizalfos Horn", 5],
                    ["Fire-Breath Lizalfos Tail", 10],
                    ["Ruby", 5],
                ],
            ],
        },
        legwear: {
            name: "Snowquill Trousers",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Red Chuchu Jelly", 3]],
                [
                    ["Warm Safflina", 3],
                    ["Red Chuchu Jelly", 5],
                ],
                [
                    ["Sunshroom", 5],
                    ["Fire Keese Wing", 5],
                    ["Fire-Breath Lizalfos Tail", 3],
                ],
                [
                    ["Fire-Breath Lizalfos Horn", 5],
                    ["Fire-Breath Lizalfos Tail", 10],
                    ["Ruby", 5],
                ],
            ],
        },
        setBonus: "Freezeproof",
    },
    {
        name: "Zora Set",
        headgear: {
            name: "Zora Helm",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Lizalfos Horn", 3]],
                [
                    ["Hyrule Bass", 5],
                    ["Lizalfos Talon", 5],
                ],
                [
                    ["Hearty Bass", 3],
                    ["Lizalfos Tail", 3],
                    ["Blue Lizalfos Horn", 5],
                ],
                [
                    ["Black Lizalfos Horn", 5],
                    ["Blue Lizalfos Tail", 5],
                    ["Opal", 20],
                ],
            ],
        },
        body: {
            name: "Zora Armor",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Lizalfos Horn", 3]],
                [
                    ["Hyrule Bass", 5],
                    ["Lizalfos Talon", 5],
                ],
                [
                    ["Hearty Bass", 3],
                    ["Lizalfos Tail", 3],
                    ["Blue Lizalfos Horn", 5],
                ],
                [
                    ["Black Lizalfos Horn", 5],
                    ["Blue Lizalfos Tail", 5],
                    ["Opal", 20],
                ],
            ],
        },
        legwear: {
            name: "Zora Greaves",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Lizalfos Horn", 3]],
                [
                    ["Hyrule Bass", 5],
                    ["Lizalfos Talon", 5],
                ],
                [
                    ["Hearty Bass", 3],
                    ["Lizalfos Tail", 3],
                    ["Blue Lizalfos Horn", 5],
                ],
                [
                    ["Black Lizalfos Horn", 5],
                    ["Blue Lizalfos Tail", 5],
                    ["Opal", 20],
                ],
            ],
        },
        setBonus: "Freezeproof",
    },
    {
        name: "Desert Voe Set",
        headgear: {
            name: "Desert Voe Headband",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["White Chuchu Jelly", 3]],
                [
                    ["White Chuchu Jelly", 5],
                    ["Cool Safflina", 3],
                ],
                [
                    ["Chillshroom", 5],
                    ["Ice Keese Wing", 5],
                    ["Ice-Breath Lizalfos Tail", 3],
                ],
                [
                    ["Ice-Breath Lizalfos Horn", 5],
                    ["Ice-Breath Lizalfos Tail", 5],
                    ["Sapphire", 5],
                ],
            ],
        },
        body: {
            name: "Desert Voe Spaulder",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["White Chuchu Jelly", 3]],
                [
                    ["White Chuchu Jelly", 5],
                    ["Cool Safflina", 3],
                ],
                [
                    ["Chillshroom", 5],
                    ["Ice Keese Wing", 5],
                    ["Ice-Breath Lizalfos Tail", 3],
                ],
                [
                    ["Ice-Breath Lizalfos Horn", 5],
                    ["Ice-Breath Lizalfos Tail", 5],
                    ["Sapphire", 5],
                ],
            ],
        },
        legwear: {
            name: "Desert Voe Trousers",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["White Chuchu Jelly", 3]],
                [
                    ["White Chuchu Jelly", 5],
                    ["Cool Safflina", 3],
                ],
                [
                    ["Chillshroom", 5],
                    ["Ice Keese Wing", 5],
                    ["Ice-Breath Lizalfos Tail", 3],
                ],
                [
                    ["Ice-Breath Lizalfos Horn", 5],
                    ["Ice-Breath Lizalfos Tail", 5],
                    ["Sapphire", 5],
                ],
            ],
        },
        setBonus: "Freezeproof",
    },
    {
        name: "Fierce Diety Set",
        headgear: {
            name: "Fierce Diety Mask",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [
                    ["Hinox Toenail", 5],
                    ["Dinraal's Scale", 1],
                ],
                [
                    ["Hinox Tooth", 5],
                    ["Dinraal's Claw", 1],
                ],
                [
                    ["Hinox Guts", 2],
                    ["Shard of Dinraal's Fang", 1],
                ],
                [
                    ["Lynel Guts", 2],
                    ["Dinraal's Horn", 1],
                ],
            ],
        },
        body: {
            name: "Fierce Diety Armor",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [
                    ["Hinox Toenail", 5],
                    ["Naydra's Scale", 1],
                ],
                [
                    ["Hinox Tooth", 5],
                    ["Naydra's Claw", 1],
                ],
                [
                    ["Hinox Guts", 2],
                    ["Shard of Naydra's Fang", 1],
                ],
                [
                    ["Lynel Guts", 2],
                    ["Naydra's Horn", 1],
                ],
            ],
        },
        legwear: {
            name: "Fierce Diety Boots",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [
                    ["Hinox Toenail", 5],
                    ["Farosh's Scale", 1],
                ],
                [
                    ["Hinox Tooth", 5],
                    ["Farosh's Claw", 1],
                ],
                [
                    ["Hinox Guts", 2],
                    ["Shard of Farosh's Fang", 1],
                ],
                [
                    ["Lynel Guts", 2],
                    ["Farosh's Horn", 1],
                ],
            ],
        },
        setBonus: "Freezeproof",
    },
    {
        name: "Zonaite Set",
        headgear: {
            name: "Zonaite Helm",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Soldier Construct Horn", 5]],
                [
                    ["Soldier Construct II Horn", 5],
                    ["Zonaite", 5],
                    ["Captain Construct I Horn", 5],
                ],
                [
                    ["Large Zonaite", 5],
                    ["Captain Construct II Horn", 5],
                    ["Soldier Construct II Horn", 5],
                ],
                [
                    ["Large Zonaite", 10],
                    ["Captain Construct II Horn", 5],
                    ["Soldier Construct IV Horn", 5],
                ],
            ],
        },
        body: {
            name: "Zonaite Waistguard",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Soldier COnstruct Horn", 5]],
                [
                    ["Soldier Construct II Horn", 5],
                    ["Zonaite", 5],
                    ["Captain Construct I Horn", 5],
                ],
                [
                    ["Large Zonaite", 5],
                    ["Captain Construct II Horn", 5],
                    ["Soldier Construct II Horn", 5],
                ],
                [
                    ["Large Zonaite", 10],
                    ["Captain Construct II Horn", 5],
                    ["Soldier Construct IV Horn", 5],
                ],
            ],
        },
        legwear: {
            name: "Zonaite Shin Guards",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [["Soldier Construct Horn", 5]],
                [
                    ["Soldier Construct II Horn", 5],
                    ["Zonaite", 5],
                    ["Captain Construct I Horn", 5],
                ],
                [
                    ["Large Zonaite", 5],
                    ["Captain Construct II Horn", 5],
                    ["Soldier Construct II Horn", 5],
                ],
                [
                    ["Large Zonaite", 10],
                    ["Captain Construct II Horn", 5],
                    ["Soldier Construct IV Horn", 5],
                ],
            ],
        },
        setBonus: "Energy Recharge Up",
    },
].sort((a, b) => a.name.localeCompare(b.name));

armorData.forEach(addRupeeReqsToArmorSet);
export const armorPieceNames = extractUniqueArmorPieceNames(armorData);
export const itemNames = extractUniqueMaterialNames(armorData);
export const totalRequirements = extractMaterialRequirements(armorData);

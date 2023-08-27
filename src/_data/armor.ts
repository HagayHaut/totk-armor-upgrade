import { ArmorSet, MaterialRequirement } from "../_models/armor";
import { Items } from "../_models/generic";
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
                [[Items.MOBLIN_HORN, 3]],
                [
                    [Items.MOBLIN_FANG, 5],
                    [Items.FIREPROOF_LIZARD, 5],
                ],
                [
                    [Items.BLUE_MOBLIN_HORN, 5],
                    [Items.FLINT, 15],
                    [Items.SMOTHERWING_BUTTERFLY, 3],
                ],
                [
                    [Items.FIRE_BREATH_LIZALFOS_HORN, 5],
                    [Items.FIRE_BREATH_LIZALFOS_TAIL, 10],
                    [Items.RUBY, 5],
                ],
            ],
        },
        body: {
            name: "Flamebreaker Armor",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.MOBLIN_HORN, 3]],
                [
                    [Items.MOBLIN_FANG, 5],
                    [Items.FIREPROOF_LIZARD, 5],
                ],
                [
                    [Items.BLUE_MOBLIN_HORN, 5],
                    [Items.FLINT, 15],
                    [Items.SMOTHERWING_BUTTERFLY, 3],
                ],
                [
                    [Items.FIRE_BREATH_LIZALFOS_HORN, 5],
                    [Items.FIRE_BREATH_LIZALFOS_TAIL, 10],
                    [Items.RUBY, 5],
                ],
            ],
        },
        legwear: {
            name: "Flamebreaker Boots",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.MOBLIN_HORN, 3]],
                [
                    [Items.MOBLIN_FANG, 5],
                    [Items.FIREPROOF_LIZARD, 5],
                ],
                [
                    [Items.BLUE_MOBLIN_HORN, 5],
                    [Items.FLINT, 15],
                    [Items.SMOTHERWING_BUTTERFLY, 3],
                ],
                [
                    [Items.FIRE_BREATH_LIZALFOS_HORN, 5],
                    [Items.FIRE_BREATH_LIZALFOS_TAIL, 10],
                    [Items.RUBY, 5],
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
                [[Items.RED_CHUCHU_JELLY, 3]],
                [
                    [Items.WARM_SAFFLINA, 3],
                    [Items.RED_CHUCHU_JELLY, 5],
                ],
                [
                    [Items.SUNSHROOM, 5],
                    [Items.FIRE_KEESE_WING, 5],
                    [Items.FIRE_BREATH_LIZALFOS_TAIL, 3],
                ],
                [
                    [Items.FIRE_BREATH_LIZALFOS_HORN, 5],
                    [Items.FIRE_BREATH_LIZALFOS_TAIL, 10],
                    [Items.RUBY, 5],
                ],
            ],
        },
        body: {
            name: "Snowquill Tunic",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.RED_CHUCHU_JELLY, 3]],
                [
                    [Items.WARM_SAFFLINA, 3],
                    [Items.RED_CHUCHU_JELLY, 5],
                ],
                [
                    [Items.SUNSHROOM, 5],
                    [Items.FIRE_KEESE_WING, 5],
                    [Items.FIRE_BREATH_LIZALFOS_TAIL, 3],
                ],
                [
                    [Items.FIRE_BREATH_LIZALFOS_HORN, 5],
                    [Items.FIRE_BREATH_LIZALFOS_TAIL, 10],
                    [Items.RUBY, 5],
                ],
            ],
        },
        legwear: {
            name: "Snowquill Trousers",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.RED_CHUCHU_JELLY, 3]],
                [
                    [Items.WARM_SAFFLINA, 3],
                    [Items.RED_CHUCHU_JELLY, 5],
                ],
                [
                    [Items.SUNSHROOM, 5],
                    [Items.FIRE_KEESE_WING, 5],
                    [Items.FIRE_BREATH_LIZALFOS_TAIL, 3],
                ],
                [
                    [Items.FIRE_BREATH_LIZALFOS_HORN, 5],
                    [Items.FIRE_BREATH_LIZALFOS_TAIL, 10],
                    [Items.RUBY, 5],
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
                [[Items.LIZALFOS_HORN, 3]],
                [
                    [Items.HYRULE_BASS, 5],
                    [Items.LIZALFOS_TALON, 5],
                ],
                [
                    [Items.HEARTY_BASS, 3],
                    [Items.LIZALFOS_TAIL, 3],
                    [Items.BLUE_LIZALFOS_HORN, 5],
                ],
                [
                    [Items.BLACK_LIZALFOS_HORN, 5],
                    [Items.BLUE_LIZALFOS_TAIL, 5],
                    [Items.OPAL, 20],
                ],
            ],
        },
        body: {
            name: "Zora Armor",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.LIZALFOS_HORN, 3]],
                [
                    [Items.HYRULE_BASS, 5],
                    [Items.LIZALFOS_TALON, 5],
                ],
                [
                    [Items.HEARTY_BASS, 3],
                    [Items.LIZALFOS_TAIL, 3],
                    [Items.BLUE_LIZALFOS_HORN, 5],
                ],
                [
                    [Items.BLACK_LIZALFOS_HORN, 5],
                    [Items.BLUE_LIZALFOS_TAIL, 5],
                    [Items.OPAL, 20],
                ],
            ],
        },
        legwear: {
            name: "Zora Greaves",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.LIZALFOS_HORN, 3]],
                [
                    [Items.HYRULE_BASS, 5],
                    [Items.LIZALFOS_TALON, 5],
                ],
                [
                    [Items.HEARTY_BASS, 3],
                    [Items.LIZALFOS_TAIL, 3],
                    [Items.BLUE_LIZALFOS_HORN, 5],
                ],
                [
                    [Items.BLACK_LIZALFOS_HORN, 5],
                    [Items.BLUE_LIZALFOS_TAIL, 5],
                    [Items.OPAL, 20],
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
                [[Items.WHITE_CHUCHU_JELLY, 3]],
                [
                    [Items.WHITE_CHUCHU_JELLY, 5],
                    [Items.COOL_SUFFLINA, 3],
                ],
                [
                    [Items.CHILLSHROOM, 5],
                    [Items.ICE_KEESE_WING, 5],
                    [Items.ICE_BREATH_LIZALFOS_TAIL, 3],
                ],
                [
                    [Items.ICE_BREATH_LIZALFOS_HORN, 5],
                    [Items.ICE_BREATH_LIZALFOS_TAIL, 5],
                    [Items.SAPPHIRE, 5],
                ],
            ],
        },
        body: {
            name: "Desert Voe Spaulder",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.WHITE_CHUCHU_JELLY, 3]],
                [
                    [Items.WHITE_CHUCHU_JELLY, 5],
                    [Items.COOL_SUFFLINA, 3],
                ],
                [
                    [Items.CHILLSHROOM, 5],
                    [Items.ICE_KEESE_WING, 5],
                    [Items.ICE_BREATH_LIZALFOS_TAIL, 3],
                ],
                [
                    [Items.ICE_BREATH_LIZALFOS_HORN, 5],
                    [Items.ICE_BREATH_LIZALFOS_TAIL, 5],
                    [Items.SAPPHIRE, 5],
                ],
            ],
        },
        legwear: {
            name: "Desert Voe Trousers",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.WHITE_CHUCHU_JELLY, 3]],
                [
                    [Items.WHITE_CHUCHU_JELLY, 5],
                    [Items.COOL_SUFFLINA, 3],
                ],
                [
                    [Items.CHILLSHROOM, 5],
                    [Items.ICE_KEESE_WING, 5],
                    [Items.ICE_BREATH_LIZALFOS_TAIL, 3],
                ],
                [
                    [Items.ICE_BREATH_LIZALFOS_HORN, 5],
                    [Items.ICE_BREATH_LIZALFOS_TAIL, 5],
                    [Items.SAPPHIRE, 5],
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
                    [Items.HINOX_TOENAIL, 5],
                    [Items.DINRAALS_SCALE, 1],
                ],
                [
                    [Items.HINOX_TOOTH, 5],
                    [Items.DINRAALS_CLAW, 1],
                ],
                [
                    [Items.HINOX_GUTS, 2],
                    [Items.DINRAALS_FANG, 1],
                ],
                [
                    [Items.LYNEL_GUTS, 2],
                    [Items.DINRAALS_HORN, 1],
                ],
            ],
        },
        body: {
            name: "Fierce Diety Armor",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [
                    [Items.HINOX_TOENAIL, 5],
                    [Items.NAYDRAS_SCALE, 1],
                ],
                [
                    [Items.HINOX_TOOTH, 5],
                    [Items.NAYDRAS_CLAW, 1],
                ],
                [
                    [Items.HINOX_GUTS, 2],
                    [Items.NAYDRAS_FANG, 1],
                ],
                [
                    [Items.LYNEL_GUTS, 2],
                    [Items.NAYDRAS_HORN, 1],
                ],
            ],
        },
        legwear: {
            name: "Fierce Diety Boots",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [
                    [Items.HINOX_TOENAIL, 5],
                    [Items.FAROSHS_SCALE, 1],
                ],
                [
                    [Items.HINOX_TOOTH, 5],
                    [Items.FAROSHS_CLAW, 1],
                ],
                [
                    [Items.HINOX_GUTS, 2],
                    [Items.FAROSHS_FANG, 1],
                ],
                [
                    [Items.LYNEL_GUTS, 2],
                    [Items.FAROSHS_HORN, 1],
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
                [[Items.SOLDIER_CONSTRUCT_HORN, 5]],
                [
                    [Items.SOLIDER_CONSTRUCT_2_HORN, 5],
                    [Items.ZONAITE, 5],
                    [Items.CAPTAIN_CONSTRUCT_1_HORN, 5],
                ],
                [
                    [Items.LARGE_ZONAITE, 5],
                    [Items.CAPTAIN_CONSTRUCT_2_HORN, 5],
                    [Items.SOLIDER_CONSTRUCT_2_HORN, 5],
                ],
                [
                    [Items.LARGE_ZONAITE, 10],
                    [Items.CAPTAIN_CONSTRUCT_2_HORN, 5],
                    [Items.SOLDIER_CONSTRUCT_4_HORN, 5],
                ],
            ],
        },
        body: {
            name: "Zonaite Waistguard",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.SOLDIER_CONSTRUCT_HORN, 5]],
                [
                    [Items.SOLIDER_CONSTRUCT_2_HORN, 5],
                    [Items.ZONAITE, 5],
                    [Items.CAPTAIN_CONSTRUCT_1_HORN, 5],
                ],
                [
                    [Items.LARGE_ZONAITE, 5],
                    [Items.CAPTAIN_CONSTRUCT_2_HORN, 5],
                    [Items.SOLIDER_CONSTRUCT_2_HORN, 5],
                ],
                [
                    [Items.LARGE_ZONAITE, 10],
                    [Items.CAPTAIN_CONSTRUCT_2_HORN, 5],
                    [Items.SOLDIER_CONSTRUCT_4_HORN, 5],
                ],
            ],
        },
        legwear: {
            name: "Zonaite Shin Guards",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.SOLDIER_CONSTRUCT_HORN, 5]],
                [
                    [Items.SOLIDER_CONSTRUCT_2_HORN, 5],
                    [Items.ZONAITE, 5],
                    [Items.CAPTAIN_CONSTRUCT_1_HORN, 5],
                ],
                [
                    [Items.LARGE_ZONAITE, 5],
                    [Items.CAPTAIN_CONSTRUCT_2_HORN, 5],
                    [Items.SOLIDER_CONSTRUCT_2_HORN, 5],
                ],
                [
                    [Items.LARGE_ZONAITE, 10],
                    [Items.CAPTAIN_CONSTRUCT_2_HORN, 5],
                    [Items.SOLDIER_CONSTRUCT_4_HORN, 5],
                ],
            ],
        },
        setBonus: "Energy Recharge Up",
    },
    {
        name: "Stealth Set",
        headgear: {
            name: "Stealth Mask",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.BLUE_NIGHTSHADE, 3]],
                [
                    [Items.BLUE_NIGHTSHADE, 5],
                    [Items.SUNSET_FIREFLY, 5],
                ],
                [
                    [Items.SILENT_SHROOM, 8],
                    [Items.STICKY_FROG, 5],
                    [Items.SNEAKY_RIVER_SNAIL, 5],
                ],
                [
                    [Items.SUNDELION, 10],
                    [Items.STEALTHFIN_TROUT, 10],
                    [Items.SILENT_PRINCESS, 5],
                ],
            ],
        },
        body: {
            name: "Stealth Chest Guard",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.BLUE_NIGHTSHADE, 3]],
                [
                    [Items.BLUE_NIGHTSHADE, 5],
                    [Items.SUNSET_FIREFLY, 5],
                ],
                [
                    [Items.SILENT_SHROOM, 8],
                    [Items.STICKY_FROG, 5],
                    [Items.SNEAKY_RIVER_SNAIL, 5],
                ],
                [
                    [Items.SUNDELION, 10],
                    [Items.STEALTHFIN_TROUT, 10],
                    [Items.SILENT_PRINCESS, 5],
                ],
            ],
        },
        legwear: {
            name: "Stealth Tights",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [[Items.BLUE_NIGHTSHADE, 3]],
                [
                    [Items.BLUE_NIGHTSHADE, 5],
                    [Items.SUNSET_FIREFLY, 5],
                ],
                [
                    [Items.SILENT_SHROOM, 8],
                    [Items.STICKY_FROG, 5],
                    [Items.SNEAKY_RIVER_SNAIL, 5],
                ],
                [
                    [Items.SUNDELION, 10],
                    [Items.STEALTHFIN_TROUT, 10],
                    [Items.SILENT_PRINCESS, 5],
                ],
            ],
        },
        setBonus: "Stealth Up",
    },
    {
        name: "Climber Set",
        headgear: {
            name: "Climber's Bandana",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [
                    [Items.KEESE_WING, 3],
                    [Items.RUSHROOM, 3],
                ],
                [
                    [Items.ELECTRIC_KEESE_WING, 5],
                    [Items.HIGHTAIL_LIZARD, 5],
                ],
                [
                    [Items.ICE_KEESE_WING, 8],
                    [Items.HOT_FOOTED_FROG, 10],
                ],
                [
                    [Items.FIRE_KEESE_WING, 10],
                    [Items.SWIFT_VIOLET, 20],
                ],
            ],
        },
        body: {
            name: "Climbing Gear",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [
                    [Items.KEESE_WING, 3],
                    [Items.RUSHROOM, 3],
                ],
                [
                    [Items.ELECTRIC_KEESE_WING, 5],
                    [Items.HIGHTAIL_LIZARD, 5],
                ],
                [
                    [Items.ICE_KEESE_WING, 8],
                    [Items.HOT_FOOTED_FROG, 10],
                ],
                [
                    [Items.FIRE_KEESE_WING, 10],
                    [Items.SWIFT_VIOLET, 20],
                ],
            ],
        },
        legwear: {
            name: "Climbing Boots",
            materialsRequiredForUpgrades: <MaterialRequirement[][]>[
                [
                    [Items.KEESE_WING, 3],
                    [Items.RUSHROOM, 3],
                ],
                [
                    [Items.ELECTRIC_KEESE_WING, 5],
                    [Items.HIGHTAIL_LIZARD, 5],
                ],
                [
                    [Items.ICE_KEESE_WING, 8],
                    [Items.HOT_FOOTED_FROG, 10],
                ],
                [
                    [Items.FIRE_KEESE_WING, 10],
                    [Items.SWIFT_VIOLET, 20],
                ],
            ],
        },
        setBonus: "Climb Speed Up",
    },
].sort((a, b) => a.name.localeCompare(b.name));

armorData.forEach(addRupeeReqsToArmorSet);
export const armorPieceNames = extractUniqueArmorPieceNames(armorData);
export const itemNames = extractUniqueMaterialNames(armorData);
export const totalRequirements = extractMaterialRequirements(armorData);

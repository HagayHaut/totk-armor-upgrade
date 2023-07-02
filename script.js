const preData = [
    {
        name: "Flamebreaker Armor",
        headgear: {
            name: "Flamebreaker Helm",
            materialsRequiredForUpgrades: [
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
            materialsRequiredForUpgrades: [
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
            materialsRequiredForUpgrades: [
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
        name: "Snowquill Armor",
        headgear: {
            name: "Snowquill Headdress",
            materialsRequiredForUpgrades: [
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
            materialsRequiredForUpgrades: [
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
            materialsRequiredForUpgrades: [
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
        setBonus: "Fireproof",
    },
];

const postData = preData.map((set) => {
    set.headgear = transform(set.headgear);
    set.body = transform(set.body);
    set.legwear = transform(set.legwear);
    return set;
});

console.log(postData);

function transform(armor) {
    const reqs = armor.materialsRequiredForUpgrades;
    armor.materialsRequiredForUpgrades = reqs.map((perLevel) => {
        return perLevel.map((x) => [x.material, x.requirement]);
    });
    return armor;
}

/* eslint-disable no-unused-vars */

export const brutalItems = () => {
    const names = [
        "The Frantic Sword",
        "The Dagger of Profit",
        "The Bone",
        "The Crowbar",
        "The Assassin's Dagger",
    ];

    const description = [
        "Sword-type melee weapon which deals more damage while the player is at or below 50% health or has at least 50% malaise.",
        "Melee weapon which inflicts critical hits shortly after picking up gold",
        "Melee weapon that has a special followup attack when successfully striking the enemy with the second attack in its combo",
        "Melee weapon. It is a unique weapon which deals critical hits right after destroying a door or hitting a specific 'bestial' type enemy",
        "Dagger-type melee weapon, which deals critical damage when hitting enemies from behind.",
    ];
    const price = [1500, 2000, 1500, 1500, 1500];
    const itemsData = {
        "frantic Sword": [names[0], description[0], price[0]],
        "dagger of Profit": [names[1], description[1], price[1]],
        bone: [names[2], description[2], price[2]],
        crowbar: [names[3], description[3], price[3]],
        "assassin's Dagger": [names[4], description[4], price[4]],
    };
    return itemsData;
};
export const tacticsItems = () => {
    const names = [
        "The Alchemic Carbine",
        "Boomerang",
        "The Electric Whip",
        "The Killing Deck ",
        "The War Javelin",
    ];
    const description = [
        "Crossbow-type ranged weapon which poisons enemies hit by its bolts.",
        "Ranged weapon which deals damage as it returns to the player. ",
        "Whip-type ranged weapon which auto-targets enemies, and deals damage to nearby enemies when it hits. ",
        "Ranged weapon that throws out sets of cards in different patterns which stick to enemies. The last hit recalls the thrown cards, dealing critical damage to struck enemies",
        "Javelin-type ranged weapon which knocks back all enemies in its path and can even be used to teleport after being thrown",
    ];
    const price = [2000, 1250, 1750, 1750, 1250];
    const itemsData = {
        "alchemic carbine": [names[0], description[0], price[0]],
        boomerang: [names[1], description[1], price[1]],
        "electric Whip": [names[2], description[2], price[2]],
        "killing Deck": [names[3], description[3], price[3]],
        "war Javelin": [names[4], description[4], price[4]],
    };
    return itemsData;
};
export const survivalItems = () => {
    const names = [
        "The Broadsword",
        "The Gold Digger",
        "The Greed Shield",
        "The Nutcracker",
        "The Maw of the Deep",
    ];

    const description = [
        "Heavy melee weapon which swings slowly, but deals massive damage in subsequent attacks in its combo.",
        "Melee weapon which inflicts critical hits if the player has enough gold. ",
        "Shield weapon which generates gold upon parrying attacks.",
        "Warhammer-type melee weapon which inflicts critical hits on enemies that are stunned, frozen or rooted.",
        "Melee weapon that has 3 hit combo with the third hit being a ranged attack. When the ranged attack hits the shark latches onto the target, rooting them and inflicting bleeding.",
    ];
    const price = [1750, 2000, 1750, 1750, 2000];
    const itemsData = {
        broadsword: [names[0], description[0], price[0]],
        "gold Digger": [names[1], description[1], price[1]],
        "greed Shield": [names[2], description[2], price[2]],
        nutcracker: [names[3], description[3], price[3]],
        "maw of the Deep": [names[4], description[4], price[4]],
    };
    return itemsData;
};
export const allImg = () => {
    // products details
    const brutal = brutalItems();
    const tactics = tacticsItems();
    const survival = survivalItems();

    // search for all the png imgs in specific folder
    const survivalFolder = require.context("./imgs/survival", false, /\.png/);
    const brutalFolder = require.context("./imgs/brutality", false, /\.png/);
    const tacticsFolder = require.context("./imgs/tactics", false, /\.png/);

    const paths = {
        survival: [survivalFolder, survival],
        brutality: [brutalFolder, brutal],
        tactics: [tacticsFolder, tactics],
    };

    try {
        const all = Object.keys(paths).map((p) => {
            return getAllImgs(paths[p][0], paths[p][1]);
        });

        // const imgSrc = getAllImgs(paths[subfolder][0], paths[subfolder][1]);
        return all;
    } catch (error) {
        throw error;
    }
};
function getAllImgs(imgsFiles, imgsData) {
    /* will contain the image src and the description of each img */
    const obj = {};
    const index = [0, 1, 2, 3, 4];
    const imagesSrc = imgsFiles.keys();
    const sortedImgNames = Object.keys(imgsData).sort();

    index.forEach(
        (i) =>
            (obj[imagesSrc[i]] = {
                src: imgsFiles(imagesSrc[i]), //call to get the src
                name: imgsData[sortedImgNames[i]][0],
                description: imgsData[sortedImgNames[i]][1],
                price: imgsData[sortedImgNames[i]][2],
                /* id: "card" + (imagesSrc.indexOf(key) + 1), */
            })
    );
    return obj;
}
export const allProductsData = () => {
    const arrayAll = allImg();
    const allObjs = {};
    arrayAll.forEach((obj) =>
        Object.keys(obj).forEach((key) => {
            allObjs[key] = obj[key];
        })
    );
    return allObjs;
};

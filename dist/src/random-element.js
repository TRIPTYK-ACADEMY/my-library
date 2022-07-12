"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomElement = void 0;
/**
 * Récupère un élément aléatoire dans un tableau
 */
function randomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
exports.randomElement = randomElement;

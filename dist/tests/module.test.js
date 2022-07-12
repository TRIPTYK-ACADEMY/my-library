"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const citations_1 = require("../src/citations");
test('It gets a random quote', () => {
    const randomQuote = (0, src_1.getRandomQuote)();
    // on vérifie que l'on récupère bien une citation
    expect(citations_1.quotes).toContain(randomQuote);
});

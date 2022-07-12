import { getRandomQuote } from '../src/index.js'
import { quotes } from '../src/citations.js'

test('It gets a random quote', () => {
  const randomQuote = getRandomQuote()

  // on vérifie que l'on récupère bien une citation
  expect(quotes).toContain(randomQuote)
})

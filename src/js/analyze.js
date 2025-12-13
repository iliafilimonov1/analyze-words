import { USER_TEXT, ANSWERS } from './constants'
/**
 * Функция для получения первого символа текста
 * @param {string[]} words - исходный текст
 * @returns {string} первый символ текста
 */
export const firstCharacter = (words) => words?.at(0)?.at(0)

/**
 * Функция для получения количества слов в тексте
 * @param {string[]} words - исходный текст
 * @returns {number} количество слов в тексте
 */
export const wordsCount = (words) => words?.length

/**
 * Функция для получения количества символов в тексте
 * @param {string[]} words - исходный текст
 * @returns {number} количество символов в тексте без учета пробелов
 */
export const numberOfCharacters = (words) => {
  return words?.reduce((acc, word) => acc + word.length, 0)
}

/**
 * Функция для получения самого длинного слова в тексте
 * @param {string[]} words - исходный текст
 * @returns {string} самое длинное слово в тексте
 */
export const maxLengthWord = (words) => {
  const sortedWords = words?.sort((a, b) => b.length - a.length)
  return sortedWords?.at(0)
}

/**
 * Функция для переворота слов в предложении
 * @param {string[]} words - Данные пользователя
 * @returns {string} - Перевернутое предложение
 */
export const reverseWords = (words) => {
  const reverseSentence = words?.reverse()?.map((word) => word?.split('')?.reverse()?.join(''))
  return reverseSentence?.join(' ')
}

/**
 * Функция для подсчета количества предложений в тексте
 * @param {string[]} words - Данные пользователя
 * @returns {number} - Количество предложений в тексте
 */
export const sentencesCount = (words) => {
  return words?.filter((word) => word?.endsWith('.'))?.length
}

/**
 * Функция для подсчета количества уникальных слов в тексте
 * @param {string[]} words - Данные пользователя
 * @returns {number} - Количество уникальных слов в тексте
 */
export const countUniqueWords = (words) => {
  return words?.filter((word, index, self) => self?.indexOf(word) === index)?.length
}

/**
 * Функция для сортировки слов в алфавитном порядке
 * @param {string[]} words - Данные пользователя
 * @returns {string[]} - Сортированные слова в алфавитном порядке
 */
export const sortInAlphabeticalOrder = (words) => words?.sort()


/**
 * Функция для анализа текста
 * @param {string[]} userData - данные пользователя
 */
export function analyzeText(userData) {
  USER_TEXT.textContent = userData?.join(', ')
  ANSWERS.FIRST_CHARACTER.textContent = firstCharacter(userData)
  ANSWERS.WORDS_COUNT.textContent = wordsCount(userData)
  ANSWERS.NUMBER_OF_CHARACTERS.textContent = numberOfCharacters(userData)
  ANSWERS.MAX_LENGTH_WORD.textContent = maxLengthWord(userData)
  ANSWERS.REVERSE_WORDS.textContent = reverseWords(userData)
  ANSWERS.SENTENCES_COUNT.textContent = sentencesCount(userData)
  ANSWERS.UNIQUE_WORD_COUNT.textContent = countUniqueWords(userData)
  ANSWERS.WORDS_IN_ALPHABETICAL_ORDER.textContent = sortInAlphabeticalOrder(userData)
}

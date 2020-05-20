function longestWordInString(string) {
  const arrayOfWords = string.split(' ');
  const longestWord = { value: '', length: 0 };

  arrayOfWords.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord.value = word;
      longestWord.length = word.length;
    }
  });

  return longestWord.value;
}

export { longestWordInString };

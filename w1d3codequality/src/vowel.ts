export function isVowel(character: string): boolean {
  if (
    character == "a" ||
    character == "e" ||
    character == "i" ||
    character == "o" ||
    character == "u"
  ) {
    return true;
  }
  return false;
}

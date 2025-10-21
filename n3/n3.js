function rot13(str) {
  return str.replace(/[A-Z]/g, (char) => {
    const code = char.charCodeAt(0);
    const shifted = ((code - 65 + 13) % 26) + 65;
    return String.fromCharCode(shifted);
  });
}

function palindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  let j = cleaned.length - 1;
  for (let i = 0; i < j; i++) {
    if (cleaned[i] !== cleaned[j]) return false; 
    j--; 
  }
  return true;
}

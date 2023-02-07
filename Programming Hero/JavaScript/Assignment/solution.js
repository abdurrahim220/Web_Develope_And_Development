function containsSpecialChars(str) {
    const specialChars =
      /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
  
  console.log(containsSpecialChars('book_club')); // true
  console.log(containsSpecialChars('milk')); // false
  console.log(containsSpecialChars('2 + 3 = 5')); // true
  
  // Usage in if statement
  if (containsSpecialChars('book_club')) {
    console.log('Special characters found.');
  } else {
    console.log('No special characters found.');
  }
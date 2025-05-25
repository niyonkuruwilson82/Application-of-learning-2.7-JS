function calculateAge() {
  const birthdateInput = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if (!birthdateInput) {
    result.textContent = "Please select your birth date.";
    return;
  }

  const birthDate = new Date(birthdateInput);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Adjust age if the birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  result.textContent = `Your age is ${age} years old.`;
}

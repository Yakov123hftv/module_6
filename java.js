const ageString = prompt("Введите ваш возраст:");

if (ageString !== null) {
  const age = parseInt(ageString);

  if (isNaN(age)) {
    alert("Некорректный ввод. Пожалуйста, введите число.");
  } else {
    let creditLimit = 0;

    if (age < 18) {
      creditLimit = 0;
    } else if (age >= 18 && age <= 21) {
      creditLimit = 50000;
    } else if (age >= 22 && age <= 35) {
      creditLimit = 400000;
    } else if (age >= 36 && age <= 65) {
      creditLimit = 1000000;
    } else {
      creditLimit = 0; // Или другое значение по умолчанию, если возраст больше 65
    }

    if (creditLimit > 0) {
      alert(`Вам одобрен кредит в размере ${creditLimit} рублей.`);
    } else if (age < 18) {
      alert("Кредит не выдается лицам младше 18 лет.");
    } else {
      alert("Кредит не одобрен.");
    }
  }
} else {
  alert("Ввод данных отменен.");
}

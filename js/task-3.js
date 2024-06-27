const profile = {
    // Властивості об'єкта
    username: "Jacob",
    playTime: 300,
  
    // Метод для зміни імені користувача
    changeUsername(newName) {
      this.username = newName; // Оновлюємо властивість username новим іменем
    },
  
    // Метод для оновлення кількості активних годин
    updatePlayTime(hours) {
      this.playTime += hours; // Збільшуємо playTime на задану кількість годин
    },
  
    // Метод для отримання інформації про профіль
    getInfo() {
      return `${this.username} has ${this.playTime} active hours!`; // Повертаємо рядок з інформацією
    }
  };
  
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
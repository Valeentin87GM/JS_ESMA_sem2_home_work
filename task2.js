// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

/**
 * Класс Student
 @param {string} name - Имя
 @param {number} age - возраст
 @param {string} grade - класс, в котором учится студент
 */
class Student {
    name;
    age;
    grade;

    constructor(name, age, grade) {
        this.name = name,
        this.age = age,
        this.grade = grade

    }

    /**
     * Выводит информацию о студенте
     */
    displayInfo = () => {
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Grade: ${this.grade}`);
    }
}

const student1 = new Student("Ivan", 14, "7B");
const student2 = new Student("Svetlana", 12, "5A");

[student1, student2].forEach(element => {
    element.displayInfo();
});

// Результат выполнения:
// Name: Ivan
// Age: 14
// Grade: 7B

// Name: Svetlana
// Age: 12
// Grade: 5A
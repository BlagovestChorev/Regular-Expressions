function extractEmails(input) {
    // Регулярен израз за извличане на електронни адреси
    let pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

    // Намери всички съвпадения в текста
    let matches = input.match(pattern);

    // Изведи всеки електронен адрес на нов ред
    if (matches) {
        matches.forEach(email => console.log(email));
    }
}
//extractEmails("Please contact us at: support@github.com.");
extractEmails("Just send email to s.miller@mit.edu and j.hopking@york.ac.ukfor more information.");
//extractEmails("Many users @ SoftUni confuse email addresses. We @Softuni.BG provide high-quality training @ home or @ class.-- steve.parker@softuni.de.");
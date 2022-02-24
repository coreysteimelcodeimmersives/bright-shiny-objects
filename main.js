// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(firstName, lastName ){
    return {
        firstName: firstName,
        lastName: lastName
    }
}

const user = { 
    firstName: 'Tim',
    lastName: 'Horton'
};

function setAge(user, age){
    user.age = age;
    return user;
}

function incrementAge(user){
    user.age += 1;
    return user;

}

const car = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    needsMaintenance: true
};

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}

const student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
};

const newGrades = [88, 70, 90];

function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades);
    return student;
}

function getDataType(obj, key){
    return typeof obj[key];

}

const todos = [
    { 
        title: 'Get gas', 
        isComplete: false },
    { 
        title: 'Buy bread', 
        isComplete: true  
    }
];

const newTodo = {
    title: 'Call mom', 
    isComplete: false
};

function addTodo(todos, newTodo){
    todos.push(newTodo)
    return todos;
}

const playlist = {
    title: 'My jams',
    duration: 7,
    songs: [
        {
            title: 'Texas Sun',
            artist: 'Khruangbin',
            duration: 4
        },
        {
            title: 'Malamente',
            artist: 'Rosalia',
            duration: 3
        }
    ]
};

const newSong = {
    title: 'Old Friends',
    artist: 'Pinegrove',
    duration: 3
};

function addSong(playlist, song){
    playlist.duration += song.duration;
    playlist.songs.push(song);
    return playlist;
}

const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
};

function updateReportCard(reportCard, num){
    let totalGrades = 0;
    reportCard.grades.push(num);
    if (num < reportCard.lowestGrade){
        reportCard.lowestGrade = num;
    }
    if (num > reportCard.highestGrade){
        reportCard.highestGrade = num;
    }
    for (i of reportCard.grades){
        totalGrades += i;
    }
    reportCard.averageGrade = totalGrades/reportCard.grades.length;
    return reportCard;
}


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘

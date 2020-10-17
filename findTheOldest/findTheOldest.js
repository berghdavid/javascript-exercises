let findTheOldest = function(people) {
    var oldestPerson = {
        name: 'asdfasdf',
        yearOfBirth: 0,
        yearOfDeath: 0,
    };
    var oldestAge = 0;

    for (person in people) {
        var age;
        if(people[person].yearOfDeath == undefined){
            var d = new Date();
            age = d.getFullYear() - people[person].yearOfBirth;
        }
        else 
            age = people[person].yearOfDeath - people[person].yearOfBirth;
        if(age > oldestAge){
            oldestPerson = people[person];
            oldestAge = age;
        }

    }
    //if(oldestPerson.yearOfDeath == undefined)
        return oldestPerson;
    //return null;
}

module.exports = findTheOldest

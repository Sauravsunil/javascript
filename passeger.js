const read = require('readline-sync');
var fs = require('fs');

var passenger = {

}
while (true) {
    var n = read.question("Operations : \n 1. Add  \n 2. Delete \n 3. Update \n 4. Search \n 5. Display \n")
    if (n == 1) {
        var name = read.question("Enter the name :");
        var age = read.question("Enter the age :");
        var email = read.question("Enter the email :");
        var phone1 = read.question("Enter the No.1 :");
        var phone2 = read.question("Enter the No.2 :");
        passenger.name = name;
        passenger.age = age;
        passenger.email = email;
        passenger.phone1 = phone1;
        passenger.phone2 = phone2;
        fs.writeFileSync(`./data/${passenger.name}.json`,JSON.stringify(passenger))
        console.log("Passenger Id :" + `${passenger.name}`);
    }
    if (n == 2) {
        var s = read.question("Enter the Id : ")
        fs.unlinkSync(`./data/${s}.json`)
    }
    if (n == 3) {
        var n = read.question("Enter the Username :")
        var a = fs.readFileSync(`${n}.json`, 'utf-8')
        var upName = read.question("Enter the new name:")
        var upAge = read.question("Enter the new age:")
        var upEmail = read.question("Enter the new email:")
        var upPhone1= read.question("Enter the new phone1:")
        var upPhone2= read.question("Enter the new phone2:")
        var object = JSON.parse(a)
        var v = object.name
        object.name = upName
        object.age = upAge
        object.email = upEmail
        object.phone1 = upPhone1
        object.phone2 = upPhone2
        fs.writeFileSync(`./data/${v}.json`,JSON.stringify(object));

    }
    if(n==4)
    {
        var email = read.question("Enter your email:")
        var files = fs.readdirSync('./data/')
        for(i=0;i<files.length;i++){
        var data = fs.readFileSync(`./data/${files[i]}`,'utf-8')
        var obj = JSON.parse(data)
        if(obj.email == email)
        {
            console.log(obj)
            break
        }
    }
}
    if(n==5)
    {
        var files = fs.readdirSync('./data/')
        for(i=0;i<files.length;i++)
        {
            var data = fs.readFileSync(`./data/${files[i]}`,'utf-8')
            var obj = JSON.parse(data)
            console.log(obj)
        }
    }  
}
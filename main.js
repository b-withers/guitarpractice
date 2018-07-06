function postmessage() {
    var firstnames = ["John", "Jacob", "Eric", "Conroy", "Vincent", "Laurence", "Jack", "Harry", "Richard", "Michael", "Kevin", "Daniel", "Cody", "Brody", "Chase", "Cash", "Norman", "Trevor", "Todd", "Ellis", "Quentin", "Zachary", "Bruce", "Sam", "Horace", "George", "Tom", "Tim", "Wallace", "Walter", "Alex", "Alan", "Sean", "Seamus", "Dudley", "Duke", "Damian", "Nash", "Horton", "Robert", "Mitchell", ];
    var firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
    var lastnames = ["John", "Jacob", "Eric", "Conroy", "Vincent", "Laurence", "Jack", "Harry", "Richard", "Michael", "Kevin", "Daniel", "Cody", "Brody", "Chase", "Cash", "Norman", "Trevor", "Todd", "Ellis", "Quentin", "Zachary", "Bruce", "Sam", "Horace", "George", "Tom", "Tim", "Wallace", "Walter", "Alex", "Alan", "Sean", "Seamus", "Dudley", "Duke", "Damian", "Nash", "Horton", "Robert", "Mitchell", ];
    var lastname = firstnames[Math.floor(Math.random() * lastnames.length)];
    var middlenames = ["John", "Jacob", "Eric", "Conroy", "Vincent", "Laurence", "Jack", "Harry", "Richard", "Michael", "Kevin", "Daniel", "Cody", "Brody", "Chase", "Cash", "Norman", "Trevor", "Todd", "Ellis", "Quentin", "Zachary", "Bruce", "Sam", "Horace", "George", "Tom", "Tim", "Wallace", "Walter", "Alex", "Alan", "Sean", "Seamus", "Dudley", "Duke", "Damian", "Nash", "Horton", "Robert", "Mitchell", ];
    var middlename = firstnames[Math.floor(Math.random() * middlenames.length)];
    document.getElementById("finger").textContent = "Your new recruit is " + firstname;
    document.getElementById("fret").textContent = "Your new recruit is " + lastname;
    document.getElementById("string").textContent = "Your new recruit is " + middlename;
  };
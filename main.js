function postmessage() {
    var fingers = ["1", "2", "3", "4"];
    var finger = fingers[Math.floor(Math.random() * fingers.length)];
    var frets = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var fret = frets[Math.floor(Math.random() * frets.length)];
    var middlenames = ["John", "Jacob", "Eric", "Conroy", "Vincent", "Laurence", "Jack", "Harry", "Richard", "Michael", "Kevin", "Daniel", "Cody", "Brody", "Chase", "Cash", "Norman", "Trevor", "Todd", "Ellis", "Quentin", "Zachary", "Bruce", "Sam", "Horace", "George", "Tom", "Tim", "Wallace", "Walter", "Alex", "Alan", "Sean", "Seamus", "Dudley", "Duke", "Damian", "Nash", "Horton", "Robert", "Mitchell", ];
    var middlename = middlenames[Math.floor(Math.random() * middlenames.length)];
    document.getElementById("finger").textContent = "Finger # " + finger;
    document.getElementById("fret").textContent = "Fret # " + fret;
    document.getElementById("string").textContent = "Your new recruit is " + middlename;
  };
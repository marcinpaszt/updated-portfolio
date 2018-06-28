//Initialize Firebase//
var config = {
  apiKey: "AIzaSyBOyEi61wuNZjuIuN6lWFsIBwla77_UIE8",
  authDomain: "train-scheduler-7d000.firebaseapp.com",
  databaseURL: "https://train-scheduler-7d000.firebaseio.com",
  projectId: "train-scheduler-7d000",
  storageBucket: "train-scheduler-7d000.appspot.com",
  messagingSenderId: "925844695143"
};
firebase.initializeApp(config);

//Create a variable to reference the database//
var database = firebase.database();

//Added button for adding train info//             
$("#train-info").on("click", function (event) {
  event.preventDefault();

  //grabs user input//
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrainTime = $("#first-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  var newTrainInfo = {

    //creates local temp object for holding employee data//                                  
    name: trainName,
    dest: destination,
    time: firstTrainTime,
    freq: frequency
  };
  //uploads train data to the database//
  database.ref().push(newTrainInfo);

  //alert//
  alert("Train Successfully Added");

  //clears all the text boxes//                   
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-input").val("");
  $("#frequency-input").val("");
});

//create firebase event for adding train info to the database and a row in the html when a user adds an entry//
database.ref().on("child_added", function (childSnapshot, prevChildKey) {

  //store everything in a variable//
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var firstTrainTime = childSnapshot.val().time;
  var frequency = childSnapshot.val().freq;

//assigning date/time//
var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");


//Current time//
var currentTime = moment()


//Difference between the times//
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");


//Time apart (remainder)//
var tRemainder = diffTime % frequency;


//Minute Until Train//
var tMinutesTillTrain = frequency - tRemainder;


// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");

  $("#train-schedule > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
    frequency + "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>")

})    

//Change to html//
database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
  $("#train-name-input").text(snapshot.val().name);
  $("#destination-input").text(snapshot.val().dest);
  $("#first-input").text(snapshot.val().time);
  $("#frequency-input").text(snapshot.val().freq);
});
//assigning date/time//
var firstTrainTime = "3:40";
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");


//Current time//
var currentTime = moment()


//Difference between the times//
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");


//Time apart (remainder)//
var tRemainder = diffTime % tFrequency;


//Minute Until Train//
var tMinutesTillTrain = tFrequency - tRemainder;


// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");





//business logic
function Place(location, landmark, season, notes) {
  this.locationName = location;
  this.landmarkName = landmark;
  this.timeOfYear = season;
  this.note = notes;
}

Place.prototype.detail = function() {
  return this.locationName + " " + this.landmarkName + " " + this.timeOfYear + " " + this.note;
}

//user interface logic
$(document).ready(function() {
  $("form#visit").submit(function(event) {
    event.preventDefault();

    var inputtedLocationName =
    $("input#new-location").val();
    var inputtedLandmark =
    $("input#new-landmark").val();
    var inputtedSeason =
    $("input#new-season").val();
    var inputtedNotes =
    $("input#new-notes").val();

    var newPlace = new Place(inputtedLocationName, inputtedLandmark, inputtedSeason, inputtedNotes);

  $("ul#visits").append("<li><span class='place'>" + newPlace.detail() + "</span></li>");
    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-season").val("");
    $("input#new-notes").val("");
  });

});

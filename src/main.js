import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

$(document).ready(function() {
  $("#formGroup").submit(function(event) {
    event.preventDefault();
    var titleText = $("#title").val();
    var bodyText = $("#body").val();
    console.log("Test")
    // var output = ;
    $('#title-out').html(titleText);
    $('#output').html(bodyText);
  });
});
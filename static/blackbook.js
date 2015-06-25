     // A $( document ).ready() block.
$( document ).ready(function() {

// EXAMPLE CODE....NOT IN USE
// Add a phone number input field
var $counter = 0;
$( "#add_phone" ).click(function( event ) {
    event.preventDefault();
    $counter = $counter +1;
    console.log($counter)
    if($counter < 4) {
        var section = $("#phonetemplate").clone();
        section.attr('id', 'phone' + $counter);
        $( ".addstuff" ).append( $( section ) );
        // still need to change params in the cloned input field
    }
    else {
        $("#warning-field").html("You can only add 3 phone numbers here.");
        }
});
// end of adding phone number





// ajax
function myajax($target) {
// Using the core $.ajax() method
$.ajax({
    // The URL for the request
    url: "/ajax",
    // The data to send (will be converted to a query string)
    data: {
        name: $target
    },

    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "html",

    // Code to run if the request succeeds;
    // the response is passed to the function
    success: function( json ) {
        $("#full_page").html(json).slideDown();
        //$( "<h1>" ).text( json.title ).appendTo( "body" );
        //$( "<div class=\"content\">").html( json.html ).appendTo( "body" );
    },

    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function( xhr, status, errorThrown ) {
        alert( "Sorry, there was a problem!" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
    },

    // Code to run regardless of success or failure
    complete: function( xhr, status ) {
    //alert( "The request is complete!" );
    }
});

}


$("a").click(function(event) {
    var $xxx = $( this ).data( "name" );
    console.log($xxx);
    if( $xxx == "search") {
        console.log("we want search");
            myajax($xxx);
    }
    else if($xxx == "add") {
        console.log("we want add");
            myajax($xxx);
    }
    else if($xxx == "new") {
                    myajax($xxx);
    }
    else {
        console.log("different link");
    }

});





});


$(document).on('click', ".section_button", function () {
// Show a section of the page; show, hide, more
//$(".section_button").click(function(event) {
    var $xxx = $( this ).data( "name" );
    console.log("clicked");
    $(".hideme").hide("slow");
    $(".list-group-item").removeClass("active");
    $(".section").hide("slow"); 
    $("#"+$xxx).show("slow");
    $(".section_button").removeClass("active");
    $(this).addClass("active");
//});
});

$(document).on('click', ".list-group-item", function () {
// Show panel for adding, removing and showing
//$( ".list-group-item" ).click(function( event ) {
    var $xxx = $( this ).data( "name" );
    console.log("clicked");
    $(".hideme").hide("slow");
    $("#"+$xxx).show("slow");
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");
});

// Buttons on the "New Page" to add a new person or a business.
$(document).on('click', ".btn", function (event) {
    event.preventDefault();
    var $xxx = $( this ).data( "target" );
    if( $xxx == "new_person") {
        console.log("We want a new person");
        var $newdata = $( "#new_person" ).serialize().replace(/\+/g,'%20');
        new_ajax($xxx, $newdata);
    }
    else if($xxx == 'new_business') {
        console.log("We want a new business");
    }
    else {
        console.log("We want something else");
    }
    
    
});


// ajax
function new_ajax($target, $newdata) {
// Using the core $.ajax() method
$.ajax({
    // The URL for the request
    url: "/newajax",
    // The data to send (will be converted to a query string)
    data: {
        action: $target,
        newdata: $newdata
    },

    // Whether this is a POST or GET request
    type: "POST",
    // The type of data we expect back
    dataType : "html",


    // Code to run if the request succeeds;
    // the response is passed to the function
    success: function( json ) {
        $("#full_page").html(json).slideDown();
        //$( "<h1>" ).text( json.title ).appendTo( "body" );
        //$( "<div class=\"content\">").html( json.html ).appendTo( "body" );
    },

    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function( xhr, status, errorThrown ) {
        alert( "Sorry, there was a problem!" );
        console.log( "Error: " + errorThrown );
        console.log( "Status: " + status );
        console.dir( xhr );
    },

    // Code to run regardless of success or failure
    complete: function( xhr, status ) {
    //alert( "The request is complete!" );
    }
});
}



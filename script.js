$(document).ready(function() {

  // var $listItems = $('li');
  // var $itemValue = $("#newTask").val();


  $('li').on('click', function(){
          	// when I click the link item, this will happen:
            // $(this).addClass('complete');
            // the thing being clicked (this) will have the class complete added to it
    $(this).remove();
            // this removes item from list...poof disappear!
   });

  $("form").submit(function(event){
          	// When the form is submitted this will happen:
  	 var $itemValue = $('#newTask').val();
           	// defining variable to call the value of what is in the input form
  	 event.preventDefault();
          	// stop the page from refreshing, which is its default
  	 $("ul").append('<li>'+'<button></button>' + $itemValue + '</li>');
  	       // add the variable to the end of the unordered list
  	 $('li').on('click', function(){
  	       // when I click the link item, this will happen:
      $(this).remove();
           // the thing being clicked (this) will have the class complete added to it
    });

    $('#newTask').val(" ");
    });
  	            // took me 20 minutes, but this clears the input box...should've looked below earlier.

 

});
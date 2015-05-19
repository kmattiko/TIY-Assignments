//TO OPEN THE ACCORDING
//What event should I listen for? 'click'
//What element should listen for that event? '.cbp-nttrigger'
//_.forEach(document.querySlectorAll('.cbp-nttrigger'), function(element){

//  element.addEventListener('click'), function(){

//    element.parentElement.classList.toggle('cbp-ntopen');
//  }
//}
//})


$('.cbp-nttrigger').on('click', function(event){
  $(event.target).parent().toggleClass('cbp-ntopen');
});

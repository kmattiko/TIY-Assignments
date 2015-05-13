//just a tracer...
//alert("It's alive!");

document.head.parentElement.className = "js";

var elements = document.querySelectorAll('h3');

//elements[0].addEventListener("click", function(){
//	elements[0].parentElement.classList.toggle('cbp-ntopen');
//	});
//li.classList.toggle('cbp-ntopen');





_.forEach(elements, function(element, index, elements){
    element.addEventListener('click', function(){
        console.log(elements, index, element);
        element.parentElement.classList.toggle('cbp-ntopen');
    });
});

var details = document.querySelectorAll("h4");

_.forEach(details, function(detail, index, details){
    detail.addEventListener('click', function(){
        console.log(details, index, detail);
        detail.parentElement.classList.toggle('cbp-ntopen');
    });
});

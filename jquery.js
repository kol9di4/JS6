function $ (selector){
    var elements = document.querySelectorAll(selector);
    return new JQuery(elements);
}

function JQuery(elements){
    this.elements = elements;

    this.on = function(event,f){
        for(var i=0;i<this.elements.length;i++){
            this.elements[i].addEventListener(event,f);
        }
    }
}
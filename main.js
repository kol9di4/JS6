window.onload = function(){
    var modalWindow = new Modal();
    content = "<h1>HELLO</h1>"+
    "<h5>12.12.2012</h5>"+
    "<p>"+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga commodi illum eum praesentium enim necessitatibus molestiae, vitae adipisci quaerat doloribus consectetur voluptatum odio in? Harum alias odio deserunt nam?"+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga commodi illum eum praesentium enim necessitatibus molestiae, vitae adipisci quaerat doloribus consectetur voluptatum odio in? Harum alias odio deserunt nam?"+
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fuga commodi illum eum praesentium enim necessitatibus molestiae, vitae adipisci quaerat doloribus consectetur voluptatum odio in? Harum alias odio deserunt nam?"
    "</p>";
    $('h1').on('click',function(){
        modalWindow.open(content);
    })
}


function Modal(){
    var newDiv = document.createElement('div');
    newDiv.classList.add('modal');
    document.body.appendChild(newDiv);
    var newDiv_content = document.createElement('div');
    newDiv_content.classList.add('modal-content');
    document.querySelector('.modal').appendChild(newDiv_content);
    newDiv.style.display = 'none';

    this.open = function(content){
        newDiv.style.display = 'flex';
        newDiv_content.innerHTML = content;
    }

    newDiv.onclick = function(e){
        if (e.target == this) { 
            newDiv.style.display = 'none';
        }
    }
}
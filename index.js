function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
function Display() {}
Display.prototype.validate = function (book) {
   if ((book.name).length< 3 || (book.author).length< 3) {
       
     return false;
   } else {
     return true;
   }
};
Display.prototype.show = function (type, msg) {
    console.log('hi show');
  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                          <strong>MESSAGE: </strong> ${msg}
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                        </div>
  `;
  setTimeout(function(){
    message.innerHTML ='';
  }, 2000);
};
Display.prototype.add = function (book) {
    let uiString = `
            <tr>
              <td>${book.name}</td>
              <td>${book.author}</td>
              <td>${book.type}</td>
            </tr>
   `;
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML += uiString;
};
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", formSubmit);
function formSubmit(e) {
  console.log("you have submitted library form");
  let name = document.getElementById("Name").value;
  let author = document.getElementById("Author").value;
  let type;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show('success','your form is successfully submitted');
}
else
{
    display.show('danger','your form cannot be submitted. Write the bookname and author correctly');
}
 e.preventDefault();
}

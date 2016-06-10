// Cade assist

$(document).ready(init);

function init() {
   $('.submit').click(addName);
   var names = getNames();
   renderNames(names);
   $('.list').on('dblclick', 'li', deleteName);
}

function deleteName(event) {
   var dName = $(event.target).text();
   var names = getNames();
   names.splice(names.indexOf(dName), 1);
   writeNames(names);
   renderNames(names);
}

function addName() {
   var $input = $('.input')
   var name = $input.val();
   $input.val('');
   var names = getNames();
   names.push(name);
   writeNames(names);
   renderNames(names);

}

function getNames() {
   //retrieve array from localStorage
   var str = localStorage.names;

   try {
      var names = JSON.parse(str);
   } catch(err) {
      var names = [];
   }
   return names;
}

function writeNames(names) {
   // stringify and write array to storage
   var nameStr = JSON.stringify(names);
   localStorage.names = nameStr;
}

function renderNames(names) {
   // input array of names
   // create elements
   // empty the list
   // append elements to list

   var $lis = names.map(name => $('<li>').addClass('name').text(name));
   $('ul.list').empty().append($lis);
}



// First Attempt

/*
function init() {
   var $input = $('.input');
   var $list = $('.list');
   var $button = $('.submit');
   $button.click(submit);

   if (!localStorage.nameList) localStorage.nameList = "[]";
   
   var nameList = JSON.parse(localStorage.nameList);
   
   for (var i = 0; i < nameList.length; i++) {
      appendToUl(nameList[i])
   }

   function submit() {
      var name = $input.val();
      $input.val('');
      appendToUl(name);
      nameList.push(name);
      localStorage.nameList = JSON.stringify(nameList);
   }

   function appendToUl(text) {
      var $li = $('<li>').text(text);
      $list.append($li);
   }
} */

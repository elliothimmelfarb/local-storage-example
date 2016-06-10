// Cade assist

$(document).ready(init);

function init() {
   $('.submit').click(addName);
   var names = getNames();
   renderNames(names);
   $('.list').on('dblclick', 'li', deleteName);
   $('.list').on('click', '.edit', editName);
   $('.cancel').click(cancelEdit);
   //$('.save').click(saveEdit);
}

function cancelEdit() {
   $('.editArea').hide();
   $('.editName').val('');
}

function editName(event) { // show edit area
   var name = $(this).siblings('.name').text();
   var index = $(this).parent().index(); 
   $('.editArea').show().data('editIndex', index);
   $('.editName').val(name);
} 

function deleteName(event) {
   var names = getNames();
   var index = $(this).index();  // $(this).index();
   names.splice(index, 1);
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
   names = names.sort((a,b) => a > b)
   var nameStr = JSON.stringify(names);
   localStorage.names = nameStr;
}

function renderNames(names) {
   // input array of names
   // create elements
   // empty the list
   // append elements to list

   var $lis = names.map(name => {
      var $li = $('.template').clone()
      $li.removeClass('template').find('.name').text(name);
      return $li;
   });

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

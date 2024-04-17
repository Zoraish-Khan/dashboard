// (function () {
//     "use strict"
// dragula([document.querySelector('#newTask-draggable'), document.querySelector('#todo-draggable'),document.querySelector('#ongoing-draggable'),document.querySelector('#completed-draggable')]);

// var myEl1 = document.getElementById('new-task');
// new SimpleBar (myEl1, {autoHide: true})

// var myEl2 = document.getElementById('todo-task');
// new SimpleBar (myEl2, {autoHide: true});

// var myEl3 = document.getElementById('ongoing-task');
// new SimpleBar (myEl3, {autoHide: true})

// var myEl4 = document.getElementById('completed-task');
// new SimpleBar (myEl4, {autoHide: true})

// })();


dragula([document.querySelector('#newTask-draggable'), document.querySelector('#todo-draggable'),document.querySelector('#ongoing-draggable'),document.querySelector('#completed-draggable')]);
dragula(containers, {
    isContainer: function (el) {
      return false; // only elements in drake.containers will be taken into account
    },
    moves: function (el, source, handle, sibling) {
      return true; // elements are always draggable by default
    },
    accepts: function (el, target, source, sibling) {
      return true; // elements can be dropped in any of the `containers` by default
    },
    invalid: function (el, handle) {
      return false; // don't prevent any drags from initiating by default
    },
    direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
    copy: false,                       // elements are moved by default, not copied
    copySortSource: false,             // elements in copy-source containers can be reordered
    revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
    removeOnSpill: false,              // spilling will `.remove` the element, if this is true
    mirrorContainer: document.body,    // set the element that gets mirror elements appended
    ignoreInputTextSelection: true,     // allows users to select input text, see details below
    slideFactorX: 0,               // allows users to select the amount of movement on the X axis before it is considered a drag instead of a click
    slideFactorY: 0,               // allows users to select the amount of movement on the Y axis before it is considered a drag instead of a click
  });



  
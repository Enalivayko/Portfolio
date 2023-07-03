'use strict';
(function () {
    Controller.init('#todoForm', '#todo-items')
    Model.init(localStorage, 'todo-list-data')
})();
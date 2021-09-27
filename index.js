const jquery = require('jquery')
//
$ = window.$ = window.jQuery = jquery;

$(function () {
    let endpoint = 'https://jsonplaceholder.typicode.com/todos/1'
    $.ajax({
        url: endpoint,
        contentType: "application/json",
        dataType: 'json',
        success: function (result) {
            console.log(result)
            var id = document.getElementById("todoID")
            var title = document.getElementById("todoTitle")
            var isCompleted = document.getElementById("isC")

            id.innerHTML = 'ID' + result.userId
            title.innerHTML = 'Title:' + result.title
            isCompleted.innerHTML = 'is Completed: ' + result.completed
        }
    })

})
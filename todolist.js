$(document).ready(function() {
    $(".todo-input").change(function() {
        var todoInput = $(this).val();
        $('ul').append('<li>' + todoInput + '<i class="fa fa-check-square-o"></i>  <i class="fa fa-trash-o"></i>  </li>');
        $(this).val('');    
    });

    $('ul').on('click', '.fa-trash-o', function() {
        $(this).parent('li').fadeOut(400);
    });

    $('ul').on('click', '.fa-check-square-o', function() {
        $(this).parent('li').toggleClass('checked');
    });
});

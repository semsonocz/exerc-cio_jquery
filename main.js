$(document).ready(function(){ 
$('form').on('submit',function(e){
        e.preventDefault();
        var item = $('#adicionar').val();
        $('ol').append('<li>' + item + '</li>');
        $('#adicionar').val('');

        $("li").click(function() {
            $(this).css("text-decoration", "line-through");
        });
    });
});
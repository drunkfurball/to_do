$(document).ready(function(){
	$('#add').click(function(){
        var new_task = document.getElementById("task").value;
        $('#schedule').append("<p class=\"job\">"+ new_task +"</p>");
    });
    $(document).on('dblclick', '.job', function(){
        $(this).remove();
    });
});

$('#addBtn').on('click', function(){
    var $input = $('#input').val();
    var $newSkill = `<div class = "xAndP"><button class = "xBtn">X</button><p>${$input}</p></div>`;
    $('#added-skills').append($newSkill);
 $("input").val("")






    $('.xAndP').on('click' , function(){
        $(this).closest("div").fadeOut(500,function(){
        $(this).remove();
        })
    
    })
})







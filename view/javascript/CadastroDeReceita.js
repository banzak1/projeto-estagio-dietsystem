/*  Função para ativar ou desativar a edição no card de nutrientes */

const editForm = document.getElementById('edit-change')
const saveEdit = document.getElementById('edit-confirm')

editForm.addEventListener("click", function(){
        var inputs = document.getElementsByClassName('inputText_nutrient');
                for(var i = 0; i < inputs.length; i++) {
                        inputs[i].disabled = false;
                }
})

saveEdit.addEventListener("click", function(){
        var inputs = document.getElementsByClassName('inputText_nutrient');
                for(var i = 0; i < inputs.length; i++) {
                        inputs[i].disabled = true;
                }
})


/*  Função para criar ou excluir novos modos de preparo */

var counter = 2;

$(document).on('click', '.prepare_mode :input', function() {
        $('<div id="test" class="prepare_mode"><span id="prepare_mode_number">'+counter+'</span> <input id="prepare_mode_text" type="text" class="inputText_mode" /><span id="delete_prepare_mode" class="material-icons">delete</span></div>').appendTo('.prepare_section');
        counter++;
});


$(document).on('click', '#delete_prepare_mode', function() {
        $(this).closest('.prepare_mode').remove();
        counter--;
        reset_values();
})

/*  Função para reorganizar os novos modos de preparo deletados */

function reset_values() {
        var count = 1;
        var del_icon = "delete";
        $(".prepare_section > .prepare_mode ").each(function() {
          $(this).find("span").text(count); 
          $(this).find("input").val();
          $(this).find("span#delete_prepare_mode").text(del_icon);
          count++; 
        })  
}


/* Função para trocar entre as tabelas micronutrientes e macronutrients */

$('.macronutrients_card').hide();

$('.micronutrients_card').on('click', '#change_table', function() {
        $('.micronutrients_card').hide();
        $('.macronutrients_card').show();
});


$('.macronutrients_card').on('click', '#change_table', function() {
        $('.macronutrients_card').hide();
        $('.micronutrients_card').show();
});
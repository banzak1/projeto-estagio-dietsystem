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

function auto_height(elem) {  /* javascript */
        elem.style.height = "1px";
        elem.style.height = (elem.scrollHeight)+"px";
    }


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
        });  
};


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

/** Função para passar os valores digitados no input do cartão de informações */

$('#numPortion').change(function() {
        $('#number_of_portion_input').val($(this).val());
});


$('.portion_and_measure_card').change(function() {
        var weightValue = $('#weight').val();
        var portionValue = $('#number_of_portion_input').val();
        var weightForPortion = weightValue / portionValue;

        $('#weight_for_portion_input').val(weightForPortion);
        $('#numPortion').val(portionValue);
});

$('.portion_and_measure_card').change(function(){
        if($('#number_of_portion_input').val() === '1' ){
                $('#name_singular_or_plural_micro').text($('#number_of_portion_input').val() + ' ' + $('#name_portion_input').val());
                $('#name_singular_or_plural_macro').text($('#number_of_portion_input').val() + ' ' + $('#name_portion_input').val());
        };

        if($('#number_of_portion_input').val() > '1' ){
                $('#name_singular_or_plural_micro').text($('#number_of_portion_input').val() + ' ' + $('#name_portion_plural_input').val());
                $('#name_singular_or_plural_macro').text($('#number_of_portion_input').val() + ' ' + $('#name_portion_plural_input').val());

        };
});
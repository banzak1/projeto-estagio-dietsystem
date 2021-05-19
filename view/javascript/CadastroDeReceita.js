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



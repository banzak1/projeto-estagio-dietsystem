const editForm = document.getElementById('edit-change')
const saveEdit = document.getElementById('edit-confirm')

editForm.addEventListener("click", function(){
        var inputs = document.getElementsByClassName('inputText');
                for(var i = 0; i < inputs.length; i++) {
                        inputs[i].disabled = false;
                }
})

saveEdit.addEventListener("click", function(){
        var inputs = document.getElementsByClassName('inputText');
                for(var i = 0; i < inputs.length; i++) {
                        inputs[i].disabled = true;
                }
})


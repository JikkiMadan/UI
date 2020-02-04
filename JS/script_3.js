/*
function changeCase()
{
    //get reference of text field
    //let txtName = document.querySelector('#txtName')
    //get the text field content
    let data = txtName.value;
    
    //convert text to uppercase
    data = data.toUpperCase();

    //place the text in the text field
    txtName.value = data
}
*/

let changeCase = () => {
    let data = txtName.value;     
    data = data.toUpperCase();
    txtName.value = data
};

//get reference of text field
let txtName = document.querySelector('#txtName')
txtName.addEventListener('keyup',changeCase())

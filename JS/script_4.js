let validateData = () => {
  //alert(event.which)  
  let key = event.which
  if(!((key>=65 && key<=90) || (key>=97 && key<=122) || (key==32))){
      event.preventDefault()
  }
}

/*disable right arrow */
document.addEventListener('contextmenu',function(){
    event.preventDefault()
})

/*disable selection */
document.onselectstart = function(){
    return false
}
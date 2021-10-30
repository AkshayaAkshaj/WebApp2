

  

  function add_user(){
    user_name=document.getElementById("input_user_name").value ;
    
    window.location="chat_room.html";
    localStorage.setItem("user_name",user_name);
  }
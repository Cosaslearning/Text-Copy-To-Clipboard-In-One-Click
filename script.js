let popup = document.getElementById("popup");

function showPopup(){
    popup.classList.add("open_popup");
};
function closePopup(){
    popup.classList.remove("open_popup");
};


let copy = (text_id) => {
  document.getElementById(text_id).select();
  document.execCommand("copy");
  showPopup();
};


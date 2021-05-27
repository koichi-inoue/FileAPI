// Gloval Value
let img;

// modelLoaded > Ready to Accept
window.onload = function() {
  img = document.getElementById("image");
  img.addEventListener("dragover",function(ev){ ev.preventDefault();}, false);
  img.addEventListener("drop", function(ev){ ev.preventDefault(); GetImage(ev);}, false);
}

// GetImage
function GetImage(ev){

  let file = ev.dataTransfer.files[0];

  //let fileType = file.name.slice(-4).toLowerCase();
  if( file.type !== 'image/jpeg' ) {
    alert("File available only .jpg");
    return;
  }

  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = function() {

    img.setAttribute("src",reader.result);

    let txt="<h2>File Information</h2>";
    txt += "FileName：" + file.name +'<br>';
    txt += "FileSize：" + file.size +' Byte<br>';
    txt += '<br>';
    document.getElementById('information').innerHTML = txt;

  }

}

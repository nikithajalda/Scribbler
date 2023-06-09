function editToSave(){
    if(document.getElementById('postPara').getAttribute("contentEditable") === "true"){
        document.getElementById('postPara').setAttribute("contentEditable","false");
        document.getElementById('postTitle').setAttribute("contentEditable", "false");
        document.getElementById('postPara').style.border = "none";
        document.getElementById('postTitle').style.border = "none";
        document.getElementById('editPostbtn').innerHTML = "Edit<i class ='fa fa-edit'></i>";
    } else{

        document.getElementById('postPara').setAttribute("contentEditable","true");
        document.getElementById('postTitle').setAttribute("contentEditable","true");
        document.getElementById('postPara').style.border = " solid pink";
        document.getElementById('postTitle').style.border = " solid pink";
        document.getElementById('editPostbtn').innerHTML = "Save<i class = 'fa fa-save'></i>";
    }
}

var numberOfClicks = 0;

function likePost(){
  document.getElementById('likePostButton').innerHTML =  "Liked!";
  numberOfClicks += 1;
  if(numberOfClicks != 0){
    if(numberOfClicks == 1){
        document.getElementById('likeCount').innerHTML = numberOfClicks + "Person likes this!";
    }else{
        document.getElementById('likeCount').innerHTML = numberOfClicks + "people like this!"
    }
  } 

}

function addAllComments(){
    var comment = document.getElementById('comment').value;
    var node = document.createElement("div");
    node.innerHTML = "<br>"
    node.style.backgroundColor = "#fff";
    node.style.margin = "10px 10px 10px 10px";
    node.style.padding = "0 20px 20px 10px";
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);

    if (comment === "") {
        alert("Please add a comment!");
    } else {
        var newComment = document.getElementById("addComments");
        newComment.style.display = "block";
        newComment.insertBefore(node, newComment.childNodes[0]);
        document.getElementById('comment').value = "";
    }    
}
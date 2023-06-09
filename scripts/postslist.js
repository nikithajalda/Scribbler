function viewDeletePostModel(id){
    document.getElementById('deletePostModel').style.display = 'block';
    document.getElementById('deletePostModel').setAttribute('idToDelete',id );
    
}
function deletePost(){
    document.getElementById('deletePostModel').style.display ='none';
    var idToDelete = document.getElementById('deletePostModel').getAttribute('idToDelete');
    document.getElementById(idToDelete).remove();

}
function closeDeletePostModel(){
    document.getElementById('deletePostModel').style.display = 'none';
}


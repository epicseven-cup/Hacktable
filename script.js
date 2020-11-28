//make the check list clickable
//x for remove 
//there are check box for the list
//when green arrow is showed on the text box the background color of the item become darker
let list_count = 0;
function create_list(){
    let create_list = document.createElement("div");
    let list_data = document.getElementById("add_list").value;
    let div = document.getElementById("check_list");
    create_list.id ="list" + list_count;
    let check_mark = "<img src ='image/Angry.png' height ='10px' width ='10px'>"
    let cancle_mark = "<img src ='image/Aqua_cry.png' height ='10px' width ='10px'>"
    create_list.innerHTML = check_mark + list_data + cancle_mark;
    // create_list.style.display ="inline-block";
    div.appendChild(create_list);
    let img1 = create_list.getElementsByTagName("img")[0];
    let img2 = create_list.getElementsByTagName("img")[1];
    console.log(img1)
    img1.onclick = function(){apply_background(create_list.id)};
    img2.onclick = function(){delet_element(create_list.id)};
    list_count ++;
}

function apply_background(id){
    let list = document.getElementById(String(id));
    list.style.background = "grey";
}

function delet_element(id){
    let list  = document.getElementById(String(id));
    list.remove();
}
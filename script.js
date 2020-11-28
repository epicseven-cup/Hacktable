let list_count = 0;
function create_list(){
    let create_list = document.createElement("div");
    let list_data = document.getElementById("add_list").value;
    let div = document.getElementById("check_list");
    create_list.id ="list" + list_count;
    let check_mark = "<img src ='img1' height ='20px' width ='20px'>"
    let cancle_mark = "<img src ='img2' height ='20x' width ='20px'>"
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
function ConfirmView(){
    var confirm_with_tag = [];
    var add_inner = "";
    console.log(confirm_list.length);
    for(i = 0;i < confirm_list.length;i++){
        var add_tag = "<div class='con_line' id='all_list_"+ i +"'><p id='num_"+ i +"' class='number'>" + confirm_list[i] + "</p><button id='delete_"+ i +"' class='delete' onclick='DeleteNum("+ i +")'>削除</button></div>";
        confirm_with_tag.push(add_tag);
    }
    for(i = 0; i < confirm_with_tag.length;i++){
        add_inner = add_inner + confirm_with_tag[i];
    }
    document.getElementById("list_num").innerHTML = add_inner;
}

function CalcAve(){
    var sum = 0;
    var len = confirm_list.length;
    var  digit = 2;
    for(i = 0;i < len;i++){
        sum += confirm_list[i];
    }
    var result = Math.round((sum / len) * Math.pow(10,digit)) / Math.pow(10,digit);
    if(isNaN(result)){
        result = 0;
    }
    document.getElementById("view_ave").innerHTML = result;
}

function Confirm(){
    if(change){
        confirm_list[choice_point] = view;
        change = false;
    }else{
        if(delete_num < 0 && !all_delete){
            confirm_list.unshift(view);
        }
    }
    ConfirmView();
    ResetInput();
    if(delete_num >= 0){
        console.log("ここ通過");
        delete_num = -1;
    }
    CalcAve();
    view = 0;
    document.getElementById("view_list_count").innerHTML = confirm_list.length;
    if(all_delete){
        all_delete = false;
    }
}
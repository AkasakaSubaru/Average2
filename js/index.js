/**
メインとなる処理を記述するjsファイル。キーボードから受けた処理などを記述している。結果の表示などはviewresult.jsにて
**/

var input_number =[];       //ユーザーが入力している数
var ctrl_switch = false;
var view = 0;
var confirm_list = [];      //ユーザが確定した数値の配列
var choice_point = -1;
var change = false;
var stack = 0;
var move = false;
var delete_num = -1;
var all_delete = false;

function handleTouchMove(event) {
    event.preventDefault();
}

function ViewError(comment){
    document.getElementById("error_co").innerHTML = comment;
    setTimeout(function(){
        document.getElementById("error_co").innerHTML = "";
    },3000);
}

function NumberView(){
    var len = input_number.length;
    view = 0;
    for(i = 0;i < len;i++){     //表示する桁に変換
        view += input_number[len-i-1] * (10 ** i);      //桁の揃え
    }
    document.getElementById("view_count").innerHTML = view;     //表示
}

function ClickNum(number){      //入力される数値をinput_numberに入れる
    input_number.push(number);
    if(input_number.length < 14){
        NumberView();
    }else{
        ViewError("桁数が超過しています");
    }
}

function ResetInput(){
    input_number = [];
    NumberView();
}

function BackInput(){
    input_number.pop();
    NumberView();
}

function DeleteNum(index){
    view = 0;
    input_number = [];
    delete_num = index;
    confirm_list.splice(delete_num,1);
    console.log(delete_num);
    Confirm();
}

function SetInput(key){
    var choice_num = 0;
    if((choice_point >= confirm_list.length-1 && key == "down") || (choice_point <= 0 && key == "up" && !move)){
        console.log("ここ");
    }else if(choice_point <= 0 && key == "up" && move){
        stack = String(stack);
        input_number = [];
        view = 0;
        for(i = 0; i < stack.length;i++){
            var add = stack.substring(i,i+1);
            add = Number(add);
            input_number.push(add);
        }
        NumberView();
    }else{
        input_number = [];
        if(key == "down"){
            if(choice_point == -1){
                stack = view;
                move = true;
            }
            change = true;
            choice_point++;
            choice_num = confirm_list[choice_point];
        }else if(key == "up"){
            choice_point--;
            choice_num = confirm_list[choice_point];
        }
        choice_num = String(choice_num);
        for(i = 0; i < choice_num.length; i++){
            var add = choice_num.substring(i,i+1);
            add = Number(add);
            input_number.push(add);
        }
        NumberView();
    }
}

function DeleteAll(){
    var res = confirm("データを全削除します。よろしいですか？");
    if(res){
        ResetInput();
        confirm_list = [];
        all_delete = true;
        Confirm();
    }
}

function Ctrl_command(command,event){
    if(ctrl_switch){
        if(command == "67"){
            ResetInput();
        }else if(command == "40"){
            event.preventDefault();
            SetInput("down");
        }else if(command == "38"){
            event.preventDefault();
            SetInput("up");
        }else if(command == "68"){
            DeleteNum(view);
        }else if(command == "75"){
            DeleteAll();
        }
    }
}

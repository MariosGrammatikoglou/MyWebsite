const display = document.getElementById('display');
const text = document.getElementById('textArea');



function encode(){
    const result1 = btoa(text.value);
        let result2 = result1.replace("Mzky","mao");
        result2 = result2.replace("p","KilLj0y");
        result2 = result2.replace("q","0meN");
     result2 = result2.replace("Q","G3kK0");
    display.value= result2;
}

function decode(){
    const result1 = text.value;
    let result2 = result1.replace("mao","Mzky");
            result2 = result2.replace("KilLj0y","p");
            result2 = result2.replace("0meN","q");
            result2 = result2.replace("G3kK0","Q");
    display.value= atob(result2);
}


let toastBox = document.getElementById('toastBox');
        
        let encodeMsg ='<i class="fa-solid fa-lock"></i> Succesfully encoded!';
        let decodeMsg ='<i class="fa-solid fa-unlock"></i> Succesfully decoded!';
        let errorMsg ='<i class="fa-solid fa-keyboard"></i> Input not found!';
        
        function showToast(msg){
            if(text.value.length == 0){
                msg=errorMsg;
            }
                   
                let toast = document.createElement('div');
                toast.classList.add('toast');
                toast.innerHTML = msg;
                toastBox.appendChild(toast);
            
                setTimeout(()=>{
                        toast.remove();
                },6000);
        }
        

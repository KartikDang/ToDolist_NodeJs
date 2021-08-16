var cl=1;

$(".box").click(function(){
    cl++;
    if(cl%2==0)
    {
        $(".item p").css("text-decoration","line-through");
        $(".check").prop("checked", true);
    }

    else{
        $(".item p").css("text-decoration","none");
        $(".check").prop("checked",false);
    }
 
})
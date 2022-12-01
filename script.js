var index=0;


function changecolor(){
    var color=["orangered","cyan","purple","blue","green"];

    document.getElementsByTagName("body")[0].style.background=color[index++];


    if(index>color.length-1)
        index=0;
    
}
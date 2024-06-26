
$("h1").addClass("big-title margin50");
$("button").css("border-radius","10%");
$("button").css("margin","5px")
$("a").attr("href","https://yahoo.com");

// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color= "purple"
//     })
// }
$("button").click(function(){
    $("h1").css("color","pink");
})

// $(document).keypress(function(event){
//     // console.log(event.key);
//     $("h1").text(event.key);
// })
$("h1").on("mouseover",function(){
    $("h1").css("color","red");
})
$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$('h1').prepend("<button>prepend</button>")
$("h1").append("<button>append</button>");
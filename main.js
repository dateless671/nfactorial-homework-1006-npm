$('document').ready(function(){
    $('#btn-first').on('click', function(){
        var name = $('#name').val()
        var name2 = $('#name2').val()
        var verb = $('#verb').val()
        var adverb = $('#adverb').val()

        var result = '<div class = "mad-libs">' + name +' '+ adverb +' '+ verb +' '+ name2 + '</div>'

        $('.output').replaceWith('<div class = "output"' + result + '</div>')

    })

    $('#mad').on('click',function(){
        $('header').text("Mad Libs")
        $('.container-inner').css('display','table-cell')
        $('.container2').css('display','none')
    })

    $('#btn-second').on('click', function(){
        var width = $('#width').val()
        var heigth = $('#heigth').val()
        var colors = $('#colors').val()

        var size = ((width*heigth)/8)+(colors * 3)

        $('.output2').replaceWith('<div class = "output2">' + size + '</div>')
    })

    $('#tom').on('click',function(){
        $('header').text("Tom Thumbs")
        $('.container-inner').css('display','none')
        $('.container2').css('display','flex')
    })    
})


function addCookie() {
    document.cookie = "user=Yera; expires=Wed; 15 JUN 2022 00:00:00 GMT";
};

function setWhiteTheme() {
    localStorage.setItem("theme", "light");
    const root = document.getElementById("main");
    root.className = "light";
}
function setDarkTheme() {
    localStorage.setItem("theme", "dark");
    const root = document.getElementById("main");
    root.className = "dark";
}


function getValue() {
    const theme = localStorage.getItem("theme");   
    const root = document.getElementById("main");
    root.className = theme;
}
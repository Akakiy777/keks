$('document').ready(function(){
    var money = 1000
    function UP(){
        $('#money').text(String(money)+'$')
    };
    $('#sub').click(function(){
        money+=Number(document.getElementById('price').value);
        UP()
        alert('Успешно')
    });
    $('#black').click(function(){
        if (confirm('Цена: 5000$')==true){
            if(money>=5000){
                money-=5000
                UP()
                var hui = document.getElementById('hui')
                hui.src='hui2.png'
                alert('Успешно')
            }else{
                alert('Не хватает денег');
            }
        }
    });
    $('#white').click(function(){
        if (confirm('Цена: 1000$')==true){
            if(money>=1000){
                money-=1000
                UP()
                var hui = document.getElementById('hui')
                hui.src='hui.png'
                alert('Успешно')
            }else{
                alert('Не хватает денег');
            }
        }
    });
    $('#paste').click(function(){
        if(money>=100){
            money-=100
            UP()
            $('#set').html('<style id="set">#hui{bottom: 20%;}</style>')
            setTimeout(() => $('#set').html('<style id="set"></style>'), 200);
        }else{
            alert('Не хватает денег');
        }
    });
    $('#cut').click(function(){ 
        if (confirm('Цена: 1000$')==true){
            if(money>=1000){
                var jopa = document.getElementById('jopa')
                money-=1000
                UP()
                $('#set').html('<style id="set">#hui{bottom: 20%;}</style>')
                setTimeout(() => $('#set').html('<style id="set"></style>'), 3000);
                setTimeout(() => jopa.src='jopa2.png', 3050);
                setTimeout(() => jopa.src='jopa.png', 6050);
            }else{
                alert('Не хватает денег');
            }
        }
    });
});
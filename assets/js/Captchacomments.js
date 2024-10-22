const nums = [1,2,3,4,5,6,7,8,9,0] 
const chars = ['a','s','d','f','h','z','x','v','b','n'] 
 
function getCapthaText(){ 
    var captcha = "" 
    for(let i = 0; i < 5; i++) 
    if (Math.floor(Math.random() * 2) == 0){ 
        captcha += nums[Math.floor(Math.random() * 10)] 
    } 
    else{ 
        if (Math.floor(Math.random() * 2) == 0){ 
            captcha += chars[Math.floor(Math.random() * 10)] 
        } 
         
        else{ 
            captcha += chars[Math.floor(Math.random() * 10)].toUpperCase() 
        } 
    } 
    return captcha 
} 

var captchaForTest = getCapthaText() 
 
//document.querySelector(".captcha").innerHTML = captchaForTest 
 
document.querySelector(".comment_button").addEventListener('click', ()=>{ 
    if (hasBadWords(document.querySelector(".comment_input").value)){
        alert("Сообщение содержит бранные слова!")
        captchaForTest = getCapthaText()
        document.getElementById('textCanvas').style.display = 'none' 
        document.getElementById('text').style.display = 'grid'
        return 0 
    }
    if (document.querySelector(".captcha_inputs").value == captchaForTest && document.querySelector(".comment_input").value!=""){ 
        captchaForTest = getCapthaText() 
        
        //document.querySelector(".captcha").innerHTML = captchaForTest 
        addComment()
        document.getElementById('textCanvas').style.display = 'none' 
        document.getElementById('text').style.display = 'grid'
        alert("Комментарий опубликован!")
        return 0 
    }else{
        alert("Каптча введена неправильно или вы не ввели комментарий, попробуйте снова.") 
        captchaForTest = getCapthaText()
        document.getElementById('textCanvas').style.display = 'none' 
        document.getElementById('text').style.display = 'grid'
        
    } 
})


var tCtx = document.getElementById('textCanvas').getContext('2d'), //Hidden canvas
imageElem = document.getElementById('image'); //Image element
// Text input element
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function randomGrad()
{
    var ret = `rgba(${getRandomInt(256)},${getRandomInt(256)},${getRandomInt(256)}`;
    return ret;
}

document.getElementById('text').addEventListener('mouseover', function() {
    
    
    
    document.getElementById('text').style.display = 'none'
    document.getElementById('textCanvas').style.display = 'grid'
    tCtx.clearRect(0,0,tCtx.canvas.width,tCtx.canvas.height);
    tCtx.font = "italic 30pt Arial";
    
    var gradient = tCtx.createLinearGradient(0, 0, 0, 60); 
    gradient.addColorStop(0.0, randomGrad()+',1)'); 
    gradient.addColorStop(0.3, randomGrad()+',0.6)'); 
    gradient.addColorStop(0.6, randomGrad()+',0.4)'); 
    gradient.addColorStop(1.0, randomGrad()+',0.2)');
    
    tCtx.fillStyle = gradient;
    tCtx.fillText(captchaForTest, 40, 80);
    //imageElem.src = tCtx.canvas.toDataURL();
    //console.log(imageElem.src);
}, false);
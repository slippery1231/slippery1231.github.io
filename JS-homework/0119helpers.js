function $g(selector) {
    //判斷是否為id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        //回傳Element
        return document.querySelector(selector);
    }

    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function $gg(selector){
    //nodeList至少包含一個node->element object
    //如果沒有 ->回傳空nodeList

    let nodelist = document.querySelectorAll(selector);
    if(nodelist.length == 0){
        return null ;
        //如果nodelist長度為0(empty nodelist) ->可以回傳null或undefined
    }
    return nodelist.length == 1? nodelist[0] : nodelist;
    //如果nodelist.length==1 回傳nodelist，這樣呼叫端還要再用forEach處理nodelist，所以回傳單個元素就好了
}

function $ce(element, text) {
    let el = document.createElement(element);

    //防呆:判斷text參數是否符合規範:如果參數為undefined、null、空字串
    if(typeof(text)!=="undefined"&& typeof(text)!==''&&typeof(text)!==null){
        el.innerText = text;
    }

    return el;
}

export {$g ,$gg,$ce};
var maincard = document.getElementById('mainwrap')
// to make request we use XMLHTTPRequest Object
var xhhtp = new XMLHttpRequest();
// configure the request
xhhtp.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', 'true')

//handle response

xhhtp.onreadystatechange=function(){
  //  console.log(xhhtp.readyState);
    if(xhhtp.readyState === 4){
        //console.log(JSON.parse(this.responseText))
        var responseArr = JSON.parse(xhhtp.responseText);
        //console.log(responseArr);
        
        for (let i=0; i<responseArr.length; i++){
          // console.log(responseArr[i].title)

           var card = document.createElement('div')
           card.classList.add('card');
           var link = document.createElement('a')
           
           link.id = responseArr[i].id;
           link.href="detail.html?source=" + link.id;
           card.append(link)
           var cardimg = document.createElement('img')
           link.append(cardimg)
           cardimg.src=responseArr[i].thumbnail;
           cardimg.alt=responseArr[i].title;
           var cartitle = document.createElement('h1');
           cartitle.innerHTML = responseArr[i].title;
           link.append(cartitle);
           maincard.append(card);
        }
        
    }
}
//Send request to the backend
xhhtp.send();

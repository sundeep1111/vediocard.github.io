var maindetailpage = document.getElementById('detailimgwrap')
var xhhtpdetail = new XMLHttpRequest();


var  source = location.href.split('source=')[1];

console.log(location.href.split('source=')[1])

xhhtpdetail.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/video/' + source,'true')

xhhtpdetail.onreadystatechange = function(){
  if(xhhtpdetail.readyState === 4){
    var detailresponseArr = JSON.parse(xhhtpdetail.responseText);
    var imgwrap = document.createElement('div');
    imgwrap.classList.add('vedimg')
    var vediid = detailresponseArr.vimeoId;
    console.log(vediid)
    var framevemio = document.getElementById("vedi_fram")
    framevemio.src = "https://player.vimeo.com/video/" + vediid

    imgwrap.append(framevemio);
    maindetailpage.append(imgwrap)

    var viewswrap = document.createElement('div')
   viewswrap.classList.add('viewcount')
   var viewsno = document.createElement('div')
   viewsno.classList.add('bord')
   viewsno = detailresponseArr.views + "view"
   
   var viewsicon = document.createElement('div')
   viewsicon.classList.add('iconalin')
   var alink1 = document.createElement('a')
   alink1.classList.add("faicon");
    var faicon = document.createElement("i");
    faicon.classList.add("far", "fa-heart");
    alink1.appendChild(faicon);
    viewsicon.append(alink1)

    var alink2 = document.createElement('a')
   alink2.classList.add("faicon");
    var faicon1 = document.createElement("i");
    faicon1.classList.add("far", "fa-comment-alt");
    alink2.appendChild(faicon1);
   //alink1.appendChild = ('<i class="far fa-heart"></i>')
   viewsicon.append(alink2)

   var alink3 = document.createElement('a')
   alink3.classList.add("faicon2");
    var faicon2 = document.createElement("i"); 
    faicon2.classList.add("far", "fa-bookmark");
    alink3.appendChild(faicon2);
   //alink1.appendChild = ('<i class="far fa-heart"></i>')
   viewsicon.append(alink3)
   viewswrap.append(viewsno)
   viewswrap.append(viewsicon)
   maindetailpage.append(viewswrap)


   var detailtitle = document.createElement('div');
   detailtitle.classList.add('h1font')
   var h1title = document.createElement('h1')
   h1title.innerHTML = detailresponseArr.title
   detailtitle.append(h1title)
   maindetailpage.append(detailtitle)

   var detailtext = document.createElement('div');
   detailtext.classList.add('descrtxt');
   detailtext.innerHTML = detailresponseArr.description;

   maindetailpage.append(detailtext)
    
   // console.log(detailresponseArr)
  }
}
xhhtpdetail.send();
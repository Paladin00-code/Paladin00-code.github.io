window.onload=function(){
  document.querySelector(".tabs-header").addEventListener('click', ClickTab);
  function ClickTab(event){
      var arrTabs=document.getElementsByClassName('tab');
      for(var i=0; i<arrTabs.length; i++)
      {
        arrTabs[i].classList.remove('tabActive');
      }
    
    if(event.target.className=="tab"){
      var dataTab=event.target.getAttribute('data-tab');
      
      var arrTabBody=document.getElementsByClassName('tab-body');
      for(var i=0; i<arrTabBody.length; i++){
        if(dataTab==i)
          {
            arrTabBody[i].style.display='block';
            event.target.classList.add('tabActive');
          }
        else 
          {
            arrTabBody[i].style.display='none';
            
          }
      }
    }
  }
}



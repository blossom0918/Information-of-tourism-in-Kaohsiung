function area(){
    var areaList = document.querySelector('.areaList');
  areaList.addEventListener('change', function(e){
    var selectValue = e.target.value;
    var xhr = new XMLHttpRequest();
    xhr.open('get', "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97");
    xhr.send();
    xhr.onload = function () { 
      var data = JSON.parse(xhr.responseText);
      var info = '';
      var dash = '<div class="line"></div>';
      for(var i = 0; data.result.records.length > i; i++){
        if(data.result.records[i].Zone == selectValue){
          info += '<div><img src="'+ data.result.records[i].Picture1 + '" class="pic">';
          info += '<h3 class="name">'+ data.result.records[i].Name + '</h3>';
          info += '<p class="zone">' + data.result.records[i].Zone + '</p>' +
                  '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png" class="timeicon">' +
                  '<p class="time">' + data.result.records[i].Opentime + '</p>' +
                  '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png" class="addicon">' +
                  '<p class="add">' + data.result.records[i].Add + '</p>' +
                  '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png" class="telicon">' +
                  '<p class="tel">' + data.result.records[i].Tel + '</p>' +               
                  '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_tag.png" class="ticketicon">' +              
                  '<p class="ticket">' + data.result.records[i].Ticketinfo + '</p></div>';   
        }
      }  
      
      document.querySelector('.arealine').innerHTML = dash;
      document.querySelector('.list').innerHTML = info;
      document.querySelector('.selectarea').innerHTML = selectValue;
    }
  })
  }
  
  
   function area1(){
     var btn = document.querySelector('.no1');
     btn.addEventListener('click', function(e){
      var selectValue = e.target.value;
      var xhr = new XMLHttpRequest();
      xhr.open('get', "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97");
      xhr.send();
      xhr.onload = function () { 
        var data = JSON.parse(xhr.responseText);
        var info = '';
        var dash = '<div class="line"></div>';
        for(var i =0;data.result.records.length>i;i++){
          if(data.result.records[i].Zone == selectValue){
            info += '<div><img src="'+ data.result.records[i].Picture1 + '" class="pic">';
            info += '<h3 class="name">'+ data.result.records[i].Name + '</h3>';
            info += '<p class="zone">' + data.result.records[i].Zone + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png" class="timeicon">' +
                    '<p class="time">' + data.result.records[i].Opentime + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png" class="addicon">' +
                    '<p class="add">' + data.result.records[i].Add + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png" class="telicon">' +
                    '<p class="tel">' + data.result.records[i].Tel + '</p>' +               
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_tag.png" class="ticketicon">' +                         '<p class="ticket">' + data.result.records[i].Ticketinfo + '</p></div>';   
         }
        }  
  
        document.querySelector('.arealine').innerHTML = dash;
        document.querySelector('.list').innerHTML = info;
        document.querySelector('.selectarea').innerHTML = selectValue;
    }
  })        
  }
        
   function area2(){
     var btn = document.querySelector('.no2');
     btn.addEventListener('click', function(e){
      var selectValue = e.target.value;
      var xhr = new XMLHttpRequest();
      xhr.open('get', "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97");
      xhr.send();
      xhr.onload = function () { 
        var data = JSON.parse(xhr.responseText);
        var info = '';
        var dash = '<div class="line"></div>';
        for(var i =0;data.result.records.length>i;i++){
          if(data.result.records[i].Zone == selectValue){
            info += '<div><img src="'+ data.result.records[i].Picture1 + '" class="pic">';
            info += '<h3 class="name">'+ data.result.records[i].Name + '</h3>';
            info += '<p class="zone">' + data.result.records[i].Zone + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png" class="timeicon">' +
                    '<p class="time">' + data.result.records[i].Opentime + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png" class="addicon">' +
                    '<p class="add">' + data.result.records[i].Add + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png" class="telicon">' +
                    '<p class="tel">' + data.result.records[i].Tel + '</p>' +               
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_tag.png" class="ticketicon">' +                         '<p class="ticket">' + data.result.records[i].Ticketinfo + '</p></div>';   
         }
        }  
  
        document.querySelector('.arealine').innerHTML = dash;
        document.querySelector('.list').innerHTML = info;
        document.querySelector('.selectarea').innerHTML = selectValue;
    }
  })
  }
  
   function area3(){
     var btn = document.querySelector('.no3');
     btn.addEventListener('click', function(e){
      var selectValue = e.target.value;
      var xhr = new XMLHttpRequest();
      xhr.open('get', "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97");
      xhr.send();
      xhr.onload = function () { 
        var data = JSON.parse(xhr.responseText);
        var info = '';
        var dash = '<div class="line"></div>';
        for(var i =0;data.result.records.length>i;i++){
          if(data.result.records[i].Zone == selectValue){
            info += '<div><img src="'+ data.result.records[i].Picture1 + '" class="pic">';
            info += '<h3 class="name">'+ data.result.records[i].Name + '</h3>';
            info += '<p class="zone">' + data.result.records[i].Zone + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png" class="timeicon">' +
                    '<p class="time">' + data.result.records[i].Opentime + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png" class="addicon">' +
                    '<p class="add">' + data.result.records[i].Add + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png" class="telicon">' +
                    '<p class="tel">' + data.result.records[i].Tel + '</p>' +               
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_tag.png" class="ticketicon">' +                         '<p class="ticket">' + data.result.records[i].Ticketinfo + '</p></div>';   
         }
        }  
  
        document.querySelector('.arealine').innerHTML = dash;
        document.querySelector('.list').innerHTML = info;
        document.querySelector('.selectarea').innerHTML = selectValue;
    }
  })
  }
  
   function area4(){
     var btn = document.querySelector('.no4');
     btn.addEventListener('click', function(e){
      var selectValue = e.target.value;
      var xhr = new XMLHttpRequest();
      xhr.open('get', "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97");
      xhr.send();
      xhr.onload = function () { 
        var data = JSON.parse(xhr.responseText);
        var info = '';
        var dash = '<div class="line"></div>';
        for(var i =0;data.result.records.length>i;i++){
          if(data.result.records[i].Zone == selectValue){
            info += '<div><img src="'+ data.result.records[i].Picture1 + '" class="pic">';
            info += '<h3 class="name">'+ data.result.records[i].Name + '</h3>';
            info += '<p class="zone">' + data.result.records[i].Zone + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png" class="timeicon">' +
                    '<p class="time">' + data.result.records[i].Opentime + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png" class="addicon">' +
                    '<p class="add">' + data.result.records[i].Add + '</p>' +
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png" class="telicon">' +
                    '<p class="tel">' + data.result.records[i].Tel + '</p>' +               
                    '<img src="https://hexschool.github.io/JavaScript_HomeWork/assets/icons_tag.png" class="ticketicon">' +                         '<p class="ticket">' + data.result.records[i].Ticketinfo + '</p></div>';   
         }
        }  
  
        document.querySelector('.arealine').innerHTML = dash;
        document.querySelector('.list').innerHTML = info;
        document.querySelector('.selectarea').innerHTML = selectValue;
    }
  })
  }
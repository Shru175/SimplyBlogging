(function () {
    window.addEventListener('load', function () {
        var blogid = [1, 2, 3];
        var blogTitle=["Top 10 of 2021","Top appliances","2022 and more"];
        var blogname = ["Top devices of 2021", "High rated products", "What to look out for in 2022"];
        var blogDes = ["Best of 2021...", "Most appreciated products...", "2022 and more...."];
        var taskitems=[];
        taskitems=JSON.parse(window.localStorage.getItem('taskList'));
        tempTable = "";
        if(taskitems.length>=1)
        {

            for(j=0;j<taskitems.length;j++)
            {
                blogid.push(1+blogid.length);
                blogTitle.push(taskitems[j].taskTitle);
                blogname.push(taskitems[j].taskTitle);
                blogDes.push(taskitems[j].taskDes);
             
            }
           
        }
        for (let i = 0; i < blogid.length; i++) {


            
            var card= document.createElement("div");
            card.className="card col-md-3 col-sm-6 col-xs-12";
            var element1 = document.getElementById("cardRow");
                  
            var cardHeader = document.createElement("div");
            cardHeader.className = "card-header";
            var text = document.createTextNode(blogTitle[i]);
            cardHeader.appendChild(text);
            
            var cardbody = document.createElement("div");
            cardbody.className = "card-body";
           

            var cTitle = document.createElement("h5");
            cTitle.className = "card-title";
            var text1 = document.createTextNode(blogname[i]);
         

            var cText = document.createElement("p");
            cText.className = "card-text";
            var text2 = document.createTextNode(blogDes[i]);
         

            var cbutton = document.createElement("button");
            cbutton.className = "btn btn-primary";
         
             cbutton.innerHTML="Read more..";
             cTitle.appendChild(text1);
             cardbody.appendChild(cTitle);
             
             cardbody.appendChild(text2);
             cardbody.appendChild(cbutton);
             cardHeader.appendChild(cardbody);
             card.appendChild(cardbody);
             element1.appendChild(card); 
         

                    }

    }, false)

})();
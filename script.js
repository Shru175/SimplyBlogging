(function () {
    window.addEventListener('load', function () {
        var blogid = [1, 2, 3];
        var blogname = ["Dubai", "kerala", "thailand"];
        var blogDes = ["Of Deserts and more", "Gods own country", "Beaches and more...."];
        tempTable = "";
        var blogTable = document.getElementById('blgTable');

        blogTable.innerHTML = '';


        for (let i = 0; i < blogid.length; i++) {


           var cardHeader = document.createElement("div");
            cardHeader.className = "card-header";
            var text = document.createTextNode("Travel");
            cardHeader.appendChild(text);
            var element1 = document.getElementById("card");
            element1.appendChild(cardHeader);


            var cardbody = document.createElement("div");
            cardbody.className = "card-body";

            var cTitle = document.createElement("h5");
            cTitle.className = "card-title";
            var text1 = document.createTextNode(blogname[i]);
            cTitle.appendChild(text1);

            var cText = document.createElement("p");
            cText.className = "card-text";
            var text2 = document.createTextNode(blogDes[i]);
            cText.appendChild(text2);

            var cbutton = document.createElement("button");
            cbutton.className = "btn btn-primary";
            var text3 = document.createTextNode("Explore");
            cbutton.appendChild(text3);


            element1.appendChild(cTitle);
            element1.appendChild(cText);
            element1.appendChild(cbutton);
            }
}, false)
})();
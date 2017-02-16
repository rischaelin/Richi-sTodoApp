$().ready(function () {

    // Progamm um mit plusbutton neue Aufgabe hinzu zufügen

    // meine Elemente
    var $plusButton = $("#plusbutton");
    var $input = $("input");
    var $listeOffen = $('.offen');
    var $listeFertig = $('.fertig');

    var newtaskliste = [
        {"status": false, "titel": "Techfabrik-Schule", "id": "01"},
        {"status": false, "titel": "Auto in Garage", "id": "02"},
        {"status": false, "titel": "BM-Probe", "id": "03"},
        {"status": true, "titel": "Skifahren", "id": "04"}
    ];

    newtaskliste.forEach(function (task) {
        var $listItem = buildTaskItem(task.titel);
        if (!task.status){
            $listeOffen.append($listItem);
        } else {
            $listeFertig.append($listItem);
        }
    });


    $plusButton.on('click', function () {
        var inputInhalt = $input.val();
        if  (inputInhalt !== ''){
            var newliste = buildTaskItem(inputInhalt);
            $listeOffen.append(newliste);
            newliste.append();
            $input.val('');
        }

    })

   /* var taskliste =   [
        {"erledigt": false, "caption": "Toast kaufen"},
        {"erledigt": false, "caption": "Brot kaufen"},
        {"erledigt": true, "caption": "Bier kaufen"},
        {"erledigt": false, "caption": "Milch kaufen"},
        {"erledigt": false, "caption": "Käse kaufen"}
    ];


    taskliste.forEach(function(task){
        var $listItem = buildTaskItem(task.caption);
        if (!task.erledigt){
            $listeOffen.append($listItem);
        } else {
            $listeFertig.append($listItem);
        }




    }); */


/*
        // bei click auf plusbutton....
        $plusButton.on('click', function () {

            // wird mein Inhlat vom input (Wert)
            var inputInhalt = $input.val();

            //nur wenn Inhalt existiert
            if (inputInhalt !== '') {

                // in ein li-tag geschrieben
                var $listItem = buildTaskItem(inputInhalt);

                // und mit einem ul unten anfügen (append)
                $listeOffen.append($listItem);

                // bei li erstellten tag x hingzufügen (append)
                $listItem.append();

                // textfeld leeren
                $input.val('');
            }

        });*/

    // von offenen Aufgabe in Erledigte - Liste verschieben



    $listeOffen.on('click', '.task', function () {
       // var $task = $(this);
        $listeFertig.prepend(this);


    });



});

var buildTaskItem = function(titel) {
    var $listItem = $('<li></li>');
    $listItem.addClass('task');
    $listItem.html(titel);
    return $listItem;

}




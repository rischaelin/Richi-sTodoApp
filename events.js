$().ready(function () {


    // Progamm um mit plusbutton neue Aufgabe hinzu zufügen

    // meine Elemente
    var $plusButton = $("#plusbutton");
    var $input = $("input");
    var $listeOffen = $('.offen');
    var $listeFertig = $('.fertig');
    var $objectListe = $('')


    var tasklisteAufbauen = function (newtaskliste) {
        newtaskliste.forEach(function (task) {
            var $listItem = buildTaskItem(task.titel);
            if (!task.status) {
                $listeOffen.append($listItem);
            } else {
                $listeFertig.append($listItem);
            }
        });

        //bei click auf plusbutton....
        $plusButton.on('click', function () {

            // wird mein Inhlat vom input (Wert)
            var inputInhalt = $input.val();

            //nur wenn Inhalt existiert
            if (inputInhalt !== '') {

                // in ein li-tag geschrieben
                var newliste = buildTaskItem(inputInhalt);
                $listeOffen.append(newliste);
                newliste.append();
                $input.val('');
            }

        });

    };

    $listeOffen.on('click', '.task', function () {
        // var $task = $(this);

        $listeFertig.prepend(this);

    });

    $.ajax({
        url: "api/taskliste.json",
        dataType: "json"
    }).done(tasklisteAufbauen);


});

var buildTaskItem = function (titel) {
    var $listItem = $('<li></li>');
    $listItem.addClass('task');
    $listItem.html(titel);
    return $listItem;

}




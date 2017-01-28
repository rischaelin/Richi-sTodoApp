$().ready(function () {

    // Progamm um mit plusbutton neue Aufgabe hinzu zufügen

    // meine Elemente
    var $plusButton = $("#plusbutton");
    var $input = $("input");
    var $liste = $('ul:first');
    var $closeButton = $('<div>x</div>')


    // bei click auf plusbutton....
    $plusButton.on('click', function () {

        // wird mein Inhlat vom input (Wert)
        var inputInhalt = $input.val();

        //nur wenn Inhalt existiert
        if (inputInhalt !== '') {

            // in ein li-tag geschrieben
            var $listItem = $('<li></li>');
            $listItem.html(inputInhalt);


            // und mit einem ul unten anfügen (append)
            $liste.append($listItem);

            // bei li erstellten tag x hingzufügen (append)
            $listItem.append($closeButton)

            // textfeld leeren
            $input.val('');
        }

        // bei click auf icon....
        $closeButton.on('click',function () {



            // ...wird meine Aufgabe in die Erledigte-liste veschoben

        $listItem.append();

        })

    });

});




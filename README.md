# EUWebseite
Diese Webseite dient dem informieren der Besucher über die Europäische Union und deren Gesetze/Parteien.
Bitte zuerst die __gesamte__ README.md lesen, bevor man beginnt etwas zu ändern.

## Neuen Artikel erstellen:
* Einen neuen Ordner erstellen unter subpages

* Content.php und SideContent.php aus Arikel1(das ist das Template für den Content) in den neuen ordner Kopieren

* Im Subpages Ordner artikelTemplate.php kopieren und umbenennen(am besten gleich in den Artikelnamen :P)

* In dem neuen Artikel.php bei den php tags auf die Contentfiles verweisen dazu muss wenn alle schritte exakt befolgt wurden nur den ordner namen ändern. Standartmässig steht dor include'contenfiles/Artikel1/Content' und include'contenfiles/Artikel1/Content' einfach /Artikel1/ ändern auf /NAME DEINES ARTIKEL ORDNERS/ dann kann der content und sidecontent geladen werden.

* Der letzte Schritt ist nur noch die Contentfiles deines Artikels zu bearbeiten dazu einfach Content.php in dem Artikel Ordner öffnen und den gewünschten Content einfügen egal ob Video Bilder Text etc.. In SideContent.php kann man auf andere Artikel verlinken.

  

## Was ist noch zu tun?
Die erste Gruppe hat sich damit beschäftigt, das Grundlegende der Webseite zu erstellen sowie auch erste Artikel hinzuzufügen. Tätigkeiten von kommenden Gruppen würden folgendes beinhalten:

* Erstellen von weiteren Artikeln!

* Erweitern der Webseite (Serverside Javaskript/Datenbank)
  * Bei der Section "wichtigste Artikel" wo die drei Artikel
    * Wie funktioniert die Wahl?
    * Wie kann ich eine Partei wählen?
    * Information zur EU

    sind gibt es bei den Überschriften noch keinen Link zu den passenden Artikel, weil noch keine dazu erstellt wurden. Wenn ein passender Artikel zu einem Artikel vorhanden ist, bitte die Funktionalität mit der Verlinkung in der Überschrift einbauen.

  * Beim Button "Mehr Artikel ansehen" gibt es zwar die Themenübersicht, aber nur der erste Link "Allgemeine Informationen" funktioniert. Es muss nämlich noch die Unterseite (klicke bitte auf (Allgemeine Informationen um auf die Seite "Artikelübersicht" zu kommen)) programmiert werden. Es sollen dort immer die neuesten Artikel zu dem passenden Thema erscheinen. Erst wenn diese Funktionalität funktioniert, kann man es zu den anderen Themenbereichen ebenfalls eine Unterseite hinzufügen.

  * Im "Politik" - Bereich müssen noch passende Artikel zu den einzelnen Parteien geben. Das ist aber keine gewöhnliche Artikel-Seite (bitte parteiTemplate.html benutzen (hat ein anderes Layout, als die herkömmliche Artikel-Seite)).

  * Bei Zukunft muss noch die Unterseite für den Button "Mehr Zitate ansehen" erstellt werden.

  * Bei Gesetze muss noch die Unterseite für den Button "Erfahre mehr über die Gesetze der EU" erstellt werden. Ebenfalls der Inhalt von den Artikeln "Artikel 11" und "Artikel 13"

  * Das Quiz benötigt mehr fragen und als Nice-To-Have eine Ausdruckfunktion, um sich sein persönliches Ergebnis ausdrucken zu können (entweder als PDF oder wirklich an Drucker senden)

  * Schreibt eure Namen bei der "Über uns"-Seite hinzu

  * Unter dem Propaganda-Bild (ganz oben auf der Homepage, wird neben dem Titel "The U in EU" eingeblendet), soll ein Copyright Symbol mit dem Namen des Erstellers eingeblendet sein (zB &copy Alexander Cech)
  * Ebenfalls soll eine Diashow (bei Bootstrap heißt es [Carousel](https://getbootstrap.com/docs/4.0/components/carousel/#with-indicators)) bei den Propaganda-Bilder sein, damit man mehr Propaganda-Bilder anzeigen kann

  * Der Timer auf der Homepage endet noch nicht richtig. Wenn er sein End-Datum erreicht hat, wird -1, -1, -1, -1 angezeigt. Bitte beheben! (um es zu testen, setzt einfach ein das heutige Datum und eine Uhrzeit die ca. 10 sek von der jetzigen entfernt ist)

* Admin Schnittstelle zum einfügen neuer Artikel einbauen

* Das Erweitern der Readme.md wenn neue Teile hinzugefügt werden/überarbeitet werden.

  

## Wie ist die Ordnerverteilung?

__/img__
* Designheft und Logo: img/Logo
* Propaganda-Poster: img/Propaganda
* Artikelbilder: img/Artikeluebersicht
* Politikbilder: img/Politik
* Gesetze-Bilder: img/Gesetze

__/css__
Dort liegen die standardgemäßen Bootstrap-CSS Files. Diese bitte nicht ändern.
Das einzige File, dass man in diesem Ordner bearbeiten darf ist: _style.css_

__/js__
Dort liegen die standardgemäßen Bootstrap-JS Files. Diese bitte nicht ändern.

__/subpages__
* Neue Subpage erstellen: subpages/!leereSeite.html
Das ist eine leere Seite wo nur der Header und der Footer eingebunden sind. Somit hast du schon das Layout eingebunden und kannst den Content beliebig programmieren.
* subpages/contentfiles: Dort sind alle Artikel drinnen, die geschrieben / erstellt wurden.

__/vendor__
Dort liegen die standardgemäßen Bootstrap-Ordner. Diese bitte nicht ändern.

__app_master.zip__
Das ist das Bootstrap-Template, dass wir verwendet haben.



## Die Seite ist online abrufbar
### !!!Tipp, bevor ihr auf die Online-Seite zugreift!!!
Wir haben extra ein Git-Repository erstellt, damit dort jeder seine Dateien pushen und die Änderungen von jemand anderen pullen kann. Warum nicht gleich im Webspace? Da man im Webspace keine Versionen zurückgehen kann. Kurz gesagt: Einer kann mit seiner Änderung die gesamte Webseite ruinieren. Deswegen verwendet bitte das Git-Repository, denn wenn einer was pfuscht, kann man es rückgängig machen. Wählt zum Beispiel einen aus der Gruppe aus, der die Webseite regelmäßig vom Git-Repository pullt und auf dem Webserver updatet.

### Login-Daten
Die Seite ist unter [projekte.tgm.ac.at/EU-Wahlen](https://projekte.tgm.ac.at/EU-Wahlen/) erreichbar.
Um auf diese Seite zugreifen zu können gibt es diese Login-Daten:
Benutzername: proj_euwahlen
Passwort: yie7Phoh

# EUWebseite
Diese Webseite dient dem informieren der Besucher über die Europäische Union und deren Gesetze/Parteien

# Neuen Artikel erstellen:
* Einen neuen Ordner erstellen unter subpages

* Content.php und SideContent.php aus Arikel1(das ist das Template für den Content) in den neuen ordner Kopieren

* Im Subpages Ordner artikelTemplate.php kopieren und umbenennen(am besten gleich in den Artikelnamen :P)

* In dem neuen Artikel.php bei den php tags auf die Contentfiles verweisen dazu muss wenn alle schritte exakt befolgt wurden nur den ordner namen ändern. Standartmässig steht dor include'contenfiles/Artikel1/Content' und include'contenfiles/Artikel1/Content' einfach /Artikel1/ ändern auf /NAME DEINES ARTIKEL ORDNERS/ dann kann der content und sidecontent geladen werden.

* Der letzte Schritt ist nurnoch die Contentfiles deines Artikels zu bearbeiten dazu einfach Content.php in dem Artikel Ordner öffnen und den gewünschten Content einfügen egal ob Video Bilder Text etc.. In SideContent.php kann man auf andere Artikel verlinken.

# Was ist noch zu tun?
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

  * Unter dem Propaganda-Bild (ganz oben auf der Homepage, wird neben dem Titel "The U in EU" eingeblendet), soll ein Copyright Symbol mit dem Namen des Erstellers programmiert werden (zB &copy Alexander Cech)

  * Der Timer auf der Homepage endet noch nicht richtig. Wenn er sein End-Datum erreicht hat, wird -1, -1, -1, -1 angezeigt. Bitte beheben! (um es zu testen, setzt einfach ein das heutige Datum und eine Uhrzeit die ca. 10 sek von der jetzigen entfernt ist)

* Admin Schnittstelle zum einfügen neuer Artikel einbauen

* Das Erweitern der Readme.md wenn neue Teile hinzugefügt werden/überarbeitet werden.

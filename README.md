# EUWebseite
Diese Webseite dient dem informieren der Besucher über die Europäische Union und deren Gesetze/Parteien.
Bitte zuerst die __gesamte__ README.md lesen, bevor man beginnt etwas zu ändern.

## Neuen Artikel erstellen:

Zu jedem Artikel gehört ein Ordner und eine Hauptseite.

### Artikel-Ordner

Der Ordner liegt in `subpages/contentfiles` (zum Beispiel `subpages/contentfiles/MeinArtikel`). Er enthält zwei Dateien: `Content.php` und `SideContent.php`.

- Kopiere den Ordner `subpages/contentfiles/Artikel1` und benenne ihn in den Namen deines Artikels um. **Achtung**: Der Dateiname sollte keine Umlaute, Sonderzeichen oder Leerzeichen enthalten!

### Artikel-Hauptseite

Die Artikel-Hauptseite ist die PHP-Datei, die letztendlich aufgerufen wird. Sie liegt im Unterordner `subpages` 

- Kopiere die Datei `subpages/artikelTemplate.php` und benenne sie in den Namen deines Artikels um. **Achtung**: Der Dateiname sollte keine Umlaute, Sonderzeichen oder Leerzeichen enthalten!

Die PHP-Datei hat zwei `include`-Anweisungen, um die Dateien `Content.php` und `SideContent.php` einzubinden.

- Ändere den Pfad um auf deinen Artikel-Ordner.

### Content.php

Die Datei `Content.php` im Artikel-Ordner enthält den eigentlichen Inhalt des Artikels.

- Trage Titel, Autor, Datum und den Text des Artikels ein.

- **Achtung**: Wenn du Bilder oder Videos in den Artikel einbauen willst (zum Beispiel ein Titelbild), musst du den gesamten Pfad ab `contentfiles` angeben, auch, wenn die Bilder und Videos im selben Ordner wie `Content.php` liegen. Der Pfad muss aus der Sicht der Artikel-Hauptseite angegeben werden!

  Um ein Titelbild einzufügen, ist der Pfad zum Beispiel: `contentfiles/MeinArtikel/Titelbild.jpg`

### SideContent.php

Die Datei `SideContent.php` im Artikel-Ordner enthält Links zu anderen Artikeln. Wenn du von deinem Artikel aus auf andere Artikel verlinken willst, kannst du das hier machen.

- Füge Links zu anderen Artikeln hinzu
- **Achtung**: Auch hier muss der Pfad aus Sicht der Artikel-Hauptseite angegeben werden! Verlinkt werden soll die Hauptseite des anderen Artikels (Zum Beispiel: `Namensgebung_Europas.php`).
- Wenn du keine Links hinzufügen möchtest, lösche die Links wieder.

### Artikel sichtbar machen :)

* Zuerst muss man sich bewusst sein, in welchem Themenbereich der von Ihnen erstellte Artikel reinpasst. Es gibt die Themenbereiche:

  * Allgemeine Informationen (allgemeineInformationen.html)
  * Die Wahl (dieWahl.html)
  * Die Parteien (dieParteien.html)
  * Meinungen der Bürgerinnen und Bürger (meinungenDerBuerger.html)
  * Geschichte (geschichte.html)
  * Zukunft (zukunft.html)

* Wenn man sich einen passenden Themenbereich zu seinen Artikel ausgesucht hat, geht man in die beigeführte HTML-Datei und sucht (mithilfe von Strg+F) die div "Page-Content". Duplizieren Sie diesen Code:

  ```html
  <div class="row">
          <div class="col-md-2">
            <a href="artikelTemplate.php">
              <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/300x200" alt="">
            </a>
          </div>
          <div class="col-md-7">
            <h3><a href="artikelTemplate.php">Project One</a></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
          </div>
  </div>
  <hr>
  ```

  und ändern den Link bei `<a href="artikelTemplate.php">` zu den Link zu Ihren zuvor erstellten PHP-File.
  **Bitte beachten Sie, dass die neuesten Artikeln ganz oben erscheinen sollen. Also duplizieren Sie Ihren Code immer unter:**

  ```html
  <!-- Project One -->
        [Der kopierte Code mit dem geänderten Link]
  ```



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

  * Im "Politik" - Bereich müssen noch passende Artikel zu den einzelnen Parteien geben. Das ist aber keine gewöhnliche Artikel-Seite (bitte parteiTemplate.html benutzen (hat ein anderes Layout, als die herkömmliche Artikel-Seite)). Die Verlinkung auf die parteiTemplate.html Seite ist bei SPÖ. Wenn es schon realistische Artikeln gibt, bitte diese Verlinkung bei den anderen Parteien weiterführen.

  * Bei Zukunft muss noch die Unterseite für den Button "Mehr Zitate ansehen" erstellt werden.

  * Bei Gesetze muss noch die Unterseite für den Button "Erfahre mehr über die Gesetze der EU" erstellt werden. Ebenfalls der Inhalt von den Artikeln "Artikel 11" und "Artikel 13"

  * Das Quiz benötigt mehr fragen und als Nice-To-Have eine Ausdruckfunktion, um sich sein persönliches Ergebnis ausdrucken zu können (entweder als PDF oder wirklich an Drucker senden). Die genauen Schritte um neue Fragen einzufügen sind im file quiz.html ausführlich dokumentiert. Dabei einfach ins script-tag im body schauen, dort gibt es schon eine richtige Frage und eine Beispiel-Frage. Falls dadurch nicht klar ist, was zu tun ist, kann man auch mal ins script im head schauen, dort sind die einzelnen Klassen dokumentiert. Sollte es dann immernoch Unklarheiten geben, bitte an [Leo Halbritter](lhalbritter@student.tgm.ac.at) wenden.

  * Schreibt eure Namen bei der "Über uns"-Seite hinzu

  * Unter dem Propaganda-Bild (ganz oben auf der Homepage, wird neben dem Titel "The U in EU" eingeblendet), soll ein Copyright Symbol mit dem Namen des Erstellers eingeblendet sein (zB &copy Alexander Cech)
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

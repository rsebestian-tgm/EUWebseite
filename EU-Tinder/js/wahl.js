let fpoe = 0;
let spoe = 0;
let oevp = 0;
let neos = 0;
let gruen = 0;
let pilz = 0;
let counter = 0;
let i;

let stmt = [
    ["Größere Konzerne sollen tatsächlich entsprechende Steuern zahlen.",["SPÖ",["FPÖ","NEOS"]]],
    ["Ich möchte ein Europa mit weniger zentralen Kompetenzen haben.",["FPÖ",[]]],
    ["Ich möchte ein gemeinsames starkes Europa welches gemeinsam Entscheidungen treffen soll.",["NEOS",[]]],
    ["Grenzkontrollen an Österreichs Staatsgrenzen sollten eingeführt werden.",["FPÖ",["GRÜN","NEOS"]]],
    ["Österreichs Eintritt in die NATO plus der damit verbundenen Stationierung von US Soldaten.",["FPÖ","ÖVP","SPÖ",["GRÜN"]]],
    ["Es soll Europaweit ein Verschleierungsverbot in der Öffentlichkeit eingeführt werden",["FPÖ","SPÖ","NEOS",["GRÜN"]]],
    ["Soll rauchen in Lokalen erlaubt sein?",["FPÖ","ÖVP",["GRÜN","NEOS","SPÖ"]]],
    ["Soll Europa Atomfrei sein?",["GRÜN",[]]],
    ["Grundlegende Änderungen der Bundesverfassung durch Staatsverträge, wie beispielsweise im Europarecht, bedürfen einer verbindlichen Volksabstimmung.",["FPÖ",[]]],
    ["Ablehnen einer \"künstlichen\" Gleichstellung durch Globalisierung und Masenzuwanderung",["FPÖ",[]]],
    ["Wir kämpfen gegen den 12-Stunden-Tag und die 60-Stunden-Woche.Denn diese geht gegen die Interessen der ArbeitnehmerInnen und bedient nur die Interessen der ArbeitgeberInnen.",["SPÖ","ÖVP",[]]],
    ["Wir wollen eine gesunde Gesellschaft mit einem neuen Schwerpunkt auf Solidarität unter allen Europäern aufbauen. Die Europäische Union muss stärker, einfacher und demokratischer werden. Die europäischen Institutionen sollten sich auf bestimmte wichtige Fragen konzentrieren, während andere Angelegenheiten den Mitgliedstaaten überlassen werden. Wir wollen kein zentralisiertes Europa.",["SPÖ","FPÖ",[]]],
    ["Ich bin für die Schaffung eines Raums der sozialen Sicherheit, Solidarität und Gerechtigkeit. Sowie für das beenden von Steuer-/Sozialdumping, welches durch soziale Mindeststandards, Mindesteinkommen und gemeinsame Steuersätze ersetzt werden soll.",["SPÖ","PILZ",[]]],
    ["Wir treten ein für deutlich erhöhte Anstrengungen zum Klimaschutz um die Ziele des Pariser Abkommens tatsächlich und fristgerecht zu erfüllen und für ein nachhaltiges, ökologisch verträgliches Wirtschaften in allen Bereichen.",["GRÜN","PILZ",[]]]
];

function printstmt() {
    let content = document.getElementById("stmts").innerHTML = stmt[counter][0];
    //console.log(stmt[counter][1,[1]][1][0])
}

function counterplus(selection) {
    if(counter < stmt.length-1){
    if(selection == 'yes'){
        let part = (stmt[counter][1]);
        for(i = 0; i < part.length; i++){
            switch(part[i]){
                case "FPÖ":
                    fpoe++;
                    break;
                case "SPÖ":
                    spoe++;
                    break;
                case "ÖVP":
                    oevp++;
                    break;
                case "PILZ":
                    pilz++;
                    break;
                case "NEOS":
                    neos++;
                    break;
                case "GRÜN":
                    gruen++;
                    break;
            }
        }
    }
    if(selection == 'no'){
        let part = (stmt[counter][1,[1]][1]);
        for(i = 0; i < part.length; i++){
            switch(part[i]){
                case "FPÖ":
                    fpoe++;
                    break;
                case "SPÖ":
                    spoe++;
                    break;
                case "ÖVP":
                    oevp++;
                    break;
                case "PILZ":
                    pilz++;
                    break;
                case "NEOS":
                    neos++;
                    break;
                case "GRÜN":
                    gruen++;
                    break;
            }
        }
    }
    counter++;
    printstmt();
    }else{
        confirm();
    }
}

function confirm(){
    let cont = document.getElementById("main").innerHTML = "<h2 class=\"text-center\">Wollen Sie ihr Ergebnis sehen?</h2>" +
        "<button type=\"button\" class=\"btn btn-primary btn-lg yn-button\" onclick=\"seeresult('yes')\" >Ja</button>" +
        "<button type=\"button\" class=\"btn btn-primary btn-lg yn-button\" onclick=\"counterplus('no')\" >Nein</button>"
}

function seeresult(selection){
    if(selection == 'yes'){
        let cont = document.getElementById("main").innerHTML = "<h2 class=\"text-center\">Ihr Ergebnis!</h2>" +
            "<p class='text-center question'>FPÖ: "+fpoe+"</p>" +
            "<p class='text-center question'>SPÖ: "+spoe+"</p>" +
            "<p class='text-center question'>ÖVP: "+oevp+"</p>" +
            "<p class='text-center question'>NEOS: "+neos+"</p>" +
            "<p class='text-center question'>GRÜNE: "+gruen+"</p>" +
            "<p class='text-center question'>PILZ: "+pilz+"</p>"
    }
}
function titleize(str) {
    splitParts = str.split(' ');

    for (var index = 0; index < splitParts.length; index++) {
        var part = splitParts[index];

        splitParts[index] = splitParts[index].charAt(0).toUpperCase() + splitParts[index].substring(1);
    }

    return splitParts.join(' ');
}

var nonCapitilizedString = "winter is coming. voldemort is coming.";
document.writeln("Before Titlization text: " + nonCapitilizedString);
document.writeln("<br>");
document.writeln("Titlized text: " + titleize(nonCapitilizedString));


/* could have done that by regex (in case like this that it's not heavy procssing):
'your string'.replace(/\b\w/g, function(l){ return l.toUpperCase() });   // => Your String
 */



function introduction(name) {
   return `Hi, my name is ${name}.`
}

introduction ("Kerry");

function introductionWithLanguage(name, language) {
   return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguage("Steve", "Python");


function introductionWithLanguageOptional(name = "User", language = "JavaScript") {
   return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguageOptional();

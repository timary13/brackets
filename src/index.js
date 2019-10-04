module.exports = function check(str, bracketsConfig) {
    console.log("start " + str);
    let st = "012345";
    console.log(st.slice(0, 1) + st.slice(2,3));

    function findBrackets(string, brackets) {
        if(string.length%2 != 0)
            return false;
        let openBracketIndex = string.lastIndexOf(brackets[0]);
        let closeBracketIndex = string.slice(openBracketIndex).indexOf(brackets[1]);
        closeBracketIndex += openBracketIndex;
        console.log("openBracketIndex " + openBracketIndex + " closeBracketIndex " + closeBracketIndex);

        if (openBracketIndex < 0 || closeBracketIndex < 0) {  //brackets aren't pair
            console.log("not pair");
            return false;
        }
        if((closeBracketIndex < openBracketIndex) || ((closeBracketIndex - openBracketIndex + 1)%2 != 0))
            return false;
        string = string.slice(0, openBracketIndex) + string.slice(openBracketIndex+1, closeBracketIndex) + string.slice(closeBracketIndex+1);
        console.log("slices " + string);
        if(str.indexOf(brackets[0]) !== -1 || str.indexOf(brackets[1]) !== -1)
            return true;
        findBrackets(string, brackets);
    }

    for (let i = 0; i < bracketsConfig.length; i++) {
        do {
            console.log("bracketsConfig " + bracketsConfig[i][0]);
            //delete pair brackets
            return findBrackets(str, bracketsConfig[i]);
            }
            while (str.indexOf(bracketsConfig[i][0]) !== -1 || str.indexOf(bracketsConfig[i][1]) !== -1) ;
    }
    return true;
}

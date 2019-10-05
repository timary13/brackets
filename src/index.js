module.exports = function check(str, bracketsConfig) {
    let x = true;
    let result = true;

    function findBrackets(brackets) {
        //for faster, if expression incorrect at start, because sum of brackets eval
        if(str.length%2 != 0) {
            result = false;
            return false;
        }

        let openBracketIndex;
        let closeBracketIndex;
        //close- and open- brackets are equal
        if(brackets[0] == brackets[1]) {
            openBracketIndex = str.indexOf(brackets[0]);
            closeBracketIndex = str.slice(openBracketIndex+1).indexOf(brackets[1]);
            closeBracketIndex = closeBracketIndex == 0 ? 1 : closeBracketIndex;
            console.log("openBracketIndex " + openBracketIndex + " closeBracketIndex " + closeBracketIndex);
            console.log("brackets[0] == brackets[1]");
        }
        else { //close- and open- brackets aren't equal
            openBracketIndex = str.lastIndexOf(brackets[0]);
            closeBracketIndex = str.slice(openBracketIndex).indexOf(brackets[1]);
        }
        //not pair
        if ((openBracketIndex == -1 && closeBracketIndex > 0) || (closeBracketIndex == -1 && openBracketIndex > 0)) {  //brackets aren't pair
            console.log("not pair");
            result = false;
            return false;
        }
        //no such brackets
        if(openBracketIndex == -1 && closeBracketIndex == -1) {
            result = true;
            return true;
        }
        closeBracketIndex += openBracketIndex;
        //not correct or expression into incorrect
        if((closeBracketIndex < openBracketIndex) || ((closeBracketIndex - openBracketIndex + 1)%2 != 0)) {
            result = false;
            return false;
        }
        //delete brackets
        str = str.slice(0, openBracketIndex) + str.slice(openBracketIndex+1, closeBracketIndex) + str.slice(closeBracketIndex+1);
        if(str.length == 0) {
            result = true;
            return true;
        }
        findBrackets(brackets);
        return result;
    }

    for (let i = 0; i < bracketsConfig.length; i++) {
            x =  findBrackets(bracketsConfig[i]);
            if(!x) return false;
    }
    return x;
}

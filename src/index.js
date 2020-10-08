module.exports = function check(str, config) {
    const openBrackets = config.map(item => item[0]);
    const closeBrackets = config.map(item => item[1]);
    let stack = [];
    const strToArray = str.split('');

    for (let index = 0; index < strToArray.length; index++) {
        const bracket = strToArray[index];

        if (openBrackets.includes(bracket) && closeBrackets.includes(bracket)) {
            if (stack.length && stack[stack.length - 1] === bracket) {
                stack.pop();
            } else {
                stack.push(bracket);
            }
        } else if (openBrackets.includes(bracket)) {
            stack.push(bracket);
        } else {
            const lastOpenBracket = stack.pop();
            const indexOfOpenBracket = openBrackets.indexOf(lastOpenBracket);
            if (!lastOpenBracket || bracket !== config[indexOfOpenBracket][1]) {
                return false;
            }
        }
    }
    return (stack.length ? false : true);
}

// --- Directions
// Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(string) {
	return string.split("").reverse().join("");
}

module.exports = reverse;

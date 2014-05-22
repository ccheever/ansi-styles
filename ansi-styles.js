'use strict';
var styles = module.exports;

var codes = {
	reset: [0, 0],

	bold: [1, 22],
	italic: [3, 23],
	underline: [4, 24],
	inverse: [7, 27],
	strikethrough: [9, 29],

	black: [30, 39],
	red: [31, 39],
	green: [32, 39],
	yellow: [33, 39],
	blue: [34, 39],
	magenta: [35, 39],
	cyan: [36, 39],
	white: [37, 39],
	gray: [90, 39],

	bgBlack: [40, 49],
	bgRed: [41, 49],
	bgGreen: [42, 49],
	bgYellow: [43, 49],
	bgBlue: [44, 49],
	bgMagenta: [45, 49],
	bgCyan: [46, 49],
	bgWhite: [47, 49]
};

Object.keys(codes).forEach(function (key) {
	var val = codes[key];
	var style = styles[key] = {};
	style.open = '\x1b[' + val[0] + 'm';
	style.close = '\x1b[' + val[1] + 'm';
});

// 256 Color support
// See http://bitmote.com/index.php?post/2012/11/19/Using-ANSI-Color-Codes-to-Colorize-Your-Bash-Prompt-on-Linux#256%20%288-bit%29%20Colors
styles.foreground = function (number) {
	return {
		open: '\u001b[38;5;' + number + 'm',
		close: '\u001b[' + 39 + 'm'
	};
};

styles.background = function (number) {
	return {
		open: '\u001b[48;5;' + number + 'm',
		close: '\u001b[' + 49 + 'm',
	};
};

styles.fg = styles.foreground;
styles.bg = styles.background;

styles.fgbg = function (foregroundNumber, backgroundNumber) {
	return {
		open: '\u001b[38;5;' + foregroundNumber + ';48;5;' + backgroundNumber + 'm',
		close: '\u001b[39;49m',
	};
};



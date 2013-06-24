/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var HtmlCompress = require('html-compress');


module.exports = function(content, file, conf){
	return HtmlCompress.compress(content,conf);
};

module.exports.defaultOptions = {
    'level' : 'strip',
    'leftDelimiter' : '{%',
    'rightDelimiter' : '%}'
};
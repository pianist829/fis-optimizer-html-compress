/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var HtmlCompress = require('html-compress');


module.exports = function(content, file, conf){
    conf['leftDelimiter'] = conf['leftDelimiter'] || fis.config.get('settings.smarty.left_delimiter') || '{%';
    conf['rightDelimiter'] = conf['rightDelimiter'] || fis.config.get('settings.smarty.right_delimiter') || '%}';
    return HtmlCompress.compress(content,conf);
};

module.exports.defaultOptions = {
    'level' : 'strip'
};

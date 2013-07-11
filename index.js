/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var HtmlCompress = require('html-compress');


module.exports = function(content, file, conf){
    fis.util.map(fis.config.get('setting.smarty'), function(key, value){
        if(!conf.hasOwnProperty(key)){
            conf[key] = value;
        }
    });
    return HtmlCompress.compress(content,conf);
};

module.exports.defaultOptions = {
    'level' : 'strip'
};
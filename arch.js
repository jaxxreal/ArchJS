/**
 * Created by john on 23.12.13.
 * small & short DOM builder, enjoy!
 */
var Arch = Arch || {};
 
Arch = (function () {
    var
      arch = {},
      tags = [
          'a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside',
          'audio', 'b', 'base', 'br', 'button', 'canvas', 'div', 'fieldset', 'form',
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'img', 'input', 'label', 'legend',
          'li', 'ol', 'optgroup', 'option', 'p', 'pre', 'select',
          'span', 'strong', 'table', 'tbody', 'td', 'textarea',
          'tfoot', 'th', 'thead', 'tr', 'tt', 'ul', 'i' ];
 
    var defineTag = (function (tag) {
        arch[tag] = function () {
            return createNode(tag, arguments);
        };
    });
 
    /**
     *   arguments[0] - attributes
     *   arguments[1] - innerHTML OR callback
     * */
    var createNode = function (tag, args) {
        var elem = document.createElement(tag);
 
        for (var key in args[0]) {
            if (args[0].hasOwnProperty(key)) elem.setAttribute(key, args[0][key]);
        }
 
        if (args[1]) {
            if (typeof args[1] === 'function') {
                args[1](elem);
            } else {
                elem.innerHTML = args[1];
            }
        }
 
        return elem;
    };
 
   tags.forEach(function(el) {
        defineTag(el);
    });
 
    return arch;
}());
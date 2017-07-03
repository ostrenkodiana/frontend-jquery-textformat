'use strict';
var messageField = $('form .message-field');
var messageFormatted = $('.message-formatted');

function getFormattedText(value) {
    return value.toLowerCase()
                 .trim()
                 .replace(/\s+/g,' ');

}

messageField.on('input', function() {
    var value = messageField.val();
    var textFormatted = getFormattedText(value);
    messageFormatted.text(textFormatted);
});
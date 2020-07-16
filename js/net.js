function send(obin) {
    
    if (onFile(obin)) return;
    
    
    const burl = 'server.php';
    const XHR = new XMLHttpRequest(); 
    
    XHR.open('GET', burl + '?' + serialize(obin));
    
    XHR.onloadend = function() {
	byid('msgs').innerHTML = this.responseText;
    };
    
    XHR.send();
}

function onFile(obin) {
    const url = window.location.href;
    if (url.indexOf('file:///') === 0) {
	console.log(obin);
	return true;
    }
    return false;
}

serialize = function(obj, prefix) { // see StackOverflow credits below
  var str = [],
    p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        serialize(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
}

/* https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
 * edited Mar 5 '18 at 13:08
 * user187291
 * https://stackoverflow.com/users/187291/user187291
 */

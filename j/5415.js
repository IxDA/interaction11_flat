(function() {
  
  
  // Define widget css
  if (!document.getElementById('speakerrate-css')) {
    var speakerrateCSS = document.createElement('link');
    speakerrateCSS.setAttribute('rel', 'stylesheet');
    speakerrateCSS.setAttribute('href', 'http://speakerrate.com/stylesheets/widget.css');
    speakerrateCSS.setAttribute('type', 'text/css');
    speakerrateCSS.setAttribute('media', 'screen');
    speakerrateCSS.setAttribute('id', 'speakerrate-css');
    document.getElementsByTagName('head')[0].appendChild(speakerrateCSS);
  }

  // Define content for embedded widget
  var scriptTag = document.getElementById("speakerrate-widget-5415");
  var container = document.createElement("div");
  container.setAttribute('id', 'speakerrate-embed-5415');
  container.innerHTML = "<div style='float: right; padding: 0px 0px 0px 5px'><a href='javascript:void(0)' id='speakerrate-launcher-5415' class='speakerrate-launcher'>Rate Talk</a></div>";

  // Define widget lightbox
  var lightBox = document.createElement('div');
  lightBox.setAttribute('id', 'speakerrate-lightbox-5415');
  lightBox.setAttribute('class', 'speakerrate-lightbox spkr8-widget');
  lightBox.innerHTML = '<div id="speakerrate-wrapper-5415" class="speakerrate-wrapper"><a href="javascript:void(0)" id="speakerrate-close-5415" class="speakerrate-close"></a><iframe src="" id="speakerrate-iframe-5415" class="speakerrate-iframe" allowTransparency="true" scrolling="vertical" frameborder="0"></iframe></div><div id="speakerrate-screen-5415" class="speakerrate-screen"></div>';
  lightBox.style.display = 'none';
  
  // Insert loaded content
  container = scriptTag.parentNode.insertBefore(container, scriptTag);
  lightBox = scriptTag.parentNode.insertBefore(lightBox, scriptTag);
 
  var widget = {
    modal: document.getElementById('speakerrate-lightbox-5415'),
    frame: document.getElementById('speakerrate-iframe-5415'),
    launcher: document.getElementById('speakerrate-launcher-5415'),
    container: document.getElementById('speakerrate-wrapper-5415'),
    overlay: document.getElementById('speakerrate-screen-5415')
  };

  // Widget close button click
  document.getElementById('speakerrate-close-5415').onclick = function() {
    document.getElementById('speakerrate-lightbox-5415').style.display = 'none';
    return false;
  };
  
  // Widget Launcher click
  widget.launcher.onclick = function() {
    if (widget.modal.parentNode != document.body) {
      widget.modal.parentNode.removeChild(widget.modal);
      document.body.appendChild(widget.modal);
    }
    
    
      widget.frame.setAttribute("src", "http://speakerrate.com/talks/5415/reviews/new?widget=true"+
        "&referrer="+encodeURIComponent(window.location.href));
    
    
    widget.container.style.top = (document.documentElement.scrollTop || document.body.scrollTop) + (150) + "px";
    widget.modal.style.display = "block";
    widget.modal.style.height = Math.max((window.innerHeight || self.innerHeight || document.body.clientHeight), widget.modal.parentNode.offsetHeight)+'px';
    
    return false;
  };
  
  // On click of the overlay, hide the lightbox
  widget.overlay.onclick = function(e) {
    widget.modal.style.display = 'none';
  };
})();

/*
	Developed by Robert Nyman, http://www.robertnyman.com
	Code/licensing: http://code.google.com/p/getelementsbyclassname/
*/
var getElementsByClassName = function (className, tag, elm){
	if (document.getElementsByClassName) {
		getElementsByClassName = function (className, tag, elm) {
			elm = elm || document;
			var elements = elm.getElementsByClassName(className),
				nodeName = (tag)? new RegExp("\\b" + tag + "\\b", "i") : null,
				returnElements = [],
				current;
			for(var i=0, il=elements.length; i<il; i+=1){
				current = elements[i];
				if(!nodeName || nodeName.test(current.nodeName)) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	else if (document.evaluate) {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = "",
				xhtmlNamespace = "http://www.w3.org/1999/xhtml",
				namespaceResolver = (document.documentElement.namespaceURI === xhtmlNamespace)? xhtmlNamespace : null,
				returnElements = [],
				elements,
				node;
			for(var j=0, jl=classes.length; j<jl; j+=1){
				classesToCheck += "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
			}
			try	{
				elements = document.evaluate(".//" + tag + classesToCheck, elm, namespaceResolver, 0, null);
			}
			catch (e) {
				elements = document.evaluate(".//" + tag + classesToCheck, elm, null, 0, null);
			}
			while ((node = elements.iterateNext())) {
				returnElements.push(node);
			}
			return returnElements;
		};
	}
	else {
		getElementsByClassName = function (className, tag, elm) {
			tag = tag || "*";
			elm = elm || document;
			var classes = className.split(" "),
				classesToCheck = [],
				elements = (tag === "*" && elm.all)? elm.all : elm.getElementsByTagName(tag),
				current,
				returnElements = [],
				match;
			for(var k=0, kl=classes.length; k<kl; k+=1){
				classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
			}
			for(var l=0, ll=elements.length; l<ll; l+=1){
				current = elements[l];
				match = false;
				for(var m=0, ml=classesToCheck.length; m<ml; m+=1){
					match = classesToCheck[m].test(current.className);
					if (!match) {
						break;
					}
				}
				if (match) {
					returnElements.push(current);
				}
			}
			return returnElements;
		};
	}
	return getElementsByClassName(className, tag, elm);
};
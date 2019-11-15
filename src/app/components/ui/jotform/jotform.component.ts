import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: "app-jotform",
	templateUrl: "./jotform.component.html",
	styleUrls: ["./jotform.component.scss"]
})
export class JotformComponent implements OnInit {
	@Input("id")
	public _id = Math.floor(Math.random()*3000).toString(16);
	@Input("src")
	public _src = "https://form.jotformz.com/91843343619664";
	@Input("title")
	public _title = "Contact Us";
	public _SafeResourceUrl: SafeResourceUrl;

	@Input("src")
	public set src(src:string){
		this._src = src;
		this._SafeResourceUrl = this._DOS.bypassSecurityTrustResourceUrl(this.src);
	}
	public get src(){
		return this._src;
	}

	constructor(
		private _DOS: DomSanitizer
	) { }

	ngOnInit() {
		this.handleIFrame();
	}

	/**
	 * 
    <iframe
      id="JotFormIFrame-91843343619664"
      title="Contact Us"
      onload="window.parent.scrollTo(0,0)"
      allowtransparency="true"
      allowfullscreen="true"
      allow="geolocation; microphone; camera"
      src="https://form.jotformz.com/91843343619664"
      frameborder="0"
      style="width: 1px;
      min-width: 100%;
      height:539px;
      border:none;"
      scrolling="no"
    >
    </iframe>
    <script type="text/javascript">
      var ifr = document.getElementById("JotFormIFrame-91843343619664");
      if(window.location.href && window.location.href.indexOf("?") > -1) {
        var get = window.location.href.substr(window.location.href.indexOf("?") + 1);
        if(ifr && get.length > 0) {
          var src = ifr.src;
          src = src.indexOf("?") > -1 ? src + "&" + get : src  + "?" + get;
          ifr.src = src;
        }
      }
      window.handleIFrameMessage = function(e) {
        if (typeof e.data === 'object') { return; }
        var args = e.data.split(":");
        if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
        if (!iframe) { return; }
        switch (args[0]) {
          case "scrollIntoView":
            iframe.scrollIntoView();
            break;
          case "setHeight":
            iframe.style.height = args[1] + "px";
            break;
          case "collapseErrorPage":
            if (iframe.clientHeight > window.innerHeight) {
              iframe.style.height = window.innerHeight + "px";
            }
            break;
          case "reloadPage":
            window.location.reload();
            break;
          case "loadScript":
            var src = args[1];
            if (args.length > 3) {
                src = args[1] + ':' + args[2];
            }
            var script = document.createElement('script');
            script.src = src;
            script.type = 'text/javascript';
            document.body.appendChild(script);
            break;
          case "exitFullscreen":
            if      (window.document.exitFullscreen)        window.document.exitFullscreen();
            else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
            else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
            else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
            else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
            break;
        }
        var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
        if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
          var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
          iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
        }
      };
      if (window.addEventListener) {
        window.addEventListener("message", handleIFrameMessage, false);
      } else if (window.attachEvent) {
        window.attachEvent("onmessage", handleIFrameMessage);
      }
      </script>
	 */

	handleIFrame() {
		var ifr = document.getElementById(this._id);
		if (window.location.href && window.location.href.indexOf("?") > -1) {
			var get = window.location.href.substr(
				window.location.href.indexOf("?") + 1
			);
			if (ifr && get.length > 0) {
				var src = ifr['src'];
				src = src.indexOf("?") > -1 ? src + "&" + get : src + "?" + get;
				ifr['src'] = src;
			}
		}
		window['handleIFrameMessage'] = function (e) {
			let iframe:HTMLElement;
			if (typeof e.data === "object") {
				return;
			}
			var args = e.data.split(":");
			if (args.length > 2) {
				let iframe = document.getElementById(
					"JotFormIFrame-" + args[args.length - 1]
				);
			} else {
				iframe = document.getElementById("JotFormIFrame");
			}
			if (!iframe) {
				return;
			}
			switch (args[0]) {
				case "scrollIntoView":
					iframe.scrollIntoView();
					break;
				case "setHeight":
					iframe.style.height = args[1] + "px";
					break;
				case "collapseErrorPage":
					if (iframe.clientHeight > window.innerHeight) {
						iframe.style.height = window.innerHeight + "px";
					}
					break;
				case "reloadPage":
					window.location.reload();
					break;
				case "loadScript":
					var src = args[1];
					if (args.length > 3) {
						src = args[1] + ":" + args[2];
					}
					var script = document.createElement("script");
					script.src = src;
					script.type = "text/javascript";
					document.body.appendChild(script);
					break;
				case "exitFullscreen":
					if (window.document.exitFullscreen) window.document.exitFullscreen();
					else if (window.document['mozCancelFullScreen'])
						window.document['mozCancelFullScreen']();
					else if (window.document['mozCancelFullscreen'])
						window.document['mozCancelFullScreen']();
					else if (window.document['webkitExitFullscreen'])
						window.document['webkitExitFullscreen']();
					else if (window.document['msExitFullscreen'])
						window.document['msExitFullscreen']();
					break;
			}
			var isJotForm = e.origin.indexOf("jotform") > -1 ? true : false;
			if (
				isJotForm &&
				"contentWindow" in iframe &&
				"postMessage" in iframe['contentWindow']
			) {
				var urls = {
					docurl: encodeURIComponent(document.URL),
					referrer: encodeURIComponent(document.referrer)
				};
				(<any>iframe['contentWindow']).postMessage(
					JSON.stringify({ type: "urls", value: urls }),
					"*"
				);
			}
		};
		if (window.addEventListener) {
			window.addEventListener("message", window['handleIFrameMessage'], false);
		} else if (window['attachEvent']) {
			window['attachEvent']("onmessage", window['handleIFrameMessage']);
		}
	}
}

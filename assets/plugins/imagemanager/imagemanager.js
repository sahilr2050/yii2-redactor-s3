!function(e){e.add("plugin","imagemanager",{translations:{en:{choose:"Choose"}},init:function(t){this.app=t,this.lang=t.lang,this.opts=t.opts},onmodal:{image:{open:function(t,a){this.opts.imageManagerJson&&this._load(t)}}},_load:function(t){var a=t.getBody();this.$box=e.dom("<div>"),this.$box.attr("data-title",this.lang.get("choose")),this.$box.addClass("redactor-modal-tab"),this.$box.hide(),this.$box.css({overflow:"auto",height:"300px","line-height":1}),a.append(this.$box),e.ajax.get({url:this.opts.imageManagerJson,success:this._parse.bind(this)})},_parse:function(t){for(var a in t){var i=t[a];if("object"==typeof i){var o=e.dom("<img>"),s=i.thumb?i.thumb:i.url;o.attr("src",s),o.attr("data-params",encodeURI(JSON.stringify(i))),o.css({width:"96px",height:"72px",margin:"0 4px 2px 0",cursor:"pointer"}),o.on("click",this._insert.bind(this)),this.$box.append(o)}}},_insert:function(t){t.preventDefault();var a=e.dom(t.target),i=JSON.parse(decodeURI(a.attr("data-params")));this.app.api("module.image.insert",{image:i})}})}(Redactor);
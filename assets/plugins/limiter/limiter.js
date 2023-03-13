Redactor.add("plugin","limiter",{init:function(t){this.app=t,this.utils=t.utils,this.opts=t.opts,this.editor=t.editor,this.keycodes=t.keycodes},onpasting:function(t){if(this.opts.limiter){t=this.utils.removeInvisibleChars(t);var i=this._getText(),e=t.length+i.length;this.opts.input=!(e>=this.opts.limiter)}},start:function(){this.opts.limiter&&(this._count(),this.editor.getElement().on("keydown.redactor-plugin-limiter",this._limit.bind(this)))},stop:function(){this.editor.getElement().off(".redactor-plugin-limiter"),this.opts.input=!0},_limit:function(t){var i=t.which,e=t.ctrlKey||t.metaKey;i===this.keycodes.BACKSPACE||i===this.keycodes.DELETE||i===this.keycodes.ESC||i===this.keycodes.SHIFT||e&&65===i||e&&88===i||e&&82===i||e&&116===i||-1!==[37,38,39,40].indexOf(i)||this._count(t)},_count:function(t){if(this._getText().length>=this.opts.limiter)return t&&t.preventDefault(),this.opts.input=!1;this.opts.input=!0},_getText:function(){var t=this.editor.getElement().text();return this.utils.removeInvisibleChars(t)}});
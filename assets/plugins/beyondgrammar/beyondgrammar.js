!function(a){a.add("plugin","beyondgrammar",{init:function(t){this.app=t,this.opts=t.opts,this.editor=t.editor,this.cleaner=t.cleaner},onoriginalblur:function(t){if(a.dom(t.target).hasClass("pwa-suggest")){t.preventDefault(),this.app.stopBlur=!0;var e=this.app.offset.get();setTimeout(function(){this.app.offset.set(e)}.bind(this),10)}else this.app.stopBlur=!1},onsource:{closed:function(){this.editor.focus(),this._activate()}},start:function(){this.GrammarChecker=this._getGrammarChecker(),this.opts.beyondgrammar&&this.GrammarChecker&&(this.cleaner.addUnconvertRules("spellcheck",function(t){t.find(".pwa-mark").unwrap()}),this._activate())},_activate:function(){var t=this.editor.getElement();t.attr("spellcheck",!1);var e=new this.GrammarChecker(t.get(),this.opts.beyondgrammar.service,this.opts.beyondgrammar.grammar);e.init().then(function(){e.activate()})},_getGrammarChecker:function(){return void 0!==window.BeyondGrammar&&window.BeyondGrammar.GrammarChecker}})}(Redactor);
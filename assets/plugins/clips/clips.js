!function(a){a.add("plugin","clips",{translations:{en:{clips:"Clips","clips-select":"Please, select a clip"}},modals:{clips:""},init:function(i){this.app=i,this.opts=i.opts,this.lang=i.lang,this.toolbar=i.toolbar,this.insertion=i.insertion},onmodal:{clips:{open:function(i){this._build(i)}}},start:function(){if(this.opts.clips){var i={title:this.lang.get("clips"),api:"plugin.clips.open"};this.toolbar.addButton("clips",i).setIcon('<i class="re-icon-clips"></i>')}},open:function(i){var t={title:this.lang.get("clips"),width:"600px",name:"clips"};this.app.api("module.modal.build",t)},_build:function(i){var t=i.getBody(),s=this._buildLabel(),l=this._buildList();this._buildItems(l),t.html(""),t.append(s),t.append(l)},_buildLabel:function(){var i=a.dom("<label>");return i.html(this.lang.parse("## clips-select ##:")),i},_buildList:function(){var i=a.dom("<ul>");return i.addClass("redactor-clips-list"),i},_buildItems:function(i){for(var t=this.opts.clips,s=0;s<t.length;s++){var l=a.dom("<li>"),n=a.dom("<span>");n.attr("data-index",s),n.html(t[s][0]),n.on("click",this._insert.bind(this)),l.append(n),i.append(l)}},_insert:function(i){var t=a.dom(i.target).attr("data-index"),s=this.opts.clips[t][1];this.app.api("module.modal.close"),this.insertion.insertHtml(s)}})}(Redactor);
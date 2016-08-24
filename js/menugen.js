jQuery.fn.extend({
  generate: function(_o) {
    this.html("")
    var rootid = this.attr('id');
    var _loop = function(_o, parentid){
      /* object builder */
      console.log("parentid: ", parentid);
      //var idmenuc = "#menu-container"; //
      var thismenuid = _o["options"]["id"]; // template menu

      var menulist = $("<ul class=\"nav cb-nav cb-nav-areas\">"); // ul list
      var back = $("<li class=\"cb-nav-arrow\" id=\"back_"+thismenuid+"\" onclick=\"moveback('"+thismenuid+"', '"+parentid+"', '"+rootid+"')\" ><a class=\"cb-nav-area-link cb-nav-conti back-button\" href=\"#\"><span class='arrow-left'></span> Indietro</a></li>"); // backbutton
      var title = $("<li class=\"cb-nav-arrow "+(_o["options"]["li"]?_o["options"]["li"]:"")+" \"><a class=\"cb-nav-area-link cb-nav-conti\" href=\"#\">"+_o["options"]["title"]+"</a></li>");

  		if(parentid!= rootid)
  			menulist.append(back);
  	  menulist.append(title);
      /* header done */
      var _k = Object.keys(_o);
      for(var i = 0; i < _k.length; i++){
        var ce_ = _k[i];
        if(ce_ == "options"){
          //if(ce_ == thismenuid ||ce_ == "title" ||ce_ == "id" ||ce_ == "visible")
          continue;
        }
        if (ce_ == "target"){
          // process target
        }else{
          var cobject = _o[_k[i]];
          var _idfco, _titlefco, _liclass = "";
          if(typeof cobject == "object" && cobject["options"]){
            _idfco = cobject["options"] ? cobject["options"]["id"] : undefined;
            _titlefco = cobject["options"] ? cobject["options"]["title"] : undefined;
            _liclass = cobject["options"] ? cobject["options"]["li"] : "";
            console.log("cobject ",cobject["options"], _idfco, _titlefco)
          }
          var element_name = _titlefco || _k[i];
          var element;
          if (typeof cobject == "object" ){
		  element = $("<li class=\"cb-nav-arrow "+(typeof _liclass == "string"? _liclass : "")+"\" ></li>").append("<a class=\"cb-nav-area-link cb-nav-conti\" href=\"#\">"+element_name+"<span class='arrow-right'></span></a>");
            element.attr("onclick","moveme('"+thismenuid+"', '"+_idfco+"', '"+rootid+"')")
            _loop(cobject, thismenuid)
          }
          else{
            // process element as target
            if(typeof cobject == "function"){
				element = $("<li class=\"cb-nav-arrow "+(typeof _liclass == "string"? _liclass : "")+"\" ></li>").append("<a class=\"cb-nav-area-link cb-nav-conti\" href=\"#\">"+element_name+"<span class=''></span></a>");
              /* do somethinf */
              element.attr("onclick","("+cobject.toString()+")()")
            }
          }
          menulist.append(element);
        }
      }

      var menu = $("<div class=\"cb-menu-level active\" id=\""+thismenuid+"\"></div>")
              .append("<div class=\"frame\"></div>")
              .append("<div class=\"wrapper\"></div>")
              .append("<div class=\"main-nav\"></div>")
              .append(menulist);

      // **********************************************************  //
      if(_o["options"]["visible"])
        menu.css("display", "visible");
      else
        menu.addClass("ahead");
      // **********************************************************  //

      console.log(menu.prop('outerHTML'));
      console.log(parentid)
      $("#"+rootid).append(menu.prop('outerHTML'));
    }
    _loop(_o, rootid);
  }
});
function moveme(x, y, rootid){
    if(y == rootid) return;
    console.log(x, " -- ",y)
    $("#"+x).addClass('behind');
    $("#"+y).addClass('active');
	  $("#"+x).removeClass('active');
    $("#"+y).removeClass('ahead');
}

function moveback(x, y, rootid){
    if(y == rootid) return;
    console.log(x, " -- ",y)
    $("#"+x).addClass('ahead');
    $("#"+y).addClass('active');
	  $("#"+x).removeClass('active');
    $("#"+y).removeClass('ahead');
}

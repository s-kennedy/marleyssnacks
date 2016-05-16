this["Marley"] = this["Marley"] || {};
this["Marley"]["Templates"] = this["Marley"]["Templates"] || {};

this["Marley"]["Templates"]["bigFooter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li><a data-scroll href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"footer-copy animated wow bounceInDown\" data-wow-duration=\"1000ms\" data-wow-delay=\"800ms\">\n    <div class=\"container\">\n      <div class=\"footer-copy-grids\">\n        <div class=\"col-md-3 footer-copy-grid\">\n          <h3><span>How</span> they're made</h3>\n          <img src=\"../images/6.jpg\" alt=\" \" class=\"img-responsive\" />\n          <p>Read more about the ingredients and processes we use to make Marley's Snacks.</p>\n        </div>\n        <div class=\"col-md-6 footer-copy-grid\">\n          <h3>Send a <span>message</span></h3>\n          <form action=\"https://formspree.io/sharonkennedy100@gmail.com\" method=\"POST\">\n            <input type=\"text\" name=\"name\" value=\"Name\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Name';}\" required=\"\">\n            <input type=\"email\" name=\"_replyto\" value=\"Email\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Email';}\" required=\"\">\n            <textarea type=\"text\" name=\"message\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Message...';}\" required=\"\">Message...</textarea>\n            <input type=\"text\" name=\"_gotcha\" style=\"display:none\" />\n            <input type=\"submit\" value=\"Submit\" >\n          </form>\n        </div>\n\n        <div class=\"col-md-3 footer-copy-grid\">\n          <h3>Navigation</h3>\n          <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.navigation : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n        <div class=\"clearfix\"> </div>\n      </div>\n    </div>\n  </div>";
},"useData":true});

this["Marley"]["Templates"]["contactSection"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"footer-top animated wow zoomInDown\" data-wow-duration=\"1000ms\" data-wow-delay=\"800ms\">\n  <div class=\"container\">\n    <h3>For more information feel free to <span>call or email</span></h3>\n    <p>Ask for <span>Robin :)</span></p>\n    <div class=\"more\">\n      <a href=\"contact.html\">Contact Us</a>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Marley"]["Templates"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"banner-figures\">\n    <div class=\"banner\">\n      <div class=\"container banner-drop\">\n        <div class=\"header\"> \n            <!-- append left-header template -->\n            <!-- append right-header template -->\n            <div class=\"clearfix\"> </div>\n        </div>\n        <div class=\"logo animated wow bounceInDown\" data-wow-duration=\"1000ms\" data-wow-delay=\"500ms\">\n          <h1><a href=\"#\"><span>High quality raw dog treats</span>Marley's Snacks</a></h1>\n        </div>\n        <div class=\"social-icons animated wow bounceInDown\" data-wow-duration=\"1000ms\" data-wow-delay=\"800ms\">\n          <ul>\n            <li><a href=\"https://www.facebook.com/groups/717613388317899/\" class=\"facebook\"></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>";
},"useData":true});

this["Marley"]["Templates"]["headerLeft"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"header-left\">\n  <ul>\n    <li class=\"animated wow fadeInLeftBig\" data-wow-duration=\"1200ms\" data-wow-delay=\"800ms\"><span class=\"glyphicon glyphicon-map-marker\" aria-hidden=\"true\"></span> "
    + alias4(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper)))
    + " </li>\n    <li class=\"animated wow fadeInLeftBig\" data-wow-duration=\"1200ms\" data-wow-delay=\"900ms\"><span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span> "
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</li>\n    <li class=\"animated wow fadeInLeftBig\" data-wow-duration=\"1200ms\" data-wow-delay=\"1000ms\"><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span> <a href=\"mailto:info@example.com\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a></li>\n  </ul>\n</div>";
},"useData":true});

this["Marley"]["Templates"]["headerRight"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li>\n      <a data-scroll href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\"><i class=\"glyphicon "
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\" aria-hidden=\"true\"></i><span>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</span></a>\n    </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"header-right\">\n  <nav>\n    <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.navigation : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n  </nav>\n  <div class=\"menu-icon animated wow zoomIn\" data-wow-duration=\"1000ms\" data-wow-delay=\"800ms\"><span></span></div>\n</div>\n<script>\n  (function($){\n    $(\".menu-icon\").on(\"click\", function(){\n      $(this).toggleClass(\"open\");\n      $(\".container\").toggleClass(\"nav-open\");\n      $(\"nav ul li\").toggleClass(\"animate\");\n    });\n    \n  })(jQuery);\n</script>";
},"useData":true});

this["Marley"]["Templates"]["littleFooter"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"footer animated wow bounce\" data-wow-duration=\"1000ms\" data-wow-delay=\"800ms\">\n  <div class=\"container\">\n    <p>© 2016 Marley's Snacks. All rights reserved | Design by <a href=\"http://w3layouts.com\">W3layouts</a></p>\n  </div>\n</div>";
},"useData":true});

this["Marley"]["Templates"]["productDetails"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"col-md-4 team-grid animated wow bounceInLeft\" data-wow-duration=\"1000ms\" data-wow-delay=\"500ms\">\n    <div class=\"team-grid1 hover14 column\">\n      <div>\n        <figure><img src=\"../images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\" \" class=\"img-responsive\" /></figure>\n      </div>\n    </div>\n    <div class=\"team-grid1-sub\">\n      <h4>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n      <p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n      <div class=\"social-icons1 prices\">\n        <ul>\n          <li>"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["Marley"]["Templates"]["products"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <li>\n    <div class=\"item "
    + alias4(((helper = (helper = helpers.itemsub || (depth0 != null ? depth0.itemsub : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemsub","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"item1\">\n        <i class=\"glyphicon glyphicon-cutlery\" aria-hidden=\"true\"></i>\n        <h3>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3>\n      </div>\n      <div class=\"p-mask\">\n        <p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n        <div class=\"price\">\n          <ul>\n            <li><p>"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</p></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul id=\"flexiselDemo1\"> \n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <script type=\"text/javascript\">\n    $(window).load(function() {\n    $(\"#flexiselDemo1\").flexisel({\n      visibleItems: 5,\n      animationSpeed: 1000,\n      autoPlay: true,\n      autoPlaySpeed: 3000,        \n      pauseOnHover: true,\n      enableResponsiveBreakpoints: true,\n      responsiveBreakpoints: { \n        portrait: { \n          changePoint:480,\n          visibleItems: 1\n        }, \n        landscape: { \n          changePoint:640,\n          visibleItems: 2\n        },\n        tablet: { \n          changePoint:768,\n          visibleItems: 3\n        }\n      }\n    });\n    \n   });\n  </script>\n</ul>";
},"useData":true});
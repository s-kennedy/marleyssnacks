this["Marley"] = this["Marley"] || {};
this["Marley"]["Templates"] = this["Marley"]["Templates"] || {};

this["Marley"]["Templates"]["src/templates/header.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"header\">\n  <div class=\"header-left\">\n    <ul>\n      <li class=\"animated wow fadeInLeftBig\" data-wow-duration=\"1200ms\" data-wow-delay=\"800ms\"><span class=\"glyphicon glyphicon-map-marker\" aria-hidden=\"true\"></span> "
    + alias4(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data}) : helper)))
    + " </li>\n      <li class=\"animated wow fadeInLeftBig\" data-wow-duration=\"1200ms\" data-wow-delay=\"900ms\"><span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span> "
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</li>\n      <li class=\"animated wow fadeInLeftBig\" data-wow-duration=\"1200ms\" data-wow-delay=\"1000ms\"><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span> <a href=\"mailto:info@example.com\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</a></li>\n    </ul>\n  </div>\n  <div class=\"header-right\">\n    <nav>\n      <ul>\n      <li class=\"active\">\n        <a href=\"index.html\"><i class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></i><span>Home</span></a>\n      </li>\n      <li>\n        <a href=\"about.html\"><i class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></i><span>Products</span></a>\n      </li>\n      <li>\n        <a href=\"short-codes.html\"><i class=\"glyphicon glyphicon-text-size\" aria-hidden=\"true\"></i><span>Where to buy</span></a>\n      </li>\n      <li>\n        <a href=\"blog.html\"><i class=\"glyphicon glyphicon-picture\" aria-hidden=\"true\"></i><span>Blog</span></a>\n      </li>\n      <li>\n        <a href=\"contact.html\"><i class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></i><span>Contact Us</span></a>\n      </li>\n      </ul>\n    </nav>\n    <div class=\"menu-icon animated wow zoomIn\" data-wow-duration=\"1000ms\" data-wow-delay=\"800ms\"><span></span></div>\n  </div>\n  <div class=\"clearfix\"> </div>\n</div>\n";
},"useData":true});

this["Marley"]["Templates"]["src/templates/index.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);;this["Marley"] = this["Marley"] || {};
this["Marley"]["Templates"] = this["Marley"]["Templates"] || {};

this["Marley"]["Templates"]["bigFooter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <li><a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"footer-copy animated wow bounceInDown\" data-wow-duration=\"1000ms\" data-wow-delay=\"800ms\">\n    <div class=\"container\">\n      <div class=\"footer-copy-grids\">\n        <div class=\"col-md-3 footer-copy-grid\">\n          <a href=\"/products\"><h3><span>Product </span>list </h3></a>\n          <img src=\"images/6.jpg\" alt=\" \" class=\"img-responsive\" />\n          <p> Check out our full selection of snacks.</p>\n        </div>\n        <div class=\"col-md-6 footer-copy-grid\">\n          <h3>Send a <span>message</span></h3>\n          <form action=\"https://formspree.io/marleyssnacks@gmail.com\" method=\"POST\">\n            <input type=\"text\" name=\"name\" value=\"Name\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Name';}\" required=\"\">\n            <input type=\"email\" name=\"_replyto\" value=\"Email\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Email';}\" required=\"\">\n            <textarea type=\"text\" name=\"message\" onfocus=\"this.value = '';\" onblur=\"if (this.value == '') {this.value = 'Message...';}\" required=\"\">Message...</textarea>\n            <input type=\"text\" name=\"_gotcha\" style=\"display:none\" />\n            <input type=\"hidden\" name=\"_next\" value=\"/\" />\n            <input type=\"submit\" value=\"Submit\" >\n          </form>\n        </div>\n\n        <div class=\"col-md-3 footer-copy-grid\">\n          <h3>Navigation</h3>\n          <ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.navigation : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n        <div class=\"clearfix\"> </div>\n      </div>\n    </div>\n  </div>";
},"useData":true});

this["Marley"]["Templates"]["contactSection"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"footer-top animated wow zoomInDown\" data-wow-duration=\"1000ms\" data-wow-delay=\"800ms\">\n  <div class=\"container\">\n    <h3>For more information feel free to <span>call or email</span></h3>\n    <p>Ask for <span>Robin :)</span></p>\n    <div class=\"more\">\n      <a href=\"/contact\">Contact Us</a>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Marley"]["Templates"]["head"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<head>\n<title>Marley's Snacks | High quality raw dog treats</title>\n<!-- for-mobile-apps -->\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta name=\"keywords\" content=\"Marley's Snacks, raw natural dog treats made in Toronto, high quality dog snacks\" />\n<script type=\"application/x-javascript\"> addEventListener(\"load\", function() { setTimeout(hideURLbar, 0); }, false);\n    function hideURLbar(){ window.scrollTo(0,1); } </script>\n<!-- //for-mobile-apps -->\n<link href=\"css/_bower.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />\n<link href=\"css/style.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />\n<script type=\"text/javascript\" src=\"js/_bower.js\"></script>\n<script type=\"text/javascript\" src=\"js/move-top.js\"></script>\n<script type=\"text/javascript\" src=\"js/hbs.js\"></script>\n<script type=\"text/javascript\" src=\"js/templates.js\"></script>\n<script type=\"text/javascript\" src=\"js/maps.js\"></script>\n<!-- animation-effect -->\n<script>\n new WOW().init();\n</script>\n<!-- //animation-effect -->\n<link href='https://fonts.googleapis.com/css?family=IM+Fell+Double+Pica:400,400italic' rel='stylesheet' type='text/css'>\n<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,300italic,400italic' rel='stylesheet' type='text/css'>\n<!-- start-smooth-scrolling -->\n<script type=\"text/javascript\">\n  jQuery(document).ready(function($) {\n    $(\".scroll\").click(function(event){   \n      event.preventDefault();\n      $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);\n    });\n  });\n</script>\n<!-- start-smooth-scrolling -->\n</head>";
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

  return "    <li>\n      <a href=\""
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
    return "<div class=\"footer\" data-wow-duration=\"1000ms\" data-wow-delay=\"800ms\">\n  <div class=\"container\">\n    <p>© 2016 Marley's Snacks. All rights reserved | Design by <a href=\"http://w3layouts.com\">W3layouts</a> | Developed by <a href=\"https://ca.linkedin.com/in/kennedysharon\">Sharon Kennedy</a></p>\n  </div>\n</div>";
},"useData":true});

this["Marley"]["Templates"]["productDetails"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <div class=\"col-md-4 team-grid animated wow bounceInLeft\" data-wow-duration=\"1000ms\" data-wow-delay=\"500ms\">\n    <div class=\"team-grid1 hover14 column\">\n      <div>\n        <figure><img src=\"images/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\" \" class=\"img-responsive\" /></figure>\n      </div>\n    </div>\n    <div class=\"team-grid1-sub\">\n      <h4>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n      <p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n      <div class=\"prices\">\n        <ul class=\"list-unstyled\">\n          <li>"
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
},"useData":true});;$(function() {

  var contactInfo = { address: "1014 Dundas Street West, Toronto",
                  phone: "(647) 858-1125",
                  email: "marleyssnacks@gmail.com"
                }

  var navigation = { navigation: [
      { link: '/', icon: 'glyphicon-home', text: 'Home' },
      { link: '/products', icon: 'glyphicon-list', text: 'Products' },
      { link: '/contact', icon: 'glyphicon-envelope', text: 'Contact' }
    ]
  }

  var productList = [
      { 
        itemsub: "item-sub",
        title: 'Chicken feet',
        image: 'chicken_feet.jpg',
        description: 'The hollow bones are great for cleaning your dog\'s teeth.',
        price: '$30 for 1 kilo'
      },
      { 
        itemsub: "item-sub1",
        image: 'beef_liver.jpg',
        title: 'Beef liver',
        description: 'Nutrient rich and easy to carry.',
        price: '$40 for 1 kilo'
      },
      { 
        itemsub: "item-sub2",
        title: 'Salmon tails',
        image: 'salmon_tails.jpg',
        description: 'Delicious, crunchy and full of healthy fats.',
        price: '$40 for 1 kilo'
      },
      { 
        itemsub: "item-sub3",
        title: 'Chicken trachea',
        image: 'chicken_trachea.jpg',
        description: 'A healthy and nutritious snack.',
        price: '$27 for 1 kilo'
      },
      { 
        itemsub: "item-sub4",
        title: 'Beef lung',
        image: 'beef_lung.jpg',
        description: 'A light and delicious snack.',
        price: '$30 for 1 kilo'
      },
      {
        itemsub: "item-sub5",
        title: 'Sweet potato',
        image: 'sweet_potato.jpg',
        description: 'Specially made for sweet doggies.',
        price: '$30 for 1 kilo'
      },
      { 
        itemsub: "item-sub6",
        image: 'duck_feet.jpg',
        title: 'Duck feet',
        description: 'The hollow bones are great for cleaning your dog\'s teeth.',
        price: '$35 for 1 kilo'
      },
    ]

  var allProducts = { products: productList.slice() }
  var highlightedProducts = { products: productList.slice(0,5) }

  $('div.header').append(Marley.Templates.headerLeft(contactInfo));
  $('div.header').append(Marley.Templates.headerRight(navigation));
  $('div.product-list').append(Marley.Templates.products(highlightedProducts));
  $('div.product-details').append(Marley.Templates.productDetails(allProducts))
  $('div.contact-section').append(Marley.Templates.contactSection({}))
  $('div.big-footer').append(Marley.Templates.bigFooter(navigation))
  $('div.little-footer').append(Marley.Templates.littleFooter({}))
});function loadMap() {
  var locations = [
    {
      title: "Bloorcourt Vet Clinic",
      address: "1079 Bloor Street West, Toronto, ON",
      latlng: new google.maps.LatLng(43.660148,-79.4343243)
    },
    {
      title: "Helmutt's Pet Supply",
      address: "865 Queen Street West, Toronto, ON",
      latlng: new google.maps.LatLng(43.645715, -79.410608)
    },
    {
      title: "The Dog Bowl",
      address: "984 Dundas Street West, Toronto, ON",
      latlng: new google.maps.LatLng(43.650540, -79.415198)
    },
    {
      title: "Pet Uno",
      address: "675 College Street, Toronto, ON",
      latlng: new google.maps.LatLng(43.654953, -79.417198)
    },
    {
      title: "Pet Valu",
      address: "75 Ellesmere Road, Toronto, ON",
      latlng: new google.maps.LatLng(43.758171, -79.312282)
    },
    {
      title: "Pet Valu",
      address: "1527 Victoria Park Ave, Toronto, ON",
      latlng: new google.maps.LatLng(43.726395, -79.302074)
    },
    {
      title: "Pet Valu",
      address: "339 College Street, Toronto, ON",
      latlng: new google.maps.LatLng(43.657171, -79.402658)
    },
    {
      title: "Petview",
      address: "322 Queen St W, Toronto, ON",
      latlng: new google.maps.LatLng(43.649405, -79.394373)
    },
    {
      title: "Dogee Spa",
      address: "179 Avenue Rd, Toronto, ON",
      latlng: new google.maps.LatLng(43.675073, -79.396542)
    }
  ]

  var myLatLng = {lat: 43.647743, lng: -79.414153};
  var bounds = new google.maps.LatLngBounds();

  var map = new google.maps.Map(document.getElementById('locations-map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  var infowindow = new google.maps.InfoWindow()

  var placeMarker = function(location) {
    var marker = new google.maps.Marker({
      map: map,
      position: location.latlng,
      title: location.title
    });

    var generateContent = function() {
      var p1 = document.createElement("strong")
      var p2 = document.createElement("p")
      var div = document.createElement("div")
      var title = document.createTextNode(location.title)
      var address = document.createTextNode(location.address)
      p1.appendChild(title)
      p1.className = "text-uppercase"
      p2.appendChild(address)
      div.appendChild(p1)
      div.appendChild(p2)
      return div
    }

    marker.addListener('click', function() {
      infowindow.setContent(generateContent())
      infowindow.open(map, marker);
    });
    bounds.extend(location.latlng)
  }

  for (var i = 0; i < locations.length; i++ ) {
    placeMarker(locations[i])
  }

  map.fitBounds(bounds);

}

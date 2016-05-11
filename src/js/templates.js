$(function() {
  var source = $('#header-left-template').html()
  var template = Handlebars.compile(source)
  var context = { address: "1014 Dundas Street West, Toronto",
                  phone: "(647) 977-9394",
                  email: "marleyssnacks@gmail.com"
                }
  $('div.header').append(template(context));
})
$(function() {

  var contactInfo = { address: "1014 Dundas Street West, Toronto",
                  phone: "(647) 977-9394",
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
        image: '1.jpg',
        title: 'Duck feet',
        description: 'The hollow bones are great for cleaning your dog\'s teeth.',
        price: '$35 for 1 kilo'
      },
      { 
        itemsub: "item-sub1",
        title: 'Chicken feet',
        image: 'chicken_feet.jpg',
        description: 'The hollow bones are great for cleaning your dog\'s teeth.',
        price: '$30 for 1 kilo'
      },
      { 
        itemsub: "item-sub2",
        image: 'beef_liver.jpg',
        title: 'Beef liver',
        description: 'Nutrient rich and breaks in to smaller pieces for easy carrying.',
        price: '$40 for 1 kilo'
      },
      { 
        itemsub: "item-sub3",
        title: 'Salmon tails',
        image: 'beef_liver.jpg',
        description: 'Delicious, crunchy and full of healthy fats.',
        price: '$40 for 1 kilo'
      },
      { 
        itemsub: "item-sub4",
        title: 'Sweet potato slices',
        image: 'sweet_potato.jpg',
        description: 'Specially made for sweet doggies.',
        price: '$27 for 1 kilo'
      },
      { 
        itemsub: "item-sub5",
        title: 'Cow lung',
        image: 'sweet_potato.jpg',
        description: 'A light and delicious snack.',
        price: '$30 for 1 kilo'
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
})
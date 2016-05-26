$(function() {

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
})
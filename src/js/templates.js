$(function() {

  var headerLeftContext = { address: "1014 Dundas Street West, Toronto",
                  phone: "(647) 977-9394",
                  email: "marleyssnacks@gmail.com"
                }

  var navigationContext = { navigation: [
      { link: '/', icon: 'glyphicon-home', text: 'Home' },
      { link: '/products', icon: 'glyphicon-list', text: 'Products' },
      { link: '/contact', icon: 'glyphicon-envelope', text: 'Contact' }
    ]
  }

  var productsContext = { products: [
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
    ]
  }

  $('div.header').append(Marley.Templates.headerLeft(headerLeftContext));
  $('div.header').append(Marley.Templates.headerRight(navigationContext));
  $('div.product-list').append(Marley.Templates.products(productsContext));
  $('div.product-details').append(Marley.Templates.productDetails(productsContext))
  $('div.contact-section').append(Marley.Templates.contactSection({}))
  $('div.big-footer').append(Marley.Templates.bigFooter(navigationContext))
  $('div.little-footer').append(Marley.Templates.littleFooter({}))
})
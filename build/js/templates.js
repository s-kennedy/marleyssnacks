$(function() {

  var headerLeftContext = { address: "1014 Dundas Street West, Toronto",
                  phone: "(647) 977-9394",
                  email: "marleyssnacks@gmail.com"
                }

  var headerRightContext = { menuItems: [
      { link: 'index.html', icon: 'glyphicon-home', text: 'Home' },
      { link: 'index.html#products', icon: 'glyphicon-list', text: 'Products' },
      { link: 'index.html#locations-map', icon: 'glyphicon-map-marker', text: 'Where to buy' }, 
      { link: 'contact.html', icon: 'glyphicon-envelope', text: 'Contact' }
    ]
  }

  var productsContext = { products: [
      { 
        itemsub: "item-sub",
        title: 'Duck feet',
        description: 'The hollow bones are great for cleaning your dog\'s teeth.',
        price: '$35 for 1 kilo'
      },
      { 
        itemsub: "item-sub1",
        title: 'Chicken feet',
        description: 'The hollow bones are great for cleaning your dog\'s teeth.',
        price: '$30 for 1 kilo'
      },
      { 
        itemsub: "item-sub2",
        title: 'Beef liver',
        description: 'Nutrient rich and breaks in to smaller pieces for easy carrying.',
        price: '$40 for 1 kilo'
      },
      { 
        itemsub: "item-sub3",
        title: 'Salmon tails',
        description: 'Delicious, crunchy and full of healthy fats.',
        price: '$40 for 1 kilo'
      },
      { 
        itemsub: "item-sub4",
        title: 'Sweet potato slices',
        description: 'Specially made for sweet doggies.',
        price: '$27 for 1 kilo'
      },
    ]
  }

  $('div.header').append(Marley.Templates.headerLeft(headerLeftContext));
  $('div.header').append(Marley.Templates.headerRight(headerRightContext));
  $('div.product-list').append(Marley.Templates.products(productsContext));
})
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: 'Apple Watch Series 6',
      description: 'Apple Watch Series 6 lets you measure your blood oxygen level with a revolutionary new sensor and app. Take an ECG from your wrist.² See your fitness metrics on the enhanced Always-On Retina display, now 2.5x brighter outdoors when your wrist is down. Set a bedtime routine and track your sleep. And reply to calls and messages right from your wrist. It’s the ultimate device for a healthier, more active, more connected life.',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6215/6215931_sd.jpg;maxHeight=640;maxWidth=550',
      price: '$379.00',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Apple - AirPods Pro - White',
      description: 'Active noise cancellation for immersive sound. Transparency mode for hearing and connecting with the world around you. A more customizable fit for all-day comfort. Sweat- and water-resistant.¹ All in a super light, in-ear headphone that is easy to set up with all your Apple devices.²',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706659_sd.jpg;maxHeight=640;maxWidth=550',
      price: '$225.48',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Apple - AirTag',
      description: 'AirTag. Keep track of your keys, wallet, luggage, backpack, and more, all in the Find My app. Play a sound on the built-in speaker, or say "Hey Siri, find my gym bag." With select iPhone models, Precision Finding can lead you right to your nearby AirTag.1 If it is further away, hundreds of millions of Apple devices in the Find My network can help track it down. All anonymously and encrypted for privacy.',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461348_rd.jpg;maxHeight=640;maxWidth=550',
      price: '$30',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MacBook Air 13.3" Laptop',
      description: 'Apple’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with the 7-core GPU. And accelerate machine learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever — up to 18 hours.¹ MacBook Air. Still perfectly portable. Just a lot more powerful.',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418599_sd.jpg;maxHeight=640;maxWidth=550',
      price: '$999.99',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Apple - 10.2-Inch iPad',
      description: 'The new iPad. Its your digital notebook, mobile office, photo studio, game console, and personal cinema. With the A12 Bionic chip that can easily power essential apps and immersive games. So you can edit a document while researching on the web and making a FaceTime call to a colleague at the same time. Apple Pencil makes note-taking with iPad a breeze.¹ Attach a full-size Smart Keyboard for comfortable typing.¹ And go further with Wi-Fi and Gigabit-class LTE² and all-day battery life.³',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5199/5199701_sd.jpg;maxHeight=640;maxWidth=550',
      price: '$329.99',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung - 50" Class 7 Series LED 4K UHD Smart Tizen TV',
      description: 'Build an immersive media room with this 50-inch Samsung Smart TV. The Crystal 4K processor automatically improves the image quality of everything you watch, and the HDR technology makes colors look vivid and lifelike. This Samsung Smart TV has a universal guide that organizes live and streamed content so you can find what you re looking for quickly.',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=640;maxWidth=550',
      price: '$399.99',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Canon - EOS M50 Mirrorless Camera',
      description: 'Keep this Canon EOS kit on hand to capture memories with professional results. The interchangeable lens camera features a 24.1MP CMOS sensor for incredibly crisp still shots and 4K UHD video recording to make it ideal for vloggers. This Canon EOS kit features a 15-45mm lens that handles everything from wide-angle to telephoto zoom.',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6204/6204310_sd.jpg;maxHeight=640;maxWidth=550',
      price: '$499.99',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Beats by Dr. Dre - Powerbeats Pro Totally Wireless Earphones',
      description: 'Totally wireless Powerbeats Pro earphones are built to revolutionize your workouts. With zero wires to hold you back, the adjustable, secure-fit ear hooks are customizable for extended comfort and stability. A reinforced design for sweat and water resistance lets you take it to the next level. Each earbud has full volume and track controls and up to 9 hours of listening time to fuel your training with powerful, balanced sound.',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6397/6397383_rd.jpg;maxHeight=640;maxWidth=550',
      price: '$109.99',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'WD - WD_BLACK P10 4TB Game Drive External USB 3.2 Gen 1 Portable Hard Drive - Black',
      description: 'The WD_Black™ P10 Game Drive gives your console or PC the performance-enhancing tools it needs to keep your competitive edge. It s a top-tier external HDD in capacities 4TB, built specifically for gamers looking to expand the potential of their console or PC by saving their game library in an on-the-go form factor. Now, with WD_Black™ P10 Game Drive, you can drive your game the way you choose.',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6364/6364273_sd.jpg;maxHeight=640;maxWidth=550',
      price: '$169.99',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Microsoft - Bluetooth Keyboard and Mouse Bundle - Glacier',
      description: 'Enjoy the solid feel of our sleek, modern keyboard and mouse as you work in Windows and Microsoft 365.* The wireless design pairs seamlessly with your laptop via Bluetooth®. Save time with new, built-in keyboard shortcuts, including dedicated Microsoft 365* and emoji keys—plus a new Snipping key for fast screen captures. The comfortable, compact mouse design is perfect for precise scrolling and navigation across documents and websites.',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408046_sd.jpg;maxHeight=640;maxWidth=550',
      price: '$59.99',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};

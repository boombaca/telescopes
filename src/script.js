var reasons = [
"Gemini Observatory Telescopes   Diameter: 8.1 Meters Location: Mauna Kea, Hawaii and Cerro Pachon, Chile",
"Very Large Telescope   Diameter: 8.2 Meters Location: Atacama Desert, Chile ",
"Subaru Telescope   Diameter: 8.4 Meters Location: Mauna Kea, Hawaii, The United States  ",
"Large Binocular Telescope   Diameter: 8.4 Meters Location: Pinaleno Mountains, Arizona, The United States",
"Southern African Large Telescope   Diameter: 9.2 Meters Location: Sutherland, South Africa ",
"Keck 1 and 2   Diameter: 10 Meters Location: Mauna Kea, Hawaii, The United States ",
"Hobby-Eberly Telescope   Diameter: 10 meters Location: Davis Mountain, Texas, The United States",
"Gran Telescopio Canarias   Diameter: 10.4 meters Location: La Palma, Canary Islands, Spain ",
"The Giant Magellan Telescope   Diameter: 24.5 m Location: Vallenar, Chile Estimated Completion: 2025 ",
"Thirty Meter Telescope   Diameter: 30 Meters Location: Mauna Kea, Hawaii Estimated Completion: 2027",
"1. European Extremely Large Telescope   Diameter: 39.3 Meters Location: Cerro Armazones, Chile Estimated Completion: 2024"
  ];
  var images = [
    "https://i0.wp.com/www.rankred.com/wp-content/uploads/2018/12/Gemini-North.jpg?w=750&ssl=1",
    "https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/VLT.jpg?w=750&ssl=1",
    "https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/Subaru-telescope.jpg?w=750&ssl=1",
    "https://i2.wp.com/www.rankred.com/wp-content/uploads/2018/12/Large-Binoculers-Telescope.jpg?w=750&ssl=1",
    "https://i2.wp.com/www.rankred.com/wp-content/uploads/2018/12/SALT.jpg?w=750&ssl=1",
    "https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/Keck-Observatory.jpg?w=720&ssl=1",
    "https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/HET.jpg?w=750&ssl=1",
    "https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/Gran-Telescopio-Canarias.jpg?w=750&ssl=1",
    "https://i2.wp.com/www.rankred.com/wp-content/uploads/2018/12/Giant-Magellan-Telescope.jpg?w=750&ssl=1",
    "https://i1.wp.com/www.rankred.com/wp-content/uploads/2018/12/TMT-primary-mirror.jpg?w=750&ssl=1",
    "https://i0.wp.com/www.rankred.com/wp-content/uploads/2018/12/Extremely-Large-Telescope.jpg?w=750&ssl=1"
  ];
  
      var i = 0;
      function nextslide() { 
        document.getElementById("reasontext").innerHTML = reasons[i];
        document.getElementById("album").src = 
          images[i];
        i++;
      }
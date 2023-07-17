# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
### Data injection ###
// Array of car data to insert
  const carData = [
    {
        "name": "Nissan GTR",
        "model": "R32",
        "year": 1994,
        "price": 50000,
        "description": ["Turbo Charged", "AWD", "inline-6", "manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/826/771/763/gtr-nissan-r32-skyline-hd-wallpaper-preview.jpg"
    },
    {
        "name": "Nissan GTR",
        "model": "R33",
        "year": 1998,
        "price": 60000,
        "description": ["Turbo Charged", "AWD", "inline-6", "manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/135/28/947/nissan-turbo-wheels-skyline-wallpaper-preview.jpg"
    },
    {
        "name": "Nissan GTR",
        "model": "R34",
        "year": 2000,
        "price": 100000,
        "description": ["Turbo Charged", "AWD", "inline-6", "manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/688/663/793/nissan-gtr-r34-blue-car-wallpaper-preview.jpg"
    },
    {
        "name": "Nissan GTR",
        "model": "R35",
        "year": 1998,
        "price": 120000,
        "description": ["Turbo Charged", "AWD", "inline-6", "automatic"],
        "image": "https://c4.wallpaperflare.com/wallpaper/145/314/400/gtr-nissan-r35-nismo-hd-wallpaper-preview.jpg"
    },
    {
        "name": "Toyota Supra",
        "model": "MK4",
        "year": 1998,
        "price": 100000,
        "description": ["Turbo Charged", "RWD", "inline-6", "manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/356/152/892/toyota-supra-mk4-jdm-wallpaper-preview.jpg"
    },
    {
        "name": "Toyota Supra",
        "model": "MK5",
        "year": 2019,
        "price": 60000,
        "description": ["Turbo Charged", "RWD", "inline-6", "automatic"],
        "image": "https://c4.wallpaperflare.com/wallpaper/967/818/396/white-coupe-toyota-supra-the-fifth-generation-hd-wallpaper-preview.jpg"
    },
    {
        "name": "Lexus LFA",
        "model": "F",
        "year": 1998,
        "price": 100000,
        "description": ["Naturally Aspirated", "RWD", "V10", "automatic"],
        "image": "https://c4.wallpaperflare.com/wallpaper/826/90/488/lexus-lfa-black-lexus-lfa-wallpaper-preview.jpg"
    },
    {
        "name": "Subaru Impreza",
        "model": "WRC",
        "year": 2006,
        "price": 60000,
        "description": ["Turbo Charged", "AWD", "V4", "Manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/511/551/741/subaru-rally-cars-snow-forest-wallpaper-preview.jpg"
    },
    {
        "name": "Subaru WRX",
        "model": "STI",
        "year": 2018,
        "price": 50000,
        "description": ["Turbo Charged", "AWD", "V4", "Manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/468/483/757/car-nurburgring-subaru-impreza-wrx-sti-wallpaper-preview.jpg"
    },
    {
        "name": "Subaru BRZ",
        "model": "Limited",
        "year": 2023,
        "price": 30000,
        "description": ["Naturally Aspirated", "RWD", "V4", "Manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/703/102/467/subaru-toyota-gt86-scion-fr-s-subaru-brz-wallpaper-preview.jpg"
    },
    {
        "name": "Mitsubishi Lancer",
        "model": "EVO",
        "year": 2001,
        "price": 60000,
        "description": ["Turbo Charged", "AWD", "V4", "Manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/172/667/669/mitsubishi-lancer-evo-ix-japanese-cars-headlights-tuning-wallpaper-preview.jpg"
    },
    {
        "name": "Mazda RX-7",
        "model": "FD",
        "year": 2002,
        "price": 70000,
        "description": ["Turbo Charged", "RWD", "Rotary", "Manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/347/171/758/car-night-tuning-mazda-wallpaper-preview.jpg"
    },
    {
        "name": "Acura NSX",
        "model": "T",
        "year": 1995,
        "price": 100000,
        "description": ["Turbo Charged", "RWD", "V6", "Manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/490/766/363/red-white-need-for-speed-honda-nsx-wallpaper-preview.jpg"
    },
    {
        "name": "Honda S",
        "model": "S2000",
        "year": 2002,
        "price": 30000,
        "description": ["Turbo Charged", "RWD", "V4", "Manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/837/876/968/honda-s2000-car-wallpaper-preview.jpg"
    },
    {
        "name": "Lexus RC",
        "model": "RCF",
        "year": 2018,
        "price": 60000,
        "description": ["Naturally Aspirated", "RWD", "V8", "Automatic"],
        "image": "https://c4.wallpaperflare.com/wallpaper/668/938/338/lexus-rcf-a-yellow-sport-car-night-yellow-sports-car-wallpaper-preview.jpg"
    },
    {
        "name": "Acura NSX",
        "model": "T",
        "year": 2017,
        "price": 200000,
        "description": ["Turbo Charged", "AWD", "V6", "Manual"],
        "image": "https://c4.wallpaperflare.com/wallpaper/718/83/755/honda-acura-nsx-liberty-walk-larry-chen-hd-wallpaper-preview.jpg"
    }
];

  // Insert car data into the database
  Car.insertMany(carData)
    .then(() => {
      console.log('Car data inserted successfully');
    })
    .catch((error) => {
      console.error('Error inserting car data:', error);
    });
 // GSAP Animation
 const element = document.getElementById('myElement');
 gsap.to(element, {
   duration: 5,
   x: 150,
   rotation: 360,
   scale: 2,
   opacity: 0.6,
   onComplete: () => {

     console.log('GSAP Animation complete!');

   }
 });

 // Lottie Animation
 const animationContainer = document.getElementById('myElement');
 lottie.loadAnimation({
   container: animationContainer,
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: 'path/to/animation.json' // Replace with the path to your animation JSON file
 });
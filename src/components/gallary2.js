// import React from 'react';

// const gallary = () => {
//     var slideIndex = 4;
//     showSlides(slideIndex);
    
//     // Next/previous controls
//     function plusSlides(n) {
//       showSlides(slideIndex += n);
//     }
    
//     // Thumbnail image controls
//     function currentSlide(n) {
//       showSlides(slideIndex = n);
//     }
    
//     function showSlides(n) {
//     console.log(n);
//       var i;
//       var slides = document.getElementsByClassName("mySlides");
//       console.log(slides.length);
//       var dots = document.getElementsByClassName("demo");
//       var captionText = document.getElementById("caption");
//       if (n > slides.length) {slideIndex = 1}
//       if (n < 1) {slideIndex = slides.length}
//       for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex-1].style.display = "block";
//       dots[slideIndex-1].className += " active";
//       captionText.innerHTML = dots[slideIndex-1].alt;
//     }
//     return (
//         <div>
//                 <div className="container">

// <div className="mySlides">
//   <div className="numbertext">1 / 6</div>
//     <img src="/media/1.jpg" style={{width:"100%"}}/>
// </div>

// <div className="mySlides">
//   <div className="numbertext">2 / 6</div>
//     <img src="/media/2.jpg" style={{width:"100%"}}/>
// </div>

// <div className="mySlides">
//   <div className="numbertext">3 / 6</div>
//     <img src="/media/1.jpg" style={{width:"100%"}}/>
// </div>

// <div className="mySlides">
//   <div className="numbertext">4 / 6</div>
//     <img src="/media/2.jpg" style={{width:"100%"}}/>
// </div>

// <div className="mySlides">
//   <div className="numbertext">5 / 6</div>
//     <img src="/media/1.jpg" style={{width:"100%"}}/>
// </div>

// <div className="mySlides">
//   <div className="numbertext">6 / 6</div>
//     <img src="/media/1.jpg" style={{width:"100%"}}/>
// </div>

// <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
// <a className="next" onclick="plusSlides(1)">&#10095;</a>

// <div className="caption-container">
//   <p id="caption"></p>
// </div>

// <div className="row">
//   <div className="column">
//     <img className="demo cursor" src="/media/1.jpg" style={{width:"100%"}} onclick="currentSlide(1)" alt="The Woods"/>
//   </div>
//   <div className="column">
//     <img className="demo cursor" src="/media/2.jpg" style={{width:"100%"}} onclick="currentSlide(2)" alt="Cinque Terre"/>
//   </div>
//   <div className="column">
//     <img className="demo cursor" src="/media/1.jpg" style={{width:"100%"}} onclick="currentSlide(3)" alt="Mountains and fjords"/>
//   </div>
//   <div className="column">
//     <img className="demo cursor" src="/media/2.jpg" style={{width:"100%"}} onclick="currentSlide(4)" alt="Northern Lights"/>
//   </div>
//   <div className="column">
//     <img className="demo cursor" src="/media/1.jpg" style={{width:"100%"}} onclick="currentSlide(5)" alt="Nature and sunrise"/>
//   </div>
//   <div className="column">
//     <img className="demo cursor" src="/media/1.jpg" style={{width:"100%"}} onclick="currentSlide(6)" alt="Snowy Mountains"/>
//   </div>
// </div>
// </div>
//             </div>
//     );
// };

// export default gallary;
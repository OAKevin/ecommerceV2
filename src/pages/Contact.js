import React from 'react';
import slide1 from '../sources/slide1.jpg';
import slide2 from '../sources/slide2.jpg';
import slide3 from '../sources/slide3.jpg';
import slide4 from '../sources/slide4.jpg';
import './Contact.scss';

const buttons = document.querySelectorAll("[data-carousel-button]");
//checks if the next button or the previous button is being clicked
buttons.forEach((button) => {
//gives each button an event listener for the click
  button.addEventListener("click", () => {
  //if the click is the next button then it takes you to the next picture or else it assumes you pressed previous
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    //changes the index of the slides depending on the offset previously shown
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    //is checking if the index is less than 0 it will decrease the index by one
    if (newIndex < 0) newIndex = slides.children.length - 1;
    //if its more or equal to children length then it will give it a value of 0
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const Contact = () => {
  return (
    <>
      <section aria-label="Newest Photos">
        <div className="carousel" data-carousel>
          <button className="carousel-button prev" data-carousel-button="prev">
            &#8656;
          </button>
          <button className="carousel-button next" data-carousel-button="next">
            &#8658;
          </button>
          <ul data-slides>
            <li className="slide" data-active>
              <img src={slide1} alt="GTR Image #1" />
            </li>
            <li className="slide">
              <img src={slide2} alt="GTR Image #2" />
            </li>
            <li className="slide">
              <img src={slide3} alt="GTR Image #3" />
            </li>
            <li className="slide" data-active>
              <img src={slide4} alt="GTR Image #4" />
            </li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <div className="sectionheader">
          <h1>CONTACT</h1>
        </div>
        <article>
          <p>Life is simple, you make choices and you don't look back.</p>

          <label htmlFor="checkcontact" className="contactbutton">
            <div className="mail"></div>
          </label>
          <input id="checkcontact" type="checkbox" />

          <form action="" method="post" className="contactform">
            <p className="input_wrapper">
              <input type="text" name="contact_nom" value="" id="contact_nom" />
              <label htmlFor="contact_nom">NAME</label>
            </p>
            <p className="input_wrapper">
              <input type="text" name="contact_email" value="" id="contact_email" />
              <label htmlFor="contact_email">EMAIL</label>
            </p>
            <p className="input_wrapper">
              <input type="text" name="contact_sujet" value="" id="contact_sujet" />
              <label htmlFor="contact_sujet">SUBJECT</label>
            </p>
            <p className="textarea_wrapper">
              <textarea name="contact_message" id="contact_message"></textarea>
            </p>
            <p className="submit_wrapper">
              <input type="submit" value="ENVOYER" />
            </p>
          </form>
        </article>
      </section>
    </>
  );
};

export default Contact;

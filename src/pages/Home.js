import React from "react";
// import Slider from "../components/Sliders/Slider"; // Update the path to the Slider component
// import axios from "axios";
const Home = () => {
    // const [cars, setCars] = useState([]);

    // useEffect(() => {
    //   // Fetch car data from the server (replace with your own API endpoint)
    //   axios.get("/api/cars").then((response) => {
    //     setCars(response.data);
    //     console.log(response.data);
    //   });
    // }, []);
    
    return (
      
     <section>
      <video id="slider" autoplay muted loop>
        <source src="sources/video1.mp4" type="video/mp4" />
      </video>
      <ul class="navigation">
        <li onclick="videoUrl('sources/video1.mp4')">
          <img src="sources/pic1.jpg" />
        </li>
        <li onclick="videoUrl('sources/video2.mp4')">
          <img src="sources/pic2.jpg" />
        </li>
        <li onclick="videoUrl('sources/video3.mp4')">
          <img src="sources/pic3.jpg" />
        </li>
      </ul>
    </section>
 
     
    
     
    );
  };
  function videoUrl(url) {
    document.getElementById("slider").src = url;
  }
  export default Home;
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { fetchRandomLandscapes } from "./../services/landscape";

import "./GalleryPage.scss";

const GalleryPage = () => {
  const [galleryLandscapes, setGalleryLandscapes] = useState([]);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    fetchRandomLandscapes().then((landscapes) => {
      setGalleryLandscapes(landscapes.data);
      setCurrentImage(landscapes.data[0].image);
    });
  }, []);

  return (
    <div id="gallery-page">
      <div id="top-gallery" className="section">
        <Navbar />
        <div className="center">
          {(!currentImage && <div className="imageFrame"></div>) || (
            <img
              className="imageFrame"
              src={currentImage}
              alt="AI generated landscape"
            />
          )}
        </div>
        <p className="small-paragraph">
          These are other people’s individually generated backgrounds. Do not
          steal. Generate your own landscape <Link to="/">here.</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;

import { useState } from "react";
import "./works.scss"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png.png",
      title: "Web Design",
      desc:
        "I can keep my mouth shut, but you can read the subtitles on my face. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png.jpg",
      title: "Mobile Application",
      desc:
        "Remember, as long as you are breathing,it's never too late to start a  new beginning.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "https://previews.123rf.com/images/marsono/marsono1803/marsono180300634/97359728-reading-book-logo-and-symbols-silhouette-illustration.jpg?fj=1",
      title: "Branding",
      desc:
        "You are the product of your thoghts so what you think is what you become.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) =>(

                
                <div className="container">
                  <div className="item">
                     <div className="left">
                         <div className="leftContainer">
                             <div className="imgContainer">
                                 <img src={d.icon} alt=""/>
                             </div>
                             <h2>{d.title}</h2>
                             <p>{d.desc}</p>
                             <span>Projects</span>
                         </div>
                     </div>
                     <div className="right">
                         <img src="https://cdn.dribbble.com/users/2522172/screenshots/16989555/media/50968cfd51853b2adfe13496a133f1af.png" alt=""/>
                     </div>
                  </div>
                </div>
                ))}
            </div> 
              <img src="assets/sidearrow.png" 
              className="arrow left" 
              alt=""
              onClick={() => handleClick("left")}
              />
              <img src="assets/sidearrow.png" 
              className="arrow right" 
              alt=""
              onClick={() => handleClick()}
              />
        </div>
    )
}

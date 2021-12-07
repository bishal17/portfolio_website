import "./testimonials.scss"

export default function Testimonials() {
    const data = [
        {
          id: 1,
          name: "Bishal Regmi",
          title: "Senior Developer",
          img:
            "assets/man.png",
          icon: "assets/twitter.png",
          desc:
            "Computer Engineering student at IOE Purwanchal Campus Dharan",
        },
        {
          id: 2,
          name: "Alex Kalinski",
          title: "Co-Founder of DELKA",
          img:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icon: "assets/youtube.png",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
          featured: true,
        },
        {
          id: 3,
          name: "Zayn Malik",
          title: "Singer",
          img:
            "assets/zayn.jpg",
          icon: "assets/linkdin.png.jpg",
          desc:
            "He is the first British artist who made a debut to topping both the US and UK charts. ",
        },
      ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
             {data.map((d) => (
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/rightarrow.png" className="left" alt=""/>
                        <img
                         className="user"
                         src={d.img}
                         alt=""
                        />
                       <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                     {d.desc}
                    </div>
                    <div className="bottom">
                     <h3>{d.name}</h3>
                     <h4>{d.title}</h4>
                    </div>

                </div>
             ))}
            </div>
        </div>
    )
}
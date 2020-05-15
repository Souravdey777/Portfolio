import React from 'react';
import styles from './about.module.css';
import Souravdey from './Name/about';
import profile from '../../assets/profile.jpg';

let lastScrollY = 0;

class About extends React.Component{
    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }
    // left = React.createRef();
    // right = React.createRef();
    
    // handleScroll = () => {
    //     lastScrollY = window.scrollY;
    //     console.log(lastScrollY)
    //     const { offsetTop } = this.right.current
    //     console.log(`${offsetTop-lastScrollY}`)
    //     if (lastScrollY>offsetTop) {
    //         this.left.current.style.position = "fixed";
    //         this.left.current.style.width = "100%";
    //     }
    //     else {
    //         this.left.current.style.position = "unset";
    //         this.left.current.style.height=`${offsetTop-lastScrollY}`
    //     }
    // };
    render(){
    return(                    
    <div className={styles.PageRoot} >
        <div className={styles.leftPart} ref={this.left} >
            <img src={profile} alt=""/>
        </div>
        <div className={styles.pageRootBlack} ref={this.right}>
            {/* <div style={{backgroundColor:"#fab600", width:"100px",height:"100%"}}></div> */}
            <div style={{ fontSize: "1em", borderTop:"2px solid #fab600", paddingLeft:"10px" }}>
                Hi <span style={{ color: "#fab600", fontWeight: "bold" }}> Sourav </span> here,
            <br />
                <br />
                <Souravdey />
                <br />
                Based on Bangalore. Currently working as <span style={{ color: "white", fontWeight: "bold" }}>Software Developer</span> for Tata Consultancy Services.
                <br />
                <br />
                {/* Lorem Ipsum is simply dummy text of the printing and printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br/>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
            </div>
        </div>
    </div>
);}
}

export default About;
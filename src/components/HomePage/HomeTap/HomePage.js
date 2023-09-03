import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useBetween } from "use-between";
import Header from "../Header/Header";
import './HomePage.css'
import handPhoto from '../../..//photo/waving_hand.gif'
import SendMessage from "../../sendMessageText/sendMessage";
import Bottle from '../../../photo/bottle.png'




const HomePage = () => {

     // <get the data from rducers>
    const state = useSelector((state) => state.data);
    const { bottleClassName, hidHomeIntro, sethidHomeIntro } = useBetween(state.useShareState);
     // </get the data from rducers>

    const body = document.querySelector("body");
    body.style.background = 'none';

    useEffect(() => {
        const arrow = document.querySelector('.arrow');
        if (hidHomeIntro == false)
            arrow.style.transform = "rotate(180deg)";
        else
            arrow.style.transform = "rotate(0deg)";

    }, [])

    const hidIntro = () => {
        sethidHomeIntro(!hidHomeIntro);
        const arrow = document.querySelector('.arrow');
        if (hidHomeIntro == true)
            arrow.style.transform = "rotate(180deg)";
        else
            arrow.style.transform = "rotate(0deg)";

    }

    return (

        <div className="HomePage">

            <Header />
            <div className="continer">
                <div className="intro">
                 
                    <div className="hidScrollText" onClick={hidIntro} >
                        <div style={{ display: "flex" }}>
                            <h6 style={{ width: "100%" }}>About <i>SECRET SAIL</i> <img src={handPhoto} className="handPhoto"></img> </h6>
                            <h6 className="arrow">^</h6>
                        </div>

                        <div className=""></div>
                        
                        <div style={{ display: !hidHomeIntro ? "block" : " none" }}>
                            <p>- This site allows you to write and send whatever you want, and your anonymous message will reach someone without knowing any information about you. </p>
                            <p> - Also, you will receive messages from unknown people on your e-mail or on this site.</p>
                        </div>
                    </div>

                    {/* <marquee scrollamount="10"> */}

                    {/* </marquee> */}
                </div>

                <div className="secondSection">
                    <SendMessage />
                  
                    <div className="imgBottle" >
                        <img src={Bottle} className={`bottle ${bottleClassName}`}></img>
                    </div>
                </div>

            </div>


        </div>

    );
}

export default HomePage;
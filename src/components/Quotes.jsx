import { useEffect, useState } from "react";
import {
    FaQuoteLeft,
    FaHeart,
    FaStar
} from "react-icons/fa";

import "../css/quotes.css";


export default function Quotes(){


    const quotes=[

        {
            text:
            "May your life always be filled with happiness, smiles and endless success.",
            author:"Birthday Wish ❤️"
        },

        {
            text:
            "Some people make the world beautiful just by being in it. You are one of them.",
            author:"Special Person 🌹"
        },

        {
            text:
            "Every smile of yours is a reason for someone to be happy.",
            author:"Beautiful Memory ✨"
        },

        {
            text:
            "May Allah bless you with good health, peace, happiness and success.",
            author:"Dua For You 🤍"
        },

        {
            text:
            "Another year of beautiful moments, dreams and achievements begins today.",
            author:"Birthday Message 🎂"
        },

        {
            text:
            "Keep shining like a star because your smile makes everything brighter.",
            author:"Forever Smile ⭐"
        }

    ];



    const [index,setIndex]=useState(0);


    const [animate,setAnimate]=useState(true);



    useEffect(()=>{


        const timer=setInterval(()=>{


            setAnimate(false);


            setTimeout(()=>{


                setIndex(
                    prev=>
                    (prev+1)%quotes.length
                );


                setAnimate(true);


            },400);



        },5000);



        return()=>{

            clearInterval(timer);

        };


    },[]);




    return(


        <section className="quotes-section">


            <div className="quotes-heading">


                <h1>
                    💬 Beautiful Birthday Quotes
                </h1>


                <p>
                    Special words for a special person ❤️
                </p>


            </div>




            <div

            className={
                `quote-card 
                ${
                    animate
                    ?
                    "show"
                    :
                    "hide"
                }`
            }

            >


                <FaQuoteLeft className="quote-icon"/>



                <p className="quote-text">

                    {quotes[index].text}

                </p>



                <div className="quote-author">


                    <FaHeart/>

                    {quotes[index].author}

                </div>



            </div>




            <div className="quote-controls">


            {

                quotes.map(
                    (item,i)=>(


                    <button

                    key={i}

                    className={
                        index===i
                        ?
                        "active"
                        :
                        ""
                    }


                    onClick={()=>{


                        setIndex(i);


                    }}

                    >

                    <FaStar/>

                    </button>


                    )

                )

            }


            </div>




            <div className="quote-footer">


                <h2>
                    ❤️ Always Keep Smiling ❤️
                </h2>


            </div>



        </section>


    )

}
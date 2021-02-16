import React from 'react';
import surfing from '../shared/images/surfing.jpg';
import kids from '../shared/images/kidsProgramming.jpg'

const GoalsPage = () => {
    return (
        <main className="container mb-5 ">
    <div className="mr-3 ml-3">
        <div className="row mt-5">
            <div className="col text-center">
                <h1>Dream Big</h1>
            </div>
        </div>

    <div className="row  mt-5">
        <div className="col-12 col-lg-6 cards">
            <h2>Chasing the dream!</h2>
            <p>As you may have guessed by now, my overseas travels have left a huge impression on me
                and changed my future goals. Rather than being stuck in a narrow mind frame, I now have
                many goals I want to work towards.
            </p>
            <p>A personal goal of mine is to learn how to surf long enough to actually ride some waves.
                I tried this in the Phillipines and had a blast although I couldn't stay on the board for more
                than a few seconds. I realise I have lived a dull and unfulfilling life up to this point, so if
                something catches my intrest I am going to try it. When it comes to hobbies I don't believe in failure.
            </p>
        </div>
        <div className="d-none d-lg-block col-6 mt-4 " style={{borderRadius: "8px"}}>
            <img  src={surfing}  alt="" style={{borderRadius: "8px", height:"250px", width:"450px"}}/>
        </div>
        <div className="col-12 d-lg-none mt-3 align-items-center">
            <img className="" src={surfing}  alt="" style={{borderRadius: "8px", height:"250px", width:"450px" }}/>
        </div>
    </div>

    <div className="row  mt-5">
        <div className="col-12 col-lg-6 mt-5">
            <img  src={kids} alt=""  style={{borderRadius: "8px", height:"250px", width:"450px"}}/>
        </div>
        <div className="col-12 col-lg-6 cards mt-4" style={{overflow: "scroll", height: "300px"}}>
            <h2 className="mt-3">Brightening the future!</h2>
            <p>
                Something I have struggled with the most in my current Software Development Program, or programming in 
                general is the lack of help or mentorship. Even the school tutor is a former student that doesn't have much
                more experience than me so having guidance has been extremely hard to come by and the instructors don't
                give much help after lectures.
            </p>
            <p>
                I don't think many people understand you don't have to be a guiness to do software development but it does
                take dedication and a lot of frustration to get there. Having been on both sides of the poverty scale I
                understand and still feel what it's like to face the daily grind when you paychecks are smaller than your bills.
                I understand there is a growing divide between lower class and middle class, what once paid a families bills and
                allowed them to take family vacations now sadly barely pays the bills. I want to do something to help the kids and 
                willing adults of the future to do my part in preventing more poverty.
            </p>
            <p>
                I would love to someday soon start a non-profit
                that provides laptops to low income children and help them start learning web development in hopes that they
                may be able to find a secure, well paying job when they become adults. Who knows, one of them might even totally
                change the web development world some day!
            </p>
        </div>
        
    </div>
</div>
</main>
    )
}

export default GoalsPage;

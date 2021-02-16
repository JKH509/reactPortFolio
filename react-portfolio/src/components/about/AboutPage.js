import React from 'react';
import philBeach from '../shared/images/PhilBeach.jpg';
import philVIslands from '../shared/images/virginIslands.jpeg';
import boom from '../shared/images/Boom.jpg';

const AboutPage = () => {
    return(
        <main className="container mb-5 pr-5 pl-5">

<section className="mt-5 row cards border border-white">

    <div className="d-none d-lg-block col-3 mt-2 mb-2">
        <img src={philVIslands} alt="Phillippines virgin islands" width="200" />
    </div>
    <div className="col-12 col-lg-8">
        <h1>
            About James
        </h1>
        <p>I am almost 39 years old, I have 3 kids, 2 which are teenagers that will soon graduate high school, and start their
            own lives. I also have a son that is almost 1 year old. Life has a funny way of keeping you in line. 7 years ago 
            I thought I was living the life I was supposed to be living, I always felt something was missing but I just worked
            longer, harder days to try to make myself feel better and occupied. After a few life altering events, I ended up 
            traveling to the Phillippines for a vacation and to meet the woman who would become my wife. After two trips there
            we got married in Hong Kong and thats when my concious told me I'm ready for a change. I needed to live a life that
            would allow me to travel and see the world, I always felt trapped in one place, I didn't know that until I exerienced
            life with no fears.
        </p>
    </div>
</section>

<section className="row mt-2">
    <div className="col-12 col-lg-6 border border-white cards mt-2">
        <h2 className="mt-2">Why coding?</h2>
        <p className="pr-2 pl-2">It's hard to explain, it wasn't my dream job for many years. In fact, before I started going to college I had
            very limited experience with computers in general. It may sound silly this day and age but just 2 years ago I 
            barely knew how to send an email.
        </p>
        <p className="pr-2 pl-2">
            I was in the landscape field for 24 years. Mowing, pruning, sprinklers, and 
            much more. I had 6 employees and a ton of responsibilities but it was all I knew how to do and I did a great job.
            My uncle has been a programmer for 20 years and had tried to talk me into getting into the field but I was comfortable
             and couldn't make the switch willingly.
        </p>
        <p className="pr-2 pl-2">Apparently thats when fate stepped in. I broke my neck in a car accident and that was the slow decline of my business
            I tried so hard not to let go even though I knew the days for me to physically be able to do the work was coming
            to an end. A couple years later I decided to treat myself to the first vacation I have ever taken as an adult,
            that's when my eyes were finally opened and I realized I haven't even started living yet.
        </p>
    </div>
    <div className="d-none d-lg-block col-6 mt-4">
        <img src={boom} style={{width:"500px", height:"425px", borderRadius: "8px"}} alt="" />
    </div>
</section>

<section className="row mt-2">
    <div className="d-none d-lg-block col-6 mt-3 ">
        <img src={philBeach} style={{width:"500px", height:"425px", borderRadius: "8px"}} alt=""/>
    </div>
    <div className="col-12 col-lg-6 p-3 border border-white cards mt-2" style={{height: "450px", overflow: "hidden", scrollBehavior: "auto " }}>
        <h3>Previous Experiments</h3>
        <p className="pr-2 pl-2">Back when I was still trying to grow my landscape business I knew the importance of 
            having web presence, I didn't understand the importance of how web presence works.
        </p>
        <p>
            My first self built website was on GoDaddy, of course I was proud of the design, and how it looked but
            I had no idea of all the other things that come into play such as how to funnel business or how to be ranked.
        </p> 
        <p>
            Once I started looking at other competitor pages to see what lacked or what I could do better I looked for
            other ways of making my page more custom. Thats when I found elementor. It was so easy to design a professional
            looking page with little to none design experience. After I built a nice looking site I wanted to see if it
            was getting the traffic I thought it was capable of, thats when I learned about google analytics and page speed.
        </p>
        <p>
            It didn't take long for me to figure out, I had no idea what I was doing, and that in order to really
            get better and to learn more I would need some professional classes. So I found the program at our local
            community college that teaches both front-end (1st year) and back-end (2nd year) to be a full stack developer.
            
        </p>
    </div>
</section>

</main>

    )
}
export default AboutPage;
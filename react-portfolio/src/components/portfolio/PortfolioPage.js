import React from 'react';
import { FaCheck} from 'react-icons/fa';
import gridPic from '../shared/images/firstGrid_150x150.png';
import bidTypePic from '../shared/images/bidType150.png';
import sayHelloPic from '../shared/images/sayHello.PNG';
import formValPic from '../shared/images/form_150x150.png';
import mathPic from '../shared/images/mathCalc.PNG';

const PortfolioPage = () => {
    return (
        <main className="container mb-5">
<div className="row cards mt-5">
    <div className="col ">
        <h1>Welcome to my portfolio page</h1>
        <p>Here are a few of my favorite assignments</p>
    </div>
</div>

<div className="row mt-5">
    <div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" alt="" src={gridPic} style={{height:"168px", width:"170"}} />
        <p className="mt-2"><a href="/Portfolio/Grid">First Grid Assignment</a><br/>Design Assignment</p>
    </div>
    </div>
    <div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" alt="" src={bidTypePic} />
        <p className="mt-2"><a href="/Portfolio/BidPro">First BidPro Assignment</a><br/>Design Assignment</p>
        </div>
    </div>
    <div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" src={formValPic} alt="" style={{height:"168px", width:"170"}} />
        <p className="mt-2"><a href="/Portfolio/FormValidation">Form Validation</a><br/>Design/Validation</p>
        </div>
    </div>
    <div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" alt="" src="/images/mediaBR.png" />
        <a href="/Portfolio/FirstGrid"><p className="mt-2">First Grid Assignment</p></a>
        </div>
    </div>
    <div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" src={sayHelloPic} alt="" style={{height:"168px", width:"170"}} />
        <p className="mt-2"><a href="/Portfolio/SayHelloW4">Say Hello</a><br/>(Input/Output)</p>
        </div>
    </div>
    
</div>
<div className="row mt-3">
<div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" src={sayHelloPic} alt="" style={{height:"168px", width:"170"}} />
        <p className="mt-2"><a href="/Portfolio/SayHelloW5">Say Hello Week 5</a><br/>(Input/Output)</p>
        </div>
    </div>
    <div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" src={mathPic} alt="" style={{height:"168px", width:"170"}} />
        <p className="mt-2"><a href="/Portfolio/Calculator">DB Math Calc</a><br/>DataBase</p>
        </div>
    </div>
    <div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" src="/images/fluxWallet.png" alt="" style={{height:"168px", width:"170"}} />
        <p className="mt-2"><a href="/Fillin">My own assignment</a><br/>Validation/Input</p>
        </div>
    </div>
    <div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" src="/images/fluxWallet.png" alt="" style={{height:"168px", width:"170"}} />
        <p className="mt-2"><a href="/fillin">First Grid Assignment</a></p>
        </div>
    </div>
    <div className="col">
        <div className="cards p-2 mb-2">
        <img className="p-2" src="/images/fluxWallet.png" alt="" style={{height:"168px", width:"170"}} />
        <p className="mt-2">First Grid Assignment</p>
        </div>
    </div>
</div>



    <div className="row text-center cards mt-5 p-3">
        <div className="col-12">
            <h2>Class schedule</h2>
            
        </div>
        <div className="col-12 mt-3 ">
            <h3>First Year</h3>
            <div className="row text-center mt-3">  
                
            <div className="col mt-2">
                <h5>Quarter 1</h5>
                <ul>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  HTML5/CSS3</li>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  Intro to Programming</li>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  Computer Math</li>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  Software Math</li>
                </ul>
            </div>
            
            <div className="col mt-2">
                <h5>Quarter 2</h5>
                <ul>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  Responsive Web Design</li>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  JavaScript</li>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  DBMS/SQL</li>
                </ul>
            </div>
            <div className="col mt-2">
                <h5>Quarter 3</h5>
                <ul>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>   React</li>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>   Kotlin</li>
                    <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>   Writing for the web</li>
                    
                </ul>
            </div>
            
        </div>
    </div>
    <div className="col-12">
        <h3>Second Year</h3>
        <div className="row text-center">  
        <div className="col mt-2">
            <h5>Quarter 4</h5>
            <ul>
                <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  Kotlin 2</li>
                <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  Node js</li>
                <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>  PHP 1</li>
                
            </ul>
        </div>
        <div className="col mt-2">
            <h5>Quarter 3</h5>
            <ul>
                <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>   React</li>
                <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>   Kotlin</li>
                <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>   Writing for the web</li>
                
            </ul>
        </div>
        <div className="col mt-2">
            <h5>Quarter 3</h5>
            <ul>
                <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>   React</li>
                <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>   Kotlin</li>
                <li style={{textAlign: "left"}}><FaCheck style={{color: "rgb(47, 209, 47)"}}/>   Writing for the web</li>
                
            </ul>
        </div>
    </div>
</div>
        
    </div>


</main>
    )
}

export default PortfolioPage

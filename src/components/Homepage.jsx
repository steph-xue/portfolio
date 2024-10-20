import React from "react";

function Homepage(props) {

    // Call consoleText after the component has been mounted
    React.useEffect(() => {
        consoleText(
            ['Hello There.', 'My Name is Steph.', 'Welcome To My Homepage!'],
            'text', 
    )}, []);

    // Function to animate text in the console
    function consoleText(words, id) {
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id);

        window.setInterval(function () {
            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount);
                window.setTimeout(function () {
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount);
                letterCount += x;
            }
        }, 120);
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden';
                visible = false;
            } else {
                con.className = 'console-underscore';
                visible = true;
            }
        }, 400);
    }

    // Render the Homepage component
    return (
        <div className="homepage">

            {/* Homepage title and description */}
            <div className={props.darkMode ? "homepage-title title-dark" : "homepage-title title-light"}>
                <span id="text"></span>
                <div className="console-underscore" id="console">&#95;</div>
            </div>
            <p className="homepage-description">
                I am a UBC Bachelor of Computer Science (BCS) student with a previous background in healthcare. I am passionate about 
                levaraging technology to help automate tasks, bridge gaps, and develop innovative user-centric solutions!
            </p>
        </div>
    );
}

export default Homepage;
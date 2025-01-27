import React from "react";
import InfoBox from "../components/InfoBox";

function Home() {
    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* About Me Section */}
                <InfoBox title="About Me">
                    <p>
                        This is just some silly text about me. I like cats! I like horror! I like uhhh coffee uhh!
                        I am not fond of people.
                        I LOVE BLOODBORNE!
                    </p>
                </InfoBox>

                {/* IDFK Section */}
                <InfoBox title="IDFK Section">
                    <p>
                        freedy fivenear
                        hor hor hor hor hrorhor hor
                    </p>
                </InfoBox>
            </div>
        </div>
    );
}

export default Home;
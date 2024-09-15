import React, { useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         // Automatically navigate to the mining page after 10 seconds
    //         navigate('/mining');
    //     }, 10000);

    //     return () => clearTimeout(timer);
    // }, [navigate]);

    return (

        <div className="min-h-screen flex flex-col items-center text-center justify-center no-scroll p-3">



            {/* Welcome Text */}

            <h1 className="text-4xl font-bold mb-8 text-amber-500 yeseva-one-regular" >
                Welcome
            </h1>
            {/* squada-one-regular 
            Lilita-One*/}
            <p className="text-xl bg-zinc-800 px-16 py-2 rounded-xl  font-bold text-amber-500 yeseva-one-regular my-6">John Doe!</p>


            <div className="text-sm my-5 text-gray-400 Lilita-One">
                <p><i>We are excited to have you embark on this journey with us.s you navigate through the process, you will encounter challenges, but rest assure that your dedication will lead to meaningfulrewards. thank you for joining us,and we look forward to acheiving great things together.</i></p>
                <p><i>The mining period will last for 70days, and access to open to a minimum of  6 million miners we hope you will make wise used of this this opportunity  </i></p> <br />
                <p><i>What you mine is what you get </i></p>
            </div>

            <button
                className="absolute bottom-10 right-10 h-4 bg-amber-500 rounded-full transition-all duration-300 flex items-center justify-center"
            ><Link className="p-6" to="/mining">Next</Link>
            </button>


        </div>
    );
};

export default WelcomePage;

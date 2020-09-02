app.controller('MainController', ['$scope', function($scope) {
    $scope.paragraph1 = {
        text: "Hi, I’m Darshan Krishnaswamy, a senior  at Mass Academy. I'm from Chelmsford, MA, which is located just south of Lowell.\n" +
                "Before joining Mass Academy, I attended Chelmsford High School in 9th and 10th grade. I have an older brother named Ashwin. He is currently a senior at Purdue University, majoring in\n" +
            "Data Science.",
        img: "Images/rockport_pic.jpg",
        alt: "Picture of myself in Newport, Rhode Island"
    };
    $scope.paragraph1.p = [$scope.paragraph1.text];

    $scope.paragraph2 = {
            text: "At Chelmsford High School, I was part of my school's math team, science team, speech and debate team, and DECA club. " +
            "In math team, I competed in many local competitions in the Greater Boston Math League along with larger competitions such as the AMC 10/12 and AIME." +
            " I also competed in Eastern Mass ARML (American Regions Math League) and attended the national ARML competition at Penn State. " +
            "In science team, I competed in local and state competitions as part of the West Suburban Science League and the state Science Olympiad, " +
            "along with some other local events such as the Blue Lobster Bowl, an oceanography competition at MIT." +
            " For DECA, I competed in the Personal Financial Literacy event and qualified for the state competition. " +
            "The event is about topics such as savings and checking accounts, saving money for college and retirement, and choosing the best job " +
            "based on factors such as enjoyment, wages, and benefits. In Speech and Debate Team, I did public forum debate for two years and competed " +
            "in many competitions, including the international competition at Harvard, where we competed against teams from Alabama, Florida, and even " +
            "Canada and China. You can click on the image on the right to learn more about Chelmsford High School.",
        img: "Images/chs.jpeg",
        alt: "Chelmsford"
    };
    $scope.paragraph2.p = [$scope.paragraph2.text];

    $scope.paragraph3 = {
        text: "Outside of school, my main hobbies are tennis and computer science. I was on my school’s junior varsity tennis team for the last two years. " +
            "I really enjoy playing tennis, especially on days when the weather is perfect and I have nothing else to do. Outside of the school team, " +
            "I sometimes go to the courts with my brother or my friends and just play for fun. For computer science, I enjoy developing Android applications." +
            " I was first introduced to app development in the eighth grade, and I still continue to learn each time I develop a new app. " +
            "I am also currently learning how to use Kotlin, a new language which is similar to java, but is written more concisely and is easier to use. " +
            "Over the summer, I learned how to develop machine learning projects and train neural networks using python, and I hope to do some machine " +
            "learning projects soon.",
        img: "Images/tennis.jpg",
        alt: "Tennis"
    };
    $scope.paragraph3.p = [$scope.paragraph3.text];

    $scope.paragraph4 = {
        text: "Another major hobby of mine is robotics. I was part of a First Robotics Competition (FRC) team called Stormgears in my freshman and sophomore years.\n" +
            "        In FRC, we build 120 pound robots that have to compete in a certain challenge. Last year’s challenge was called \"Deep Space.\" The challenge was to build a robot\n" +
            "        that could pick up discs and balls and place them in different areas on the field to earn point.. My team won the Chairman's Award (the most prestigious\n" +
            "        FRC award) last year and qualified for the FIRST World Championship in Detroit. The team also qualified for the World Championship in my freshman year, and at the competition,\n" +
            "        our alliance got first place in our division and we qualified for the Einstein Field, which includes the top 24 teams in the entire competition. This year, I am looking forward to joining Mass\n" +
            "        Academy's FRC team, Gompei and the H.E.R.D.",
        img: "Images/FRC.jpg",
        alt: "FRC"
    };
    $scope.paragraph4.p = [$scope.paragraph4.text];

    $scope.paragraph5 = {
        text1: "At Mass Academy, so far, I have joined the CAD (computer aided design) club, math team, actuarial math club, and the disc golf team. In CAD, we have used SolidWorks for 3D modeling. So far, we have created our own key fobs, stamps, and we are currently working on creating ramps for use in physics classroom demonstrations in nearby schools.\n",

        text2: "In math team, the main competition that we compete in is WOCOMAL, or Worcester County Math League. We also compete in a few other competitions such as \"Who Wants to be a Mathematician,\" the AMC/AIME, and the MAML Olympiad (Massachusetts Association of Mathematics Leagues).\n",

        text3: "Actuarial math focuses on math problems that deal with money and interest rates. The questions involve calculating the value of money over time, while accounting for factors such as interest rates and new deposits. There are also questions involving insurance which depend on the probability that a person will be alive at the end of a given period of time, which makes the questions much more interesting.\n",

        text4: "Disc golf is similar to normal golf, except that instead of hitting a golf ball with a club, we throw frisbees and try to get them into baskets.",
        img: "Images/mams.png",
        alt: "Mass Academy"
    };
    $scope.paragraph5.p = [$scope.paragraph5.text1, $scope.paragraph5.text2, $scope.paragraph5.text3, $scope.paragraph5.text4];

    $scope.paragraphs = [$scope.paragraph1, $scope.paragraph2, $scope.paragraph3, $scope.paragraph4, $scope.paragraph5];

}]);

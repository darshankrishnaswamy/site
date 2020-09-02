app.controller('StemController', ['$scope', function($scope) {
    $scope.paragraph1 = {
        text1: "STEM at Mass Academy is taught by Dr. Crowthers. In STEM, we learn how to properly create and present a science project. We have learned\n" +
            "    about the engineering design process, how to effectively brainstorm ideas, and how to develop strategies for troubleshooting when things" +
            " go wrong with out projects.",
        text2: "My STEM Project is a set of neural networks that help visually-impaired pedestrians know when it is safe to cross the street. It currently\n" +
            "        uses live object detection to locate images containing pedestrian traffic lights and categorize them as either green or red. I am currently\n" +
            "        working on setting up object detection so that it is able to locate the traffic light in the image, which will help to increase the accuracy of the neural network.",
        cls: "",
        title: "",
        img: ""
    };
}]);

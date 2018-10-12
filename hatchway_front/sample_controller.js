
    var app = angular.module('myApp', ['ngAnimate']);
    app.controller('myController',
        function ($scope, $http) {

            var request = {
                method: 'get',
                url: 'https://www.encodedna.com/angularjs/tutorial/birds.json',
                dataType: 'json',
                contentType: "application/json"
            };

            $scope.arrBirds = new Array;

            $http(request)
                .success(function (jsonData) {
                    $scope.arrBirds = jsonData;
                    $scope.list = $scope.arrBirds;
                    $scope.list.description=$scope.description;
                    $scope.birdinfo=[];     

  // Now, whenever the button is clicked, this method is run.
                     $scope.submitFormBird = function(id,name,type) {
                        $scope.newBird={ID:id, Name:name, Type:type};
                        $scope.list.push($scope.newBird);
                        $scope.id="";
                        $scope.name="";
                        $scope.type="";
                     };

  
                    $scope.submitForm = function(description) {
                        $scope.list.description=description;
                        $scope.birdinfo.push(description);
                        $scope.saved="saved"
                        $scope.birdlist=$scope.list;


                     };

               
                    $scope.orderByMe = function(x) {
                     $scope.myOrderBy = x;
                     }
                })
                .error(function () {

                });



        });


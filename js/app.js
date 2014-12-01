var module = ons.bootstrap('app', ['onsen']);
module.controller('AppController', function($scope) {

$scope.settingsData = {};    
    
$scope.settingsData.cycleNumber = 1;
$scope.settingsData.weekNumber  = 1;
$scope.settingsData.DayNumber   = 1;
$scope.settingsData.upperInc    = 2.5;
$scope.settingsData.lowerInc    = 5;
$scope.settingsData.benchStart  = 105;
$scope.settingsData.OHPStart    = 65;
$scope.settingsData.DLStart     = 170;
$scope.settingsData.squatStart  = 110;
    
$scope.setWorkout = function(){
    if($scope.settingsData.DayNumber%2==1){
        myNavigator.pushPage('benchAndOverheadpress.html', { animation : 'none' } );
    }
    else{
        myNavigator.pushPage('squatsAndDeadlifts.html', { animation : 'none' } );
    }
};
    
$scope.nextWorkout = function(){
    if(parseInt($scope.settingsData.DayNumber)<4){
        $scope.settingsData.DayNumber=parseInt($scope.settingsData.DayNumber)+1;
    }
    else{
        $scope.settingsData.DayNumber = 1;
        if(parseInt($scope.settingsData.weekNumber)<4){
            $scope.settingsData.weekNumber=parseInt($scope.settingsData.weekNumber)+1;    
        }
        else{
            $scope.settingsData.weekNumber=1;
            $scope.settingsData.cycleNumber=parseInt($scope.settingsData.cycleNumber)+1;
        }
    }
    if(!$scope.$$phase){
        $scope.$apply()
    }
    $scope.changeSettings();
    $scope.setWorkout(); 
};

$scope.prevWorkout = function(){
    if(parseInt($scope.settingsData.DayNumber)>1){
        $scope.settingsData.DayNumber=parseInt($scope.settingsData.DayNumber)-1;
    }
    else{
        $scope.settingsData.DayNumber = 4;
        if(parseInt($scope.settingsData.weekNumber)>1){
            $scope.settingsData.weekNumber=parseInt($scope.settingsData.weekNumber)-1;    
        }
        else{
            $scope.settingsData.weekNumber = 4;
            $scope.settingsData.cycleNumber=parseInt($scope.settingsData.cycleNumber)-1;
        }
    }
    if(!$scope.$$phase) {
        $scope.$apply()
    }
    $scope.changeSettings();
    $scope.setWorkout(); 
};
    
$scope.changeSettings = function(){
    var daySess;
    if(parseInt($scope.settingsData.DayNumber) == 1 || parseInt($scope.settingsData.DayNumber) == 2){
       daySess = 1; 
    }
    else{
        daySess = 2    
    }
    var workoutNum = (parseInt($scope.settingsData.weekNumber)-1)*2 + daySess;
    var benchWeight = parseFloat($scope.settingsData.benchStart) + (parseFloat($scope.settingsData.cycleNumber)-1)*parseFloat($scope.settingsData.upperInc);
    var OHPWeight = parseFloat($scope.settingsData.OHPStart) + (parseFloat($scope.settingsData.cycleNumber)-1)*parseFloat($scope.settingsData.upperInc);
    var DLWeight = parseFloat($scope.settingsData.DLStart) + (parseFloat($scope.settingsData.cycleNumber)-1)*parseFloat($scope.settingsData.lowerInc);
    var squatWeight = parseFloat($scope.settingsData.squatStart) + (parseFloat($scope.settingsData.cycleNumber)-1)*parseFloat($scope.settingsData.lowerInc);
    
    $scope.updateWorkout($scope.benchs,benchWeight,workoutNum);
    $scope.updateWorkout($scope.overheadpresss,OHPWeight,workoutNum);
    $scope.updateWorkout($scope.deadlifts,DLWeight,workoutNum);
    $scope.updateWorkout($scope.squats,squatWeight,workoutNum);

    if(!$scope.$$phase) {
        $scope.$apply()
    }
};

$scope.updateWorkout = function(arr,weights,num){
    for(i=0;i<arr.length;i++){
        if(i<(arr.length - num)){
            arr[i].reps = 2;
        }
        else{
            arr[i].reps = 3;
        }
        arr[i].weight = weights;
    }
};
    
$scope.squats = [
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 3,
            weight: 100
        }
    ];
$scope.deadlifts = [
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 3,
            weight: 100
        }
    ];
$scope.benchs = [
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 3,
            weight: 100
        }
    ];
$scope.overheadpresss = [
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 2,
            weight: 100
        },
        {
            reps: 3,
            weight: 100
        }
    ];

    ons.ready(function() {
        $scope.changeSettings();
        $scope.setWorkout();
    });
});




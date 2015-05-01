app.controller('navController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            if (path == "/" && $location.path() == "/") {
                return true;
            } else if (path == "/") {
                return false;
            }
            return true;
        }
        return false;
    };
}]);

app.controller('homeController', ['$scope', function ($scope) {
    $('#pg-home').fadeIn();
    $('#pg-home h3').delay(750).fadeIn();
}]);

app.controller('productController', ['$scope', function ($scope) {
    $scope.index = 0;
    $scope.screens = [
        {
            url: 'img/screens/welcome.png',
            description: 'Download Clutch to get access to ALL retailers using our product.'
    },
        {
            url: 'img/screens/existing.png',
            description: 'Immediately see existing deals.'
    },
        {
            url: 'img/screens/personalized.png',
            description: 'As you browse, personalized coupons will be served for items you want.'
    },
        {
            url: 'img/screens/checkout.png',
            description: 'Treat our coupons like any other coupon. Present it at the sales counter and save!'
    }];

    $scope.showNextScreen = function () {
        $scope.index = ($scope.index + 1) % $scope.screens.length;
    }

    $scope.showPrevScreen = function () {
        $scope.index = ($scope.index - 1) % $scope.screens.length;
    }

    $scope.hasNextScreen = function () {
        return $scope.index < $scope.screens.length - 1;
    }

    $scope.hasPrevScreen = function () {
        return $scope.index > 0;
    }

    $('#pg-product').fadeIn();
}]);

app.controller('shoppersController', ['$scope', function ($scope) {
    $('#pg-shoppers').fadeIn();

    $scope.showMore = function () {
        $('.bg-img, #shoppers-learn-btn').fadeOut(500);
        $('#shoppers-signup-btn').delay(500).fadeIn(500);
        $('#shoppers-info').slideDown(1000);
    };
}]);

app.controller('retailersController', ['$scope', function ($scope) {
    $('#pg-retailers').fadeIn();

    $scope.showMore = function () {
        $('.bg-img, #retailers-learn-btn').fadeOut(500);
        $('#retailers-signup-btn').delay(500).fadeIn(500);
        $('#retailers-info').slideDown(1000);
    };
}]);

app.controller('detailsController', ['$scope', function ($scope) {
    $('#pg-details').fadeIn();
}]);

app.controller('aboutController', ['$scope', function ($scope) {
    $('#pg-about').fadeIn();
}]);
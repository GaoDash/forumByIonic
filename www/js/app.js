
angular.module('app', ['ionic', 'app.controllers', 'app.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//AndroidTabs默认在顶部，该项配置使Tabs在底部
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position("bottom");
})


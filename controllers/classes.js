(function() {
  'use strict';
  console.log('classes!');

  const app = angular.module('classApp', []);

  app.controller('classCtrl', function($scope, $rootScope) {

    $rootScope.classes = [
      {
        id: 1,
        name: 'Intro to Explosives',
        teacher: 'Junkrat',
        students: [
          {
            name: 'Johnny Fakename',
            grade: 'A'
          }
        ]
      },
      {
        id: 2,
        name: 'Musical Healing',
        teacher: 'Lucio',
        students: [
          {
            name: 'Barry Manilow',
            grade: 'C+'
          }
        ]
      }
    ];


  });
}());

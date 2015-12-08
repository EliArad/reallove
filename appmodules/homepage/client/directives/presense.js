app.factory('presenseStates', function($presence) {

  var states = {
    ACTIVE : 0, // enter this state immediately after user-action
    INACTIVE : 1000 // enter this state after 1 second without any registered events
  }
  return $presence.init(states);
})

var Pubsub = {};

(function(obj) {
  var observers = {};

  obj.publish = (notif, data) => {
    if (!observers[notif]) {
      return false;
    }

    let subs = observers[notif];

    for (var subscriber of subs) {
      subscriber.callback(data);
    }
    //console.log('publishers are: ' + JSON.stringify(subs[0]));
  };

  obj.subscribe = (notif, subscriber, cb) => {
    if (!observers[notif]) {
      observers[notif] = [];
    }

    observers[notif].push({
      observer: subscriber,
      callback: cb
    });
    //console.log('subscribers are: ' + JSON.stringify(observers));
  };

  obj.unsubscribe = (notif, subscriber) => {
    let subs = observers[notif];

    for (var i in subs) {
      if (subs[i].observer === subscriber) {
        subs.splice(i, 1);
        observers[notif] = subs;
        return;
      }
    }
  };
})(Pubsub);

export default Pubsub;


let _callbacks = [];
 
class Dispatcher {
 
    // Register a store callback.
    register(callback) {
        console.log("callback")
        let id = 'callback_' + _callbacks.length;
        _callbacks[id] = callback;
        return id;
    }
 
    // Dispatch an action.
    dispatch(action) {
        for (var id in _callbacks) {
            _callbacks[id](action);
            console.log("dispatch")
        }
    }
}

export default new Dispatcher();
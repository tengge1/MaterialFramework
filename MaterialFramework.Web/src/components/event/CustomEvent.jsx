import { dispatch } from 'd3-dispatch';

class CustomEvent {
    constructor(eventNames) {
        this.dispatch = dispatch.apply(dispatch, eventNames);
    }

    call(eventName) {
        this.dispatch.call.apply(this.dispatch, arguments);
    }

    on(eventName, callback) {
        this.dispatch.on(eventName, callback);
    }
}

export default CustomEvent;
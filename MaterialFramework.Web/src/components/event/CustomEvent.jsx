import { dispatch } from 'd3-dispatch';

class CustomEvent {
    constructor(eventNames) {
        this.dispatch = dispatch.apply(dispatch, eventNames);
    }

    call(eventName, _this, ...others) {
        this.dispatch.call(eventName, _this, ...others);
    }

    on(eventName, callback) {
        this.dispatch.on(eventName, callback);
    }
}

export default CustomEvent;
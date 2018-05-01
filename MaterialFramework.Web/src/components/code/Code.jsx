import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import '../../assets/css/CodeMirror.css';
import CodeMirror from 'codemirror';
import 'codemirror/mode/jsx/jsx.js';

class Code extends React.Component {
    componentDidMount() {
        CodeMirror.fromTextArea(this.refs.textarea1, {
            lineNumbers: true,
            mode: 'jsx',
            theme: 'monokai',
            lineWrapping: true,
            height: 'auto'
        });
    }

    render() {
        const { children, ...others } = this.props;
        return <textarea ref={'textarea1'} value={children} {...others} readOnly></textarea>;
    }
}

export default Code;
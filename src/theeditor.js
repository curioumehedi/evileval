import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

function EvilEditor(props){
    return (<AceEditor
        mode="javascript"
        theme="monokai"
        name="evileval"
        style={props.style}
        value={props.value}
        onChange={props.onChange}
        fontSize={props.fontSize||20}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
            showLineNumbers: true,
            tabSize: 2,
        }}/>);
}
export default EvilEditor;

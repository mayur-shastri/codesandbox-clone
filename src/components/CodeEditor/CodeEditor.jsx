import React from 'react'
import Editor from '@monaco-editor/react';

function CodeEditor() {
    return (
        <div  className='flex'>
            {/* Folder Structure component beside the editor */}
            <div className='flex flex-col justify-center items-center h-screen'>
                <Editor height="90vh"
                    width="500px"
                    theme='vs-dark'
                    defaultLanguage="javascript"
                    defaultValue="//comment"
                />
            </div>
        </div>
    );
}

export default CodeEditor
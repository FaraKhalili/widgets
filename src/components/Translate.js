import React, { useState } from 'react';
import DropDown from './DropDown';
import Convert from './Convert';

const options = [
    {
        label: 'AfriKaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];


const Translate = () => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState(options[0]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Text </label>
                    <input value={text} onChange={(e) => { setText(e.target.value) }} />
                </div>

            </div>

            <DropDown
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr/>
            <h3 className="ui header" > Output</h3>
            <Convert  language={language} text={text}/>

        </div>);
};

export default Translate;
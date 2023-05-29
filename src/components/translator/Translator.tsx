import { useState } from 'react';
import { LangaugeSelector } from '../languageSelector/languageSelector';
import { Language } from '../../model/Languages';
import { Spinner } from '../spinner/spinner';
import './traslator.css';
import { translateText } from '../../utils';

export const Traslator = () => {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [languageOrigin, setLanguageOrigin] = useState<Language>(Language.Spanish);
    const [languageTarget, setLanguageTarget] = useState<Language>(Language.English);
    const [loading, setLoading] = useState<boolean>(false);

    const handleTranslate = async () => {
        setLoading(true);
        try {
            const translation = await translateText(text, languageOrigin, languageTarget);
            translation && setTranslatedText(translation);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Spinner loading={loading} />
            <div className="traslator-container">
                <button
                    onClick={handleTranslate}
                    disabled={!text || loading}
                    className="translator-button"
                >
                    Traducir
                </button>
                <div className="textarea-container">
                    <div className="textarea-item">
                        <LangaugeSelector
                            selectedLanguage={languageOrigin}
                            setSelectedLanguage={setLanguageOrigin}
                        />
                        <textarea
                            className="textarea"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <div className="textarea-item">
                        <LangaugeSelector
                            selectedLanguage={languageTarget}
                            setSelectedLanguage={setLanguageTarget}
                        />
                        <textarea
                            className="textarea"
                            value={translatedText}
                            disabled
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

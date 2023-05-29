import { FC } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Language } from '../../model/Languages';
import './languageSelector.css';

interface LanguageSelectorProps {
    selectedLanguage: Language;
    setSelectedLanguage: (language: Language) => void;
}

export const LangaugeSelector: FC<LanguageSelectorProps> = ({ selectedLanguage, setSelectedLanguage }) => {
    const handleFlagClick = (_event: any, countryCode: Language) => {
        setSelectedLanguage(countryCode);
    };
    return (
        <div className="flagContainer">
            <ReactCountryFlag
                countryCode={Language.English}
                key={Language.English}
                svg
                className={selectedLanguage === Language.English ? 'selectedFlag' : 'flag'}
                title={Language.English}
                onClick={(_event) => handleFlagClick(_event, Language.English)}
            />
            <ReactCountryFlag
                countryCode={Language.Spanish}
                key={Language.Spanish}
                svg
                className={selectedLanguage === Language.Spanish ? 'selectedFlag' : 'flag'}
                title={Language.Spanish}
                onClick={(_event) => handleFlagClick(_event, Language.Spanish)}
            />
            <ReactCountryFlag
                countryCode={Language.French}
                key={Language.French}
                svg
                className={selectedLanguage === Language.French ? 'selectedFlag' : 'flag'}
                title={Language.French}
                onClick={(_event) => handleFlagClick(_event, Language.French)}
            />
            <ReactCountryFlag
                countryCode={Language.German}
                key={Language.German}
                svg
                className={selectedLanguage === Language.German ? 'selectedFlag' : 'flag'}
                title={Language.German}
                onClick={(_event) => handleFlagClick(_event, Language.German)}
            />
            <ReactCountryFlag
                countryCode={Language.Italian}
                key={Language.Italian}
                svg
                className={selectedLanguage === Language.Italian ? 'selectedFlag' : 'flag'}
                title={Language.Italian}
                onClick={(_event) => handleFlagClick(_event, Language.Italian)}
            />
        </div>
    );
};

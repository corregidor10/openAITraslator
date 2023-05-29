import { FC } from 'react';
import './spinner.css';
export interface SpinnerProps {
    loading: boolean;
}
export const Spinner: FC<SpinnerProps> = ({ loading }) => {
    return (
        <>
            {loading && (
                <div className="preloader">
                    <span className="message">Thinking...</span>
                    <div className="loader"></div>
                </div>
            )}
        </>
    );
};

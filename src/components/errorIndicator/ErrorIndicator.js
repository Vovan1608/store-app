import './ErrorIndicator.css';
const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            {/* <img src={icon} alt="error icon" /> */}
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
        </div>
    );
};

export default ErrorIndicator;

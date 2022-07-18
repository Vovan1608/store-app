import ErrorBoundary from '../errorBoundary';

const App = () => {
    return (
        <ErrorBoundary error={false}>
            <div>
                Hello
            </div>
        </ErrorBoundary>
    );
}

export default App;

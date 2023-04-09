import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//==========================================
import Dictionary from '../Dictionary/Dictionary';
//==========================================
import GlobalStyles from '../../styles/global'
import { store, persistor } from '../../redux/store';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Dictionary />
                </PersistGate>
            </Provider>
            <GlobalStyles />
        </>
    );
}

export default App;
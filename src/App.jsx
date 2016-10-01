import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import SearchBox from './containers/SearchBox';
import ResultList from './containers/ResultList';
import store from './store/configureStore';

class App extends Component {
    render() {
        return (
            <div>
                <SearchBox/>
                <ResultList/>
            </div>
        );
    }
}

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

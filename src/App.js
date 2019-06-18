import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers'; 
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyBaKNi7foYe7WgJEq5PRqmI9tuQOoWc2cg',
			authDomain: 'manager-30f6a.firebaseapp.com',
			databaseURL: 'https://manager-30f6a.firebaseio.com',
			projectId: 'manager-30f6a',
			storageBucket: 'manager-30f6a.appspot.com',
			messagingSenderId: '263933171604',
			appId: '1:263933171604:web:94a03eb68d88483b'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
		<Provider store={store}>
			<Router />
		</Provider>
		);
	}
}

export default App;


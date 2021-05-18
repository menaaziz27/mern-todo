import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CreateTodo } from './components/CreateTodo';
import { TodoEdit } from './components/TodoEdit';
import { TodoList } from './components/TodoList';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/" exact component={TodoList} />
				<Route path="/create" component={CreateTodo} />
				<Route path="/:id" component={TodoEdit} />
			</Switch>
		</div>
	);
}

export default App;

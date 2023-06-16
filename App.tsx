import {ShowContentProvider} from './src/contexts/useShowContent';
import Home from './src/pages/Home';

export default function App() {
	return (
		<ShowContentProvider>
			<Home />
		</ShowContentProvider>
	);
}

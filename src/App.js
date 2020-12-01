import Gallery from './Gallery';
import './App.css';

function App() {
	return (
		<div style={{ display: 'flex' }}>
			<Gallery controls={true}>
				<img
					alt='test'
					src='https://d2wddn0t8pomzy.cloudfront.net/eyJidWNrZXQiOiJraXR0eWdyYW0iLCJrZXkiOiJ0bHVwZXI5NC9raXR0eTguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwfX19'
				/>
				<img
					alt='test'
					src='https://d2wddn0t8pomzy.cloudfront.net/eyJidWNrZXQiOiJraXR0eWdyYW0iLCJrZXkiOiJ0bHVwZXI5NC9raXR0eTEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwfX19'
				/>
				<img
					alt='test'
					src='https://d2wddn0t8pomzy.cloudfront.net/eyJidWNrZXQiOiJraXR0eWdyYW0iLCJrZXkiOiJ0bHVwZXI5NC9raXR0eTEucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwfX19'
				/>
			</Gallery>
		</div>
	);
}
export default App;

import Gallery from './components/Gallery';
import './App.css';

function App() {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			<div style={{ margin: '10px' }}>
				<Gallery width='80vw' height='10vw'></Gallery>
			</div>

			<div style={{ margin: '10px' }}>
				<Gallery width='30vw' height='30vw' dots={{ color: 'red', size: '1.5vw' }}>
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
					<img
						alt='test'
						src='https://d2wddn0t8pomzy.cloudfront.net/eyJidWNrZXQiOiJraXR0eWdyYW0iLCJrZXkiOiJ0bHVwZXI5NC9raXR0eTguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwfX19'
					/>
					<img
						alt='test'
						src='https://d2wddn0t8pomzy.cloudfront.net/eyJidWNrZXQiOiJraXR0eWdyYW0iLCJrZXkiOiJ0bHVwZXI5NC9raXR0eTguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwfX19'
					/>
					<img
						alt='test'
						src='https://d2wddn0t8pomzy.cloudfront.net/eyJidWNrZXQiOiJraXR0eWdyYW0iLCJrZXkiOiJ0bHVwZXI5NC9raXR0eTguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwfX19'
					/>
					<img
						alt='test'
						src='https://d2wddn0t8pomzy.cloudfront.net/eyJidWNrZXQiOiJraXR0eWdyYW0iLCJrZXkiOiJ0bHVwZXI5NC9raXR0eTguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImhlaWdodCI6NzUwfX19'
					/>
				</Gallery>
			</div>

			<div style={{ margin: '10px' }}>
				<Gallery
					width='200px'
					height='200px'
					controls={{ color: '#fff', size: '2vw', weight: 'fill' }}
					dots={{ responsive: 'true', color: 'black', size: '1.5vw' }}
				>
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
		</div>
	);
}
export default App;

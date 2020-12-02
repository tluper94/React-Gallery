import Gallery from './Gallery';
import './App.css';

function App() {
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
			<Gallery
				width='80vw'
				height='30vw'
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
			<Gallery
				width='30vw'
				height='30vw'
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
			<Gallery
				width='30vw'
				height='30vw'
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
	);
}
export default App;

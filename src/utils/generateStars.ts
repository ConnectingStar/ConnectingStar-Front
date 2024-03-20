export default function generateStars() {
	const stars = [];
	const numberOfStars = 200;

	for (let i = 0; i < numberOfStars; i++) {
		const cx = Math.random() * window.innerWidth;
		const cy = Math.random() * window.innerHeight;
		const r = Math.random() * 1;
		stars.push({
			id: i,
			cx,
			cy,
			r,
		});
	}

	return stars;
}

import React from 'react'

function YouTubePlayer({ videoId }) {
	return <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0" height="315"
		src={"https://www.youtube.com/embed/" + videoId + "?rel=0"} width="560" style={{ display: 'block', margin: '0 auto' }}></iframe>
}


export default YouTubePlayer
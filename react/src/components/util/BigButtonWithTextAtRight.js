import React from 'react'
import { Link } from "react-router-dom"
import GetHtmlStrLocalized from '../../datas/GetHtmlStrLocalized';
import GetStrLocalized from '../../datas/GetStrLocalized';


function BigButtonWithTextAtRight({ id, language, item }) {

	if (item.image === "") {
		item.image = item.sourceImage;
	}
	let versesStr = ""
	if (item.firstVerse !== "") {
		if (item.lastVerse !== "") {
			versesStr += GetStrLocalized(language, "verses") + ` ${item.firstVerse}-${item.lastVerse}`
		} else {
			versesStr += GetStrLocalized(language, "verse") + ` ${item.firstVerse}`

		}
	}

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var hc_players = {}
	var hc_playersAreVisible = {}

	function Bb_loadYoutubeVideo() {

		if (hc_playersAreVisible[id] == null) {
			hc_players[id] = new window.YT.Player('hc-youtube-video-placeholder-id-'.concat(id), {
				videoId: item.youtubeId,
				playerVars: {
					'rel': 0
				},
				events: {
					onReady: Bb_onPlayYoutube.bind(null)
				}
			});
			hc_playersAreVisible[id] = 1;
		} else if (hc_playersAreVisible[id] === 1) {
			try {
				hc_players[id].pauseVideo();
				document.getElementById('hc-youtube-video-placeholder-id-'.concat(id)).style.display = 'none';
				document.getElementById('hc-youtube-video-view-id-'.concat(id)).style.display = 'block';
				document.getElementById('hc-youtube-video-link-id-'.concat(id)).innerHTML = GetStrLocalized(language, "listen");
				hc_playersAreVisible[id] = 0;
			} catch (error) {
				console.error(error);
			}
		} else {
			Bb_onPlayYoutube();
			hc_playersAreVisible[id] = 1;
		}
	}

	function Bb_onPlayYoutube() {
		let videoPlaceholder = document.getElementById('hc-youtube-video-placeholder-id-'.concat(id));
		videoPlaceholder.style.display = 'block';
		videoPlaceholder.classList.add('hc-big-button-search-width');
		videoPlaceholder.classList.add('hc-big-button-search-height');
		document.getElementById('hc-youtube-video-view-id-'.concat(id)).style.display = 'none';
		hc_players[id].playVideo();
		document.getElementById('hc-youtube-video-link-id-'.concat(id)).innerHTML = GetStrLocalized(language, "stop");
	}

	return (
		<React.Fragment>
			<table style={{ width: '100%' }}>
				<tbody>
					<tr>
						<td className="hc-big-button-search-width">
							<Link id={'hc-youtube-video-view-id-' + id} style={{ color: 'white', textAlign: 'left', idth: '100%', textDecoration: 'none', outline: 'none' }} to={item.link}>
								<div className="hc-big-button-search-width hc-big-button-search-height hc-center-background-image" style={{ position: 'relative', borderRadius: 10, borderWidth: 0, backgroundImage: 'url(' + item.image + ')' }}>
									{item.duration !== "" && <span className="hc-big-button-search-durationtop" style={{ position: 'absolute', backgroundColor: 'black', padding: 3, right: 8 }}>{item.duration}</span>}
								</div>
							</Link>
							<div id={'hc-youtube-video-placeholder-id-' + id} style={{ display: 'none' }} />
						</td>
						<td className="hc-big-button-text-at-right-padding">
							<b className='hc-button-title-style'>{item.title}</b>
							<span style={{ color: '#22292f' }}><p>{id !== "" && <React.Fragment> <button id={'hc-youtube-video-link-id-' + id} style={{ cursor: 'pointer' }} onClick={Bb_loadYoutubeVideo} ><GetHtmlStrLocalized language={language} textId="listen" /> </button> &nbsp; </React.Fragment>}{item.tags}</p></span>
							<p><span style={{ textAlign: 'left', color: '#22292f' }}>{item.sourceImage !== "" && <img src={item.sourceImage} alt='Source logo' width="23" height="23" style={{ marginRight: 13 }} />}{item.sourceName}</span></p>
							<span>{versesStr}</span>
						</td>
					</tr>
				</tbody>
			</table>
		</React.Fragment>
	)
}

export default BigButtonWithTextAtRight
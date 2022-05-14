import React from 'react'
import { Link } from "react-router-dom"
import GetStrLocalized from '../../datas/GetStrLocalized';


function BigButtonWithTextAtRight({ language, link, image, duration, title, tags, sourceImage, sourceName, firstVerse = "", lastVerse = "" }) {

	if (image === "") {
		image = sourceImage;
	}
	let versesStr = ""
	if (firstVerse !== "") {
		if (lastVerse !== "") {
			versesStr += GetStrLocalized(language, "verses") + ` ${firstVerse}-${lastVerse}`
		} else {
			versesStr += GetStrLocalized(language, "verse") + ` ${firstVerse}`

		}
	}

	return (
		<React.Fragment>
			<table style={{ width: '100%' }}>
				<tbody>
					<tr>
						<td className="hc-big-button-search-width">
							<Link id='hc-youtube-video-view-id-0' style={{ color: 'white', textAlign: 'left', idth: '100%', textDecoration: 'none', outline: 'none' }} to={link}>
								<div className="hc-big-button-search-width hc-big-button-search-height hc-center-background-image" style={{ position: 'relative', borderRadius: 10, borderWidth: 0, backgroundImage: 'url(' + image + ')' }}>
									{duration !== "" && <span className="hc-big-button-search-durationtop" style={{ position: 'absolute', backgroundColor: 'black', padding: 3, right: 8 }}>{duration}</span>}
								</div>
							</Link>
							<div id='hc-youtube-video-placeholder-id-0' style={{ display: 'none' }} />
						</td>
						<td className="hc-big-button-text-at-right-padding">
							<b className='hc-button-title-style'>{title}</b>
							<span style={{ color: '#22292f' }}><p>{tags}</p></span>
							<p><span style={{ textAlign: 'left', color: '#22292f' }}>{sourceImage !== "" && <img src={sourceImage} alt='Source logo' width="23" height="23" style={{ marginRight: 13 }} />}{sourceName}</span></p>
							<span>{versesStr}</span>
						</td>
					</tr>
				</tbody>
			</table>
		</React.Fragment>
	)
}

export default BigButtonWithTextAtRight
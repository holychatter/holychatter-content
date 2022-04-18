import '../assets/resources/custom/style/main-6.css'
import image_logo from '../assets/upload/holy_chatter_logo.png'
import React from 'react';


function Banner() {
	return (
<React.Fragment>
		<div className='hc-fixed-banner'>
		<span style={{ display: 'block', height: 13 }}></span>
			<table style={{ width: '100%' }}>
			<tbody>
					<tr>
						<td id='open-close-nav-bar-btn-id' unselectable='on' className='hc-top-bar-menu-button-css' style={{ paddingTop: 7, paddingLeft: 20, fontSize: 23, cursor: 'pointer' }}>&#9776;</td>
						<td className="hc-top-bar-sides-css">
							<a style={{ outline: 0 }}>
								<img title="Holy Chatter" unselectable="on" src={image_logo} className="hc-main-logo unselectable" />
							</a>
						</td>

						<td>

							<table className="hc-not-very-short-screen hc-top-bar-center-css" style={{ width: "100.0%", height: 40 }}>
								<tbody>
									<tr>
										<td style={{ width: "20.0%" }}></td>
										<td style={{ width: "55.0%" }}>
											<input id='search-input' type='text' className='form-control' placeholder='Search' style={{ height: 24 }} />
										</td>
										<td style={{ paddingLeft: 27, width: "5.0%" }}>
											<button id="search-button" type="submit" className="btn-primary hc-search-btn unselectable btn" style={{ width: 48, height: 37, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 5 }}></button>
										</td>
										<td style={{ width: "20.0%" }}></td>
									</tr>
								</tbody>
							</table>



						</td>


						<td style={{paddingTop: 5}} className="hc-top-bar-sides-css">

							<table>
								<tbody>
									<tr>
										<td><span title="Options">Options</span></td>
										<td><span title="Youtube channel">Youtube channel</span></td>
									</tr>
								</tbody>
							</table>

						</td>

					</tr>
				</tbody>
			</table>
			<span style={{ display: 'block', height: 13 }}></span>
		</div>
		<div className='hc-main'>
			<div className="hc-content-text" style={{ textAlign: 'center', margin: '0 auto', marginTop: 50, marginBottom: 25 }}>
				holychatter@gmail.com
			</div>
		</div>
	</React.Fragment>
	)
	
}

export default Banner

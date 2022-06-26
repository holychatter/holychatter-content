import { Link } from "react-router-dom"
import image_house_over from '../../assets/resources/custom/images/house_over.png'
import image_house_out from '../../assets/resources/custom/images/house_out.png'

function H1TitleBreadcrumb({ language, parentFolders, children }) {

    function onMouseOverHome(e) {
        e.target.src = image_house_over;
    }

    function onMouseOutHome(e) {
        e.target.src = image_house_out;
    }

    return (
        <div className='hc-text-align-center'>
            <ol className="breadcrumb" style={{ marginTop: 0, fontSize: 14 }}>
                <li><Link to={"/" + language + "/categories"}><img border="0" onMouseOver={onMouseOverHome} onMouseOut={onMouseOutHome} src={image_house_out} alt="home" width="14px" height="14px" /></Link></li>
                {
                    parentFolders !== "" &&
                    parentFolders.map((item, index) => {
                        return <li key={"breadcrumb-elt-" + index} ><Link to={"/" + language + "/categories/" + item.id}>{item.name}</Link></li>
                    })
                }
            </ol>

            <div>
                <h1 className='hc-h1-not-main-title'>{children}</h1>
            </div>
        </div>
    )
}

export default H1TitleBreadcrumb

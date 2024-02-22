import "./style.scss"
import {Link} from 'react-router-dom'
import girls from '../../assets/collection/girls.svg'
import arrow from '../../assets/icons/arrow.svg'

const CollectionSec = () => {
  return (
    <div className="CollectionSec">
        <div className="linkBox">
            <div className="miniBox">
                <Link>
                    <span>Gelora Collection</span>
                    <img src={arrow} alt="" />
                </Link>
            </div>
            <div className="miniBox">
                <Link>
                    <span>GEMASH X Cupicupita</span>
                    <img src={arrow} alt="" />
                </Link>
            </div>
            <div className="miniBox">
                <Link>
                    <span>Selaras Collection</span>
                    <img src={arrow} alt="" />
                </Link>
            </div>
            <div className="miniBox">
                <Link>
                    <span>Camo Collection</span>
                    <img src={arrow} alt="" />
                </Link>
            </div>
        </div>
        <div className="imgBox">
            <img src={girls} alt="" />
        </div>
    </div>
  )
}

export default CollectionSec
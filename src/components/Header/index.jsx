import './style.scss'
import {Link} from 'react-router-dom'

const Header = () => {


  return (
    <header>
        <div className="linkBox">
            <Link>
                <span>Payday Deals</span>
            </Link>
        </div>
        
        <div className="linkBox">
            <Link>
                <span>Best Seller</span>
            </Link>
        </div>

        <div className="linkBox">
            <Link>
                <span>Top</span>
            </Link>
        </div>

        <div className="linkBox">
            <Link>
                <span>Bottom</span>
            </Link>
        </div>

        <div className="linkBox">
            <Link>
                <span>Lifestyle</span>
            </Link>
        </div>
        <div className="linkBox" >
            <Link>
                <span>About</span>
            </Link>
        </div>


    </header>
  )
}

export default Header
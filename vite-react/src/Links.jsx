
import { Link } from "react-router-dom"
export default function Links() {
    return (
    <>
        {/* Navigation Buttons */}
        <nav style={{ margin: '10px' }}>
            <Link to="/" style={{ marginRight: '10px' }}>
                <button>Home</button>
            </Link>
            <Link to="/chai">
                <button>Chai</button>
            </Link>
        </nav>
    </>
    )
}
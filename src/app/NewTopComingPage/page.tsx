import NewReleasePage from "../NewReleasePage/page"
import TopPlayedPage from "../TopPlayedPage/page"
import ComingSoonPage from "../ComingSoonPage/page"
import SpotLight2Page from "../SpotLight2Page/page"
import ExplorePage from "../ExplorePage/page"
import './page.css'
export default function page() {
    return (
        <>
            <div className='New_top_coming_container'>
                <NewReleasePage/>
                <TopPlayedPage/>
                <ComingSoonPage/>
            </div>
            <div className="spotlight_container">
                <SpotLight2Page/>
            </div>
            <div className="spotlight_container">
                <ExplorePage/>
            </div>
        </>
    )
}
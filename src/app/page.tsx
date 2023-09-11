// import Navbar from "./Navbar/page";
import HomePage from "./HomePage/page";
import GamesPage from "./GamesPage/page";
import ClansPage from "./ClansPage/page";
import PhoneHome from "./PhoneHome/page";
import OtherPage from './OtherPage/page';
import NewTopComingPage from './NewTopComingPage/page';
import JoinPage from "./JoinPage/page";
import FooterPage from "./FooterPage/page";
export default function Home() {
  return (
    <>
    <div className="page_container">
       {/* <Navbar />   */}
        <PhoneHome/>
        <HomePage />
        <GamesPage />
        <ClansPage />
        <OtherPage />
        <NewTopComingPage />
        <JoinPage />
        <FooterPage/>
      </div>
    </>
  )
}

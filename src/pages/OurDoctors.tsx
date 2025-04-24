import Book from "../components/Book";
import GetInTouch from "../components/GetInTouch";
import TeamCarousel from "../components/TeamCarousel";

export default function OurDoctors() {
  return (
    <div className="min-h-screen pt-32 bg-black"> {/* Fixed div typo and added classes */}
      <TeamCarousel />
      <Book />
      <GetInTouch />
    </div>
  )
}
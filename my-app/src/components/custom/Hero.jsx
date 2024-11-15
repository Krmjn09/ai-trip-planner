import { Button } from "../ui/button"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-6">
      <h1 className="font-extrabold text-[60px] mt-16">
        <span className="text-[#aa6f73]">Use EMO -</span> <br></br>Your Personal
        Travel AI guide 🚀
      </h1>
      <p className="text-[#aa6f73] text-[18px] mt-4">
        Plan your next trip with EMO. Discover the best places to visit, eat,
        and stay. <br></br>Get personalized recommendations based on your
        preferences.
      </p>
      <Link to="/create-trip">
        <Button>Get Started</Button>
      </Link>
    </div>
  )
}

export default Hero

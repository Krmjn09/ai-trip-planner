import logo from "../../assets/logo.svg"
import { Button } from "../ui/button"

function Header() {
  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-5">
      <img src={logo} alt="logo" />
      <Button>Sign In</Button>
    </div>
  )
}

export default Header

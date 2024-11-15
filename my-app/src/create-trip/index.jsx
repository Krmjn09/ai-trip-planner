import { Button } from "../components/ui/button"
import { SelectBudgetOptions, SelectTravelList } from "../constants/options"
import { useEffect, useState } from "react"

function Index() {
  const [place, setPlace] = useState(null)
  const [stayDays, setStayDays] = useState(null)
  const [selectedBudget, setSelectedBudget] = useState(null)
  const [selectedTravel, setSelectedTravel] = useState(null)
  const [formData, setFormData] = useState({
    place: null,
    noOfdays: null,
    budget: null,
    travelCompanion: null,
  })

  // Update formData when any input changes
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <div className="p-5 rounded-md bg-white mx-20">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Tell us your Travel Preferences 🚀
      </h1>
      <p className="text-gray-500 text-center mb-4">
        Fill in the details below to create your trip.
      </p>
      <div className="mt-20 flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-4">
            What is the destination of Choice?
          </h2>
          <input
            type="text"
            className="border p-2 w-full rounded-md bg-slate-100"
            placeholder="Enter your destination"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value)
              handleInputChange("place", e.target.value) // Log the input value
            }}
          />
        </div>

        <div className="mt-5">
          <h2 className="text-lg font-semibold mb-4">
            How many days are you planning to stay?
          </h2>
          <input
            type="number"
            className="border p-2 w-full rounded-md bg-slate-100"
            placeholder="Enter the number of days"
            value={stayDays}
            onChange={(e) => {
              setStayDays(e.target.value)
              handleInputChange("noOfdays", e.target.value) // Log the input value
            }}
          />
        </div>
      </div>

      {/* Budget section with horizontal layout */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold mb-4">
          What is your budget for the trip?
        </h2>
        <div className="flex flex-wrap gap-4">
          {SelectBudgetOptions.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedBudget(item.title)
                  handleInputChange("budget", item.title) // Set selected budget
                }}
                className={`flex flex-col items-center gap-2 p-4 border rounded-md bg-gray-50 w-40 hover:shadow-lg cursor-pointer ${
                  selectedBudget === item.title ? "bg-blue-100" : ""
                }`}
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Travel companion section */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold mb-4">
          Who do you want to travel with?
        </h2>
        <div className="flex flex-wrap gap-4">
          {SelectTravelList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedTravel(item.title)
                  handleInputChange("travelCompanion", item.people) // Set selected travel companion
                }}
                className={`flex flex-col items-center gap-2 p-4 border rounded-md bg-gray-50 w-40 hover:shadow-lg cursor-pointer ${
                  selectedTravel === item.title ? "bg-blue-100" : ""
                }`}
              >
                <div className="text-3xl">{item.icon}</div>
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Button to submit the form */}
      <div className="mt-10 flex justify-end">
        <Button onClick={() => console.log(formData)}>Generate Trip</Button>
      </div>
    </div>
  )
}

export default Index

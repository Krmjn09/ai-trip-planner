import { GoogleGenerativeAI } from "@google/generative-ai"
const apiKey = import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
})

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
}

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate travel plan for location : Las Vegas, for 3 Days for couple with a cheap budget , Give me hotels options list with hotels name , hotels address, price ,hotel image url, geo coordinates, rating descriptions and suggest itinerary with placeName, Place Details, Place Image Url , geo Coordinates, ticket Pricing , time t Travel each of the location for 3 days with each day plan  with best time to visit in JSON format\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "tripDetails": {\n    "destination": "Las Vegas, Nevada",\n    "duration": "3 Days",\n    "travelers": "Couple",\n    "budget": "Cheap"\n  },\n  "hotels": [\n    {\n      "name": "Hotel Name 1 (Example: Circus Circus)",\n      "address": "Address 1 (Example: 2880 Las Vegas Blvd S, Las Vegas, NV 89109)",\n      "priceRange": "$50-$100 (per night - approximate)",\n      "imageUrl": "Insert Image URL Here",\n      "geoCoordinates": { "latitude": 36.1291, "longitude": -115.1721 },  //Example coordinates - REPLACE!\n      "rating": "3.5 stars",\n      "description": "A budget-friendly hotel with a circus theme, often offering good value for money. May be slightly dated."\n    },\n    {\n      "name": "Hotel Name 2 (Example: Motel 8)",\n      "address": "Address 2",\n      "priceRange": "$40-$80 (per night - approximate)",\n      "imageUrl": "Insert Image URL Here",\n      "geoCoordinates": { "latitude": 0.0, "longitude": 0.0 }, //REPLACE!\n      "rating": "3 stars",\n      "description": "Basic but clean motel, suitable for budget travelers. Amenities may be limited."\n    },\n    {\n      "name": "Hotel Name 3 (Example:  Budget-friendly Casino Hotel)",\n      "address": "Address 3",\n      "priceRange": "$60-$120 (per night - approximate)",\n      "imageUrl": "Insert Image URL Here",\n      "geoCoordinates": { "latitude": 0.0, "longitude": 0.0 }, //REPLACE!\n      "rating": "3.8 stars",\n      "description": "A casino hotel offering budget rooms;  may have access to casino amenities."\n    }\n\n  ],\n  "itinerary": {\n    "day1": [\n      {\n        "placeName": "Fremont Street Experience",\n        "placeDetails": "Free walking area with light shows and street performers.",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": { "latitude": 0.0, "longitude": 0.0 }, //REPLACE!\n        "ticketPricing": "Free",\n        "timeToTravel": "30 minutes walk from most hotels or a short cab ride"\n      },\n      {\n        "placeName": "Neon Museum",\n        "placeDetails": "Outdoor museum showcasing vintage Las Vegas signs. (Consider ticket purchase online for potential discount)",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": { "latitude": 0.0, "longitude": 0.0 }, //REPLACE!\n        "ticketPricing": "$20-$30 (approximate)",\n        "timeToTravel": "1 hour"\n      }\n    ],\n    "day2": [\n      {\n        "placeName": "The Strip (walk from South to North)",\n        "placeDetails": "Explore the iconic Las Vegas Strip. See Bellagio fountains, walk past various casinos and hotels.",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": { "latitude": 0.0, "longitude": 0.0 }, //REPLACE!\n        "ticketPricing": "Free (unless you enter attractions)",\n        "timeToTravel": "Full Day"\n      }\n    ],\n    "day3": [\n      {\n        "placeName": "Red Rock Canyon National Conservation Area",\n        "placeDetails": "Scenic drive and hiking trails outside of the city.",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": { "latitude": 0.0, "longitude": 0.0 }, //REPLACE!\n        "ticketPricing": "$15 per vehicle (approximate)",\n        "timeToTravel": "Half Day (requires car rental)"\n      },\n      {\n        "placeName": "Downtown Container Park",\n        "placeDetails": "Unique shopping and dining area made from repurposed shipping containers.",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": { "latitude": 0.0, "longitude": 0.0 }, //REPLACE!\n        "ticketPricing": "Free (unless dining/shopping)",\n        "timeToTravel": "2-3 hours"\n      }\n    ]\n  },\n  "bestTimeToVisit": "Avoid peak season (summer, major holidays) for cheaper prices and fewer crowds. Spring and fall offer pleasant weather."\n}\n```\n\nRemember to replace the placeholder information with actual data from your research.  This JSON provides a framework; you\'ll need to customize it to match your preferences and budget.  Consider using public transport or walking as much as possible to reduce expenses.  Happy travels!\n',
        },
      ],
    },
  ],
})

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location}, for {totalDays} Days for {travelers} with a {budget} budget. Give me hotels options list with hotels name, hotels address, price, hotel image url, geo coordinates, rating descriptions and suggest itinerary with placeName, Place Details, Place Image Url, geo Coordinates, ticket Pricing, time to Travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format\n"

"use client"
import NewSocial from "./newSocial";


export default function NewPostContainer() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      
      {/* Post 1 */}
      <NewSocial
        date="16 days ago"
        image="/lake.jpg"
      />

      {/* Post 2 */}
      <NewSocial
        date="16 days ago"
        text="Finally, got the car! 🚗🔥"
        image="/car.jpg"
      />

      {/* Post 3 */}
      <NewSocial
        date="16 days ago"
        text="Hello, Everyone this is my First Post!"
      />
    </div>
  );
}

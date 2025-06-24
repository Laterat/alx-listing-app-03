
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { DEFAULT_IMAGE } from '../constants'

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-[4em]  text-amber-300 font-bold  mb-4">ALX Listing App</h1>
      <Card
        title="Cozy Apartment"
        description="A cozy apartment in the city center."
        imageUrl={DEFAULT_IMAGE}>
        <Button label="Book Now" onClick={() => alert('Booked!')} />
      </Card>
    </div>
  )
}

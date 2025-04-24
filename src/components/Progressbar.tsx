import Button from "./Button";
import VerticalTimelineBar from "./VerticalTimelineBar";


export default function Progressbar() {
  return (
    <div className="min-h-screen bg-black/95">
        <div className="flex text-white space-y-6 flex-col justify-center items-center text-center py-20">
            <div className="flex text-white space-y-6 flex-col justify-center items-center text-center">
                <h4>Your Trusted Dental Practice in Lenzie, Glasgow</h4>
                <h3>Take a look at how far we've come</h3>
                <p>Millersneuk has evolved over the years to become an industry leading cosmetic dental practice.</p>
                <p>We pride ourselves on offering the highest standard of care to all patients.</p>
                <Button/>
            </div>

            <VerticalTimelineBar/>
            <div className="flex text-white space-y-6 flex-col justify-center items-center text-center">
                <h4>Look at us now...</h4>
                <h3>Present Day</h3>
                <p>We continue to build on our reputation for being the go-to dental practice in Scotland for Smile Makeovers, Implants and Facial Aesthetics.
                </p>
                <p>If you're interested in visiting us for a consultation, then please get in touch below:</p>
                <Button/>
            </div>
        </div>
    </div>
  )
}



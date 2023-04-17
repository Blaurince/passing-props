export default function GreetingCard({ firstName }) {
    //const {firstName} = props
    return (
        <div className="GreetingCard">
           <h3>Hello {firstName} !</h3>
        </div>
    )
}
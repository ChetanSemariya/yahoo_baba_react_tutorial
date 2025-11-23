export default function User({channelName, name}) {
    
    return (
        <div>
            <button onClick={() => channelName(name)}>Click me</button>
        </div>
    );
}
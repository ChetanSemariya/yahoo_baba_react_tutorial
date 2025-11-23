function App() {

  const channelName = (name) => {
      alert(name);
  };

  return (
    // Now this alert runs only one time jese hi hum click krenge chahe hum component ko kitni bhi baar call kare, otherwise agar user component mai alert banate to har component ke call pr function run hota jisse memory consume hoti
    <div>
      <User channelName={channelName} name="chetan"/>
      <User channelName={channelName} name="rahul"/>
      <User channelName={channelName} name="ajay"/>
      <User channelName={channelName} name="saurabh"/>
    </div>
  )
}

// User.jsx component
export default function User({channelName, name}) {
    
    return (
        <div>
            <button onClick={() => channelName(name)}>Click me</button>
        </div>
    );
}
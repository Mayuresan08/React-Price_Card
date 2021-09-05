
import './App.css';

function Card(props)
{
  let user= <p><i class="fas fa-check"></i><b>{props.user}</b></p>
  let storage= <p><i class="fas fa-check"></i>{props.storage}</p>
  let uprojects=<p><i class="fas fa-check"></i>Unlimited Public Projects</p>
  let caccess=<p><i class="fas fa-check"></i>Community access</p>
  let privatePro ;
  if(props.private) privatePro=<p><i class="fas fa-check"></i>Unlimited Private Projects</p>
  else privatePro=<p class="muted"><i class="fas fa-times"></i>Unlimited Private Projects</p>
  let phone;
  if(props.phone) phone=<p><i class="fas fa-check"></i>Dedicated Phone Support</p>
  else phone=<p class="muted"><i class="fas fa-times"></i>Dedicated Phone Support</p>
  let domain=props.domain
  if(props.domain) domain=<p><i class="fas fa-check"></i><b>{domain}</b> Free Subdomain</p>
  else domain=<p class="muted"><i class="fas fa-times"></i>Free Subdomain</p>
  let report;
  if(props.report) report=<p><i class="fas fa-check"></i>Monthly Status Reports</p>
  else report=<p class="muted"><i class="fas fa-times"></i>Monthly Status Reports</p>
  return(
    <div className="card">
        <div className="header"><p>{props.cardType}</p></div>
        <div className="price"><h1>$0<span className="smallPrice">/month</span></h1></div>
        <hr/>
        <ul>
          <li>{user}</li>
          <li>{storage}</li>
          <li>{uprojects}</li>
          <li>{caccess}</li>
          <li>{privatePro}</li>
          <li>{phone}</li>
          <li>{domain}</li>
          <li>{report}</li>
        </ul>
      <button className="button">Button</button>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <div className="outerContainer">
        <Card cardType="F R E E" user="Single User" storage="5GB Storage"  private={false} phone={false} domain={false} report={false} />
        <Card cardType="P L U S" user="5 Users" storage="50GB Storage"  private={true} phone={true} domain={true}  report={false}/>
        <Card cardType="P R O" user="Unlimited Users" storage="150GB Storage"  private={true} phone={true} domain="unlimited"  report={true}/>
      </div>
    </div>
  );
}
export default App;

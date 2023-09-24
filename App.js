import './App.css'
import Button from "./components/Button"
import Avatar from "./components/Avatar"

//  const arr = [1,2,3,4,5]
//  const input = arr.map(list => list  2)
//  console.log(input) 
 

const user = [
  {
    id:1,
    Avatar_Url: "https://media-content.ccbp.in/ccbp_prod/media/profile_pic/29097ddd-6bb3-4f10-84cd-f0f58ba6e839.jpeg",
    name: "Madhu Sudhon Hari",
  },
  {
    id:2,
    Avatar_Url: "https://media-content.ccbp.in/ccbp_prod/media/profile_pic/29097ddd-6bb3-4f10-84cd-f0f58ba6e839.jpeg",
    name: "Madhu Bali",
  },
]

const useravatarList = user.map((user=>{
  return(
    <Avatar src={user.Avatar_Url} name={user.name} key={user.id} />
  );

}))
// console.log(useravatarList)

function App(){
  return(
    <div className='profile-container'>
       <h1>Profile List</h1>
      <ul className='Avatar-container'>{useravatarList}</ul>
      <div>
      <Button text ="Button 1" onClick={()=> alert("Button1")} />
      <Button text ="Button 2" onClick ={()=> console.log("Button2")} />
      </div>
    </div>
  )
}

export default App
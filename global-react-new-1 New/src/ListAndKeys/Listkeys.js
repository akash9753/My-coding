import '../App.css';
function Listkeys() {
    const arr = [1, 2, 3, 4, 5, 6]
    const newArr = arr.map((num, index) => {
        console.log("num :", num);
        return <li key={index}>{num * 2}</li>
    })
    console.log("OldArr :", arr);
    console.log("newArr :", newArr);
    return (
        <div>
            <ul>{newArr}</ul>
        </div>

    )
}
//iterating array using props
// function sort(props){
//     // const arr = [1, 2, 3, 4, 5, 6, 7,8]
//     const arr = props.arr;
//     return (
//         <div>
//            <ul>
//                {/* {arr.map(num =>{
//                    return <li>{num}</li>
//                })} */}
//                {arr.map(num => <li>{num}</li>)}
//            </ul>
//         </div>
//     )
// }
// export default sort;

//iterating array using state
function UsingSatae() {

    const state = {
        users: [
            { id: 101, name: "rahul", passowrd: "3423ssdf" },
            { id: 102, name: "rahul", passowrd: "3423ssdf" },
            { id: 103, name: "rahul", passowrd: "3423ssdf" },
            { id: 104, name: "rahul", passowrd: "3423ssdf" },
        ],
        isLoggedIn: false
    }
    let newUsers = state
    return (

        <div>
            {newUsers.users.map((user,index) => <h1 key={index}>{index} Id :  {user.id} Name: {user.name} passowrd: {user.passowrd}</h1>)}
        </div>
    )
}
export default UsingSatae;


// function Listkeys() {
//     const arr = [1, 2, 3, 4, 5, 6]
//     const newArr = arr.map((num, index) => {
//         console.log("num :", num);
//         return <li key={index}>{num * 2}</li>
//     })
//     console.log("OldArr :", arr);
//     console.log("newArr :", newArr);
//     return (
//           <div>
//              <ul>{newArr}</ul>
//         </div>

//     )
// }

// export default Listkeys;



// function Listkeys() {
//     // const numbers = [1, 2, 3, 4, 5, 6]
//     const users = [
//         {name:"saan", passion:"cricket"},
//         {name:"akash", passion:"kho kho"},
//         {name:"bhupendra", passion:"kabaddi"},
//         {name:"ashok", passion:"dancing"}
//     ]
//     return (
//         <div>
//             {/* <div>{users.map((user, index) =>  <h1 key={user}>{user.name} {user.passion}</h1>)}</div> key error */}
//             <div>{users.map((user, index) =>  <h1 key={index}> {index} {user.name} {user.passion}</h1>)}</div>
//         </div>
//     )
// }

// return (
//     <div>
//         <div>{numbers.map((n) =>  <h1 key={n}>{n}</h1>)}</div>
//     </div>
// )


{/* <div>{numbers.map((n, index) => {
                return <h1>{n}</h1>
              })}
            </div> */}


{/* <div>
            <div>{numbers.map((n, index) => {
                return <h1>{n}</h1>
                // if (n % 2 === 0) {
                //     return <h1>{n}</h1>
                // } else {
                //     return null
                // }
            })}
            </div>
        </div> */}
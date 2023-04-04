// import './index.css'

// const PasswordItem = props => {
//   const {PasswordDetails, showPassword, deletePassword} = props
//   const {id, website, username, password} = PasswordDetails
//   const firstLetter = website.slice(0, 1)
//   const show = showPassword ? (
//     <p className="item">{password}</p>
//   ) : (
//     <img
//       src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
//       alt="stars"
//       className="star"
//     />
//   )

//   const onChange = () => {
//     deletePassword(id)
//   }
//   return (
//     <li className="password-item">
//       <div className="con">
//         <div className="circle">{firstLetter}</div>
//         <div className="text-con">
//           <p className="item">{website}</p>
//           <p className="item">{username}</p>
//           {show}
//         </div>
//       </div>
//       <div className="btn-con">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
//           className="delete-btn"
//           alt="delete"
//           onClick={onChange}
//         />
//       </div>
//     </li>
//   )
// }
// export default PasswordItem
const PasswordItem = props => {
  const profileColors = [
    '#7683cb',
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#14b8a6',
    '#b91c1c',
    '#0ea5e9',
  ]
  const profilePicColor = profileColors[Math.floor(Math.random()) * 10 - 4]
  const {record, deletePasswordRecord, showPassword} = props
  const {id, url, name, password} = record

  const passwordPattern = showPassword ? (
    <p className="website-text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-icon"
    />
  )

  const deleteItem = () => {
    deletePasswordRecord(id)
  }

  return (
    <li className="password-item">
      <div className="circle" style={{background: {profilePicColor}}}>
        {name.charAt(0)}
      </div>
      <div className="details-container">
        <p className="website-text">{url}</p>
        <p className="website-text">{name}</p>
        {passwordPattern}
      </div>
      <button type="button" onClick={deleteItem} className="delete-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordItem

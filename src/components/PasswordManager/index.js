// import {Component} from 'react'

// import {v4 as uuidv4} from 'uuid'

// import PasswordItem from '../PasswordItem'
// import './index.css'

// class PasswordManager extends Component {
//   state = {
//     passwordRecord: [],
//     inputUrl: '',
//     inputName: '',
//     inputPassword: '',
//     searchInput: '',
//     showPassword: false,
//   }

//   getUrl = event => {
//     this.setState({inputUrl: event.target.value})
//   }

//   getName = event => {
//     this.setState({inputName: event.target.value})
//   }

//   getPassword = event => {
//     this.setState({inputPassword: event.target.value})
//   }

//   getSearch = event => {
//     this.setState({searchInput: event.target.value})
//   }

//   onShowPassword = () => {
//     this.setState(prevState => ({showPassword: !prevState.showPassword}))
//     console.log('yes')
//   }

//   deletePassword = id => {
//     const {passwordRecord} = this.state
//     const filteredPassword = passwordRecord.filter(each => each.id !== id)

//     this.setState({passwordRecord: filteredPassword})
//   }

//   addPasswordtoRecord = event => {
//     event.preventDefault()
//     const {inputUrl, inputName, inputPassword} = this.state
//     const newPassword = {
//       id: uuidv4(),
//       website: inputUrl,
//       username: inputName,
//       password: inputPassword,
//     }
//     this.setState(prevState => ({
//       passwordRecord: [...prevState.passwordRecord, newPassword],
//     }))
//   }

//   getSearchPassword = () => {
//     const {searchInput} = this.state
//     const {passwordRecord} = this.state
//     return passwordRecord.filter(each =>
//       each.website.toLowerCase().includes(searchInput.toLowerCase()),
//     )
//   }

//   render() {
//     const {
//       inputUrl,
//       inputName,
//       inputPassword,
//       passwordRecord,
//       searchInput,
//     } = this.state
//     const searchResult = this.getSearchPassword()

//     return (
//       <div className="main-bg">
//         <div className="header-con">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
//             alt="app logo"
//             className="header-logo"
//           />
//         </div>
//         <form className="password-input-con">
//           <div className="password-input-form">
//             <h1 className="heading">Add New Password</h1>
//             <div className="password-item-con">
//               <div>
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
//                   alt="website"
//                   className="logo"
//                 />
//               </div>

//               <input
//                 type="text"
//                 placeholder="Enter Website"
//                 className="item-input"
//                 onChange={this.getUrl}
//                 value={inputUrl}
//               />
//             </div>
//             <div className="password-item-con">
//               <div>
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
//                   alt="username"
//                   className="logo"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Enter Website"
//                 className="item-input"
//                 onChange={this.getName}
//                 value={inputName}
//               />
//             </div>
//             <div className="password-item-con">
//               <div>
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
//                   alt="password"
//                   className="logo"
//                 />
//               </div>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 className="item-input"
//                 onChange={this.getPassword}
//                 value={inputPassword}
//               />
//             </div>
//             <div className="add-btn-con">
//               <button
//                 type="submit"
//                 className="btn"
//                 onClick={this.addPasswordtoRecord}
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
//             alt="password manager"
//             className="password-manager-img"
//           />
//         </form>

//         <div className="password-store-con">
//           <div className="header-store-con">
//             <h1 className="heading">Your Passwords {passwordRecord.length}</h1>
//             <div className="password-search-con">
//               <div>
//                 <img
//                   src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
//                   alt="search"
//                   className="logo"
//                 />
//               </div>

//               <input
//                 type="search"
//                 placeholder="Enter Website"
//                 className="item-input"
//                 onChange={this.getSearch}
//                 value={searchInput}
//               />
//             </div>
//           </div>
//           <hr />
//           <div className="password-check-con">
//             <input
//               type="checkbox"
//               className="checkbox"
//               id="checkbox"
//               onChange={this.onShowPassword}
//             />
//             <label htmlFor="checkbox" className="check-box-lable">
//               Show Passwords
//             </label>
//           </div>
//           {searchResult.length !== 0 ? (
//             <ul className="ul">
//               {searchResult.map(each => (
//                 <PasswordItem
//                   PasswordDetails={each}
//                   key={each.id}
//                   deletePassword={this.deletePassword}
//                 />
//               ))}
//             </ul>
//           ) : (
//             <div className="no-password-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
//                 alt="no passwords"
//                 className="no-passwords-image"
//               />
//               <p className="no-passwords-title">No Passwords</p>
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   }
// }
// export default PasswordManager

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    passwordRecords: [],
    inputUrl: '',
    inputName: '',
    inputPassword: '',
    searchInput: '',
    showPassword: false,
  }

  deletePasswordRecord = id => {
    const {passwordRecords} = this.state
    const filteredPasswordRecords = passwordRecords.filter(e => e.id !== id)

    this.setState({passwordRecords: filteredPasswordRecords})
  }

  getSearchRecords = () => {
    const {passwordRecords, searchInput} = this.state

    return passwordRecords.filter(eachRecord =>
      eachRecord.url.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  onInputUrlChange = e => {
    this.setState({inputUrl: e.target.value})
  }

  onSearchChange = e => {
    this.setState({searchInput: e.target.value})
  }

  onInputNameChange = e => {
    this.setState({inputName: e.target.value})
  }

  onInputPasswordChange = e => {
    this.setState({inputPassword: e.target.value})
  }

  onCheckChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  addPasswordRecord = e => {
    e.preventDefault()
    console.log('in ad ')
    const {inputUrl, inputName, inputPassword} = this.state
    const newPasswordRecord = {
      id: uuidv4(),
      url: inputUrl,
      name: inputName,
      password: inputPassword,
    }
    this.setState(prevState => ({
      passwordRecords: [...prevState.passwordRecords, newPasswordRecord],
      inputUrl: '',
      inputName: '',
      inputPassword: '',
    }))
  }

  render() {
    const {showPassword} = this.state
    const searchResults = this.getSearchRecords()
    console.log(this.state, searchResults)

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="app-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </div>
          <div className="card-container manager-container">
            <img
              src=" https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="manager-image"
            />
            <div className="card form-container">
              <form
                className="card-responsive"
                onSubmit={this.addPasswordRecord}
              >
                <h1 className="form-heading">Add New Password</h1>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                    />
                  </div>

                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.onInputUrlChange}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                    />
                  </div>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.onInputNameChange}
                  />
                </div>
                <div className="input-container">
                  <div className="icon-container">
                    <img
                      className="input-icon"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                  </div>
                  <input
                    className="input"
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.onInputPasswordChange}
                  />
                </div>
                <div className="btn-container">
                  <button
                    className="add-btn"
                    type="submit"
                    onClick={this.addPasswordRecord}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card-container">
            <div className="card-responsive no-password-container">
              <div className="passwords-header">
                <h1 className="passwords-header-title">
                  Your Passwords
                  <p className="results-count"> {searchResults.length}</p>
                </h1>
                <div className="search-container">
                  <div className="search-icon-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                      alt="search"
                      className="search-icon"
                    />
                  </div>
                  <input
                    className="search-input"
                    type="search"
                    placeholder="Search"
                    onChange={this.onSearchChange}
                  />
                </div>
              </div>
              <hr className="hr-line" />
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  id="checkbox"
                  onChange={this.onCheckChange}
                />
                <label htmlFor="checkbox" className="checkbox-label">
                  Show Passwords
                </label>
              </div>
              {searchResults.length !== 0 ? (
                <ul className="passwords-list-container">
                  {searchResults.map(eachRecord => (
                    <PasswordItem
                      key={eachRecord.id}
                      record={eachRecord}
                      deletePasswordRecord={this.deletePasswordRecord}
                      showPassword={showPassword}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-password-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-passwords-image"
                  />
                  <p className="no-passwords-title">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager

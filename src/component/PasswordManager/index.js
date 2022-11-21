import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    passwordsList: [],
    isChecked: false,
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const updateList = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: updateList})
  }

  renderNoPasswordView = () => (
    <div className="no-password-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        className="no-password"
        alt="no passwords"
      />
      <p className="text">No Passwords</p>
    </div>
  )

  renderPasswordsList = (updateList, isChecked) =>
    updateList.map(eachPassword => (
      <PasswordItem
        key={eachPassword.id}
        passwordDetails={eachPassword}
        deletePassword={this.deletePassword}
        isChecked={isChecked}
      />
    ))

  onSubmitNewPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const newPassword = {
      id: v4(),
      website: websiteInput,
      name: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  updateSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      passwordsList,
      isChecked,
    } = this.state

    const updateList = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = updateList.length

    return (
      <div className="app-container">
        <div className="password-manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-background-container">
            <form
              className="password-container"
              onSubmit={this.onSubmitNewPassword}
            >
              <h1 className="new-password-heading">Add New Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Website"
                  value={websiteInput}
                  onChange={this.onChangeWebsiteInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-logo"
                />
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Username"
                  value={usernameInput}
                  onChange={this.onChangeUsernameInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-logo"
                />
                <input
                  className="input"
                  type="password"
                  placeholder="Enter Password"
                  value={passwordInput}
                  onChange={this.onChangePasswordInput}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-sm-img"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-lg-img"
            />
          </div>
          <div className="password-list-items-container">
            <div className="count-and-search-container">
              <div className="password-length-container">
                <h1 className="password-count-heading">Your Passwords</h1>
                <p className="password-count">{passwordsList.length}</p>
              </div>
              <div className="search-container">
                <div className="search-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="input-logo"
                  />
                </div>
                <input
                  className="search-input"
                  type="search"
                  placeholder="search"
                  onChange={this.updateSearchList}
                />
              </div>
            </div>
            <hr className="hr-line" />
            <div className="label-container">
              <input
                type="checkbox"
                checked={isChecked}
                id="checkbox"
                className="checkbox"
                onChange={this.onChecked}
              />
              <label className="label" htmlFor="checkbox">
                Show passwords
              </label>
            </div>
            <ul className="password-list-container">
              {count === 0
                ? this.renderNoPasswordView()
                : this.renderPasswordsList(updateList, isChecked)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager

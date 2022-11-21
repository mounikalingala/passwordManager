import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword, isChecked} = props
  const {id, website, name, password} = passwordDetails
  const showOrHide = isChecked ? (
    <p className="password-text">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      className="stars"
      alt="stars"
    />
  )

  const onClickDelete = () => {
    deletePassword(id)
  }

  return (
    <li className="password-item-container">
      <div className="password-container">
        <div className="initial-container">
          <p className="initial">{name[0].toUpperCase()}</p>
        </div>
        <div className="password-delete-container">
          <div className="password-details-container">
            <p className="web-text">{website}</p>
            <p className="name-text">{name}</p>
            {showOrHide}
            {showOrHide}&&<p>password provided</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={onClickDelete}
            testId="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              className="delete-icon"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default PasswordItem

function IconSwitch({ icon, onSwitch }) {
  return (
    <div role="button" className="onSwitch" onClick={onSwitch}>
      <span className="material-icons">
        {icon}
      </span>
    </div>
  )
}

export default IconSwitch;
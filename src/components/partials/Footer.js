const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="footer-wrapper">
      <div className="footer-inner">
        <p>&copy;{year}</p>
      </div>
    </div>
  )
}

export default Footer

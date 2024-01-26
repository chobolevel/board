const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <div>
        <p>&copy;{year}</p>
      </div>
    </div>
  )
}

export default Footer

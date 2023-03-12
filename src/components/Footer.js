const Footer = () => {
  const today = new Date();
  return (
      <footer className='Footer text-center bg-dark text-light container-fluid pt-3 '>
          <p>Copyright &copy; {today.getFullYear()}</p>
      </footer>
  )
}

export default Footer
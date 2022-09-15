const Header = ({user}) => {
  return (
    <header>
        <h1>Semester planner</h1>
        <h2> Hello, {user}!</h2>
    </header>
  )
};

Header.defaultProps = {
  user: 'user'
}

export default Header

import githubLogo from '../assets/github.svg'

function Header() {
    return (
        <header className="header yellow accent-4">
            <div className="container">
                <h1 className="header_title">React Movies DB</h1>
                <a className='header_logo' href="https://github.com/lilith6lamber/movieDB_react">
                    <img src={githubLogo} alt="Github"/>
                </a>
            </div>
        </header>
    )
}

export default Header;
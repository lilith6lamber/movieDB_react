function Footer() {
    return (
        <footer className='footer light-green lighten-1'>
            <div className="container">
                <p className="footer_copyright">
                    &copy; {new Date().getFullYear()} Copyright Text
                </p>
            </div>
        </footer>
    )
}

export default Footer;
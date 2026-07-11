import Menu from './Menu';

const Header = () => {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container text-center">
                <h1 className="h3 mb-0">Proyecto One React</h1>
                <Menu />
            </div>
        </header>
    );
};

export default Header;
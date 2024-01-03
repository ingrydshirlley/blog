import { IoSearch } from "react-icons/io5";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <h2> Codelândia </h2>
                <h2> blog </h2>
            </div>

            <div className="label">
                <label><span><IoSearch /> <span>Pesquisar no blog</span></span></label>
            </div>
        </header>
    );
}
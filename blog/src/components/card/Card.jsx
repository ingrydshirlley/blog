import { FaRegHeart } from "react-icons/fa";

export default function Card(props) {
    return (
        <article>
            <div>
                <div> {props.data} <span><FaRegHeart /></span> </div>
                <h2> {props.title} </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum vestibulum auctor est. Nam vitae finibus ante.
                    Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                </p>
            </div>
        </article>
    );
}
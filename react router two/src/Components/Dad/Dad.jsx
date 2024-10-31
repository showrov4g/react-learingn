import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = ({assets}) => {
    return (
        <div>
            <h1>Dad</h1>
            <section className="flex">
                <MySelf assets={assets}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;
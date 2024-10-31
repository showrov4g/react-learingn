import Cousin from "../Cousin/Cousin";

const Uncle = ({assets}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={"Topu"} assets={assets}></Cousin>
                <Cousin name={"Apu"} assets={assets}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1 className="text-7xl font-bold">Oops!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status ===404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back to your previous page</p>
                    <Link to="/"><button className="btn btn-primary">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;
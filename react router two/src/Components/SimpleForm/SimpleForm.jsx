const SimpleForm = () => {
    const handleSimpleForm =(e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log("Submit Form");
    }
    return (

        <div>
            <form onSubmit={handleSimpleForm}> 
                <input type="text" name="name"/>
                <br />
                <input type="email" id="" name="email" />
                <br />
                <input type="submit" value={'submit'}/>
            </form>
        </div>
    );
};

export default SimpleForm;
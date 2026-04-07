export default function Form(){

    function signup(formData){
        // const email = formData.get("email")
        // console.log(email)
        // const password = formData.get("password")
        // console.log(password)

        // const status = formData.get("status")
        // console.log(status)

        // const checkboxStatus = formData.getAll("checkboxStatus")
        // console.log(checkboxStatus)

        const data = Object.fromEntries(formData)
        const checkboxData = formData.getAll("checkboxStatus")

        const allData = {
            ...data, "checkboxData": checkboxData
        }

        console.log(allData)

    }

    return(<section>
        <h1>Sign up</h1>
        <form action={signup} >
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" defaultValue="joo@gmail.com"/>
            <br/>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password"  defaultValue="joo@gmail.com"/>
            <br/>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" >hello World</textarea>
            <br/>
            <label>
                <input type="radio" name="status" value="1"/>Label 1
                <input type="radio" name="status" value="2"/>Label 2
                <input type="radio" name="status" value="3"/>Label 3
            </label>
            
            <br/>
            <label>
                <input type="checkbox" name="checkboxStatus" value="1"/>Checkbox 1
                <input type="checkbox" name="checkboxStatus" value="2"/>Checkbox  2
                <input type="checkbox" name="checkboxStatus" value="3"/>Checkbox  3
            </label>
            
            <br/>
            <button>Submit</button>
        </form>
    </section>)
}
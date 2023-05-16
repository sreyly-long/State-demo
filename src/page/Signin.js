export default function Signin() {
    return (
        <div className="container">
            <form>
            <img className="mb-4" src={"https://blog.getbootstrap.com/assets/brand/bootstrap-logo-shadow.png"} alt="" width={72} height={57} />
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
               
        </form>

        </div>
        
    )
}
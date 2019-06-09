import {
    AuthSignService
} from './../services/authsign.service'

export class SignUpComponent {
    constructor() {
        this._authSignService = new AuthSignService()
    }
    render() {
        return `
        <div class="auth-wrap d-flex mt-5">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>Sign up</h3>
                <p class="text-secondary">Enter the information to registrate to your Social account.</p>
                <form name="registrationForm" novalidate>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="enter the email: name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="enter the password" required data-pattern="\S+">
                        <input class="form-control nick-name" type="text" id="nickname" placeholder="Nick Name">
                        <input class="form-control first-name" type="text" id="first_name" placeholder="Nick Name">
                        <input class="form-control last-name" type="text" id="last_name" placeholder="Nick Name">
                        <input class="form-control" type="text" id="phone" placeholder="Phone number">
                        <input type="radio" name="gender_orientation" value="male"> Male
                        <input type="radio" name="gender_orientation" value="female"> Female
                        <input class="form-control" type="text" id="city" placeholder="Enter your city">
                        <input class="form-control" type="text" id="country" placeholder="Enter your country">
                        <input type="date_of_birth_day" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="enter the date of birth day" required data-pattern="\S+">
                        <input type="date_of_birth_month" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="enter the date of birth month" required data-pattern="\S+">
                        <input type="date_of_birth_year" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="enter the date of birth year" required data-pattern="\S+">
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="auth-bg col col-6"></div>
        </div>
        `;
    }

    afterRender() {
        document.forms['registrationForm'].addEventListener('submit', (e) => {
            e.preventDefault()

            const email = e.target.elements['email'].value
            const password = e.target.elements['password'].value
            const nickname = e.target.elements['nickname'].value
            const first_name = e.target.elements['first_name'].value
            const last_name = e.target.elements['last_name'].value
            const phone = e.target.elements['phone'].value
            const gender_orientation = e.target.elements['gender_orientation'].value
            const city = e.target.elements['city'].value
            const country = e.target.elements['country'].value
            const date_of_birth_day = e.target.elements['date_of_birth_day'].value
            const date_of_birth_month = e.target.elements['date_of_birth_month'].value
            const date_of_birth_year = e.target.elements['date_of_birth_year'].value
            

            if (!email || !password || !nickname || !first_name || !last_name || !phone || !gender_orientation || !city || !country || !date_of_birth_day || !date_of_birth_month || !date_of_birth_year ) return;

            this._authSignService.signup({email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year}).then((res) => {
                console.log('Login ok -> ', res)
            }).catch((err) => console.log('Login error -> ', err))
        })
    }
}
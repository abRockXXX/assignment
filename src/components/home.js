import React from 'react'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',//INITIALIZE STATE
            mobile: ''
        }
    }
    //UPDATE STATE AS PER INPUT
    emailInput = (e) => {
        this.setState({ email: e.target.value })
    }
    //UPDATE STATE AS PER INPUT
    mobileInput = (e) => {
        if (this.state.mobile.length < 10) {
            this.setState({ mobile: e.target.value })
        }else{
            alert('max no length is 10')
        }
    }
    //VALIDATE FUNCTION
    validate = () => {
        if (this.state.email === '') {//CHECK EMAIL IS EMPTY
            return ' please fill the email'
        }
        // else if (this.state.email.indexOf('gmail') < 0) {
        //     return 'please fill the correct email'
        // }
        else if (this.state.mobile === '') {//CHECK MOBILE FIELD IS EMPTY
            return 'please fill mobile no'
        } else if (this.state.mobile.length < 10) {//CHECK LENGTH 
            return 'please fill the 10 digit mobile no'
        }
        return true //RETURN TRUE IF ALL VALIDATION CLEAR
    }
    onSubmit = () => {//ON SUBMIT BTN CLICK HANDLER
        let validateRes = this.validate() //CHECK FOR VALIDATION
        if (validateRes === true) {//IF DONT HAVE VALIDATION ERROR
            console.log({ email: this.state.email, mobile: this.state.mobile })
            this.setState({ mobile: '', email: '' })
        }
        else {//ALERT THE LOG FOR VLIDATION
            alert(validateRes)
        }

    }

    render() {
        return (
            <>
                <>
                    <input value={this.state.email} placeholder={'email'} onChange={this.emailInput} ></input>
                    <input type='number' value={this.state.mobile} placeholder={'mobile'} onChange={this.mobileInput} ></input>
                </>
                <>
                    <button onClick={this.onSubmit} >Submit</button>
                </>
            </>
        )
    }
}
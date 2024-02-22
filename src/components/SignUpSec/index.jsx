import  './style.scss'

const SignUpSec = () => {
  return (
    <section className='signUp'>
        <div className="txt-sec">
            <h1>Sign up to the newsletter</h1>
            <p>Sign up to our newsletter to receive discounts, offers, and early access to sale, and whole lot of other fun things.</p>
        </div>
        <div className="inpt-sec">
            <input type="text" placeholder='Whats your email address?'/>
            <button>Subscribe</button>
        </div>
        
    </section>
  )
}

export default SignUpSec
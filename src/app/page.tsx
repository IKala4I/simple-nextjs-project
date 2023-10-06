import Image from 'next/image'

export default function Home() {
    return (
        <div>
          <div>
            <h1>Enter Your Name</h1>
          </div>
          <div>
            <form action="#">
              <input type="text" placeholder={'Type your name...'}/>
            </form>
          </div>
        </div>
    )
}

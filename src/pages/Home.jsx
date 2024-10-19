import Hero from "../components/Hero"
import Wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-116px)] relative">
            <Hero></Hero>

            <img className="absolute bottom-0 w-full" src={Wave} alt="" />
        </div>
    )
}

export default Home

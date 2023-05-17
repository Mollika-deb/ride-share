import Benifit from '@/Components/Benifit/Benifit'
import Footer from '@/Components/Footer/Footer'
import Form from '@/Components/Form/Form'
import Hero from '@/Components/Hero/Hero'
import Navbar from '@/Components/Navbar/Navbar'
import Work from '@/Components/Work/Work'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Form></Form>
      <Work></Work>
      <Benifit></Benifit>
      <Footer></Footer>
    </div>
  )
}

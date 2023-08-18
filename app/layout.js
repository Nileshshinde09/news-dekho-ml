import './globals.css'
import Nav from './components/nav'
import { Providers } from "@/app/redux/provider";
export const metadata = {
  title: 'Newsदेखो'
  
} 

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <body className="bg-zinc-100 no-scrollbar">
        <div className='sm:mb-[5rem] mb-[7.5rem]'>
        <Nav/>
        </div>
        <Providers>{children}</Providers>
        </body>
    </html>
  )
}

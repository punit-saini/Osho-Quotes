import React from "react"
import { ReactDOM } from "react"

export default function Main(props){
    const [quoteNum, setQuoteNum] = React.useState(0)
    const [themeNum, setThemeNum]= React.useState(0)
    let h1Style = "h-64 w-5/6 mx-auto font-bold text-xl text-white font-abreto italic text-center mt-40 mb-16"
    let h3Style = `text-base drop-shadow-[0_1px_16px_rgba(214,219,227,0.5)] cursor-pointer rounded-3xl mb-16 py-2 px-2 font-abreto text-white font-bold tracking-wider hover:drop-shadow-[0_1px_10px_rgba(214,219,227,0.2)] transition-all w-24 text-center mx-auto`
    console.log('color should be ' + props.themes[themeNum].first)
    function changer(){
        setQuoteNum((prevQuoteNum)=>{
            if(prevQuoteNum+1>=props.quotes.length){
                return 0
            }
            return prevQuoteNum +1
        })
        // setTheme
        setThemeNum((prevThemeNum)=>{
            let randomNum=Math.floor((Math.random()*props.themes.length));
            while(prevThemeNum==randomNum){
                randomNum=Math.floor((Math.random()*props.themes.length));
            }
            console.log('random num is : ' + randomNum)
            console.log(props.themes.length + 'is length')
            return randomNum
        })
    }
            
    return  <div style={{backgroundColor : '#'+props.themes[themeNum].first}} className="h-screen lg:w-1/3 lg:h-auto mx-auto pb-2 lg:mt-8 rounded-lg">
                  <header className="flex justify-center w-5/6 mx-auto pt-6">
                    <a className="w-32" href="#"><img alt="osho-quotes-logo" className="" src="./logo.png" /></a>
                    {/* <h3 style={{'background' : `linear-gradient(180deg, #${props.themes[themeNum].first} 0%, #${props.themes[themeNum].second} 100%)`, display: "none"}}  className="drop-shadow-[0_1px_16px_rgba(214,219,227,0.5)] rounded-3xl py-1 px-2 font-abreto text-white font-bold tracking-wider text-sm hover:drop-shadow-[0_1px_10px_rgba(214,219,227,0.2)] transition-all pl-3">Add  <span className=" font-abreto text-lg border-transparent rounded-full px-1 bg-[#0000004e]">+</span></h3> */}
                  </header>
                    <main>
                    <h1 className={h1Style}><span>"</span>
                        {props.quotes[quoteNum].quote}
                    <span>"</span></h1>
                    <h3 style={{'background' : `linear-gradient(45deg, #${props.themes[themeNum].first} 0%, #${props.themes[themeNum].second} 100%)`}} className={h3Style} onClick={changer}> {quoteNum==props.quotes.length-1? 'Show Again' : 'Next'}</h3>
                    </main>
           </div>
} 


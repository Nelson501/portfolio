import { CardBootstrap } from "./pages/Cards/CardBootstrap"
import { CardJavaScript } from "./pages/Cards/CardJavaScript"
import { CardPython } from "./pages/Cards/CardPython"
import { CardReact } from "./pages/Cards/CardReact"
import { CardTypeScript } from "./pages/Cards/CardTypescript"
import { CardCss } from "./pages/Cards/Cardcss"
import { CardHtml } from "./pages/Cards/Cardhtml"
import { Cardtailwind } from "./pages/Cards/Cardtailwind"

export const Card = ()=>{
    return<div className="grid grid-cols-2 text-white gap-8 font-serif">
    <CardHtml/>
    <CardCss/>
    <CardBootstrap/>
    <Cardtailwind/>
    <CardTypeScript/>
    <CardJavaScript/>
    <CardReact/>
    <CardPython/>

    </div>
}
import { MdAlternateEmail } from "react-icons/md";

function Button(props) {
    return (
        <div className="w-44">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <div className="p-1 bg-green-400 w-auto h-10 rounded-xl flex items-center justify-center text-base transition-all hover:bg-zinc-800 hover:text-green-400">
                    {props.title}
                </div>
            </a>
        </div>
    )
}

export default function Footer() {

    var links = {
        'Email': 'mailto:robsonpvh07@gmail.com?subject=Vim%20pelo%20Portifolio&body=Ola%20Robson%2C%20Vim%20Pelo%20Portifolio',
    }

    return (
        <div className="h-full py-10 flex flex-col items-center justify-center bg-zinc-400/85">
            <p className="text-xl">Fale comigo pelo Email:</p>
            <div className="flex flex-row items-center gap-3 mt-1">
                <MdAlternateEmail size={35}/>
                <Button link={links.Email} title='Enviar Email'/>
            </div>
        </div>
    )
}